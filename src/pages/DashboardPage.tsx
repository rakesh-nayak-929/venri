import React, { useState } from 'react';
import {
  Activity,
  ArrowRight,
  Bookmark,
  CalendarClock,
  Check,
  CheckCircle2,
  Clock,
  LogOut,
  Settings,
  ShieldCheck,
  User,
} from 'lucide-react';
import { computeMaintenanceStatus, useApp } from '../context/AppContext';
import { ApplianceId, LanguageCode } from '../types';
import { SmartImage } from '../components/SmartImage';

export const DashboardPage: React.FC = () => {
  const {
    currentUser,
    appliances,
    tutorials,
    savedTutorialIds,
    toggleSaveTutorial,
    recentTutorialIds,
    completedTutorialIds,
    maintenanceTasks,
    toggleMaintenanceTask,
    activities,
    updateProfile,
    setLanguage,
    logout,
    navigate,
  } = useApp();

  const [editingProfile, setEditingProfile] = useState(false);
  const [nameInput, setNameInput] = useState(currentUser?.name || '');
  const [savedToast, setSavedToast] = useState(false);

  if (!currentUser) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center space-y-5">
        <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center mx-auto">
          <User className="w-6 h-6" />
        </div>
        <h1 className="font-display text-2xl font-bold text-[#0F172A]">
          Sign In to View Your Dashboard
        </h1>
        <p className="text-sm text-[#475569]">
          Sign in with a local demo account or create one to track your
          preferred appliances, saved tutorials, and maintenance reminders.
        </p>
        <button
          type="button"
          onClick={() => navigate('/auth')}
          className="h-11 px-6 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold cursor-pointer"
        >
          Go to Sign In / Sign Up
        </button>
      </div>
    );
  }

  const selectedAppliances = appliances.filter((a) =>
    currentUser.preferredAppliances.includes(a.id)
  );
  const savedTutorials = tutorials.filter((t) =>
    savedTutorialIds.includes(t.id)
  );
  const recentTutorials = recentTutorialIds
    .map((id) => tutorials.find((t) => t.id === id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const upcomingReminders = maintenanceTasks.filter(
    (m) => computeMaintenanceStatus(m) !== 'Completed'
  );
  const completedReminders = maintenanceTasks.filter(
    (m) => computeMaintenanceStatus(m) === 'Completed'
  );

  const togglePreferredAppliance = (id: ApplianceId) => {
    const exists = currentUser.preferredAppliances.includes(id);
    const next = exists
      ? currentUser.preferredAppliances.filter((item) => item !== id)
      : [...currentUser.preferredAppliances, id];
    updateProfile({ preferredAppliances: next });
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) return;
    updateProfile({ name: nameInput.trim() });
    setEditingProfile(false);
    setSavedToast(true);
    window.setTimeout(() => setSavedToast(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Welcome & Profile Header */}
      <div className="bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748B]">
            <span className="font-semibold text-teal-800">
              {currentUser.role === 'admin'
                ? 'Content Admin (Demo Mode)'
                : 'Personal Learning Account (Demo Mode)'}
            </span>
            <span aria-hidden="true">·</span>
            <span>{currentUser.email}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A]">
            Welcome back, {currentUser.name}
          </h1>
          <p className="text-sm text-[#475569]">
            Manage your household appliances, revisit saved tutorials, and stay
            on top of upcoming care tasks.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => {
              setNameInput(currentUser.name);
              setEditingProfile((p) => !p);
            }}
            className="h-10 px-4 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] hover:border-teal-600 text-xs font-semibold text-[#0F172A] inline-flex items-center gap-2 cursor-pointer"
          >
            <Settings className="w-4 h-4 text-teal-700" />
            <span>Profile Settings</span>
          </button>

          {currentUser.role === 'admin' && (
            <button
              type="button"
              onClick={() => navigate('/admin')}
              className="h-10 px-4 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Admin Panel</span>
            </button>
          )}

          <button
            type="button"
            onClick={logout}
            className="h-10 px-4 rounded-xl border border-[#D8D2C8] bg-white hover:border-red-300 hover:text-red-700 text-xs font-semibold text-[#334155] inline-flex items-center gap-2 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Inline Profile Editor */}
      {editingProfile && (
        <form
          onSubmit={handleSaveProfile}
          className="bg-white rounded-2xl border border-teal-300 p-6 space-y-5"
        >
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-[#0F172A]">
              User Profile & Preferred Appliances
            </h2>
            {savedToast && (
              <span className="text-xs font-semibold text-emerald-700 inline-flex items-center gap-1">
                <Check className="w-4 h-4" />
                Saved
              </span>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label
                htmlFor="prof-name"
                className="block text-xs font-semibold text-[#334155]"
              >
                Display Name
              </label>
              <input
                id="prof-name"
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                className="w-full h-10 px-3.5 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-sm text-[#0F172A]"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="prof-lang"
                className="block text-xs font-semibold text-[#334155]"
              >
                Preferred Language
              </label>
              <select
                id="prof-lang"
                value={currentUser.preferredLanguage}
                onChange={(e) => {
                  const lang = e.target.value as LanguageCode;
                  updateProfile({ preferredLanguage: lang });
                  setLanguage(lang);
                }}
                className="w-full h-10 px-3.5 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-sm text-[#0F172A]"
              >
                <option value="en">English</option>
                <option value="te">తెలుగు (Telugu)</option>
                <option value="hi">हिन्दी (Hindi)</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <span className="block text-xs font-semibold text-[#334155]">
              Selected Home Appliances
            </span>
            <div className="flex flex-wrap gap-2">
              {appliances.map((app) => {
                const active = currentUser.preferredAppliances.includes(app.id);
                return (
                  <button
                    key={app.id}
                    type="button"
                    onClick={() => togglePreferredAppliance(app.id)}
                    className={`px-3.5 py-2 rounded-xl border text-xs font-semibold transition-colors cursor-pointer ${
                      active
                        ? 'bg-teal-700 border-teal-700 text-white'
                        : 'bg-[#FAF8F5] border-[#D8D2C8] text-[#475569]'
                    }`}
                  >
                    {app.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="h-10 px-5 rounded-xl bg-teal-700 text-white text-xs font-semibold cursor-pointer"
            >
              Save Profile
            </button>
            <button
              type="button"
              onClick={() => setEditingProfile(false)}
              className="h-10 px-4 rounded-xl border border-[#D8D2C8] text-xs font-semibold text-[#475569] cursor-pointer"
            >
              Close
            </button>
          </div>
        </form>
      )}

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border border-[#E5E0D8] p-5">
          <p className="text-xs text-[#64748B]">Selected Appliances</p>
          <p className="font-mono-nums text-2xl font-bold text-[#0F172A] mt-1">
            {selectedAppliances.length}
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-[#E5E0D8] p-5">
          <p className="text-xs text-[#64748B]">Saved Tutorials</p>
          <p className="font-mono-nums text-2xl font-bold text-teal-800 mt-1">
            {savedTutorials.length}
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-[#E5E0D8] p-5">
          <p className="text-xs text-[#64748B]">Tutorials Completed</p>
          <p className="font-mono-nums text-2xl font-bold text-emerald-700 mt-1">
            {completedTutorialIds.length}
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-[#E5E0D8] p-5">
          <p className="text-xs text-[#64748B]">Upcoming Reminders</p>
          <p className="font-mono-nums text-2xl font-bold text-amber-800 mt-1">
            {upcomingReminders.length}
          </p>
        </div>
      </div>

      {/* Selected Appliances */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-bold text-[#0F172A]">
            Your Selected Appliances
          </h2>
          <button
            type="button"
            onClick={() => setEditingProfile(true)}
            className="text-xs font-semibold text-teal-800 hover:underline cursor-pointer"
          >
            Customize Selection
          </button>
        </div>
        {selectedAppliances.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#E5E0D8] p-6 text-sm text-[#64748B]">
            No appliances selected yet. Open Profile Settings above to pick your
            household appliances.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {selectedAppliances.map((app) => (
              <button
                key={app.id}
                type="button"
                onClick={() => navigate(`/appliances/${app.id}`)}
                className="text-left bg-white rounded-2xl border border-[#E5E0D8] hover:border-teal-600 p-4 flex items-center gap-4 transition-colors cursor-pointer"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#F3EFE8] shrink-0">
                  <SmartImage
                    src={app.image}
                    alt={app.name}
                    className="w-full h-full object-cover"
                    fallbackLabel={app.name}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-base font-bold text-[#0F172A] truncate">
                    {app.name}
                  </p>
                  <p className="text-xs text-[#64748B] truncate">
                    {app.shortDesc}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-teal-700 shrink-0" />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Saved & Recently Viewed Tutorials */}
      <div className="grid lg:grid-cols-2 gap-8">
        <section className="bg-white rounded-2xl border border-[#E5E0D8] p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-teal-700" />
              <h2 className="font-display text-lg font-bold text-[#0F172A]">
                Saved Tutorials
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigate('/tutorials')}
              className="text-xs font-semibold text-teal-800 hover:underline cursor-pointer"
            >
              Browse All
            </button>
          </div>

          {savedTutorials.length === 0 ? (
            <p className="text-sm text-[#64748B] py-4">
              You haven&apos;t saved any tutorials yet. Click the bookmark icon
              on any tutorial to save it here.
            </p>
          ) : (
            <div className="divide-y divide-[#F3F0EA]">
              {savedTutorials.map((tut) => (
                <div
                  key={tut.id}
                  className="py-3 flex items-center justify-between gap-3"
                >
                  <button
                    type="button"
                    onClick={() => navigate(`/tutorials/${tut.id}`)}
                    className="text-left min-w-0 flex-1 cursor-pointer group"
                  >
                    <p className="text-sm font-semibold text-[#0F172A] group-hover:text-teal-800 truncate">
                      {tut.title}
                    </p>
                    <p className="text-xs text-[#64748B]">
                      {tut.applianceName} · {tut.estimatedMinutes} min
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleSaveTutorial(tut.id)}
                    className="text-xs text-[#64748B] hover:text-red-700 cursor-pointer shrink-0"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="bg-white rounded-2xl border border-[#E5E0D8] p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-teal-700" />
            <h2 className="font-display text-lg font-bold text-[#0F172A]">
              Recently Viewed Tutorials
            </h2>
          </div>

          {recentTutorials.length === 0 ? (
            <p className="text-sm text-[#64748B] py-4">
              Tutorials you open will appear here for quick access.
            </p>
          ) : (
            <div className="divide-y divide-[#F3F0EA]">
              {recentTutorials.map((tut) => (
                <button
                  key={tut.id}
                  type="button"
                  onClick={() => navigate(`/tutorials/${tut.id}`)}
                  className="w-full py-3 flex items-center justify-between gap-3 text-left cursor-pointer group"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#0F172A] group-hover:text-teal-800 truncate">
                      {tut.title}
                    </p>
                    <p className="text-xs text-[#64748B]">
                      {tut.applianceName} · {tut.category}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-teal-700 shrink-0" />
                </button>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Upcoming Maintenance & Completed Tasks + Learning Activity */}
      <div className="grid lg:grid-cols-12 gap-8">
        <section className="lg:col-span-7 bg-white rounded-2xl border border-[#E5E0D8] p-6 space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CalendarClock className="w-5 h-5 text-teal-700" />
              <h2 className="font-display text-lg font-bold text-[#0F172A]">
                Maintenance Reminders
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigate('/maintenance')}
              className="text-xs font-semibold text-teal-800 hover:underline cursor-pointer"
            >
              Manage All
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-semibold text-[#475569] mb-2">
                Upcoming & Due Today ({upcomingReminders.length})
              </h3>
              {upcomingReminders.length === 0 ? (
                <p className="text-xs text-[#64748B]">
                  All maintenance reminders are completed.
                </p>
              ) : (
                <div className="space-y-2">
                  {upcomingReminders.slice(0, 4).map((task) => (
                    <div
                      key={task.id}
                      className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#0F172A] truncate">
                          {task.taskTitle}
                        </p>
                        <p className="text-xs text-[#64748B] font-mono-nums">
                          {task.applianceName} · Due {task.dueDate}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleMaintenanceTask(task.id)}
                        className="h-8 px-3 rounded-lg bg-emerald-700 text-white text-xs font-semibold shrink-0 cursor-pointer"
                      >
                        Done
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-[#EFECE6]">
              <h3 className="text-xs font-semibold text-[#475569] mb-2">
                Completed Tasks ({completedReminders.length})
              </h3>
              {completedReminders.length === 0 ? (
                <p className="text-xs text-[#64748B]">
                  No completed maintenance tasks yet.
                </p>
              ) : (
                <div className="space-y-1.5">
                  {completedReminders.slice(0, 3).map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between gap-3 text-xs text-[#64748B] py-1"
                    >
                      <span className="inline-flex items-center gap-1.5 truncate">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span className="line-through truncate">
                          {task.taskTitle}
                        </span>
                      </span>
                      <span className="font-mono-nums shrink-0">
                        {task.applianceName}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="lg:col-span-5 bg-white rounded-2xl border border-[#E5E0D8] p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-teal-700" />
            <h2 className="font-display text-lg font-bold text-[#0F172A]">
              Learning Activity
            </h2>
          </div>

          {activities.length === 0 ? (
            <p className="text-sm text-[#64748B]">
              Start reading tutorials or completing tasks to see your activity.
            </p>
          ) : (
            <div className="divide-y divide-[#F3F0EA]">
              {activities.slice(0, 7).map((act) => (
                <div key={act.id} className="py-2.5 space-y-0.5">
                  <p className="text-xs font-medium text-[#0F172A]">
                    {act.label}
                  </p>
                  <p className="text-[11px] text-[#64748B] font-mono-nums">
                    {new Date(act.timestamp).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
