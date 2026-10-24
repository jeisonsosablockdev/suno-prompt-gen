/**
 * Suno 4D Musical & Prompt Quality Rubric Engine
 * Evaluates Suno tracks deterministically in < 2ms:
 *  - D1: Style Prompt Density & Character Limits (<= 200 chars)
 *  - D2: Structural Metatag Syntax & Arrangement ([Verse], [Chorus], [Drop])
 *  - D3: Lyrical Syllabic Cadence & Rhyme Balance
 *  - D4: Lexical Hygiene (Zero banned artist names, zero {{...}} variables, zero AI clichés)
 *
 * Threshold: >= 8.5 / 10.0 (or normalized to 9.0 for SDD lifecycle)
 *
 * @spec SPEC-SUNO-004 (Suno Deterministic Evaluators)
 */

import { scanAndRemediateArtists, scanUnresolvedVariables } from './lexical-filter.ts';
import { scanCliches } from './anti-cliche-filter.ts';

export interface SunoPromptEvaluationInput {
  stylePrompt: string;
  lyricsWithMetatags: string;
  artistSlug?: string;
  epSlug?: string;
  targetBpm?: number;
}

export interface SunoRubricDimensions {
  stylePromptQuality: number;      // Max 2.5
  metatagStructure: number;        // Max 2.5
  lyricalCadence: number;          // Max 2.5
  lexicalHygiene: number;          // Max 2.5
}

export interface SunoRubricReport {
  totalScore: number;              // Scale 0 to 10
  passed: boolean;                 // >= 8.5
  threshold: number;
  dimensions: SunoRubricDimensions;
  observations: string[];
  remediationDirectives: string[];
  metrics: {
    stylePromptLength: number;
    tagCount: number;
    metatagCount: number;
    verseCount: number;
    hasChorus: boolean;
    bannedArtistsCount: number;
    unresolvedVariablesCount: number;
    clichesCount: number;
  };
}

export const SUNO_QUALITY_THRESHOLD = 8.5;
export const MAX_STYLE_PROMPT_LENGTH = 200;

export const VALID_METATAG_REGEX = /\[\s*(Intro|Verse\s*\d*|Pre-Chorus|Chorus|Hook|Bridge|Drop|Beat Drop|Build-up\s*\d*|Instrumental Break|Breakdown|Solo|Outro|Fade Out|Climax Drop|End)(?::\s*[^\]]+)?\s*\]/gi;

/**
 * Estimación rápida de sílabas fonéticas para español e inglés
 */
export function estimateSyllables(text: string): number {
  const cleaned = text.toLowerCase().replace(/[^a-záéíóúñ]/g, ' ').trim();
  if (!cleaned) return 0;
  const words = cleaned.split(/\s+/);
  let total = 0;
  for (const word of words) {
    const vowels = word.match(/[aeiouyáéíóú]/gi);
    total += vowels ? Math.max(1, vowels.length) : 1;
  }
  return total;
}

export function evaluateSunoTrack(input: SunoPromptEvaluationInput): SunoRubricReport {
  const observations: string[] = [];
  const remediationDirectives: string[] = [];

  // =========================================================================
  // D1: STYLE PROMPT QUALITY (Max 2.5)
  // =========================================================================
  const styleLen = (input.stylePrompt || '').trim().length;
  const tags = (input.stylePrompt || '').split(',').map((t) => t.trim()).filter(Boolean);
  let d1Score = 2.5;

  if (styleLen === 0) {
    d1Score = 0;
    observations.push('El campo Style of Music está vacío.');
    remediationDirectives.push('Definir al menos 4 tags de estilo separados por comas.');
  } else if (styleLen > MAX_STYLE_PROMPT_LENGTH) {
    const overflow = styleLen - MAX_STYLE_PROMPT_LENGTH;
    d1Score = Math.max(0, 2.5 - (overflow * 0.1));
    observations.push(`El Style Prompt supera el límite estricto de Suno (${styleLen}/${MAX_STYLE_PROMPT_LENGTH} caracteres).`);
    remediationDirectives.push(`Reducir ${overflow} caracteres del Style Prompt eliminando palabras redundantes.`);
  } else if (styleLen < 40) {
    d1Score = 1.5;
    observations.push(`Style Prompt muy corto (${styleLen} caracteres); puede generar resultados genéricos.`);
  }

  if (tags.length < 3 && d1Score > 0) {
    d1Score = Math.max(0.5, d1Score - 0.5);
    observations.push(`Densidad de tags baja (${tags.length} tags). Se recomiendan al menos 4.`);
  }

  // =========================================================================
  // D2: METATAG STRUCTURE (Max 2.5)
  // =========================================================================
  const lyrics = input.lyricsWithMetatags || '';
  const metatagMatches = lyrics.match(/\[[^\]]+\]/g) || [];
  const validMetatags = lyrics.match(VALID_METATAG_REGEX) || [];
  const hasChorus = /\[\s*(Chorus|Hook)/i.test(lyrics);
  const hasDrop = /\[\s*(Drop|Beat Drop)/i.test(lyrics);
  const hasVerse = /\[\s*Verse/i.test(lyrics);

  let d2Score = 2.5;
  if (metatagMatches.length === 0) {
    d2Score = 0.5;
    observations.push('La letra no tiene metatags estructurales entre corchetes.');
    remediationDirectives.push('Añadir [Verse 1], [Chorus], [Outro] para guiar la estructura musical en Suno.');
  } else {
    if (!hasChorus && !hasDrop) {
      d2Score = Math.max(1.0, d2Score - 0.8);
      observations.push('La estructura no contiene [Chorus] ni [Drop]. Falta el punto culminante.');
      remediationDirectives.push('Incluir al menos una sección de [Chorus] o [Drop].');
    }
    if (!hasVerse && !lyrics.toLowerCase().includes('[intro]')) {
      d2Score = Math.max(1.0, d2Score - 0.5);
      observations.push('Falta sección de estrofa [Verse].');
    }
  }

  // =========================================================================
  // D3: LYRICAL CADENCE & SYLLABLE BALANCE (Max 2.5)
  // =========================================================================
  const lines = lyrics
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0 && !l.startsWith('['));

  let d3Score = 2.5;
  if (lines.length === 0) {
    // Canción instrumental permitida si el stylePrompt lo declara
    if (input.stylePrompt.toLowerCase().includes('instrumental')) {
      d3Score = 2.5;
    } else {
      d3Score = 0.5;
      observations.push('La letra no contiene versos cantables ni directivas vocales.');
      remediationDirectives.push('Escribir versos o marcar la canción explícitamente como instrumental.');
    }
  } else {
    const syllableCounts = lines.map(estimateSyllables);
    const maxSyllables = Math.max(...syllableCounts);
    const minSyllables = Math.min(...syllableCounts);

    if (maxSyllables > 22) {
      d3Score = Math.max(1.0, d3Score - 0.7);
      observations.push(`Detectado verso excesivamente largo (${maxSyllables} sílabas); provocará que Suno atropelle la voz.`);
      remediationDirectives.push('Dividir los versos largos de más de 16 sílabas en dos líneas.');
    }

    const variance = maxSyllables - minSyllables;
    if (variance > 14 && lines.length > 4) {
      d3Score = Math.max(1.0, d3Score - 0.5);
      observations.push(`Gran disparidad silábica entre líneas (${minSyllables} a ${maxSyllables} sílabas).`);
    }
  }

  // =========================================================================
  // D4: LEXICAL HYGIENE & ANTI-BAN (Max 2.5)
  // =========================================================================
  const combinedText = `${input.stylePrompt}\n${input.lyricsWithMetatags}`;
  const artistRes = scanAndRemediateArtists(combinedText);
  const unresolvedRes = scanUnresolvedVariables(combinedText);
  const clicheRes = scanCliches(combinedText);

  let d4Score = 2.5;
  if (artistRes.hasBannedArtists) {
    d4Score = Math.max(0, d4Score - 1.5);
    observations.push(`Detectados nombres de artistas registrados que causan degradación/baneo en Suno: ${artistRes.detectedArtists.join(', ')}.`);
    remediationDirectives.push(`Reemplazar artistas por descriptores sonoros: ${artistRes.replacements.map(r => `"${r.original}" -> "${r.replacement}"`).join(' | ')}`);
  }

  if (unresolvedRes.hasUnresolved) {
    d4Score = Math.max(0, d4Score - 1.0);
    observations.push(`Existen variables de plantilla {{...}} sin resolver: ${unresolvedRes.unresolvedVariables.join(', ')}.`);
    remediationDirectives.push('Asegurar que todas las variables del template injector sean inyectadas antes de evaluar.');
  }

  if (clicheRes.hasCliches) {
    d4Score = Math.max(0.5, d4Score - (clicheRes.totalPenalty * 0.5));
    observations.push(`Detectadas ${clicheRes.detected.length} muletillas de IA en el texto.`);
  }

  const rawTotal = d1Score + d2Score + d3Score + d4Score;
  const totalScore = Number(Math.min(10.0, Math.max(0, rawTotal)).toFixed(2));
  const passed = totalScore >= SUNO_QUALITY_THRESHOLD;

  return {
    totalScore,
    passed,
    threshold: SUNO_QUALITY_THRESHOLD,
    dimensions: {
      stylePromptQuality: Number(d1Score.toFixed(2)),
      metatagStructure: Number(d2Score.toFixed(2)),
      lyricalCadence: Number(d3Score.toFixed(2)),
      lexicalHygiene: Number(d4Score.toFixed(2)),
    },
    observations,
    remediationDirectives,
    metrics: {
      stylePromptLength: styleLen,
      tagCount: tags.length,
      metatagCount: validMetatags.length,
      verseCount: lines.length,
      hasChorus,
      bannedArtistsCount: artistRes.detectedArtists.length,
      unresolvedVariablesCount: unresolvedRes.unresolvedVariables.length,
      clichesCount: clicheRes.detected.length,
    },
  };
}
