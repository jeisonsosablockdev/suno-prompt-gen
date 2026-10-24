---
name: suno-songwriting
description: "Especialista en letrística, métrica silábica, esquemas de rima y directivas de interpretación vocal diseñadas específicamente para el motor de síntesis de voz de SUNO AI."
---

# Suno Songwriting Skill

Esta skill instruye al agente en cómo escribir letras y directivas de interpretación para **Suno AI (v3.5 y v4)**.

## 1. Principios Fundamentales para Suno
1. **Consistencia Silábica (Evitar el atropellamiento vocal):**
   * Suno alucina sílabas o canta con prisa anti-natural si un verso tiene 8 sílabas y el siguiente tiene 16 en el mismo compás.
   * Mantén un cómputo silábico parejo en cada estrofa (ej. 8-8-8-8 o 10-10-10-10).
2. **Acentuación Rítmica:**
   * La última sílaba acentuada debe coincidir con el pulso fuerte del compás musical.
3. **Economía de Palabras:**
   * Menos es más. Suno interpreta mejor frases concisas con espacio para que la melodía y el timbre respiren.

## 2. Directivas Vocales en Línea
Para guiar cómo debe cantar la voz sintetizada, utiliza paréntesis redondos dentro del texto de la letra:
* `(whisper)` / `(susurrado)`: Para versos íntimos o intros.
* `(belting)` / `(grito melódico)`: Para clímax de estribillo.
* `(falsetto)`: Para pasajes agudos o transiciones etéreas.
* `(vocal run)` / `(ad-lib)`: Para adornos vocales improvisados.
* `(spoken word)` / `(hablado)`: Para introducciones narradas o puentes cinematográficos.
* `[Backing Vocals: echo]`: Para segundas voces y ecos.

## 3. Esquemas de Rima Recomendados
* **ABAB (Clásico y dinámico):** Ideal para estrofas pop y rock.
* **AABB (Rima en pareja):** Excelente para coros pegadizos y rimas urbanas.
* **AAAB / AAAA (Tensión creciente):** Útil en pre-coros o antes de un drop.

Consulta las guías en `references/`:
* [vocal-delivery-tags.md](references/vocal-delivery-tags.md) — Diccionario exhaustivo de directivas de voz.
* [rhyme-and-meter.md](references/rhyme-and-meter.md) — Guía práctica de métrica silábica.
