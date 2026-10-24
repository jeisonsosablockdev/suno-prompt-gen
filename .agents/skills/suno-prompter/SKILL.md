---
name: suno-prompter
description: "Experto en composición y generación de prompts de alta fidelidad para Suno AI (v6 en Modo Avanzado). Especializado en música electrónica de club (Dance, Techno, House, Tech House, Indie Dance, Melodic House, NY House) mediante micro-metatagging por sección, cómputo de compases, exclusiones negativas y gobernado por un bucle adversarial Ralph Loop (>= 9.5/10)."
---

# Suno Prompter — Skill Maestra para Suno en Modo Avanzado (v6)

Esta skill define la metodología de prompt engineering para sintetizar **música electrónica instrumental y de club** en Suno AI utilizando el **Modo Avanzado**.

---

## 1. Los 4 Casilleros Obligatorios del Modo Avanzado

Para cada track generado, el agente debe producir obligatoriamente estos 4 bloques de texto independientes:

### Bloque 1: Título / Nombre de Generación (Title Box)
Formato estricto con la versión del modelo al final:
```text
I {título} {take} Max W:{w} S:{s} A:{a} V:{v} {versión}
```
* **`I`**: Indicador de Instrumental (o `V` si contiene vocoder/vocal chops).
* **`{título}`**: Nombre corto de la canción en minúsculas.
* **`{take}`**: Número de variación o toma (ej. `1`, `2`, `7`).
* **`Max`**: Tier de calidad/modelo en Suno.
* **`W:{w}`**: *Weirdness* (Rareza / caos sonoro: 0 - 100).
* **`S:{s}`**: *Style Influence* (Adherencia al prompt: 0 - 100).
* **`A:{a}`**: *Audio Weight / Quality* (Filtro de audio: 0 - 100).
* **`V:{v}`**: *Variety* (`N` = Normal, `L` = Low, `H` = High).
* **`{versión}`**: Versión del motor Suno estrictamente al final (ej. `v6`).

*Ejemplo:* `I disco nights 7 Max W:15 S:100 A:50 V:N v6`

---

### Bloque 2: Casillero de Estilo (Style of Music)
Consta de dos partes integradas:
1. **Línea Maestra de Corchetes:**
   `[Style: ...][Mood: ...][Energy: ...][Beat: ...][Vocal: ...][Instrument: ...][FX: ...]`
2. **Resumen Estructural con Compases, BPM y Tonalidad:**
   `{BPM} BPM in {Key}, DJ-friendly underground club track with this exact structure: {Intro A X bars...}, {Drop X bars...}, {Breakdown X bars...}, {Outro X bars...}, strong {subgenre} groove, bold analog synth presence`

*Límite de caracteres:* Debe optimizarse para un impacto sonoro contundente sin superar los límites del casillero.

---

### Bloque 3: Casillero de Exclusiones Negativas (Exclude Styles)
Conjunto de etiquetas negativas adaptadas al subgénero que previenen instrumentos incompatibles:
```text
EDM, Big room, Pop, Commercial Radio, Acoustic Guitar, Banjo, Accordion, Harp, Brass Section, Orchestral Strings, Country, Slap House, Distorted Metal, Rock Drums, Operatic Vocals
```

---

### Bloque 4: Casillero de Letra & Estructura (Lyrics Box)
Desglose cronológico de secciones (`[Intro A]`, `[Break 1]`, `[Drop]`, `[Full Drop]`, `[Breakdown]`, `[Outro]`), donde **cada sección** contiene:
1. Micro-metatags:
   `[Style: ...][Mood: ...][Energy: ...][Beat: ...][Instrument: ...][FX: ...]`
2. Cómputo explícito de compases:
   `[X bars of description...]`
3. Hooks mínimos o vocal chops (si aplica, ej. frases cortas de vocoder repetitivas).

---

## 2. Protocolo Adversarial Ralph Loop (Creador vs Revisor)

Toda canción generada bajo este skill debe someterse al **Ralph Loop** antes de ser aprobada:

```text
[CREADOR / EDITOR]                                [REVISOR ADVERSARIAL]
Redacta los 4 bloques del track --------> Audita contra la Lista de 6 Filtros
      ^                                                  |
      |--- (Si Score < 9.5: Aplica directivas) <---------|
      |                                                  v
      +------------------------------------------ (Si Score >= 9.5: APROBADO)
```

### La Lista de 6 Filtros Obligatorios del Revisor:
1. **Filtro de Naming:** ¿La versión (`v6`) está estrictamente al final? ¿Están los 4 parámetros `W:`, `S:`, `A:`, `V:`?
2. **Filtro de Micro-Tags:** ¿Cada sección tiene sus 6 descriptores `[Style][Mood][Energy][Beat][Instrument][FX]`?
3. **Filtro de Compases:** ¿Cada sección define su duración explícita en compases (`[X bars of...]`)?
4. **Filtro del Style Box:** ¿Incluye la línea maestra de corchetes Y el resumen narrativo de la estructura con BPM y Key?
5. **Filtro de Exclusiones:** ¿Está presente el bloque de `Exclude Styles` bloqueando instrumentos ajenos al club?
6. **Filtro de Aislamiento del Drop:** ¿El `[Drop]` instrumental está limpio de líricas largas que entorpezcan el bajo y los sintes?

**Nota de corte:** $\ge 9.5 / 10.0$ con cero observaciones para promover a `Suno-Vault/Artistas/`.

---

## 3. Guías de Referencia en `references/`
* [micro-metatags-syntax.md](references/micro-metatags-syntax.md) — Diccionario de etiquetas por sección.
* [club-bar-structures.md](references/club-bar-structures.md) — Esqueletos de compases por subgénero de club.
* [exclude-styles-database.md](references/exclude-styles-database.md) — Banco de exclusiones negativas.
* [slider-presets-matrix.md](references/slider-presets-matrix.md) — Presets de calibración W/S/A/V para pruebas A/B.
