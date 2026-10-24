# Sintaxis de Micro-Metatags por Sección en Suno Modo Avanzado

Cada sección del casillero **Lyrics** debe encabezarse con una serie de corchetes que definen el estado tímbrico y energético exacto del sintetizador de audio.

## 1. La Cadena Canónica de 6 Descriptores
```text
[Style: ...][Mood: ...][Energy: ...][Beat: ...][Instrument: ...][FX: ...]
```

### Opciones Típicas por Dimensión:

| Descriptor | Valores Recomendados para Club |
|---|---|
| **Style** | `Dark Disco`, `NY House`, `Tech House`, `Melodic House`, `Peak Time Techno`, `Indie Dance` |
| **Mood** | `Nightlife`, `Dark Party`, `Hypnotic`, `Tension`, `Emotional Euphoria`, `Driving Club` |
| **Energy** | `Building`, `Rising`, `Suspended`, `High Groove`, `Peak Groove`, `Driving`, `Reset`, `Groove Fade` |
| **Beat** | `4-on-the-floor`, `Stripped Drums`, `Driving 4x4 Kick`, `Rolling Bass Groove`, `Kick Only`, `Half-Time` |
| **Instrument** | `909 Kick`, `Filtered Bass`, `Juno Bass`, `SH-1 Arp`, `Moog Sub`, `Pads`, `Arp Texture`, `Main Synth Lead`, `Percussive Texture` |
| **FX** | `Filtered Low End`, `Analog Sweep`, `Filter Opening`, `Analog Tension`, `Reverb Lift`, `Delay Tail`, `Open Cutoff`, `Analog Drive`, `Modulated Motion`, `Deep Reverb` |

---

## 2. Ejemplos por Tipo de Sección

### Intro A (Filtro cerrado)
```text
[Intro A]
[Style: Dark Disco, NY House][Mood: Nightlife][Energy: Building][Beat: 4-on-the-floor][Instrument: 909 Kick, Filtered Bass, Simple Synth Arp][FX: Filtered Low End, Analog Sweep]
[16 bars of filtered kick and filtered bass with simple arpeggio]
```

### Break de Tensión (Subida)
```text
[Break 1B]
[Style: Dark Disco, NY House][Mood: Tension][Energy: Rising][Instrument: Pads, Arp Texture, Transitional Percussion][FX: Reverb Lift, Delay Tail, Filter Rise]
[4 bars completing the tension builder before the first drop]
```

### Full Drop (Pico de energía)
```text
[Full Drop]
[Style: Dark Disco, NY House][Mood: Party, Dark Euphoria][Energy: Peak Groove][Instrument: 909 Drums, Modulated Synths, Juno Bass, SH-1 Arp][Vocal: Vocoder][FX: Modulated Synth Motion, Saturation]
I love disco nights
I love disco nights
```

### Outro (DJ Tool para mezcla)
```text
[Outro]
[Style: Dark Disco, NY House][Mood: Night Groove][Energy: Groove Fade][Beat: 4-on-the-floor][Instrument: 909 Percussion, Filtered Bass Fragments][FX: Filter Down, DJ Tool Loop]
[32 bars outro for DJ mixing ending with percussion-driven groove]
```
