import fs from 'node:fs';
import path from 'node:path';

export interface GlossaryEntry {
  category: string; // e.g., '1. Bombos (Kicks)', '5. Sintetizadores de Bajo (Basslines & Subs)'
  tag: string; // canonical tag, e.g., 'acid squelch'
  subcat: string; // subcategory / timbre description
  freqTexture: string; // frequency & texture
  subgenre: string; // optimal subgenres
  examplePrompt: string; // style prompt example
}

export interface ExistingTagInfo {
  tag: string;
  category: string;
  rawLine: string;
}

export class GlossaryManager {
  private baseDir: string;
  private glossaryRelativePaths: string[] = [
    '.agents/skills/suno-prompter/references/dance-techno-house-sound-glossary.md',
    '.agents/skills/suno-style-catalog/references/dance-techno-house-sound-glossary.md'
  ];

  constructor(workspaceDir?: string) {
    this.baseDir = workspaceDir || process.cwd();
  }

  public getGlossaryFiles(): string[] {
    return this.glossaryRelativePaths.map(p => path.resolve(this.baseDir, p));
  }

  /**
   * Lee el contenido del glosario principal.
   */
  public loadMainGlossaryContent(): string {
    const files = this.getGlossaryFiles();
    for (const f of files) {
      if (fs.existsSync(f)) {
        return fs.readFileSync(f, 'utf8');
      }
    }
    return '';
  }

  /**
   * Extrae todos los tags existentes del archivo markdown.
   */
  public extractExistingTags(): ExistingTagInfo[] {
    const content = this.loadMainGlossaryContent();
    if (!content) return [];

    const lines = content.split('\n');
    let currentCategory = 'General';
    const tags: ExistingTagInfo[] = [];

    for (const line of lines) {
      const headingMatch = line.match(/^##\s+(\d+\.\s+[^(\n]+)/);
      if (headingMatch) {
        currentCategory = headingMatch[1].trim();
        continue;
      }

      // Buscar celdas de tabla con tags en backticks: | `tag` / `alt` | ...
      if (line.startsWith('|') && line.includes('`')) {
        const firstCellMatch = line.match(/^\|\s*([^|]+)\|/);
        if (firstCellMatch) {
          const cellContent = firstCellMatch[1];
          const backtickTags = [...cellContent.matchAll(/`([^`]+)`/g)].map(m => m[1].toLowerCase().trim());
          for (const t of backtickTags) {
            tags.push({
              tag: t,
              category: currentCategory,
              rawLine: line
            });
          }
        }
      }
    }

    // 2. Extraer directivas vocales
    const vocalFile = path.resolve(this.baseDir, '.agents/skills/suno-songwriting/references/vocal-delivery-tags.md');
    if (fs.existsSync(vocalFile)) {
      const vContent = fs.readFileSync(vocalFile, 'utf8').replace(/```[\s\S]*?```/g, '');
      const matches = vContent.matchAll(/`([^`]+)`/g);
      for (const m of matches) {
        m[1].split('/').map(s => s.trim().toLowerCase()).forEach(t => {
          if (t.length > 2) tags.push({ tag: t, category: 'Vocal Delivery', rawLine: m[0] });
        });
      }
    }

    // 3. Extraer exclusiones negativas
    const excludeFile = path.resolve(this.baseDir, '.agents/skills/suno-prompter/references/exclude-styles-database.md');
    if (fs.existsSync(excludeFile)) {
      const eContent = fs.readFileSync(excludeFile, 'utf8');
      const codeBlocks = eContent.matchAll(/```(?:text)?\n([\s\S]*?)```/g);
      for (const b of codeBlocks) {
        b[1].split(/[,;\n]+/).map(s => s.trim().toLowerCase()).filter(s => s.length > 2).forEach(t => {
          tags.push({ tag: t, category: 'Negative Exclusion', rawLine: t });
        });
      }
    }

    // 4. Extraer géneros canónicos
    const genreFile = path.resolve(this.baseDir, '.agents/skills/suno-style-catalog/references/genres-db.md');
    if (fs.existsSync(genreFile)) {
      const gContent = fs.readFileSync(genreFile, 'utf8');
      const matches = gContent.matchAll(/\|\s*\*\*([^*]+)\*\*\s*\|/g);
      for (const m of matches) {
        m[1].split('/').map(s => s.trim().toLowerCase()).forEach(t => {
          if (t.length > 2) tags.push({ tag: t, category: 'Genre', rawLine: m[0] });
        });
      }
    }

    return tags;
  }

  /**
   * Escanea un texto o lista de palabras y determina cuáles son conocidas y cuáles nuevas.
   */
  public scanText(input: string): { known: string[]; candidates: string[] } {
    const existing = this.extractExistingTags();
    const existingTagSet = new Set(existing.map(e => e.tag.toLowerCase()));

    // Tokenizar palabras o frases entre comillas/comas/pipes
    const rawTokens = input
      .split(/[,;\n|]+/)
      .map(t => t.trim().toLowerCase().replace(/^["'`\[\(\-‑\s]+|["'`\]\)\s]+$/g, ''))
      .filter(t => t.length > 2);

    const known: string[] = [];
    const candidates: string[] = [];

    for (const token of rawTokens) {
      // Parámetros estándar de prompt en Suno V6 (BPM, Era, Tonalidad básica)
      if (/\b\d+\s*bpm\b/i.test(token) || /\b\d{4}s\s*era\b/i.test(token) || /^[a-g][#b]?\s*(minor|major)?$/i.test(token)) {
        if (!known.includes(token)) known.push(token);
        continue;
      }

      let isKnown = false;
      const tokenWords = token.split(/\s+/).filter(w => w.length > 2);

      for (const knownTag of existingTagSet) {
        if (token === knownTag || token.includes(knownTag) || knownTag.includes(token)) {
          isKnown = true;
          break;
        }

        // Reconocimiento por coincidencia de sub-frase (ej. "acid bassline" en "dark acid bassline")
        const knownWords = knownTag.split(/\s+/).filter(w => w.length > 2);
        if (knownWords.length >= 2) {
          const matchCount = knownWords.filter(kw => tokenWords.includes(kw)).length;
          if (matchCount >= 2 && matchCount / knownWords.length >= 0.6) {
            isKnown = true;
            break;
          }
        }
      }

      if (isKnown) {
        if (!known.includes(token)) known.push(token);
      } else {
        if (!candidates.includes(token)) candidates.push(token);
      }
    }

    return { known, candidates };
  }

  /**
   * Agrega una nueva entrada a todas las copias del glosario en el repositorio.
   */
  public addEntry(entry: GlossaryEntry): boolean {
    const files = this.getGlossaryFiles();
    let updatedAny = false;

    for (const file of files) {
      if (!fs.existsSync(file)) continue;

      let content = fs.readFileSync(file, 'utf8');

      // Buscar la sección correspondiente (ej. '## 1. Bombos' o '## 5. Sintetizadores de Bajo')
      const catRegex = new RegExp(`(##\\s+${entry.category.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?\\|---[\\s\\S]*?\\n)`, 'i');
      const tableMatch = content.match(catRegex);

      const newRow = `| \`${entry.tag}\` | ${entry.subcat} | ${entry.freqTexture} | ${entry.subgenre} | \`${entry.examplePrompt}\` |\n`;

      if (tableMatch) {
        // Insertar después de la cabecera de la tabla
        const insertPos = content.indexOf(tableMatch[1]) + tableMatch[1].length;
        content = content.slice(0, insertPos) + newRow + content.slice(insertPos);
      } else {
        // Si no encuentra la categoría exacta, añadir una nueva sección al final
        content += `\n\n## ${entry.category}\n\n| Tag Canónico para Suno | Subcategoría / Timbre | Frecuencia y Textura | Subgénero Óptimo | Ejemplo de Prompt en Style Box |\n|---|---|---|---|---|\n${newRow}`;
      }

      fs.writeFileSync(file, content, 'utf8');
      updatedAny = true;
    }

    return updatedAny;
  }
}
