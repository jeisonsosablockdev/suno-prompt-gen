/**
 * Strategy: Pop / Commercial Radio Hit
 * Generates classic Verse-Chorus-Verse-Chorus-Bridge-Chorus radio arrangement.
 */

import { generateTagDensePrompt } from './tag-dense.ts';

export interface PopCommercialInput {
  subgenre?: string;
  theme: string;
  bpm?: number;
  hookLine: string;
  emotionalArc?: string;
}

export function generatePopCommercialTrack(input: PopCommercialInput): {
  stylePrompt: string;
  lyricsWithMetatags: string;
  bpm: number;
} {
  const bpm = input.bpm || 116;
  const stylePrompt = generateTagDensePrompt({
    genre: input.subgenre || 'contemporary pop',
    instruments: ['crisp acoustic guitar', 'warm analog bass', 'snappy pop snare'],
    vibe: 'catchy radio friendly emotional',
    bpm,
    vocalStyle: 'expressive vocal with rich harmonies',
  });

  const hook = input.hookLine || 'No me dejes caer otra vez';

  const lyricsWithMetatags = `[Intro: Acoustic Guitar Riff]
(Guitarra limpia marcando el acorde principal)

[Verse 1]
Miro la ventana y veo el tiempo pasar
Las luces rojas me vuelven a hablar
Guardo el silencio para no despertar
Lo que dejamos sin terminar

[Pre-Chorus: Rising Energy]
(Entra el bajo suave, bombo en negras)
Y cada paso que doy hacia ti
Me cuesta más olvidar que perdí

[Chorus]
(Voz plena con segundas voces)
${hook}
Bajo esta lluvia de luz y papel
${hook}
Que ya no queda nada en mi piel

[Verse 2]
(Ritmo completo, bajo melódico)
Tengo las llaves guardadas aún
Buscando un norte en tanta inquietud
El mapa se borra si no estás tú

[Pre-Chorus]
(Tensión creciente con armonías)
Y cada paso que doy hacia ti
Me cuesta más olvidar que perdí

[Chorus]
(Explosión armónica con coros)
${hook}
Bajo esta lluvia de luz y papel
${hook}
Que ya no queda nada en mi piel

[Bridge: Emotional Breakdown]
(Corte de ritmo, solo piano y voz sentida)
(whisper)
Y si supieras lo que daría
Por devolverle la fe a este día...

[Chorus: Final Climax]
(Potencia total, ad-libs vocales en agudos)
${hook}
Bajo esta lluvia de luz y papel
${hook}
Que ya no queda nada en mi piel!

[Outro: Guitar Motif Fade]
(La guitarra inicial se apaga lentamente)
[End]`;

  return {
    stylePrompt,
    lyricsWithMetatags,
    bpm,
  };
}
