---
artist_name: "{{artist.name}}"
slug: "{{artist.slug}}"
vocal_type: "{{artist.vocalDescription}}"
primary_genres:
{{artist.genresYamlList}}
default_bpm_range: "{{artist.bpmRange}}"
signature_sound: "{{artist.signatureSound}}"
created_at: "{{date}}"
updated_at: "{{date}}"
---

# Artista: {{artist.name}}

> [!NOTE]
> **Firma Sonora & Identidad Vocal:** {{artist.vocalDescription}}
> Este documento define la identidad perenne del artista para asegurar que todas las canciones y EPs compartan coherencia tímbrica y estilística en Suno AI.

---

## 1. Perfil Vocal & Timbre Insignia
- **Tipo de Voz:** {{artist.vocalDescription}}
- **Descriptores Recomendados para Suno:** `{{artist.signatureVocalTags}}`
- **Tonalidades Habituales:** {{artist.preferredKeys}}

---

## 2. Paleta Sonora & Producción
- **Géneros Raíz:** {{artist.primaryGenres}}
- **Instrumentación Clave:** {{artist.instruments}}
- **Texturas de Producción:** {{artist.productionTextures}}
- **BPM Promedio:** {{artist.bpmRange}}

---

## 3. Style Prompt Maestro del Artista
```text
{{artist.masterStylePrompt}}
```

---

## 4. Tags Prohibidos / Sensibles
> [!WARNING]
> Para evitar baneos o degradación de audio en Suno, evitar nombres de artistas comerciales reales y tags genéricos vacíos:
{{artist.bannedTagsList}}

---

## 5. Discografía en Suno-Vault
- EPs Registrados:
{{artist.epLinksList}}
