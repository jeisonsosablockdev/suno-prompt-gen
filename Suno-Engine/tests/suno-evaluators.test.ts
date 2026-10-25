import test from 'node:test';
import assert from 'node:assert/strict';
import { scanAndRemediateArtists, scanUnresolvedVariables } from '../evaluators/lexical-filter.ts';
import { evaluateSunoTrack, evaluateClubPrompter, estimateSyllables } from '../evaluators/suno-rubric.ts';
import { formatSunoGenerationName, generateClubAdvancedTrack } from '../strategies/club-advanced.ts';
import { extractArchivedVersions } from '../core/vault-gateway.ts';

test('LexicalFilter: detecta y remedia nombres de artistas baneados', () => {
  const dirty = 'Quiero una cancion estilo Daft Punk con toques de The Weeknd';
  const res = scanAndRemediateArtists(dirty);

  assert.equal(res.hasBannedArtists, true);
  assert.deepEqual(res.detectedArtists.sort(), ['Daft Punk', 'The Weeknd'].sort());
  assert.ok(!res.remediatedText.includes('Daft Punk'));
  assert.ok(res.remediatedText.includes('french house'));
  assert.ok(res.remediatedText.includes('dark synthpop'));
});

test('LexicalFilter: detecta variables de plantilla {{...}} sin resolver', () => {
  const dirty = 'Track: {{track.title}} - {{missing_param}}';
  const res = scanUnresolvedVariables(dirty);

  assert.equal(res.hasUnresolved, true);
  assert.deepEqual(res.unresolvedVariables.sort(), ['track.title', 'missing_param'].sort());

  const clean = 'Track: Neon Nights (120 BPM)';
  const resClean = scanUnresolvedVariables(clean);
  assert.equal(resClean.hasUnresolved, false);
});

test('SunoRubric: cálculo de sílabas aproximado', () => {
  assert.equal(estimateSyllables('hola mundo'), 4);
  assert.equal(estimateSyllables('sintetizador analógico'), 10);
});

test('SunoRubric: evalúa positivamente un track bien estructurado', () => {
  const cleanTrack = {
    stylePrompt: 'synthwave, 80s analog synthesizer, gated reverb snare, driving bassline, melancholic retro vibe, 118 bpm, D minor',
    lyricsWithMetatags: `[Verse 1]
Luces de neón en la ciudad
Sombras que no van a regresar
El reloj detiene la verdad
Solo queda el eco al caminar

[Pre-Chorus]
Sube la corriente sin dudar
Ya se siente el pulso al respirar

[Chorus]
Frecuencias de medianoche
Bailando bajo el control
Frecuencias de medianoche
Buscando un nuevo sol

[Outro]
(Fade out with synths)
[End]`,
  };

  const report = evaluateSunoTrack(cleanTrack);
  assert.equal(report.passed, true);
  assert.ok(report.totalScore >= 8.5, `Score esperado >= 8.5 pero fue ${report.totalScore}`);
  assert.equal(report.metrics.bannedArtistsCount, 0);
  assert.equal(report.metrics.hasChorus, true);
});

test('SunoRubric: penaliza un track defectuoso (demasiados caracteres y artista prohibido)', () => {
  const badTrack = {
    stylePrompt: 'daft punk style ' + 'a'.repeat(210), // Excede 200 caracteres y contiene Daft Punk
    lyricsWithMetatags: 'Letra sin metatags de corchetes y con muletilla: en resumen es importante destacar.',
  };

  const report = evaluateSunoTrack(badTrack);
  assert.equal(report.passed, false);
  assert.ok(report.totalScore < 8.0, `Score esperado < 8.0 pero fue ${report.totalScore}`);
  assert.ok(report.remediationDirectives.length > 0);
});

test('ClubAdvanced: genera y formatea nombres con versión al final según convención', () => {
  const name1 = formatSunoGenerationName('disco nights', 7, 15, 100, 50, 'N', 'v6', true);
  assert.equal(name1, 'I disco nights 7 Max W:15 S:100 A:50 V:N v6');

  const name2 = formatSunoGenerationName('disco nights', 6, 0, 67, 70, 'N', 'v6', true);
  assert.equal(name2, 'I disco nights 6 Max W:0 S:67 A:70 V:N v6');

  const nameVocal = formatSunoGenerationName('neon anthem', 1, 10, 90, 80, 'H', 'v6', false);
  assert.equal(nameVocal, 'V neon anthem 1 Max W:10 S:90 A:80 V:H v6');
});

test('evaluateClubPrompter: aprueba con nota >= 9.5 un track de club avanzado completo', () => {
  const track = generateClubAdvancedTrack({
    title: 'Disco Nights',
    subgenre: 'Dark Disco, NY House, Dark House',
    bpm: 125,
    musicalKey: 'E minor',
    vocalStyle: 'Vocoder',
    vocalHook: 'I love disco nights',
    sunoVersion: 'v6',
  });

  const audit = evaluateClubPrompter({
    generationName: track.defaultGenerationName,
    stylePrompt: track.stylePrompt,
    excludeStyles: track.excludeStyles,
    lyricsWithMetatags: track.lyricsWithMetatags,
  });

  assert.equal(audit.passed, true);
  assert.ok(audit.totalScore >= 9.5, `Score esperado >= 9.5 pero fue ${audit.totalScore}`);
  assert.equal(audit.gates.gate1_naming.passed, true);
  assert.equal(audit.gates.gate2_microTags.passed, true);
  assert.equal(audit.gates.gate3_barCounts.passed, true);
  assert.equal(audit.gates.gate4_styleBox.passed, true);
  assert.equal(audit.gates.gate5_excludeStyles.passed, true);
  assert.equal(audit.gates.gate6_dropIsolation.passed, true);
  assert.equal(audit.gates.gate7_lyricsLength.passed, true);
});

test('evaluateClubPrompter: aprueba con 10/10 un track con estructura eight_bars y metatags de club', () => {
  const track = generateClubAdvancedTrack({
    title: 'Dont Stop',
    subgenre: 'NY House, Tech House, Indie Dance, Nu Moda',
    bpm: 130,
    musicalKey: 'A minor',
    vocalStyle: 'Cool Detached Spoken Male Voice, Dry Spoken Chops, No Singing',
    vocalHook: 'Dont stop',
    structure: 'eight_bars',
    synthLead: 'Short Monotonic FM Pluck Lead with negative space',
    isInstrumental: false,
  });

  const audit = evaluateClubPrompter({
    generationName: track.defaultGenerationName,
    stylePrompt: track.stylePrompt,
    excludeStyles: track.excludeStyles,
    lyricsWithMetatags: track.lyricsWithMetatags,
  });

  assert.equal(audit.passed, true);
  assert.equal(audit.totalScore, 10);
  assert.equal(audit.gates.gate1_naming.passed, true);
  assert.equal(audit.gates.gate2_microTags.passed, true);
  assert.equal(audit.gates.gate3_barCounts.passed, true);
  assert.equal(audit.gates.gate4_styleBox.passed, true);
  assert.equal(audit.gates.gate5_excludeStyles.passed, true);
  assert.equal(audit.gates.gate6_dropIsolation.passed, true);
  assert.equal(audit.gates.gate7_lyricsLength.passed, true);
});

test('evaluateClubPrompter: falla Gate 1 si la versión no está al final', () => {
  const track = generateClubAdvancedTrack({
    title: 'Disco Nights',
    subgenre: 'Dark Disco',
    bpm: 125,
    musicalKey: 'E minor',
  });

  // Versión colocada erróneamente al principio
  const invalidName = 'v6 I disco nights 7 Max W:15 S:100 A:50 V:N';

  const audit = evaluateClubPrompter({
    generationName: invalidName,
    stylePrompt: track.stylePrompt,
    excludeStyles: track.excludeStyles,
    lyricsWithMetatags: track.lyricsWithMetatags,
  });

  assert.equal(audit.passed, false);
  assert.equal(audit.gates.gate1_naming.passed, false);
  assert.ok(audit.observations.some(o => o.includes('Formato de nombre inválido')));
});

test('evaluateClubPrompter: falla Gate 5 si Exclude Styles tiene menos de 3 tags', () => {
  const track = generateClubAdvancedTrack({
    title: 'Disco Nights',
    subgenre: 'Dark Disco',
    bpm: 125,
    musicalKey: 'E minor',
  });

  const audit = evaluateClubPrompter({
    generationName: track.defaultGenerationName,
    stylePrompt: track.stylePrompt,
    excludeStyles: 'EDM, Pop', // Solo 2 tags
    lyricsWithMetatags: track.lyricsWithMetatags,
  });

  assert.equal(audit.passed, false);
  assert.equal(audit.gates.gate5_excludeStyles.passed, false);
  assert.ok(audit.observations.some(o => o.includes('Exclude Styles solo contiene 2')));
});

test('evaluateClubPrompter: falla Gate 4 si Style Box excede los 1000 caracteres', () => {
  const track = generateClubAdvancedTrack({
    title: 'Disco Nights',
    subgenre: 'Dark Disco',
    bpm: 125,
    musicalKey: 'E minor',
  });

  const hugeStyle = track.stylePrompt + ' ' + 'analog synth groove '.repeat(45); // Excede 1000 caracteres
  assert.ok(hugeStyle.length > 1000);

  const audit = evaluateClubPrompter({
    generationName: track.defaultGenerationName,
    stylePrompt: hugeStyle,
    excludeStyles: track.excludeStyles,
    lyricsWithMetatags: track.lyricsWithMetatags,
  });

  assert.equal(audit.passed, false);
  assert.equal(audit.gates.gate4_styleBox.passed, false);
  assert.ok(audit.observations.some(o => o.includes('supera el límite físico de Suno')));
});

test('evaluateClubPrompter: falla Gate 4 si Style Box contiene fuga de estructura (bars o intro/drop)', () => {
  const track = generateClubAdvancedTrack({
    title: 'Disco Nights',
    subgenre: 'Dark Disco',
    bpm: 125,
    musicalKey: 'E minor',
  });

  const leakyStyle = track.stylePrompt + '\nExact structure: 16 bars of Intro A then Drop for 24 bars';

  const audit = evaluateClubPrompter({
    generationName: track.defaultGenerationName,
    stylePrompt: leakyStyle,
    excludeStyles: track.excludeStyles,
    lyricsWithMetatags: track.lyricsWithMetatags,
  });

  assert.equal(audit.passed, false);
  assert.equal(audit.gates.gate4_styleBox.passed, false);
  assert.ok(audit.observations.some(o => o.includes('directivas de estructura')));
});

test('evaluateClubPrompter: falla Gate 7 si Lyrics Box supera los 5000 caracteres', () => {
  const track = generateClubAdvancedTrack({
    title: 'Disco Nights',
    subgenre: 'Dark Disco',
    bpm: 125,
    musicalKey: 'E minor',
  });

  const hugeLyrics = track.lyricsWithMetatags + '\n[Drop]\n(spoken) dance all night\n'.repeat(250);
  assert.ok(hugeLyrics.length > 5000);

  const audit = evaluateClubPrompter({
    generationName: track.defaultGenerationName,
    stylePrompt: track.stylePrompt,
    excludeStyles: track.excludeStyles,
    lyricsWithMetatags: hugeLyrics,
  });

  assert.equal(audit.passed, false);
  assert.equal(audit.gates.gate7_lyricsLength.passed, false);
  assert.ok(audit.observations.some(o => o.includes('límite físico absoluto de Suno') && o.includes('5000 caracteres')));
});

test('extractArchivedVersions: acumula versiones de forma colapsable e idempotente (v3, v2 colapsable, v1 colapsable)', () => {
  const v1Content = `---
title: "Don't Stop"
---
## 🎛️ 1. Nombre de la Pista (Title Box)
> Copia este texto:
\`\`\`text
V dont stop 1 Max W:15 S:85 A:50 V:N v6
\`\`\`
## 🎧 2. Style of Music (Casillero de Estilo)
> Copia este bloque:
\`\`\`text
[Style: Indie Tech][Mood: Dark]
Indie Tech, 130 BPM
\`\`\`
## 🚫 3. Exclude Styles (Casillero de Exclusiones Negativas)
> Copia este bloque:
\`\`\`text
EDM, Pop, Acoustic
\`\`\`
## 📝 4. Lyrics & Structure (Casillero de Letra)
> Copia este bloque:
\`\`\`text
[Intro A]
[8 bars of stripped drums]
\`\`\`
`;

  // Iteración a v2: v1 debe quedar archivada en un bloque <details>
  const archivedV1 = extractArchivedVersions(
    v1Content,
    'V dont stop 2 Max W:15 S:85 A:75 V:N v6',
    '[Style: Tech House][Mood: Dark]\nTech House, 130 BPM',
    '[Intro A]\n[8 bars of drums]\n(spoken) Dont stop'
  );

  assert.ok(archivedV1.includes('<details>'));
  assert.ok(archivedV1.includes('Versión 1'));
  assert.ok(archivedV1.includes('V dont stop 1 Max W:15 S:85 A:50 V:N v6'));
  assert.ok(archivedV1.includes('Indie Tech'));

  // Idempotencia: si se intenta regenerar v2 con el mismo contenido, no duplica
  const v2ContentWithHistory = `---
title: "Don't Stop"
---
## 🎛️ 1. Nombre de la Pista (Title Box)
> Copia este texto:
\`\`\`text
V dont stop 2 Max W:15 S:85 A:75 V:N v6
\`\`\`
## 🎧 2. Style of Music (Casillero de Estilo)
> Copia este bloque:
\`\`\`text
[Style: Tech House][Mood: Dark]
Tech House, 130 BPM
\`\`\`
## 🚫 3. Exclude Styles (Casillero de Exclusiones Negativas)
> Copia este bloque:
\`\`\`text
EDM, Pop, Acoustic
\`\`\`
## 📝 4. Lyrics & Structure (Casillero de Letra)
> Copia este bloque:
\`\`\`text
[Intro A]
[8 bars of drums]
(spoken) Dont stop
\`\`\`

## 🗄️ 7. Historial de Versiones Anteriores (Archivadas)
${archivedV1}
`;

  const sameCall = extractArchivedVersions(
    v2ContentWithHistory,
    'V dont stop 2 Max W:15 S:85 A:75 V:N v6',
    '[Style: Tech House][Mood: Dark]\nTech House, 130 BPM',
    '[Intro A]\n[8 bars of drums]\n(spoken) Dont stop'
  );
  assert.equal(sameCall, archivedV1); // Idempotente: no crea duplicados

  // Iteración a v3: v2 se apila arriba de v1 (<details> v2 ... </details> seguido de <details> v1 ... </details>)
  const stackedV2andV1 = extractArchivedVersions(
    v2ContentWithHistory,
    'V dont stop 3 Max W:20 S:90 A:80 V:N v6',
    '[Style: Hard House][Mood: Fast]\nHard House, 135 BPM',
    '[Intro A]\n[8 bars of rave stabs]'
  );

  assert.ok(stackedV2andV1.includes('Versión 2'));
  assert.ok(stackedV2andV1.includes('Versión 1'));
  // Verificar orden cronológico inverso: v2 aparece antes que v1 en el archivo
  const idxV2 = stackedV2andV1.indexOf('Versión 2');
  const idxV1 = stackedV2andV1.indexOf('Versión 1');
  assert.ok(idxV2 < idxV1, 'v2 debe estar encima de v1 en el historial de bloques colapsables');
});
