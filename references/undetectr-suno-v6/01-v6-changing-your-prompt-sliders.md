---
title: "Suno V6 Keeps Changing Your Prompt? Variety Explained"
description: "Suno's own FAQ answers it: Variety rewrites your style prompt and 0 keeps your tags. Each control explained, plus a one-change-at-a-time worksheet."
date: "2026-09-11"
category: "V6 Core Guides"
source: "https://undetectr.com/blog/suno-v6-changing-your-prompt"
---

# Suno V6 Keeps Changing Your Prompt? Variety Explained

September 11, 20269 min read

![Why Suno V6 changes your prompt: three glowing slider knobs, Variety, Style Influence and Weirdness](https://undetectr.com/blog/suno-v6-changing-your-prompt/featured.webp)

Part of our [**Suno V6 prompts guide**](./00-suno-v6-prompts-guide.md), which maps every V6 prompting problem to the guide that fixes it.

On launch day a post went up on r/SunoAI titled *“Suno V6 keeps overriding my Style prompts?”* The poster had re-used a style prompt they liked, noticed the song came out different, and then saw that the prompt itself had been rewritten before generation. They had checked that Personalize was off. They could not get the same style twice.

This is the one **Suno V6** complaint with a clean, documented answer, and almost nobody in the thread gave it. Suno’s own V6 FAQ says the Variety slider works by “adjusting and updating your style prompts,” and that setting it to 0 lets you “retain full control of your style tags.” That is the whole mystery. It is also only one of four controls that people are mixing up, so this guide takes each one on its own, quotes what Suno actually documents, and gives you a worksheet that changes one control per generation so you stop guessing.

What you will not find here is a “best settings” preset. Those are circulating already, and a preset for a two-day-old model is a guess dressed as advice.

TL;DR

- **Variety rewrites your style prompt.** That is its documented job. Set it to 0 and your tags stay exactly as typed.
- **Style Influence is obedience, Loose to Strong.** It controls how closely the model follows the prompt, whatever the prompt says.
- **Weirdness is Safe to Chaos, 50 is neutral.** It changes how adventurous the output is, not what the prompt means.
- **Max Mode is not a slider.** It is a more expensive generation for long songs, faithful covers and consistent vocals.
- **Typing a percentage into the prompt does nothing.** The controls are under Advanced Options. Words in the style field are just words.

Tested with Suno V6

Prompt obeyed? Download once and protect the file.

However the sliders were set, the export carries Suno's generator metadata and the signal-level artifacts distributor screening looks for. Undetectr strips both before you upload. Unlimited on Lifetime.

[Process a V6 track →](https://undetectr.com/upload)

## Variety: the control that rewrites your prompt

Here is the passage from Suno’s V6 FAQ, verbatim, because it answers the launch-day thread on its own.

![Suno's V6 FAQ: the Variety slider is designed to introduce variety in your outputs by adjusting and updating your style prompts; reduce it to 0 to retain full control of your style tags](https://undetectr.com/blog/suno-v6-changing-your-prompt/suno-faq-variety.webp)
*Suno’s own words. Variety edits the prompt; zero keeps your tags.*

So the behaviour people are reporting is exactly the behaviour Suno describes. A short style prompt goes in, Variety expands or rephrases it to introduce variation, and the song comes out different from last time even though you typed the same thing. If you want the same thing, Variety has to be 0. Nothing else in the interface restores your tags, and Personalize is unrelated.

![Variety at zero: your tags stay; Variety high: tags get rewritten](https://undetectr.com/blog/suno-v6-changing-your-prompt/variety-zero.webp)

Two consequences worth spelling out. First, every V6 prompt guide that tells you to write long, precise, instrument-by-section style fields, including [ours](./04-v6-rock-prompts.md), assumes Variety is at 0. With Variety up, the model may rewrite the very sentence you spent ten minutes on. Second, Variety is not a bad control. If you have a prompt that is boring, Variety at a middle value is a cheap way to get three different takes on it. It is a tool for exploring, and it should be off when you are trying to reproduce.

![Suno V6 Settings: Preserve the Exact Prompt and Version Trail Before Export](https://i.ytimg.com/vi/n6tf2DsQnUM/maxresdefault.jpg)

UndetectrKeep a record of the exact prompt and settings behind every V6 version you might release.

## Style Influence: how closely it listens

Style Influence predates V6 and is documented in Suno’s Creative Sliders article: it “lets you choose how close you stay to your style input from Loose to Strong.” That is a different job from Variety. Variety changes the instruction. Style Influence changes how hard the model tries to follow the instruction it ends up with.

![Suno's Creative Sliders help article showing the Weirdness, Style Influence and Audio Influence sliders under Advanced Options, with the Exclude styles field above them](https://undetectr.com/blog/suno-v6-changing-your-prompt/suno-creative-sliders.webp)
*The Advanced Options panel from Suno’s help centre. Note the Exclude styles field above the sliders, and that Audio Influence only appears when audio is attached.*

This is where a popular launch-week thread went wrong. It advised lowering Style Influence to get better adherence, which is backwards by Suno’s own definition: lower is Loose. The advice probably came from someone whose prompt had been rewritten by Variety and who then found that loosening obedience to the rewritten prompt produced something closer to what they originally meant. That is a real observation and a wrong conclusion. Fix the rewrite at the source with Variety 0, then use Style Influence for what it is for.

The setting several users converged on for V6 when they wanted to be obeyed was Style Influence high, in the 75 to 85 range, and one user noted that v5.5 “drifted a lot from the style prompt” even at those values while V6 now “wants to be directed exactly.” Read that as: V6 obeys more at the same setting, so you may not need it as high as you used to.

## Weirdness: Safe to Chaos

Same help article: Weirdness “goes from Safe to Chaos, where 50% is the normal expected result.” It is the creativity dial for the output, independent of the other two. Low Weirdness gives you the most conventional realisation of the prompt; high gives you a stranger one.

The launch-week pairing that came up most often for “do what I said” was Weirdness low with Style Influence high, roughly 20 and 80. One user who found v6 vocals muffled and lifeless said moving to v6-wild at that pairing was the first thing that improved them. The reverse pairing, Weirdness high and Style Influence loose, is where users who miss the old models’ surprises are finding some of them, especially on v6-wild.

![Three controls, three jobs: Variety rewrites tags, Style Influence runs loose to strong, Weirdness runs safe to chaos](https://undetectr.com/blog/suno-v6-changing-your-prompt/three-controls.webp)
*Keep these apart in your head and most of the confusion goes away.*

The step most people skip

## The sliders shape the song. They do not touch what is in the file.

Sounding good and passing screening are two different finish lines. Distributors run their own checks at upload, and a track that gets flagged does not simply come back with a warning — it does not go live, which means it never earns anything at all. That check happens once, at the moment you submit, and it happens before a single listener hears the track.

[Undetectr](https://undetectr.com/) removes the generator metadata and processes the signal-level markers distributor screening reads, then masters the file to your platform’s loudness target. It is built and tested against **DistroKid**, which is the distributor we recommend for AI-generated music: you keep 100% of your streaming royalties with no cut taken on your DSP earnings.

![Undetectr — exactly what it does](https://i.ytimg.com/vi/5mXhINqS35A/maxresdefault.jpg)

Worth doing the sums before you decide it is not worth it. Put your own catalogue size into the [AI Music Earnings Calculator](https://undetectr.com/ai-music-earnings-calculator) and see what those tracks are worth over a year once they are actually released — then compare that to a one-time €39.

[Calculate what your catalogue could earn →](https://undetectr.com/ai-music-earnings-calculator)[See pricing](https://undetectr.com/pricing)

## Max Mode and the two models

Two more things get lumped in with the sliders and are not sliders.

**Max Mode** is a switch. Suno’s FAQ: it is “an option you can turn on for any generation when you want v6 to spend more on getting it right,” costs more credits, and is best for “songs longer than two minutes, covers where you want the result to stay close to the original, transferring the style of one song onto another, and keeping vocals and style consistent through the whole track.” For quick ideas, standard mode. It belongs in a separate comparison from the sliders because it changes how much work the model does, not what it is told or how strictly it listens. It is the right thing to turn on for the generation you intend to keep, and the wrong thing to leave on while exploring.

**v6 versus v6-wild** is a model choice, not a setting. Suno describes v6 as reliable and precise and v6-wild as “less predictable and more varied, producing unexpected, textured and ambitious results.” Several users report the old models’ character living in v6-wild. If you want the prompt obeyed, v6 with Variety 0. If you want to be surprised, v6-wild with Weirdness up. Mixing the two goals in one generation is how you end up with neither.

## Three things that do nothing

- **Slider numbers in the prompt.** “Weirdness 20%, style influence 80%” typed into the style field is text. It does not move the sliders and it may confuse the model into treating the words as style. Several circulating templates include this; delete it and set the sliders under Advanced Options.
- **Magic presets.** Any post promising the one correct setting for V6 is guessing. The documented anchors are Variety 0 for control, Weirdness 50 for neutral, and Style Influence Loose to Strong. Everything past that depends on your prompt and your goal.
- **Turning Personalize off to stop rewrites.** The launch-day poster had already done this and the prompt was still rewritten, because Personalize is not the control doing it. Variety is.

![Real comments from r/SunoAI launch-week threads about V6 rewriting style prompts and slider settings, captured 11 September 2026](https://undetectr.com/blog/suno-v6-changing-your-prompt/card-controls.webp)
*A launch-week thread where users worked out between themselves that Variety was rewriting the style prompt. One of them had not noticed until it was pointed out.*

## The one-change-at-a-time worksheet

The reason slider advice is so contradictory is that people change three things at once and credit whichever one they remember. Do this instead. Fix a style prompt, a lyric and a model, and run five generations changing exactly one control each time. Record what the style prompt looked like after submission on every run, because that is the rewrite you are trying to catch.

![One change at a time: five runs, base, Variety zero, Style Influence strong, Weirdness middle, Max Mode on](https://undetectr.com/blog/suno-v6-changing-your-prompt/one-change-at-a-time.webp)

```text
Fixed for all five runs: same style prompt, same lyrics, model v6.

Run 1 Base Variety default, Style Influence 50, Weirdness 50.
 Copy the style prompt as it appears after submit.
Run 2 Variety 0 Everything else as run 1. Was the prompt rewritten
 in run 1 and not in run 2? That is your answer.
Run 3 Style 80 Variety 0, Weirdness 50. Does it follow the map
 more closely than run 2?
Run 4 Weird 30 Variety 0, Style 80. Safer or duller?
Run 5 Max Mode Same as run 4 with Max Mode on. Worth the credits?

Then, optionally, run 3 again on v6-wild.
```

Five credits, one afternoon, and you know how the controls behave on your prompt rather than someone else’s. If you then want the Exclude field in the picture, it is the one text control in the same panel: Suno describes it as where you enter “any information (instruments, etc) that you do not want in your track,” and we cover its uses in the [intro and ending guide](./06-v6-intro-outro-prompts.md) and the [solo instrument guide](./05-v6-solo-instrument-prompts.md).

Do not spend a download twice

Five credits to understand the controls, one download to keep

Downloads are capped by plan since 3 September. Run the worksheet, land the generation you want, download it once, and process that export rather than regenerating until a distributor accepts it. Unlimited processing on Lifetime.

[See Lifetime — €39 →](https://undetectr.com/pricing)

## After the prompt is obeyed

None of the controls above change what is inside the exported file. A V6 export at Variety 0 and Style Influence 80 carries the same generator metadata and the same signal-level markers as one generated at chaos settings, and distributor intake reads the file, not the sliders. Run the download through [Undetectr](https://undetectr.com/features) before it goes anywhere, and if the song is one you fought the controls to get, consider selling it directly on [played.fm](https://played.fm/sell-your-music) rather than leaving it to streaming rates.

For the fields themselves, the [Custom Mode guide](./26-technique-custom-mode-guide.md) walks through style, lyrics and structure tags; the [Suno prompts guide](./29-technique-general-prompts-guide.md) is the hub for genre starters; and our [launch-day reactions piece](./09-v6-reactions-models-comparison.md) has the context for why the old models are gone and what v6-wild is for.

## Frequently Asked Questions

### Why does Suno V6 change my style prompt after I submit it?

The Variety slider. Suno's V6 FAQ says it "is designed to introduce variety in your outputs by adjusting and updating your style prompts," and that if you want to retain full control of your style tags you should reduce Variety to 0. If you are seeing a sparse style prompt come back expanded into a paragraph, that is Variety doing its documented job, not a bug and not the Personalize setting.

### What is the difference between Variety and Style Influence?

Variety rewrites the text of your style prompt before generation. Style Influence controls how closely the model sticks to whatever the style prompt says, from Loose to Strong, per Suno's Creative Sliders article. One changes the instruction, the other changes obedience to it. Turning Style Influence up does not stop Variety from rewriting the prompt; only Variety at 0 does that.

### What does the Weirdness slider do?

Suno's help centre says Weirdness "goes from Safe to Chaos, where 50% is the normal expected result." It is a creativity dial for the output, independent of how closely the style prompt is followed. A common V6 starting point users report is Weirdness low and Style Influence high when they want the model to do what it is told, and the reverse when they want surprises.

### Can I set a slider by typing a percentage into the prompt?

No. Text like "weirdness 20%" in the style field is just words to the model; it does not move the control. The sliders live under Advanced Options in Custom Mode. Several viral prompt templates include slider numbers in the text, which is harmless but does nothing.

### Is there a best slider setting for V6?

No, and be suspicious of anyone selling one. The documented facts are Variety 0 keeps your tags, Weirdness 50 is neutral, and Style Influence runs Loose to Strong. Beyond that, the right setting depends on whether you want obedience or surprise. The worksheet in this guide changes one control per generation so you find your own answer in five credits rather than fifty.

### What is Max Mode and should I leave it on?

Suno's FAQ describes Max Mode as an option that makes V6 spend more compute on getting it right, at a higher credit cost, best for songs over two minutes, covers that must stay close to the original, style transfers, and keeping vocals and style consistent through the whole track. It is not a slider and it is not a fix for a rewritten prompt. Use it on the generation you intend to keep.

### Does any of this affect whether the track passes distributor screening?

No. Sliders shape the composition and the performance. Distributor screening reads signal-level markers in the exported file, and every V6 export carries the same generator metadata regardless of how the sliders were set. Get the prompt obeyed, download once, then process the file before upload.

⚡ Lifetime — One-Time €39

### Tested With Suno V6. Ready for Every Distributor.

One payment, unlimited processing. Undetectr removes the generator metadata and the signal-level artifacts that intake screening looks for, then masters to each platform's loudness target for free. Bulk Suno Downloader, Sound Match and the 100+ prompt vault included.

[Get Lifetime Access →](https://undetectr.com/buy/lifetime)One-time payment · No subscription · Includes Suno Bulk Download