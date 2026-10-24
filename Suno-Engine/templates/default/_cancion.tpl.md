---
title: "{{track.title}}"
slug: "{{track.slug}}"
artist: "{{track.artistSlug}}"
ep: "{{track.epSlug}}"
subgenre: "{{track.subgenre}}"
bpm: {{track.bpm}}
musical_key: "{{track.musicalKey}}"
suno_version: "{{track.sunoVersion}}"
mode: "Advanced"
is_instrumental: {{track.isInstrumental}}
vocal_elements: "{{track.vocalElements}}"
default_generation_name: "{{track.defaultGenerationName}}"
parameters:
  weirdness: {{track.paramWeirdness}}
  style_influence: {{track.paramStyleInfluence}}
  audio_weight: {{track.paramAudioWeight}}
  variety: "{{track.paramVariety}}"
status: {{track.status}} # draft | tested | approved
audio_url: "{{track.audioUrl}}"
created_at: "{{date}}"
updated_at: "{{date}}"
---

# {{track.numberFormatted}} - {{track.title}} (Club Extended Mix)
*Artista:* [[Artistas/{{track.artistSlug}}/_artista|{{track.artistName}}]] | *EP:* [[Artistas/{{track.artistSlug}}/{{track.epSlug}}/_ep|{{track.epTitle}}]]
*Configuración Base:* `{{track.bpm}} BPM` | `{{track.musicalKey}}` | `Suno {{track.sunoVersion}} Advanced`

> [!NOTE]
> **Vibe & Dirección Sonora:** {{track.vibeDescription}}
> Canción diseñada con micro-metatags por sección, cómputo estricto de compases, exclusiones negativas y matriz de sliders.

---

## 🎛️ 1. Nombre de la Pista (Title Box)
> Copia este texto exactamente en el campo **"Title"** de Suno:

```text
{{track.defaultGenerationName}}
```

---

## 🎧 2. Style of Music (Casillero de Estilo)
> Copia este bloque en el casillero **"Style of Music"**:

```text
{{track.stylePrompt}}
```

---

## 🚫 3. Exclude Styles (Casillero de Exclusiones Negativas)
> Copia este bloque en el casillero **"Exclude Styles"**:

```text
{{track.excludeStyles}}
```

---

## 📝 4. Lyrics & Structure (Casillero de Letra)
> Copia este bloque en el casillero **"Lyrics"** en Modo Avanzado:

```text
{{track.lyricsWithMetatags}}
```

---

## 🎚️ 5. Matriz de Variaciones de Sliders para Pruebas A/B

| Preset | Nombre de Generación | W (Weirdness) | S (Style Inf.) | A (Audio) | V (Variety) | Objetivo Sonoro |
|---|---|:---:|:---:|:---:|:---:|---|
| **Preset 1 (Strict Club)** | `{{track.namingPreset1}}` | 0 | 100 | 50 | N | Máxima adherencia a compases |
| **Preset 2 (Analog Warmth)** | `{{track.namingPreset2}}` | 15 | 100 | 50 | N | **Recomendado:** Calidez y modulación analógica |
| **Preset 3 (Underground Edge)** | `{{track.namingPreset3}}` | 25 | 85 | 70 | H | Texturas crudas y mayor variación |
| **Preset 4 (High Fidelity)** | `{{track.namingPreset4}}` | 10 | 90 | 80 | N | Máster pulido con graves controlados |

---

## 📊 6. Bitácora de Generaciones en Suno
| Take | Nombre Utilizado | Enlace de Audio | Calificación (1-5★) | Observaciones de Mezcla / Drop |
|---|---|---|:---:|---|
| Take 1 | `{{track.namingPreset2}}` | {{track.take1Url}} | {{track.take1Rating}} | {{track.take1Notes}} |
