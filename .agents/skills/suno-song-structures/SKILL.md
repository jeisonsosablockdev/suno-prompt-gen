---
name: suno-song-structures
description: "Experto en arquitectura musical, arreglos por secciones, instrument maps, continuidad de riffs en estrofas, aislamiento de solistas y control de bordes (intros y finales) para SUNO AI v6."
---

# Suno Song Structures — Skill Maestra de Arreglos y Dinámica V6

Esta skill instruye al agente en cómo diseñar la arquitectura temporal, la dinámica de instrumentación y la colocación estratégica de **metatags y cues de sección espejados** en **Suno AI v6**.

---

## 1. El Rol de la Estructura en Suno V6

En Suno V6, un esqueleto de canción no es una simple lista de secciones vacías (`[Verse]`, `[Chorus]`). Es un **mapa de dinámica física** que gobierna qué instrumentos tocan, cuándo descansan, cuándo aumentan su intensidad y cuándo se detienen por completo.

### Las Cuatro Reglas Cardinales de Arreglo V6:
1. **La Regla del Riff Continuo (Anti-Caída de Estrofa):**  
   Si introduces un riff en la intro, debes ordenar explícitamente en el estilo y en la letra que continúe bajo la estrofa:  
   `"The intro riff continues under the verse vocal, palm-muted and lower, never stops."`
2. **Concordancia Palabra por Palabra (Agreement Rule):**  
   Las directivas instrumentales dentro de los corchetes de la letra deben coincidir con lo estipulado en el casillero de estilo para evitar que el modelo silencie la pista.
3. **Control de Bordes Obligatorio:**  
   Toda pista debe tener una introducción con cómputo de compases exactos (evitando tarareos aleatorios) y un final delimitado (`[End - hard stop]` o `[End - held note]`) para evitar bucles infinitos.
4. **Cálculo Físico de Duración (Anti-Complacencia Matemática & Protocolo Grill-Me):**  
   > [!CAUTION]
   > **Prohibición de Colas de Reverb Ficticias:** Jamás se debe asumir o justificar una discrepancia de tiempo (ej. faltar 20 a 40 segundos para alcanzar el objetivo) bajo el pretexto complaciente de una "cola de reverberación o fadeout de DJ". Suno V6 renderiza el audio en función directa de la cantidad de compases solicitados; si faltan compases, el tema terminará antes de tiempo.  
   >
   > **Fórmula Obligatoria:**  
   > $$\text{Segundos Totales} = \text{Compases Totales} \times \frac{240}{\text{BPM}}$$
   > $$\text{Compases Requeridos} = \text{Duración Deseada (segundos)} \times \frac{\text{BPM}}{240}$$
   >
   > Si $|\Delta| > 5\text{ segundos}$ entre la meta del usuario y la suma de compases:
   > 1. Reportar exactamente la brecha de tiempo ($\Delta\text{ seg}$) y compases equivalentes.
   > 2. Presentar una propuesta interactiva de extensión estructural (alargar drops, breaks o DJ tools).
   > 3. Pausar y consultar al usuario antes de emitir la versión final.

---

## 2. Metatags Universales y Cues Espejados en V6

Todo metatag en el casillero de letra debe contener su **calificador de arreglo**:

* `[Intro - {instrumento}, {X} bars, instrumental only, no vocals]`: Abre con compases medidos.
* `[Verse 1 - {instrumento} continues under vocal, palm-muted, drums quiet]`: Mantiene la banda activa.
* `[Pre-Chorus - building snare, rising chords, dynamic tension]`: Prepara el impacto.
* `[Chorus - full band, wall of sound, loudest point, wide stereo]`: Clímax de energía.
* `[Bridge - clean instruments only, half-time drums, bass drops out]`: Contraste y respiro armónico.
* `[Solo: Guitar / Synth - 8 bars over the main groove]`: Solo instrumental enfocado.
* `[Outro - band stops, vocal alone holds last note]`: Cierre vocal o instrumental limpio.
* `[End - hard stop on last hit, silence]`: Corte absoluto sin cola residual.

---

## 3. Protocolo de Aislamiento para Instrumentos Solistas

Para generar una **única guitarra, un único piano o una batería sola** sin que irrumpa una banda fantasma:
1. **Style Box:** Describe positivamente al intérprete en solitario (*"One acoustic guitar, played by a single performer alone in a quiet room"*). Nunca uses la palabra ambigua *"Instrumental"*.
2. **Exclude Box:** Bloquea todas las familias ajenas (`drums, bass, synth, pads, strings, vocals, choir`).
3. **Lyrics Box:** Etiqueta **cada sección** obligatoriamente con el tag solista:  
   `[Section 1 - solo acoustic guitar only, main melody]`

---

## 4. Guías de Referencia en `references/`

Consulta los documentos adjuntos de esta skill:
* [instrument-map-matrix.md](references/instrument-map-matrix.md) — Matriz de verbos de acción por instrumento a lo largo de las secciones.
* [solo-instrument-isolation-guide.md](references/solo-instrument-isolation-guide.md) — Método infalible en 3 partes para solistas acústicos sin banda.
* [intro-outro-boundary-templates.md](references/intro-outro-boundary-templates.md) — Plantillas de bordes: voz fría, riffs medidos y paradas en seco.
* [section-cues-agreement-catalog.md](references/section-cues-agreement-catalog.md) — Catálogo de cues espejados y arquitectura cronológica completa.
* [dance-edm.md](references/dance-edm.md) — Dinámica de club, build-ups y drops.
* [pop-commercial.md](references/pop-commercial.md) — Estructura de radio hit con contraste estrofa-coro.
* [rock-alternative.md](references/rock-alternative.md) — Dinámica de banda de rock, riffs y solos.
* [urban-hiphop.md](references/urban-hiphop.md) — Compases, cadencia de 808s y pausas de beat.
