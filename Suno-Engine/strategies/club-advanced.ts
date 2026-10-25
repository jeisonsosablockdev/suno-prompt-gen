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
  subgenre?: string;
  bpm?: number;
  musicalKey?: string;
  vocalStyle?: string;
  vocalHook?: string;
  sunoVersion?: string;
  structure?: 'extended' | 'eight_bars';
  instruments?: string;
  synthLead?: string;
  isInstrumental?: boolean;
  weirdness?: number;
  styleInfluence?: number;
  audioWeight?: number;
  variety?: string;
  take?: number;
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
  paramWeirdness: number;
  paramStyleInfluence: number;
  paramAudioWeight: number;
  paramVariety: string;
  take: number;
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
  const isInstrumental = input.isInstrumental !== undefined ? input.isInstrumental : true;
  const structureMode = input.structure || 'extended';

  const weirdness = input.weirdness !== undefined ? input.weirdness : 15;
  const styleInfluence = input.styleInfluence !== undefined ? input.styleInfluence : 85;
  const audioWeight = input.audioWeight !== undefined ? input.audioWeight : 50;
  const variety = input.variety || 'N';
  const take = input.take || 1;

  const defaultGenerationName = formatSunoGenerationName(input.title, take, weirdness, styleInfluence, audioWeight, variety, version, isInstrumental);

  const namingPreset1 = formatSunoGenerationName(input.title, 1, 0, 100, 50, 'N', version, isInstrumental);
  const namingPreset2 = formatSunoGenerationName(input.title, 1, 15, 85, 50, 'N', version, isInstrumental);
  const namingPreset3 = formatSunoGenerationName(input.title, 2, 25, 85, 70, 'H', version, isInstrumental);
  const namingPreset4 = formatSunoGenerationName(input.title, 3, 10, 90, 80, 'N', version, isInstrumental);

  if (structureMode === 'eight_bars') {
    const leadSynthDesc = input.synthLead || 'Monotonic FM Pluck Lead with negative space';
    const instrumentsDesc = input.instruments || 'Roland TR-909 Kick, TR-707 Rimshot, TR-727 Congas, Rolling 808 Sub, Sampled Korg M1 Piano Chops, Monotonic FM Pluck Lead, Analog Stabs';

    const styleMasterTags = `[Style: ${subgenre}][Mood: Underground Club, Hypnotic Nightlife, Driving Groove][Energy: High, Building][Beat: 4-on-the-floor, Stripped Drums][Vocal: ${vocalTag}][Instrument: ${instrumentsDesc}][FX: Low-Pass Filter Sweeps, Hard Gating, White Noise Risers, Analog Saturation]`;

    const elementsSummary = `${subgenre}, ${bpm} BPM, 4/4, key of ${key}. ${vocalTag}. ${instrumentsDesc}. Production: minimal dry studio mix, vocal centered, punchy low-end locked between 808 sub and click kick, wide stereo percussions, zero long reverb, warm analog tape saturation.`;

    const stylePrompt = `${styleMasterTags}\n\n${elementsSummary}`;

    const excludeStyles = `EDM, Big Room, Commercial Pop, Acoustic Guitar, Banjo, Brass Section, Orchestral Strings, Country, Slap House, Distorted Metal, Rock Drums, Operatic Vocals, Melodic Singing, Autotune, Trance Leads`;

    const lyricsWithMetatags = `[Intro A]
[Style: ${subgenre}][Mood: Underground Club][Energy: Building]
[8 bars of stripped 707 rimshot and congas groove, zero vocals]

[Intro B]
[Mood: Rising Tension][Energy: Building][Beat: 4-on-the-floor]
[8 bars of punchy 909 kick entering with filter sweep, strictly instrumental]

[Drop 0A]
[Mood: Early Groove][Energy: High][Beat: 4-on-the-floor]
[Instrument: 909 Kick, 808 Sub, Monotonic FM Pluck]
[8 bars of groove drop with kick and monotonic lead, instrumental]

[Drop 0B]
[Mood: Groove Transition][Energy: High, Filtering]
[Instrument: 909 Drums, Congas, Sampled M1 Piano][FX: Low-Pass Sweep]
[8 bars of groove introducing hard house M1 piano, filtering to break]

[Break 1A]
[Mood: Hypnotic Suspense][Energy: Suspended][Beat: Kick Drops Out]
[Instrument: 808 Sub, Minimal Pads][Vocal: Spoken Chops][FX: Space Delay]
[8 bars of kick drop with 808 sub and spoken vocal loop]
(spoken) To stop, to stop
(spoken) To stop, to stop
(spoken) To stop, to stop

[Break 1B]
[Mood: Rising Tension][Energy: Accelerating]
[Instrument: 808 Sub, Snare Roll, White Noise Riser][Vocal: Spoken Chops]
[8 bars completing tension build before drop impact]
(spoken) Dont stop, dont stop
(spoken) Dont stop, dont stop

[Drop 1A]
[Mood: High Energy Tech House][Energy: Peak Groove][Beat: 4-on-the-floor]
[Instrument: 909 Kick, 808 Sub, Sampled M1 Piano, Monotonic Pluck][FX: Hard Gating]
[8 bars of heavy groove with hard house M1 piano and monotonic lead]
(spoken) Dont stop

[Drop 1B]
[Mood: Driving Euphoria][Energy: High Driving][Beat: 4-on-the-floor]
[Instrument: 909 Kick, 808 Sub, 909 Open Hats, Rides, Sampled M1 Piano]
[8 bars variation adding open hi-hats, rides and M1 piano chords]
(spoken) Dont stop

[Drop 1C]
[Mood: Maximum Drive][Energy: Overdrive][Beat: 4-on-the-floor]
[Instrument: Full 909 Drums, Sizzle Rides, Congas, Sampled M1 Piano][FX: Analog Drive]
[8 bars of extended peak groove drive with full ride cymbals and piano stabs]
(spoken) Dont stop

[Break 2]
[Mood: Tension Reset and Rebuild][Energy: Lowered then Rising][Beat: Kick Drops Out]
[Instrument: Rolling Sub, Filtered M1 Piano, Congas, Noise Riser][Vocal: Spoken Chops]
[8 bars of reset with kick drop, piano stabs and vocal chop theme]
(spoken) To stop, to stop
(spoken) Dont stop, dont stop

[Drop 2A]
[Mood: Deep Tech Energy][Energy: Peak Groove][Beat: 4-on-the-floor]
[Instrument: 909 Kick, 707 Claps, Sampled M1 Piano, Monotonic Pluck][FX: Hard Gating]
[8 bars of driving groove returning with kick, M1 piano and lead]
(spoken) Dont stop

[Drop 2B]
[Mood: Warehouse Groove][Energy: Maximum Drive][Beat: 4-on-the-floor]
[Instrument: Full 909 Hats, Rides, Congas, Sampled M1 Piano, 808 Sub][FX: Stereo Motion]
[8 bars with full rides, hard house M1 piano chords and congas]
(spoken) Dont stop

[Break 3]
[Mood: Deep Breakdown Climax][Energy: Suspended to Accelerating][Beat: Kick Drops Out]
[Instrument: Dark Drone, Filtered M1 Piano, Snare Roll, White Noise][Vocal: Spoken Chops]
[8 bars of deep breakdown transitioning into climax build]
(spoken) To stop, to stop
(spoken) Dont stop, dont stop

[Drop 3A]
[Mood: Peak Tech House Climax][Energy: Overdrive Groove][Beat: 4-on-the-floor]
[Instrument: Full 909 Drums, 808 Sub, Sampled M1 Piano, Monotonic Lead][FX: Saturation]
[8 bars of peak energy drop with full analog drive and hard house piano]
(spoken) Dont stop

[Drop 3B]
[Mood: Peak Warehouse Climax][Energy: Maximum Drive][Beat: 4-on-the-floor]
[Instrument: Full 909 Drums, Rides, Congas, Sampled M1 Piano][FX: High Sizzle]
[8 bars of peak drive with full rides, M1 piano stabs and groove]
(spoken) Dont stop

[Outro A]
[Mood: Club Transition][Energy: Groove Fade][Beat: 4-on-the-floor]
[Instrument: 909 Kick, Rolling Sub, M1 Piano Fade, Stripped Percussion][FX: Filter Down, DJ Tool]
[8 bars of stripped groove for seamless DJ transition, zero vocals]

[Outro B]
[Mood: Clean Fade][Energy: Minimal Pulse][Beat: Kick Drops Out]
[Instrument: 707 Rimshot, Congas Decay][FX: Hard Stop, Reverb Cut]
[8 bars of decaying drum machine hits with raw rimshot, zero vocals]

[Outro C]
[Mood: Final DJ Tool][Energy: Lowest][Beat: Minimal Hits]
[Instrument: Isolated Rim Click, Analog Tape Hiss][FX: Clean Cut, Silence]
[8 bars of final minimalist percussion decay ending on sharp hit and complete silence]
[End - hard stop on final hit, silence]`;

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
      paramWeirdness: weirdness,
      paramStyleInfluence: styleInfluence,
      paramAudioWeight: audioWeight,
      paramVariety: variety,
      take,
      presets: {
        preset1: namingPreset1,
        preset2: namingPreset2,
        preset3: namingPreset3,
        preset4: namingPreset4,
      },
    };
  }

  const styleMasterTags = `[Style: ${subgenre}][Mood: Dark Party, Nightlife, Groovy][Energy: High, Driving][Beat: 4-on-the-floor][Vocal: ${vocalTag}][Instrument: Roland 909, Juno Bass, Roland SH-1, Analog Pads, Modulated Synths][FX: Filter Sweeps, Saturation, Open Cutoff, Deep Reverb]`;

  const elementsSummary = `${subgenre}, ${bpm} BPM, 4/4, key of ${key}. ${vocalTag}. Roland TR-909 kick, punchy drums, Juno bass, Roland SH-1, analog pads, modulated synths. Production: club underground mix, tight punchy low-end, open cutoff modulation, warm saturation, wide stereo field.`;

  const stylePrompt = `${styleMasterTags}\n\n${elementsSummary}`;

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
    paramWeirdness: weirdness,
    paramStyleInfluence: styleInfluence,
    paramAudioWeight: audioWeight,
    paramVariety: variety,
    take,
    presets: {
      preset1: namingPreset1,
      preset2: namingPreset2,
      preset3: namingPreset3,
      preset4: namingPreset4,
    },
  };
}
