---
title: "Suno V6 Vocal Prompts: More Expression, Longer Notes"
description: "V6 reads lyrics instead of singing them when the syllables are too dense. Four levers in order, paste-ready prompts and a phrasing worksheet."
date: "2026-09-11"
category: "V6 Core Guides"
source: "https://undetectr.com/blog/suno-v6-vocal-prompts"
---

# Suno V6 Vocal Prompts: More Expression, Longer Notes

September 17, 202612 min read

![Suno V6 vocal prompts: a microphone with one long held waveform, sing it not read it](https://undetectr.com/blog/suno-v6-vocal-prompts/featured.webp)

Part of our [**Suno V6 prompts guide**](./00-suno-v6-prompts-guide.md), which maps every V6 prompting problem to the guide that fixes it.

**Update, 17 September 2026:** after a full week of threads the vocal verdict is consistent: fidelity is up and feel is contested. Even in the “V6 is fine” thread the top comment concedes the instruments “sound like they are coming from a synthesizer,” while the most-cited win is that V6 “doesn’t double up on adlibs or repeat lines,” which removes one of the reasons lever 1 below existed. A controlled a cappella test on v6 summed up the rest: lead improved, section separation weak, late-song mud persists.

Nothing in the four levers changes, but on long songs generate in Max Mode and downvote the takes that drift. The launch-week split, with the quotes, is in [what people actually think of Suno V6](./09-v6-reactions-models-comparison.md).

The most upvoted complaint about **Suno V6 vocals** in launch week was seven words long: *“v6 doesn’t sing. It reads.”* The poster had spent 100 credits trying to get a slow country ballad that v5.5 had nailed first time. Underneath, someone else described their V6 singer as “a bed time story read by an unmotivated parent.”

We read fifteen launch-week threads on r/SunoAI, Suno’s own V6 FAQ and the community prompting guides that appeared in the first 48 hours, and pulled out what actually moved the vocal from reading to singing. This is not a list of magic tags. It is four levers, in the order they should be pulled, with prompts you can paste and a worksheet for the verse-to-chorus contrast that V6 flattens by default.

One honest caveat up front. V6 shipped on 9 September 2026. Everything here is drawn from what users reported and what Suno documents, and the reports disagree with each other in places. Treat the templates as a starting point you refine with one change per generation, not a guarantee.

TL;DR

- **V6 performs what you write, literally.** Too many syllables per bar and no delivery description gets you text read at tempo.
- **Separate the singer from the performance.** Voice identity goes in one clause; pacing, holds and energy go in others.
- **Write the held notes into the lyric.** Stretch the vowel on the page. One launch-week tester says this was the only change that produced a sustained note.
- **Make the chorus different on paper.** If verse and chorus lines have the same length and the same instructions, V6 sings them the same way.
- **A sung reference beats every adjective.** A voice memo of you humming the melody, uploaded with the prompt, fixes phrasing that text cannot.

Tested with Suno V6

Got a V6 vocal you are happy with?

The performance is only half the release. Before it goes to a distributor, run the export through Undetectr to remove the generator metadata and the signal-level artifacts screening looks for. Unlimited on Lifetime.

[Process a V6 track →](https://undetectr.com/upload)

## Why V6 reads instead of sings

Three things changed at once, and the vocal complaints sit where they overlap.

First, **the training data is different.** Suno says V6 was built with its label partners and not on the data behind earlier models. Prompts that worked because v4.5 had “heard” a certain kind of ballad do not carry over. The most useful reply in the 100-credits thread was also the bluntest: “Your old prompts won’t work. It’s trained on different data than the last models. Try a different approach with your prompting.”

Second, **V6 follows the style field more literally.** Suno’s FAQ says the model “understands more of the language and building blocks musicians use, from vocals, instrumentation and structure to mood.” The community version of that sentence, from the launch-week prompting guide, is less flattering: v5.5 “drifted a lot from the style prompt” and that drift is where the magic lived; V6 “wants to be directed exactly what to do, with little deviation.” If you do not describe a performance, you do not get one.

Third, **most lyric sheets are written for reading, not singing.** Twelve-syllable lines at 76 BPM leave no room for a note to be held. v4.5 would drop words to make space. V6 sings every syllable you gave it, which at that density means short, flat, rushed. The poster in the disaster thread noticed this themselves: explicit delivery instructions did nothing, but respelling the vowels in the lyric produced a near-miss on the last of six workarounds.

![Reads versus sings: many short flat bars labelled rushed, against a few long curved held waves labelled held](https://undetectr.com/blog/suno-v6-vocal-prompts/reads-vs-sings.webp)
*The whole problem in one picture. A dense lyric with no delivery cue is performed as the thing on the left.*

![Suno V6 Vocal Problems: Diagnose the Performance Before You Export](https://i.ytimg.com/vi/GgmvqvQPZTM/maxresdefault.jpg)

UndetectrDiagnose a V6 vocal performance before you spend a download on it.

## Separate the singer from the performance

The single most common mistake in the prompts people posted is one clause doing two jobs. “Emotional female country vocal” names a singer and a mood, and leaves everything about pacing, holds, breath and dynamics to chance. Split it.

- **Identity:** who is singing. Range, texture, age, one reference style if you use them. This stays constant across the song.
- **Performance:** what they do with each line. Pace, where they hold, where they breathe, how loud, how the chorus differs from the verse. This changes by section.

Everything below is about the second half, because that is what V6 dropped. If your identity clause is already producing the right singer, leave it alone and add performance clauses after it.

![Four levers for V6 vocals: pacing, line length, delivery, reference](https://undetectr.com/blog/suno-v6-vocal-prompts/four-levers.webp)
*Pull them in this order. Each one is a single generation to test.*

## Lever 1: lyric pacing and syllable count

Start with the lyric, not the style field, because a lyric that cannot be sung will not be sung however you describe the singer.

**Count syllables per line against the tempo.** At 76 BPM in four-four, a bar is just over three seconds. A line that fills a bar with eight syllables leaves room for one of them to be held. Twelve leaves none. Our rule of thumb for ballads: six to eight syllables in verse lines, four to six in chorus lines, and the last word of every chorus line on an open vowel (ay, oh, oo, ah) so there is something to sustain.

**Write the hold on the page.** This is the trick the disaster-thread poster landed on after five failed workarounds, and it matches what we have seen from other users: stretch the vowel in the lyric itself. Not every line, just the ones you want held.

```text
[Verse 1]
Porch light on, the road runs long
You said you'd call, the phone stayed gone
Coffee's cold, the radio plays
Every song is about the ways

[Chorus]
Sta-a-ay, just one more ni-i-ight
Don't drive awa-a-ay from the porch light
I'll wait ti-i-ill the morning's gre-e-ey
Sta-a-ay
```

Notice the verse is plain and the chorus is where the vowels open up. That contrast is doing more work than any adjective in the style field, and it is the reason the next two levers exist.

## Lever 2: describe the performance in the style field

Now the style field. The launch-week consensus from people who got V6 vocals to work is that **you direct a musician rather than describe a record**. One producer in the “tighter prompting” thread put it as: stop stacking adjectives and “tell V6 what everything should actually do.” For vocals that means verbs: holds, breathes, pushes, pulls back.

There is also an ordering tip that several people swear by, from the community prompting guide: Genre, then Vocals, then Drums, Guitars, Bass, other instruments, Arrangement and energy, Production, Ending instruction, then any slider notes. The user who posted it said it was the change that finally made their singer sing on the choruses. We cannot prove the model reads left to right, but putting the vocal second costs nothing.

Here is a full style field built that way for the ballad above.

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

Three things to copy from that. The vocal clause is second and it is all performance verbs. Every instrument has a job relative to the vocal (“answers the end of each vocal line, never over the voice”), which keeps the arrangement from burying the singer. And the ending is specified, which prevents the trailing outro V6 likes to add. Our [rock arrangement guide](./04-v6-rock-prompts.md) takes the instrument-by-job idea a lot further; our [intro and ending guide](./06-v6-intro-outro-prompts.md) covers the last line. To push the ballad further toward country, our [Suno country prompts](./14-genre-prompts-country.md) name the pedal steel and fiddle parts; for a lounge or piano-bar take, the brushed drums and upright bass in our [Suno jazz prompts](./12-genre-prompts-jazz.md) are the place to start.

Pop version, same principle, different verbs:

```text
Mid-tempo pop, 96 BPM.
Male lead, light tenor, conversational and clipped in the verses,
sustains the hook words in the chorus, doubles his own voice in
the final chorus, one breathy ad-lib after the second chorus only.
Programmed drums, tight and dry. Sub bass follows the kick.
Piano stabs on the off-beat in the chorus, absent in the verse.
Big empty gap before the last chorus, then everything at once.
```

The step most people skip

## When the vocal is right, the file still has to clear screening

Sounding good and passing screening are two different finish lines. Distributors run their own checks at upload, and a track that gets flagged does not simply come back with a warning — it does not go live, which means it never earns anything at all. That check happens once, at the moment you submit, and it happens before a single listener hears the track.

[Undetectr](https://undetectr.com/) removes the generator metadata and processes the signal-level markers distributor screening reads, then masters the file to your platform’s loudness target. It is built and tested against **DistroKid**, which is the distributor we recommend for AI-generated music: you keep 100% of your streaming royalties with no cut taken on your DSP earnings.

![Undetectr — exactly what it does](https://i.ytimg.com/vi/5mXhINqS35A/maxresdefault.jpg)

Worth doing the sums before you decide it is not worth it. Put your own catalogue size into the [AI Music Earnings Calculator](https://undetectr.com/ai-music-earnings-calculator) and see what those tracks are worth over a year once they are actually released — then compare that to a one-time €39.

[Calculate what your catalogue could earn →](https://undetectr.com/ai-music-earnings-calculator)[See pricing](https://undetectr.com/pricing)

## Lever 3: verse-to-chorus contrast

If you have done levers one and two and the song still feels like one long verse, this is why: **V6 will not invent a chorus lift you did not write.** Older models did, unpredictably. V6 sings a chorus the way the chorus is written and described, and if that is the same as the verse, you get the same delivery twice.

Use this worksheet before you generate. Fill in both columns and make sure at least three rows are different.

![Verse versus chorus worksheet: pace, energy, hold and breath rows with slow low short soft against steady high long full](https://undetectr.com/blog/suno-v6-vocal-prompts/verse-chorus-sheet.webp)
*If the two columns match, V6 will sing them the same. Change the words on the page, not just the adjectives.*

- **Pace:** verse lines longer and more conversational; chorus lines shorter with room to hold.
- **Energy:** say it in the style field (“soft and close in the verses, opens up in the chorus”) and mirror it in the lyric with a tag: `[Chorus - full voice]` works for many users, with the caveat that bracket tags are suggestions to the model, not commands.
- **Hold:** the stretched vowels belong in the chorus only. If every line has them, none of them lands.
- **Breath:** a one-line `[Break]` or an instrumental bar before the chorus gives the singer somewhere to inhale, and V6 respects it more often than not.

A related report from the same threads: V6 stops doubling ad-libs and repeating lines, which older models did on their own. That is good news for control and bad news if you were relying on the model to add the lift. Write the double in: “doubles his own voice in the final chorus” is in the pop template above for exactly that reason.

## Lever 4: give it a sung reference

Every lever above is text describing sound. The most reliable fix in the launch threads was to stop describing and show it. Users who uploaded a sung or hummed melody, even a rough phone recording over a backing track, reported V6 following “melody, style, cadence, inflection” far better than from text alone. One put it plainly: “I hardly ever make a song without uploading a seed any more.”

Two ways to do it. Upload the memo as audio input to a new generation and set Audio Influence to taste (Suno adds that slider automatically when audio is attached). Or use a saved voice from an earlier song as the identity and let your memo carry the phrasing. One user who found V6 vocals muffled and lifeless said the turnaround came from re-using voices they had saved from older models. We walk through the whole voice-memo workflow in [Give Suno V6 your own hook](./07-v6-voice-memo-to-song.md), and the voice side in the [voice cloning tutorial](https://undetectr.com/blog/suno-5-5-voice-cloning-tutorial).

![Real comments from the r/SunoAI thread claiming V6 reads rather than sings, captured 11 September 2026](https://undetectr.com/blog/suno-v6-vocal-prompts/card-reads.webp)
*The launch-week thread that started this. Note the two replies pointing at inputs rather than the model.*

## Where prompts stop helping

We would be doing you a disservice if we pretended every V6 vocal problem is a prompting problem. Some of it is the model.

- **Timbre is not yours to set.** Several users say V6 voices are “too polished” and lose the human error that made their earlier songs feel real. No prompt adds imperfection back. A sung reference is the closest thing to a fix.
- **Late-song degradation is real.** A controlled a cappella test posted on launch day found the lead improved but “late-song mud persists.” Keep ballads under three and a half minutes, or plan to generate the back half separately with Extend.
- **Try v6-wild before you give up.** Suno describes it as less predictable and more varied. For vocals, one user went from “muffled vocals without any feeling” on v6 to something usable on v6-wild with Weirdness low and Style Influence high. It is a second model, not a slider, and it is worth one generation.
- **Max Mode is for consistency, not expression.** Suno’s FAQ says it spends more compute and is best for songs over two minutes and for keeping vocals consistent through the whole track. If your singer changes character halfway, turn it on. If your singer is flat from bar one, it will not help.
- **Change one thing per generation.** The hundred-credit stories all have the same shape: six changes at once, no idea which one mattered. Four disciplined generations beat forty random ones. Our [guide to Variety, Style Influence and Weirdness](./01-v6-changing-your-prompt-sliders.md) has a worksheet for exactly that.

One download, one clean file

Downloads are rationed now, so make each one count

Suno caps downloads by plan since 3 September. Get the vocal right with the method above, download once, and process that file rather than re-generating until a distributor accepts it. Lifetime includes unlimited processing and the Suno Bulk Downloader.

[See Lifetime — €39 →](https://undetectr.com/pricing)

## After the vocal is right

A V6 export with a great vocal is still a V6 export. It carries Suno’s generator metadata and the signal-level markers that distributor intake scans for, none of which change when the singer phrases better. Before you upload to DistroKid, Spotify or Deezer, run the file through [Undetectr](https://undetectr.com/features), which strips the tag and processes the artifact layer, then masters to the platform’s loudness target so the expressive dynamics you just fought for are not flattened at intake.

And if the song is good enough that you spent this much effort on the vocal, it is good enough to sell directly. Streaming pays fractions of a cent; a single direct sale on [played.fm](https://played.fm/sell-your-music) is worth thousands of streams, and the same page lets you pitch the track for TV, film and podcast placements.

For the broader prompt formula and 100+ genre starters, the [Suno prompts guide](./29-technique-general-prompts-guide.md) is the hub this article hangs off. If your problem is two singers rather than one, read [the duet guide](./03-v6-duet-prompts.md) next. If the vocal is expressive but sounds like it is under a blanket, that is a different problem, covered in [Suno V6 sounds muffled](./08-v6-muffled-vocals.md).

## Frequently Asked Questions

### Why does Suno V6 sound like it is reading my lyrics instead of singing them?

Because you are almost certainly giving it too many syllables per bar and no instruction about how to deliver them. V6 was trained on different data from v4.5 and v5, and it follows the style field more literally. A dense lyric with no delivery description gets performed as text: short, flat syllables with no held notes. Cut the syllable count, write the vowels you want held, and describe the performance in the style field, not just the genre.

### Does V6 hold long notes at all?

Yes, but you have to ask for them in two places. In the style field, say that the singer sustains the last word of each line. In the lyrics, give the vowel room by stretching it ("sta-a-ay") or by ending the line on an open vowel. One launch-week poster who ran a country ballad through V6 dozens of times reports that spelling the sustained vowels into the lyric was the single change that produced a held note, after explicit delivery instructions alone did nothing.

### Should I put vocal instructions in the style field or in the lyrics?

Both, with different jobs. The style field describes the singer and the overall performance: voice, range, how verses differ from choruses. The lyrics field carries the moment-to-moment cues: bracketed tags at section heads and the actual syllables. Users who put delivery notes only in the lyrics report V6 ignoring them; users who put them only in the style field report the right singer with the wrong pacing.

### Does the order of the style prompt matter in V6?

Several people say yes. A prompt that opens with genre and then the vocal description, before drums and guitars, seems to weight the vocal more heavily. One user in the launch-week prompting thread says reordering to Genre, Vocals, Drums, Guitars, Bass, Arrangement, Production, Ending fixed choruses that had been flat. We cannot prove the model reads left to right, but the ordering costs nothing and is the first thing to try.

### Is v6-wild better for expressive vocals?

Sometimes. Suno describes v6-wild as less predictable and more varied, and several users say it is where the old character went. For vocals specifically, one user reported muffled, feelingless vocals on v6 that improved on v6-wild with Weirdness low and Style Influence high. It is a legitimate second attempt, not a fix for a badly paced lyric.

### Will a more expressive vocal make my track pass AI detection?

No. Free AI checkers score composition and timbre, and a more emotional performance is still a generated performance. Distributor screening looks at signal-level markers in the file, which are unrelated to how well the singer phrases. Get the vocal right for listeners, then handle the file separately before you upload.

### How many generations should I expect to spend?

Fewer than you think if you change one thing at a time. The launch-week horror stories are people burning 100 credits re-rolling the same prompt. Fix the syllable count first, then the delivery description, then the section contrast, then try a reference. Each change is one generation, so a methodical pass is four or five credits, not a hundred.

⚡ Lifetime — One-Time €39

### Tested With Suno V6. Ready for Every Distributor.

One payment, unlimited processing. Undetectr removes the generator metadata and the signal-level artifacts that intake screening looks for, then masters to each platform's loudness target for free. Bulk Suno Downloader, Sound Match and the 100+ prompt vault included.

[Get Lifetime Access →](https://undetectr.com/buy/lifetime)One-time payment · No subscription · Includes Suno Bulk Download