import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createInitialContext,
  startSpecReview,
  approveSpec,
  startTaskLoop,
  evaluateCycle,
  approveDeliverable,
} from '../core/state-machine.ts';
import { VaultGateway } from '../core/vault-gateway.ts';
import { injectTemplate, canonicalJson, sha256Hex } from '../core/template-injector.ts';

test('TaskStateMachine: ciclo de vida SDD determinista con doble guardrail', () => {
  const initial = createInitialContext('neon-dusk-ep1', 'Primer EP Synthwave');
  assert.equal(initial.state, 'initialized');

  const review = startSpecReview(initial);
  assert.equal(review.success, true);
  assert.equal(review.context.state, 'spec_review');

  const approved = approveSpec(review.context);
  assert.equal(approved.success, true);
  assert.equal(approved.context.state, 'spec_approved');

  const loop = startTaskLoop(approved.context);
  assert.equal(loop.success, true);
  assert.equal(loop.context.state, 'task_loop');

  // Evaluación con puntaje bajo (< 8.5)
  const evalLow = evaluateCycle(loop.context, 7.8);
  assert.equal(evalLow.success, true);
  assert.equal(evalLow.context.state, 'draft_optimizing');
  assert.equal(evalLow.context.currentCycle, 1);

  // Evaluación con puntaje alto (>= 8.5)
  const evalHigh = evaluateCycle(evalLow.context, 8.8);
  assert.equal(evalHigh.success, true);
  assert.equal(evalHigh.context.state, 'deliverable_review');
  assert.equal(evalHigh.context.currentCycle, 2);

  // Aprobación final HITL-2
  const final = approveDeliverable(evalHigh.context);
  assert.equal(final.success, true);
  assert.equal(final.context.state, 'completed');
});

test('VaultGateway: saneamiento de slugs y resolución de rutas', () => {
  const gateway = new VaultGateway();
  assert.equal(gateway.sanitizeSlug('Neon Dusk / EP #1!'), 'neon-dusk-ep-1');

  const paths = gateway.getSpecPaths('neon-dusk');
  assert.equal(paths.slug, 'neon-dusk');
  assert.equal(paths.specId, 'SPEC-NEON-DUSK');
  assert.ok(paths.specJsonPath.includes('00 Inbox/Specs/neon-dusk.spec.json'));
});

test('TemplateInjector: inyección determinista de variables y hashing canónico', () => {
  const template = 'Track: {{track.title}} ({{track.bpm}} BPM) - {{track.mood}}';
  const context = {
    track: {
      title: 'Neon Nights',
      bpm: 120,
      mood: 'Melancholic',
    },
  };

  const rendered = injectTemplate(template, context);
  assert.equal(rendered, 'Track: Neon Nights (120 BPM) - Melancholic');

  const jsonA = canonicalJson({ b: 2, a: 1 });
  const jsonB = canonicalJson({ a: 1, b: 2 });
  assert.equal(jsonA, jsonB);
  assert.equal(sha256Hex(jsonA), sha256Hex(jsonB));
});
