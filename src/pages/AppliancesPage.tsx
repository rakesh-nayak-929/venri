import React, { useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BellPlus,
  BookOpen,
  Check,
  ChevronDown,
  ChevronUp,
  Info,
  ShieldAlert,
  Sparkles,
  Wrench,
  Zap,
} from 'lucide-react';
import { useApp, getTodayDateString } from '../context/AppContext';
import { SmartImage } from '../components/SmartImage';
import { ApplianceId } from '../types';

interface AppliancesPageProps {
  applianceId?: string;
}

export const AppliancesPage: React.FC<AppliancesPageProps> = ({
  applianceId,
}) => {
  const {
    appliances,
    tutorials,
    navigate,
    addMaintenanceTask,
    t,
  } = useApp();

  const [openProblemIdx, setOpenProblemIdx] = useState<number | null>(0);
  const [reminderAddedFor, setReminderAddedFor] = useState<string | null>(null);

  const selected = applianceId
    ? appliances.find((a) => a.id === applianceId)
    : undefined;

  if (!applianceId) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div className="max-w-2xl space-y-2">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
            {t.sections.popularAppliances}
          </h1>
          <p className="text-base text-[#475569]">
            {t.sections.popularAppliancesSub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {appliances.map((app) => {
            const count = tutorials.filter(
              (tut) => tut.applianceId === app.id
            ).length;
            return (
              <article
                key={app.id}
                onClick={() => navigate(`/appliances/${app.id}`)}
                className="group bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden hover:border-teal-600 hover:shadow-md transition-all cursor-pointer flex flex-col"
              >
                <div className="aspect-[4/3] bg-[#F3EFE8] overflow-hidden">
                  <SmartImage
                    src={app.image}
                    alt={app.name}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
                    fallbackLabel={app.name}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <h2 className="font-display text-xl font-bold text-[#0F172A] group-hover:text-teal-800">
                      {app.name}
                    </h2>
                    <p className="text-sm text-[#475569] leading-relaxed">
                      {app.shortDesc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#F3F0EA] flex items-center justify-between text-sm">
                    <span className="text-xs text-[#64748B] font-mono-nums">
                      {app.parts.length} parts · {count} tutorials
                    </span>
                    <span className="font-semibold text-teal-700 inline-flex items-center gap-1.5">
                      <span>{t.sections.exploreAppliance}</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    );
  }

  if (!selected) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="font-display text-2xl font-bold text-[#0F172A]">
          Appliance Guide Not Found
        </h1>
        <p className="text-sm text-[#475569]">
          Choose from one of our six supported household appliance guides.
        </p>
        <button
          type="button"
          onClick={() => navigate('/appliances')}
          className="h-11 px-5 rounded-xl bg-teal-700 text-white text-sm font-semibold cursor-pointer"
        >
          Back to Appliances
        </button>
      </div>
    );
  }

  const relatedTutorials = tutorials.filter(
    (tut) => tut.applianceId === selected.id
  );

  const handleQuickReminder = (id: ApplianceId, defaultTask: string) => {
    addMaintenanceTask({
      applianceId: id,
      taskTitle: defaultTask,
      dueDate: getTodayDateString(),
      notes: `Scheduled from ${selected.name} guide.`,
    });
    setReminderAddedFor(id);
  };

  const sectionNav = [
    { id: 'intro', label: 'A. Introduction' },
    { id: 'parts', label: 'B. Parts' },
    { id: 'usage', label: 'C. How to Use' },
    { id: 'settings', label: 'D. Settings' },
    { id: 'safety', label: 'E. Safety' },
    { id: 'cleaning', label: 'F. Cleaning' },
    { id: 'problems', label: 'G. Problems' },
    { id: 'energy', label: 'H. Energy Tips' },
    { id: 'tutorials', label: 'I. Tutorials' },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`app-sec-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Breadcrumb & Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => navigate('/appliances')}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#475569] hover:text-teal-800 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Appliances</span>
        </button>

        <div className="flex flex-wrap gap-1.5">
          {appliances.map((app) => (
            <button
              key={app.id}
              type="button"
              onClick={() => {
                setOpenProblemIdx(0);
                setReminderAddedFor(null);
                navigate(`/appliances/${app.id}`);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                app.id === selected.id
                  ? 'bg-teal-700 text-white'
                  : 'bg-white border border-[#E2DDD4] text-[#334155] hover:border-teal-600'
              }`}
            >
              {app.name}
            </button>
          ))}
        </div>
      </div>

      {/* Header Card */}
      <div className="bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden grid lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-5 bg-[#F3EFE8] min-h-[260px]">
          <SmartImage
            src={selected.image}
            alt={selected.name}
            className="w-full h-full object-cover"
            fallbackLabel={selected.name}
          />
        </div>
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold text-teal-800">
              VENRI Appliance Reference Guide
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
              {selected.name}
            </h1>
            <p className="text-base text-[#334155] leading-relaxed">
              {selected.shortDesc}
            </p>
          </div>

          {/* General educational notice */}
          <div className="rounded-xl bg-[#FAF8F5] border border-[#E2DDD4] p-4 flex items-start gap-3">
            <Info className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
            <p className="text-xs text-[#475569] leading-relaxed">
              General educational guidance: Settings and routines vary by brand
              and capacity. Always follow your appliance manufacturer&apos;s manual
              and consult an authorised technician for electrical or internal
              repairs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() =>
                handleQuickReminder(selected.id, selected.defaultMaintenanceTask)
              }
              className="h-11 px-4 rounded-xl bg-teal-700 text-white hover:bg-teal-800 text-xs font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer"
            >
              {reminderAddedFor === selected.id ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Today&apos;s Reminders</span>
                </>
              ) : (
                <>
                  <BellPlus className="w-4 h-4" />
                  <span>Add Reminder: {selected.defaultMaintenanceTask}</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => navigate('/maintenance')}
              className="h-11 px-4 rounded-xl border border-[#D8D2C8] bg-white text-[#0F172A] hover:bg-[#FAF8F5] text-xs font-semibold cursor-pointer"
            >
              Open Maintenance Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Quick Section Jump Bar */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-[#E5E0D8]">
        {sectionNav.map((sec) => (
          <button
            key={sec.id}
            type="button"
            onClick={() => scrollToSection(sec.id)}
            className="px-3 py-1.5 rounded-lg bg-white border border-[#E2DDD4] hover:border-teal-600 text-xs font-medium text-[#334155] hover:text-teal-800 transition-colors cursor-pointer whitespace-nowrap"
          >
            {sec.label}
          </button>
        ))}
      </div>

      {/* A. Introduction */}
      <section
        id="app-sec-intro"
        className="bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-8 space-y-4 scroll-mt-24"
      >
        <h2 className="font-display text-xl font-bold text-[#0F172A]">
          A. Introduction
        </h2>
        <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
          {selected.introduction}
        </p>
        <div className="pt-2">
          <h3 className="text-sm font-semibold text-[#0F172A] mb-2.5">
            Common Household Uses
          </h3>
          <ul className="grid sm:grid-cols-2 gap-2.5">
            {selected.commonUses.map((use) => (
              <li
                key={use}
                className="flex items-start gap-2.5 text-sm text-[#475569]"
              >
                <Check className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>{use}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* B. Parts and Components */}
      <section
        id="app-sec-parts"
        className="bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-8 space-y-5 scroll-mt-24"
      >
        <h2 className="font-display text-xl font-bold text-[#0F172A]">
          B. Parts and Components
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {selected.parts.map((part, idx) => (
            <div
              key={part.name}
              className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] space-y-1.5"
            >
              <p className="text-xs font-mono-nums font-semibold text-teal-800">
                0{idx + 1}.
              </p>
              <h3 className="font-display text-base font-bold text-[#0F172A]">
                {part.name}
              </h3>
              <p className="text-sm text-[#475569]">{part.functionDesc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* C. How to Use */}
      <section
        id="app-sec-usage"
        className="bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-8 space-y-5 scroll-mt-24"
      >
        <h2 className="font-display text-xl font-bold text-[#0F172A]">
          C. How to Use (Step-by-Step)
        </h2>
        <ol className="space-y-3">
          {selected.howToUseSteps.map((step, idx) => (
            <li
              key={step}
              className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8]"
            >
              <span className="w-7 h-7 rounded-lg bg-teal-700 text-white font-mono-nums text-xs font-semibold flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <p className="text-sm text-[#334155] leading-relaxed pt-0.5">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* D. Recommended Settings */}
      <section
        id="app-sec-settings"
        className="bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-8 space-y-5 scroll-mt-24"
      >
        <div className="space-y-1">
          <h2 className="font-display text-xl font-bold text-[#0F172A]">
            D. Recommended General Settings
          </h2>
          <p className="text-xs text-[#64748B]">
            Refer to your specific model&apos;s manual for exact temperature numbers
            and wattage ratings.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#E5E0D8] text-xs font-semibold text-[#475569]">
                <th className="py-3 pr-4">Mode / Setting</th>
                <th className="py-3 px-4">Best For</th>
                <th className="py-3 pl-4">Practical Guidance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F3F0EA] text-sm">
              {selected.recommendedSettings.map((setting) => (
                <tr key={setting.name}>
                  <td className="py-3.5 pr-4 font-semibold text-[#0F172A] whitespace-nowrap">
                    {setting.name}
                  </td>
                  <td className="py-3.5 px-4 text-[#334155]">
                    {setting.purpose}
                  </td>
                  <td className="py-3.5 pl-4 text-[#475569]">
                    {setting.guidance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* E. Safety Precautions & F. Cleaning */}
      <div className="grid lg:grid-cols-2 gap-6">
        <section
          id="app-sec-safety"
          className="bg-amber-50/60 rounded-2xl border border-amber-200 p-6 sm:p-8 space-y-4 scroll-mt-24"
        >
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-5 h-5 text-amber-700" />
            <h2 className="font-display text-xl font-bold text-[#0F172A]">
              E. Safety Precautions
            </h2>
          </div>
          <ul className="space-y-3">
            {selected.safetyPrecautions.map((rule) => (
              <li
                key={rule}
                className="flex items-start gap-2.5 text-sm text-[#334155]"
              >
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="app-sec-cleaning"
          className="bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-8 space-y-4 scroll-mt-24"
        >
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-teal-700" />
            <h2 className="font-display text-xl font-bold text-[#0F172A]">
              F. Cleaning and Maintenance
            </h2>
          </div>
          <ol className="space-y-3">
            {selected.cleaningSteps.map((step, idx) => (
              <li
                key={step}
                className="flex items-start gap-3 text-sm text-[#334155]"
              >
                <span className="font-mono-nums text-xs font-semibold text-teal-800 mt-0.5">
                  0{idx + 1}.
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {/* G. Common Problems and Solutions */}
      <section
        id="app-sec-problems"
        className="bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-8 space-y-4 scroll-mt-24"
      >
        <div className="flex items-center gap-2.5">
          <Wrench className="w-5 h-5 text-teal-700" />
          <h2 className="font-display text-xl font-bold text-[#0F172A]">
            G. Common Problems and Solutions
          </h2>
        </div>

        <div className="divide-y divide-[#EFECE6] border border-[#E5E0D8] rounded-xl overflow-hidden">
          {selected.troubleshooting.map((item, idx) => {
            const isOpen = openProblemIdx === idx;
            return (
              <div key={item.problem} className="bg-white">
                <button
                  type="button"
                  onClick={() => setOpenProblemIdx(isOpen ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                >
                  <span className="font-display text-sm sm:text-base font-semibold text-[#0F172A]">
                    {item.problem}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#64748B] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#64748B] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 pt-1 bg-[#FAF8F5] space-y-2 text-sm">
                    <p className="text-[#475569]">
                      <span className="font-semibold text-[#0F172A]">
                        Likely Cause:{' '}
                      </span>
                      {item.possibleCause}
                    </p>
                    <p className="text-[#334155]">
                      <span className="font-semibold text-teal-800">
                        Recommended Action:{' '}
                      </span>
                      {item.solution}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* H. Energy-Saving Tips */}
      <section
        id="app-sec-energy"
        className="bg-emerald-50/50 rounded-2xl border border-emerald-200 p-6 sm:p-8 space-y-4 scroll-mt-24"
      >
        <div className="flex items-center gap-2.5">
          <Zap className="w-5 h-5 text-emerald-700" />
          <h2 className="font-display text-xl font-bold text-[#0F172A]">
            H. Energy-Saving Tips
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {selected.energySavingTips.map((tip) => (
            <div
              key={tip}
              className="p-4 rounded-xl bg-white border border-emerald-200/80 text-sm text-[#334155]"
            >
              {tip}
            </div>
          ))}
        </div>
      </section>

      {/* I. Related Tutorials */}
      <section id="app-sec-tutorials" className="space-y-5 scroll-mt-24">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-teal-700" />
            <h2 className="font-display text-xl font-bold text-[#0F172A]">
              I. Related {selected.name} Tutorials
            </h2>
          </div>
          <button
            type="button"
            onClick={() => navigate('/tutorials')}
            className="text-sm font-semibold text-teal-800 hover:text-teal-900 cursor-pointer"
          >
            Browse All Tutorials
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedTutorials.map((tut) => (
            <article
              key={tut.id}
              onClick={() => navigate(`/tutorials/${tut.id}`)}
              className="bg-white rounded-2xl border border-[#E5E0D8] p-5 hover:border-teal-600 transition-all cursor-pointer flex flex-col justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#64748B]">
                  <span className="font-medium text-teal-800">
                    {tut.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{tut.difficulty}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{tut.estimatedMinutes} min</span>
                </div>
                <h3 className="font-display text-base font-bold text-[#0F172A]">
                  {tut.title}
                </h3>
                <p className="text-sm text-[#475569]">{tut.shortDesc}</p>
              </div>
              <span className="text-xs font-semibold text-teal-700 inline-flex items-center gap-1.5">
                <span>Read Tutorial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
