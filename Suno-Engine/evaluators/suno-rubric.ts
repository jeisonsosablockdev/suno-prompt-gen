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

/* ========================================================================= */
/*       AUDITOR DE 6 FILTROS DE SUNO-PROMPTER (RALPH LOOP AUDITOR)          */
/* ========================================================================= */

export interface ClubPromptAuditInput {
  generationName?: string;
  stylePrompt: string;
  excludeStyles?: string;
  lyricsWithMetatags: string;
  targetBpm?: number;
  targetDurationSeconds?: number;
}

export interface ClubPromptAuditReport {
  totalScore: number;
  passed: boolean;
  threshold: number; // 9.5
  gates: {
    gate1_naming: { passed: boolean; score: number; observation?: string };
    gate2_microTags: { passed: boolean; score: number; observation?: string };
    gate3_barCounts: { passed: boolean; score: number; observation?: string };
    gate4_styleBox: { passed: boolean; score: number; observation?: string };
    gate5_excludeStyles: { passed: boolean; score: number; observation?: string };
    gate6_dropIsolation: { passed: boolean; score: number; observation?: string };
    gate7_lyricsLength: { passed: boolean; score: number; observation?: string };
  };
  observations: string[];
  remediationDirectives: string[];
}

export const CLUB_PROMPTER_THRESHOLD = 9.5;

export function evaluateClubPrompter(input: ClubPromptAuditInput): ClubPromptAuditReport {
  const observations: string[] = [];
  const remediationDirectives: string[] = [];

  // Gate 1: Naming Convention (I {title} {take} Max W:{w} S:{s} A:{a} V:{v} {version})
  let g1Score = 1.43;
  let g1Passed = true;
  let g1Obs: string | undefined;

  const namingRegex = /^(I|V)\s+[a-z0-9\s-]+\s+\d+\s+Max\s+W:\d+\s+S:\d+\s+A:\d+\s+V:[A-Z]\s+v\d+$/i;
  if (!input.generationName) {
    g1Score = 0;
    g1Passed = false;
    g1Obs = 'Falta el nombre de generación paramétrico.';
    observations.push(g1Obs);
    remediationDirectives.push('Definir el nombre en formato "I {título} {take} Max W:{w} S:{s} A:{a} V:{v} {versión}" con versión al final.');
  } else if (!namingRegex.test(input.generationName.trim())) {
    g1Score = 0.4;
    g1Passed = false;
    g1Obs = `Formato de nombre inválido: "${input.generationName}". La versión del motor (ej. v6) debe estar estrictamente al final.`;
    observations.push(g1Obs);
    remediationDirectives.push('Ajustar el nombre al estándar: "I {título} {take} Max W:{w} S:{s} A:{a} V:{v} {versión}".');
  }

  // Gate 2: Micro-Metatags por sección
  let g2Score = 1.43;
  let g2Passed = true;
  let g2Obs: string | undefined;

  const hasMicroTags = /\[Style:[^\]]+\]\s*\[Mood:[^\]]+\]\s*\[Energy:[^\]]+\]/i.test(input.lyricsWithMetatags);
  if (!hasMicroTags) {
    g2Score = 0.4;
    g2Passed = false;
    g2Obs = 'La letra no contiene la cadena de micro-tags [Style: ...][Mood: ...][Energy: ...] por sección.';
    observations.push(g2Obs);
    remediationDirectives.push('Inyectar en cada sección la cadena [Style: ...][Mood: ...][Energy: ...][Beat: ...][Instrument: ...][FX: ...].');
  }

  // Gate 3: Bar Count Directives [X bars of ...]
  let g3Score = 1.43;
  let g3Passed = true;
  let g3Obs: string | undefined;

  const barMatches = input.lyricsWithMetatags.match(/\[\d+\s+bars\s+[^\]]+\]/gi) || [];
  if (barMatches.length < 3) {
    g3Score = 0.4;
    g3Passed = false;
    g3Obs = `Solo se detectaron ${barMatches.length} directivas de compases. Se requieren al menos 3 bloques explícitos de compases (ej. [16 bars of...]).`;
    observations.push(g3Obs);
    remediationDirectives.push('Definir la duración en compases para cada sección [X bars of description...].');
  }

  // Detección de Desfase de Duración (Anti-Complacencia Matemática y Protocolo Grill-Me)
  const bpmMatch = (input.stylePrompt || '').match(/(\d{2,3})\s*BPM/i) || (input.lyricsWithMetatags || '').match(/(\d{2,3})\s*BPM/i);
  const durationMatch = (input.stylePrompt || '').match(/(?:~)?(\d+):(\d+)/) || (input.lyricsWithMetatags || '').match(/(?:~)?(\d+):(\d+)/);
  const bpmVal = input.targetBpm || (bpmMatch ? parseInt(bpmMatch[1], 10) : undefined);
  const targetSec = input.targetDurationSeconds || (durationMatch ? parseInt(durationMatch[1], 10) * 60 + parseInt(durationMatch[2], 10) : undefined);

  if (bpmVal && targetSec) {
    const barMatchesAll = Array.from(input.lyricsWithMetatags.matchAll(/\[(\d+)\s+bars/gi));
    const totalBars = barMatchesAll.reduce((acc, m) => acc + parseInt(m[1], 10), 0);
    const calculatedSec = Math.round(totalBars * (240 / bpmVal));
    const deltaSec = targetSec - calculatedSec;

    if (deltaSec > 5) {
      const missingBars = Math.round(deltaSec / (240 / bpmVal));
      const obs = `Desfase temporal detectado: La estructura suma ${totalBars} compases (${Math.floor(calculatedSec / 60)}:${String(calculatedSec % 60).padStart(2, '0')}), pero el objetivo es ${Math.floor(targetSec / 60)}:${String(targetSec % 60).padStart(2, '0')}. Faltan ${missingBars} compases (~${deltaSec} segundos). Prohibido asumir colas de reverberación ficticias; activar protocolo interactivo (grill-me) para alargar secciones.`;
      observations.push(obs);
      remediationDirectives.push(`Añadir ~${missingBars} compases en secciones de clímax, breakdown o DJ tools para alcanzar el tiempo objetivo.`);
    }
  }

  // Gate 4: Style Box con Límite de 1000 Caracteres y Cero Estructura (Solo Elementos y Mezcla)
  let g4Score = 1.43;
  let g4Passed = true;
  let g4Obs: string | undefined;

  const styleText = (input.stylePrompt || '').trim();
  const hasMasterTags = /\[Style:[^\]]+\]/i.test(styleText);
  const hasElements = /(bpm|key|minor|major|drums|bass|synth|mix|production|sound|groove)/i.test(styleText);
  const structureLeakRegex = /(?:\b\d+\s+bars\b|\bintro\s+[a-z0-9]|\bbreak\s+[a-z0-9]|\bdrop\s+[a-z0-9]|\boutro\s+[a-z0-9]|\bverse\s+\d|\bchorus\s+\d|\bexact\s+structure\b)/i;
  const hasStructureLeak = structureLeakRegex.test(styleText);

  if (styleText.length === 0) {
    g4Score = 0;
    g4Passed = false;
    g4Obs = 'El Style Box está vacío.';
    observations.push(g4Obs);
    remediationDirectives.push('Definir la paleta sonora y descriptores en el Style Box.');
  } else if (styleText.length > 1000) {
    g4Score = 0.4;
    g4Passed = false;
    g4Obs = `El Style Box supera el límite físico de Suno (${styleText.length}/1000 caracteres). Debe reducirse para no desbordar el casillero.`;
    observations.push(g4Obs);
    remediationDirectives.push(`Reducir ${styleText.length - 1000} caracteres del Style Box eliminando redundancias.`);
  } else if (hasStructureLeak) {
    g4Score = 0.4;
    g4Passed = false;
    g4Obs = 'El Style Box contiene directivas de estructura (compases o nombres de sección como "bars", "intro", "drop"). La estructura pertenece exclusivamente al casillero de letra (Lyrics Box); el Style Box solo debe contener elementos tímbricos, instrumentos, BPM/Key y producción.';
    observations.push(g4Obs);
    remediationDirectives.push('Eliminar del Style Box toda referencia a compases y nombres de sección, manteniéndola solo en el casillero de letra.');
  } else if (!hasMasterTags && !hasElements) {
    g4Score = 0.4;
    g4Passed = false;
    g4Obs = 'El Style Box debe contener elementos tímbricos clave (BPM, Key, paleta instrumental y mezcla).';
    observations.push(g4Obs);
    remediationDirectives.push('Añadir la paleta de instrumentos, BPM y directivas de producción al Style Box.');
  }

  // Gate 5: Exclude Styles presente con al menos 3 exclusiones
  let g5Score = 1.42;
  let g5Passed = true;
  let g5Obs: string | undefined;

  const excludeList = (input.excludeStyles || '').split(',').map(s => s.trim()).filter(Boolean);
  if (excludeList.length < 3) {
    g5Score = 0.3;
    g5Passed = false;
    g5Obs = `El bloque Exclude Styles solo contiene ${excludeList.length} exclusiones. Se requieren al menos 3 etiquetas negativas.`;
    observations.push(g5Obs);
    remediationDirectives.push('Poblar el casillero Exclude Styles con géneros e instrumentos a bloquear (ej. EDM, Pop, Acoustic Guitar).');
  }

  // Gate 6: Aislamiento del Drop (sin exceso de letra)
  let g6Score = 1.43;
  let g6Passed = true;
  let g6Obs: string | undefined;

  const dropSections = input.lyricsWithMetatags.match(/\[\s*(Drop|Full Drop)[\s\S]*?(?=\[\s*(Break|Outro|Verse|Drop)|$)/gi) || [];
  for (const ds of dropSections) {
    const textLines = ds.split('\n').filter(l => l.trim().length > 0 && !l.trim().startsWith('['));
    if (textLines.length > 8) {
      g6Score = 0.5;
      g6Passed = false;
      g6Obs = 'Detectada letra excesivamente larga en una sección de Drop. Debe dejarse espacio para el sintetizador y el bajo.';
      observations.push(g6Obs);
      remediationDirectives.push('Reducir la letra en el Drop a vocal chops o frases cortas repetitivas.');
      break;
    }
  }

  // Gate 7: Límite Físico de Casillero de Letra (<= 5000 caracteres)
  let g7Score = 1.43;
  let g7Passed = true;
  let g7Obs: string | undefined;

  const lyricsLen = (input.lyricsWithMetatags || '').trim().length;
  if (lyricsLen > 5000) {
    g7Score = 0;
    g7Passed = false;
    g7Obs = `El casillero de letra supera el límite físico absoluto de Suno (${lyricsLen}/5000 caracteres). Suno recortará arbitrariamente el contenido ('We trimmed your paste to fit the 5000-character limit') perdiendo el outro y los metatags finales.`;
    observations.push(g7Obs);
    remediationDirectives.push(`Reducir ${lyricsLen - 5000} caracteres de la letra compactando micro-tags redundantes en las secciones.`);
  } else if (lyricsLen > 4500) {
    observations.push(`Alerta de proximidad: La letra está cerca del límite máximo de Suno (${lyricsLen}/5000 caracteres). Se recomienda optimizar a < 4000 caracteres.`);
  }

  const rawTotal = (g1Passed ? 1.43 : g1Score) +
                   (g2Passed ? 1.43 : g2Score) +
                   (g3Passed ? 1.43 : g3Score) +
                   (g4Passed ? 1.43 : g4Score) +
                   (g5Passed ? 1.42 : g5Score) +
                   (g6Passed ? 1.43 : g6Score) +
                   (g7Passed ? 1.43 : g7Score);
  const totalScore = Number(Math.min(10.0, Math.max(0, rawTotal)).toFixed(2));
  const passed = totalScore >= CLUB_PROMPTER_THRESHOLD && g1Passed && g2Passed && g3Passed && g4Passed && g5Passed && g6Passed && g7Passed;

  return {
    totalScore,
    passed,
    threshold: CLUB_PROMPTER_THRESHOLD,
    gates: {
      gate1_naming: { passed: g1Passed, score: g1Score, observation: g1Obs },
      gate2_microTags: { passed: g2Passed, score: g2Score, observation: g2Obs },
      gate3_barCounts: { passed: g3Passed, score: g3Score, observation: g3Obs },
      gate4_styleBox: { passed: g4Passed, score: g4Score, observation: g4Obs },
      gate5_excludeStyles: { passed: g5Passed, score: g5Score, observation: g5Obs },
      gate6_dropIsolation: { passed: g6Passed, score: g6Score, observation: g6Obs },
      gate7_lyricsLength: { passed: g7Passed, score: g7Score, observation: g7Obs },
    },
    observations,
    remediationDirectives,
  };
}
