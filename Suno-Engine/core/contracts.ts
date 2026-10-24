/**
 * Domain Contracts for Suno-Engine Three-Role Architecture & Music Domain:
 *  1. Orchestrator (Planning, Milestones & Validation Contract)
 *  2. Workers (Fresh-Context Implementation, Serial Write vs Parallel Read & Structured Handoffs)
 *  3. Adversarial Validators (Zero-Creator-Bias Technical & Musical QA)
 *
 * @spec SPEC-SUNO-001 (Suno Prompt Gen Clean Architecture)
 */

import type { TaskHistoryEntry, TaskLifecycleState } from './state-machine.ts';

export type AgentRoleType = 'orchestrator' | 'worker' | 'validator';
export type ExecutionConcurrencyMode = 'serial_write' | 'parallel_read';
export type ModelTier = 'pro' | 'flash' | 'inherit';

export interface AgentArchitectureProfile {
  agentId: string;
  roleType: AgentRoleType;
  executionMode: ExecutionConcurrencyMode;
  contextIsolation: 'fresh_context';
  modelTier: ModelTier;
  requiresStructuredHandoff: boolean;
}

/**
 * Strategic Model Selection & Execution Topology Catalog
 */
export const STRATEGIC_MODEL_ROUTING: Record<string, AgentArchitectureProfile> = {
  orchestrator: {
    agentId: 'orchestrator',
    roleType: 'orchestrator',
    executionMode: 'serial_write',
    contextIsolation: 'fresh_context',
    modelTier: 'pro',
    requiresStructuredHandoff: false,
  },
  'suno-songwriting-worker': {
    agentId: 'suno-songwriting-worker',
    roleType: 'worker',
    executionMode: 'serial_write',
    contextIsolation: 'fresh_context',
    modelTier: 'pro',
    requiresStructuredHandoff: true,
  },
  'suno-structures-worker': {
    agentId: 'suno-structures-worker',
    roleType: 'worker',
    executionMode: 'serial_write',
    contextIsolation: 'fresh_context',
    modelTier: 'pro',
    requiresStructuredHandoff: true,
  },
  'suno-style-researcher': {
    agentId: 'suno-style-researcher',
    roleType: 'worker',
    executionMode: 'parallel_read',
    contextIsolation: 'fresh_context',
    modelTier: 'flash',
    requiresStructuredHandoff: true,
  },
  'sdd-reviewer': {
    agentId: 'sdd-reviewer',
    roleType: 'validator',
    executionMode: 'serial_write',
    contextIsolation: 'fresh_context',
    modelTier: 'pro',
    requiresStructuredHandoff: false,
  },
};

export interface ExecutionTopologyPlan {
  orchestrator: AgentArchitectureProfile;
  parallelReadGatherers: AgentArchitectureProfile[];
  serialWriteWorkers: AgentArchitectureProfile[];
  adversarialValidator: AgentArchitectureProfile;
}

export function buildExecutionTopology(subagents: string[]): ExecutionTopologyPlan {
  const parallelReadGatherers: AgentArchitectureProfile[] = [];
  const serialWriteWorkers: AgentArchitectureProfile[] = [];

  for (const rawId of subagents) {
    const id = rawId.trim().toLowerCase();
    const profile: AgentArchitectureProfile = STRATEGIC_MODEL_ROUTING[id] ?? {
      agentId: id,
      roleType: 'worker',
      executionMode: 'serial_write',
      contextIsolation: 'fresh_context',
      modelTier: 'inherit',
      requiresStructuredHandoff: true,
    };

    if (profile.executionMode === 'parallel_read') {
      parallelReadGatherers.push(profile);
    } else {
      serialWriteWorkers.push(profile);
    }
  }

  return {
    orchestrator: STRATEGIC_MODEL_ROUTING.orchestrator!,
    parallelReadGatherers,
    serialWriteWorkers,
    adversarialValidator: STRATEGIC_MODEL_ROUTING['sdd-reviewer']!,
  };
}

/**
 * Validation Contract established by the Orchestrator BEFORE any Worker generates code or music.
 */
export interface ValidationContract {
  contract_id: string;
  required_technical_anchors: string[];
  forbidden_claims: string[];
  min_word_count: number;
  requires_actionable_cta: boolean;
  quality_threshold: number;
  acceptance_criteria: string[];
}

export interface StructuredHandoff {
  worker_id: string;
  step_index: number;
  completed_items: string[];
  pending_items: string[];
  decisions_made: string[];
  issues_encountered: string[];
  artifact_snapshot?: string;
  timestamp: string;
}

export interface GitBranchTopology {
  feature_branch: string;
  spec_branch: string;
  merged_at?: string | null;
}

export type ExecutionEngineType = 'native_squad' | 'teamwork_preview';
export type TeamworkScaleMode = 'full' | 'small' | 'review' | 'proof' | 'proof_large';
export type TeamworkIntegrityMode = 'development' | 'demo' | 'benchmark';

export interface TeamworkConfig {
  scale_mode: TeamworkScaleMode;
  integrity_mode: TeamworkIntegrityMode;
  working_directory: string;
  prompt_draft_path?: string;
  verification_command: string;
}

export interface SkillRecommendation {
  skillId: string;
  name: string;
  description: string;
  skillMdPath: string;
  relevanceScore: number;
  reason: string;
}

export interface SpecAdversarialReport {
  score: number;
  passed: boolean;
  cycle: number;
  engine?: 'clef-flash' | 'heuristic-fallback';
  dimensions: {
    skillIntegration: number;
    vaultGrounding: number;
    contractSpecificity: number;
    workerHandoffClarity: number;
  };
  defects: string[];
  remediation_directives: string[];
  timestamp: string;
}

export interface CreateSpecRequest {
  slug: string;
  title: string;
  targetFolder?: string;
  subagents?: string[];
  approvedSkills?: string[];
  icp?: string;
  goal?: string;
  featureBranch?: string;
  executionEngine?: ExecutionEngineType;
  teamworkScale?: TeamworkScaleMode;
  teamworkIntegrityMode?: TeamworkIntegrityMode;
  validationContract?: Partial<ValidationContract>;
}

export interface HitlCheckpointRecord {
  status: 'pending' | 'refining' | 'approved';
  approved_at: string | null;
  user_feedback: Array<{ timestamp: string; feedback: string }>;
}

export interface CriticismHistoryEntry {
  cycle: number;
  total_score: number;
  passed: boolean;
  timestamp: string;
  banned_phrases_count: number;
  clef_engine: string;
  clef_cache_key: string;
  report_file?: string;
}

export interface ExecutionStepRecord {
  id: string;
  name: string;
  role: AgentRoleType;
  execution_mode: ExecutionConcurrencyMode;
  model_tier: ModelTier;
  status: 'pending' | 'in_progress' | 'completed';
  depends_on: string[];
}

export interface TaskSpecData {
  spec_version?: string;
  id?: string;
  spec_id?: string;
  slug: string;
  title: string;
  target_folder: string;
  target_vault_folder?: string;
  target_file?: string;
  subagents: string[];
  subagents_involved?: string[];
  approved_skills?: string[];
  hitl_0_skills_approved?: boolean;
  execution_engine?: ExecutionEngineType;
  teamwork_config?: TeamworkConfig;
  spec_evaluation?: SpecAdversarialReport;
  icp: string;
  goal: string;
  status: TaskLifecycleState | string;
  iteration?: number;
  created_at?: string;
  updated_at?: string;
  git_branch_topology?: GitBranchTopology;
  validation_contract?: ValidationContract;
  execution_topology?: ExecutionTopologyPlan;
  worker_handoffs?: StructuredHandoff[];
  hitl_checkpoints?: {
    hitl_1_spec_approval: HitlCheckpointRecord;
    hitl_2_deliverable_approval: HitlCheckpointRecord;
  };
  intent?: {
    business_goal: string;
    target_icp: string;
    constraints: string[];
  };
  evaluation?: {
    current_cycle: number;
    max_cycles: number;
    passing_threshold: number;
    target_score?: number;
    scale_max?: number;
    final_score?: number | null;
    history: TaskHistoryEntry[];
    criticism_history?: CriticismHistoryEntry[];
  };
  evaluations?: unknown[];
  execution_steps?: ExecutionStepRecord[];
}

export function createDefaultValidationContract(
  specId: string,
  qualityThreshold: number = 8.5
): ValidationContract {
  return {
    contract_id: `VC-${specId}`,
    required_technical_anchors: ['Suno', 'Prompt', 'Metatags', 'BPM'],
    forbidden_claims: [
      'retorno garantizado 100%',
      'cero riesgo absoluto',
    ],
    min_word_count: 50,
    requires_actionable_cta: false,
    quality_threshold: qualityThreshold,
    acceptance_criteria: [
      'Cumplimiento estricto del límite de caracteres en Style Prompt (<= 200).',
      'Metatags válidos entre corchetes [Verse], [Chorus], [Drop].',
      'Cero nombres de artistas reales prohibidos o censurados.',
      'Estructura de letra armónica y consistente.',
    ],
  };
}

/* ========================================================================= */
/*                          DOMINIO MUSICAL SUNO                             */
/* ========================================================================= */

export interface ArtistProfile {
  name: string;
  slug: string;
  vocalDescription: string;
  primaryGenres: string[];
  secondaryGenres?: string[];
  defaultBpmRange?: [number, number];
  loreOrBiography?: string;
  signatureStylePrompt?: string;
  bannedTags?: string[];
}

export interface EPManifest {
  title: string;
  slug: string;
  artistSlug: string;
  conceptNarrative: string;
  masterStylePrompt: string;
  totalTracks: number;
  trackList: Array<{
    trackNumber: number;
    title: string;
    slug: string;
    targetMood: string;
  }>;
}

export interface SongTrack {
  trackNumber: number;
  title: string;
  slug: string;
  artistSlug: string;
  epSlug: string;
  stylePrompt: string;
  lyricsWithMetatags: string;
  bpm: number;
  musicalKey?: string;
  durationEstimateSeconds?: number;
  sunoVersion?: 'v3.5' | 'v4';
  status: 'draft' | 'tested' | 'approved';
  sunoAudioUrl?: string;
  feedbackNotes?: string;
}
