# Guía de Aislamiento de Instrumentos Solistas (Sin Banda Fantasma)

Una de las confusiones más comunes en Suno V6 es la diferencia entre **"Instrumental"** y **"Solo"**:
* **`Instrumental`** = No hay cantante; la banda completa (batería, bajo, teclados) sigue tocando.
* **`Solo`** = Un único ejecutante con un único instrumento, en una sala vacía, sin ningún otro acompañamiento.
* **`Guitar Solo`** en los datos de entrenamiento = Una sección dentro de una canción de rock con banda completa de fondo.

Si pides *"acoustic guitar solo"*, Suno generará una banda completa de rock con un solo de guitarra encima. Para obtener **una sola guitarra, un solo piano o una batería sola**, se debe aplicar el **Método en Tres Partes**:

---

## 1. El Método en Tres Partes para Instrumentos Solistas

### Parte 1: El Casillero de Estilo (Descripción Positiva del Ejecutante)
Describe a una persona real tocando sola en una habitación física. Jamás menciones los instrumentos que no quieres:
```text
One acoustic guitar, played by a single performer alone in a quiet room, close-miked, fingerstyle. No other musicians and no other instruments at any point. The guitar carries melody and accompaniment together. Gentle dynamics, a little string noise, unhurried, 72 BPM. Ends on a single ringing chord.
```

### Parte 2: El Casillero de Exclusiones (Exclude Styles)
Coloca todas las familias instrumentales existentes para que el filtro bloquee cualquier adición de la red neuronal:
```text
drums, percussion, bass, synth, pads, strings, piano, electric guitar, vocals, backing vocals, humming, choir, orchestra
```

### Parte 3: El Casillero de Letra (Metatags Exclusivos por Sección)
El error común es dejar la letra vacía. Si dejas la letra vacía, Suno meterá una banda a mitad de canción. Debes etiquetar **cada una de las secciones** como solista:
```text
[Intro - solo acoustic guitar only]
[Section 1 - solo acoustic guitar only, main melody]
[Section 2 - solo acoustic guitar only, variation]
[Section 3 - solo acoustic guitar only, quieter]
[End - one ringing chord, then silence]
```

---

## 2. Plantilla para Piano Solista (Concert Hall)

### Style:
```text
One grand piano, played by a single pianist in a concert hall, recorded close with natural room reverb. No other instruments and no voice at any point. Rubato, expressive, quiet opening, builds in the middle, returns to quiet. 66 BPM, key of D minor. Ends on a sustained chord with pedal held.
```

### Exclude:
```text
drums, percussion, bass, synth, pads, strings, guitar, vocals, choir, orchestra, brass
```

### Lyrics:
```text
[Intro - solo piano only, quiet]
[Section 1 - solo piano only, melody]
[Section 2 - solo piano only, builds dynamic tension]
[Section 3 - solo piano only, returns to quiet]
[End - sustained chord held until silence]
```

---

## 3. Plantilla para Intro Solo de Batería (La banda entra después)

Cuando quieres que la batería toque sola en la intro y la banda entre en el compás 9:
* **No uses el casillero Exclude** (porque si excluyes guitarras, nunca podrán entrar en el verso).
* **Usa la regla de compases exactos en el estilo y en la letra:**

```text
Style:
Classic Rock, 120 BPM. The song opens with 8 bars of drums completely alone: no guitar, no bass, no vocal, no other instrument until bar nine. On bar nine the full band enters together.

Lyrics:
[Intro - drums only, 8 bars, nothing else]
[Verse 1 - guitar, bass and vocal enter together on beat one]
```
