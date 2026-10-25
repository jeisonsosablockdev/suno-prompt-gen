---
title: "Suno V6 Intro and Ending Prompts: Humming and Long Outros"
description: "Asking V6 to remove the humming produced more humming. Three opening templates, three endings, and how to use the Exclude field without backfiring."
date: "2026-09-11"
category: "V6 Core Guides"
source: "https://undetectr.com/blog/suno-v6-intro-outro-prompts"
---

# Suno V6 Intro and Ending Prompts: Humming and Long Outros

September 11, 202610 min read

![Suno V6 intros and endings: one waveform with a clean start marker and a clean end marker](https://undetectr.com/blog/suno-v6-intro-outro-prompts/featured.webp)

Part of our [**Suno V6 prompts guide**](./00-suno-v6-prompts-guide.md), which maps every V6 prompting problem to the guide that fixes it.

A song has two moments where a listener decides: the first five seconds and the last five. **Suno V6** gets both wrong in ways that are easy to describe and, it turns out, easy to prevent. The opening arrives with humming, a spoken line or a vocal ad-lib nobody asked for. The ending either runs on for a minute of vamping or stops mid-word on the last line of the lyric.

In one launch-week reaction thread a user said they asked V6 to remove the humming and got *more* humming. The community prompting guide that appeared the next day listed cut-off lyrics as one of V6’s recurring faults and blamed missing boundaries. We read those threads, Suno’s help article on the Exclude field, and the V6 FAQ on section editing, and put together three opening templates, three ending templates, and a four-step decision tree for when to prompt, when to exclude, when to regenerate and when to just edit the section.

Standing caveat: bracket tags are suggestions to the model, not commands, and V6 is days old. Everything here is what users report working plus what Suno documents. Test each template on one generation before you build on it.

TL;DR

- **An unspecified intro is a vocal intro.** Say what the first bars contain, in positive terms, in both the style field and a tag.
- **Never name the thing you do not want in the style field.** “No humming” puts humming in the prompt. Put it in Exclude instead.
- **An unspecified ending is a long ending.** State the ending and its length. “Hard stop after the last chorus” is a complete instruction; “outro” is not.
- **Cut-off lyrics are a boundary problem.** End the lyric with a final line and an ending tag so the song has somewhere to land.
- **Edit before you regenerate.** If only the intro or the ending is wrong, V6’s section editing and the Editor are cheaper than a new generation.

Tested with Suno V6

Clean start, clean stop, and then a clean file

A V6 export with a perfect ending still carries Suno's generator metadata and the signal-level artifacts distributor screening looks for. Undetectr removes both before you upload. Unlimited on Lifetime.

[Process a V6 track →](https://undetectr.com/upload)

## Why V6 hums, vamps and cuts off

All three faults have the same cause: **the prompt described the middle of the song and left the edges to the model.** Suno says V6 understands the “building blocks musicians use, from vocals, instrumentation and structure,” and it follows what you give it more literally than earlier models did. What you did not give it, it improvises, and its improvisations at the edges are a vocal texture at the start and a vamp at the end.

The humming case is worth dwelling on because the user’s instinct made it worse. They wrote, in effect, “no humming,” and got more of it. That is a known property of text-conditioned generators: the word is in the prompt, so the concept is in play. The fix is to describe the opening you want in positive terms and move the thing you do not want to the Exclude field, which Suno built for exactly that. The rest of this guide is applying that idea to both ends of the song.

![Real comments from r/SunoAI launch-week threads about unwanted intros, too many lyrics and cut-off endings on Suno V6, captured 11 September 2026](https://undetectr.com/blog/suno-v6-intro-outro-prompts/card-edges.webp)
*Three different threads, one underlying complaint: the edges of the song were never specified.*

![Suno V6 Export Edges: Catch Missing Lyrics and Broken Tails Before Release](https://i.ytimg.com/vi/k6hNbVY6Zys/maxresdefault.jpg)

UndetectrCheck the first and last seconds of a V6 export for missing lyrics and broken tails before you release it.

## Three ways to open

Pick one. Each template has a style-field sentence and a lyric tag that say the same thing, because the model reads the style field once and the lyric field at the moment it renders the section.

![Three ways to open a Suno V6 song: cold vocal, short riff, slow build](https://undetectr.com/blog/suno-v6-intro-outro-prompts/three-ways-to-open.webp)

**1. Cold vocal.** The singer starts on beat one with a lyric line, no instrumental lead-in and no texture before it.

```text
Style: The song opens on the first sung lyric line with no
instrumental intro, no count-in and no vocal texture before it.
Band enters under the vocal on bar two.

Lyrics:
[Intro - none, vocal starts immediately]
[Verse 1]
Porch light on, the road runs long
...
```

**2. Short riff.** One instrument plays the hook for a fixed number of bars, then the vocal enters. Our [Suno rock prompts](./23-genre-prompts-rock.md) have the guitar-tone words to describe that riff.

```text
Style: Opens with a 4 bar electric guitar riff, guitar only, no
drums and no vocal of any kind, then the full band and the vocal
enter together on bar five.

Lyrics:
[Intro - guitar riff, 4 bars, instrumental only]
[Verse 1 - band and vocal enter together]
...
```

**3. Slow build.** Instruments layer in over a fixed length and the vocal arrives at the top of the build.

```text
Style: 8 bar instrumental intro. Piano alone for 4 bars, bass and
soft drums join for 4 bars, no vocal of any kind until the verse.
Vocal enters on bar nine.

Lyrics:
[Intro - piano 4 bars, then piano bass and drums 4 bars, no vocal]
[Verse 1]
...
```

Note what all three have in common: a bar count, the instruments that are present, and the phrase “no vocal of any kind.” That phrase is positive framing of a negative (it describes the intro as instrumental) and it has been more reliable in user reports than any version of “no humming.” The humming itself goes in Exclude, covered below.

## Three ways to end

![Three ways to end a Suno V6 song: hard stop, last line, fade](https://undetectr.com/blog/suno-v6-intro-outro-prompts/three-ways-to-end.webp)

**1. Hard stop.** The song ends on the last hit of the final chorus. No outro at all.

```text
Style: Ends on a hard stop on the last beat of the final chorus.
No outro, no fade, no instrumental tail, silence after the last hit.

Lyrics:
[Final Chorus]
...
[End - hard stop on the last word]
```

**2. Last line.** The band drops out and the singer delivers the final line alone, held, then stops. In a duet, name the singer who takes it; our [V6 duet prompts](./03-v6-duet-prompts.md) guide explains why an untagged outro is where the wrong singer appears.

```text
Style: After the final chorus the band stops and the singer sings
the last line alone, holds the final word for two bars, then the
song ends. No instrumental outro.

Lyrics:
[Final Chorus]
...
[Outro - vocal alone, one line, held]
Sta-a-ay
[End]
```

**3. Fade.** A short, bounded instrumental tail that fades. The bar count is what stops it running on.

```text
Style: 4 bar instrumental outro on the chorus chords, no vocal,
fading to silence by the end of bar four. Total song under 3:30.

Lyrics:
[Final Chorus]
...
[Outro - instrumental, 4 bars, fade out]
[End]
```

The long-outro complaint disappears when the outro has a length. “Outro” on its own is an invitation to vamp; “4 bars, fade” is a boundary. If you want an even stronger guarantee, add a total-length target to the style field; V6 respects those more often than not, and the general [prompts guide](./29-technique-general-prompts-guide.md) covers numeric constraints of that kind. To make the last chorus feel bigger before it ends, our [Suno V6 mastering prompts](./10-v6-mastering-prompts.md) include a “wider, not louder” lyric cue taken from featured songs.

The step most people skip

## Whichever ending you choose, the file still has to clear screening

Sounding good and passing screening are two different finish lines. Distributors run their own checks at upload, and a track that gets flagged does not simply come back with a warning — it does not go live, which means it never earns anything at all. That check happens once, at the moment you submit, and it happens before a single listener hears the track.

[Undetectr](https://undetectr.com/) removes the generator metadata and processes the signal-level markers distributor screening reads, then masters the file to your platform’s loudness target. It is built and tested against **DistroKid**, which is the distributor we recommend for AI-generated music: you keep 100% of your streaming royalties with no cut taken on your DSP earnings.

![Undetectr — exactly what it does](https://i.ytimg.com/vi/5mXhINqS35A/maxresdefault.jpg)

Worth doing the sums before you decide it is not worth it. Put your own catalogue size into the [AI Music Earnings Calculator](https://undetectr.com/ai-music-earnings-calculator) and see what those tracks are worth over a year once they are actually released — then compare that to a one-time €39.

[Calculate what your catalogue could earn →](https://undetectr.com/ai-music-earnings-calculator)[See pricing](https://undetectr.com/pricing)

## Using the Exclude field properly

Suno’s help centre describes Exclude as the place under Advanced Options in Custom Mode to “enter any information (instruments, etc) that you do not want in your track.” A launch-week thread titled “Some exclusion prompts that might improve your V6 experience” reported that Exclude terms seemed “far more necessary than previous versions” to keep V6 from its default habits.

![Suno's help article on excluding elements of a song: open Advanced Options in Custom Mode and enter what you do not want in the track](https://undetectr.com/blog/suno-v6-intro-outro-prompts/suno-exclude.webp)
*Suno’s own description of Exclude. This is where “humming” belongs, and where it does not belong is the style field.*

Rules that hold up across the reports:

- **Exclude categories, not sentences.** `humming, vocal intro, spoken intro, ad-libs, fade out` works. “Please do not add any humming at the start” is a sentence the model reads as style.
- **Keep it short.** Five or six terms. A long Exclude list starts contradicting the style field and the model resolves the conflict unpredictably.
- **Pair every exclusion with a positive.** Exclude “vocal intro” and, in the style field, say “4 bar guitar intro, instrumental only.” The exclusion filters; the positive instruction fills the gap so there is nothing for the model to improvise.
- **It is a filter, not a guarantee.** Users report it reduces the frequency of unwanted elements rather than eliminating them. If an excluded element still appears, that is the point at which you regenerate or edit, not the point at which you add more terms.

Exclude is also the main tool for the related problem of unwanted instruments arriving in a section that was meant to be sparse, such as guitars turning up in a drums-only intro. That has its own guide: [one guitar, not the whole band](./05-v6-solo-instrument-prompts.md).

## Fixing cut-off lyrics

The cut-off happens when the lyric runs to the end of the generation with no ending written, and the model decides the song is over a bar before the words are. Three things fix it, in order of cheapness.

- **Fewer lyrics.** One launch-week user complained that V6 “puts way too many lyrics in between chorus or hook.” If the lyric sheet is long, the ending has no room. Cut a verse before you do anything else.
- **A written landing.** End the lyric on a short final line and follow it with an ending tag from the templates above. The community guide’s recommendation of explicit instrumental boundaries is the same idea: give the song a place to stop that is not the last syllable.
- **A length target.** “Total song 3:10” in the style field tells the model how much room the ending has.

If a good generation is cut off by a few seconds, do not regenerate. [Extend](https://undetectr.com/blog/suno-extend) can add a short ending onto an existing track, and the [Editor](https://undetectr.com/blog/suno-editor) can replace or trim the final section. Both cost less than a fresh generation and keep the take you liked.

## Prompt, Exclude, regenerate or edit

Four tools, escalating in cost. Use the cheapest one that fits the fault.

![Decision flow for fixing a Suno V6 intro or ending: prompt, then Exclude, then regenerate, then edit](https://undetectr.com/blog/suno-v6-intro-outro-prompts/fix-it-where.webp)

1. **Prompt.** The intro or ending was never specified. Add a template from above to the style field and the lyric tags. This fixes most cases and costs one generation.
2. **Exclude.** The edges are specified but an unwanted element keeps appearing. Add the category to Exclude, leave the style field positive, generate once more.
3. **Regenerate.** The whole arrangement is wrong, not just the edges. Fix the map (our [arrangement guide](./04-v6-rock-prompts.md) covers this) and go again. Consider Max Mode for the keeper; Suno says it is for keeping style consistent through the whole track, which includes the ending.
4. **Edit.** Everything is right except the first or last eight bars. Suno’s V6 FAQ lists editing part of an existing song with plain language as a headline feature, and the Editor handles trims. This is the only option that keeps a take you love, so reach for it before you regenerate a good song for a bad ending.

One warning on step four from the launch-week YouTube first-looks: a producer asked V6 to change a single phrase and got back a different track with the same voice, three times. Section editing is new and uneven. Try it, and if it rewrites more than you asked, fall back to the Editor’s trim and replace, which is deterministic.

Do not spend a download twice

Fix the edges, download once, process that file

Downloads are capped by plan since 3 September. Use the templates to land a clean start and stop, download the take, and process the export rather than regenerating until a distributor accepts it. Unlimited processing on Lifetime.

[See Lifetime — €39 →](https://undetectr.com/pricing)

## After the edges are clean

A song that starts on the right beat and ends on the right word is a song people finish, which is what playlist algorithms measure. It is still a V6 export underneath: the generator metadata and the signal-level markers distributor intake scans for are unchanged by a clean ending, and [Undetectr](https://undetectr.com/features) handles both in one pass before you upload. If you have gone to the trouble of a proper intro and ending, the track is also ready to sell directly rather than earn streaming pennies; [played.fm](https://played.fm/sell-your-music) lets you sell to fans and pitch for sync from one page.

If the intro keeps getting a vocal even with Exclude set, the problem may be the sliders rather than the prompt: Variety rewrites your style prompt before generation, which can put the vocal back. [Why V6 changes your prompt](./01-v6-changing-your-prompt-sliders.md) explains each control and how to set them for obedience.

## Frequently Asked Questions

### Why does Suno V6 add humming or ad-libs at the start of my song?

Because the prompt described what the song is and not what the first bars contain. When the opening is unspecified, V6 fills it with a vocal texture, and users report that asking it to "remove the humming" in a follow-up produced more humming. Say what the intro is in positive terms ("8 bars of solo piano, no vocal of any kind"), put the same instruction in a bracket tag at the top of the lyrics, and add "humming, vocal intro, ad-libs" to the Exclude field. Do not mention the thing you do not want in the style field itself.

### How do I stop V6 cutting off the last line of the lyrics?

Give the song an explicit ending that leaves room. A lyric that runs to the last second gets truncated when the model decides the song is over. End the lyrics with a clear final line, then a bracketed ending tag such as [End - held note, then stop] or [Outro - instrumental, 4 bars, fade], and describe the same ending in the style field. The community prompting guide that appeared in launch week attributes most cut-offs to missing boundaries.

### Why are V6 outros so long?

Unspecified endings default to the model vamping until it runs out of length. State the ending and its duration. "Ends on a hard stop after the last chorus, no outro" and "4 bar instrumental outro then fade" both work far more often than leaving it blank. If the song still runs long, the Editor can trim the tail without regenerating.

### Does the Exclude field actually work in V6?

Suno's help article describes it as the place to enter any information, instruments included, that you do not want in the track, and a launch-week thread reported that Exclude terms seemed "far more necessary than previous versions" to avoid V6's habits. It is a filter on style, not a guarantee. Use it for categories of thing (humming, spoken intro, vocal ad-libs, fade out), keep the list short, and put the positive version of the instruction in the style field.

### Should I fix a bad intro by regenerating or by editing?

If the intro is wrong but the rest of the song is right, edit. Suno's V6 supports plain-language section edits, and the Editor lets you replace or trim a section. If the intro is wrong because the whole arrangement is wrong, regenerate with the boundaries described in this guide. The decision tree in the article walks through it in four steps: prompt, Exclude, regenerate, edit.

### Do bracket tags like [Intro] and [End] reliably control V6?

They are hints, not commands. Suno does not document a tag specification, and users report the same tag behaving differently across generations. They work best when the style field says the same thing in a sentence, so the model gets the instruction twice. Treat any tag that works as a habit to keep, not a rule to rely on.

### Does a clean ending matter for distribution?

It matters for listeners and for playlist behaviour; a song that cuts off mid-word gets skipped. It does not change screening. Distributor intake reads signal-level markers in the file that are present whether the ending is clean or not. Fix the ending for the listener, then process the export before upload.

⚡ Lifetime — One-Time €39

### Tested With Suno V6. Ready for Every Distributor.

One payment, unlimited processing. Undetectr removes the generator metadata and the signal-level artifacts that intake screening looks for, then masters to each platform's loudness target for free. Bulk Suno Downloader, Sound Match and the 100+ prompt vault included.

[Get Lifetime Access →](https://undetectr.com/buy/lifetime)One-time payment · No subscription · Includes Suno Bulk Download