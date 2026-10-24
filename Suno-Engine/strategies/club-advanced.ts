/**
 * Strategy: Club Advanced Generator (Suno v6 Modo Avanzado)
 * Generates high-fidelity underground club tracks with:
 *  - Micro-bracketed section tags [Style][Mood][Energy][Beat][Instrument][FX]
 *  - Explicit bar count directives [X bars of ...]
 *  - Style box combining master tags and structural narration
 *  - Tailored Exclude Styles negative prompts
 *  - Parameter slider matrix (W, S, A, V) and naming with version at the end
 *
 * @spec SPEC-SKILL-01 (suno-prompter)
 */

export interface ClubAdvancedInput {
  title: string;
  subgenre: string;
  bpm: number;
  musicalKey: string;
  vocalStyle?: string;
  vocalHook?: string;
  sunoVersion?: string;
}

export interface ClubAdvancedOutput {
  title: string;
  defaultGenerationName: string;
  stylePrompt: string;
  excludeStyles: string;
  lyricsWithMetatags: string;
  bpm: number;
  musicalKey: string;
  subgenre: string;
  sunoVersion: string;
  presets: {
    preset1: string;
    preset2: string;
    preset3: string;
    preset4: string;
  };
}

export function formatSunoGenerationName(
  title: string,
  take: number,
  weirdness: number,
  styleInfluence: number,
  audioWeight: number,
  variety: string = 'N',
  version: string = 'v6',
  isInstrumental: boolean = true
): string {
  const cleanTitle = title.toLowerCase().replace(/[^a-z0-9\s]/gi, '').trim();
  const typeFlag = isInstrumental ? 'I' : 'V';
  return `${typeFlag} ${cleanTitle} ${take} Max W:${weirdness} S:${styleInfluence} A:${audioWeight} V:${variety} ${version}`;
}

export function generateClubAdvancedTrack(input: ClubAdvancedInput): ClubAdvancedOutput {
  const version = input.sunoVersion || 'v6';
  const bpm = input.bpm || 125;
  const key = input.musicalKey || 'E minor';
  const subgenre = input.subgenre || 'Dark Disco, NY House, Dark House';
  const hook = input.vocalHook || 'I love disco nights';
  const vocalTag = input.vocalStyle || 'Vocoder';

  const defaultGenerationName = formatSunoGenerationName(input.title, 1, 15, 100, 50, 'N', version);

  const namingPreset1 = formatSunoGenerationName(input.title, 1, 0, 100, 50, 'N', version);
  const namingPreset2 = formatSunoGenerationName(input.title, 2, 15, 100, 50, 'N', version);
  const namingPreset3 = formatSunoGenerationName(input.title, 3, 25, 85, 70, 'H', version);
  const namingPreset4 = formatSunoGenerationName(input.title, 4, 10, 90, 80, 'N', version);

  const styleMasterTags = `[Style: ${subgenre}][Mood: Dark Party, Nightlife, Groovy][Energy: High, Driving][Beat: 4-on-the-floor][Vocal: ${vocalTag}][Instrument: Roland 909, Juno Bass, Roland SH-1, Analog Pads, Modulated Synths][FX: Filter Sweeps, Saturation, Open Cutoff, Deep Reverb]`;

  const structureSummary = `${bpm} BPM in ${key}, DJ-friendly underground club track with this exact structure: Intro A 16 bars filtered kick bass and simple synth arp, Intro B 16 bars filtered kick bass simple synth arp plus stripped drums, Break 1A for 4 bars, Break 1B for 4 bars, Drop for 24 bars with long pads dark chords and open cutoff arp, Full Drop for 32 bars with ${hook} and modulated synths, Main Break A for 9 bars with pads and chorus, Main Break B for 9 bars with pads and chorus, Full Drop Bridge A for 16 bars with main synth lead, Full Drop Bridge B for 16 bars with main synth lead, Break A for 8 bars, Break B for 8 bars, Outro for 32 bars as DJ tool, strong ${subgenre.toLowerCase()} groove, bold analog synth presence`;

  const stylePrompt = `${styleMasterTags}\n\n${structureSummary}`;

  const excludeStyles = `EDM, Big room, Pop, Commercial Radio, Acoustic Guitar, Banjo, Accordion, Harp, Brass Section, Orchestral Strings, Country, Slap House, Distorted Metal, Rock Drums, Operatic Vocals`;

  const lyricsWithMetatags = `[Intro A]
[Style: ${subgenre}][Mood: Dark Party, Nightlife][Energy: Building][Beat: 4-on-the-floor][Instrument: 909 Kick, Filtered Bass, Simple Synth Arp][FX: Filtered Low End, Analog Sweep]
[16 bars of filtered kick and filtered bass with simple arpeggio]

[Intro B]
[Style: ${subgenre}][Mood: Dark Party, Nightlife][Energy: Rising][Beat: 4-on-the-floor][Instrument: 909 Kick, Filtered Bass, Simple Synth Arp, Stripped Drums][FX: Filter Opening, Analog Tension]
[16 bars of filtered kick and filtered bass with simple arpeggio and stripped drums entering]

[Break 1A]
[Style: ${subgenre}][Mood: Tension][Energy: Suspended][Instrument: Pads, Arp Texture][FX: Reverb Lift, Delay Tail]
[4 bars of tension builder before the first drop]

[Break 1B]
[Style: ${subgenre}][Mood: Tension][Energy: Rising][Instrument: Pads, Arp Texture, Transitional Percussion][FX: Reverb Lift, Delay Tail, Filter Rise]
[4 bars completing the tension builder before the first drop]

[Drop]
[Style: ${subgenre}][Mood: Nightlife, Dark Euphoria][Energy: High Groove][Instrument: Long Pads, Dark Chords, SH-1 Arp][FX: Open Cutoff, Analog Drive]
[24 bars with long pad chords and arpeggio opening the cutoff]

[Full Drop]
[Style: ${subgenre}][Mood: Party, Dark Euphoria][Energy: Peak Groove][Instrument: 909 Drums, Modulated Synths, Juno Bass, SH-1 Arp][Vocal: ${vocalTag}][FX: Modulated Synth Motion, Saturation]
${hook}  
${hook}  
${hook}  
${hook}  

[Break Main A]
[Style: ${subgenre}][Mood: Emotional Nightlife][Energy: Lifted][Instrument: Pads, Chorus Layers][Vocal: ${vocalTag}][FX: Deep Reverb, Space Delay]
[9 bars with pads and chorus]
Tonight we gonna flight  

[Break Main B]
[Style: ${subgenre}][Mood: Emotional Nightlife][Energy: Rising Again][Instrument: Pads, Chorus Layers, Arp Texture][Vocal: ${vocalTag}][FX: Deep Reverb, Space Delay, Filter Lift]
[9 bars with pads and chorus]
we're going to the moon  
the stars are looking you  

[Full Drop Bridge A]
[Style: ${subgenre}][Mood: Dark Party][Energy: High, Driving][Instrument: Main Synth Lead, 909 Drums, Juno Bass][FX: Analog Saturation, Open Filter]
[16 bars with main synth]
${hook}  

[Full Drop Bridge B]
[Style: ${subgenre}][Mood: Dark Party][Energy: Peak, Driving][Instrument: Main Synth Lead, 909 Drums, Juno Bass, Extra Synth Motion][FX: Analog Saturation, Open Filter, Wider Motion]
[16 bars with main synth]
${hook}  

[Break A]
[Style: ${subgenre}][Mood: Reset][Energy: Lowered][Instrument: Pads, Atmosphere][FX: Delay Space, Filter Down]
[8 bars for reset and transition]

[Break B]
[Style: ${subgenre}][Mood: Reset, Anticipation][Energy: Rebuilding][Instrument: Pads, Atmosphere, Percussive Texture][FX: Delay Space, Filter Down, Tension Rise]
[8 bars for reset and transition]

[Outro]
[Style: ${subgenre}][Mood: Night Groove][Energy: Groove Fade][Beat: 4-on-the-floor][Instrument: 909 Percussion, Filtered Bass Fragments][FX: Filter Down, DJ Tool Loop]
[32 bars outro for DJ mixing ending with percussion-driven groove]`;

  return {
    title: input.title,
    defaultGenerationName,
    stylePrompt,
    excludeStyles,
    lyricsWithMetatags,
    bpm,
    musicalKey: key,
    subgenre,
    sunoVersion: version,
    presets: {
      preset1: namingPreset1,
      preset2: namingPreset2,
      preset3: namingPreset3,
      preset4: namingPreset4,
    },
  };
}
