import test from 'node:test';
import assert from 'node:assert/strict';
import { scanAndRemediateArtists, scanUnresolvedVariables } from '../evaluators/lexical-filter.ts';
import { evaluateSunoTrack, estimateSyllables } from '../evaluators/suno-rubric.ts';

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
