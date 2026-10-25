# Lista Negra de Anti-Patrones en Suno V6 (23 Errores Fatales)

Esta lista condensa los errores más destructivos documentados en miles de horas de pruebas de la comunidad con Suno V6. Cualquier prompt que incurra en estos puntos degradará su fidelidad o desperdiciará créditos.

---

## 1. Errores de Casillero y Configuración
1. ❌ **Dejar `Variety > 0`:** Permite que Suno reescriba silenciosamente tu estilo antes de enviar la orden al modelo.
2. ❌ **Escribir valores de sliders en el texto:** Frases como `"weirdness 20%"`, `"tempo 128"` o `"variety 0"` dentro del texto de estilo no mueven los controles; solo roban caracteres.
3. ❌ **Escribir negaciones en el Style Box:** Redactar `"no drums"`, `"no vocal"` o `"no humming"` en el casillero de estilo ACTIVA el concepto en la red neuronal. Toda negación pertenece estrictamente al casillero `Exclude Styles`.
4. ❌ **Saturar el casillero de Exclusiones:** Incluir más de 8 a 10 categorías en `Exclude Styles` genera confusión y artefactos tímbricos. Usa categorías cortas (`drums, bass, pads`), nunca oraciones.
5. ❌ **Usar Simple Mode:** Genera resultados genéricos e incontrolables con el mismo costo en créditos. Todo trabajo serio exige *Custom Mode*.

---

## 2. Errores de Lenguaje y Producción
6. ❌ **Usar palabras de veredicto:** `professional`, `studio quality`, `radio-ready`, `masterpiece`, `viral hit`, `best`. El modelo no tiene criterio estético; necesita órdenes físicas (*in front of the band, tight low end*).
7. ❌ **Especificar cifras técnicas de mastering:** Escribir `-14 LUFS`, `bass +12dB at 60Hz` o `96kHz 24bit`. Suno no es un DAW con procesadores analíticos.
8. ❌ **Confundir "Instrumental" con "Solo":** Escribir *"guitar solo"* hace que el modelo interprete una sección de solo dentro de una banda completa. Para un instrumento solitario, se debe redactar *"One acoustic guitar, played by a single performer alone in a room"*.
9. ❌ **Describir el intro y olvidar el verso:** Encomiar el riff en la introducción y no asignarle un verbo en la estrofa hace que la banda se apague tan pronto entra la voz.
10. ❌ **Cambiar múltiples variables a la vez:** Si un track falla, cambiar la letra, el estilo y los tres sliders simultáneamente impide saber qué solucionó o empeoró el problema. Cambia **una sola variable por generación**.

---

## 3. Errores de Letra y Estructura
11. ❌ **Letras poéticas de alta densidad silábica:** Líneas de 14-16 sílabas en tempos lentos fuerzan a Suno a recitar o atropellar el texto.
12. ❌ **Números escritos en dígitos:** Escribir `"24/7"`, `"3:15"` o `"1999"`. Suno puede deletrear, ignorar o alucinar números. Escribe siempre fonéticamente: *"twenty-four seven"*, *"three fifteen"*, *"nineteen ninety-nine"*.
13. ❌ **Instrucciones dentro de paréntesis redondos:** En Suno, los paréntesis redondos `(...)` se CANTAN como segundas voces o coros. Toda directiva técnica debe ir en corchetes cuadrados `[...]`.
14. ❌ **Duetos sin asignación por línea:** No indicar quién canta cada estrofa provoca que Suno alterne timbres vocales arbitrariamente a mitad de palabra.
15. ❌ **Frases de intercambio mayores a 6 sílabas en duetos:** En canciones de respuesta rápida (*call-and-response*), frases largas hacen que las dos voces colisionen.
16. ❌ **Asignar letras distintas en armonía simultánea:** Suno no puede cantar dos textos diferentes a la vez de forma inteligible. La armonía vocal exige la **misma letra**.
17. ❌ **Poner signos de puntuación antes de `[Silence]`:** Poner una coma o punto antes del tag de silencio desincroniza la métrica del motor vocal.
18. ❌ **Usar `[Silence]` en cada línea:** Convierte el ritmo en un patrón robótico y acartonado. Úsalo solo para dar respiración al final de una frase agitada.
19. ❌ **Dejar los bordes (intro y outro) sin compases:** Una intro sin compases genera tarareos aleatorios; un outro sin tag provoca desvanecimientos infinitos o cortes abruptos.
20. ❌ **Contradicción entre Style Box y Cues de letra:** Si el estilo pide *"acoustic guitar only"* y la letra tiene `[Verse 1 - full band enters]`, el modelo adelgaza la mezcla al intentar reconciliar ambas órdenes.
21. ❌ **Canciones de más de 3:30 sin Max Mode:** V6 experimenta degradación y acumulación de frecuencias graves en la segunda mitad de pistas largas si no se procesa con alto cómputo.
22. ❌ **Regenerar cuando solo falta el final:** Si los primeros 2 minutos son perfectos y el final quedó corto, regenerar es un desperdicio de créditos. Usa las herramientas de edición (*Editor / Extend / Replace Section*).
23. ❌ **Intentar arreglar la instrumentación con sliders:** Los sliders controlan varianza y adherencia general; la instrumentación y dinámica se controlan **únicamente desde el texto**.
