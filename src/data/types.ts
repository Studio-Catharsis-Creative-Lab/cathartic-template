// ─── Core shared types — used by all apps in the suite ───────────────────────
// Never put app-specific fields here. Extend via app-specific payload types.

export interface BaseEntry {
  id: string;
  userId: string;
  type: string;           // discriminator — set by each app's schema
  createdAt: string;      // ISO 8601
  updatedAt: string;      // ISO 8601
  sessionId?: string;     // links to a timed session if this entry came from one
  tags?: string[];        // optional user-defined tags, shared across all entry types
}

export interface BaseSession {
  id: string;
  userId: string;
  type: string;           // e.g. 'breathing', 'meditation', 'journaling'
  startedAt: string;      // ISO 8601
  completedAt?: string;   // null if abandoned
  durationSeconds?: number;
}

export interface StreakRecord {
  key: string;            // habit key, e.g. 'mood-checkin', 'brain-dump'
  userId: string;
  currentStreak: number;
  longestStreak: number;
  lastCompletedDate: string | null;  // YYYY-MM-DD
  totalCompletions: number;
}

export interface UserStats {
  userId: string;
  totalSessions: number;
  totalEntries: number;
  totalMinutes: number;
  joinedAt: string;       // ISO 8601
}

// ─── App-specific entry schemas (examples — copy to your app) ─────────────────
// Each app defines its own payload type and extends BaseEntry.

export interface MoodEntry extends BaseEntry {
  type: 'mood';
  payload: {
    scale: 1 | 2 | 3 | 4 | 5;
    note?: string;
    emotions?: string[];   // e.g. ['anxious', 'grateful']
  };
}

export interface GoalEntry extends BaseEntry {
  type: 'goal';
  payload: {
    title: string;
    description?: string;
    targetDate?: string;   // YYYY-MM-DD
    completed: boolean;
    completedAt?: string;
  };
}

export interface BrainDumpEntry extends BaseEntry {
  type: 'brain-dump';
  payload: {
    text: string;
    aiSuggestions?: string[];   // populated after AI call returns
    attachmentUris?: string[];
  };
}

export interface JournalEntry extends BaseEntry {
  type: 'journal';
  payload: {
    prompt?: string;
    text: string;
    aiReflection?: string;
  };
}

// Union of all known entry types — extend as you add apps
export type AnyEntry = MoodEntry | GoalEntry | BrainDumpEntry | JournalEntry;
