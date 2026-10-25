# Diccionario de Directivas Vocales y Sintaxis en Suno AI (V6)

En Suno V6, la interpretación vocal se controla mediante la interacción de dos capas: los **verbos de desempeño** en el casillero de estilo y las **etiquetas sintácticas** en el casillero de letra.

---

## 1. La Regla de Oro: Corchetes vs Paréntesis

| Símbolo | Propósito para el Motor Suno | ¿El Motor lo Canta en Voz Alta? | Ejemplo de Uso |
|:---:|---|:---:|---|
| **`[...]`**<br>*(Corchetes cuadrados)* | **Instrucciones Técnicas y Metatags:** Indican cambios de sección, cantante asignado o energía del sintetizador. | ❌ **NUNCA se canta** | `[Verse 1 - Singer A]`<br>`[Chorus: full belt]`<br>`[Silence]` |
| **`(...)`**<br>*(Paréntesis redondos)* | **Vocalizaciones y Coros Secundarios:** Letra que SÍ debe ser interpretada por segundas voces, ecos o ad-libs. | ✅ **SÍ se canta** | `Come home (come home)`<br>`I'll wait (wait for you)`<br>`(yeah, yeah)` |

> [!WARNING]
> Escribir instrucciones técnicas en paréntesis redondos como `(whisper)` o `(female vocal)` puede provocar que la voz de Suno **cante la palabra "whisper"** dentro de la melodía. Usa siempre `[...]` para directivas del sistema.

---

## 2. Verbos de Desempeño Vocal para el Casillero de Estilo

En el casillero de estilo, separa la **identidad** del cantante (rango, timbre) de su **desempeño** (qué hace la voz físicamente compás a compás). Usa verbos de acción física:

| Verbo en Inglés | Efecto Sonoro en Suno V6 | Cuándo Usarlo |
|---|---|---|
| **`holds`** | Sostiene la nota o la última palabra por un compás entero. | Baladas, finales de coro, clímax emocional. |
| **`breathes`** | Toma una respiración audible y natural antes de atacar la frase. | Estrofas íntimas, acústico, folk. |
| **`pushes`** | Abre la proyección vocal con mayor volumen y potencia. | Entrada del coro o estribillo. |
| **`pulls back`** | Reduce la intensidad, susurra o se acerca al micrófono. | Estrofas reflexivas, puentes o pre-coros íntimos. |
| **`sings every line`** | Evita la locución hablada; fuerza contornos melódicos cantados. | Baladas country, pop lento. |
| **`unhurried`** | Tempo relajado en la voz, canta ligeramente por detrás del beat. | Jazz, balada, R&B clásico. |
| **`conversational`** | Fraseo ágil y natural cercano a una conversación. | Estrofas pop, indie rock. |
| **`belting`** | Proyección potente en registro de pecho agudo. | Clímax del estribillo, gospel, rock. |
| **`falsetto`** | Registro de cabeza aireado y etéreo. | Transiciones de R&B, indie pop, puentes. |
| **`doubles his/her voice`** | Dobla la voz principal en el estéreo para engrosar el gancho. | Estribillo final, coros pop. |

---

## 3. Ejemplo de Integración en el Style Box

```text
Female lead, warm alto range, sings every line rather than speaking it, unhurried, takes a breath before each line, holds the last word of each chorus line for a full bar, soft and close to the mic in the verses, opens up and pushes with full belt in the chorus.
```

---

## 4. Desempeño, Flow y Dicción Rítmica Urbana (Rap, Club Vocals & Reggaeton)

Para géneros de club electrónico fusionados con voces urbanas (Melodic Techno, Tech House, Latin Club), la dicción y el fraseo temporal son críticos para evitar balbuceos (*mumbling*):

| Directiva Vocal | Comportamiento Tímbrico en Suno V6 | Efecto en la Pista |
|---|---|---|
| **`tight rapped delivery`** | Fraseo rápido y métricamente encajado en la cuadrícula de semicorcheas sin arrastre ni melodía cantada. | Rimas secas y tajantes que no interfieren con el groove del bombo. |
| **`percussive consonant attack`** | Articulación tajante y marcada en consonantes oclusivas y fricativas ($t, k, p, ch, s$), forzando transitorios vocales percusivos. | Claridad fonética absoluta en vocales rápidas o rapeadas. |
| **`behind-the-beat swagger`** | El fraseo vocal entra micro-segundos por detrás del tiempo fuerte del bombo (*laid-back pocket*). | Imprime actitud desafiante, chulesca (*swagger*) y groove elástico. |
| **`commanding declaration performance intent`** | Proyección con autoridad y timbre firme en tono imperativo / declarativo. | Evita inflexiones melódicas tiernas; proyecta presencia escénica dominante. |
| **`late 20s latam male reggaeton vocals`** | Especificación demográfica y regional precisa (edad, registro y acento). | Modela el formante vocal exacto sin ambigüedad geográfica. |
