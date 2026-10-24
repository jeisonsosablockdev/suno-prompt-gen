#!/usr/bin/env node

/**
 * Suno-Engine Unified CLI (TypeScript Domain Architecture)
 * Single, type-safe entrypoint for SDD, Vault, Prompts, and Test domains.
 *
 * Usage:
 *   node Suno-Engine/bin/engine.ts <command> [args]
 *
 * @spec SPEC-SUNO-001 (Suno Prompt Gen Clean Architecture)
 */

import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { TaskOrchestrator } from '../core/orchestrator.ts';
import { VaultGateway } from '../core/vault-gateway.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const orchestrator = new TaskOrchestrator();
const vault: VaultGateway = orchestrator.getVault();

const args = process.argv.slice(2);
const command = args[0] || 'help';

function printHelp() {
  console.log(`
╔═══════════════════════════════════════════════════════════════════╗
║               🎵  SUNO-ENGINE CLI RUNNER  v1.0                   ║
║         Harness Modular y SDD para Prompts de SUNO AI             ║
╚═══════════════════════════════════════════════════════════════════╝

Dominios Principales:
  1. sdd / task <init|preview|approve-spec|evaluate|review-deliverable|approve-deliverable|list>
     Orquestador del ciclo de vida SDD con doble guardrail HITL y sesiones de tareas.

  2. vault <specs|search> [args]
     Operaciones de la Bóveda Obsidian (Suno-Vault): especificaciones activas y búsqueda.

  3. promote <feature [feat/nombre]|main> [--push]
     Promoción jerárquica con guardrails deterministas de Git.

  4. test [unit|all]
     Ejecuta las suites de pruebas en TypeScript puro sin transpilación.
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
    if (sub === 'search') {
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
      console.log('Uso: engine vault <specs|search> [args]');
    }
    break;
  }
  case 'test': {
    const sub = args[1] || 'unit';
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
