---
name: suno-style-catalog
description: "Base de datos canónica de géneros, BPMs, paletas instrumentales, descriptores de mezcla física, firmas sonoras de artistas y exclusiones negativas para optimizar el casillero 'Style of Music' en SUNO AI v6."
---

# Suno Style Catalog — Skill Maestra de Estilos y Producción V6

Esta skill provee el vocabulario tímbrico, las combinaciones de etiquetas, las firmas sonoras de artistas y las reglas de producción física que **Suno AI v6** mejor interpreta en el casillero **Style of Music**.

---

## 1. La Fórmula Canónica del Style Box en V6

El casillero de estilo de Suno V6 tiene un límite estricto de **hasta 1,000 caracteres**, pero el rango óptimo analizado en canciones exitosas es de **250 a 650 caracteres**. 

> [!IMPORTANT]
> **Regla de Cero Estructura en el Style Box:**  
> Prohibido terminantemente incluir directivas o narrativas de estructura (ej. *"Intro 16 bars, Drop 24 bars, Outro for 32 bars"*) en el casillero Style of Music. El Style Box es exclusivamente para la fórmula tímbrica, instrumentos y mezcla; los compases y la arquitectura de secciones pertenecen 100% al casillero de letra (Lyrics Box).

Debe seguir este orden riguroso:

$$\text{1. Género/BPM/Key} + \text{2. Voz} + \text{3. Batería} + \text{4. Guitarras/Keys/Sintes} + \text{5. Bajo} + \text{6. Producción Pro} + \text{7. Textura/Espacio}$$

### Ejemplo de Estilo de Alta Fidelidad:
```text
Indie pop, 102 BPM, 4/4, key of A Major.
Female lead, warm and intimate, close-miked and dry in front of the band, conversational verses, soaring dynamic belt on the chorus.
Live drums with tight dry snare, brushes in verse, driving four-on-the-floor kick in chorus.
Clean electric guitar plays continuous palm-muted arpeggio under the verse vocal, opening into wide double-tracked guitars in chorus.
Warm melodic bass locked to the kick drum.
Arrangement: 4-bar guitar intro, quiet verse, wide loud chorus, clean hard stop on final vocal note.
Production: lived-in studio mix, tight controlled low end, warm analog tape saturation.
```

---

## 2. Prohibición Estricta de Nombres de Artistas Comerciales

Suno degrada, neutraliza o rechaza prompts con nombres de artistas protegidos. Esta skill **decodifica al artista en sus firmas físicas de producción**:

* *En vez de "Daft Punk":* `french touch house, 124 BPM, vintage disco drum groove, robotic vocoder lead vocals, funky slap bassline, phaser rhythm guitars, 909 drums`
* *En vez de "The Weeknd":* `dark synth-pop, 118 BPM, 80s analog synth lead, gated reverb snare, driving arpeggiated bassline, male tenor falsetto emotional delivery`
* *En vez de "Billie Eilish":* `minimal dark pop, 94 BPM, intimate close-miked whispered female vocals, heavy sub-bass 808, subtle acoustic guitar, clicking percussion, dry upfront mix`
* *En vez de "Nirvana":* `90s grunge, 116 BPM, raspy strained male vocals, quiet clean guitar verse, explosive wall of distorted guitars in chorus, heavy live room drums`

*(Consulta el catálogo completo de más de 40 artistas en `references/artist-sonic-fingerprints-decoder.md`).*

---

## 3. Descriptores de Mezcla que Realmente Funcionan en V6

Abandona los adjetivos de veredicto inútiles (*"professional, studio quality, radio-ready, masterpiece, -14 LUFS"*). Usa **directivas físicas de mezcla**:

* **Para Presencia:** `forward vocal with intimate presence, close-miked and dry, loudest element in the mix, brighter than instruments`.
* **Para Graves:** `tight controlled low end, deep sub-bass, kick and bass locked, short decay`.
* **Para Ancho:** `wide polished mix, narrow verse opening to wide glossy chorus, double-tracked guitars panned left and right`.
* **Para Textura:** `warm analog tape saturation, 1970s analog console warmth, tasteful tape flutter`.

---

## 4. Inyección de Timbres de Club desde el Glosario de Sonidos

Cuando el prompt pertenezca a **House, Techno, Tech House, Deep House, Melodic Techno, Acid, Trance, Minimal o Electro**, el agente **debe consultar obligatoriamente** [`references/dance-techno-house-sound-glossary.md`](references/dance-techno-house-sound-glossary.md).

Está prohibido usar términos abstractos como *"techno beat"* o *"club sound"*. Es obligatorio elegir los componentes físicos del track:
1. **El Tipo de Bombo:** `punchy 909 kick` (House/Tech House), `industrial rumble kick` (Peak Time Techno), `808 sub kick` (Deep House), `short click kick` (Minimal).
2. **Los Platos:** `off-beat 909 open hat`, `tight closed 909 hats`, `driving 909 ride cymbal`, `reverse cymbal swell`.
3. **El Bajo de Club:** `303 acid bassline with screaming filter resonance and slides`, `deep rolling reese bassline`, `hollow FM pluck bass`, `moog sub-bass`.
4. **Cajas / Palmas:** `layered 909 clap on 2 and 4`, `snappy 808 snare`, `organic wood rimshot`.
5. **Sintetizadores Líderes:** `korg m1 organ stab`, `rave hoover synth`, `dub techno chord stabs`, `plucky melodic synth`.
6. **Hardware Tag de Referencia:** Citar `Roland TR-909`, `Roland TR-808` o `Roland TB-303`.

---

## 5. Guías de Referencia en `references/`

Consulta los documentos adjuntos de esta skill:
* [dance-techno-house-sound-glossary.md](references/dance-techno-house-sound-glossary.md) — Glosario enciclopédico de sonidos, timbres analógicos, bajos y baterías de club.
* [genres-db.md](references/genres-db.md) — Base de datos canónica de los 13 grandes géneros con BPM, tonalidad e instrumentos nativos.
* [13-genres-production-blueprints.md](references/13-genres-production-blueprints.md) — Fichas de producción completas con Style Box, Exclusiones y Cues por género.
* [exclude-styles-by-genre-matrix.md](references/exclude-styles-by-genre-matrix.md) — Matriz de exclusiones negativas optimizadas ($\le 10$ términos) por género.
* [artist-sonic-fingerprints-decoder.md](references/artist-sonic-fingerprints-decoder.md) — Descodificador de más de 40 firmas sonoras de artistas icónicos.
* [production-tricks.md](references/production-tricks.md) — Descriptores de mezcla física verificados en 98 temas destacados de Suno V6.
