---
spec_id: "SPEC-{{SLUG}}"
title: "{{TITLE}}"
target_vault_folder: "Suno-Vault/{{CATEGORY_FOLDER}}/"
target_file: "Suno-Vault/{{CATEGORY_FOLDER}}/{{FILENAME}}.md"
subagents_involved:
  - "{{PRIMARY_AGENT}}"
  - "{{SECONDARY_AGENT}}"
status: spec_review # spec_review | spec_approved | draft_optimizing | deliverable_review | completed | frozen_for_arbitration
created_at: "{{DATE}}"
updated_at: "{{DATE}}"
hitl_checkpoints:
  hitl_1_spec_approval:
    status: pending # pending | refining | approved
    approved_at: null
    user_feedback: []
  hitl_2_deliverable_approval:
    status: pending # pending | refining | approved
    approved_at: null
    user_feedback: []
evaluation:
  target_score: 8.5
  scale_max: 9.0
  max_cycles: 5
  current_cycle: 0
  final_score: null
  criticism_history: []
---

# Spec: {{TITLE}}

> [!NOTE]
> **Resumen Ejecutivo:** {{EXECUTIVE_SUMMARY}}
> Este artefacto define de manera formal e inmutable los requisitos, el destino canónico en `Suno-Vault/`, los subagentes responsables y las restricciones de calidad para el entregable antes de iniciar cualquier redacción o desarrollo.
> Cuenta con dos puntos de parada humana obligatorios: **HITL-1 (Aprobación del Spec)** y **HITL-2 (Aprobación del Entregable)**.

---

## 1. Destino Canónico en el Vault
- **Carpeta de Destino:** `Suno-Vault/{{CATEGORY_FOLDER}}/`
- **Archivo de Salida:** `Suno-Vault/{{CATEGORY_FOLDER}}/{{FILENAME}}.md`
- **Taxonomía:** Cumple con la estructura numerada estándar de `Suno-Vault/` (00 a 10).
- **Regla de Promoción:** El documento final solo se escribirá en esta ruta cuando el Agente Revisor otorgue una calificación $\ge 8.5 / 9.0$ **Y** el usuario otorgue su confirmación formal en el guardrail **HITL-2** (`approve-deliverable`).

---

## 2. Sub-Agentes Asignados y Roles
| Sub-Agente | Rol Asignado | Responsabilidad Principal |
| :--- | :--- | :--- |
| `{{PRIMARY_AGENT}}` | Creador / Editor Líder | Redacción inicial del borrador técnico/estratégico y subsanación activa de observaciones. |
| `{{SECONDARY_AGENT}}` | Validador de Dominio / Co-Autor | Aportación de datos especializados (legal, métricas financieras o narrativa fundadora). |
| `sdd-reviewer` | Revisor / Auditor Crítico | Evaluación rigurosa en 4 dimensiones, detección de muletillas de IA y emisión del reporte de remediación. |

---

## 3. Propósito Comercial y Audiencia (ICP)
- **Objetivo de Negocio:** {{BUSINESS_GOAL}}
- **Público Objetivo (ICP):** {{TARGET_ICP}}
- **Acción Deseada (CTA):** {{PRIMARY_CTA}}
- **KPI Primario de Éxito:** {{PRIMARY_KPI}}

---

## 4. Anclas Técnicas y Veracidad Musical (Zero-Hallucination)
Toda afirmación técnica musical, estructural o de producción debe estar anclada a las directivas de Suno:
- **Límites de Caracteres:** Style prompt compacto ($\le 200$ caracteres).
- **Metatags Estructurales:** Sintaxis válida de corchetes `[Verse]`, `[Chorus]`, `[Build-up]`, `[Beat Drop]`, `[Outro]`.
- **Filtro Anti-Artistas:** Cero nombres de artistas reales; uso de descriptores sonoros y tímbricos.
- **Métrica y Rima:** Rimas musicales naturales y cadencia silábica armónica.
- **Fuentes / Documentos de Referencia:**
  - Perfil del Artista: `[[Artistas/{{ARTIST_SLUG}}/_artista.md]]`
  - Manifiesto del EP: `[[Artistas/{{ARTIST_SLUG}}/{{EP_SLUG}}/_ep.md]]`
  - Skills de Referencia: `suno-songwriting`, `suno-song-structures`, `suno-style-catalog`

---

## 5. Desglose Estructural (Outline)
Estructura obligatoria del documento final:
1. **Título & Frontmatter Estándar:** Con metadatos (BPM, tonalidad, versión Suno, estado).
2. **Suno Style Prompt:** Prompt compacto final optimizado para el casillero de estilo.
3. **Letra Estructurada con Metatags:** Letra completa con metatags entre corchetes.
4. **Notas de Producción y Variaciones:** Alternativas para iterar en Suno.

---

## 6. Filtro Anti-Robot y Clichés Prohibidos (Banned Patterns)
> [!CAUTION]
> **Tolerancia Cero con Muletillas de IA:** La presencia de cualquiera de las siguientes frases restará automáticamente puntaje e impedirá la aprobación:
- ❌ *"en resumen"* / *"en conclusión"* / *"para concluir"* / *"en definitiva"*
- ❌ *"es importante destacar"* / *"es importante mencionar"* / *"cabe destacar"* / *"cabe resaltar"*
- ❌ *"en el vertiginoso mundo"* / *"en el cambiante mundo"* / *"un papel crucial"*
- ❌ Nombres de artistas reales registrados que causen baneo o degradación en Suno.

---

## 7. Pasos Atómicos de Ejecución (Checklist con Doble HITL)
- [ ] **STEP-01 (HITL-1 Spec Review & Approval):** Inspección humana del spec (`node Suno-Engine/bin/engine.ts sdd preview {{SLUG}}`) y aprobación formal mediante `node Suno-Engine/bin/engine.ts sdd approve-spec {{SLUG}}`.
- [ ] **STEP-02 (Initial Draft Generation):** Redacción inicial del borrador por `{{PRIMARY_AGENT}}` respetando el outline y las anclas técnicas.
- [ ] **STEP-03 (Evaluator-Optimizer Autonomous Loop):** Bucle Creador vs Revisor hasta calificar con nota $\ge 8.5 / 9.0$ y cero clichés (máximo 5 ciclos).
- [ ] **STEP-04 (HITL-2 Deliverable Review & Approval):** Inspección humana (`node Suno-Engine/bin/engine.ts sdd review-deliverable {{SLUG}}`) y aprobación formal mediante `node Suno-Engine/bin/engine.ts sdd approve-deliverable {{SLUG}}`.
- [ ] **STEP-05 (Vault Integration):** Promoción atómica e idempotente del documento aceptado a `Suno-Vault/{{CATEGORY_FOLDER}}/{{FILENAME}}.md`.

---

## 8. Rúbrica de Calificación del Revisor (Escala 0 a 9)
| Dimensión | Puntos Máx | Criterio de Pase |
| :--- | :---: | :--- |
| **1. Cumplimiento del Objetivo & ICP** | 2.5 pts | Alineación directa con el estilo deseado y propósito del tema. |
| **2. Veracidad Técnica & Metatags** | 2.5 pts | Exactitud en metatags Suno, BPM, y control estricto de caracteres en Style Prompt. |
| **3. Calidad Lírica y Métrica** | 2.0 pts | Cadencia rítmica, rimas naturales, fluidez vocal y cero relleno. |
| **4. Originalidad Léxica & Cero Clichés** | 2.0 pts | Cero frases prohibidas de IA y ausencia de nombres de artistas baneados. |
| **TOTAL MÁXIMO** | **9.0 pts** | **Nota mínima requerida para pasar a HITL-2: $\ge 8.5 / 9.0$** |
