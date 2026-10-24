---
name: suno-style-catalog
description: "Base de datos canónica de géneros, BPMs, instrumentación, descriptores tímbricos y trucos de producción para optimizar el casillero 'Style of Music' en Suno AI."
---

# Suno Style Catalog Skill

Esta skill provee el vocabulario, las combinaciones de tags y las reglas de producción que Suno AI mejor interpreta.

## 1. La Anatomía de un Style Prompt de Alto Rendimiento
El casillero de estilo de Suno tiene un límite estricto de caracteres (~120 a 200 caracteres según la versión). Un prompt de estilo óptimo sigue esta fórmula de 4 componentes:

$$\text{Style Prompt} = [\text{Subgénero Raíz}] + [\text{Instrumentos Clave}] + [\text{Vibe / Textura Sonora}] + [\text{BPM / Tonalidad}]$$

### Ejemplo:
* `synthwave, 1980s analog synthesizers, gated reverb snare, driving arpeggiated bassline, melancholic retro vibe, 118 bpm, D minor`
* *Longitud:* 135 caracteres (dentro del límite seguro).

## 2. Regla Crucial: Prohibición de Nombres de Artistas
Suno degrada o ignora nombres de artistas registrados (ej. *"Daft Punk"* o *"The Weeknd"*). 
Esta skill enseña a **descomponer al artista en sus firmas sonoras**:
* *En vez de "Daft Punk":* `french house, disco groove, vocoder vocals, funky slap bass, phaser guitars, 124 bpm`
* *En vez de "The Weeknd":* `dark synthpop, gated snares, ethereal reverb, 80s analog synth lead, falsetto emotional delivery, 115 bpm`
* *En vez de "Billie Eilish":* `minimal dark pop, intimate whispered vocals, sub bass, close-mic, subtle vinyl crackle, 95 bpm`

Consulta la base de datos en `references/`:
* [genres-db.md](references/genres-db.md) — Fichas completas de más de 20 géneros con BPM e instrumentos.
* [production-tricks.md](references/production-tricks.md) — Descriptores de mezcla y post-producción.
