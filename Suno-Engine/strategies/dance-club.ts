/**
 * Strategy: Dance / Club EDM Arranger
 * Generates an EDM arrangement with build-ups, beat drops, and breakdown sections.
 */

import { generateTagDensePrompt } from './tag-dense.ts';

export interface DanceClubInput {
  subgenre: string;
  theme: string;
  bpm: number;
  hookLine: string;
  artistSlug?: string;
}

export function generateDanceClubTrack(input: DanceClubInput): {
  stylePrompt: string;
  lyricsWithMetatags: string;
  bpm: number;
} {
  const stylePrompt = generateTagDensePrompt({
    genre: input.subgenre || 'melodic club house',
    instruments: ['punchy 4x4 kick', 'sidechain bassline', 'bright pluck synth'],
    vibe: 'euphoric driving peak time',
    bpm: input.bpm || 126,
    vocalStyle: 'female energetic vocal chops',
  });

  const hook = input.hookLine || 'Feel the frequency in the sound';

  const lyricsWithMetatags = `[Intro: Filtered Kick & Rising Ambient]
(Atmósfera nocturna, bajo pulsando a lo lejos)

[Verse 1: Low Groove]
Luces que cruzan la pista sin frenar
El ritmo marca la hora de empezar
No queda sombra, no queda nada atrás

[Build-up: Fast Snare Roll & Rising Pitch]
(Caja acelerando, tensión ascendente)
Todo se concentra en el compás
Uno, dos, prepárate ya

[Drop: Heavy Bassline & Maximum Groove]
(Liberación total con sintetizador principal)
${hook}
(Vocal chops repeating)

[Breakdown: Melodic & Stripped Back]
(Corte de bombo, piano etéreo y respiración)
Respira el aire antes del final

[Build-up 2: Maximum Tension]
(Redoble veloz en semicorcheas)
${hook}

[Drop: Climax Energy]
(Bajo distorsionado, platillos abiertos)
${hook}

[Outro: Extended DJ Friendly Groove]
(Desmontando elementos uno a uno)
[Fade Out]
[End]`;

  return {
    stylePrompt,
    lyricsWithMetatags,
    bpm: input.bpm || 126,
  };
}
