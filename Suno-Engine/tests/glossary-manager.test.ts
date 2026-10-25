import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { GlossaryManager } from '../core/glossary-manager.ts';

describe('GlossaryManager: Gestión e Ingestión Interactiva de Tags de Sonido', () => {
  it('extrae tags existentes desde el glosario markdown', () => {
    const manager = new GlossaryManager();
    const tags = manager.extractExistingTags();
    
    assert.ok(tags.length > 20, 'Debe haber más de 20 tags en el glosario');
    
    const tagNames = tags.map(t => t.tag);
    assert.ok(tagNames.includes('909 kick'), 'Debe incluir 909 kick');
    assert.ok(tagNames.includes('industrial rumble kick'), 'Debe incluir industrial rumble kick');
    assert.ok(tagNames.includes('303 acid bassline'), 'Debe incluir 303 acid bassline');
    assert.ok(tagNames.includes('reese bass'), 'Debe incluir reese bass');
  });

  it('detecta correctamente palabras conocidas vs palabras nuevas candidatas', () => {
    const manager = new GlossaryManager();
    const input = '909 kick, dark acid bassline, hyperpop laser snare, gabber dist kick';
    const { known, candidates } = manager.scanText(input);

    assert.ok(known.includes('909 kick'), '909 kick debe ser conocida');
    assert.ok(known.includes('dark acid bassline'), 'acid bassline debe marcarse como conocida');
    assert.ok(candidates.includes('hyperpop laser snare'), 'hyperpop laser snare debe ser candidata nueva');
    assert.ok(candidates.includes('gabber dist kick'), 'gabber dist kick debe ser candidata nueva');
  });
});
