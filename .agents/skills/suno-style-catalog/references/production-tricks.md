# Trucos de Producción y Mezcla Verificados en Suno V6

Basado en el análisis empírico de las 95 canciones destacadas (*featured songs*) de Suno V6 y mediciones espectrales directas de archivos WAV generados.

---

## 1. Vocabulario de Mezcla Realmente Operativo en V6

El análisis estadístico de los prompts utilizados por Suno y los creadores top demostró qué descriptores tienen efecto real sobre el sintetizador:

| Categoría de Mezcla | Frecuencia de Uso | Frases Verificadas que Modifican el Audio |
|---|:---:|---|
| **Calidez & Saturación** | 58 / 95 | `warm tape saturation`, `analog console warmth`, `tasteful tape flutter`, `lived-in studio mix` |
| **Pegada & Graves (Low End)** | 44 / 95 | `punchy modern drums`, `tight controlled low end`, `deep electronic sub-bass`, `kick and bass locked` |
| **Rango Dinámico** | 40 / 95 | `dynamic quiet-to-heavy transitions`, `verse sits lower, chorus opens up`, `restrained dynamics` |
| **Colocación Vocal** | 37 / 95 | `forward vocal with intimate presence`, `in front of the band`, `close-miked and dry`, `centered mono vocal` |
| **Ancho Estéreo (Width)** | 26 / 95 | `wide polished mix`, `wide glossy stereo`, `double-tracked rhythm guitars panned left and right`, `wide stereo percussion` |
| **Agudos y Brillo (Top End)** | 23 / 95 | `crisp airy top end`, `crisp top-end sheen`, `bright final lift` |

---

## 2. Palabras Inútiles vs Palabras Efectivas

| ❌ Frase Inútil (Veredicto) | ✅ Frase Efectiva (Física y Acción) | Por Qué Falla la Primera |
|---|---|---|
| `professional studio quality` | `intimate dry studio booth acoustics` | El modelo no sabe qué es "profesional"; sabe cómo suena una cabina seca. |
| `mastered, radio-ready` | `tight controlled low end, crisp top-end sheen` | "Mastered" es interpretado como un vibe vago, no como proceso dinámico. |
| `crisp and clear vocals` | `vocal in front of the band, brighter than instruments` | "Crisp" añade sibilancia metálica; la colocación física despeja la voz. |
| `-14 LUFS / loud mix` | `punchy kick, hard limiter smash` | Los números de LUFS se aplican en la masterización del archivo descargado, no en el prompt. |

---

## 3. Comportamiento Espectral de Suno V6 vs Versiones Anteriores

Mediciones realizadas en pares de pistas comparando V6 contra v5.5 revelan:
1. **Rango Dinámico Más Amplio:** V6 no hiper-comprime por defecto; la diferencia de volumen entre estrofas y estribillos es notablemente mayor.
2. **Graves Más Profundos (< 120 Hz):** V6 genera más energía en el sub-bajo (30 Hz a 80 Hz). Si el estilo no indica *"tight controlled low end"*, los graves pueden acumularse en pistas largas.
3. **Agudos Más Suaves (2 kHz – 10 kHz):** V6 tiene menos brillo artificial y estridencia que v4/v5. Para conseguir presencia en la voz, se debe pedir explícitamente *"close-miked and dry, brighter than instruments"*.

---

## 4. El Truco del "Remaster Cover" para Perfeccionar Mezclas

Si obtienes una toma con una melodía y letra perfectas pero la mezcla se siente apagada o desbalanceada:
1. Usa la función **Create Cover** sobre el track seleccionado.
2. Configura:
   - **Audio Influence:** `69%` (preserva la melodía, acordes y ritmo del seed).
   - **Style Influence:** `26%` (permite que la nueva instrucción de mezcla actúe).
   - **Weirdness:** `26%` (mantiene estabilidad).
3. Escribe un **prompt solo de sonido** terminando con la directiva:  
   `"wide polished studio mix, punchy drums, forward vocals, crisp top-end sheen, preserving original melody, vibe and energy."`
