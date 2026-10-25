---
title: "Suno V6 Duet Prompts: Keep Each Singer on the Right Lines"
description: "Random voice switching is an assignment problem, not a model problem. Three duet shapes with templates and a singer-and-line sheet to fill in first."
date: "2026-09-11"
category: "V6 Core Guides"
source: "https://undetectr.com/blog/suno-v6-duet-prompts"
---

# Suno V6 Duet Prompts: Keep Each Singer on the Right Lines

September 11, 202610 min read

![Suno V6 duet prompts: two microphones facing each other, cyan and orange waveforms meeting](https://undetectr.com/blog/suno-v6-duet-prompts/featured.webp)

Part of our [**Suno V6 prompts guide**](./00-suno-v6-prompts-guide.md), which maps every V6 prompting problem to the guide that fixes it.

Ask r/SunoAI whether **Suno V6 duets** work and you get both answers in the same thread. One user, redoing older songs on the new model, wrote that V6 “seems to listen better to the instructions I put in style prompt and meta tags” and then, in the same breath, “once again a new model failed the duet test.” A few comments away someone else reports their singers “finally harmonized without swapping mid-sentence.”

Both are probably true, and the difference is almost never the model. It is whether the prompt gave V6 a map of who sings what. This guide is that map: three duet shapes with a template for each, a line-by-line singer sheet you fill in before you generate, and an honest comparison of starting fresh against covering a solo version. None of the existing Suno prompt guides on this site or anywhere else covers this, which is why we wrote it.

Caveat, as with all our V6 guides: the model is days old and reports conflict. Every tag below is something users say worked; none of it is documented syntax. Test each on a single generation before you trust it.

TL;DR

- **Name the singers once, then use the names everywhere.** “Male and female duet” is two voices with no assignment. “Singer A” and “Singer B” in the style field, then as tags, is a map.
- **Pick one of three shapes.** Alternating sections, call-and-response lines, or simultaneous harmony. Each needs different tags, and mixing them in one song is where the swapping starts.
- **Harmony works on shared words.** Both singers on the same chorus lyric, second voice described as a third above, is the reliable case. Different words at the same time is not.
- **Cover a solo version if you have one.** V6 covers hold the original melody well, so the second singer gets added around a tune that already works.
- **Max Mode for the keeper.** Suno says it exists to keep vocals consistent through the track, which is precisely the duet failure.

Tested with Suno V6

Two generated voices, one file, one screening

A duet export carries the same generator metadata and signal-level markers as any V6 track. Undetectr processes the whole mix before it goes to a distributor. Unlimited on Lifetime.

[Process a V6 track →](https://undetectr.com/upload)

## Why the voices swap

A duet prompt has to answer three questions the model cannot guess: who are the two singers, which lines belong to which, and what happens when they overlap. Most prompts answer the first and leave the other two blank.

Older models papered over this. v4.5 would improvise a plausible trade-off because it had a lot of duets in its training data and a habit of drifting from the prompt. V6, by Suno’s description and by user reports, follows the text more literally and drifts less. When the text does not say who sings the second line, V6 does not drift into a sensible answer; it makes a choice and makes a different one next time. That is the “random voice switching” people describe.

So the fix is not a better adjective. It is **assignment**: a name for each singer, and that name on every section and every traded line.

![Mid-line swap shown as one bar changing colour halfway with a red cross, against a clean handoff of one full cyan bar then one full orange bar with a green tick](https://undetectr.com/blog/suno-v6-duet-prompts/swap-vs-handoff.webp)
*The failure and the fix. A handoff happens at a line boundary you wrote; a swap happens wherever the model felt like it.*

![Suno V6 Duet Voice Swaps: Catch the Wrong Singer Before Choosing the File](https://i.ytimg.com/vi/p-k1ToFCE8I/maxresdefault.jpg)

UndetectrSpot a V6 duet that has swapped singers before you pick the file to release.

## The three duet shapes

Before writing a word of lyric, decide which of these you are making. They need different tags, and the songs that fail worst are the ones that try to be all three.

![Three duet shapes: alternate with stacked cyan and orange bars, call and answer with short alternating bars, harmony with both bars at the same time](https://undetectr.com/blog/suno-v6-duet-prompts/three-duet-shapes.webp)

- **Alternating:** Singer A takes a whole section, Singer B takes the next. Easiest to control. Tags at section level only.
- **Call and response:** singers trade lines inside a section. Hardest to control. Tags at line level, and short lines.
- **Harmony:** both singers at once on the same words, one above the other. Reliable when the words are shared; unreliable when they are not.

A normal duet uses alternating verses and a harmonized chorus, with at most one call-and-response bridge. That combination is what the templates below build towards.

## Shape 1: alternating verses

Define the singers in the style field, then tag each section with the singer’s name. Keep the names short and identical everywhere.

```text
Style:
Slow country duet, 76 BPM.
Two singers. Singer A: male, low baritone, plain and unhurried.
Singer B: female, warm alto, sings a little behind the beat.
Each verse is sung by one singer alone, never both.
Verse 1 Singer A only. Verse 2 Singer B only.
Chorus both singers, same words, Singer B a third above.
Acoustic guitar and brushed drums, pedal steel answers the vocal.

Lyrics:
[Verse 1 - Singer A]
I kept the porch light burning, kept the coffee on
...

[Verse 2 - Singer B]
You kept the porch light burning, I kept driving on
...

[Chorus - Singer A and Singer B]
Sta-a-ay, just one more ni-i-ight
...
```

Two details that matter. The style field says the rule twice, once in general (“each verse is sung by one singer alone”) and once specifically (“Verse 1 Singer A only”). Redundancy helps here. And the tag repeats the name, so the model has the assignment at the point it is rendering the line, not three paragraphs earlier.

The stretched vowels in the chorus come from our [V6 vocal prompts guide](./02-v6-vocal-prompts.md); if either singer is reading rather than singing, fix that there first, because a duet of two flat performances is not improved by the second voice.

## Shape 2: call and response

This is the shape that produces mid-sentence swaps, and the rule is simple: **one line, one singer, and the line must be short enough that there is no middle to swap in.** Six syllables or fewer per traded line. The inline name goes in parentheses at the start of the line so it is unmistakable.

```text
Style (add to the duet style above):
Bridge is call and response: Singer A sings a short line,
Singer B answers with a short line, back and forth, four times,
never both at once until the final line.

Lyrics:
[Bridge - call and response]
(Singer A) Say you'll stay
(Singer B) I can't stay
(Singer A) Say you'll try
(Singer B) I did try
(Singer A) One more night
(Singer B) One more lie
(Singer A and Singer B) Then we'll say goodbye
```

Users who reported success with traded lines kept them this short. The moment a traded line runs to eight or ten syllables, the model has room to hand it over halfway, and the reports say it will. If you need a longer exchange, make it two short lines for the same singer rather than one long one.

The step most people skip

## Whichever shape you choose, the export still has to clear screening

Sounding good and passing screening are two different finish lines. Distributors run their own checks at upload, and a track that gets flagged does not simply come back with a warning — it does not go live, which means it never earns anything at all. That check happens once, at the moment you submit, and it happens before a single listener hears the track.

[Undetectr](https://undetectr.com/) removes the generator metadata and processes the signal-level markers distributor screening reads, then masters the file to your platform’s loudness target. It is built and tested against **DistroKid**, which is the distributor we recommend for AI-generated music: you keep 100% of your streaming royalties with no cut taken on your DSP earnings.

![Undetectr — exactly what it does](https://i.ytimg.com/vi/5mXhINqS35A/maxresdefault.jpg)

Worth doing the sums before you decide it is not worth it. Put your own catalogue size into the [AI Music Earnings Calculator](https://undetectr.com/ai-music-earnings-calculator) and see what those tracks are worth over a year once they are actually released — then compare that to a one-time €39.

[Calculate what your catalogue could earn →](https://undetectr.com/ai-music-earnings-calculator)[See pricing](https://undetectr.com/pricing)

## Shape 3: harmonized chorus

Harmony is where the good V6 duet reports come from, and they share a pattern: both singers on the *same* words, with the relationship between the voices described in the style field rather than left to the lyric.

```text
Style:
Chorus: both singers together on the same words, in harmony.
Singer A carries the melody. Singer B sings a third above,
softer, blended, never louder than Singer A.
Final chorus: Singer B drops to unison for the last line.

Lyrics:
[Chorus - Singer A and Singer B in harmony]
Sta-a-ay, just one more ni-i-ight
Don't drive awa-a-ay from the porch light
```

Three things to avoid, from the threads where harmony failed. Do not give the two singers different words at the same time; V6 tends to pick one and drop the other or blur both. Do not describe the interval in theory terms the model may not honour (“parallel sixths”); “a third above, softer” is enough and it is what users report working. And do not ask for harmony on every section, because the contrast between a solo verse and a harmonized chorus is most of the effect. For more of the mix words featured V6 songs use, such as vocal placement and stereo width, see our [Suno V6 mastering prompts](./10-v6-mastering-prompts.md).

## The singer-and-line sheet

Fill this in before you generate. If any row says “both” and the words are different for each singer, you have found the section that will fail.

![Who sings what: a table assigning Verse 1 to A, Verse 2 to B, Chorus to both, Bridge to A then B](https://undetectr.com/blog/suno-v6-duet-prompts/who-sings-what.webp)
*The whole duet on one card. Every section has exactly one answer, and the style field and the tags both say it.*

- **Section:** every section of the song, including intro and outro. An untagged outro is where the wrong singer appears.
- **Singer:** A, B, both-in-harmony, or A-then-B for call and response. Nothing else.
- **Words:** for “both” sections, confirm the words are shared.
- **Line length:** for A-then-B sections, confirm every traded line is six syllables or under.

Then transfer it: the general rules into the style field, the per-section answers into the bracket tags, and the per-line answers into parentheses. That is the whole method.

## Fresh generation vs Cover

If you already have a solo version of the song you like, you have a shortcut. Several launch-week users report that **V6 covers stay much closer to the original** than v5.5 covers did, holding melody and vocal character. One wrote that covers of their older tracks “retain way more character and vocals,” another that V6 is “far better at following my melody, style, cadence, inflection.”

That matters for duets because the hard part, a melody that works, is already done. Cover the solo with the duet style field above and V6 adds the second singer around it. Reports of successful duet conversion in Simple mode and a tagged Cover workflow came from exactly this route.

Cover has a limit, though. It tends to give both singers the *same* tune, which is fine for alternating verses and harmony and wrong for a bridge where the two parts need their own melodies. For that, generate fresh with the full template, and if you want the melody nailed down, hum it into a voice memo and upload it; our guide to [starting a V6 song from your own hook](./07-v6-voice-memo-to-song.md) covers the mechanics.

![Real comments from r/SunoAI launch-week threads reporting duet successes and failures on Suno V6, captured 11 September 2026](https://undetectr.com/blog/suno-v6-duet-prompts/card-duets.webp)
*Two launch-week threads: a 100-run test where a country duet came out flat and rushed, and a three-part harmony that landed after six to ten generations. Both posters describe their prompts in detail, and the second one also fed the model audio.*

## What still fails

- **Long traded lines.** If you must have them, expect swaps and plan to regenerate the bridge on its own.
- **Counter-melodies.** Two different lyrics at the same moment is beyond what anyone reported working. Write it as a call and response instead.
- **Consistency past three minutes.** The launch-day controlled tests found section separation weak and late-song quality dropping. Duets amplify that because there are two voices to lose. Keep it short, or generate the back half with Extend, and turn Max Mode on for the version you keep; Suno says that is what it is for.
- **Two saved voices at once.** One saved voice for the lead and a described second singer is the reliable configuration today. Users say saved voices apply much more consistently on V6 than before, which helps; see the [voice cloning tutorial](https://undetectr.com/blog/suno-5-5-voice-cloning-tutorial) for how to save one.
- **Sliders will not fix assignment.** Style Influence and Weirdness change how closely V6 follows the style field and how safe the result is. They do not tell it who sings the second verse. If you are tempted to solve a duet with a slider, read [what each control actually does](./01-v6-changing-your-prompt-sliders.md) first.

Do not spend a download twice

Get the duet right, download once, process that file

Downloads are capped by plan since 3 September. Use the sheet above to get a keeper in a few generations, then run the export you paid for through Undetectr instead of regenerating until a distributor accepts it.

[See Lifetime — €39 →](https://undetectr.com/pricing)

Once the two voices are where you want them, the file is an ordinary V6 export with two generated vocals in it. It carries the generator metadata and the signal-level markers that distributor screening looks for, and [Undetectr](https://undetectr.com/features) processes the whole mix in one pass before you upload. A duet that took this much care is also a good candidate for selling direct rather than living on streaming pennies; [played.fm](https://played.fm/sell-your-music) lets you sell to fans and pitch for sync from one page. The general prompt formula this builds on is in the [Suno prompts guide](./29-technique-general-prompts-guide.md), and the Custom Mode fields themselves are explained in the [Custom Mode guide](./26-technique-custom-mode-guide.md).

## Frequently Asked Questions

### Why do the singers swap mid-sentence in Suno V6 duets?

Because the model has no way to know which line belongs to whom unless you tell it at the line level. A style field that says "male and female duet" gives it two voices and no map. It fills the map itself, and it fills it differently on every generation. Name the singers in the style field, then put the singer's name in a bracket tag on every section, and on individual lines where they trade.

### What tags does V6 use for duets?

There is no documented duet syntax. Suno's help articles describe bracket tags as structure hints, not a specification. What users report working is consistent naming: define "Singer A" and "Singer B" once in the style field, then use [Singer A] and [Singer B] as section tags and (Singer B) inline for a single answering line. Treat every tag as a suggestion to test, because the same tag can behave differently across two generations.

### Can V6 actually harmonize two voices at the same time?

Sometimes, and more reliably than v5.5 according to several launch-week reports, including one user who says their singers "finally harmonized without swapping mid-sentence." Others say the duet test still fails. The harmony that works best is a chorus where both singers carry the same words and the style field says the second voice sits a third above. Counter-melodies with different words at the same time are still unreliable.

### Is it better to generate a duet from scratch or use Cover?

If you have a solo version you like, Cover it with a duet style field. Users report V6 covers hold the original melody and vocal more closely than v5.5 did, which means the second singer gets added around a melody that already works. From scratch is better when the two parts need different melodies, because Cover tends to give both singers the same tune.

### Does Max Mode help with duets?

Suno says Max Mode is for keeping vocals and style consistent through a whole track, and that is exactly the failure a duet suffers from. It costs more credits. Turn it on for the generation you intend to keep, not for the exploratory ones.

### Can I use two saved voices in one V6 song?

Users who saved voices from earlier models and re-used them on V6 report better consistency, and one says the Voice feature is now much better at applying a saved voice across a whole track. Whether two saved voices can be assigned to two named singers in one generation depends on the interface at the time you read this; the reliable route today is one saved voice for the lead and a described voice for the second singer.

### Does a duet make a track harder to distribute?

No. Distributor screening looks at signal-level markers in the file, not at how many singers there are. What does change is that a duet with two generated voices has two sets of vocal artifacts in the mix, which Undetectr processes the same way as one. Get the parts right, export once, process the export, then upload.

⚡ Lifetime — One-Time €39

### Tested With Suno V6. Ready for Every Distributor.

One payment, unlimited processing. Undetectr removes the generator metadata and the signal-level artifacts that intake screening looks for, then masters to each platform's loudness target for free. Bulk Suno Downloader, Sound Match and the 100+ prompt vault included.

[Get Lifetime Access →](https://undetectr.com/buy/lifetime)One-time payment · No subscription · Includes Suno Bulk Download