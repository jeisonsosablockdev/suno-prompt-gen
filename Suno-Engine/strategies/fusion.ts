/**
 * Strategy: Hybrid Genre Fusion
 * Combines two contrasting styles (e.g. Flamenco + Cyberpunk, Trap + Bossa Nova)
 * balancing rhythm, acoustic elements, and modern synthesis.
 */

import { generateTagDensePrompt } from './tag-dense.ts';

export interface FusionInput {
  styleA: string;
  styleB: string;
  targetBpm: number;
  theme: string;
  hookLine: string;
}

export function generateFusionTrack(input: FusionInput): {
  stylePrompt: string;
  lyricsWithMetatags: string;
  bpm: number;
} {
  const stylePrompt = generateTagDensePrompt({
    genre: `${input.styleA} fusion with ${input.styleB}`,
    instruments: ['spanish nylon guitar', 'heavy distorted 808', 'dark synth arp', 'hand claps'],
    vibe: 'experimental crossover dynamic tension',
    bpm: input.targetBpm,
    vocalStyle: 'passionate expressive delivery',
  });

  const hook = input.hookLine || 'Fuego en el cable, metal en la piel';

  const lyricsWithMetatags = `[Intro: Nylon Guitar Arpeggio & Dark Synth Drone]
(Guitarra española clásica abriendo sobre un zumbido sintético)

[Verse 1: Acoustic Focus]
Canto a la noche que no tiene fin
Entre la arena y el duro adoquín
Siento el latido sonar de metal
Bajo la sombra del viejo rosal

[Pre-Chorus: Trap Hi-Hats & Palm Claps]
(Entran palmas flamencas fusionadas con hi-hats rápidos)
Sube el compás por bulerías
Con el voltaje de las arterias

[Chorus: Full Crossover Drop]
(Explosión de bajo 808 con rasgueo flamenco y sinte)
${hook}
Rompe la noche, despierta el clavel
${hook}
No queda miedo, ya todo es volver

[Instrumental Break: Guitar Solo over 808 Glides]
(Solo virtuoso de guitarra flamenca sobre bajo saturado)

[Verse 2: Half-Time Groove]
Brillan los cables al atardecer
Flores de cobre que van a nacer
Nada en el mundo nos puede vencer

[Chorus: Maximum Power]
(Armonías corales y palmas redobladas)
${hook}
Rompe la noche, despierta el clavel
${hook}
No queda miedo, ya todo es volver!

[Outro: Guitar Feedback & Staccato Clap]
(Acorde final suspendido con remate en seco)
[End]`;

  return {
    stylePrompt,
    lyricsWithMetatags,
    bpm: input.targetBpm,
  };
}
