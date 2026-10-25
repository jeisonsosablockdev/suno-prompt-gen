---
title: "Suno V6 Prompts: The Complete V6 Prompting Guide"
description: "The Suno V6 prompting guide: v6 vs v6-wild vs v6-mini, the core prompt structure, five paste-ready prompts and the fix for every common V6 problem."
date: "2026-09-25"
category: "Core Hub"
source: "https://undetectr.com/blog/suno-v6-prompts"
---

# Suno V6 Prompts: The Complete V6 Prompting Guide

September 25, 202612 min read

![Suno V6 prompts guide: the controls and prompt fields that decide what V6 generates](https://undetectr.com/blog/suno-v6-changing-your-prompt/featured.webp)

Suno V6 shipped on 9 September 2026, and within a day r/SunoAI had settled on a phrase for it: V6 “wants to be directed exactly what to do, with little deviation.” That is the whole prompting story in one line. Older models drifted away from your style prompt, and a lot of what people loved about them lived in that drift. V6 does what the text says. If the text is vague, you get a vague song; if the text is precise, you get far more control than v5.5 ever gave you.

Since launch we have written eight guides, each built on launch-week threads, Suno’s own V6 FAQ and help centre articles, and prompts we could paste and test. This page is the map that ties them together: what changed about prompting, which of the three V6 models to use, a core prompt structure with paste-ready examples, and a table that sends each common V6 complaint to the guide that fixes it. If you want the verdict on the model itself rather than the prompts, read our [Suno V6 review](./09-v6-reactions-models-comparison.md). For prompt formulas and genre starters that work across every Suno version, the [general Suno prompts guide](./29-technique-general-prompts-guide.md) is the older hub this one sits beside.

TL;DR

- **Direct the musicians, do not describe the record.** Tell each instrument and the singer what to do in each section. Adjectives describe the intro; instructions describe the song.
- **Set Variety to 0 before you trust any template.** Variety rewrites your style prompt by design. Zero keeps your tags exactly as typed.
- **Say everything twice.** Once in the style field, once as a bracket tag at the top of the section in the lyrics.
- **Put unwanted things in Exclude, never in the style field.** “No humming” puts humming in the prompt.
- **Pick the model for the job.** v6 for precision, v6-wild when v6 goes flat, v6-mini for drafts.
- **Change one thing per generation.** Every hundred-credit horror story in launch week changed six things at once.

Tested with Suno V6

Prompt landed? Protect the file before it goes anywhere.

However good the prompt, a V6 export carries Suno's generator metadata and the signal-level artifacts distributor screening looks for. Undetectr strips both before you upload. Unlimited on Lifetime.

[Process a V6 track →](https://undetectr.com/upload)

## What is different about prompting V6

Three things changed at once, and almost every V6 complaint sits where they overlap.

**The training data is different.** Suno says V6 was built with its label partners and not on the data behind earlier models. Prompts that worked because v4.5 had “heard” a certain kind of song do not carry over. The most useful reply in one launch-week thread was also the bluntest: “Your old prompts won’t work. It’s trained on different data than the last models.”

**V6 follows the style field more literally.** Suno’s FAQ says the model “understands more of the language and building blocks musicians use, from vocals, instrumentation and structure to mood.” The practical consequence is that anything you leave unspecified, the model decides for you, and its decisions are predictable: a vocal texture before the first line, a band that thins out under the singer, a duet partner who takes over mid-sentence, an outro that vamps until the song runs out. None of those are random faults. They are gaps in the prompt.

**Your prompt may not be the prompt that runs.** Suno’s V6 FAQ says the Variety slider works by “adjusting and updating your style prompts,” and that reducing it to 0 lets you “retain full control of your style tags.” If you are carefully writing an instrument-by-section style field and Variety is up, the model may rewrite the sentence you spent ten minutes on. Every template on this page and in the eight guides assumes Variety is at 0. Our [guide to Variety, Style Influence and Weirdness](./01-v6-changing-your-prompt-sliders.md) explains each control and gives you a one-change-at-a-time worksheet to learn how they behave on your own prompt.

## v6, v6-wild or v6-mini

V6 is three models, and a lot of bad first impressions came from using the wrong one for the job. This is the split from Suno’s own description and the first two weeks of user reports, as laid out in our [Suno V6 review](./09-v6-reactions-models-comparison.md).

| Model | What it is for | Who gets it | Prompt with it when |
| --- | --- | --- | --- |
| **v6** | Precision and consistency | Pro and Premier | You know the song you want and have a clear, specific prompt |
| **v6-wild** | Variety and surprise | Pro and Premier | v6 sounds flat or generic, or the genre is one v6 handles badly, such as metal |
| **v6-mini** | Speed | Everyone, including Free | Drafting ideas and testing lyrics before you spend a Pro generation |

Two prompting notes from the guides. If you want the prompt obeyed, use v6 with Variety at 0. If you want to be surprised, v6-wild with Weirdness up; mixing both goals in one generation is how you end up with neither. And v6-wild is the first thing to try when a vocal comes out muffled or a rock verse goes flat: one user went from “muffled vocals without any feeling” on v6 to something usable on v6-wild with Weirdness around 20 and Style Influence around 80. It is one extra generation, not a guaranteed fix.

![Two Suno V6 Settings Straight From The Docs](https://i.ytimg.com/vi/2JjvqZsv3P4/maxresdefault.jpg)

UndetectrTwo V6 settings, taken straight from Suno’s own documentation.

![Pick your mode, then your model: Max Mode for long songs, covers and consistency, v6 to execute and v6-wild to explore](https://undetectr.com/blog/suno-v6-prompts/pick-mode-then-model.webp)
*Set the controls before you generate: Max Mode when the FAQ says it helps, then v6 to execute or v6-wild to explore.*

## The core V6 prompt structure

Every working prompt in the eight guides uses the same three fields, each with a different job.

- **Style field: the map.** Several users report the order Genre, Vocals, Drums, Guitars, Bass, other instruments, Arrangement and energy, Production, Ending working better than a jumble. We cannot prove the model reads left to right, but putting the vocal second costs nothing. Write each instrument as a sentence about what it does in each section, and describe the singer with performance verbs: holds, breathes, pushes, pulls back.
- **Lyrics field: the cues.** A short bracket tag at the top of each section restates the key instruction at the moment the model renders it, such as `[Verse 1 - riff continues under vocal, palm-muted, drums drive]`. Keep tags short and make them agree with the style field word for word; a contradiction gets resolved by thinning things out.
- **Exclude field: the filter.** Suno’s help centre describes it as where you enter “any information (instruments, etc) that you do not want in your track.” A launch-week thread found it “far more necessary than previous versions.” Categories, not sentences, and fewer than ten of them.

Underneath all three sit the sliders under Advanced Options in Custom Mode: Variety, Style Influence (Loose to Strong) and Weirdness (Safe to Chaos, with 50 as the normal expected result), plus Audio Influence when you attach audio. Typing “weirdness 20%” into the style field does not move anything. It is just words.

![A layered V6 style prompt broken into genre, era, lead vocal, harmony, drums, mix and texture, each phrase doing one job](https://undetectr.com/blog/suno-v6-prompts/every-phrase-one-job.webp)
*A layered style prompt: every phrase does one job, so nothing is left for the model to guess.*

## Paste-ready V6 prompts

Five prompts taken from the guides, each built on the structure above. Swap the tempo, the singer and the instruments for your song; keep the shape. Each one links to the guide that explains why it is written the way it is. For the instrument palette of a specific genre, such as the upright bass and brushed drums of a piano trio, see our [Suno jazz prompts](./12-genre-prompts-jazz.md).

**1. Ballad vocal that sings rather than reads** (from the [vocal prompts guide](./02-v6-vocal-prompts.md)). Pair it with a lyric that stretches the held vowels on the page, such as “Sta-a-ay, just one more ni-i-ight.”

```text
Slow country ballad, 76 BPM, 4/4.
Female lead, warm alto, sings every line rather than speaking it,
unhurried, takes a breath before each line, holds the last word of
each chorus line for a full bar, soft and close to the mic in the
verses, opens up and pushes in the chorus.
Live drums with brushes, quiet in the verse, full kit from the chorus.
Upright bass, root notes, walks into the chorus.
Pedal steel answers the end of each vocal line, never over the voice.
Sparse verses, wide chorus, one final chorus a cappella for two lines
then the band returns. Clean ending on a held vocal note.
```

**2. Rock that keeps the band under the singer** (from the [rock prompts guide](./04-v6-rock-prompts.md)). The guitar sentence is the one doing the work.

```text
Hard rock, 128 BPM, 4/4, live band feel.
Male lead, gritty mid-range, sings with the riff in the verse, opens
up in the chorus, one scream on the last chorus only.
Drums: build for four bars in the intro, drive the verse with a
straight beat and a fill into every chorus, full kit and crash on
the chorus, half-time in the bridge, back to full for the last chorus.
Guitar: the intro riff continues under the verse vocal, palm-muted
and lower, never stops. Chorus is a wall of two rhythm guitars.
Bridge is a clean guitar only. Final chorus brings the riff back on
top of the wall.
Bass: root notes locked to the kick in the verse, moving line into
each chorus, drops out for the first half of the bridge.
Arrangement: intro 8 bars, no vocal. Verse quieter than intro but
the band keeps playing. Chorus is the loudest point. Ends on a
hard stop after the last chorus, no outro.
```

**3. One guitar, no band** (from the [solo instrument guide](./05-v6-solo-instrument-prompts.md)). Style, Exclude and tags all say the same thing.

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

**4. A clear vocal in front of the band** (from the [muffled vocals guide](./08-v6-muffled-vocals.md)). Placement words and a sparse verse, not “crisp, clear, radio-ready.”

```text
Indie pop, 100 BPM.
Female lead, in front of the band, close-miked and dry, the loudest
element in the mix, brighter than the instruments.
Verse: only clean electric guitar and bass under the vocal, no
drums, no pads, no strings. Pre-chorus adds light drums.
Chorus: full band, vocal still on top, short reverb on the voice.
Bridge: piano and vocal only.
Ends on the vocal alone.
Exclude: pads, strings, synth layers, backing vocals
```

**5. A song built on your own recorded hook** (from the [voice memo guide](./07-v6-voice-memo-to-song.md)). Attach the recording as audio input; the style field describes everything except the hook.

```text
Indie folk, 92 BPM, matches the uploaded recording.
The uploaded audio is the chorus melody. Keep that melody exactly
for every chorus. Write verse melodies in the same key that lead
into it.
Female lead, soft and close in the verses, opens up on the chorus.
Acoustic guitar carries the chords under the whole song.
Upright bass enters on the first chorus. Light brushed drums from
the second verse. No other instruments.
Ends on the chorus melody sung once, unaccompanied, then stops.
```

Duet and ending templates are longer because they depend on the lyric sheet, so they live in their own guides: the [duet guide](./03-v6-duet-prompts.md) has alternating, call-and-response and harmony templates, and the [intro and ending guide](./06-v6-intro-outro-prompts.md) has three openings and three endings. For 26 more prompts across 13 genres, each with a Pro Production layer that describes how the finished record should sound, see [Suno V6 prompts for a professional sound](./11-v6-pro-production-prompts.md).

## The eight V6 prompt guides

Each guide takes one V6 failure, explains why it happens, and gives you templates and a test to fix it. Start with the one that matches the problem in front of you.

[Why V6 changes your prompt →The Variety, Style Influence and Weirdness sliders, and why V6 rewrites your style prompt before it generates. Read this first: every other template assumes Variety is at 0.](./01-v6-changing-your-prompt-sliders.md)[V6 vocal prompts →When the singer reads the lyric instead of singing it. Syllable counts, held vowels written into the lyric, performance verbs in the style field and verse-to-chorus contrast.](./02-v6-vocal-prompts.md)[V6 duet prompts →Two singers who swap mid-sentence. Named singers, three duet shapes and a singer-and-line sheet you fill in before you generate.](./03-v6-duet-prompts.md)[V6 rock prompts →A great intro, then the band leaves when the vocal arrives. The instrument map, three rock templates and a four-point A/B checklist.](./04-v6-rock-prompts.md)[V6 solo instrument prompts →One guitar or one piano without a full band behind it. The style, Exclude and tag method, plus stems and Studio as fallbacks.](./05-v6-solo-instrument-prompts.md)[V6 intro and ending prompts →Humming at the start, long outros at the end and cut-off last lines. Three openings, three endings and when to edit instead of regenerating.](./06-v6-intro-outro-prompts.md)[Voice memo to V6 song →Starting a new song from a hook you recorded on your phone. Record, trim, upload, set Audio Influence and describe the band around it.](./07-v6-voice-memo-to-song.md)[V6 muffled vocals →A vocal buried under a blanket. A ninety-second diagnosis that separates density, placement and a dull render, because only two of those are prompt problems.](./08-v6-muffled-vocals.md)

## Problem, fix, guide

The most common V6 complaints from launch week, the first fix to try, and where the full method lives.

| The problem | First fix | Guide |
| --- | --- | --- |
| My style prompt comes back rewritten | Set Variety to 0 under Advanced Options | [Why V6 changes your prompt](./01-v6-changing-your-prompt-sliders.md) |
| The singer reads the lyrics instead of singing | Cut syllables per line and stretch the held vowels in the lyric | [V6 vocal prompts](./02-v6-vocal-prompts.md) |
| Verse and chorus sound the same | Make the chorus different on paper: shorter lines, different delivery | [V6 vocal prompts](./02-v6-vocal-prompts.md) |
| Duet singers swap mid-sentence | Name Singer A and Singer B, tag every section, keep traded lines to six syllables | [V6 duet prompts](./03-v6-duet-prompts.md) |
| The band disappears when the vocal starts | Tell the riff to continue under the verse vocal, per section | [V6 rock prompts](./04-v6-rock-prompts.md) |
| I asked for one guitar and got a full band | Describe one performer, Exclude the other categories, tag every section | [V6 solo instrument prompts](./05-v6-solo-instrument-prompts.md) |
| Humming or ad-libs before the first line | Describe the intro positively; put humming in Exclude, not the style field | [V6 intro and ending prompts](./06-v6-intro-outro-prompts.md) |
| Long outro, or the last line gets cut off | State the ending and its length; end the lyric with an ending tag | [V6 intro and ending prompts](./06-v6-intro-outro-prompts.md) |
| Text cannot describe the melody I hear | Record the hook on your phone and upload it as audio input | [Voice memo to V6 song](./07-v6-voice-memo-to-song.md) |
| The vocal sounds muffled or buried | Diagnose density, placement or render before rewriting anything | [V6 muffled vocals](./08-v6-muffled-vocals.md) |

The step most people skip

## The prompt shapes the song. It does not touch what is in the file.

Sounding good and passing screening are two different finish lines. Distributors run their own checks at upload, and a track that gets flagged does not simply come back with a warning — it does not go live, which means it never earns anything at all. That check happens once, at the moment you submit, and it happens before a single listener hears the track.

[Undetectr](https://undetectr.com/) removes the generator metadata and processes the signal-level markers distributor screening reads, then masters the file to your platform’s loudness target. It is built and tested against **DistroKid**, which is the distributor we recommend for AI-generated music: you keep 100% of your streaming royalties with no cut taken on your DSP earnings.

![Undetectr — exactly what it does](https://i.ytimg.com/vi/5mXhINqS35A/maxresdefault.jpg)

Worth doing the sums before you decide it is not worth it. Put your own catalogue size into the [AI Music Earnings Calculator](https://undetectr.com/ai-music-earnings-calculator) and see what those tracks are worth over a year once they are actually released — then compare that to a one-time €39.

[Calculate what your catalogue could earn →](https://undetectr.com/ai-music-earnings-calculator)[See pricing](https://undetectr.com/pricing)

## Rules that apply to every V6 prompt

These come up in every one of the eight guides, whatever the genre or the fault.

- **Change one thing per generation.** The launch-week horror stories are people burning 100 credits re-rolling a prompt with six changes at a time and no idea which one mattered. Four disciplined generations beat forty random ones.
- **Describe what you want, not what you do not.** A user who asked V6 to remove the humming got more humming. The word is in the prompt, so the concept is in play. Describe the opening you want and move the unwanted thing to Exclude.
- **Bracket tags are hints, not commands.** Suno does not document a tag specification. Tags work best when the style field says the same thing in a sentence.
- **Quality words do nothing; placement words do.** “Crisp, clear, professional, radio-ready, mastered” gives the model nothing to act on. “In front of the band, close-miked and dry” does.
- **Sliders do not fix arrangement.** Style Influence and Weirdness change how closely V6 follows the style field and how safe it plays. They do not tell the guitar to keep going or tell a singer which verse is theirs.
- **Keep songs short.** A controlled a cappella test on launch day found the lead improved but “late-song mud persists.” Under three and a half minutes holds up better, or generate the back half separately with Extend.
- **Max Mode is for the keeper.** Suno says it spends more compute, costs more credits and is best for songs over two minutes and keeping vocals and style consistent through the whole track. Turn it on for the generation you intend to keep, not while exploring.
- **Edit before you regenerate.** If only the intro or ending is wrong, V6’s section editing and the Editor’s trim and replace keep the take you liked.

Do not spend a download twice

Get the prompt right, download once, process that file

Suno caps downloads by plan since 3 September. Use the guides above to land a keeper in a few generations, then run the export through Undetectr rather than regenerating until a distributor accepts it. Unlimited processing on Lifetime.

[See Lifetime, €39 →](https://undetectr.com/pricing)

## Before you release a V6 track

Once a generation holds up, run through this before it leaves your hands.

![From prompt to finished file in five steps: prompt, controls, fix, download, the file](https://undetectr.com/blog/suno-v6-prompts/five-steps-prompt-to-file.webp)
*The five steps from prompt to a finished file. Most people only think about the first one.*

1. **Listen for the four V6 faults.** A vocal texture before the first line, a band that thins under the verse vocal, a singer who reads rather than sings, and a last line that gets cut off or an outro that runs on.
2. **Check the verse, not the intro.** Skip to the first verse vocal and ask whether every instrument your map said should be playing is still there.
3. **Fix the edges with the Editor if the middle is right.** A good song should not be regenerated for a bad ending.
4. **Regenerate the keeper in Max Mode if it drifts.** A singer who changes character halfway, or a vocal that is clear in the first chorus and buried by the third, is a consistency problem.
5. **Download once.** Downloads are capped by plan, so make the one you keep the one you release.
6. **Process the export through Undetectr before upload.** A V6 export carries Suno’s generator metadata and the signal-level markers distributor intake scans for, and none of that changes because the prompt was good. [Undetectr](https://undetectr.com/features) strips the tag, processes the artifact layer and masters to the platform’s loudness target, so the dynamics you prompted for are not flattened at intake.

And if a song took this much direction to get right, it is worth more than streaming pennies. [played.fm](https://played.fm/sell-your-music) lets you sell it directly to fans and pitch it for TV, film and podcast placement from one page.

## More Suno Prompt Guides

The eight guides above fix how V6 behaves; these cover genre vocabulary, mix language and the fundamentals underneath every prompt.

- [Suno prompts for ambient, sleep and detective music](./13-genre-prompts-ambient.md): drones, cinematic pads and noir
- [Suno country prompts](./14-genre-prompts-country.md): modern, classic and outlaw country
- [Suno drill prompts](./15-genre-prompts-drill.md): UK drill, NY drill and sample drill
- [Suno EDM prompts](./16-genre-prompts-edm.md): house, techno and festival drops
- [Suno gospel and choir prompts](./17-genre-prompts-gospel.md): choir, contemporary and praise and worship
- [Suno prompts for hip-hop](./18-genre-prompts-hip-hop.md): trap, boom-bap and drill
- [Suno lo-fi prompts](./19-genre-prompts-lofi.md): study beats, chillhop and lo-fi jazz
- [Suno metal prompts](./20-genre-prompts-metal.md): thrash, death metal and metalcore
- [Suno pop prompts](./21-genre-prompts-pop.md): 25+ prompts and the formula that works
- [Suno R&B prompts](./22-genre-prompts-r-and-b.md): neo-soul, trap-soul and contemporary R&B
- [Suno rock and hard rock prompts](./23-genre-prompts-rock.md): 27 prompts, with notes for V6
- [Suno V6 mastering prompts](./10-v6-mastering-prompts.md): the mix words 98 featured songs use
- [AI music prompts vault](./24-vault-ai-music-prompts.md): 100+ prompts for Suno, Udio and ElevenLabs
- [How to write lyrics for Suno AI](./25-technique-write-lyrics-for-suno-ai.md): formatting, pronunciation and lyric limits
- [Suno Custom Mode guide](./26-technique-custom-mode-guide.md): every field and V6 setting explained
- [10 common Suno AI mistakes](./27-technique-10-suno-ai-mistakes.md), and how to fix each one
- [Suno AI for beginners](./28-technique-suno-ai-beginners-guide.md): your first song, modes and plans

## Frequently Asked Questions

### Do my old Suno prompts work in V6?

Often not as well. Suno says V6 was built with its label partners and not on the data behind earlier models, and it follows the style field more literally. A launch-week user put it bluntly: "Your old prompts won't work. It's trained on different data than the last models." Prompts that relied on v4.5 or v5.5 drifting into something good tend to come back flat on V6, because V6 does what the text says and little else.

### What is the best prompt structure for Suno V6?

There is no documented one, but the order several users report working is Genre, Vocals, Drums, Guitars, Bass, Arrangement, Production, Ending. Describe what each instrument does in each section rather than stacking adjectives, restate the key instruction in a bracket tag at the top of each section in the lyrics, and put unwanted elements in the Exclude field rather than the style field.

### Why does V6 ignore or rewrite my style prompt?

If the prompt is being rewritten, that is the Variety slider. Suno's V6 FAQ says it works by adjusting and updating your style prompts, and that setting it to 0 keeps full control of your style tags. If the prompt is intact but loosely followed, that is Style Influence, which runs from Loose to Strong. The full explanation is in our guide to why V6 changes your prompt.

### Should I use v6, v6-wild or v6-mini?

v6 when you know what you want and have a clear prompt. v6-wild when v6 sounds flat or generic, or for heavy genres such as metal where launch-week users found v6 weakest. v6-mini for fast drafts and testing lyrics. v6 and v6-wild need Pro or Premier; v6-mini is available to everyone.

### Do bracket tags like [Verse] and [End] work in V6?

As hints, not commands. Suno does not document a tag specification and users report the same tag behaving differently across generations. Tags work best when the style field says the same thing in a sentence, so the model gets the instruction twice: once when it reads the style field and again at the moment it renders the section.

### Does a better prompt help a V6 track get past distributors?

No. Prompts shape the composition and the performance. Distributor screening reads signal-level markers in the exported file, and every V6 export carries Suno's generator metadata however well it was prompted. Get the song right, download it once, then process the file before upload.

⚡ Lifetime: One-Time €39

### Tested With Suno V6. Ready for Every Distributor.

One payment, unlimited processing. Undetectr removes the generator metadata and the signal-level artifacts that intake screening looks for, then masters to each platform's loudness target for free. Bulk Suno Downloader, Sound Match and the 100+ prompt vault included.

[Get Lifetime Access →](https://undetectr.com/buy/lifetime)One-time payment · No subscription · Includes Suno Bulk Download