#!/usr/bin/env node

/**
 * Suno-Engine Unified CLI (TypeScript Domain Architecture)
 * Single, type-safe entrypoint for SDD, Music Composition, Vault, and Test domains.
 *
 * Usage:
 *   node Suno-Engine/bin/engine.ts <command> [args]
 *
 * @spec SPEC-SUNO-001 (Suno Prompt Gen Clean Architecture)
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { TaskOrchestrator } from '../core/orchestrator.ts';
import { VaultGateway, extractArchivedVersions } from '../core/vault-gateway.ts';
import { injectTemplate, loadTemplateFile } from '../core/template-injector.ts';
import { evaluateSunoTrack, evaluateClubPrompter } from '../evaluators/suno-rubric.ts';
import { generateDanceClubTrack } from '../strategies/dance-club.ts';
import { generatePopCommercialTrack } from '../strategies/pop-commercial.ts';
import { generateFusionTrack } from '../strategies/fusion.ts';
import { generateTagDensePrompt } from '../strategies/tag-dense.ts';
import { generateClubAdvancedTrack, formatSunoGenerationName } from '../strategies/club-advanced.ts';
import { GlossaryManager } from '../core/glossary-manager.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const orchestrator = new TaskOrchestrator();
const vault: VaultGateway = orchestrator.getVault();

const args = process.argv.slice(2);
const command = args[0] || 'help';

function printHelp() {
  console.log(`
╔═══════════════════════════════════════════════════════════════════╗
║               🎵  SUNO-ENGINE CLI RUNNER  v2.0                   ║
║         Harness Modular y SDD para Prompts de SUNO AI             ║
╚═══════════════════════════════════════════════════════════════════╝

Comandos de Composición & Bóveda Musical:
  new-artist <slug> "<nombre>" "<generos>" "<vocal-vibe>"
     Crea la ficha del artista en Suno-Vault/Artistas/<slug>/_artista.md

  new-ep <artist-slug> <ep-slug> "<titulo-ep>" "<genero>" "<concepto>"
     Crea el manifiesto del EP en Suno-Vault/Artistas/<artist>/<ep>/_ep.md

  compose <artist-slug> <ep-slug> <track-number> <track-slug> "<titulo>" [--strategy club|dance|pop|fusion]
     Genera una canción estructurada y auditada con metatags en la bóveda (Modo Avanzado Suno v6 por defecto: club)

  validate <archivo.md>
     Ejecuta la Rúbrica 4D y el Auditor Ralph Loop de 6 filtros en < 2ms

Comandos de Glosario e Ingestión de Tags:
  glossary scan "<texto-o-prompt>"
     Analiza un prompt o lista de palabras, detectando cuáles ya existen y cuáles son nuevas.

  glossary list
     Muestra el inventario completo de tags clasificados por categoría.

  glossary add --category "<cat>" --tag "<tag>" --subcat "<subcat>" --desc "<desc>" --subgenre "<subgenre>" --example "<example>"
     Inserta un nuevo tag auditado en los glosarios de referencias del motor.

Comandos SDD y Gobernanza:
  sdd <init|preview|approve-spec|evaluate|approve-deliverable|list>
     Orquestador del ciclo de vida SDD con doble guardrail HITL y sesiones de tareas.

  vault <specs|artists|search>
     Explora las notas de la Bóveda Obsidian.

  test
     Ejecuta la suite completa de pruebas unitarias.
`);
}

function runTsScript(relPath: string, scriptArgs: string[]) {
  const scriptPath = path.join(__dirname, relPath);
  const quoted = scriptArgs.map(a => `"${a}"`).join(' ');
  try {
    execSync(`node "${scriptPath}" ${quoted}`, { stdio: 'inherit' });
  } catch (err: any) {
    process.exit(err.status || 1);
  }
}

switch (command) {
  case 'new-artist': {
    const slug = vault.sanitizeSlug(args[1] || 'nuevo-artista');
    const name = args[2] || 'Nuevo Artista';
    const genres = args[3] || 'Synthwave, Electronic';
    const vocal = args[4] || 'female breathy alto vocal, emotional';

    const tpl = loadTemplateFile('_artista.tpl.md');
    const rendered = injectTemplate(tpl, {
      artist: {
        name,
        slug,
        vocalDescription: vocal,
        genresYamlList: genres.split(',').map(g => `  - ${g.trim()}`).join('\n'),
        primaryGenres: genres,
        bpmRange: '115 - 128 BPM',
        signatureSound: `${genres} con textura analógica y reverberación controlada`,
        signatureVocalTags: vocal,
        preferredKeys: 'D minor, A minor, F major',
        instruments: 'Analog synths, 808 bass, punchy drums',
        productionTextures: 'Sidechain compression, tape warmth',
        masterStylePrompt: `${genres.toLowerCase()}, ${vocal}, analog synth lead, driving bassline, 120 bpm`,
        bannedTagsList: '  - Nombres comerciales de artistas reales\n  - "best song ever", "grammy winner"',
        epLinksList: '  *(Aún no hay EPs creados)*',
      },
      date: new Date().toISOString().split('T')[0],
    });

    const target = vault.saveArtistNote(slug, rendered);
    console.log(`\n✅ Artista creado exitosamente:\n   📄 ${target}\n`);
    break;
  }

  case 'new-ep': {
    const artistSlug = vault.sanitizeSlug(args[1]);
    const epSlug = vault.sanitizeSlug(args[2]);
    const title = args[3] || 'Nuevo EP';
    const genre = args[4] || 'Synthwave';
    const concept = args[5] || 'Un viaje sonoro nostálgico por la noche de la ciudad.';

    if (!artistSlug || !epSlug) {
      console.log('Uso: engine new-ep <artist-slug> <ep-slug> "<titulo-ep>" "<genero>" "<concepto>"');
      process.exit(1);
    }

    const tpl = loadTemplateFile('_ep.tpl.md');
    const masterStyle = `${genre.toLowerCase()}, analog synthesizer, raw drum machine, hypnotic club groove, 130 bpm`;
    
    const epDir = path.join(vault.getVaultDir(), 'Artistas', artistSlug, epSlug);
    let trackTable = '| 01 | Pista 1 | 120 BPM | [[01 - pista-1]] |\n| 02 | Pista 2 | 124 BPM | [[02 - pista-2]] |';
    let trackCount = 3;
    if (fs.existsSync(epDir)) {
      const trackFiles = fs.readdirSync(epDir).filter(f => /^\d{2}\s*-\s*.+\.md$/.test(f)).sort();
      if (trackFiles.length > 0) {
        trackCount = trackFiles.length;
        trackTable = trackFiles.map((tf) => {
          const content = fs.readFileSync(path.join(epDir, tf), 'utf8');
          const titleMatch = content.match(/title:\s*"([^"]+)"/);
          const bpmMatch = content.match(/bpm:\s*(\d+)/);
          const tName = titleMatch ? titleMatch[1] : tf.replace(/\.md$/, '');
          const tBpm = bpmMatch ? `${bpmMatch[1]} BPM` : '130 BPM';
          const tNum = tf.slice(0, 2);
          const link = tf.replace(/\.md$/, '');
          return `| ${tNum} | ${tName} | ${tBpm} | [[${link}]] |`;
        }).join('\n');
      }
    }

    const rendered = injectTemplate(tpl, {
      ep: {
        title,
        slug: epSlug,
        artistSlug,
        artistName: artistSlug.replace(/-/g, ' ').toUpperCase(),
        genre,
        masterStylePrompt: masterStyle,
        masterStylePromptLength: masterStyle.length,
        totalTracks: trackCount,
        conceptNarrative: concept,
        narrativeArc: `1. Apertura: Inmersión en ${concept}\n2. Nudo: Tensión rítmica de club con percusiones 707/727\n3. Cierre: Resolución bailable extendida para DJ set`,
        tracklistMarkdownTable: trackTable,
        baseBpm: '125 - 130 BPM',
        mixDirectives: 'Mezcla analógica seca, voz centrada e íntima sin reverb larga, graves bloqueados entre bombo 909 y sub 808',
        instrumentPalette: 'Roland TR-909, TR-707, TR-727, Moog sub-bass, FM synth plucks, analog stabs',
      },
      date: new Date().toISOString().split('T')[0],
    });

    const target = vault.saveEPNote(artistSlug, epSlug, rendered);
    console.log(`\n✅ EP creado exitosamente:\n   📄 ${target}\n`);

    // Sincronizar automáticamente la discografía en la ficha del artista
    const artistNotePath = path.join(vault.getVaultDir(), 'Artistas', artistSlug, '_artista.md');
    if (fs.existsSync(artistNotePath)) {
      let artistContent = fs.readFileSync(artistNotePath, 'utf8');
      const epLink = `- [[Artistas/${artistSlug}/${epSlug}/_ep|${title}]]`;
      if (artistContent.includes('*(Aún no hay EPs creados)*')) {
        artistContent = artistContent.replace('*(Aún no hay EPs creados)*', epLink);
        vault.saveArtistNote(artistSlug, artistContent);
      } else if (!artistContent.includes(epLink)) {
        artistContent = artistContent.replace(/(## 7\. Discografía en Suno-Vault[\s\S]*?- EPs Registrados:)/, `$1\n  ${epLink}`);
        vault.saveArtistNote(artistSlug, artistContent);
      }
    }
    break;
  }

  case 'compose': {
    const artistSlug = vault.sanitizeSlug(args[1]);
    const epSlug = vault.sanitizeSlug(args[2]);
    const trackNum = parseInt(args[3] || '1', 10);
    const trackSlug = vault.sanitizeSlug(args[4] || 'nueva-cancion');
    const title = args[5] || 'Nueva Canción';

    const stratArgIdx = args.indexOf('--strategy');
    const strategy = stratArgIdx !== -1 ? args[stratArgIdx + 1] : 'club';

    const getOpt = (flag: string) => {
      const idx = args.indexOf(flag);
      return idx !== -1 ? args[idx + 1] : undefined;
    };
    const hasFlag = (flag: string) => args.includes(flag);

    const customBpm = getOpt('--bpm') ? parseInt(getOpt('--bpm')!, 10) : undefined;
    const customKey = getOpt('--key');
    const customGenre = getOpt('--genre');
    const customStructure = (getOpt('--structure') as 'extended' | 'eight_bars') || undefined;
    const customVocal = getOpt('--vocal');
    const customHook = getOpt('--hook');
    const customLeadSynth = getOpt('--synth-lead');
    const customInstruments = getOpt('--instruments');
    const customWeirdness = getOpt('--weirdness') ? parseInt(getOpt('--weirdness')!, 10) : undefined;
    const customStyleInfluence = getOpt('--style-influence') ? parseInt(getOpt('--style-influence')!, 10) : undefined;
    const customAudioWeight = getOpt('--audio-weight') ? parseInt(getOpt('--audio-weight')!, 10) : undefined;
    const customVariety = getOpt('--variety');
    const customTake = getOpt('--take') ? parseInt(getOpt('--take')!, 10) : undefined;
    const isVocalFlag = hasFlag('--is-vocal') || hasFlag('--vocal-track');

    if (!artistSlug || !epSlug || isNaN(trackNum)) {
      console.log('Uso: engine compose <artist-slug> <ep-slug> <track-number> <track-slug> "<titulo>" [--strategy club|dance|pop|fusion] [--bpm <bpm>] [--key <key>] [--genre <genre>] [--structure extended|eight_bars] [--vocal <vocal>] [--hook <hook>] [--is-vocal]');
      process.exit(1);
    }

    let generated: {
      stylePrompt: string;
      lyricsWithMetatags: string;
      bpm: number;
      musicalKey: string;
      subgenre: string;
      sunoVersion: string;
      isInstrumental: boolean;
      vocalElements: string;
      defaultGenerationName: string;
      excludeStyles: string;
      paramWeirdness: number;
      paramStyleInfluence: number;
      paramAudioWeight: number;
      paramVariety: string;
      presets: {
        preset1: string;
        preset2: string;
        preset3: string;
        preset4: string;
      };
    };

    if (strategy === 'club') {
      const isInst = !isVocalFlag;
      const clubRes = generateClubAdvancedTrack({
        title,
        subgenre: customGenre || 'Dark Disco, NY House, Dark House',
        bpm: customBpm || 125,
        musicalKey: customKey || 'E minor',
        vocalStyle: customVocal || 'Vocoder',
        vocalHook: customHook || `I love disco nights`,
        sunoVersion: 'v6',
        structure: customStructure || 'extended',
        instruments: customInstruments,
        synthLead: customLeadSynth,
        isInstrumental: isInst,
        weirdness: customWeirdness,
        styleInfluence: customStyleInfluence,
        audioWeight: customAudioWeight,
        variety: customVariety,
        take: customTake,
      });
      generated = {
        stylePrompt: clubRes.stylePrompt,
        lyricsWithMetatags: clubRes.lyricsWithMetatags,
        bpm: clubRes.bpm,
        musicalKey: clubRes.musicalKey,
        subgenre: clubRes.subgenre,
        sunoVersion: clubRes.sunoVersion,
        isInstrumental: isInst,
        vocalElements: isInst ? 'Minimal vocal chops' : 'Dry spoken vocal phrases and chops',
        defaultGenerationName: clubRes.defaultGenerationName,
        excludeStyles: clubRes.excludeStyles,
        paramWeirdness: clubRes.paramWeirdness,
        paramStyleInfluence: clubRes.paramStyleInfluence,
        paramAudioWeight: clubRes.paramAudioWeight,
        paramVariety: clubRes.paramVariety,
        presets: clubRes.presets,
      };
    } else if (strategy === 'pop') {
      const popRes = generatePopCommercialTrack({
        theme: title,
        hookLine: `Esta es la señal de ${title}`,
      });
      const defaultGen = formatSunoGenerationName(title, 1, 15, 100, 50, 'N', 'v6', false);
      generated = {
        stylePrompt: popRes.stylePrompt,
        lyricsWithMetatags: popRes.lyricsWithMetatags,
        bpm: popRes.bpm,
        musicalKey: 'D minor',
        subgenre: 'Commercial Pop Dance',
        sunoVersion: 'v6',
        isInstrumental: false,
        vocalElements: 'Lead vocal & chorus harmonies',
        defaultGenerationName: defaultGen,
        excludeStyles: 'Death Metal, Noise, Drone, Free Jazz, Accordion',
        paramWeirdness: 10,
        paramStyleInfluence: 90,
        paramAudioWeight: 70,
        paramVariety: 'N',
        presets: {
          preset1: formatSunoGenerationName(title, 1, 0, 100, 50, 'N', 'v6', false),
          preset2: formatSunoGenerationName(title, 2, 10, 90, 70, 'N', 'v6', false),
          preset3: formatSunoGenerationName(title, 3, 20, 80, 70, 'H', 'v6', false),
          preset4: formatSunoGenerationName(title, 4, 5, 95, 80, 'N', 'v6', false),
        },
      };
    } else if (strategy === 'fusion') {
      const fusionRes = generateFusionTrack({
        styleA: 'flamenco',
        styleB: 'dark synthwave',
        targetBpm: 124,
        theme: title,
        hookLine: `Bailando en el borde de ${title}`,
      });
      const defaultGen = formatSunoGenerationName(title, 1, 15, 100, 50, 'N', 'v6', false);
      generated = {
        stylePrompt: fusionRes.stylePrompt,
        lyricsWithMetatags: fusionRes.lyricsWithMetatags,
        bpm: fusionRes.bpm,
        musicalKey: 'A minor',
        subgenre: 'Flamenco Synth Fusion',
        sunoVersion: 'v6',
        isInstrumental: false,
        vocalElements: 'Flamenco vocal timbre with vocoder',
        defaultGenerationName: defaultGen,
        excludeStyles: 'Country, Polka, Accordion, Marching Band, Slap House',
        paramWeirdness: 20,
        paramStyleInfluence: 85,
        paramAudioWeight: 60,
        paramVariety: 'H',
        presets: {
          preset1: formatSunoGenerationName(title, 1, 0, 100, 50, 'N', 'v6', false),
          preset2: formatSunoGenerationName(title, 2, 20, 85, 60, 'H', 'v6', false),
          preset3: formatSunoGenerationName(title, 3, 30, 75, 70, 'H', 'v6', false),
          preset4: formatSunoGenerationName(title, 4, 10, 90, 80, 'N', 'v6', false),
        },
      };
    } else {
      // 'dance' strategy
      const danceRes = generateDanceClubTrack({
        subgenre: 'melodic synth dance',
        theme: title,
        bpm: 126,
        hookLine: `Feel the pulse of ${title}`,
      });
      const defaultGen = formatSunoGenerationName(title, 1, 15, 100, 50, 'N', 'v6', true);
      generated = {
        stylePrompt: danceRes.stylePrompt,
        lyricsWithMetatags: danceRes.lyricsWithMetatags,
        bpm: danceRes.bpm,
        musicalKey: 'D minor',
        subgenre: 'Melodic Synth Dance',
        sunoVersion: 'v6',
        isInstrumental: true,
        vocalElements: 'Minimal vocal chops',
        defaultGenerationName: defaultGen,
        excludeStyles: 'Acoustic Guitar, Country, Folk, Operatic Vocals, Banjo',
        paramWeirdness: 15,
        paramStyleInfluence: 100,
        paramAudioWeight: 50,
        paramVariety: 'N',
        presets: {
          preset1: formatSunoGenerationName(title, 1, 0, 100, 50, 'N', 'v6', true),
          preset2: formatSunoGenerationName(title, 2, 15, 100, 50, 'N', 'v6', true),
          preset3: formatSunoGenerationName(title, 3, 25, 85, 70, 'H', 'v6', true),
          preset4: formatSunoGenerationName(title, 4, 10, 90, 80, 'N', 'v6', true),
        },
      };
    }

    // Auditoría de Calidad
    let isApproved = false;
    let auditScore = 0;
    let auditSummary = '';

    if (strategy === 'club') {
      const clubAudit = evaluateClubPrompter({
        generationName: generated.defaultGenerationName,
        stylePrompt: generated.stylePrompt,
        excludeStyles: generated.excludeStyles,
        lyricsWithMetatags: generated.lyricsWithMetatags,
      });
      isApproved = clubAudit.passed;
      auditScore = clubAudit.totalScore;
      auditSummary = `Auditor Ralph Loop (7 Gates): ${clubAudit.totalScore}/10 (${clubAudit.passed ? 'APROBADA' : 'REQUIERE AJUSTES'})`;
    } else {
      const stdAudit = evaluateSunoTrack({
        stylePrompt: generated.stylePrompt,
        lyricsWithMetatags: generated.lyricsWithMetatags,
      });
      isApproved = stdAudit.passed;
      auditScore = stdAudit.totalScore;
      auditSummary = `Rúbrica 4D: ${stdAudit.totalScore}/10 (${stdAudit.passed ? 'APROBADA' : 'REQUIERE AJUSTES'})`;
    }

    const barMatchesAll = Array.from(generated.lyricsWithMetatags.matchAll(/\[(\d+)\s+bars/gi));
    const totalBars = barMatchesAll.reduce((acc, m) => acc + parseInt(m[1], 10), 0);
    const bpmVal = generated.bpm || 120;
    const calculatedSecondsRaw = totalBars > 0 ? totalBars * (240 / bpmVal) : 0;
    const calculatedSeconds = Number(calculatedSecondsRaw.toFixed(2));
    const durationExactSeconds = totalBars > 0 ? Number((calculatedSecondsRaw + 2).toFixed(2)) : 0;

    const formatMmSs = (sec: number) => {
      const rounded = Math.round(sec);
      const m = Math.floor(rounded / 60);
      const s = rounded % 60;
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };

    const calculatedDurationFormatted = formatMmSs(calculatedSeconds);
    const exactDurationFormatted = formatMmSs(durationExactSeconds);

    const targetFile = vault.getSongTrackPath(artistSlug, epSlug, trackNum, trackSlug);
    let existingContent = '';
    if (fs.existsSync(targetFile)) {
      existingContent = fs.readFileSync(targetFile, 'utf8');
    }

    const versionHistoryDetails = extractArchivedVersions(
      existingContent,
      generated.defaultGenerationName,
      generated.stylePrompt,
      generated.lyricsWithMetatags
    );

    const tpl = loadTemplateFile('_cancion.tpl.md');
    const rendered = injectTemplate(tpl, {
      track: {
        number: trackNum,
        numberFormatted: String(trackNum).padStart(2, '0'),
        title,
        slug: trackSlug,
        artistSlug,
        artistName: artistSlug.replace(/-/g, ' ').toUpperCase(),
        epSlug,
        epTitle: epSlug.replace(/-/g, ' ').toUpperCase(),
        subgenre: generated.subgenre,
        bpm: generated.bpm,
        musicalKey: generated.musicalKey,
        totalBars,
        calculatedSeconds,
        calculatedDurationFormatted,
        durationExactSeconds,
        exactDurationFormatted,
        sunoVersion: generated.sunoVersion,
        isInstrumental: generated.isInstrumental,
        vocalElements: generated.vocalElements,
        defaultGenerationName: generated.defaultGenerationName,
        paramWeirdness: generated.paramWeirdness,
        paramStyleInfluence: generated.paramStyleInfluence,
        paramAudioWeight: generated.paramAudioWeight,
        paramVariety: generated.paramVariety,
        status: isApproved ? 'draft' : 'needs_revision',
        audioUrl: '',
        stylePrompt: generated.stylePrompt,
        excludeStyles: generated.excludeStyles,
        lyricsWithMetatags: generated.lyricsWithMetatags,
        versionHistoryDetails,
        vibeDescription: `Pista compuesta con estrategia "${strategy}". ${auditSummary}.`,
        namingPreset1: generated.presets.preset1,
        namingPreset2: generated.presets.preset2,
        namingPreset3: generated.presets.preset3,
        namingPreset4: generated.presets.preset4,
        take1Url: '(Pendiente de generar en Suno)',
        take1Rating: '—',
        take1Notes: 'Generación inicial creada con motor determinista',
      },
      date: new Date().toISOString().split('T')[0],
    });

    const target = vault.saveSongTrackNote(artistSlug, epSlug, trackNum, trackSlug, rendered);
    console.log(`\n🎶 Canción compuesta exitosamente (Estrategia: ${strategy}):\n   📄 ${target}`);
    console.log(`   📊 ${auditSummary}`);
    console.log(`   🏷️  Nombre de Generación: ${generated.defaultGenerationName}`);
    console.log(`   ⏱️  Duración Calculada: ${totalBars} compases = ${calculatedDurationFormatted} (${calculatedSeconds}s) | Exacta (+2s): ${exactDurationFormatted} (${durationExactSeconds}s)`);
    console.log(`   🔤 Caracteres Style Prompt: ${generated.stylePrompt.length}\n`);
    break;
  }

  case 'validate': {
    const targetFile = args[1];
    if (!targetFile || !fs.existsSync(targetFile)) {
      console.log('Uso: engine validate <ruta-archivo.md>');
      process.exit(1);
    }
    const content = fs.readFileSync(targetFile, 'utf8');

    // Extraer campos del modo avanzado / suno-prompter
    const namingMatch = content.match(/## [^\n]*1\.\s*Nombre de la Pista[^\n]*\r?\n>[\s\S]*?```text\r?\n([\s\S]*?)\r?\n```/)
      || content.match(/default_generation_name:\s*"([^"]+)"/);
    const generationName = namingMatch ? namingMatch[1].trim() : undefined;

    const styleMatch = content.match(/## [^\n]*(?:Style of Music|Casillero de Estilo)[^\n]*\r?\n>[\s\S]*?```text\r?\n([\s\S]*?)\r?\n```/)
      || content.match(/## 1\. Suno Style of Music Prompt[\s\S]*?```text\r?\n([\s\S]*?)\r?\n```/);
    const stylePrompt = styleMatch ? styleMatch[1].trim() : '';

    const excludeMatch = content.match(/## [^\n]*(?:Exclude Styles|Exclusiones Negativas)[^\n]*\r?\n>[\s\S]*?```text\r?\n([\s\S]*?)\r?\n```/);
    const excludeStyles = excludeMatch ? excludeMatch[1].trim() : undefined;

    const lyricsMatch = content.match(/## [^\n]*(?:Lyrics & Structure|Letra y Estructura con Metatags)[^\n]*\r?\n>[\s\S]*?```text\r?\n([\s\S]*?)\r?\n```/)
      || content.match(/## 2\. Letra y Estructura con Metatags[\s\S]*?```text\r?\n([\s\S]*?)\r?\n```/);
    const lyricsWithMetatags = lyricsMatch ? lyricsMatch[1].trim() : '';

    const isAdvancedClub = generationName !== undefined || excludeStyles !== undefined || content.includes('mode: "Advanced"');

    console.log(`\n═════════════════════════════════════════════════════════════════════`);
    console.log(`📋 RESULTADO DE AUDITORÍA SUNO: ${targetFile}`);
    console.log(`═════════════════════════════════════════════════════════════════════`);

    if (isAdvancedClub) {
      const clubAudit = evaluateClubPrompter({
        generationName,
        stylePrompt,
        excludeStyles,
        lyricsWithMetatags,
      });

      console.log(`Modo: SUNO v6 MODO AVANZADO (suno-prompter Ralph Loop)`);
      console.log(`Puntaje Total: ${clubAudit.totalScore} / 10.0 [${clubAudit.passed ? '✅ APROBADO (>= 9.5)' : '❌ RECHAZADO'}]`);
      console.log(`---------------------------------------------------------------------`);
      console.log(`Filtros de Calidad (7 Gates):`);
      console.log(`  • Gate 1 (Naming Standard):     ${clubAudit.gates.gate1_naming.passed ? '✅' : '❌'} (${clubAudit.gates.gate1_naming.score}/1.43) ${clubAudit.gates.gate1_naming.observation ? `- ${clubAudit.gates.gate1_naming.observation}` : ''}`);
      console.log(`  • Gate 2 (Micro-Tags Secciones): ${clubAudit.gates.gate2_microTags.passed ? '✅' : '❌'} (${clubAudit.gates.gate2_microTags.score}/1.43) ${clubAudit.gates.gate2_microTags.observation ? `- ${clubAudit.gates.gate2_microTags.observation}` : ''}`);
      console.log(`  • Gate 3 (Cómputo Compases):     ${clubAudit.gates.gate3_barCounts.passed ? '✅' : '❌'} (${clubAudit.gates.gate3_barCounts.score}/1.43) ${clubAudit.gates.gate3_barCounts.observation ? `- ${clubAudit.gates.gate3_barCounts.observation}` : ''}`);
      console.log(`  • Gate 4 (Style Box <=1000ch):  ${clubAudit.gates.gate4_styleBox.passed ? '✅' : '❌'} (${clubAudit.gates.gate4_styleBox.score}/1.43) ${clubAudit.gates.gate4_styleBox.observation ? `- ${clubAudit.gates.gate4_styleBox.observation}` : ''}`);
      console.log(`  • Gate 5 (Exclude Styles):      ${clubAudit.gates.gate5_excludeStyles.passed ? '✅' : '❌'} (${clubAudit.gates.gate5_excludeStyles.score}/1.42) ${clubAudit.gates.gate5_excludeStyles.observation ? `- ${clubAudit.gates.gate5_excludeStyles.observation}` : ''}`);
      console.log(`  • Gate 6 (Aislamiento de Drop): ${clubAudit.gates.gate6_dropIsolation.passed ? '✅' : '❌'} (${clubAudit.gates.gate6_dropIsolation.score}/1.43) ${clubAudit.gates.gate6_dropIsolation.observation ? `- ${clubAudit.gates.gate6_dropIsolation.observation}` : ''}`);
      console.log(`  • Gate 7 (Límite Letra <=5000): ${clubAudit.gates.gate7_lyricsLength.passed ? '✅' : '❌'} (${clubAudit.gates.gate7_lyricsLength.score}/1.43) ${clubAudit.gates.gate7_lyricsLength.observation ? `- ${clubAudit.gates.gate7_lyricsLength.observation}` : ''}`);

      if (clubAudit.observations.length > 0) {
        console.log(`\nObservaciones:`);
        for (const o of clubAudit.observations) console.log(`  ⚠️ ${o}`);
      }
      if (clubAudit.remediationDirectives.length > 0) {
        console.log(`\nDirectivas de Remediación (Ralph Loop):`);
        for (const d of clubAudit.remediationDirectives) console.log(`  🔧 ${d}`);
      }
    } else {
      const audit = evaluateSunoTrack({ stylePrompt, lyricsWithMetatags });
      console.log(`Modo: ESTÁNDAR 4D RUBRIC`);
      console.log(`Puntaje Total: ${audit.totalScore} / 10.0 [${audit.passed ? '✅ APROBADO' : '❌ RECHAZADO'}]`);
      console.log(`  • Style Prompt Quality: ${audit.dimensions.stylePromptQuality} / 2.5`);
      console.log(`  • Metatag Structure:    ${audit.dimensions.metatagStructure} / 2.5`);
      console.log(`  • Lyrical Cadence:      ${audit.dimensions.lyricalCadence} / 2.5`);
      console.log(`  • Lexical Hygiene:      ${audit.dimensions.lexicalHygiene} / 2.5`);
      console.log(`---------------------------------------------------------------------`);
      console.log(`Métricas: Caracteres Style = ${audit.metrics.stylePromptLength}/200 | Metatags = ${audit.metrics.metatagCount} | Versos = ${audit.metrics.verseCount}`);
      if (audit.observations.length > 0) {
        console.log(`\nObservaciones:`);
        for (const o of audit.observations) console.log(`  ⚠️ ${o}`);
      }
      if (audit.remediationDirectives.length > 0) {
        console.log(`\nDirectivas de Remediación:`);
        for (const d of audit.remediationDirectives) console.log(`  🔧 ${d}`);
      }
    }
    console.log(`═════════════════════════════════════════════════════════════════════\n`);
    break;
  }

  case 'promote': {
    runTsScript('../scripts/sdd/sdd-orchestrator.ts', ['promote', ...args.slice(1)]);
    break;
  }
  case 'task':
  case 'sdd': {
    if (args.length <= 1) {
      printHelp();
      process.exit(1);
    }
    runTsScript('../scripts/sdd/sdd-orchestrator.ts', args.slice(1));
    break;
  }
  case 'vault': {
    const sub = args[1];
    const rest = args.slice(2);
    if (sub === 'artists') {
      const artists = vault.listArtists();
      console.log(`\n🎤 Artistas Registrados en Suno-Vault (${artists.length}):`);
      for (const a of artists) {
        const eps = vault.listEPs(a);
        console.log(`   • ${a} (${eps.length} EPs)`);
        for (const ep of eps) {
          const songs = vault.listSongs(a, ep);
          console.log(`       └── [EP] ${ep} (${songs.length} canciones)`);
          for (const s of songs) {
            console.log(`             └── 🎵 ${s}`);
          }
        }
      }
      console.log('');
    } else if (sub === 'search') {
      const q = rest.join(' ');
      const res = vault.searchVault(q);
      console.log(`\n🔍 Resultados de búsqueda para "${q}" (${res.length}):`);
      for (const r of res) {
        console.log(`   • ${r.file}:`);
        for (const m of r.matches) {
          console.log(`       - ${m}`);
        }
      }
      console.log('');
    } else if (sub === 'specs') {
      const specs = vault.listSpecs();
      console.log(`\n📋 Especificaciones Activas en Suno-Vault (${specs.length}):`);
      for (const spec of specs) {
        console.log(`   • [${(spec.status || '').padEnd(18)}] ${(spec.slug || '').padEnd(25)} : ${spec.title || ''}`);
      }
      console.log('');
    } else {
      console.log('Uso: engine vault <artists|specs|search> [args]');
    }
    break;
  }
  case 'glossary': {
    const sub = args[1];
    const rest = args.slice(2);
    const gm = new GlossaryManager(path.resolve(__dirname, '../..'));

    if (sub === 'scan') {
      const input = rest.join(' ');
      if (!input) {
        console.log('Uso: engine glossary scan "<texto o prompt con palabras>"');
        process.exit(1);
      }
      const { known, candidates } = gm.scanText(input);
      console.log(`\n🔍 Análisis de Tags contra el Glosario de Suno:`);
      console.log(`─────────────────────────────────────────────────────────────`);
      console.log(`✅ Tags Ya Registrados (${known.length}):`);
      for (const k of known) console.log(`   • ${k}`);
      console.log(`\n🆕 Tags Nuevos Detectados (${candidates.length}):`);
      for (const c of candidates) console.log(`   ✨ ${c}`);
      console.log(`─────────────────────────────────────────────────────────────\n`);
    } else if (sub === 'list') {
      const tags = gm.extractExistingTags();
      console.log(`\n📚 Inventario de Tags en el Glosario (${tags.length}):`);
      const byCat = new Map<string, string[]>();
      for (const t of tags) {
        if (!byCat.has(t.category)) byCat.set(t.category, []);
        byCat.get(t.category)!.push(t.tag);
      }
      for (const [cat, items] of byCat.entries()) {
        console.log(`\n[${cat}] (${items.length}):`);
        console.log(`   ${items.join(', ')}`);
      }
      console.log('\n');
    } else if (sub === 'add') {
      // Parsear flags tipo --tag "x" --category "y" ...
      const getFlag = (f: string): string => {
        const idx = rest.indexOf(f);
        return idx !== -1 && rest[idx + 1] ? rest[idx + 1] : '';
      };
      const tag = getFlag('--tag');
      const category = getFlag('--category') || '1. Bombos (Kicks)';
      const subcat = getFlag('--subcat') || 'Sonido sintetizado';
      const desc = getFlag('--desc') || 'Ataque percusivo';
      const subgenre = getFlag('--subgenre') || 'Club / Electronic';
      const example = getFlag('--example') || `${tag} in style box`;

      if (!tag) {
        console.log('Uso: engine glossary add --tag "<tag>" [--category "<cat>"] [--subcat "<subcat>"] [--desc "<desc>"] [--subgenre "<subgenre>"] [--example "<example>"]');
        process.exit(1);
      }

      const ok = gm.addEntry({
        category,
        tag,
        subcat,
        freqTexture: desc,
        subgenre,
        examplePrompt: example
      });

      if (ok) {
        console.log(`\n✅ Tag "${tag}" agregado exitosamente a la sección "${category}" del glosario.`);
      } else {
        console.log(`\n❌ Error al agregar el tag "${tag}".`);
      }
    } else {
      console.log('Uso: engine glossary <scan|list|add> [args]');
    }
    break;
  }
  case 'test': {
    const testsDir = path.join(__dirname, '../tests');
    try {
      execSync(`node --test "${testsDir}"/*.test.ts`, { stdio: 'inherit' });
    } catch (err: any) {
      process.exit(err.status || 1);
    }
    break;
  }
  case 'help':
  default:
    printHelp();
    break;
}
