# Presets de Calibración de Sliders y Modelos en Suno V6

Esta guía define cómo calibrar los controles y sliders paramétricos de Suno V6 en Modo Avanzado / Custom Mode, y cómo seleccionar el modelo adecuado para cada tipo de producción.

---

## 1. La Regla Cardinal de los Sliders: `Variety = 0`

Suno documenta explícitamente que el slider **Variety** funciona *“ajustando y actualizando tus style prompts”*, y que reducirlo a **0** permite *“retener el control total de tus etiquetas de estilo”*.
- Si `Variety > 0`: Suno reescribe tu prompt antes de sintetizar, alterando o eliminando instrucciones precisas de instrumentos y secciones.
- Si `Variety = 0`: Suno ejecuta el texto tal como lo escribiste. **Todos los templates y presets profesionales asumen `Variety = 0`.**

> [!CAUTION]
> Escribir porcentajes dentro del prompt de texto (ej. `"weirdness 20%"`, `"variety 0%"`) **no mueve ningún slider**. Es texto muerto que consume espacio de caracteres. Los sliders deben configurarse en la interfaz bajo *Advanced Options*.

---

## 2. Los Cuatro Sliders Paramétricos de Suno V6

| Slider | Rango | Valor Neutral | Para Control Estricto | Para Exploración / Caos | Función Real en V6 |
|---|:---:|:---:|:---:|:---:|---|
| **Variety** | 0 – 100 | Default | **0** | 40 – 60 | Reescribe el prompt de estilo. Mantener siempre en **0** para producción determinista. |
| **Style Influence** | 0 – 100 (Loose → Strong) | 50 | **75 – 85** | 20 – 40 | Nivel de obediencia del modelo al texto del estilo. Más alto = sigue el mapa con fidelidad. |
| **Weirdness** | 0 – 100 (Safe → Chaos) | 50 | **20 – 30** | 60 – 80 | Dial de predictibilidad tímbrica. 20-30 aporta calidez analógica sin desafinaciones ni ritmos rotos. |
| **Audio Influence** | 0 – 100 | 50 | **60 – 75** | 25 – 40 | Solo aparece al subir audio/nota de voz. Define cuánto preserva la melodía y ritmo del seed. |

---

## 3. Selector de Modelos: `v6` vs `v6-wild` vs `v6-mini`

Suno V6 no es un único motor, sino una familia de tres modelos con personalidades acústicas distintas:

| Modelo | Propósito Principal | Disponibilidad | Cuándo Usarlo |
|---|---|---|---|
| **`v6`** | Máxima precisión, consistencia y fidelidad sonora | Pro y Premier | Tienes un prompt detallado con mapa de instrumentos y buscas un resultado profesional exacto. |
| **`v6-wild`** | Variedad, carácter orgánico y sorpresas tímbricas | Pro y Premier | Cuando `v6` suena plano, robótico o genérico, o en géneros de alta saturación que `v6` comprime en exceso (Metal, Drum & Bass, Grunge). |
| **`v6-mini`** | Velocidad y bajo consumo | Todos (incluido Free) | Pruebas rápidas de letras, conteo silábico y bocetos armónicos antes de gastar generaciones Pro. |

---

## 4. Cuándo Activar `Max Mode`

`Max Mode` no es un slider, es un conmutador de alto cómputo:
- **Activar cuando:** El track supere los 2 minutos (evita que la mezcla se degrade en la segunda mitad), para covers muy fieles o cuando se requiera consistencia vocal estricta.
- **Dejar desactivado cuando:** Se esté explorando conceptos, probando letras o generando variaciones preliminares.

---

## 5. Presets Típicos para Pruebas A/B en el Title Box

Formato canónico del título de generación:
`I {título} {take} Max W:{w} S:{s} A:{a} V:{v} {versión}`

| Preset | Naming de Generación | W | S | A | V | Modelo | Propósito |
|---|---|:---:|:---:|:---:|:---:|:---:|---|
| **P1: Determinista (Studio Master)** | `I {t} 1 Max W:20 S:85 A:50 V:0 v6` | 20 | 85 | 50 | 0 | `v6` | **Default recomendado:** Obedece el mapa, calidez analógica, mezcla limpia. |
| **P2: Estricto (Absolute Control)** | `I {t} 2 Max W:0 S:100 A:50 V:0 v6` | 0 | 100 | 50 | 0 | `v6` | Máxima adherencia milimétrica a compases y secciones. Cero desviaciones. |
| **P3: Orgánico / Live Feel** | `I {t} 3 Max W:25 S:80 A:50 V:0 v6-wild` | 25 | 80 | 50 | 0 | `v6-wild` | Ideal para Rock, Metal o Funk donde se busca sensación de directo y batería suelta. |
| **P4: Rescate de Voz Apagada** | `V {t} 4 Max W:20 S:80 A:70 V:0 v6-wild` | 20 | 80 | 70 | 0 | `v6-wild` | Cuando `v6` genera voces encajonadas; rescata brillo tímbrico y presencia. |
