import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  Appliance,
  ApplianceId,
  ContactMessage,
  FeedbackEntry,
  LanguageCode,
  LearningActivity,
  MaintenanceStatus,
  MaintenanceTask,
  StoredAuthUser,
  Tutorial,
  UserAccount,
} from '../types';
import { INITIAL_APPLIANCES } from '../data/appliances';
import { INITIAL_TUTORIALS } from '../data/tutorials';
import { TRANSLATIONS, TranslationBundle } from '../data/translations';

const STORAGE_KEYS = {
  language: 'venri_language',
  appliances: 'venri_appliances_v1',
  tutorials: 'venri_tutorials_v1',
  maintenance: 'venri_maintenance_v1',
  users: 'venri_users_v1',
  currentUser: 'venri_current_user_v1',
  savedTutorials: 'venri_saved_tutorials_v1',
  recentTutorials: 'venri_recent_tutorials_v1',
  completedTutorials: 'venri_completed_tutorials_v1',
  activity: 'venri_activity_v1',
  feedback: 'venri_feedback_v1',
  contacts: 'venri_contacts_v1',
};

function getOffsetDateString(offsetDays: number): string {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getTodayDateString(): string {
  return getOffsetDateString(0);
}

export function computeMaintenanceStatus(task: MaintenanceTask): MaintenanceStatus {
  if (task.completed) return 'Completed';
  const today = getTodayDateString();
  if (task.dueDate <= today) return 'Due Today';
  return 'Upcoming';
}

const DEFAULT_MAINTENANCE_TASKS: MaintenanceTask[] = [
  {
    id: 'maint-1',
    applianceId: 'air-fryer',
    applianceName: 'Air Fryer',
    taskTitle: 'Clean air fryer basket',
    dueDate: getOffsetDateString(0),
    completed: false,
    notes: 'Soak perforated tray in warm soapy water and wipe interior walls.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'maint-2',
    applianceId: 'microwave-oven',
    applianceName: 'Microwave Oven',
    taskTitle: 'Clean microwave interior',
    dueDate: getOffsetDateString(2),
    completed: false,
    notes: 'Steam with a bowl of water for 2 minutes before wiping gently.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'maint-3',
    applianceId: 'refrigerator',
    applianceName: 'Refrigerator',
    taskTitle: 'Check refrigerator door seals',
    dueDate: getOffsetDateString(5),
    completed: false,
    notes: 'Wipe magnetic rubber gaskets and run the paper-strip seal test.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'maint-4',
    applianceId: 'washing-machine',
    applianceName: 'Washing Machine',
    taskTitle: 'Clean washing machine filter',
    dueDate: getOffsetDateString(9),
    completed: false,
    notes: 'Place a shallow tray under the lower drain cap before opening.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'maint-5',
    applianceId: 'dishwasher',
    applianceName: 'Dishwasher',
    taskTitle: 'Clean dishwasher filter',
    dueDate: getOffsetDateString(-2),
    completed: true,
    notes: 'Rinsed cylindrical mesh filter and checked lower spray arm holes.',
    createdAt: new Date().toISOString(),
  },
];

const DEFAULT_FEEDBACK: FeedbackEntry[] = [
  {
    id: 'fb-1',
    rating: 5,
    applianceId: 'induction-stove',
    applianceName: 'Induction Stove',
    suggestions:
      'The magnet cookware test tutorial helped our parents choose the right steel pots immediately.',
    userName: 'Ananya Rao',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: 'fb-2',
    rating: 4,
    applianceId: 'washing-machine',
    applianceName: 'Washing Machine',
    suggestions:
      'More Telugu translations inside individual wash-mode descriptions would be helpful.',
    userName: 'Karthik Reddy',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
];

const DEMO_USERS: StoredAuthUser[] = [
  {
    id: 'demo-user-1',
    name: 'Priya Sharma',
    email: 'family@venri.demo',
    role: 'user',
    preferredAppliances: ['air-fryer', 'washing-machine', 'induction-stove'],
    preferredLanguage: 'en',
    isDemoAccount: true,
  },
  {
    id: 'demo-admin-1',
    name: 'VENRI Content Admin',
    email: 'admin@venri.demo',
    role: 'admin',
    preferredAppliances: [
      'air-fryer',
      'microwave-oven',
      'washing-machine',
      'refrigerator',
      'induction-stove',
      'dishwasher',
    ],
    preferredLanguage: 'en',
    isDemoAccount: true,
  },
];

function readLocalStorage<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeLocalStorage<T>(key: string, value: T): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore quota errors in restricted environments
  }
}

function getInitialRoute(): string {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#/')) {
    return hash.slice(1);
  }
  return '/';
}

interface AppContextValue {
  route: string;
  navigate: (path: string) => void;
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationBundle;
  appliances: Appliance[];
  updateAppliance: (updated: Appliance) => void;
  tutorials: Tutorial[];
  addTutorial: (tutorial: Omit<Tutorial, 'id'>) => Tutorial;
  updateTutorial: (tutorial: Tutorial) => void;
  deleteTutorial: (id: string) => void;
  maintenanceTasks: MaintenanceTask[];
  addMaintenanceTask: (task: {
    applianceId: ApplianceId;
    taskTitle: string;
    dueDate: string;
    notes?: string;
  }) => void;
  updateMaintenanceTask: (task: MaintenanceTask) => void;
  toggleMaintenanceTask: (id: string) => void;
  deleteMaintenanceTask: (id: string) => void;
  currentUser: UserAccount | null;
  loginWithCredentials: (
    email: string,
    password: string
  ) => { ok: boolean; error?: string };
  signUpUser: (payload: {
    name: string;
    email: string;
    password: string;
    preferredAppliances?: ApplianceId[];
  }) => { ok: boolean; error?: string };
  loginAsDemo: (role: 'user' | 'admin') => void;
  logout: () => void;
  updateProfile: (updates: Partial<UserAccount>) => void;
  savedTutorialIds: string[];
  toggleSaveTutorial: (id: string) => void;
  recentTutorialIds: string[];
  recordTutorialView: (id: string) => void;
  completedTutorialIds: string[];
  toggleCompleteTutorial: (id: string) => void;
  activities: LearningActivity[];
  feedbackList: FeedbackEntry[];
  submitFeedback: (entry: Omit<FeedbackEntry, 'id' | 'createdAt'>) => void;
  contactMessages: ContactMessage[];
  submitContactMessage: (msg: Omit<ContactMessage, 'id' | 'createdAt'>) => void;
  isSearchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [route, setRoute] = useState<string>(getInitialRoute);
  const [language, setLanguageState] = useState<LanguageCode>(() =>
    readLocalStorage<LanguageCode>(STORAGE_KEYS.language, 'en')
  );
  const [appliances, setAppliances] = useState<Appliance[]>(() =>
    readLocalStorage<Appliance[]>(STORAGE_KEYS.appliances, INITIAL_APPLIANCES)
  );
  const [tutorials, setTutorials] = useState<Tutorial[]>(() =>
    readLocalStorage<Tutorial[]>(STORAGE_KEYS.tutorials, INITIAL_TUTORIALS)
  );
  const [maintenanceTasks, setMaintenanceTasks] = useState<MaintenanceTask[]>(
    () =>
      readLocalStorage<MaintenanceTask[]>(
        STORAGE_KEYS.maintenance,
        DEFAULT_MAINTENANCE_TASKS
      )
  );
  const [users, setUsers] = useState<StoredAuthUser[]>(() =>
    readLocalStorage<StoredAuthUser[]>(STORAGE_KEYS.users, DEMO_USERS)
  );
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(() =>
    readLocalStorage<UserAccount | null>(STORAGE_KEYS.currentUser, null)
  );
  const [savedTutorialIds, setSavedTutorialIds] = useState<string[]>(() =>
    readLocalStorage<string[]>(STORAGE_KEYS.savedTutorials, [
      'air-fryer-how-to-use',
      'induction-understanding',
    ])
  );
  const [recentTutorialIds, setRecentTutorialIds] = useState<string[]>(() =>
    readLocalStorage<string[]>(STORAGE_KEYS.recentTutorials, [
      'air-fryer-components',
      'microwave-settings',
    ])
  );
  const [completedTutorialIds, setCompletedTutorialIds] = useState<string[]>(
    () => readLocalStorage<string[]>(STORAGE_KEYS.completedTutorials, ['air-fryer-components'])
  );
  const [activities, setActivities] = useState<LearningActivity[]>(() =>
    readLocalStorage<LearningActivity[]>(STORAGE_KEYS.activity, [
      {
        id: 'act-init-1',
        type: 'tutorial_completed',
        label: 'Completed: Understanding Air Fryer Components',
        timestamp: new Date(Date.now() - 3600000 * 6).toISOString(),
      },
      {
        id: 'act-init-2',
        type: 'maintenance_completed',
        label: 'Maintained: Clean dishwasher filter',
        timestamp: new Date(Date.now() - 86400000).toISOString(),
      },
    ])
  );
  const [feedbackList, setFeedbackList] = useState<FeedbackEntry[]>(() =>
    readLocalStorage<FeedbackEntry[]>(STORAGE_KEYS.feedback, DEFAULT_FEEDBACK)
  );
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() =>
    readLocalStorage<ContactMessage[]>(STORAGE_KEYS.contacts, [])
  );
  const [isSearchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getInitialRoute());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigate = (path: string) => {
    const normalized = path.startsWith('/') ? path : `/${path}`;
    window.location.hash = `#${normalized}`;
    setRoute(normalized);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    writeLocalStorage(STORAGE_KEYS.language, lang);
  };

  const pushActivity = (
    type: LearningActivity['type'],
    label: string
  ) => {
    setActivities((prev) => {
      const next: LearningActivity[] = [
        {
          id: `act-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          type,
          label,
          timestamp: new Date().toISOString(),
        },
        ...prev,
      ].slice(0, 20);
      writeLocalStorage(STORAGE_KEYS.activity, next);
      return next;
    });
  };

  const updateAppliance = (updated: Appliance) => {
    setAppliances((prev) => {
      const next = prev.map((a) => (a.id === updated.id ? updated : a));
      writeLocalStorage(STORAGE_KEYS.appliances, next);
      return next;
    });
  };

  const addTutorial = (tutorialData: Omit<Tutorial, 'id'>): Tutorial => {
    const newTutorial: Tutorial = {
      ...tutorialData,
      id: `tut-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    };
    setTutorials((prev) => {
      const next = [newTutorial, ...prev];
      writeLocalStorage(STORAGE_KEYS.tutorials, next);
      return next;
    });
    return newTutorial;
  };

  const updateTutorial = (updated: Tutorial) => {
    setTutorials((prev) => {
      const next = prev.map((t) => (t.id === updated.id ? updated : t));
      writeLocalStorage(STORAGE_KEYS.tutorials, next);
      return next;
    });
  };

  const deleteTutorial = (id: string) => {
    setTutorials((prev) => {
      const next = prev.filter((t) => t.id !== id);
      writeLocalStorage(STORAGE_KEYS.tutorials, next);
      return next;
    });
  };

  const addMaintenanceTask = (task: {
    applianceId: ApplianceId;
    taskTitle: string;
    dueDate: string;
    notes?: string;
  }) => {
    const app = appliances.find((a) => a.id === task.applianceId);
    const created: MaintenanceTask = {
      id: `maint-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      applianceId: task.applianceId,
      applianceName: app?.name || 'Appliance',
      taskTitle: task.taskTitle.trim(),
      dueDate: task.dueDate,
      completed: false,
      notes: task.notes?.trim() || undefined,
      createdAt: new Date().toISOString(),
    };
    setMaintenanceTasks((prev) => {
      const next = [created, ...prev];
      writeLocalStorage(STORAGE_KEYS.maintenance, next);
      return next;
    });
  };

  const updateMaintenanceTask = (updated: MaintenanceTask) => {
    const app = appliances.find((a) => a.id === updated.applianceId);
    const normalized = {
      ...updated,
      applianceName: app?.name || updated.applianceName,
    };
    setMaintenanceTasks((prev) => {
      const next = prev.map((m) => (m.id === normalized.id ? normalized : m));
      writeLocalStorage(STORAGE_KEYS.maintenance, next);
      return next;
    });
  };

  const toggleMaintenanceTask = (id: string) => {
    setMaintenanceTasks((prev) => {
      const target = prev.find((m) => m.id === id);
      const next = prev.map((m) =>
        m.id === id ? { ...m, completed: !m.completed } : m
      );
      writeLocalStorage(STORAGE_KEYS.maintenance, next);
      if (target && !target.completed) {
        pushActivity('maintenance_completed', `Completed task: ${target.taskTitle}`);
      }
      return next;
    });
  };

  const deleteMaintenanceTask = (id: string) => {
    setMaintenanceTasks((prev) => {
      const next = prev.filter((m) => m.id !== id);
      writeLocalStorage(STORAGE_KEYS.maintenance, next);
      return next;
    });
  };

  const loginWithCredentials = (email: string, password: string) => {
    const normalizedEmail = email.trim().toLowerCase();
    const matched = users.find(
      (u) => u.email.toLowerCase() === normalizedEmail
    );
    if (!matched) {
      return {
        ok: false,
        error: 'No local demo account matches that email. Try Sign Up or Demo Sign In.',
      };
    }
    if (matched.password && matched.password !== password) {
      return {
        ok: false,
        error: 'Incorrect demo password for this account.',
      };
    }
    const { password: _pwd, ...safeUser } = matched;
    setCurrentUser(safeUser);
    writeLocalStorage(STORAGE_KEYS.currentUser, safeUser);
    return { ok: true };
  };

  const signUpUser = (payload: {
    name: string;
    email: string;
    password: string;
    preferredAppliances?: ApplianceId[];
  }) => {
    const normalizedEmail = payload.email.trim().toLowerCase();
    if (users.some((u) => u.email.toLowerCase() === normalizedEmail)) {
      return { ok: false, error: 'An account with this email already exists locally.' };
    }
    const created: StoredAuthUser = {
      id: `user-${Date.now()}`,
      name: payload.name.trim(),
      email: normalizedEmail,
      password: payload.password,
      role: 'user',
      preferredAppliances: payload.preferredAppliances?.length
        ? payload.preferredAppliances
        : ['air-fryer', 'microwave-oven'],
      preferredLanguage: language,
      isDemoAccount: true,
    };
    const nextUsers = [...users, created];
    setUsers(nextUsers);
    writeLocalStorage(STORAGE_KEYS.users, nextUsers);

    const { password: _pwd, ...safeUser } = created;
    setCurrentUser(safeUser);
    writeLocalStorage(STORAGE_KEYS.currentUser, safeUser);
    return { ok: true };
  };

  const loginAsDemo = (role: 'user' | 'admin') => {
    const target =
      DEMO_USERS.find((u) => u.role === role) || DEMO_USERS[0];
    const { password: _pwd, ...safeUser } = target;
    setCurrentUser(safeUser);
    writeLocalStorage(STORAGE_KEYS.currentUser, safeUser);
  };

  const logout = () => {
    setCurrentUser(null);
    writeLocalStorage(STORAGE_KEYS.currentUser, null);
    if (route === '/dashboard' || route === '/admin') {
      navigate('/');
    }
  };

  const updateProfile = (updates: Partial<UserAccount>) => {
    if (!currentUser) return;
    const updatedUser: UserAccount = { ...currentUser, ...updates };
    setCurrentUser(updatedUser);
    writeLocalStorage(STORAGE_KEYS.currentUser, updatedUser);

    setUsers((prev) => {
      const next = prev.map((u) =>
        u.id === updatedUser.id ? { ...u, ...updates } : u
      );
      writeLocalStorage(STORAGE_KEYS.users, next);
      return next;
    });
  };

  const toggleSaveTutorial = (id: string) => {
    const tut = tutorials.find((item) => item.id === id);
    setSavedTutorialIds((prev) => {
      const exists = prev.includes(id);
      const next = exists ? prev.filter((item) => item !== id) : [id, ...prev];
      writeLocalStorage(STORAGE_KEYS.savedTutorials, next);
      if (!exists && tut) {
        pushActivity('tutorial_saved', `Saved tutorial: ${tut.title}`);
      }
      return next;
    });
  };

  const recordTutorialView = (id: string) => {
    const tut = tutorials.find((item) => item.id === id);
    setRecentTutorialIds((prev) => {
      const next = [id, ...prev.filter((item) => item !== id)].slice(0, 8);
      writeLocalStorage(STORAGE_KEYS.recentTutorials, next);
      return next;
    });
    if (tut) {
      pushActivity('tutorial_viewed', `Viewed: ${tut.title}`);
    }
  };

  const toggleCompleteTutorial = (id: string) => {
    const tut = tutorials.find((item) => item.id === id);
    setCompletedTutorialIds((prev) => {
      const exists = prev.includes(id);
      const next = exists ? prev.filter((item) => item !== id) : [id, ...prev];
      writeLocalStorage(STORAGE_KEYS.completedTutorials, next);
      if (!exists && tut) {
        pushActivity('tutorial_completed', `Completed: ${tut.title}`);
      }
      return next;
    });
  };

  const submitFeedback = (entry: Omit<FeedbackEntry, 'id' | 'createdAt'>) => {
    const created: FeedbackEntry = {
      ...entry,
      id: `fb-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setFeedbackList((prev) => {
      const next = [created, ...prev];
      writeLocalStorage(STORAGE_KEYS.feedback, next);
      return next;
    });
  };

  const submitContactMessage = (msg: Omit<ContactMessage, 'id' | 'createdAt'>) => {
    const created: ContactMessage = {
      ...msg,
      id: `msg-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setContactMessages((prev) => {
      const next = [created, ...prev];
      writeLocalStorage(STORAGE_KEYS.contacts, next);
      return next;
    });
  };

  const t = TRANSLATIONS[language];

  return (
    <AppContext.Provider
      value={{
        route,
        navigate,
        language,
        setLanguage,
        t,
        appliances,
        updateAppliance,
        tutorials,
        addTutorial,
        updateTutorial,
        deleteTutorial,
        maintenanceTasks,
        addMaintenanceTask,
        updateMaintenanceTask,
        toggleMaintenanceTask,
        deleteMaintenanceTask,
        currentUser,
        loginWithCredentials,
        signUpUser,
        loginAsDemo,
        logout,
        updateProfile,
        savedTutorialIds,
        toggleSaveTutorial,
        recentTutorialIds,
        recordTutorialView,
        completedTutorialIds,
        toggleCompleteTutorial,
        activities,
        feedbackList,
        submitFeedback,
        contactMessages,
        submitContactMessage,
        isSearchOpen,
        setSearchOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used inside AppProvider');
  }
  return ctx;
}
