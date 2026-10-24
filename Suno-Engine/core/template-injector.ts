import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type {
  AnimeProjectBible,
  CharacterSpec,
  ChapterSpec,
  LocationSpec,
  ShotSpec,
} from "./contracts.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const DEFAULT_TEMPLATES_DIR = path.resolve(
  __dirname,
  "../templates/default",
);

/**
 * Serializa cualquier valor de forma canónica (ordenando las llaves recursivamente)
 * para garantizar que el hash SHA-256 sea 100% determinista e idempotente.
 */
export function canonicalJson(value: unknown): string {
  if (value === null || typeof value !== "object") {
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    return "[" + value.map((item) => canonicalJson(item)).join(",") + "]";
  }
  const record = value as Record<string, unknown>;
  const sortedKeys = Object.keys(record)
    .filter((k) => record[k] !== undefined)
    .sort();
  const entries = sortedKeys.map(
    (k) => `${JSON.stringify(k)}:${canonicalJson(record[k])}`,
  );
  return "{" + entries.join(",") + "}";
}

export function sha256Hex(content: string): string {
  return createHash("sha256").update(content, "utf8").digest("hex");
}

/**
 * Calcula el hash SHA-256 combinado de todos los archivos `.tpl.md` en el directorio de plantillas.
 * Si el usuario edita cualquier plantilla, este hash cambia y fuerza la recompilación automática.
 */
export function computeTemplatesHash(
  templatesDir: string = DEFAULT_TEMPLATES_DIR,
): string {
  const files: string[] = [];

  function walk(dir: string) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".tpl.md")) {
        files.push(fullPath);
      }
    }
  }

  walk(templatesDir);
  files.sort();

  const combined = files
    .map((filePath) => {
      const rel = path.relative(templatesDir, filePath).replace(/\\/g, "/");
      const raw = fs.readFileSync(filePath, "utf8").trim();
      return `${rel}=>${raw}`;
    })
    .join("\n---\n");

  return sha256Hex(combined);
}

/**
 * Resuelve rutas tipo `character.name` o `project.styleLockTokens` dentro de un contexto.
 */
function resolvePath(context: Record<string, unknown>, dotPath: string): unknown {
  return dotPath.split(".").reduce<unknown>((acc, key) => {
    if (acc !== null && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, context);
}

/**
 * Inyector determinista de plantillas `{{variable.subprop}}`.
 * Si una variable no existe o está vacía, conserva el token `{{variable}}` para que
 * `lexical-filter.ts` y `anime-5d-rubric.ts` lo detecten y reporten exactamente qué falta.
 */
export function injectTemplate(
  templateContent: string,
  context: Record<string, unknown>,
): string {
  return templateContent
    .trim()
    .replace(/\{\{\s*([a-zA-Z0-9_.-]+)\s*\}\}/g, (fullMatch, varPath: string) => {
      const val = resolvePath(context, varPath);
      if (val === undefined || val === null) {
        return fullMatch;
      }
      const str = String(val).trim();
      return str.length > 0 ? str : fullMatch;
    });
}

export function loadTemplateFile(
  relativePath: string,
  templatesDir: string = DEFAULT_TEMPLATES_DIR,
): string {
  const fullPath = path.join(templatesDir, relativePath);
  return fs.readFileSync(fullPath, "utf8");
}

/**
 * Compila de forma 100% idempotente todos los prompts de un proyecto usando los archivos
 * de `Anime-Engine/templates/default/prompts/*.tpl.md`.
 */
export function compileProjectWithTemplates(
  project: AnimeProjectBible,
  templatesDir: string = DEFAULT_TEMPLATES_DIR,
): AnimeProjectBible {
  const charMasterTpl = loadTemplateFile(
    "prompts/nanobanana-character-master.tpl.md",
    templatesDir,
  );
  const charEditTpl = loadTemplateFile(
    "prompts/nanobanana-editing-pipeline.tpl.md",
    templatesDir,
  );
  const locationTpl = loadTemplateFile(
    "prompts/nanobanana-location.tpl.md",
    templatesDir,
  );
  const storyboardTpl = loadTemplateFile(
    "prompts/nanobanana-storyboard-9grid.tpl.md",
    templatesDir,
  );
  const keyframeTpl = loadTemplateFile(
    "prompts/nanobanana-keyframe.tpl.md",
    templatesDir,
  );
  const seedanceTpl = loadTemplateFile(
    "prompts/seedance-motion.tpl.md",
    templatesDir,
  );
  const klingTpl = loadTemplateFile(
    "prompts/kling-camera.tpl.md",
    templatesDir,
  );

  const charMap = new Map<string, CharacterSpec>();
  const locMap = new Map<string, LocationSpec>();

  const compiledCharacters: CharacterSpec[] = project.characters.map((char) => {
    const compiledMasterPrompt = injectTemplate(charMasterTpl, {
      character: char,
      project,
    });
    const compiledEditingPipeline = injectTemplate(charEditTpl, {
      character: char,
      project,
    });
    const updated: CharacterSpec = {
      ...char,
      compiledMasterPrompt,
      compiledEditingPipeline,
    };
    charMap.set(updated.id, updated);
    return updated;
  });

  const compiledLocations: LocationSpec[] = project.locations.map((location) => {
    const compiledLocationPrompt = injectTemplate(locationTpl, {
      location,
      project,
    });
    const updated: LocationSpec = {
      ...location,
      compiledLocationPrompt,
    };
    locMap.set(updated.id, updated);
    return updated;
  });

  const compiledChapters: ChapterSpec[] = project.chapters.map((chapter) => {
    const mainChar = charMap.get(chapter.storyboard9Grid.mainCharacterId);
    const mainLoc = locMap.get(chapter.storyboard9Grid.locationId);

    const compiledStoryboardGrid = injectTemplate(storyboardTpl, {
      project,
      chapter: {
        ...chapter.storyboard9Grid,
        mainCharacterName: mainChar?.name ?? chapter.storyboard9Grid.mainCharacterId,
        mainCharacterIdentityLock: mainChar?.identityLockTokens ?? "",
        pronounSubject: mainChar?.pronounSubject ?? "they",
        locationName: mainLoc?.name ?? chapter.storyboard9Grid.locationId,
        locationLockTokens: mainLoc?.locationLockTokens ?? "",
      },
    });

    const compiledShots: ShotSpec[] = chapter.shots.map((shot) => {
      const presentChars = shot.characterIds
        .map((id) => charMap.get(id))
        .filter((c): c is CharacterSpec => Boolean(c));
      const shotLocation = locMap.get(shot.locationId);

      const charactersIdentityBlock =
        presentChars.length > 0
          ? presentChars
              .map((c) => `[${c.name}: ${c.identityLockTokens}]`)
              .join(" and ")
          : "Environment focus (no characters)";

      const characterNames =
        presentChars.length > 0
          ? presentChars.map((c) => c.name).join(" & ")
          : "Environment";

      const shotContext = {
        ...shot,
        charactersIdentityBlock,
        characterNames,
        locationName: shotLocation?.name ?? shot.locationId,
        locationLockTokens: shotLocation?.locationLockTokens ?? "",
      };

      const nanoBananaKeyframePrompt = injectTemplate(keyframeTpl, {
        shot: shotContext,
        project,
      });

      const seedanceMotionPrompt = injectTemplate(seedanceTpl, {
        shot: shotContext,
        project,
      });

      const klingCameraMotionPrompt = injectTemplate(klingTpl, {
        shot: shotContext,
        project,
      });

      return {
        ...shot,
        nanoBananaKeyframePrompt,
        seedanceMotionPrompt,
        klingCameraMotionPrompt,
      };
    });

    return {
      ...chapter,
      compiledStoryboardGrid,
      shots: compiledShots,
    };
  });

  return {
    ...project,
    characters: compiledCharacters,
    locations: compiledLocations,
    chapters: compiledChapters,
  };
}
