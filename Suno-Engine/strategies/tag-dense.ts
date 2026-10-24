/**
 * Strategy: Tag-Dense Optimizer
 * Produces hyper-condensed Style of Music prompts for Suno AI,
 * maximizing timbral density while guaranteeing <= 200 characters.
 */

import { scanAndRemediateArtists } from '../evaluators/lexical-filter.ts';

export interface TagDenseInput {
  genre: string;
  instruments: string[];
  vibe: string;
  bpm: number;
  musicalKey?: string;
  vocalStyle?: string;
}

export function generateTagDensePrompt(input: TagDenseInput): string {
  const parts: string[] = [input.genre];

  if (input.vocalStyle) {
    parts.push(input.vocalStyle);
  }

  if (input.instruments && input.instruments.length > 0) {
    parts.push(...input.instruments);
  }

  if (input.vibe) {
    parts.push(input.vibe);
  }

  if (input.bpm) {
    parts.push(`${input.bpm} bpm`);
  }

  if (input.musicalKey) {
    parts.push(input.musicalKey);
  }

  let prompt = parts.join(', ');

  // Remediar artistas si se colaron
  const remediated = scanAndRemediateArtists(prompt);
  prompt = remediated.remediatedText;

  // Garantizar límite estricto de 200 caracteres
  if (prompt.length > 200) {
    const tokens = prompt.split(', ');
    while (tokens.join(', ').length > 200 && tokens.length > 2) {
      tokens.pop();
    }
    prompt = tokens.join(', ');
  }

  return prompt;
}
