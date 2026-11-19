export type LanguageCode = 'en' | 'te' | 'hi';

export type ApplianceId =
  | 'air-fryer'
  | 'microwave-oven'
  | 'washing-machine'
  | 'refrigerator'
  | 'induction-stove'
  | 'dishwasher';

export type TutorialCategory =
  | 'Getting Started'
  | 'How to Operate'
  | 'Understanding Settings'
  | 'Cleaning and Maintenance'
  | 'Safety Instructions'
  | 'Troubleshooting'
  | 'Energy Saving';

export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Essential';

export interface AppliancePart {
  name: string;
  functionDesc: string;
}

export interface ApplianceSetting {
  name: string;
  purpose: string;
  guidance: string;
}

export interface TroubleshootingItem {
  problem: string;
  possibleCause: string;
  solution: string;
}

export interface Appliance {
  id: ApplianceId;
  name: string;
  shortDesc: string;
  image: string;
  introduction: string;
  commonUses: string[];
  parts: AppliancePart[];
  howToUseSteps: string[];
  recommendedSettings: ApplianceSetting[];
  safetyPrecautions: string[];
  cleaningSteps: string[];
  troubleshooting: TroubleshootingItem[];
  energySavingTips: string[];
  defaultMaintenanceTask: string;
}

export interface VideoChapter {
  time: string;
  title: string;
  caption: string;
}

export interface Tutorial {
  id: string;
  title: string;
  applianceId: ApplianceId;
  applianceName: string;
  category: TutorialCategory;
  shortDesc: string;
  difficulty: DifficultyLevel;
  estimatedMinutes: number;
  image: string;
  steps: {
    heading: string;
    detail: string;
  }[];
  safetyWarnings: string[];
  videoSummary: string;
  videoChapters: VideoChapter[];
  featured?: boolean;
}

export interface SafetySection {
  id: string;
  title: string;
  applianceId?: ApplianceId;
  severity: 'Critical' | 'Caution' | 'Essential';
  summary: string;
  rules: string[];
}

export type MaintenanceStatus = 'Upcoming' | 'Due Today' | 'Completed';

export interface MaintenanceTask {
  id: string;
  applianceId: ApplianceId;
  applianceName: string;
  taskTitle: string;
  dueDate: string; // YYYY-MM-DD
  completed: boolean;
  notes?: string;
  createdAt: string;
}

export interface FeedbackEntry {
  id: string;
  rating: number;
  applianceId: ApplianceId | 'general';
  applianceName: string;
  suggestions: string;
  confusingInfo?: string;
  userName?: string;
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface LearningActivity {
  id: string;
  type: 'tutorial_viewed' | 'tutorial_completed' | 'maintenance_completed' | 'tutorial_saved';
  label: string;
  timestamp: string;
}

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  preferredAppliances: ApplianceId[];
  preferredLanguage: LanguageCode;
  isDemoAccount?: boolean;
}

export interface StoredAuthUser extends UserAccount {
  password?: string;
}
