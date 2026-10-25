---
name: suno-songwriting
description: "Especialista en ingeniería vocal, letrística fonética, balance métrico silábico, elongación gráfica de vocales, directivas de interpretación y arquitectura de duetos para SUNO AI v6."
---

# Suno Songwriting — Skill Maestra de Letrística e Ingeniería Vocal V6

Esta skill instruye al agente en cómo escribir letras profesionales y directivas de interpretación vocal diseñadas específicamente para el motor de síntesis de voz de **Suno AI v6**.

---

## 1. Principios Fundamentales de Letrística en V6

Suno V6 interpreta las letras de forma literal y matemática. Para lograr una interpretación orgánica que cante con emoción y dinamismo en lugar de recitar mecánicamente, el agente debe aplicar estas **cuatro palancas en orden**:

### Palanca 1: Balance y Densidad Silábica
* **Baladas y Pop Lento:** 6 a 8 sílabas por verso. Menos sílabas = más tiempo para sostener notas.
* **Pop Dinámico y Rock:** 7 a 10 sílabas por verso con acentuación métrica consistente.
* **Hip-Hop y Rap:** 10 a 14 sílabas por compás con rimas internas y pausas respiratorias.
* **Margen de Variación:** Mantén una fluctuación máxima de $\pm 1$ a $2$ sílabas entre líneas consecutivas para evitar que el motor acelere de golpe.

### Palanca 2: Elongación Gráfica de Vocales
En el estribillo o líneas principales, escribe el estiramiento fonético de la vocal directamente en el texto:
* Escribe `"Sta-a-ay, just one more ni-i-ight"` en vez de *"Stay, just one more night"*.
* Escribe `"Don't drive awa-a-ay"` en vez de *"Don't drive away"*.
Esto obliga al sintetizador a abrir la boca virtual y sostener la nota durante varios pulsos del compás.

### Palanca 3: Verbos de Desempeño en el Style Box
En el casillero de estilo, describe la acción física del cantante usando verbos de desempeño:
* `holds`: Sostiene la última palabra por un compás entero.
* `breathes`: Toma una respiración natural antes de atacar la línea.
* `pushes`: Proyecta la voz con volumen y potencia (*belting*) en el coro.
* `pulls back`: Se acerca al micrófono y canta íntimo/susurrado en la estrofa.

### Palanca 4: El Tag `[Silence]` Inline
Para evitar que versos rápidos colisionen entre sí, coloca `[Silence]` al final de la línea sin signos de puntuación previos:
```text
I kept the light on for you [Silence]
And waited till the morning came
```

---

## 2. Sintaxis Canónica: Corchetes vs Paréntesis

* **`[Corchetes cuadrados]` = Instrucciones Técnicas del Sistema (NO SE CANTAN):**  
  Se usan para marcar secciones (`[Verse 1]`, `[Chorus]`), directivas de voz (`[Chorus: full belt]`), silencios (`[Silence]`) y nombres de cantantes (`[Singer A]`).
* **`(Paréntesis redondos)` = Letra que SÍ se Canta (Voces Secundarias):**  
  Se usan exclusivamente para segundas voces, ecos, coros de apoyo y ad-libs:  
  `Come home (come home)`  
  `Never let me go (never let me go)`

---

## 3. Arquitectura de Duetos (Las 3 Formas Obligatorias)

Todo dueto en V6 debe adoptar una de estas tres configuraciones explícitas:

1. **Forma 1: Alternancia por Secciones:**  
   `Singer A` canta una estrofa completa; `Singer B` canta la siguiente. Se unen en el estribillo.
2. **Forma 2: Call and Response (Líneas $\le 6$ Sílabas):**  
   Diálogo rápido verso a verso. Cada línea debe medir **6 sílabas o menos** etiquetadas con `[Singer A]` y `[Singer B]` para evitar que las voces se crucen a mitad de palabra.
3. **Forma 3: Armonía Simultánea:**  
   Ambos cantantes interpretan exactamente las **mismas palabras** en el estribillo (*"Singer B sings a third above in harmony"*).

---

## 4. Reglas de Formato y Fonética Limpia

* **Cero Números en Dígitos:** Escribe siempre palabras: *"twenty-four seven"* (nunca *"24/7"*), *"three fifteen"* (nunca *"3:15"*).
* **Acrónimos Deletreados:** Separa con guiones si deben cantarse letra a letra: *`D-M-V`*, *`F-B-I`*.
* **Colocación Vocal en Mezcla:** Incluye siempre en el estilo:  
  `Female lead vocal, in front of the band, close-miked and dry, loudest element in the mix, instruments sit behind and below the voice.`
* **Límite Físico de 5000 Caracteres (Gate 7 Anti-Trimming):** Suno recorta automáticamente cualquier letra que supere 5,000 caracteres emitiendo la advertencia *"We trimmed your paste to fit the 5000-character limit"*, lo cual mutila el outro y las etiquetas finales de cierre (`[End]`). La letra debe mantenerse siempre $\le 5000$ caracteres (sweet spot: 2,000 a 3,800 caracteres). Evita repetir el catálogo completo de estilos en cada sección; usa micro-tags de variación dinámica y compases.

---

## 5. Guías de Referencia en `references/`

Consulta los documentos adjuntos de esta skill:
* [rhyme-and-meter.md](references/rhyme-and-meter.md) — Tabla métrica por género, palabras clave y reglas de lenguaje conversacional.
* [vocal-delivery-tags.md](references/vocal-delivery-tags.md) — Diccionario de verbos de acción vocal y reglas sintácticas `[...]` vs `(...)`.
* [duet-architectures-and-line-sheets.md](references/duet-architectures-and-line-sheets.md) — Las 3 formas de dueto y la hoja de control de líneas $\le 6$ sílabas.
* [stretched-vowels-and-silence-tags.md](references/stretched-vowels-and-silence-tags.md) — Reglas para elongar vocales gráficamente y aplicar `[Silence]`.
* [vocal-clarity-and-anti-muffle-kit.md](references/vocal-clarity-and-anti-muffle-kit.md) — Diagnóstico y presets contra voces apagadas o lejanas.
