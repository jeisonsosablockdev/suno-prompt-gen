/**
 * Lexical Filter & Anti-Ban Detector for Suno-Engine
 * Detects real artist names that trigger moderation or audio degradation in Suno,
 * and translates them to timbral/sonic descriptors.
 * Also verifies that no unresolved {{...}} template variables remain in final prompts.
 *
 * @spec SPEC-SUNO-004 (Suno Deterministic Evaluators)
 */

export interface ArtistTranslationRule {
  pattern: RegExp;
  artistName: string;
  replacementDescriptor: string;
}

export interface ArtistDetectionResult {
  hasBannedArtists: boolean;
  detectedArtists: string[];
  remediatedText: string;
  replacements: Array<{ original: string; replacement: string }>;
}

export interface UnresolvedVariableResult {
  hasUnresolved: boolean;
  unresolvedVariables: string[];
}

export const ARTIST_DICTIONARY: ArtistTranslationRule[] = [
  {
    pattern: /\b(daft punk)\b/gi,
    artistName: 'Daft Punk',
    replacementDescriptor: 'french house, vocoder vocals, funky slap bass, disco groove, analog phaser',
  },
  {
    pattern: /\b(the weeknd)\b/gi,
    artistName: 'The Weeknd',
    replacementDescriptor: 'dark synthpop, gated reverb snare, 80s analog synthesizer, emotional falsetto delivery',
  },
  {
    pattern: /\b(billie eilish)\b/gi,
    artistName: 'Billie Eilish',
    replacementDescriptor: 'intimate whispered vocals, minimal dark pop, deep sub bass, dry close-mic production',
  },
  {
    pattern: /\b(bad bunny)\b/gi,
    artistName: 'Bad Bunny',
    replacementDescriptor: 'dark modern reggaeton, melancholic synth pluck, deep 808 bass, baritone vocal delivery',
  },
  {
    pattern: /\b(taylor swift)\b/gi,
    artistName: 'Taylor Swift',
    replacementDescriptor: 'storytelling acoustic pop, bright steel-string guitar, polished radio production, emotive female vocals',
  },
  {
    pattern: /\b(drake)\b/gi,
    artistName: 'Drake',
    replacementDescriptor: 'ambient moody trap, filtered melodic sample, 808 sub glide, half-singing half-rapping cadence',
  },
  {
    pattern: /\b(skrillex)\b/gi,
    artistName: 'Skrillex',
    replacementDescriptor: 'heavy dubstep, metallic screeching growl bass, punchy drums, aggressive high-energy drop',
  },
  {
    pattern: /\b(nirvana)\b/gi,
    artistName: 'Nirvana',
    replacementDescriptor: 'grunge rock, quiet-verse-explosive-chorus dynamic, heavy distorted power chords, raw raspy vocals',
  },
  {
    pattern: /\b(radiohead)\b/gi,
    artistName: 'Radiohead',
    replacementDescriptor: 'experimental art rock, melancholic electronic textures, shifting time signatures, haunting falsetto',
  },
  {
    pattern: /\b(dua lipa)\b/gi,
    artistName: 'Dua Lipa',
    replacementDescriptor: 'modern nu-disco, energetic slap bass, bright brass accents, four-on-the-floor dance pop',
  },
  {
    pattern: /\b(kendrick lamar)\b/gi,
    artistName: 'Kendrick Lamar',
    replacementDescriptor: 'complex conscious hip-hop, jazz-infused instrumentation, shifting vocal pitches, intricate rhythmic flow',
  },
  {
    pattern: /\b(pink floyd)\b/gi,
    artistName: 'Pink Floyd',
    replacementDescriptor: 'psychedelic progressive rock, atmospheric organ, soaring sustained guitar solo, tape delay soundscape',
  },
];

/**
 * Escanea un texto en busca de nombres de artistas registrados y ofrece la versión remediada.
 */
export function scanAndRemediateArtists(text: string): ArtistDetectionResult {
  const detectedArtists: string[] = [];
  const replacements: Array<{ original: string; replacement: string }> = [];
  let remediatedText = text;

  for (const rule of ARTIST_DICTIONARY) {
    const matches = text.match(rule.pattern);
    if (matches && matches.length > 0) {
      if (!detectedArtists.includes(rule.artistName)) {
        detectedArtists.push(rule.artistName);
      }
      replacements.push({
        original: rule.artistName,
        replacement: rule.replacementDescriptor,
      });
      remediatedText = remediatedText.replace(rule.pattern, rule.replacementDescriptor);
    }
  }

  return {
    hasBannedArtists: detectedArtists.length > 0,
    detectedArtists,
    remediatedText: remediatedText.replace(/\s{2,}/g, ' ').trim(),
    replacements,
  };
}

/**
 * Detecta si han quedado variables {{variable}} sin resolver en una plantilla.
 */
export function scanUnresolvedVariables(text: string): UnresolvedVariableResult {
  const matches = text.match(/\{\{\s*([a-zA-Z0-9_.-]+)\s*\}\}/g);
  if (!matches) {
    return { hasUnresolved: false, unresolvedVariables: [] };
  }
  const uniqueVars = Array.from(new Set(matches.map((m) => m.replace(/[{}]/g, '').trim())));
  return {
    hasUnresolved: uniqueVars.length > 0,
    unresolvedVariables: uniqueVars,
  };
}
