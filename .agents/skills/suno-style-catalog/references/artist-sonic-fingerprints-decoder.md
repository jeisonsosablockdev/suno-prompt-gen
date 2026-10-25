# Decodificador de Firmas Tímbricas de Artistas Comerciales en Suno V6

Suno bloquea, ignora o degrada los prompts que contienen nombres directos de artistas comerciales registrados (ej. *"Daft Punk"*, *"The Weeknd"*, *"Billie Eilish"*).

Para obtener la identidad tímbrica exacta de un artista de referencia, **descompón al artista en su firma de producción física**: ritmo, sintetizadores/guitarras, afinación, técnica de microfonía y rango vocal.

---

## Diccionario de Firmas Tímbricas (Más de 40 Artistas)

| Artista de Referencia | Firma de Producción para Suno V6 (Copiar y Pegar en Style Box) |
|---|---|
| **The Weeknd** | `dark synth-pop, 118 BPM, 80s analog synth lead, gated reverb snare, driving arpeggiated bassline, male tenor falsetto emotional delivery, wide nocturnal reverb` |
| **Daft Punk** | `french touch house, 124 BPM, vintage disco drum groove, robotic vocoder lead vocals, funky slap bassline, phaser rhythm guitars, bright brass stabs` |
| **Billie Eilish** | `minimal dark pop, 94 BPM, intimate close-miked whispered female vocals, heavy sub-bass 808, subtle acoustic guitar, clicking percussion, dry upfront mix` |
| **Dua Lipa** | `nu-disco pop, 120 BPM, punchy four-on-the-floor kick, groovy syncopated bass guitar, bright clean rhythm guitar strums, forward female alto belt, glossy mix` |
| **Nirvana** | `90s grunge, 116 BPM, raspy strained male vocals, quiet clean guitar verse, explosive wall of distorted guitars in chorus, heavy live room drums, unpolished live feel` |
| **Arctic Monkeys (AM)** | `desert indie rock, 96 BPM, dry heavy drum beat, vintage fuzz bass riff, gritty baritone swagger, double-tracked electric guitar riffs, narrow intimate verse` |
| **Post Malone** | `melodic trap-pop, 130 BPM, vibrato-heavy raspy male vocals, acoustic guitar picking, booming 808 sub-bass, fast triplet hi-hats, wide melancholic reverb` |
| **Drake** | `atmospheric Toronto R&B trap, 138 BPM, filtered underwater synth pads, heavy knocking 808 bass, calm conversational half-sung male flow, clean cold vocal chain` |
| **Travis Scott** | `psychedelic dark trap, 130 BPM, auto-tuned layered vocal chants, distorted bass, reversed synth textures, energetic beat switch, heavy limiter saturation` |
| **Kendrick Lamar** | `jazz-infused conscious hip hop, 92 BPM, live unquantized drum swing, upright bass, soulful Rhodes piano, dynamic theatrical vocal delivery, raw tape warmth` |
| **Adele** | `soulful piano ballad, 72 BPM, acoustic grand piano, warm upright bass, powerful emotive female mezzo-soprano belting, subtle room strings on chorus, dynamic crescendo` |
| **Taylor Swift (Folklore)** | `indie folk ballad, 84 BPM, gentle fingerstyle acoustic guitar, muted felt piano, soft breathy female vocal right at the mic, warm cello accents, intimate room acoustics` |
| **Coldplay** | `stadium anthem pop-rock, 110 BPM, chiming melodic piano riff, soaring delay electric guitar, driving bass, anthemic falsetto male vocal, massive dynamic chorus lift` |
| **Radiohead (In Rainbows)** | `art rock, 124 BPM, intricate fingerpicked electric guitar in 5/4, warm organic drum kit with delicate ride, melodic bassline, haunting intimate male falsetto` |
| **Pink Floyd** | `70s progressive rock, 68 BPM, slow blues electric guitar bends with tape echo, warm Hammond organ beds, slow heartbeat bass drum, wide cosmic stereo space` |
| **Led Zeppelin** | `70s blues hard rock, 126 BPM, explosive open room Bonham drum sound, heavy distorted blues riff, high soaring male tenor screech, aggressive driving bass groove` |
| **Metallica (Black Album)** | `heavy thrash metal, 110 BPM, tight scooped-mid rhythm guitar chugging, massive punchy snare, tight double-kick accents, gruff aggressive baritone vocals` |
| **Deftones** | `alternative metal shoegaze, 88 BPM, heavy Drop-tuned wall of guitar chords, soaring breathy whispered male vocals alternating into screams, lush wet reverb` |
| **Bon Iver** | `indie electronic folk, 74 BPM, harmonized vocoder choir, acoustic guitar picking, subtle horn swells, deep sub-bass pulses, intimate dry cabin atmosphere` |
| **Fleetwood Mac** | `70s California soft rock, 116 BPM, tight dry kick and snare, warm acoustic rhythm strum, chiming clean electric guitar lead, polished male and female vocal harmonies` |
| **The 1975** | `80s-inspired indie pop, 112 BPM, clean jangly funk rhythm guitar, gated snare, bright brass accents, conversational rhythmic British delivery, glossy studio finish` |
| **Tame Impala** | `psychedelic synth pop, 114 BPM, flanged drum kit with heavy tape compression, vintage phasing synthesizers, driving fuzz bass, dreamy layered falsetto vocals` |
| **Massive Attack** | `90s Bristol trip-hop, 82 BPM, heavy slow hip-hop breakbeat, deep sub-bass rumble, dark cinematic strings, whispered breathy vocal, tense noir atmosphere` |
| **Portishead** | `cinematic trip-hop, 76 BPM, dusty vinyl drum break, eerie Theremin-style synth, tremolo jazz guitar, fragile emotional female torch singer, noir film-score texture` |
| **Avicii** | `country progressive house, 126 BPM, acoustic guitar strumming intro, soaring uplifting piano chords, energetic festival four-on-the-floor drop, anthemic vocal hook` |
| **Calvin Harris (Funk Wav)** | `summer funk groove, 108 BPM, bouncy slap bassline, warm 70s electric piano, breezy clean rhythm guitar, crisp clapping snare, sunny tropical stereo width` |
| **Lana Del Rey** | `cinematic baroque pop, 70 BPM, lush sweeping orchestral strings, slow hip-hop drum beat, sultry breathy female vintage vocal, melancholic noir nostalgia` |
| **SZA** | `contemporary alternative R&B, 86 BPM, lo-fi electric guitar loops, lazy unquantized snare, warm sub-bass, conversational honest female vocals with agile vocal runs` |
| **Frank Ocean** | `experimental neo-soul, 78 BPM, warm Rhodes chords, pitch-shifted subtle vocal layers, minimal ambient percussion, deep sub bass, introspective emotional delivery` |
| **Tyler, The Creator (Igor)** | `neo-soul synth hip hop, 102 BPM, aggressive distorted analog synths, crunchy drum breaks, pitched-up vocal harmonies, bold chord modulations, soulful bridge` |
| **Bob Marley** | `classic roots reggae, 74 BPM, off-beat skank guitar and organ bubble, deep melodic bassline carrying the groove, one-drop drum pattern with rimshot on 3, warm horns` |
| **Bad Bunny** | `modern Latin trap / reggaeton, 94 BPM, punchy syncopated dembow beat, deep 808 sub-bass, dark synthesized plucks, deep resonant Spanish baritone delivery` |
| **Rosalía (Motomami)** | `avant-garde flamenco pop, 100 BPM, raw aggressive 808 dembow, intimate palmas handclaps, agile melismatic flamenco female vocal, sudden quiet-to-loud dynamic cuts` |
| **Skrillex (Modern UK Garage)** | `modern UK bass garage, 134 BPM, skipping syncopated garage groove, vocal chop melodies, deep rolling Reese bassline, crisp percussion, tight club mix` |
| **Burial** | `future garage ambient, 130 BPM half-time, vinyl crackle, distant pitch-shifted vocal samples, syncopated wooden percussion, muffled sub-bass, rainy London atmosphere` |
| **Hans Zimmer** | `epic cinematic film score, 72 BPM, massive taiko drum impacts, low brass swells, soaring string ostinato crescendo, ticking clock rhythm, colossal dynamic climax` |
| **Max Richter** | `post-minimalist neoclassical, 60 BPM, solo piano played softly with felt damper, slow melancholic string quintet counterpoint, subtle sub-bass pulse, vast acoustics` |
| **Ennio Morricone** | `spaghetti western noir, 84 BPM, acoustic classical guitar, whistling melody, twangy electric guitar with spring reverb, distant trumpet solo, dramatic choir stabs` |
