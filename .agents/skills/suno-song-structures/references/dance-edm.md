# Estructura Dance, Techno & House para Suno V6

La música electrónica de club exige una gestión milimétrica de la tensión, los compases y la liberación en el sintetizador. En Suno V6, los drops y transiciones deben guiarse con **cues de sección espejados** y términos de percusión física extraídos de [`dance-techno-house-sound-glossary.md`](../../suno-prompter/references/dance-techno-house-sound-glossary.md).

---

## 1. Esqueleto Canónico para Club / Festival (~3:15 - 3:45 min)

```text
[Intro - low-pass filtered kick pulse and ticking hats, 16 bars]
(Pulso sordo que introduce el tempo sin revelar el bajo)

[Intro B - filter cutoff opening, driving 909 bass groove, 16 bars]
(Entran el bombo 909 pleno, el plato abierto a contratiempo y el arpegio líder)

[Verse 1 - stripped beat, bouncy FM pluck bass, conversational vocal hook]
(Estrofa minimalista con bombo y bajo dejando espacio al gancho vocal o chop)
Bassline moves the room
Keep it low, feel the groove

[Build-up - accelerating snare roll, pitch-rising synth, white noise riser]
(Aceleración de caja en semicorcheas, filtro pasa-altos cortando graves, subida de pitch)
(Vocal repeat: "Feel the groove... feel the groove...")

[Beat Drop - sub drop impact, heavy 909 kick, screaming 303 acid lead, loud]
(Liberación masiva: entran el subgrave, el bombo contundente y el sintetizador líder sin voces largas)

[Post-Drop Groove - full driving 909 ride cymbal, wide stereo claps]
(Consolidación del baile con máxima percusión y ritmo de pista)

[Breakdown - kick drops out, warm lush analog pads, atmospheric space]
(Corte total de bombo; descanso armónico con colchón de acordes y eco de cinta)

[Build-up 2 - rapid snare fills, intense filter sweep, massive rising tension]
(Segunda subida más corta y explosiva hacia el clímax)

[Climax Drop - full industrial rumble kick, layered synth leads, maximum club energy]
(Punto más alto de la pista con leads duplicados en estéreo)

[Outro - 32 bars stripped DJ tool loop, 909 percussion and filtered bass fragments]
(Sección extendida para mezcla de DJ que desciende progresivamente)

[End - hard stop on last kick hit, silence]
```

---

## 2. Los Cuatro Mandamientos de Estructura de Club en V6

1. **Aislamiento Total del `[Beat Drop]`:**  
   Nunca coloques letras largas ni versos sobre la sección del drop. Suno necesita toda su capacidad de atención neuronal para sintetizar el bajo complejo y el sinte líder. Limita la letra en el drop a un *vocal chop* de 2 a 4 palabras como máximo (ej. `"Feel the groove"` o `"Let the bass hit"`).
2. **Corte de Graves en el `[Build-up]`:**  
   Indica siempre en el cue que el bajo se retira en la subida (*"bass cuts out, rising snare roll, white noise sweep"*). Esto genera un contraste físico de volumen enorme cuando el bombo y el subgrave reingresan en el drop.
3. **Cómputo Explícito de Compases en la Intro:**  
   Usa marcas de compases (`16 bars`, `32 bars`) para evitar que el drop llegue de forma prematura en el segundo 20 de la pista.
4. **Outro para DJ (*DJ Tool Loop*):**  
   Termina siempre con una directiva de bucle rítmico desprovisto de melodía (*"stripped percussion loop for DJ mixing"*), seguido obligatoriamente de `[End - hard stop on last hit]`.
