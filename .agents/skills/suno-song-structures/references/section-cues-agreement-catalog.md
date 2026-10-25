# Catálogo de Cues de Sección y Regla de Concordancia Estricta

En Suno V6, los metatags entre corchetes dentro de la letra no son meros separadores de estrofas; son **cues directos de sincronización temporal**.

---

## 1. La Regla de Concordancia Palabra por Palabra (Agreement Rule)

> **Lo que pidas en el Style Box y lo que escribas en el Cue de la letra deben concordar palabra por palabra.**

Si el casillero de estilo dice que el verso tiene *"clean acoustic guitar, quiet drums"* pero en la letra pones `[Verse 1 - heavy distorted guitar, massive drums]`, el modelo entra en conflicto cognitivo y su solución por defecto es **adelgazar o silenciar la mezcla**.

---

## 2. Catálogo Canónico de Cues Espejados

| Sección | Tag Simple (Obsoleto en V6) | Tag con Cue Espejado (Recomendado en V6) |
|---|---|---|
| **Intro** | `[Intro]` | `[Intro - electric guitar riff, 4 bars, no vocal]` |
| **Estrofa 1** | `[Verse 1]` | `[Verse 1 - riff continues under vocal, palm-muted, drums quiet]` |
| **Pre-Coro** | `[Pre-Chorus]` | `[Pre-Chorus - building snare roll, chords open up, rising tension]` |
| **Estribillo** | `[Chorus]` | `[Chorus - wall of guitars, full kit with crash cymbal, loudest]` |
| **Estrofa 2** | `[Verse 2]` | `[Verse 2 - groove continues, subtle guitar fills, vocal conversational]` |
| **Puente** | `[Bridge]` | `[Bridge - clean guitar only, half-time drums, bass drops out]` |
| **Solo Instrumental** | `[Solo]` | `[Guitar Solo - 8 bars over the main riff, expressive high notes]` |
| **Clímax Final** | `[Chorus]` | `[Final Chorus - riff on top of the wall, maximum energy, full belt]` |
| **Cierre** | `[Outro]` | `[Outro - band stops, vocal alone holds last note]` |
| **Parada Final** | `[End]` | `[End - hard stop on the last hit, silence]` |

---

## 3. Arquitectura Cronológica Estándar (~3:00 - 3:30 min)

```text
[Intro - clean guitar arpeggio, 4 bars, instrumental]

[Verse 1 - arpeggio continues under vocal, drums quiet, bass enters]
Porch light on, the road runs long
You said you'd call, the phone stayed gone

[Pre-Chorus - snare builds, bass walks up, vocal rises]
Now the shadows hit the wall
And I'm waiting for your call

[Chorus - full band, wall of guitars, loud and wide]
Sta-a-ay, just one more ni-i-ight
Don't drive awa-a-ay from the porch light

[Verse 2 - rhythm steady, palm-muted guitar, vocal closer]
Coffee's cold, the radio plays
Every song is about the ways

[Pre-Chorus - snare builds, chords open up]
Now the headlights hit the wall
And I'm ready for it all

[Chorus - full band, doubled vocals in harmony]
Sta-a-ay, just one more ni-i-ight
Don't drive awa-a-ay from the porch light

[Bridge - piano and clean guitar only, drums half-time, bass out]
Was it something that I said?
Or the ghosts inside your head?

[Guitar Solo - 8 bars over the riff, melodic and soaring]

[Final Chorus - maximum power, full belt, crash cymbals]
Sta-a-ay, just one more ni-i-ight
Don't drive awa-a-ay from the porch light

[Outro - band stops completely, vocal alone holds last word]
Sta-a-ay
[End - silence]
```
