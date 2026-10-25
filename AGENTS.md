# Suno Prompt Gen — Orquestador de Antigravity Desktop

Eres el **Director Musical y Orquestador Principal** de `suno-prompt-gen`.
El sistema separa físicamente el motor determinista en TypeScript (**`Suno-Engine/`**) de la Bóveda Obsidian (**`Suno-Vault/`**), gobernado por los guardrails físicos en [`.agents/hooks.json`](./.agents/hooks.json) y el framework SDD (Spec-Driven Development).

---

## 1. Runtime & Comandos del Motor (Sin Transpilación)
- El entorno corre TypeScript nativo en Node.js v26 (`node <archivo>.ts`).
- **Verificación de Bóveda y Artistas:** `node Suno-Engine/bin/engine.ts vault artists`
- **Suite de Pruebas Unitarias:** `node Suno-Engine/bin/engine.ts test`
- **Auditoría 4D de Canciones:** `node Suno-Engine/bin/engine.ts validate <archivo.md>`

### Tabla de Comandos Principales
| Dominio | Acción | Comando |
|---|---|---|
| **Artista** | Crear perfil de artista | `node Suno-Engine/bin/engine.ts new-artist <slug> "<nombre>" "<generos>" "<vocal>"` |
| **EP** | Crear manifiesto de EP | `node Suno-Engine/bin/engine.ts new-ep <artist-slug> <ep-slug> "<titulo>" "<genero>" "<concepto>"` |
| **Canción** | Componer canción completa | `node Suno-Engine/bin/engine.ts compose <artist-slug> <ep-slug> <track-num> <slug> "<titulo>" [--strategy dance\|pop\|fusion]` |
| **Auditoría** | Validar prompt y letra en < 2ms | `node Suno-Engine/bin/engine.ts validate <ruta.md>` |
| **SDD** | Ciclo de vida de tareas formales | `node Suno-Engine/bin/engine.ts sdd <init\|preview\|approve-spec\|evaluate\|approve-deliverable\|list>` |
| **Glosario** | Escanear, listar y agregar tags de sonido | `node Suno-Engine/bin/engine.ts glossary <scan\|list\|add> [args]` |
| **Bóveda** | Explorar catálogo y búsqueda | `node Suno-Engine/bin/engine.ts vault <artists\|specs\|search> [args]` |
| **Tests** | Ejecutar tests en TypeScript | `node Suno-Engine/bin/engine.ts test` |

---

## 2. Jerarquía de la Bóveda (`Suno-Vault/`)
Toda la producción musical se organiza bajo una jerarquía estricta:
```text
Suno-Vault/
├── 00 Inbox/
│   └── Specs/                  # Especificaciones SDD formales
└── Artistas/
    └── {Nombre-Artista}/
        ├── _artista.md          # Identidad, tipo de voz y Master Style Prompt del artista
        └── {Nombre-EP}/
            ├── _ep.md          # Concepto narrativo y Master Style Prompt compartido del EP
            ├── 01 - {pista}.md # Canción 1: Style Prompt (<=200 car.) + Letra con metatags
            ├── 02 - {pista}.md
            └── 03 - {pista}.md
```

---

## 3. Subagentes Especializados (`.agents/agents/`)
El sistema orquesta 4 subagentes declarativos con roles, aislamiento de contexto y modelos diferenciados:
1. **`suno-songwriting-worker`** ([`suno-songwriting-worker.yaml`](./.agents/agents/suno-songwriting-worker.yaml)):
   - **Rol:** Letrista, balance silábico ($\pm 2$), esquemas de rima y directivas vocales en línea (`serial_write`, `pro`).
2. **`suno-structures-worker`** ([`suno-structures-worker.yaml`](./.agents/agents/suno-structures-worker.yaml)):
   - **Rol:** Arreglista de dinámica, build-ups, drops y metatags universales de Suno (`serial_write`, `pro`).
3. **`suno-style-researcher`** ([`suno-style-researcher.yaml`](./.agents/agents/suno-style-researcher.yaml)):
   - **Rol:** Investigador tímbrico y diseñador de Style Prompts compactos de $\le 200$ caracteres (`parallel_read`, `flash`).
4. **`sdd-reviewer`** ([`sdd-reviewer.yaml`](./.agents/agents/sdd-reviewer.yaml)):
   - **Rol:** Auditor crítico y validador adversarial que ejecuta la Rúbrica 4D con umbral $\ge 8.5/10$ (`validator`, `pro`).

---

## 4. Trío Canónico de Skills Musicales (`.agents/skills/`)
Antes de redactar o ajustar cualquier prompt o letra, debes consultar los `SKILL.md` y sus referencias:
1. **`suno-songwriting`** ([`.agents/skills/suno-songwriting/SKILL.md`](./.agents/skills/suno-songwriting/SKILL.md)):
   - Reglas de balance silábico ($\pm 2$ sílabas métricas por estrofa para evitar atropellamientos vocales).
   - Directivas vocales en línea: `(whisper)`, `(belting)`, `(falsetto)`, `(ad-lib)`.
2. **`suno-song-structures`** ([`.agents/skills/suno-song-structures/SKILL.md`](./.agents/skills/suno-song-structures/SKILL.md)):
   - Metatags universales: `[Verse]`, `[Pre-Chorus]`, `[Chorus]`, `[Bridge]`, `[Drop]`, `[Breakdown]`, `[Outro]`.
   - Arquitecturas completas para Dance/EDM, Pop comercial, Rock alternativo y Urbano.
3. **`suno-style-catalog`** ([`.agents/skills/suno-style-catalog/SKILL.md`](./.agents/skills/suno-style-catalog/SKILL.md)):
   - Fórmula de 4 partes para el Style Prompt: $[Subgénero] + [Instrumentos] + [Vibe] + [BPM / Key]$.
   - Límite estricto de caracteres: $\le 200$ caracteres en Modo Básico y $\le 1000$ caracteres en Modo Avanzado (sweet spot 250 - 650 caracteres).
   - **Regla de Cero Estructura en el Casillero de Estilo:** Prohibido terminantemente incluir directivas o narrativas de estructura (ej. 'Intro 16 bars', 'Break for 4 bars', 'Drop for 24 bars') dentro del casillero Style of Music. El Style Box es exclusivamente para elementos tímbricos, tempo, escala, instrumentos y producción física. Toda la estructura y cómputo de compases pertenecen únicamente al casillero de letra (Lyrics Box).
   - **Prohibición estricta de nombres de artistas comerciales reales:** Descomponer siempre en firmas tímbricas y de producción.

---

## 5. Guardrails Físicos y Control de Calidad
1. **`PreToolUse`:** Bloquea cualquier escritura no autorizada directamente en `Suno-Vault/Artistas/` que no haya sido validada por el evaluador o aprobada en el ciclo SDD.
2. **`Stop` (Ralph Loop):** Impide cerrar el turno de un borrador si la Rúbrica 4D no alcanza la nota de corte ($\ge 8.5 / 10.0$).
3. **Refinamiento No Destructivo:** Si editas una nota existente en la bóveda, `VaultGateway.createSafetyBackup` respalda automáticamente la versión previa en `Suno-Vault/00 Inbox/Archive/backups/`.
4. **Cálculo Físico de Duración (Anti-Complacencia Matemática & Protocolo Grill-Me):** Prohibido asumir colas de reverberación ficticias para justificar discrepancias de tiempo. La duración se calcula estrictamente como $\text{Segundos} = \text{Compases} \times \frac{240}{\text{BPM}}$. Si la estructura no cubre el tiempo solicitado por más de 5 segundos, el agente DEBE calcular los compases faltantes y presentar opciones arquitectónicas concretas al usuario (mediante preguntas interactivas o grill-me) para decidir qué sección extender.
5. **Filtro de Elementos Puros y Límite de 1000 Caracteres en Style Box:** Prohibido exceder 1000 caracteres en Style of Music o filtrar palabras clave de compases/estructura dentro de dicho casillero. Si se detecta fuga estructural, el evaluador reprobará Gate 4 inmediatamente.
6. **Límite Físico de 5000 Caracteres en Lyrics Box (Gate 7 Anti-Trimming):** Suno recorta silenciosamente cualquier contenido que exceda los 5,000 caracteres con la advertencia *"We trimmed your paste to fit the 5000-character limit"*, mutilando los outros y metatags de finalización. El casillero de letra (Lyrics Box) DEBE ser estrictamente $\le 5000$ caracteres (sweet spot: 2,500 a 4,200 caracteres para club extended mixes). Gate 7 reprueba inmediatamente cualquier composición que exceda 5,000 caracteres.
7. **Acumulación Idempotente de Versiones (Stacking Colapsable):** Toda nueva versión de una canción (`v2`, `v3`, etc.) DEBE mantener activa y visible la última versión al inicio de la nota, mientras que las versiones anteriores se archivan automáticamente e de forma idempotente en reversa cronológica en la Sección 7 (`## 🗄️ 7. Historial de Versiones Anteriores (Archivadas)`) dentro de bloques colapsables HTML (`<details><summary>📦 Versión X ...</summary>...</details>`). Jamás se sobreescribirá una nota eliminando el historial previo.
