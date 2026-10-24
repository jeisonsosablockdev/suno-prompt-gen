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
import { VaultGateway } from '../core/vault-gateway.ts';
import { injectTemplate, loadTemplateFile } from '../core/template-injector.ts';
import { evaluateSunoTrack } from '../evaluators/suno-rubric.ts';
import { generateDanceClubTrack } from '../strategies/dance-club.ts';
import { generatePopCommercialTrack } from '../strategies/pop-commercial.ts';
import { generateFusionTrack } from '../strategies/fusion.ts';
import { generateTagDensePrompt } from '../strategies/tag-dense.ts';

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

  compose <artist-slug> <ep-slug> <track-number> <track-slug> "<titulo>" [--strategy dance|pop|fusion]
     Genera una canción estructurada y auditada con metatags en la bóveda

  validate <archivo.md>
     Ejecuta la Rúbrica 4D de Suno en < 2ms (caracteres, metatags, filtro anti-artistas)

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
    const masterStyle = `${genre.toLowerCase()}, analog synthesizer, gated reverb drums, emotional vibe, 120 bpm`;
    const rendered = injectTemplate(tpl, {
      ep: {
        title,
        slug: epSlug,
        artistSlug,
        artistName: artistSlug.replace(/-/g, ' ').toUpperCase(),
        genre,
        masterStylePrompt: masterStyle,
        masterStylePromptLength: masterStyle.length,
        totalTracks: 3,
        conceptNarrative: concept,
        narrativeArc: `1. Apertura: Inmersión en ${concept}\n2. Nudo: Tensión rítmica\n3. Cierre: Resolución melódica`,
        tracklistMarkdownTable: '| 01 | Pista 1 | 120 BPM | [[01 - pista-1]] |\n| 02 | Pista 2 | 124 BPM | [[02 - pista-2]] |',
        baseBpm: '120 - 124 BPM',
        mixDirectives: 'Mezcla amplia estéreo, compresión sidechain sutil',
        instrumentPalette: 'Moog bass, Roland Juno pads, LinnDrum kit',
      },
      date: new Date().toISOString().split('T')[0],
    });

    const target = vault.saveEPNote(artistSlug, epSlug, rendered);
    console.log(`\n✅ EP creado exitosamente:\n   📄 ${target}\n`);
    break;
  }

  case 'compose': {
    const artistSlug = vault.sanitizeSlug(args[1]);
    const epSlug = vault.sanitizeSlug(args[2]);
    const trackNum = parseInt(args[3] || '1', 10);
    const trackSlug = vault.sanitizeSlug(args[4] || 'nueva-cancion');
    const title = args[5] || 'Nueva Canción';

    const stratArgIdx = args.indexOf('--strategy');
    const strategy = stratArgIdx !== -1 ? args[stratArgIdx + 1] : 'dance';

    if (!artistSlug || !epSlug || isNaN(trackNum)) {
      console.log('Uso: engine compose <artist-slug> <ep-slug> <track-number> <track-slug> "<titulo>" [--strategy dance|pop|fusion]');
      process.exit(1);
    }

    let generated: { stylePrompt: string; lyricsWithMetatags: string; bpm: number };
    if (strategy === 'pop') {
      generated = generatePopCommercialTrack({
        theme: title,
        hookLine: `Esta es la señal de ${title}`,
      });
    } else if (strategy === 'fusion') {
      generated = generateFusionTrack({
        styleA: 'flamenco',
        styleB: 'dark synthwave',
        targetBpm: 124,
        theme: title,
        hookLine: `Bailando en el borde de ${title}`,
      });
    } else {
      generated = generateDanceClubTrack({
        subgenre: 'melodic synth dance',
        theme: title,
        bpm: 126,
        hookLine: `Feel the pulse of ${title}`,
      });
    }

    // Validación automática con Rúbrica 4D
    const audit = evaluateSunoTrack({
      stylePrompt: generated.stylePrompt,
      lyricsWithMetatags: generated.lyricsWithMetatags,
    });

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
        bpm: generated.bpm,
        musicalKey: 'D minor',
        sunoVersion: 'v3.5 / v4',
        stylePrompt: generated.stylePrompt,
        stylePromptLength: generated.stylePrompt.length,
        lyricsWithMetatags: generated.lyricsWithMetatags,
        vibeDescription: `Pista compuesta con estrategia "${strategy}". Puntaje de calidad: ${audit.totalScore}/10.`,
        structureType: strategy.toUpperCase(),
        vocalEffects: 'Reverb estéreo, compresión al frente',
        dynamicDirectives: 'Subidas marcadas con caja y liberaciones potentes',
        altPromptA: `${generated.stylePrompt}, fast tempo, energetic`,
        altPromptB: `${generated.stylePrompt}, intimate acoustic elements`,
        status: audit.passed ? 'draft' : 'needs_revision',
        audioUrl: '',
        take1Url: '(Pendiente de generar en Suno)',
        take1Rating: '—',
        take1Notes: 'Generación inicial creada con motor determinista',
      },
      date: new Date().toISOString().split('T')[0],
    });

    const target = vault.saveSongTrackNote(artistSlug, epSlug, trackNum, trackSlug, rendered);
    console.log(`\n🎶 Canción compuesta exitosamente (Estrategia: ${strategy}):\n   📄 ${target}`);
    console.log(`   📊 Evaluación Rúbrica 4D: ${audit.totalScore}/10 (${audit.passed ? 'APROBADA' : 'REQUIERE AJUSTES'})`);
    console.log(`   🔤 Caracteres Style Prompt: ${generated.stylePrompt.length} / 200\n`);
    break;
  }

  case 'validate': {
    const targetFile = args[1];
    if (!targetFile || !fs.existsSync(targetFile)) {
      console.log('Uso: engine validate <ruta-archivo.md>');
      process.exit(1);
    }
    const content = fs.readFileSync(targetFile, 'utf8');
    const styleMatch = content.match(/## 1\. Suno Style of Music Prompt[\s\S]*?```text\r?\n([\s\S]*?)\r?\n```/);
    const lyricsMatch = content.match(/## 2\. Letra y Estructura con Metatags[\s\S]*?```text\r?\n([\s\S]*?)\r?\n```/);

    const stylePrompt = styleMatch ? styleMatch[1].trim() : '';
    const lyricsWithMetatags = lyricsMatch ? lyricsMatch[1].trim() : '';

    const audit = evaluateSunoTrack({ stylePrompt, lyricsWithMetatags });

    console.log(`\n═════════════════════════════════════════════════════════════════════`);
    console.log(`📋 RESULTADO DE AUDITORÍA SUNO: ${targetFile}`);
    console.log(`═════════════════════════════════════════════════════════════════════`);
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
