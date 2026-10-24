---
ep_title: "{{ep.title}}"
slug: "{{ep.slug}}"
artist: "{{ep.artistSlug}}"
master_style_prompt: "{{ep.masterStylePrompt}}"
total_tracks: {{ep.totalTracks}}
concept_genre: "{{ep.genre}}"
created_at: "{{date}}"
updated_at: "{{date}}"
---

# EP: {{ep.title}} — [[Artistas/{{ep.artistSlug}}/_artista|{{ep.artistName}}]]

> [!NOTE]
> **Concepto Narrativo del EP:** {{ep.conceptNarrative}}
> Todas las canciones de este EP comparten la base de producción definida en el Master Style Prompt para garantizar una experiencia de álbum coherente en Suno.

---

## 1. Master Style Prompt del EP
```text
{{ep.masterStylePrompt}}
```
*Longitud de caracteres: {{ep.masterStylePromptLength}} / 200.*

---

## 2. Línea Argumental y Emocional del Disco
{{ep.narrativeArc}}

---

## 3. Tracklist del EP
| # | Pista | Vibe / Tempo | Enlace |
|---|---|---|---|
{{ep.tracklistMarkdownTable}}

---

## 4. Directivas de Producción Comunes
- **BPM Base:** {{ep.baseBpm}}
- **Espacio y Mezcla:** {{ep.mixDirectives}}
- **Paleta de Sintetizadores / Instrumentos:** {{ep.instrumentPalette}}
