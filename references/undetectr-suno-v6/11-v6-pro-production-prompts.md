---
title: "Suno V6 Prompts for a Professional Sound: 26 Pro Prompts"
description: "26 Suno V6 prompts across 13 genres, each with a Pro Production layer for vocal placement, low end, space and dynamics, plus the settings and finishing steps."
date: "2026-09-29"
category: "V6 In-Depth"
source: "https://undetectr.com/blog/suno-v6-pro-production-prompts"
---

# Suno V6 Prompts for a Professional Sound: 26 Pro Prompts

September 29, 202622 min read

![Suno V6 pro production prompts: a mixing console under a glowing waveform](https://undetectr.com/blog/suno-v6-pro-production-prompts/featured.webp)

Three weeks after Suno V6 launched, the loudest complaint is not about melodies or lyrics. It is about sound. The author of r/SunoAI’s [unofficial V6 prompting guide](https://www.reddit.com/r/SunoAI/comments/1wcyryw/unofficial_suno_v6_prompting_guide_what_has_been/) listed “inconsistent audio quality, distant-sounding vocals and instruments, disappearing guitar layers”, and a [thread titled “v6 is the death of Suno”](https://www.reddit.com/r/SunoAI/comments/1wd023a/v6_is_the_death_of_suno_unusable_and_ugly/) put it more bluntly: “Every song comes out flat, the voices are muddy.”

Some of that is the model. A lot of it is the prompt. V6 follows the style box more literally than older versions, so a prompt that never says how the record should sound gets whatever V6 decides. The fix is an extra part at the end of the style box that we call the **Pro Production layer**: a few sentences that describe the recording itself. Below are 26 Suno V6 prompts across 13 genres, each with that layer, plus the settings, the tips that make the difference, and the finishing steps between a good take and a finished release.

TL;DR

- **Describe the recording, not a verdict.** “Close-miked and dry, wide chorus, warm tape” gives V6 something to do. “Professional, radio-ready” does not.
- **Six things make a production layer:** vocal placement, low end, room, stereo width, texture or era, and dynamics.
- **Keep the order:** genre, vocals, drums, guitars or keys, bass, other, arrangement, production, ending.
- **Settings:** Variety 0, Style Influence 70–80%, Weirdness 20–30% for commercial genres, Max Mode on the keeper.
- **The prompt is step one.** Download the WAV once, master it for the platform and clean the file before release.

83 V6 prompts, 13 genres

Every prompt on this page, and 57 more, in the Prompt Vault

The vault now holds every Suno prompt rebuilt for V6 with a Pro Production layer, Exclude list, settings and lyric cues, with one-click copy. Anyone can open one prompt per genre; Lifetime members get all of them.

[Open the Prompt Vault →](https://undetectr.com/prompts)

## What a Pro Production layer is

A V6 prompt that works has four parts, and each one has a single job. The **brief** tells the band what to play: genre, tempo, what the singer does in each section, what each instrument does, and how the arrangement builds. The **Pro Production layer** tells V6 how the record should sound once it is played. The **Exclude** field keeps out what tends to creep into the genre. The **cues** at the top of each lyric section repeat the key instruction at the moment V6 renders it. Our [Suno AI prompts guide](./29-technique-general-prompts-guide.md) covers how to write the brief, from genre and tempo to structure tags.

![One V6 prompt, four parts: brief, production, exclude and cues](https://undetectr.com/blog/suno-v6-pro-production-prompts/four-parts.webp)
*The brief and the production layer both go in the Styles box. Exclude and the cues have their own fields.*

Most prompts skip the second part entirely, and that is where the flat, distant sound comes from. Suno’s own advice points the same way. In its [V6 transition tutorial](https://www.youtube.com/watch?v=tkKGNBzkHwE), published the day after launch, Suno tells users moving from older models:

> “If you want imperfect vocals, write that directly into your prompt. If you want rougher production, include that. If you’re trying to make a really specific older style, describe the instrumentation, the recording quality, or maybe the performance that you’re actually looking for.”

The recording quality is exactly what the Pro Production layer describes. In the prompts below it always starts with “Production:” and sits just before the ending, which is where the field order r/SunoAI users settled on puts it.

## The six things a production layer describes

Every layer in this guide covers the same six things, in the language of its genre. You do not need all six in every song, but a layer that skips vocal placement or dynamics is usually the one that comes back flat.

![The production layer: vocal, low end, room, width, texture and dynamics](https://undetectr.com/blog/suno-v6-pro-production-prompts/production-layer.webp)
*Six parts of a production layer. Each gets one short phrase.*

| Part | What it decides | Phrases that work |
| --- | --- | --- |
| **Vocal placement** | Whether the voice sits in front of the band or inside it, and how much space is around it | close-miked and dry; in front of the band; doubled on the chorus only; short plate reverb, chorus only |
| **Low end** | Which instrument owns the bottom, so the kick and bass stop fighting | kick and bass locked; 808 carries the low end under a short kick; woody upright bass |
| **Room** | The size of the space the band was recorded in | tight dry room; big live room drums; small club; concert hall; large scoring stage |
| **Stereo width** | What is centred, what is wide, and how that changes between sections | narrow verse, wide chorus; double-tracked guitars left and right; pads wide, bass mono |
| **Texture and era** | What the recording itself sounds like | warm tape saturation; 1970s analog console; clean modern digital mix; dusty sampled drums |
| **Dynamics** | How much louder and wider the big moments are than the quiet ones | verse sits low, chorus opens up; breakdown drops to near silence; each chorus bigger than the last |

The words that do not work are the ones that describe a result instead of a sound: professional, radio-ready, high quality, studio quality, mastered, crisp. Loudness numbers such as -14 LUFS do nothing in a prompt either, because loudness is set when you master the file you download. Our [guide to muffled V6 vocals](./08-v6-muffled-vocals.md) puts it in one line: “in front of the band, close and dry” is an instruction; “crisp and clear” is a wish.

![Words that work in a V6 prompt, such as close and dry, wide chorus and tape warmth, against words that do nothing, such as professional, radio ready and high quality](https://undetectr.com/blog/suno-v6-pro-production-prompts/words-that-work.webp)
*Describe how the record sounds. A verdict gives V6 nothing to act on.*

## How to use these prompts

Every card below has the same parts, in the order you paste them. **Copy style box** copies the brief, the Pro Production layer and the ending together; the combined text stays under the 1,000 characters V6’s Styles counter allows.

1. **Open Custom Mode and pick the model on the card.** v6 and v6-wild need Pro or Premier; v6-mini is available on every plan and is fine for testing a lyric. A few heavy and experimental prompts use v6-wild.
2. **Set Variety to 0.** Suno’s V6 FAQ says the slider works by “adjusting and updating your style prompts” and that reducing it to 0 lets you “retain full control of your style tags”. Normal is the default on v6 and v6-mini, so check it every session.
3. **Set Style Influence and Weirdness as the card says.** They are starting points. Suno describes 50% Weirdness as the normal expected result; most of these prompts sit lower to keep the brief tight.
4. **Paste the style box, then the Exclude list.** Anything you do not want goes in Exclude, never as “no humming” in the style box.
5. **Put each cue at the top of its section in your lyrics.** For instrumentals, the card shows a section map instead.
6. **Generate, listen to the first verse, change one thing.** Turn on Max Mode for the take you mean to keep.

![Suno's V6 FAQ: the Variety slider adjusts and updates your style prompts; reduce it to 0 to retain full control. Max Mode costs more credits and is best for songs longer than two minutes](https://undetectr.com/blog/suno-v6-pro-production-prompts/suno-v6-faq.webp)
*Suno’s V6 FAQ on the two settings that matter most for these prompts: Variety and Max Mode. Source: help.suno.com.*

## 26 Suno V6 pro production prompts

Two prompts per genre. Each one is written to the method above rather than copied from a single lucky generation, and V6 gives you two songs per generation, so expect to pick the better one and adjust. The tip under each card says what to change first if it misfires. The full set of 83 is in the [Prompt Vault](https://undetectr.com/prompts).

## Suno V6 Pop prompts

Pop sounds finished when the voice sits in front of everything and the chorus is wider and louder than the verse. Both layers put vocal placement first and make the width change between sections.

Suno V6v6Pop

### Summer Pop Anthem

Style box

Sunny 2020s dance-pop, 122 BPM, 4/4, major key. Female lead, breezy in the verses, belted open vowels on the chorus hook, gang vocal chant on the post-chorus. Drums: four-on-the-floor kick, handclaps on 2 and 4, open offbeat hats in the chorus. Plucked nylon guitar loop in the verse, sparkling synth stabs and a bright synth lead answering each hook line. Bass: bouncy octave synth bass following the kick. Filtered intro, verse rises on a riser, chorus hits full, stripped breakdown before the last chorus.

Pro Production layer

Production: lead vocal close and upfront, doubled on the chorus, slapback delay on line ends. Kick and synth bass sidechained so the kick punches through. Verse narrow and centered, chorus wide with stacked synths and claps panned out. Glossy modern digital mix, sunny top end, breakdown drops to guitar and voice.

Ending

Ends on the post-chorus chant over a filtered synth that sweeps down and stops.

Model **v6**Variety **0**Style Influence **75%**Weirdness **22%**

**Exclude**rap, spoken word, humming, lo-fi, vinyl crackle, orchestral strings

Lyrics box cues

[Intro - filtered synth, nylon guitar loop]
[Verse 1 - breezy vocal, plucked guitar]
[Pre-Chorus - riser, drums build]
[Chorus - four-on-the-floor, belted hook]
[Post-Chorus - gang vocal chant, claps]
[Breakdown - guitar and voice, then last chorus]

If the post-chorus turns into a second chorus, cut its lyric to a two or three word phrase repeated four times.

Copy style boxCopy ExcludeCopy cuesSuno V6v6Pop

### Emotional Pop Ballad

Style box

Modern piano pop ballad, 68 BPM, 4/4, minor key. Female lead, fragile and low in verse one, gaining strength each section, full belt with a long held high note on the last chorus. Drums: soft toms enter on chorus one, full kit and cymbal swells on the final chorus. Grand piano leads, open broken chords in the verse, heavy block chords in the chorus. Bass: warm electric bass joins on chorus one. Other: string section rises from the bridge. Slow steady crescendo, key change up a step into the final chorus.

Pro Production layer

Production: vocal close-miked and intimate in the verse, stepping forward into a long hall reverb as it builds. Piano holds the low end first, bass and soft kick settle under it from chorus one. Piano centered and narrow, strings and drums open to full width. Warm clean acoustic tone, hushed verse, huge final chorus.

Ending

Ends with the piano alone on the opening chords and one soft sung last line.

Model **v6**Variety **0**Style Influence **78%**Weirdness **18%**

**Exclude**rap, electronic drums, synth bass, EDM drops, auto-tune, choir

Lyrics box cues

[Intro - solo piano, broken chords]
[Verse 1 - fragile, low, piano only]
[Chorus - soft toms enter, bass joins]
[Bridge - strings rise, voice builds]
[Final Chorus - key change up, full belt]
[Outro - piano alone, soft last line]

If the song peaks too early, trim the chorus instrument list and let the bridge and key change carry the build.

Copy style boxCopy ExcludeCopy cues

More: [Pop prompts for Suno](./21-genre-prompts-pop.md), now with V6 versions, and the rest of the pop set in the [Prompt Vault](https://undetectr.com/prompts).

## Suno V6 Hip-Hop prompts

In rap the vocal and the low end carry the record. Each layer decides what owns the bottom, the 808 or the kick and bass together, and keeps the rap vocal close and dry so every word lands.

Suno V6v6Hip-Hop

### 90s Boom Bap

Style box

1990s New York boom bap, 90 BPM, 4/4, minor key. Male rapper, gravelly mid-range, storytelling verses in straight sixteenths, clear diction, internal rhymes, a short pause before each punchline. Drums: dusty sampled kick, cracking snare on 2 and 4, swung hats, loop steady all song. Keys: chopped jazz piano sample and a muted horn stab looped every two bars. Bass: upright bass sample walking under the loop. Scratched vocal cuts on the hook. Verse loop stays lean, hook adds horns and scratches.

Pro Production layer

Production: rap vocal close-miked, dry and loud in front of the beat, light double on the hook. Kick and upright bass share the low end, bass warm and round. Tight mono-leaning mix, horns and scratches wider on the hook. Sampled drums with 12-bit grit, warm tape saturation, dark top. Verse sits lean, hook hits harder.

Ending

Ends on one last scratched vocal cut over the drum loop, then the sample cuts off.

Model **v6**Variety **0**Style Influence **75%**Weirdness **25%**

**Exclude**auto-tune, 808 slides, trap hi-hats, EDM synths, choir, rock guitar

Lyrics box cues

[Intro - jazz piano loop, scratched cuts]
[Verse 1 - storytelling, straight sixteenths]
[Hook - horn stabs, scratched vocal cuts]
[Verse 2 - short pause before each punchline]
[Outro - loop rides out, last scratch]

If the drums come out too clean, move "dusty sampled" to the very start of the Drums line and keep Weirdness at 25.

Copy style boxCopy ExcludeCopy cuesSuno V6v6Hip-Hop

### Dark Trap

Style box

Dark 2020s trap, 140 BPM half-time feel, 4/4, minor key. Male rapper, low confident voice, relaxed triplet flow in the verses, stacked chant on the hook, ad-libs at the end of each bar. Drums: hard clap on 3, fast hi-hat rolls and stutters, open hat on the offbeat, sparse kick. Keys: dark bell melody over a slow minor pad. Bass: heavy 808 with long tails, pitch slides into each bar. Intro is bells alone, hook brings full drums, second verse drops the pad for eight bars.

Pro Production layer

Production: lead vocal close-miked and dry, centered and loud, hook doubled left and right, ad-libs wide with short delay. The 808 carries the low end under a short punchy kick. Narrow verse, wide hook with the pad spread. Clean modern digital mix, saturated 808, smooth dark highs. Verse sits back, hook hits full.

Ending

Ends with the bell melody alone after the last hook, one 808 slide down, then stops.

Model **v6**Variety **0**Style Influence **75%**Weirdness **25%**

**Exclude**live drums, rock guitar, choir, jazz piano, boom bap, lo-fi

Lyrics box cues

[Intro - bells alone, dark pad]
[Hook - stacked chant, full drums, 808 slides]
[Verse 1 - relaxed triplet flow, ad-libs]
[Verse 2 - pad drops out, hats roll]
[Outro - bell melody alone]

If the hook comes out sung instead of chanted, move "stacked chant on the hook" to the front of the vocal sentence.

Copy style boxCopy ExcludeCopy cues

More: [Hip-Hop prompts for Suno](./18-genre-prompts-hip-hop.md), now with V6 versions, and the rest of the hip-hop set in the [Prompt Vault](https://undetectr.com/prompts).

## Suno V6 Rock prompts

The best-known V6 rock fault is a great intro followed by a band that thins out when the singer arrives. Both briefs keep the riff playing under the verse, and the layers set the era of the recording, because 1970s tape and early 1990s grunge are different sounds.

Suno V6v6Rock

### 70s Arena Rock

Style box

1970s arena classic rock, 124 BPM, 4/4, key of E. Raspy male tenor, gritty chest voice in the verses, belted high notes on the chorus. Drums: big open kit, steady kick and snare in the verse, crash on every chorus bar, tom fills into each section. Guitars: crunchy open-chord riff keeps playing under the verse vocal, stacked power chords on the chorus, melodic lead solo after chorus 2. Bass: round picked bass locked to the kick. Hammond organ fills on the chorus. Verse rides the riff, chorus lifts, solo is the peak.

Pro Production layer

Production: lead vocal upfront with slapback delay, large plate reverb on the chorus. Kick and bass warm, round and locked, low end centered. Big live room, rhythm guitars doubled hard left and right, solo centered. 1970s analog tape and console warmth, verses sit back, chorus and solo open up.

Ending

Ends on a held power chord with a drum roll and a final crash that rings out.

Model **v6**Variety **0**Style Influence **75%**Weirdness **25%**

**Exclude**synths, drum machine, growls, screaming, rap, lo-fi

Lyrics box cues

[Intro - crunchy riff, tom fill]
[Verse 1 - riff continues under the vocal]
[Chorus - crash every bar, belted high notes]
[Guitar Solo - melodic lead, full band]
[Final Chorus - stacked power chords]

If the riff drops out when the first verse starts, shorten the vocal sentence and raise Style Influence to 80 before changing anything else.

Copy style boxCopy ExcludeCopy cuesSuno V6v6Rock

### Seattle Grunge

Style box

Early 1990s Seattle grunge, 100 BPM, 4/4, drop D tuning. Male vocal, low mumbled verses, raw strained shout on the chorus. Drums: loose heavy kit, floor tom groove in the verse, hard snare and washy open hi-hats on the chorus. Guitars: murky clean arpeggio riff keeps playing under the verse vocal, fuzzed sludgy power chords on the chorus, noisy one-note solo in the bridge. Bass: thick overdriven bass on the guitar root. Quiet verse, loud chorus, bridge feeds back into the last chorus.

Pro Production layer

Production: vocal inside the band, slightly distant, doubled on the chorus, short dark room reverb. Kick and bass heavy and blurred together, thick low mids. Mid-size live room, narrow verse, chorus guitars wide and saturated. Raw early 1990s analog recording, gritty tape, sharp jump from quiet verse to loud chorus.

Ending

Ends in guitar feedback over a final crashed chord that decays to silence.

Model **v6**Variety **0**Style Influence **72%**Weirdness **30%**

**Exclude**synths, strings, autotune, rap, choir, electronic drums

Lyrics box cues

[Intro - clean arpeggio riff, floor toms]
[Verse 1 - riff continues, low mumbled vocal]
[Chorus - fuzzed chords, strained shout]
[Bridge - noisy one-note solo]
[Final Chorus - loudest, open hi-hats]

If the chorus is no louder than the verse, cut the verse vocal description to three words and retry at Weirdness 25.

Copy style boxCopy ExcludeCopy cues

More: [Rock prompts for Suno](./23-genre-prompts-rock.md), now with V6 versions, and the rest of the rock set in the [Prompt Vault](https://undetectr.com/prompts).

## Suno V6 Electronic prompts

Electronic tracks sound finished when the kick and the sub stop fighting. Each layer names the sidechain, what stays mono, what goes wide and how hard the drop hits after the breakdown.

Suno V6v6ElectronicInstrumental

### Deep House Groove

Style box

Deep house, 1990s Chicago warmth, 122 BPM, 4/4, minor key. Instrumental. Drums: soft round kick on every beat, open hat on the offbeat, shuffled shaker, rimshot on 2 and 4. Keys: warm electric piano minor ninth chords in lazy offbeat stabs. Bass: warm rounded bassline, syncopated, sliding root to fifth. Other: filtered pad swells, a short melodic synth lead answers the chords. Arrangement: 16-bar drum intro, chords enter, bass at bar 33, long filtered breakdown, groove returns fuller, drum outro.

Pro Production layer

Production: gentle sidechain from the kick breathes the pads and chords. Short punchy kick with the bass just above it in mono. Pads and electric piano wide, kick, bass and lead centered, warm analog feel, soft tape saturation and rolled-off highs. Breakdown thins to pad and chords, then the full groove returns.

Ending

Ends with 16 bars of drums alone, then the kick fades out.

Model **v6**Variety **0**Style Influence **75%**Weirdness **20%**Instrumental **on**

**Exclude**vocals, humming, choir, vocal chops, big room leads, dubstep wobble

Section map

With Instrumental on you may not have a Lyrics box. The brief already carries this arrangement; use the map to check each section.

[Intro - 16 bars drums, open hat offbeat]
[Groove - electric piano stabs, bass enters]
[Breakdown - filtered pad and chords only]
[Main Groove - full kit, lead answers chords]
[Outro - drums alone, kick fades]

If it drifts toward big-room EDM, lower Weirdness to 15 before changing any words in the brief.

Copy style boxCopy ExcludeSuno V6v6Electronic

### Future Bass Drop

Style box

Future bass, late 2010s festival sound, 150 BPM half-time feel, 4/4, major key. Female lead, soft and airy in the verses, chopped and pitched into a vocal-chop hook in the drops. Drums: light trap hats in the verse, big clap on 3 in the drop, snare roll into each drop. Keys: colorful detuned supersaw chords, each swelling in with pitch wobble. Bass: warm 808 sub under the chords. Other: bright plucks, glittery arpeggios. Arrangement: soft verse, rising build, emotional drop, gentle second verse, bigger final drop.

Pro Production layer

Production: heavy sidechain pumping on the supersaw chords so each one swells in. Short kick, 808 sub carries the low end in mono. Verse vocal close, dry and in front, drop chords and vocal chops spread very wide. Bright glossy modern mix, verses small and intimate, each drop opens to full width.

Ending

Ends on the vocal chop hook over one held supersaw chord that fades.

Model **v6**Variety **0**Style Influence **75%**Weirdness **25%**

**Exclude**rap, spoken word, humming, dubstep growls, lo-fi, vinyl crackle

Lyrics box cues

[Verse 1 - soft airy vocal, light hats]
[Build - snare roll, rising]
[Drop - vocal chop hook, wide supersaws]
[Verse 2 - intimate vocal, plucks]
[Final Drop - bigger chords, vocal chops]

Keep each drop section to two or three short repeated words so Suno chops them into a hook instead of singing a full line.

Copy style boxCopy ExcludeCopy cues

More: [Electronic prompts for Suno](./16-genre-prompts-edm.md), now with V6 versions, and the rest of the electronic set in the [Prompt Vault](https://undetectr.com/prompts).

Halfway through

A great prompt still exports a file distributors can read

However well it is prompted, a V6 export carries Suno's generator metadata and the signal-level markers intake screening looks for. Undetectr strips both and masters to each platform's loudness target. Unlimited on Lifetime.

[Process a V6 track →](https://undetectr.com/upload)

## Suno V6 Lo-Fi prompts

Lo-fi character is deliberate, not accidental. The layers ask for tape wobble, dusty drums and rolled-off highs while keeping the low end clean, so the beat still sits right.

Suno V6v6Lo-FiInstrumental

### Study Beats

Style box

Lo-fi hip-hop study beat, 75 BPM, 4/4, steady and even. Instrumental. Drums: dusty sampled kick, soft snare, brushed hats, one pattern held the whole way through. Keys: warm Rhodes chords on a four-chord loop, a dusty sampled guitar phrase answering every second bar. Bass: soft round sub bass on the chord roots. Other: faint vinyl crackle and tape hiss bed. Loop evolves slowly, one new layer every eight bars, calm even energy from start to finish.

Pro Production layer

Production: dusty drums tucked under the Rhodes, kick and sub locked in mono, low end clean and uncluttered. Small warm room, Rhodes and guitar gently wide, drums centered. Controlled tape wobble on the keys, highs rolled off softly on purpose. Even dynamics, layers enter and leave quietly.

Ending

Ends with the Rhodes loop playing alone and fading under the tape hiss.

Model **v6**Variety **0**Style Influence **72%**Weirdness **15%**Instrumental **on**

**Exclude**vocals, humming, choir, rap, 808 slides, bright synth leads

Section map

With Instrumental on you may not have a Lyrics box. The brief already carries this arrangement; use the map to check each section.

[Intro - Rhodes loop, tape hiss]
[Section A - dusty drums, steady pattern]
[Section B - sampled guitar answers]
[Section C - new layer, calm and even]
[End - Rhodes alone, fading]

If the beat changes too much for studying, lower Weirdness to 10 so the loop stays steady.

Copy style boxCopy ExcludeSuno V6v6Lo-Fi

### Bedroom Pop Haze

Style box

Lo-fi bedroom pop, 2010s DIY, 96 BPM, 4/4, major key with dreamy seventh chords. Female vocal, breathy and soft, sung close to the mic, conversational verses, hazy double-tracked chorus. Drums: small drum machine, soft kick, tapped snare, shaker. Guitar: chorus-soaked clean electric guitar strumming slowly. Keys: warped detuned synth pad with a slow pitch wobble. Bass: soft round bass guitar. Verse intimate with guitar and voice, chorus adds pad and doubles, bridge floats on the pad.

Pro Production layer

Production: vocal close-miked and breathy, sitting inside the guitars, doubled in the chorus, soft spring reverb. Bass round and gentle under a soft kick, low end clean. Narrow verse, chorus spreads wide with the warped pad. Cassette tape wobble and warm saturation, dark soft highs. Verse whispers, chorus swells.

Ending

Ends with the guitar strumming alone as the tape slows and wobbles down.

Model **v6**Variety **0**Style Influence **70%**Weirdness **30%**

**Exclude**rap, belting, choir, orchestral strings, EDM drops, heavy drums

Lyrics box cues

[Verse 1 - breathy, close, guitar and voice]
[Chorus - hazy doubles, warped pad]
[Verse 2 - conversational, shaker enters]
[Bridge - floats on the pad]
[Final Chorus - doubles swell, tape slows]

Keep verse lines short and plain so the breathy close-mic delivery stays intimate.

Copy style boxCopy ExcludeCopy cues

More: [Lo-Fi prompts for Suno](./19-genre-prompts-lofi.md), now with V6 versions, and the rest of the lo-fi set in the [Prompt Vault](https://undetectr.com/prompts).

## Suno V6 Jazz prompts

Jazz is a room recording. These layers describe the room and where the microphones are, and leave the dynamics to the players.

Suno V6v6JazzInstrumental

### Jazz Piano Trio

Style box

Jazz piano trio, late 1950s classic standards style, 120 BPM medium swing, 4/4, intimate. Instrumental. Drums: brushes on the snare in soft circles, light ride cymbal, feathered kick. Keys: acoustic grand piano states a lyrical melody, then improvises with rich voicings and single-note runs. Bass: upright bass walks on every beat and takes a short melodic solo. Arrangement: solo piano intro, melody with brushes, piano solo, bass solo, trading fours with brushes, melody returns, gentle tag.

Pro Production layer

Production: intimate small club, three players close together, piano close-miked with a room pair for air. Upright bass woody and present over a soft feathered kick. Piano across the center, bass slightly left, brushes slightly right. Warm analog tube sound, natural dynamics, solos swell and the melody returns softly.

Ending

Ends on a repeated tag phrase and a soft rolled piano chord.

Model **v6**Variety **0**Style Influence **75%**Weirdness **25%**Instrumental **on**

**Exclude**vocals, humming, choir, saxophone, electric guitar, synths

Section map

With Instrumental on you may not have a Lyrics box. The brief already carries this arrangement; use the map to check each section.

[Intro - solo piano, rubato]
[Head - melody, soft brushes]
[Piano Solo - rich voicings, walking bass]
[Bass Solo - melodic, light brushes]
[Head Out - melody, tag, rolled chord]

If a horn or guitar joins the trio, raise Style Influence to 80 so the three-player brief is followed closely.

Copy style boxCopy ExcludeSuno V6v6Jazz

### Vocal Jazz

Style box

Vocal jazz, 1950s classic standards style, 132 BPM medium swing, 4/4, sultry. Female vocal, warm smoky low register, behind the beat in the verses, bright playful scat solo in the middle. Drums: brushes on the snare, soft ride cymbal, light feathered kick. Keys: piano comps warm chords and answers the vocal lines. Bass: upright bass walks on every beat. Other: muted trumpet fills between vocal phrases. Arrangement: piano intro, sultry verse, swinging chorus, scat solo, muted trumpet solo, last chorus.

Pro Production layer

Production: vocal close-miked, warm and in front of the band with a short room reverb. Upright bass woody and round, locked with a soft ride. Small live club room, vocal centered, piano and trumpet slightly left and right. Vintage tube warmth, natural dynamics, soft verses and a brighter last chorus.

Ending

Ends on a held final vocal note over a soft piano chord and a brush tap.

Model **v6**Variety **0**Style Influence **75%**Weirdness **20%**

**Exclude**rap, belting, autotune, electric guitar, synths, pop drums

Lyrics box cues

[Intro - piano, walking bass]
[Verse 1 - sultry, behind the beat]
[Chorus - swinging, trumpet fills]
[Scat Solo - bright playful scat]
[Final Chorus - brighter, held last note]

Write the scat section in the lyrics as syllables such as doo-bee-dah so the singer scats instead of singing words.

Copy style boxCopy ExcludeCopy cues

More: [Jazz prompts for Suno](./12-genre-prompts-jazz.md), now with V6 versions, and the rest of the jazz set in the [Prompt Vault](https://undetectr.com/prompts).

## Suno V6 R&B prompts

R&B production is intimacy and low end: a close lead over a bass that moves. The two layers show the range, from a modern dry vocal to a 1960s live room with an echo chamber.

Suno V6v6R&B

### Modern R&B

Style box

Modern minimal R&B, 2020s, 75 BPM, 4/4, minor 7th chords. Male lead, smooth falsetto verses, drops to chest voice on the hook, stacked falsetto harmonies and short ad-libs at line ends. Drums: sparse programmed kit, deep soft kick, finger snaps on 2 and 4, rolling half-time hats. Mellow electric piano chords with slow tremolo, clean guitar licks answering the vocal. Bass: smooth round sub bass gliding between notes. Minimal verse, chorus adds harmonies and guitar, bridge drops to keys and voice.

Pro Production layer

Production: lead vocal intimate and centered, stacked harmonies wide behind it, soft plate reverb and delay throws on the ad-libs. Sub bass glides under a soft rounded kick. Keys and guitar left and right, air around the vocal. Smooth dark modern digital mix, silky top end, sparse verse, warmer and wider chorus.

Ending

Ends on a falsetto ad-lib over one electric piano chord as the beat falls away.

Model **v6**Variety **0**Style Influence **74%**Weirdness **22%**

**Exclude**rap, gospel choir, rock guitar, orchestral strings, EDM drops, lo-fi

Lyrics box cues

[Intro - electric piano, finger snaps]
[Verse 1 - smooth falsetto, sparse beat]
[Chorus - chest voice hook, stacked harmonies]
[Bridge - keys and voice only]
[Final Chorus - ad-libs, guitar licks]

If the falsetto disappears, add the word falsetto to the Verse and Chorus cue lines too.

Copy style boxCopy ExcludeCopy cuesSuno V6v6R&B

### Classic Motown Soul

Style box

Classic 1960s Detroit soul in the Motown style, 120 BPM, 4/4, major key. Male lead, gritty and pleading, call and response with a three-voice backing group answering every line. Drums: tight live kit, snare on every beat, tambourine riding along. Rolling piano chords and chopped rhythm guitar on the backbeat. Bass: busy melodic electric bass driving the groove. Other: bright horn section stabs, baritone sax line, strings on the last chorus. Drum fill intro, verse, horn-punctuated chorus, key change final chorus.

Pro Production layer

Production: lead vocal in front in a live echo chamber, backing group behind and to one side. Bass and kick tracked live, bass warm and louder than the kick. Small live room, near-mono, horns and tambourine centered. Warm 1960s tube console and tape, bright tambourine top, chorus lifts with the horns.

Ending

Ends with the chorus tag repeating as the whole band fades out.

Model **v6**Variety **0**Style Influence **78%**Weirdness **18%**

**Exclude**808s, synths, auto-tune, trap hats, rap, electronic drums

Lyrics box cues

[Intro - drum fill, tambourine]
[Verse 1 - pleading lead, group answers]
[Chorus - call and response, horn stabs]
[Bridge - baritone sax, strings enter]
[Final Chorus - key change, full horns]

If it drifts modern, lower Weirdness to 15 and make sure tambourine and echo chamber stay in the brief.

Copy style boxCopy ExcludeCopy cues

More: [R&B prompts for Suno](./22-genre-prompts-r-and-b.md), now with V6 versions, and the rest of the r&b set in the [Prompt Vault](https://undetectr.com/prompts).

## Suno V6 Country prompts

Country is storytelling, so the vocal has to be close and clear of the band. The layers set how much room and pedal steel the song gets and keep the players behind the story.

Suno V6v6Country

### Modern Country

Style box

Modern 2020s Nashville country, 100 BPM, 4/4, major key. Male vocal, warm baritone twang, storytelling verses, big open chorus with a held last line. Drums: light kick and snare rim in verse 1, full kit and claps on the chorus. Guitars: acoustic strumming throughout, twangy electric fills between lines, big electric chords on the chorus. Bass: round bass locked to the kick. Pedal steel swells and banjo rolls on the chorus. Sparse verse 1, drums in verse 2, big chorus, quiet bridge, harmonies on the last chorus.

Pro Production layer

Production: lead vocal close-miked, clear and in front, light plate reverb on the chorus. Kick and bass tight and round, low end centered. Acoustic guitar wide, electric fills and steel spread left and right, chorus opens to full width. Clean modern Nashville mix, bright top end, verse sits low, chorus lifts big.

Ending

Ends on the last chorus line sung alone over a ringing acoustic chord.

Model **v6**Variety **0**Style Influence **75%**Weirdness **18%**

**Exclude**rap, trap hi-hats, autotune, EDM, lo-fi, strings

Lyrics box cues

[Verse 1 - acoustic strum, snare rim]
[Verse 2 - full kit enters]
[Chorus - big open vocal, pedal steel]
[Bridge - quiet, acoustic only]
[Final Chorus - harmonies, held last line]

If it drifts toward pop, write a concrete story in verse 1 with names and places and lower Weirdness to 15.

Copy style boxCopy ExcludeCopy cuesSuno V6v6Country

### Country Ballad

Style box

Classic 1970s Nashville country ballad, 68 BPM, 6/8, major key with a minor turn in the bridge. Female lead, tender and close in the verses, aching full voice on the chorus with a crack on the last line. Drums: brushes on the snare in the verse, soft kick and ride on the chorus. Guitars and keys: fingerpicked acoustic guitar, soft piano chords on the chorus. Bass: slow round bass on the downbeat. Crying pedal steel answers each vocal line. Sparse verse, fuller chorus, stripped bridge, emotional last chorus.

Pro Production layer

Production: vocal intimate and close-miked, warm plate reverb, well in front of the band. Soft kick, slow round bass, gentle warm low end. Medium room, pedal steel wide, acoustic guitar and piano centered, width grows in the chorus. Warm 1970s analog Nashville tone, verses hushed, last chorus swells.

Ending

Ends on a solo pedal steel phrase and a final held acoustic chord.

Model **v6**Variety **0**Style Influence **75%**Weirdness **18%**

**Exclude**rap, autotune, electronic drums, synths, distorted guitar, choir

Lyrics box cues

[Verse 1 - brushes, fingerpicked guitar]
[Chorus - full voice, steel answers]
[Verse 2 - piano joins]
[Bridge - minor turn, stripped]
[Final Chorus - swells, voice cracks]

If the pedal steel fades out, start with an [Intro - pedal steel alone] cue and keep Weirdness low.

Copy style boxCopy ExcludeCopy cues

More: [Country prompts for Suno](./14-genre-prompts-country.md), now with V6 versions, and the rest of the country set in the [Prompt Vault](https://undetectr.com/prompts).

## Suno V6 Metal prompts

Launch-week users found V6 weakest on heavy genres, and screams are where it goes wrong. Say exactly where they go, and if V6 overshoots, remove words instead of adding restraints.

Suno V6v6Metal

### Metalcore

Style box

Modern 2020s metalcore, 140 BPM, 4/4, drop C. Male vocals: clean sung verse 1 and choruses, screamed verse 2, screams on the breakdown. Drums: driving double kick in the verse, open crash beat on the chorus, half-time on the breakdown. Guitars: chugging riff keeps playing under the verse vocal, ringing open chords on the chorus. Bass: tight low bass locked to the kick. Atmospheric synth pad under the chorus. Verse, big chorus, verse, chorus, heavy breakdown, final chorus.

Pro Production layer

Production: clean vocal upfront and doubled on the chorus, screams tight and dry. Punchy kick with the bass locked to it, sub drop on the breakdown. Guitars quad-tracked, narrow verse, chorus opens to full width. Tight modern digital mix, dense and loud, breakdown drops to one guitar before the band slams in.

Ending

Ends on the last breakdown chug, cut off to one ringing chord.

Model **v6**Variety **0**Style Influence **75%**Weirdness **25%**

**Exclude**spoken word, rap, growls, blast beats, lo-fi, acoustic guitar

Lyrics box cues

[Verse 1 - clean sung, riff continues]
[Chorus - soaring clean, open crash]
[Verse 2 - screamed, double kick]
[Breakdown - half-time, screams]
[Final Chorus - clean, full width]

If screams take over, delete words from the style box rather than adding restraints, and keep the vocal placement sentence exactly as written.

Copy style boxCopy ExcludeCopy cuesSuno V6v6Metal

### 80s Heavy Metal

Style box

1980s heavy metal, 150 BPM, 4/4, E minor. Male lead, soaring clean high tenor, full voice through the verses, high held notes on the chorus. Drums: galloping double-time kick under the verse, crash-ride on the chorus, tom rolls into the solo. Guitars: galloping palm-muted riff keeps playing under the verse vocal, twin harmony leads on the chorus, shredding solo with dive bombs after chorus 2. Bass: pick bass galloping with the kick. Verse drives, chorus soars, solo is the peak.

Pro Production layer

Production: vocal upfront with a big hall reverb and long delay on the held notes. Clicky kick, bass galloping tight with it, low end centered. Arena-sized room, rhythm guitars quad-tracked wide, twin leads split left and right. Bright 1980s analog mix with gated snare reverb, verse tight, chorus and solo open huge.

Ending

Ends with a guitar dive bomb, then a held chord and a final cymbal crash.

Model **v6**Variety **0**Style Influence **78%**Weirdness **28%**

**Exclude**growls, screaming, breakdowns, blast beats, synths, rap

Lyrics box cues

[Intro - galloping riff, tom rolls]
[Verse 1 - riff continues, clean high tenor]
[Chorus - crash-ride, twin harmony leads]
[Guitar Solo - shredding, dive bombs]
[Final Chorus - soaring held notes]

If the vocal turns harsh, put melodic in front of high tenor and lower Weirdness before touching exclude.

Copy style boxCopy ExcludeCopy cues

More: [Metal prompts for Suno](./20-genre-prompts-metal.md), now with V6 versions, and the rest of the metal set in the [Prompt Vault](https://undetectr.com/prompts).

## Suno V6 Classical and Cinematic prompts

Orchestral prompts need a hall, not effects. The layers put the players on a scoring stage or in a quiet room, seat the sections left to right and ask for natural dynamics.

Suno V6v6ClassicalInstrumental

### Cinematic Orchestra

Style box

Cinematic orchestral film score, 90 BPM, 4/4, D minor rising to D major. Instrumental. Percussion: timpani rolls, deep taiko hits, cymbal swells before each peak. Strings: full string section plays a sweeping main theme, cello ostinato drives the middle. Brass: French horns carry the theme, trombones and trumpets join at the peak. Bass: double basses and low brass underpin it. Other: harp arpeggios, woodwind solos. Arrangement: solo horn opening, strings build, ostinato section, triumphant full-orchestra crescendo.

Pro Production layer

Production: full symphony on a large scoring stage, mostly ambient room mics with close spots on the solos. Timpani and double basses anchor the low end. Strings spread left to right as seated, brass behind and centered. Warm rich film score sound, huge natural dynamics from a single horn to full orchestra.

Ending

Ends on a full triumphant major chord with a timpani roll that rings out.

Model **v6**Variety **0**Style Influence **80%**Weirdness **25%**Instrumental **on**

**Exclude**vocals, humming, choir, synths, electric guitar, drum kit, piano

Section map

With Instrumental on you may not have a Lyrics box. The brief already carries this arrangement; use the map to check each section.

[Intro - solo French horn, soft strings]
[Section A - strings build the theme]
[Section B - cello ostinato, taiko hits]
[Crescendo - full orchestra, brass theme]
[End - major chord, timpani roll]

If the climax arrives too early, extend from the ostinato section and let the crescendo land in the extension.

Copy style boxCopy ExcludeSuno V6v6ClassicalInstrumental

### Neoclassical Emotion

Style box

Neoclassical, contemporary cinematic, 72 BPM, 4/4, minor key, emotional. Instrumental. Keys: felt piano plays a simple repeating arpeggio and a gentle melody. Strings: solo cello answers the piano, then a string ensemble swells in long bowed chords. Bass: low piano notes and double bass hold the root. Other: soft ambient pad bed, faint piano pedal and hammer sounds. Arrangement: solo piano opening, cello enters, strings slowly swell to an emotional peak, return to piano alone.

Pro Production layer

Production: piano close-miked with its mechanics audible, strings in a warm medium hall. Low piano and double bass carry the low end softly. Piano centered, strings wide around it, pad very wide. Intimate modern sound with warm soft highs, natural dynamics from a whisper to a full swell.

Ending

Ends on the solo piano arpeggio slowing to a single held note.

Model **v6**Variety **0**Style Influence **75%**Weirdness **25%**Instrumental **on**

**Exclude**vocals, humming, choir, drums, percussion, synth leads, electric guitar

Section map

With Instrumental on you may not have a Lyrics box. The brief already carries this arrangement; use the map to check each section.

[Intro - solo felt piano arpeggio]
[Section A - solo cello answers piano]
[Section B - strings swell slowly]
[Peak - full strings, emotional]
[End - piano alone, single held note]

If the strings enter too soon, make the solo piano opening cue in the lyrics box longer by adding a second intro line.

Copy style boxCopy Exclude

More classical and cinematic V6 prompts are in the [Prompt Vault](https://undetectr.com/prompts).

## Suno V6 Ambient prompts

Ambient has no hook to hide behind, so texture and space are the whole production. The layers describe the tape, the room and how slowly things move.

Suno V6v6AmbientInstrumental

### Piano and Tape Ambient

Style box

Tape loop ambient with felt piano, around 66 BPM, slow and loose, major key. Instrumental. Pulse: tape loops of piano phrases repeat at slightly different lengths, drifting in and out of phase. Keys: soft felt piano plays simple spaced chords and a four-note motif. Bass: low piano notes held with the pedal. Other: tape hiss, gentle wow and flutter, faint room tone, soft reversed piano swells. Arrangement: one piano loop, a second loop joins, the motif repeats and overlaps, loops slowly decay, one last chord.

Pro Production layer

Production: piano close-miked in a small warm room, felt and hammer noise audible, low notes centered. Tape loops panned left and right, drifting wider as they overlap. Worn cassette texture, gentle wow and flutter, dark rolled-off highs. Loops build to a soft peak, then decay to one chord.

Ending

Ends on one soft piano chord as the tape slows down.

Model **v6**Variety **0**Style Influence **70%**Weirdness **35%**Instrumental **on**

**Exclude**vocals, humming, choir, drums, strings, synth leads, bass guitar

Section map

With Instrumental on you may not have a Lyrics box. The brief already carries this arrangement; use the map to check each section.

[Intro - one felt piano loop, tape hiss]
[Section A - second loop, out of phase]
[Section B - four-note motif overlaps]
[Decay - loops wear and fade]
[End - one piano chord, tape slows]

If the tape texture is too faint, move the wow and flutter phrase into the first sentence of the style.

Copy style boxCopy ExcludeSuno V6v6AmbientInstrumental

### Deep Space Drift

Style box

Cosmic space ambient, free time, around 60 BPM, drifting and vast. Instrumental. Pulse: a very slow low synth throb every few bars. Keys: slowly evolving synth drones that morph in tone over minutes. Lead: faint high sine tones appear and fade like distant signals. Bass: a deep constant sub drone. Other: shimmering stellar textures, slow filter sweeps. Arrangement: one drone opens, a second drone joins, signals appear, tones swell to a wide peak, then recede to the single drone.

Pro Production layer

Production: very long reverb with tails over thirty seconds, everything floating in a vast space. Sub drone centered and steady, drones and signals panned extremely wide and moving slowly across the field. Clean digital synthesis, soft rounded highs. Swells rise very slowly, peak gently, then recede to one quiet drone.

Ending

Ends on the single sub drone fading into long reverb and silence.

Model **v6**Variety **0**Style Influence **65%**Weirdness **40%**Instrumental **on**

**Exclude**vocals, humming, choir, drums, percussion, piano, guitar, beats

Section map

With Instrumental on you may not have a Lyrics box. The brief already carries this arrangement; use the map to check each section.

[Intro - single drone, vast reverb]
[Section A - second drone, slow filter]
[Section B - distant sine signals]
[Peak - wide slow swell]
[End - single sub drone fades]

If it feels too short to drift, extend from the peak section so the drones get more time to evolve.

Copy style boxCopy Exclude

More: [Ambient prompts for Suno](./13-genre-prompts-ambient.md), now with V6 versions, and the rest of the ambient set in the [Prompt Vault](https://undetectr.com/prompts).

## Suno V6 Drill prompts

Drill is sliding 808s, triplet hats and a vocal that sits on top of both. The layers keep the 808 as the only low end and give each style its own space.

Suno V6v6Drill

### UK Drill Night Drive

Style box

London drill, 140 BPM, 4/4 half-time, minor key, late-night mood. Male rapper, low and measured, calm menace, even eighth-note flow in the verse, doubles the last word of each bar, hook rapped slower with space between lines. Drums: triplet hi-hats, snare on 3 with a skipping ghost snare, sparse kick. Keys: sparse melancholic piano melody, cinematic string line on the hook. Bass: sliding 808s gliding into each downbeat. Intro is piano alone, verse stays sparse, hook brings strings, final hook strips back.

Pro Production layer

Production: vocal close-miked and dry, centered and intimate, last-word doubles tucked wide, short dark plate on the hook. Sliding 808s own the low end under a short kick. Spacious mix, piano in a long reverb, narrow verse, strings wide on the hook. Dark smooth digital sound. Final hook drops back to piano.

Ending

Ends with the piano melody alone and a last 808 slide fading into silence.

Model **v6**Variety **0**Style Influence **75%**Weirdness **25%**

**Exclude**auto-tune, sung chorus, choir, rock guitar, trap bells, crowd noise

Lyrics box cues

[Intro - piano melody alone]
[Verse 1 - measured eighth-note flow]
[Hook - slower rapped lines, strings]
[Verse 2 - last word doubled each bar]
[Final Hook - piano and 808 slides]

If the hook comes out sung, rewrite it in the lyrics box as short rapped lines with a pause between each.

Copy style boxCopy ExcludeCopy cuesSuno V6v6Drill

### Melodic Drill

Style box

Melodic drill, 142 BPM, 4/4 half-time, minor key, emotional. Male lead, auto-tuned, sings the hook with a long falling melody, raps the verses in a melodic flow that stays on pitch, harmonies on the last hook. Drums: drill pattern, snare on 3, sliding triplet hats, sparse kick. Keys: emotional piano chords and a nylon guitar melody. Bass: sliding 808 following the vocal melody. Other: soft string pad under the hook. Hook first, verse lean, bridge drops to guitar and voice, final hook biggest.

Pro Production layer

Production: lead vocal close-miked, tight auto-tune, centered, hook doubled with wide harmonies, delay throw on the last word of each hook line. Sliding 808 carries the low end under a light kick. Narrow verse, hook wide with strings. Clean smooth modern mix, warm highs. Bridge drops low, final hook opens fully.

Ending

Ends on the sung hook melody over nylon guitar, one last 808 slide, then silence.

Model **v6**Variety **0**Style Influence **75%**Weirdness **25%**

**Exclude**shouting, choir, rock guitar, boom bap, jazz horns, EDM drop

Lyrics box cues

[Hook - long falling sung melody]
[Verse 1 - on-pitch melodic rap]
[Bridge - nylon guitar and voice]
[Final Hook - harmonies, strings, full drums]
[Outro - guitar melody, last 808 slide]

Put the hook first in the lyrics box so the sung melody sets the tone before any rapping.

Copy style boxCopy ExcludeCopy cues

More: [Drill prompts for Suno](./15-genre-prompts-drill.md), now with V6 versions, and the rest of the drill set in the [Prompt Vault](https://undetectr.com/prompts).

## Suno V6 Gospel prompts

Gospel production is about scale: a lead in front, a choir behind that fills the stereo field and an organ that never stops. The layers place all three.

Suno V6v6Gospel

### Sunday Choir Anthem

Style box

Uplifting mass choir gospel anthem, 96 BPM, 4/4, major key. Female lead sings each verse, full mass choir answers on the chorus in soprano, alto and tenor parts, lead ad-libs over the choir on the vamp. Drums: live gospel kit, big backbeat, fills into each chorus, crash on the final lift. Hammond organ with rotating speaker swells under everything, gospel piano with runs. Bass: busy electric bass playing gospel runs. Verse, choir chorus, repeated vamp stepping up a key each time, biggest final chorus.

Pro Production layer

Production: lead vocal in front with a warm hall reverb, mass choir wide and deep behind her. Kick and bass locked, bass runs filling the gaps. Big sanctuary sound, organ and piano left and right, choir fills the whole stereo field on the chorus. Warm live-recorded tone, verse sits lower, vamp builds to a full shout.

Ending

Ends with the choir holding the last chord as organ and drums swell to a big stop.

Model **v6**Variety **0**Style Influence **76%**Weirdness **18%**

**Exclude**rap, electronic drums, synths, auto-tune, trap hats, spoken word

Lyrics box cues

[Intro - Hammond swell, piano runs]
[Verse 1 - lead vocal, organ and piano]
[Chorus - full mass choir answers]
[Vamp - repeated line, key steps up]
[Final Chorus - biggest choir, lead ad-libs]

Give the vamp one short line the choir can repeat four or more times, which is what lets the key steps build.

Copy style boxCopy ExcludeCopy cuesSuno V6v6Gospel

### Contemporary Worship Ballad

Style box

Contemporary worship ballad, 2020s, 72 BPM, 4/4, major key. Male lead, gentle and prayerful in the verses, soaring full voice on the bridge, congregation-style group vocals join the last chorus. Drums: soft kick pulse from chorus one, full kit and rolling toms on the bridge. Grand piano leads on sustained chords over swelling ambient pads, delayed electric guitar swells join at the bridge. Bass: warm electric bass on long whole notes. Piano and voice grow to full band at the bridge, big final chorus.

Pro Production layer

Production: vocal close over the piano, long lush hall reverb, group vocals wide behind it at the end. Kick and bass arrive softly, then lock together in the bridge. Narrow at first, opening into a huge arena space. Clean modern worship mix, shimmering guitar top, slow climb from near silence to full band.

Ending

Ends with piano and pad alone as the lead sings the chorus line softly once more.

Model **v6**Variety **0**Style Influence **78%**Weirdness **15%**

**Exclude**rap, gospel choir, Hammond organ, trap hats, EDM drops, auto-tune

Lyrics box cues

[Intro - piano and pads]
[Verse 1 - gentle, prayerful, piano]
[Chorus - soft kick pulse, bass enters]
[Bridge - full band, toms, soaring voice]
[Final Chorus - group vocals, full band]
[Outro - piano and pad, soft last line]

If the full band arrives too early, keep the verse cue to piano and voice and let the Bridge cue introduce the toms.

Copy style boxCopy ExcludeCopy cues

More: [Gospel prompts for Suno](./17-genre-prompts-gospel.md), now with V6 versions, and the rest of the gospel set in the [Prompt Vault](https://undetectr.com/prompts).

## Tips and tricks for a professional V6 sound

These come from launch-week threads, Suno’s own documentation and the prompts above. None needs anything beyond the Create page.

### 1. Talk to V6 like a producer

The most useful reply in r/SunoAI’s biggest V6 thread, [“I owe suno v6 an apology”](https://www.reddit.com/r/SunoAI/comments/1weq2kw/i_owe_suno_v6_an_apology/), came from u/frescomafia: “You have to actually talk to it like you’re talking to a producer.” A producer does not need to hear that you want it to sound good. They need to know where the vocal sits and what the drums do in the chorus.

### 2. Keep the same order every time

Replying to the [unofficial V6 guide](https://www.reddit.com/r/SunoAI/comments/1wcyryw/unofficial_suno_v6_prompting_guide_what_has_been/), u/Auree_Gil wrote: “I can say this tip fixed my choruses: Genre -> Vocals -> Drums -> Guitars -> Bass -> Other Instruments -> Arrangement/Energy -> Production Quality -> Ending Instruction -> Sliders.” Nobody has shown that V6 reads left to right, but a fixed order stops you forgetting a part, and every prompt here uses it.

### 3. When V6 overshoots, cut words

One user trying to make a cinematic metalcore song [dumped 50+ generations](https://www.reddit.com/r/SunoAI/comments/1wkz3t3/i_think_i_accidentally_learned_something_about/) because V6 “kept turning everything into a scream fest”. They tried restrained vocals, soft sections, screaming only at emotional peaks and screaming only near the end, and “it kept screaming.” The thread’s title, politely paraphrased, is the lesson: stop talking. Each word you type is a concept in play, including the ones you meant as a limit.

### 4. Exclude, never “no”

“No humming” in the style box puts humming in the prompt. Every card has an Exclude list of three to eight things that tend to creep into that genre. Keep it to categories, not sentences.

### 5. Write the lyric for the vocal you want

A rushed or spoken-sounding vocal is usually a lyric problem, not a production one. Lines of six to eight syllables get sung; lines of twelve get read. Write held vowels out on the page (“sta-a-ay”) and make the chorus lines shorter than the verse lines. The [V6 vocal prompts guide](./02-v6-vocal-prompts.md) has the full method.

### 6. Contrast is the cheapest professional sound

Finished records breathe: the verse sits lower and narrower, the chorus opens up. Flat AI tracks are usually the same size from start to finish. That is why every production layer here ends with a dynamics clause, and why the briefs say what drops out of the verse, not only what comes in on the chorus.

### 7. Reference real audio when words run out

Suno’s V6 FAQ says a single prompt can reference “Suno songs, playlists, audio uploads, images and video”. In the apology thread, u/puppymeat had the short version: “v6 is good! you just have to feed it styles made before v6!” If your best older song had the sound you want, reference it and let the production layer adjust from there.

### 8. Use Max Mode past two minutes

An r/SunoAI [V6 reality check](https://www.reddit.com/r/SunoAI/comments/1wp5mmd/suno_v6_the_reality_check_monotony_and_tubular/) says generations “start crisp, but around the 90-second mark, the mix completely falls apart.” Suno’s tutorial says Max Mode helps “reduce drift, especially when the song is longer than 2 minutes”, and the FAQ adds that it costs more credits. Explore in standard mode, then regenerate the keeper in Max Mode.

### 9. Judge at the first verse, and change one thing

Intros are where V6 sounds best, so they tell you little. Skip to the first verse vocal and check it against the brief. Then change one sentence or one slider per generation; with two songs per 10-credit generation, four disciplined tries beat forty random ones.

### 10. Remaster the keeper before you download

If the song is right but the balance is off, Suno’s [Remaster](https://help.suno.com/en/articles/8105281) creates a new variation of the same clip to “improve the overall sound quality, adjust the mix and balance of instruments and vocals”. Use the Subtle variation strength so the performance you liked survives.

![Suno help centre: the Remaster feature creates subtle variations of a clip to refine how it sounds](https://undetectr.com/blog/suno-v6-pro-production-prompts/suno-remaster.webp)
*Remaster refines a take you already like. It is not loudness mastering. Source: help.suno.com.*

The step most people skip

## The prompt shapes the sound. It does not touch what is in the file.

Sounding good and passing screening are two different finish lines. Distributors run their own checks at upload, and a track that gets flagged does not simply come back with a warning — it does not go live, which means it never earns anything at all. That check happens once, at the moment you submit, and it happens before a single listener hears the track.

[Undetectr](https://undetectr.com/) removes the generator metadata and processes the signal-level markers distributor screening reads, then masters the file to your platform’s loudness target. It is built and tested against **DistroKid**, which is the distributor we recommend for AI-generated music: you keep 100% of your streaming royalties with no cut taken on your DSP earnings.

![Undetectr — exactly what it does](https://i.ytimg.com/vi/5mXhINqS35A/maxresdefault.jpg)

Worth doing the sums before you decide it is not worth it. Put your own catalogue size into the [AI Music Earnings Calculator](https://undetectr.com/ai-music-earnings-calculator) and see what those tracks are worth over a year once they are actually released — then compare that to a one-time €39.

[Calculate what your catalogue could earn →](https://undetectr.com/ai-music-earnings-calculator)[See pricing](https://undetectr.com/pricing)

## From keeper to release: the finishing steps

A professional sound is the prompt plus what happens to the file afterwards. This is the order that keeps the quality you prompted for.

![From take to release: keeper, WAV, master, clean, release](https://undetectr.com/blog/suno-v6-pro-production-prompts/take-to-release.webp)
*The prompt is step one. Five more steps turn a good take into a release.*

1. **Download the keeper once, as WAV.** WAV downloads are for Pro and Premier, and since 3 September downloads are capped at 20 a month on Pro and 60 on Premier, so spend them on finished takes. Our [guide to Suno’s download limits](https://undetectr.com/blog/suno-download-limits-2026) has the detail.
2. **Split stems only if one part needs fixing.** Auto Split gives up to 12 stems for 50 credits on Pro and Premier. If the vocal needs its own EQ, mix the stems in a DAW; the [stems workflow guide](https://undetectr.com/blog/suno-stems-daw-workflow) walks through it.
3. **Master for the platform, not for maximum volume.** Spotify’s default normalisation plays tracks at -14 LUFS, so a master squashed louder than that just gets turned down, with less punch left. Its guidance is to keep true peak below -1 dBTP, or below -2 dBTP if you master louder than -14. The free [Undetectr mastering tool](https://undetectr.com/mastering) has per-platform presets.
4. **Clean the file before upload.** Every V6 export carries Suno’s generator metadata and the signal-level markers distributor intake scans for, and a good prompt changes none of that. [Undetectr](https://undetectr.com/features) strips the tag, processes the artifact layer and masters to the platform’s loudness target in one pass.
5. **Release and sell.** Distribute through your distributor as usual, and sell the song directly to fans on [played.fm](https://played.fm/sell-your-music), where you set the price and keep the fan’s email.

![Spotify for Artists: Spotify adjusts tracks to -14 dB LUFS according to the ITU 1770 standard](https://undetectr.com/blog/suno-v6-pro-production-prompts/spotify-loudness.webp)
*Spotify normalises to -14 LUFS on playback, so louder is not better. Source: Spotify for Artists.*

Download once, finish once

One pass: clean, master, release

Get the take right with the prompts above, download it once, and run that file through Undetectr: generator metadata removed, artifact layer processed, mastered to the platform you are releasing on. Unlimited processing on Lifetime, with the full Prompt Vault included.

[See Lifetime, €39 →](https://undetectr.com/pricing)

For the rest of the V6 method, start with the [complete Suno V6 prompting guide](./00-suno-v6-prompts-guide.md), which maps every common V6 problem to its fix. If your style prompt keeps coming back rewritten, read [why V6 changes your prompt](./01-v6-changing-your-prompt-sliders.md). For finishing an older track, [how to make Suno music sound professional](https://undetectr.com/blog/make-suno-music-sound-professional) covers selection and mastering in more depth.

## Frequently Asked Questions

### What is the best Suno V6 prompt for a professional sound?

A producer brief written in a fixed order (genre, vocals, drums, guitars or keys, bass, other instruments, arrangement), followed by a production line that describes the recording: where the vocal sits, how the kick and bass relate, the room and stereo width, the texture or era of the recording, and the contrast between verse and chorus. Put unwanted elements in Exclude and set Variety to 0.

### Do words like professional or radio-ready work in Suno V6?

Not reliably. They describe a verdict, not a sound, so V6 has nothing concrete to act on. Suno's own V6 transition tutorial tells users to describe "the instrumentation, the recording quality, or maybe the performance" they want instead. Replace quality words with placement words such as close-miked and dry, wide chorus or warm tape saturation.

### How long can a Suno V6 style prompt be?

The Styles counter on V6 shows 1,000 characters. Suno does not document the limit, so treat it as the in-app counter's figure. Every prompt in this guide stays under 950 characters including the Pro Production layer and the ending. Longer is not better: cut words before you add them.

### What settings should I use for these prompts?

Variety at 0, because Suno says the Variety slider works by adjusting and updating your style prompt and that reducing it to 0 lets you retain full control of your style tags. Normal is the default on v6 and v6-mini. Then Style Influence around 70 to 80% and Weirdness around 20 to 30% for commercial genres, higher for ambient and experimental ones. Turn on Max Mode for the take you intend to keep.

### Is Suno's Remaster the same as mastering?

No. Remaster creates a new variation of a clip, with Subtle, Normal or High variation strength, to refine how it sounds and rebalance instruments and vocals. Mastering sets the loudness and peak level of the file you download, so it happens after Remaster, not instead of it.

### What loudness should a Suno V6 track be mastered to?

Spotify normalises playback to -14 LUFS integrated and advises keeping true peak below -1 dBTP, or below -2 dBTP if the master is louder than -14 LUFS. Other platforms use their own targets, so master per platform rather than as loud as possible. Undetectr's free mastering tool has per-platform presets.

### Will a pro production prompt get my song past distributor AI screening?

No. A prompt shapes the composition and how the recording sounds. Distributor screening reads the exported file: generator metadata, watermarks and signal-level markers that every V6 export carries however it was prompted. Get the song right, download it once, then process that file before upload.

⚡ Lifetime: One-Time €39

### Pro Production Prompts In. Release-Ready Files Out.

One payment, unlimited processing. Undetectr removes the generator metadata and the signal-level artifacts intake screening looks for, then masters to each platform's loudness target. All 83 Suno V6 prompts in the Prompt Vault, Bulk Suno Downloader and Sound Match included.

[Get Lifetime Access →](https://undetectr.com/buy/lifetime)One-time payment · No subscription · Includes Suno Bulk Download