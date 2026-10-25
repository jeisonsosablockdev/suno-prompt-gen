---
title: "Suno V6 Solo Instrument Prompts: One Guitar, No Band"
description: "Instrumental means no singer; solo means no band. A three-part method, templates for guitar, piano and a drums-only intro, and when stems are better."
date: "2026-09-11"
category: "V6 Core Guides"
source: "https://undetectr.com/blog/suno-v6-solo-instrument-prompts"
---

# Suno V6 Solo Instrument Prompts: One Guitar, No Band

September 11, 20269 min read

![A single acoustic guitar in a spotlight with faint band silhouettes fading behind it: one guitar, not a band](https://undetectr.com/blog/suno-v6-solo-instrument-prompts/featured.webp)

Part of our [**Suno V6 prompts guide**](./00-suno-v6-prompts-guide.md), which maps every V6 prompting problem to the guide that fixes it.

Under Suno’s own Studio 2.0 launch video, the most-liked comment is not about Studio. “I still can’t believe no matter how good this is, you still can’t reliably tell Suno to create a solo instrument without adding a full backing.” 133 likes, and a reply underneath pointing out that generating two hundred full arrangements and separating stems “just to take 2 bars of guitar” is nonsense.

That comment predates **Suno V6**, and V6 did not make it go away. In the launch threads a user asking for a drums-only opening got guitars in it. The request is the same in every version: *one instrument, no band*. And the reason it keeps failing is the same too. Almost everyone asks for an instrumental when what they want is a solo, and the model gives them precisely what they asked for.

This guide separates those two requests, gives you a prompt-plus-Exclude method that removes the ambiguity, and is honest about the two other routes, stems and Studio, for when prompting is not enough. As with all our V6 guides, the model is days old and the YouTube evidence is older than the model; test each template on one generation.

TL;DR

- **Instrumental means no singer. Solo means no band.** Ask for the second one explicitly or you get the first.
- **Describe one performer, not one sound.** “A single guitarist alone in a room” beats “solo guitar,” which the model can read as a guitar solo.
- **Exclude the categories, not the adjectives.** Drums, percussion, bass, synth, pads, strings, vocals. Short list, in the Exclude field, not the style field.
- **Tag every section as solo.** The model reads the tag at the moment it renders the section; that is where the band sneaks in.
- **Stems and Studio are the fallbacks.** Prominent instrument in a sparse mix: stems work. Dense mix: they do not. Studio lets you build the part as a track instead of asking the model to omit the rest.

Tested with Suno V6

One instrument is easier to hear and easier to detect

A sparse V6 export carries the same generator metadata and signal-level artifacts as a full arrangement, with less to mask them. Undetectr processes it before you upload. Unlimited on Lifetime.

[Process a V6 track →](https://undetectr.com/upload)

## Instrumental versus solo

Suno’s vocabulary, inherited from every music model before it, treats “instrumental” as *a song with no vocals*. Drums, bass, chords and pads are all still on the table, because that is what an instrumental is. If your prompt says “instrumental acoustic guitar,” you have asked for a band arrangement featuring acoustic guitar with the singer removed. The model delivered.

“Solo” is the word you want, and it has its own trap: in the model’s training data, “guitar solo” is overwhelmingly a section inside a band track. Say “solo guitar” and you may get eight bars of lead guitar over a rhythm section.

![Instrumental: no voice, full band, with drum, bass and guitar icons; Solo: one player, no band, with a single guitar icon](https://undetectr.com/blog/suno-v6-solo-instrument-prompts/solo-vs-instrumental.webp)
*Two different requests. Most failed prompts send the left one and expect the right one.*

The way out is to stop using either word as the instruction and describe the situation instead: one performer, one instrument, alone, in a room. The model has plenty of that in its training data too, and it is unambiguous.

## The three-part method

Three places, all saying the same thing. Users who got clean single-instrument results on V6 did all three; the ones who did only one or two got the band back in a later section.

1. **Style field: describe the performer positively.** Who is playing, on what, in what room, how. No mention of the instruments you do not want; that is what the next part is for.
2. **Exclude field: list every other category.** Suno describes Exclude as where you enter “any information (instruments, etc) that you do not want in your track.” Categories, not sentences. A launch-week thread found Exclude “far more necessary” on V6 than on earlier models for exactly this kind of problem.
3. **Lyric tags: mark every section.** `[Intro - solo guitar only]`, `[Section 2 - solo guitar only]`, and so on. The band arrives in the section you forgot to tag.

![Three routes to a single instrument: prompt plus Exclude, stems, Studio](https://undetectr.com/blog/suno-v6-solo-instrument-prompts/three-routes.webp)
*Route one is this method. Routes two and three are for when it is not enough.*

## Templates: guitar, piano, drums-only intro

**Solo acoustic guitar, fingerstyle, three minutes.**

```text
Style:
One acoustic guitar, played by a single performer alone in a
quiet room, close-miked, fingerstyle. No other musicians and no
other instruments at any point. The guitar carries melody and
accompaniment together. Gentle dynamics, a little string noise,
unhurried, 72 BPM. Ends on a single ringing chord.

Exclude:
drums, percussion, bass, synth, pads, strings, piano, vocals,
backing vocals, humming

Lyrics:
[Intro - solo acoustic guitar only]
[Section 1 - solo acoustic guitar only, melody]
[Section 2 - solo acoustic guitar only, variation]
[Section 3 - solo acoustic guitar only, quieter]
[End - one ringing chord, then silence]
```

**Solo piano, expressive.**

```text
Style:
One grand piano, played by a single pianist in a concert hall,
recorded close with natural room reverb. No other instruments
and no voice at any point. Rubato, expressive, quiet opening,
builds in the middle, returns to quiet. 66 BPM. Ends on a
sustained chord with the pedal held.

Exclude:
drums, percussion, bass, synth, pads, strings, guitar, vocals,
choir, orchestra

Lyrics:
[Intro - solo piano only, quiet]
[Section 1 - solo piano only, melody]
[Section 2 - solo piano only, builds]
[Section 3 - solo piano only, quiet again]
[End - sustained chord]
```

**Drums-only intro, band enters later.** This is the case from the launch threads where guitars appeared in an intro that was meant to be drums alone. Exclude cannot help here because the guitars are wanted later, so the section tags and the style field do all the work.

```text
Style:
Rock, 120 BPM. The song opens with 8 bars of drums completely
alone: no guitar, no bass, no vocal, no other instrument of any
kind until bar nine. On bar nine the guitar and bass enter
together with the vocal. From there, full band.

Lyrics:
[Intro - drums only, 8 bars, nothing else]
[Verse 1 - guitar, bass and vocal enter together]
...
```

The pattern in all three: the single performer is described as a person in a place, the absence of everything else is stated as part of the scene rather than as a prohibition, and the tags repeat it per section. If your single instrument is meant to carry a whole song, our [intro and ending guide](./06-v6-intro-outro-prompts.md) covers the boundaries so it starts and stops cleanly.

The step most people skip

## One instrument in the room, one file to clean before release

Sounding good and passing screening are two different finish lines. Distributors run their own checks at upload, and a track that gets flagged does not simply come back with a warning — it does not go live, which means it never earns anything at all. That check happens once, at the moment you submit, and it happens before a single listener hears the track.

[Undetectr](https://undetectr.com/) removes the generator metadata and processes the signal-level markers distributor screening reads, then masters the file to your platform’s loudness target. It is built and tested against **DistroKid**, which is the distributor we recommend for AI-generated music: you keep 100% of your streaming royalties with no cut taken on your DSP earnings.

![Undetectr — exactly what it does](https://i.ytimg.com/vi/5mXhINqS35A/maxresdefault.jpg)

Worth doing the sums before you decide it is not worth it. Put your own catalogue size into the [AI Music Earnings Calculator](https://undetectr.com/ai-music-earnings-calculator) and see what those tracks are worth over a year once they are actually released — then compare that to a one-time €39.

[Calculate what your catalogue could earn →](https://undetectr.com/ai-music-earnings-calculator)[See pricing](https://undetectr.com/pricing)

## What to exclude, and what not to

![What to exclude for a solo instrument: drums, bass, synth, vocals, pads](https://undetectr.com/blog/suno-v6-solo-instrument-prompts/what-to-exclude.webp)

- **Exclude categories.** Drums, percussion, bass, synth, pads, strings, vocals, backing vocals. Add piano or guitar depending on which one you are keeping.
- **Do not exclude qualities.** “Loud,” “busy,” “full” are not instruments and the model does not filter on them. Say the quality you want in the style field instead.
- **Do not exclude the thing you want later.** Exclude applies to the whole track. If the band is meant to enter at the verse, guitar cannot be in Exclude; use section tags.
- **Keep the list under ten items.** Long Exclude lists start colliding with the style field and the model resolves it unpredictably.
- **Expect a filter, not a wall.** Reports say Exclude cuts the frequency of unwanted instruments sharply; it does not zero it. If a generation still has a snare in it, that is your cue to regenerate once, not to add twenty more terms.

Exclude lives under Advanced Options in Custom Mode, alongside Weirdness and Style Influence. If you are tempted to fix a stray bass line with the sliders instead, read [what each control actually does](./01-v6-changing-your-prompt-sliders.md); none of them removes an instrument.

## Route 2: stems

Sometimes the model will not leave the band out, or you already have a full track and want one part from it. Stem separation pulls the instrument out after the fact. Two honest limits, both from users rather than us:

- **It works when the instrument is prominent.** A lead guitar over a sparse backing separates cleanly. A rhythm guitar inside a dense rock mix comes out with the drums bleeding through, which is the “NOT WORKING stems” complaint under the Studio video.
- **Launch-week reports say V6 stems are worse in dense mixes.** One user found stem separation “super problematic” on V6 and another described late-song mud that makes separation harder in the back half. Generate the sparsest arrangement you can before you try to pull a stem from it.

The mechanics, and how to take the stem into a DAW, are in our [stems and DAW workflow guide](https://undetectr.com/blog/suno-stems-daw-workflow). The best-case route is to combine the two: use the three-part method to get a nearly solo track, then stem it to remove whatever slipped through.

## Route 3: Studio

Suno Studio changes the question. Instead of asking the model to omit the band, you work in a multi-track project where a single generated part can live on its own track. The Studio 2.0 launch added MIDI tracks and per-track effects, and the launch video demonstrates turning a part into “a rhythm electric guitar” on its own lane. For anyone who wants single-instrument stems as raw material for their own production, this is the route Suno itself is pointing at, and the frustrated commenters under that video were, in effect, asking why the Create page cannot do what Studio does.

Studio is a Premier feature and a different workflow. Our [Studio guide](https://undetectr.com/blog/suno-studio-guide) walks through it. If you only need one solo guitar piece a month, the prompt method above is faster; if you need instrument parts regularly, Studio is where that job lives now.

![Real comments from Suno's YouTube channel and r/SunoAI about asking for a single instrument and getting a full band, captured 11 September 2026](https://undetectr.com/blog/suno-v6-solo-instrument-prompts/card-solo.webp)
*The request that outlives every model version. The top comment is from before V6; the drums-only complaint is from launch week.*

Do not spend a download twice

Get the one instrument, download once, process that file

Downloads are capped by plan since 3 September. Use the three-part method to land a clean solo take, download it, and process the export rather than regenerating until a distributor accepts it. Unlimited processing on Lifetime.

[See Lifetime — €39 →](https://undetectr.com/pricing)

## After you have the one instrument

A solo guitar or piano piece is a V6 export like any other, and a sparser one. It carries the generator metadata and the signal-level markers distributor intake scans for, with less in the mix to mask them, so it is worth running through [Undetectr](https://undetectr.com/features) before it goes to a distributor or a sync library. Solo instrumental pieces are also exactly what music supervisors ask for most often; [played.fm](https://played.fm/sell-your-music) lets you sell them directly and pitch them for TV, film and podcast placement from the same page.

If what you actually want is a band that keeps playing rather than a band that stays away, that is the opposite problem and it has its own guide: [keep the riff and drums alive through the verse](./04-v6-rock-prompts.md). The [Suno prompts guide](./29-technique-general-prompts-guide.md) is the hub for everything else.

## Frequently Asked Questions

### Why does Suno V6 add a full band when I ask for one guitar?

Because "instrumental" and "solo instrument" are different requests and most prompts send the first. Instrumental means no vocals, and the model happily supplies drums, bass and pads. Solo means one player and nothing else, which you have to say in three places: describe the single performer positively in the style field, list every other instrument category in the Exclude field, and tag the sections as solo. This is the most persistent request in Suno's own YouTube comments and it predates V6.

### What should I put in the Exclude field for a solo guitar track?

Categories, short and specific: drums, percussion, bass, synth, pads, strings, vocals, backing vocals. Suno's help article describes Exclude as the place to enter any instruments you do not want. A launch-week thread reported Exclude being far more necessary on V6 than on earlier models. Keep it to categories rather than sentences, and say the positive version in the style field: "one acoustic guitar, played by a single performer, nothing else."

### Does saying "solo" in the style field work?

On its own, unreliably, because "solo" also means a guitar solo within a band arrangement. "One acoustic guitar, single performer, no other instruments, no band, no rhythm section" removes the ambiguity. Users who got clean single-instrument results described the performer and the room rather than using the word solo.

### Can Suno V6 make a piano-only piece?

The same method applies to any instrument: name the one instrument, describe the performance ("one grand piano, close-miked, played expressively, rubato"), exclude the rest, and tag every section as piano only. Piano and acoustic guitar are the two instruments users report the most success with; solo synth and solo strings are harder because the model treats them as parts of a texture.

### If prompting fails, how else can I get a single instrument out of Suno?

Two routes. Generate the full arrangement and pull the instrument you want with stem separation, which works when the instrument is prominent and fails when the mix is dense; a Suno YouTube commenter complained about exactly that. Or build the part in Suno Studio, where you can generate and isolate a single track in a multi-track project rather than asking the model to leave the band out. Both are covered in our stems and Studio guides.

### Why do guitars appear in my drums-only intro?

Same mechanism as the full-band problem, applied to one section. An intro described as "drums only" with no Exclude entry and no positive statement about what is absent gets filled in. Tag the intro as drums only, say "no guitar, no bass until the verse" in the style field, and put guitar in Exclude if the intro is the whole point; otherwise accept that Exclude applies to the whole track and use the section tags alone.

### Does a solo instrument track still need processing before distribution?

Yes. One instrument or twelve, the export is a V6 generation with the same generator metadata and signal-level markers distributor screening reads. Sparse tracks are, if anything, easier for detectors because there is less masking. Process the export before upload.

⚡ Lifetime — One-Time €39

### Tested With Suno V6. Ready for Every Distributor.

One payment, unlimited processing. Undetectr removes the generator metadata and the signal-level artifacts that intake screening looks for, then masters to each platform's loudness target for free. Bulk Suno Downloader, Sound Match and the 100+ prompt vault included.

[Get Lifetime Access →](https://undetectr.com/buy/lifetime)One-time payment · No subscription · Includes Suno Bulk Download