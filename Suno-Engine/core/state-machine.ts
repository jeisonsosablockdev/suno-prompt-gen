/**
 * State Machine & Invariants for Suno-Engine Task Lifecycle
 * Pure domain logic: deterministic state transitions with Double HITL guardrails.
 * 
 * @spec SPEC-SUNO-001 (Suno Prompt Gen Clean Architecture)
 */

export type TaskLifecycleState = 
  | 'initialized'
  | 'spec_review'
  | 'spec_approved'
  | 'task_loop'
  | 'draft_optimizing'
  | 'deliverable_review'
  | 'deliverable_refining'
  | 'completed'
  | 'frozen_for_arbitration';

export interface TaskHistoryEntry {
  cycle: number;
  score: number;
  status: 'passed' | 'rejected';
  timestamp: string;
}

export interface TaskContext {
  slug: string;
  title: string;
  state: TaskLifecycleState;
  currentCycle: number;
  maxCycles: number;
  qualityThreshold: number;
  lastScore: number;
  history: TaskHistoryEntry[];
}

export interface TransitionResult {
  success: boolean;
  context: TaskContext;
  error?: string;
}

export const QUALITY_THRESHOLD = 8.5;
export const MAX_OPTIMIZATION_CYCLES = 5;

/**
 * Creates a clean initial task context
 */
export function createInitialContext(slug: string, title: string): TaskContext {
  return {
    slug,
    title,
    state: 'initialized',
    currentCycle: 0,
    maxCycles: MAX_OPTIMIZATION_CYCLES,
    qualityThreshold: QUALITY_THRESHOLD,
    lastScore: 0,
    history: [],
  };
}

/**
 * Step 1: Submit draft for Spec Review (Pre-HITL-1)
 */
export function startSpecReview(context: TaskContext): TransitionResult {
  if (context.state !== 'initialized') {
    return {
      success: false,
      context,
      error: `Invalid transition: cannot start spec review from state '${context.state}'. Expected 'initialized'.`,
    };
  }

  return {
    success: true,
    context: {
      ...context,
      state: 'spec_review',
    },
  };
}

/**
 * Step 2: HITL-1 Gate — User approves the spec
 */
export function approveSpec(context: TaskContext): TransitionResult {
  if (context.state !== 'spec_review') {
    return {
      success: false,
      context,
      error: `Invalid transition: cannot approve spec from state '${context.state}'. Expected 'spec_review'.`,
    };
  }

  return {
    success: true,
    context: {
      ...context,
      state: 'spec_approved',
    },
  };
}

/**
 * Step 3: Enter the Task Execution / Drafting Loop
 */
export function startTaskLoop(context: TaskContext): TransitionResult {
  if (context.state !== 'spec_approved') {
    return {
      success: false,
      context,
      error: `Invalid transition: cannot enter task loop from state '${context.state}'. Expected 'spec_approved'.`,
    };
  }

  return {
    success: true,
    context: {
      ...context,
      state: 'task_loop',
    },
  };
}

/**
 * Step 4: Run an Evaluator-Optimizer cycle
 */
export function evaluateCycle(context: TaskContext, score: number): TransitionResult {
  if (context.state !== 'task_loop' && context.state !== 'draft_optimizing') {
    return {
      success: false,
      context,
      error: `Invalid transition: cannot evaluate cycle from state '${context.state}'. Expected 'task_loop' or 'draft_optimizing'.`,
    };
  }

  const nextCycle = context.currentCycle + 1;
  const passed = score >= context.qualityThreshold;

  const historyEntry: TaskHistoryEntry = {
    cycle: nextCycle,
    score,
    status: passed ? 'passed' : 'rejected',
    timestamp: new Date().toISOString(),
  };

  const updatedHistory = [...context.history, historyEntry];

  if (passed) {
    return {
      success: true,
      context: {
        ...context,
        state: 'deliverable_review',
        currentCycle: nextCycle,
        lastScore: score,
        history: updatedHistory,
      },
    };
  }

  if (nextCycle >= context.maxCycles) {
    return {
      success: false,
      context: {
        ...context,
        state: 'frozen_for_arbitration',
        currentCycle: nextCycle,
        lastScore: score,
        history: updatedHistory,
      },
      error: `Max optimization cycles (${context.maxCycles}) reached without meeting quality threshold (${context.qualityThreshold}). Task frozen for human arbitration.`,
    };
  }

  return {
    success: true,
    context: {
      ...context,
      state: 'draft_optimizing',
      currentCycle: nextCycle,
      lastScore: score,
      history: updatedHistory,
    },
  };
}

/**
 * Step 5: HITL-2 Gate — User requests deliverable refinement
 */
export function requestRefinement(context: TaskContext): TransitionResult {
  if (context.state !== 'deliverable_review') {
    return {
      success: false,
      context,
      error: `Invalid transition: cannot request refinement from state '${context.state}'. Expected 'deliverable_review'.`,
    };
  }

  if (context.currentCycle >= context.maxCycles) {
    return {
      success: false,
      context: {
        ...context,
        state: 'frozen_for_arbitration',
      },
      error: `Cannot refine: max optimization cycles (${context.maxCycles}) reached. Task frozen for human arbitration.`,
    };
  }

  return {
    success: true,
    context: {
      ...context,
      state: 'draft_optimizing',
    },
  };
}

/**
 * Step 6: HITL-2 Gate — User formally approves the final deliverable for promotion
 */
export function approveDeliverable(context: TaskContext): TransitionResult {
  if (context.state !== 'deliverable_review') {
    return {
      success: false,
      context,
      error: `Invalid transition: cannot approve deliverable from state '${context.state}'. Expected 'deliverable_review'.`,
    };
  }

  return {
    success: true,
    context: {
      ...context,
      state: 'completed',
    },
  };
}
