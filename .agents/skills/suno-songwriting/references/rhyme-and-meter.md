# Métrica y Rima para Síntesis Vocal en Suno AI

## 1. El Problema del Atropellamiento Silábico
Los modelos de difusión de audio como Suno asignan ventanas fijas de compás a las líneas de texto. Si una línea tiene 7 sílabas y la siguiente tiene 15, el modelo acelerará artificialmente las palabras de la segunda línea o las pronunciará de forma incomprensible.

### Regla de Oro:
**La variación entre versos pares del mismo bloque no debe exceder $\pm 2$ sílabas métricas.**

### Ejemplo Incorrecto (Desbalance silábico):
```text
[Verse 1]
La noche cae fría (7 sílabas)
Y cuando estoy mirando las estrellas me acuerdo de todas las cosas que prometiste (26 sílabas) -> CAOS EN SUNO
```

### Ejemplo Optimizado (Balance silábico):
```text
[Verse 1]
La noche cae fría en el balcón (10 sílabas)
Tus pasos ya no vuelven a sonar (10 sílabas)
El viento apaga toda la ilusión (10 sílabas)
Y el eco solo me habla de esperar (10 sílabas)
```

## 2. Tipos de Rima
1. **Rima Asonante:** Recomendada para géneros urbanos, pop moderno e indie en español/inglés. Suena natural y no se siente forzada.
2. **Rima Consonante:** Ideal para coros pop pegajosos, rock clásico y baladas épicas.
3. **Rima Interna:** Colocar rimas en mitad de verso (`Bajo la luna oscura, busco la cura`) genera un rebote rítmico que a Suno se le da especialmente bien en beats rápidos.
