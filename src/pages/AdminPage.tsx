import React, { useState } from 'react';
import {
  BookOpen,
  CalendarClock,
  Check,
  Edit3,
  MessageSquare,
  Plus,
  ShieldCheck,
  Star,
  Trash2,
  Wrench,
  X,
} from 'lucide-react';
import { computeMaintenanceStatus, useApp } from '../context/AppContext';
import {
  Appliance,
  ApplianceId,
  DifficultyLevel,
  Tutorial,
  TutorialCategory,
} from '../types';

const CATEGORIES: TutorialCategory[] = [
  'Getting Started',
  'How to Operate',
  'Understanding Settings',
  'Cleaning and Maintenance',
  'Safety Instructions',
  'Troubleshooting',
  'Energy Saving',
];

export const AdminPage: React.FC = () => {
  const {
    currentUser,
    loginAsDemo,
    navigate,
    appliances,
    updateAppliance,
    tutorials,
    addTutorial,
    updateTutorial,
    deleteTutorial,
    feedbackList,
    contactMessages,
    maintenanceTasks,
  } = useApp();

  const [tab, setTab] = useState<
    'tutorials' | 'appliances' | 'feedback' | 'maintenance'
  >('tutorials');

  // Tutorial Add/Edit State
  const [editingTutId, setEditingTutId] = useState<string | null>(null);
  const [tutTitle, setTutTitle] = useState('');
  const [tutAppId, setTutAppId] = useState<ApplianceId>('air-fryer');
  const [tutCategory, setTutCategory] =
    useState<TutorialCategory>('How to Operate');
  const [tutDifficulty, setTutDifficulty] =
    useState<DifficultyLevel>('Beginner');
  const [tutMinutes, setTutMinutes] = useState(6);
  const [tutDesc, setTutDesc] = useState('');
  const [tutStepsText, setTutStepsText] = useState('');
  const [tutWarning, setTutWarning] = useState('');
  const [tutFormMsg, setTutFormMsg] = useState('');

  // Appliance Category Edit State
  const [editingAppId, setEditingAppId] = useState<ApplianceId | null>(null);
  const [appDescEdit, setAppDescEdit] = useState('');
  const [appMaintEdit, setAppMaintEdit] = useState('');

  if (!currentUser || currentUser.role !== 'admin') {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center space-y-5">
        <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center mx-auto">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <h1 className="font-display text-2xl font-bold text-[#0F172A]">
          Admin Access Required
        </h1>
        <p className="text-sm text-[#475569]">
          Sign in with the Demo Content Admin role to manage appliance
          tutorials, categories, user feedback, and maintenance templates.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => loginAsDemo('admin')}
            className="h-11 px-5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold cursor-pointer"
          >
            Enter Demo Admin Mode
          </button>
          <button
            type="button"
            onClick={() => navigate('/auth')}
            className="h-11 px-5 rounded-xl border border-[#D8D2C8] bg-white text-sm font-semibold text-[#0F172A] cursor-pointer"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const resetTutorialForm = () => {
    setEditingTutId(null);
    setTutTitle('');
    setTutAppId('air-fryer');
    setTutCategory('How to Operate');
    setTutDifficulty('Beginner');
    setTutMinutes(6);
    setTutDesc('');
    setTutStepsText('');
    setTutWarning('');
  };

  const handleLoadTutorialForEdit = (tut: Tutorial) => {
    setEditingTutId(tut.id);
    setTutTitle(tut.title);
    setTutAppId(tut.applianceId);
    setTutCategory(tut.category);
    setTutDifficulty(tut.difficulty);
    setTutMinutes(tut.estimatedMinutes);
    setTutDesc(tut.shortDesc);
    setTutStepsText(
      tut.steps.map((s) => `${s.heading}: ${s.detail}`).join('\n')
    );
    setTutWarning(tut.safetyWarnings.join('\n'));
    setTutFormMsg('');
  };

  const handleSaveTutorial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tutTitle.trim() || !tutDesc.trim()) {
      setTutFormMsg('Please provide a tutorial title and short description.');
      return;
    }

    const app = appliances.find((a) => a.id === tutAppId);
    const parsedSteps = tutStepsText
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line, i) => {
        const colonIdx = line.indexOf(':');
        if (colonIdx > 0) {
          return {
            heading: line.slice(0, colonIdx).trim(),
            detail: line.slice(colonIdx + 1).trim(),
          };
        }
        return {
          heading: `Step ${i + 1}`,
          detail: line,
        };
      });

    const finalSteps =
      parsedSteps.length > 0
        ? parsedSteps
        : [
            {
              heading: 'Prepare safely',
              detail:
                'Follow your manufacturer manual before starting this procedure.',
            },
          ];

    const warnings = tutWarning
      .split('\n')
      .map((w) => w.trim())
      .filter(Boolean);

    const payload = {
      title: tutTitle.trim(),
      applianceId: tutAppId,
      applianceName: app?.name || 'Appliance',
      category: tutCategory,
      shortDesc: tutDesc.trim(),
      difficulty: tutDifficulty,
      estimatedMinutes: Math.max(1, Number(tutMinutes) || 5),
      image: app?.image || '/src/assets/images/appliance_air_fryer_1795050733114.jpg',
      steps: finalSteps,
      safetyWarnings:
        warnings.length > 0
          ? warnings
          : [
              'Always follow your appliance manufacturer instructions and unplug before cleaning.',
            ],
      videoSummary: `Sample educational video walkthrough for ${tutTitle.trim()}.`,
      videoChapters: [
        {
          time: '00:00',
          title: 'Setup & safety check',
          caption: finalSteps[0].detail,
        },
        {
          time: '02:00',
          title: 'Core steps',
          caption: finalSteps[Math.min(1, finalSteps.length - 1)].detail,
        },
      ],
    };

    if (editingTutId) {
      const existing = tutorials.find((t) => t.id === editingTutId);
      if (existing) {
        updateTutorial({ ...existing, ...payload });
        setTutFormMsg('Tutorial updated successfully.');
      }
    } else {
      addTutorial(payload);
      setTutFormMsg('New tutorial added to the library.');
    }
    resetTutorialForm();
  };

  const startEditAppliance = (app: Appliance) => {
    setEditingAppId(app.id);
    setAppDescEdit(app.shortDesc);
    setAppMaintEdit(app.defaultMaintenanceTask);
  };

  const saveEditAppliance = (app: Appliance) => {
    if (!appDescEdit.trim()) return;
    updateAppliance({
      ...app,
      shortDesc: appDescEdit.trim(),
      defaultMaintenanceTask:
        appMaintEdit.trim() || app.defaultMaintenanceTask,
    });
    setEditingAppId(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-teal-800">
            VENRI Content Management (Demo Mode)
          </p>
          <h1 className="font-display text-3xl font-bold text-[#0F172A]">
            Admin Dashboard
          </h1>
        </div>
        <button
          type="button"
          onClick={() => navigate('/dashboard')}
          className="h-10 px-4 rounded-xl border border-[#D8D2C8] bg-white text-xs font-semibold text-[#0F172A] cursor-pointer self-start sm:self-auto"
        >
          Switch to User View
        </button>
      </div>

      {/* Section Tabs */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-[#E5E0D8]">
        {[
          {
            id: 'tutorials' as const,
            label: `Tutorials (${tutorials.length})`,
            icon: BookOpen,
          },
          {
            id: 'appliances' as const,
            label: `Appliance Categories (${appliances.length})`,
            icon: Wrench,
          },
          {
            id: 'feedback' as const,
            label: `Feedback & Messages (${feedbackList.length + contactMessages.length})`,
            icon: MessageSquare,
          },
          {
            id: 'maintenance' as const,
            label: `Maintenance Tasks (${maintenanceTasks.length})`,
            icon: CalendarClock,
          },
        ].map((item) => {
          const Icon = item.icon;
          const active = tab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer ${
                active
                  ? 'bg-teal-700 text-white'
                  : 'bg-white border border-[#E2DDD4] text-[#334155] hover:border-teal-600'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: TUTORIALS CRUD */}
      {tab === 'tutorials' && (
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <form
            onSubmit={handleSaveTutorial}
            className="lg:col-span-5 bg-white rounded-2xl border border-[#E5E0D8] p-6 space-y-4"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-bold text-[#0F172A]">
                {editingTutId ? 'Edit Tutorial' : 'Add New Tutorial'}
              </h2>
              {editingTutId && (
                <button
                  type="button"
                  onClick={resetTutorialForm}
                  className="text-xs text-[#64748B] hover:text-[#0F172A] cursor-pointer"
                >
                  Cancel Edit
                </button>
              )}
            </div>

            <div className="space-y-1">
              <label
                htmlFor="adm-tut-title"
                className="block text-xs font-semibold text-[#334155]"
              >
                Tutorial Title
              </label>
              <input
                id="adm-tut-title"
                type="text"
                value={tutTitle}
                onChange={(e) => setTutTitle(e.target.value)}
                placeholder="e.g., Descaling Your Dishwasher Safely"
                className="w-full h-10 px-3 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-sm text-[#0F172A]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label
                  htmlFor="adm-tut-app"
                  className="block text-xs font-semibold text-[#334155]"
                >
                  Appliance
                </label>
                <select
                  id="adm-tut-app"
                  value={tutAppId}
                  onChange={(e) => setTutAppId(e.target.value as ApplianceId)}
                  className="w-full h-10 px-3 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-xs text-[#0F172A]"
                >
                  {appliances.map((app) => (
                    <option key={app.id} value={app.id}>
                      {app.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="adm-tut-cat"
                  className="block text-xs font-semibold text-[#334155]"
                >
                  Category
                </label>
                <select
                  id="adm-tut-cat"
                  value={tutCategory}
                  onChange={(e) =>
                    setTutCategory(e.target.value as TutorialCategory)
                  }
                  className="w-full h-10 px-3 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-xs text-[#0F172A]"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label
                  htmlFor="adm-tut-diff"
                  className="block text-xs font-semibold text-[#334155]"
                >
                  Difficulty
                </label>
                <select
                  id="adm-tut-diff"
                  value={tutDifficulty}
                  onChange={(e) =>
                    setTutDifficulty(e.target.value as DifficultyLevel)
                  }
                  className="w-full h-10 px-3 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-xs text-[#0F172A]"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Essential">Essential</option>
                </select>
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="adm-tut-min"
                  className="block text-xs font-semibold text-[#334155]"
                >
                  Est. Minutes
                </label>
                <input
                  id="adm-tut-min"
                  type="number"
                  min={1}
                  max={60}
                  value={tutMinutes}
                  onChange={(e) => setTutMinutes(Number(e.target.value))}
                  className="w-full h-10 px-3 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-sm font-mono-nums text-[#0F172A]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="adm-tut-desc"
                className="block text-xs font-semibold text-[#334155]"
              >
                Short Description
              </label>
              <textarea
                id="adm-tut-desc"
                rows={2}
                value={tutDesc}
                onChange={(e) => setTutDesc(e.target.value)}
                placeholder="Brief summary shown on cards..."
                className="w-full p-3 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-sm text-[#0F172A]"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="adm-tut-steps"
                className="block text-xs font-semibold text-[#334155]"
              >
                Step-by-Step Instructions (one per line, Heading: Detail)
              </label>
              <textarea
                id="adm-tut-steps"
                rows={3}
                value={tutStepsText}
                onChange={(e) => setTutStepsText(e.target.value)}
                placeholder="Unplug unit: Wait until appliance cools down.&#10;Wipe gently: Use a soft microfiber cloth."
                className="w-full p-3 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-xs text-[#0F172A]"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="adm-tut-warn"
                className="block text-xs font-semibold text-[#334155]"
              >
                Safety Warnings (one per line)
              </label>
              <textarea
                id="adm-tut-warn"
                rows={2}
                value={tutWarning}
                onChange={(e) => setTutWarning(e.target.value)}
                placeholder="Never submerge electrical base in water."
                className="w-full p-3 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-xs text-[#0F172A]"
              />
            </div>

            {tutFormMsg && (
              <p className="text-xs font-semibold text-teal-800">{tutFormMsg}</p>
            )}

            <button
              type="submit"
              className="w-full h-11 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>{editingTutId ? 'Update Tutorial' : 'Publish Tutorial'}</span>
            </button>
          </form>

          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden">
            <div className="px-5 py-4 border-b border-[#EFECE6] flex items-center justify-between">
              <h2 className="font-display text-base font-bold text-[#0F172A]">
                Published Tutorials ({tutorials.length})
              </h2>
            </div>
            <div className="divide-y divide-[#F3F0EA] max-h-[640px] overflow-y-auto">
              {tutorials.map((tut) => (
                <div
                  key={tut.id}
                  className="p-4 flex items-center justify-between gap-4 hover:bg-[#FAF8F5]"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#0F172A] truncate">
                      {tut.title}
                    </p>
                    <p className="text-xs text-[#64748B]">
                      {tut.applianceName} · {tut.category} ·{' '}
                      <span className="tabular-nums">
                        {tut.estimatedMinutes} min
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleLoadTutorialForEdit(tut)}
                      aria-label={`Edit ${tut.title}`}
                      className="h-9 w-9 rounded-lg border border-[#E2DDD4] bg-white text-[#475569] hover:text-teal-800 flex items-center justify-center cursor-pointer"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteTutorial(tut.id)}
                      aria-label={`Delete ${tut.title}`}
                      className="h-9 w-9 rounded-lg border border-[#E2DDD4] bg-white text-[#475569] hover:text-red-700 flex items-center justify-center cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: APPLIANCE CATEGORIES */}
      {tab === 'appliances' && (
        <div className="grid md:grid-cols-2 gap-6">
          {appliances.map((app) => {
            const isEditing = editingAppId === app.id;
            const tutCount = tutorials.filter(
              (t) => t.applianceId === app.id
            ).length;
            return (
              <div
                key={app.id}
                className="bg-white rounded-2xl border border-[#E5E0D8] p-6 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-display text-lg font-bold text-[#0F172A]">
                      {app.name}
                    </h2>
                    <p className="text-xs text-[#64748B] font-mono-nums">
                      {tutCount} tutorials · {app.parts.length} documented parts
                    </p>
                  </div>
                  {!isEditing && (
                    <button
                      type="button"
                      onClick={() => startEditAppliance(app)}
                      className="h-9 px-3 rounded-lg border border-[#D8D2C8] text-xs font-semibold text-[#334155] hover:border-teal-600 inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>
                  )}
                </div>

                {isEditing ? (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#334155] mb-1">
                        Category Summary
                      </label>
                      <textarea
                        rows={2}
                        value={appDescEdit}
                        onChange={(e) => setAppDescEdit(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-[#D8D2C8] text-sm text-[#0F172A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#334155] mb-1">
                        Default Maintenance Task
                      </label>
                      <input
                        type="text"
                        value={appMaintEdit}
                        onChange={(e) => setAppMaintEdit(e.target.value)}
                        className="w-full h-10 px-3 rounded-xl border border-[#D8D2C8] text-sm text-[#0F172A]"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => saveEditAppliance(app)}
                        className="h-9 px-3.5 rounded-lg bg-teal-700 text-white text-xs font-semibold inline-flex items-center gap-1 cursor-pointer"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Save</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingAppId(null)}
                        className="h-9 px-3.5 rounded-lg border border-[#D8D2C8] text-xs font-semibold text-[#475569] inline-flex items-center gap-1 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 text-sm text-[#475569]">
                    <p>{app.shortDesc}</p>
                    <p className="text-xs text-[#64748B]">
                      Default reminder:{' '}
                      <span className="font-semibold text-[#0F172A]">
                        {app.defaultMaintenanceTask}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* TAB 3: USER FEEDBACK & MESSAGES */}
      {tab === 'feedback' && (
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-[#E5E0D8] p-6 space-y-4">
            <h2 className="font-display text-lg font-bold text-[#0F172A]">
              User Learning Feedback ({feedbackList.length})
            </h2>
            {feedbackList.length === 0 ? (
              <p className="text-sm text-[#64748B]">No feedback submitted yet.</p>
            ) : (
              <div className="space-y-3">
                {feedbackList.map((fb) => (
                  <div
                    key={fb.id}
                    className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-teal-800">
                        {fb.applianceName}
                      </span>
                      <span className="inline-flex items-center gap-1 font-mono-nums font-semibold text-amber-700">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        {fb.rating}/5
                      </span>
                    </div>
                    <p className="text-sm text-[#334155]">{fb.suggestions}</p>
                    {fb.confusingInfo && (
                      <p className="text-xs text-amber-900 bg-amber-50 p-2 rounded-lg">
                        Reported unclear: {fb.confusingInfo}
                      </p>
                    )}
                    <p className="text-[11px] text-[#64748B]">
                      By {fb.userName || 'User'} ·{' '}
                      {new Date(fb.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl border border-[#E5E0D8] p-6 space-y-4">
            <h2 className="font-display text-lg font-bold text-[#0F172A]">
              Contact Messages ({contactMessages.length})
            </h2>
            {contactMessages.length === 0 ? (
              <p className="text-sm text-[#64748B]">
                No contact inquiries yet. Submissions from the Contact Us form
                will appear here.
              </p>
            ) : (
              <div className="space-y-3">
                {contactMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] space-y-1.5"
                  >
                    <p className="text-sm font-bold text-[#0F172A]">
                      {msg.subject}
                    </p>
                    <p className="text-xs text-teal-800">
                      {msg.name} ({msg.email})
                    </p>
                    <p className="text-sm text-[#334155] pt-1">{msg.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 4: MAINTENANCE OVERVIEW */}
      {tab === 'maintenance' && (
        <div className="bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#EFECE6] flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-[#0F172A]">
              Active Maintenance Content ({maintenanceTasks.length})
            </h2>
            <button
              type="button"
              onClick={() => navigate('/maintenance')}
              className="text-xs font-semibold text-teal-800 hover:underline cursor-pointer"
            >
              Open Maintenance Planner
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E0D8] text-xs font-semibold text-[#475569]">
                  <th className="py-3 px-6">Task</th>
                  <th className="py-3 px-4">Appliance</th>
                  <th className="py-3 px-4">Due Date</th>
                  <th className="py-3 px-6">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3F0EA] text-sm">
                {maintenanceTasks.map((task) => (
                  <tr key={task.id}>
                    <td className="py-3.5 px-6 font-medium text-[#0F172A]">
                      {task.taskTitle}
                    </td>
                    <td className="py-3.5 px-4 text-[#475569]">
                      {task.applianceName}
                    </td>
                    <td className="py-3.5 px-4 font-mono-nums text-[#475569]">
                      {task.dueDate}
                    </td>
                    <td className="py-3.5 px-6 text-xs font-semibold text-teal-800">
                      {computeMaintenanceStatus(task)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
