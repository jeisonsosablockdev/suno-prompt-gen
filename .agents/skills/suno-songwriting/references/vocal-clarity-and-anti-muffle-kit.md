# Kit de Claridad Vocal y Anti-Voz Apagada (*Muffled Vocals*) en Suno V6

El síndrome de la "voz apagada" (*muffled vocal* o sensación de voz tras una manta) es una de las quejas más comunes en Suno V6. Se debe a tres causas completamente distintas que requieren tres soluciones diferentes.

---

## 1. El Diagnóstico en 3 Fases (Triaje de 90 Segundos)

| Fase de Diagnóstico | Pregunta de Escucha | Causa Raíz Identificada | Solución Técnica |
|---|---|---|---|
| **Fase 1: La Intro** | ¿La intro instrumental suena clara y con brillo? | Si es **No**, el renderizado general del modelo falló. | Regenerar con el mismo prompt o cambiar al modelo `v6-wild`. |
| **Fase 2: El Despeje** | ¿La voz se vuelve clara cuando la banda se detiene? | Si es **Sí**, el problema es **Densidad de Arreglo** (frecuencias medias saturadas). | Adelgazar el arreglo en la estrofa: quitar sintes, pads o segundas guitarras bajo la voz. |
| **Fase 3: La Colocación** | ¿La voz suena nítida pero hundida en el fondo de la mezcla? | Si es **Sí**, el problema es **Colocación Espacial** en el Style Box. | Aplicar la directiva física de colocación vocal al frente. |

---

## 2. La Directiva de Colocación Vocal en el Style Box

En lugar de usar palabras inútiles como *"crisp, clear vocals"* (que Suno ignora), usa la **fórmula física de colocación en mezcla**:

```text
Female lead vocal, in front of the band, close-miked and dry, the loudest element in the mix at all times, a little brighter than the instruments, no reverb on the verses, short plate reverb on the chorus only. Instruments sit behind and below the voice.
```

### Por qué Funciona:
* `in front of the band`: Coloca la pista de voz en primer plano psicoacústico.
* `close-miked and dry`: Elimina la reverberación cavernosa que empasta los agudos.
* `instruments sit behind and below the voice`: Obliga al sintetizador a atenuar las frecuencias medias de guitarras y teclados que chocan con la voz.

---

## 3. El Preset de Exclusión Anti-Reverb Cavernosa

Si la voz continúa sonando lejana o bañada en eco, añade este bloque al casillero `Exclude Styles`:

```text
reverb, echo, delay, cavernous, wet vocals, stadium reverb, hall reverb, distant vocals, live concert acoustics, muddy low-mids
```

---

## 4. Ajustes de Remasterizado Sutil en Suno Editor

Si un take tiene la interpretación melódica perfecta pero la voz quedó ligeramente oscura:
1. Abre el track en el Editor de Suno y selecciona **Create Cover / Remaster**.
2. Variación: **Subtle** (preserva la melodía y el timbre original intactos).
3. Estilo: **Clarity** (abre el aire en agudos y reduce el barro en 300 Hz).
4. *Evita:* Los presets **Boost** (tiende a ensanchar el estéreo y enterrar la voz aún más) o **Natural** (suaviza los agudos y empeora las pistas densas).
