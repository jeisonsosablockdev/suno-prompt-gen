---
title: "{{track.title}}"
slug: "{{track.slug}}"
artist: "{{track.artistSlug}}"
ep: "{{track.epSlug}}"
subgenre: "{{track.subgenre}}"
bpm: {{track.bpm}}
musical_key: "{{track.musicalKey}}"
total_bars: {{track.totalBars}}
duration_calculated_seconds: {{track.calculatedSeconds}}
duration_calculated: "{{track.calculatedDurationFormatted}}"
additional_seconds: 2
duration_exact_seconds: {{track.durationExactSeconds}}
duration_exact: "{{track.exactDurationFormatted}}"
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
*Configuración Base:* `{{track.bpm}} BPM` | `{{track.musicalKey}}` | `{{track.totalBars}} compases ({{track.exactDurationFormatted}} = {{track.durationExactSeconds}}s [física + 2s adicionales])` | `Suno {{track.sunoVersion}} Advanced`

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
| **Preset 1 (Strict Club)** | `{{track.namingPreset1}}` | 0 | 100 | 50 | N | Máxima adherencia estricta a compases |
| **Preset 2 (Analog Warmth - v1)** | `{{track.namingPreset2}}` | 15 | 85 | 50 | N | **Recomendado (v1):** Calidez y obediencia rítmica equilibrada |
| **Preset 3 (Underground Edge)** | `{{track.namingPreset3}}` | 25 | 85 | 70 | H | Texturas crudas y mayor variación |
| **Preset 4 (High Fidelity)** | `{{track.namingPreset4}}` | 10 | 90 | 80 | N | Máster pulido con graves controlados |

---

## 📊 6. Control de Versiones y Bitácora de Takes
| Versión / Take | Nombre Utilizado | Enlace de Audio | Calificación (1-5★) | Observaciones de Mezcla / Parámetros |
|---|---|---|:---:|---|
| **v1 (Take 1)** | `{{track.defaultGenerationName}}` | {{track.take1Url}} | {{track.take1Rating}} | {{track.take1Notes}} |

---

## 🗄️ 7. Historial de Versiones Anteriores (Archivadas)
> Las versiones previas se archivan aquí automáticamente como bloques colapsables para garantizar la trazabilidad idempotente de prompts:

{{track.versionHistoryDetails}}

