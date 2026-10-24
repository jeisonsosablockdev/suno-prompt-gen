# Matriz de Calibración de Sliders y Presets A/B en Suno Modo Avanzado

Esta guía define cómo calibrar los 4 parámetros principales de Suno y generar nombres de pista codificados para pruebas comparativas.

---

## 1. Los 4 Sliders Paramétricos de Suno
1. **W (Weirdness / Chaos) [0 - 100]:**
   * `0 - 5`: Máxima predictibilidad y limpieza. Cero artefactos inesperados.
   * `10 - 20`: Textura óptima para club underground. Da calidez analógica y ligeras variaciones en filtros.
   * `25 - 45`: Sonidos más experimentales e inesperados (útil para Indie Dance / Indie Tech).
   * `> 50`: Caos sónico alto; riesgo de disonancia o ritmo roto.
2. **S (Style Influence) [0 - 100]:**
   * `80 - 100`: Adherencia estricta a los géneros, instrumentos y compases indicados en el prompt.
   * `60 - 75`: Mayor flexibilidad para que Suno introduzca variaciones armónicas propias.
3. **A (Audio Weight / Quality) [0 - 100]:**
   * `50 - 70`: Rango dulce. Mantiene buena pegada de frecuencias bajas sin saturación digital.
4. **V (Variety) [N / L / H]:**
   * `N` (Normal): Variación estándar de semillas entre tomas.
   * `L` (Low): Tomas muy similares para micro-ajustes.
   * `H` (High): Tomas radicalmente distintas sobre la misma estructura.

---

## 2. Presets Típicos para la Matriz A/B

| Preset | Nombre de Generación | W | S | A | V | Cuándo Usarlo |
|---|---|:---:|:---:|:---:|:---:|---|
| **Preset 1 (Strict Club)** | `I {title} 1 Max W:0 S:100 A:50 V:N v6` | 0 | 100 | 50 | N | Para garantizar que respete exactamente los compases |
| **Preset 2 (Analog Warmth)** | `I {title} 2 Max W:15 S:100 A:50 V:N v6` | 15 | 100 | 50 | N | **Recomendado por defecto:** calidez de sintes analógicos |
| **Preset 3 (Underground Edge)** | `I {title} 3 Max W:25 S:85 A:70 V:H v6` | 25 | 85 | 70 | H | Para descubrir transiciones y timbres más crudos |
| **Preset 4 (High Fidelity)** | `I {title} 4 Max W:10 S:90 A:80 V:N v6` | 10 | 90 | 80 | N | Para buscar un máster limpio con bombos definidos |
