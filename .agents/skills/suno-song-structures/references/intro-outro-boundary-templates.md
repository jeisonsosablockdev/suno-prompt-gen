# Plantillas de Control de Bordes (Intros y Outros) en Suno V6

En Suno V6, **los bordes no especificados se improvisan**.
* Si dejas la introducción sin instrucciones de compases, el modelo generará casi con certeza un tarareo (*humming*), ad-libs o una introducción vocal extraña antes de la letra.
* Si dejas el final sin instrucciones de cierre, el modelo entrará en un bucle repetitivo infinito (*vamping*) o cortará la última palabra a mitad de sílaba.

---

## 1. Tres Plantillas de Introducción Efectivas

### Opción A: Voz Fría en Compás Uno (Cold Vocal)
El cantante ataca en el primer pulso sin ninguna música previa. La banda entra en el compás dos:

* **En Style:**  
  `The song opens immediately on the first sung lyric line on beat one, with no instrumental intro, no count-in and no vocal texture before it. Full band enters under the vocal on bar two.`
* **En Lyrics:**  
  ```text
  [Intro - none, vocal starts immediately on beat one]
  [Verse 1 - full band enters on bar two]
  Porch light on, the road runs long
  ```

### Opción B: Riff Medido en Compases Exactos (Fixed Bar Count)
La guitarra o sinte abre con un número exacto de compases antes de que entre la voz:

* **En Style:**  
  `Opens with a 4 bar electric guitar riff, guitar only, no drums and no vocal of any kind. Full band and lead vocal enter together on bar five.`
* **En Lyrics:**  
  ```text
  [Intro - guitar riff, 4 bars, instrumental only, no vocals]
  [Verse 1 - band and vocal enter together on bar five]
  ```

### Opción C: Subida Progresiva por Capas (Layered Build)
* **En Style:**  
  `8 bar instrumental intro. Piano alone for 4 bars, bass and brushed drums join for 4 bars. No vocal of any kind until bar nine.`
* **En Lyrics:**  
  ```text
  [Intro - piano alone 4 bars, then bass and drums enter for 4 bars, no vocal]
  [Verse 1 - vocal enters on bar nine]
  ```

---

## 2. Tres Plantillas de Finalización Limpia (Outros)

### Opción A: Parada en Seco (Hard Stop)
El tema termina en seco en el último golpe del coro final sin colas instrumentales ni desvanecimientos:

* **En Style:**  
  `Ends on a hard stop on the last beat of the final chorus. No outro, no fade, no instrumental tail, silence after the last hit.`
* **En Lyrics:**  
  ```text
  [Final Chorus - loud, full energy]
  We are free, we are home tonight
  [End - hard stop on the last hit, silence]
  ```

### Opción B: Última Línea a Capela Sostenida (Vocal Alone)
La banda se detiene por completo y el cantante pronuncia la última frase en solitario:

* **En Style:**  
  `After the final chorus the band stops completely and the lead singer sings the last line alone, holds the final word for two bars, then the song ends cleanly. No instrumental outro.`
* **En Lyrics:**  
  ```text
  [Outro - vocal alone, band stops, held note]
  Sta-a-ay
  [End - silence]
  ```

### Opción C: Desvanecimiento Bounded (Fade Out Acotado)
Un fade out controlado de exactamente 4 compases que evita que la pista se extienda más allá de 3:15:

* **En Style:**  
  `4 bar instrumental outro on the chorus chords, no vocal, fading to silence by the end of bar four. Total song duration under 3:15.`
* **En Lyrics:**  
  ```text
  [Outro - instrumental, 4 bars, fade out to silence]
  [End]
  ```

---

## 3. La Regla Contra el Tarareo Inicial (*Humming*)

> [!CAUTION]
> Escribir *"no humming"* o *"no ad-libs"* en el casillero de estilo **provoca más tarareos**, porque activa la palabra "humming" en la atención del modelo.

### La Solución en Dos Pasos:
1. En el **Style Box**, describe la intro positivamente con instrumentos y compases (*"4 bar clean guitar intro, no other elements"*).
2. En el casillero **Exclude Styles**, añade los términos negativos:  
   `humming, vocal intro, spoken intro, ad-libs, vocal textures before verse`
