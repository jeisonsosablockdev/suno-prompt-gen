---
track_number: {{track.number}}
title: "{{track.title}}"
slug: "{{track.slug}}"
artist: "{{track.artistSlug}}"
ep: "{{track.epSlug}}"
bpm: {{track.bpm}}
musical_key: "{{track.musicalKey}}"
suno_version: "{{track.sunoVersion}}"
style_prompt_chars: {{track.stylePromptLength}}
status: {{track.status}} # draft | tested | approved
audio_url: "{{track.audioUrl}}"
created_at: "{{date}}"
updated_at: "{{date}}"
---

# {{track.numberFormatted}} - {{track.title}}
*Artista:* [[Artistas/{{track.artistSlug}}/_artista|{{track.artistName}}]] | *EP:* [[Artistas/{{track.artistSlug}}/{{track.epSlug}}/_ep|{{track.epTitle}}]]

> [!NOTE]
> **Vibe & Dirección Sonora:** {{track.vibeDescription}}
> Canción diseñada con metatags estructurales y prompt optimizado para el motor de Suno AI.

---

## 1. Suno Style of Music Prompt (Casillero de Estilo)
> Copia este bloque exactamente en el campo **"Style of Music"** de Suno:

```text
{{track.stylePrompt}}
```
*Longitud exacta: {{track.stylePromptLength}} caracteres (Límite: 200).*

---

## 2. Letra y Estructura con Metatags (Casillero de Letra)
> Copia este bloque en el campo **"Lyrics"** en Custom Mode de Suno:

```text
{{track.lyricsWithMetatags}}
```

---

## 3. Notas de Arreglo & Trucos de Producción
- **Estructura Utilizada:** {{track.structureType}}
- **BPM:** {{track.bpm}} | **Tonalidad:** {{track.musicalKey}}
- **Efectos Vocales:** {{track.vocalEffects}}
- **Transiciones y Dinámica:** {{track.dynamicDirectives}}

---

## 4. Variaciones Alternativas de Prompt
Si la primera generación no logra el sonido deseado en Suno, prueba estas alternativas:
- **Variación A (Más enérgica / rítmica):**
  `{{track.altPromptA}}`
- **Variación B (Más atmosférica / acústica):**
  `{{track.altPromptB}}`

---

## 5. Bitácora de Pruebas en Suno
| Generación | Link de Audio | Calificación (1-5★) | Comentarios / Fallos detectados |
|---|---|---|---|
| Take #1 | {{track.take1Url}} | {{track.take1Rating}} | {{track.take1Notes}} |
