import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Clock,
  Pause,
  Play,
  RotateCcw,
  Video,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SmartImage } from '../components/SmartImage';
import { ApplianceId, TutorialCategory } from '../types';

const TUTORIAL_CATEGORIES: ('All' | TutorialCategory)[] = [
  'All',
  'Getting Started',
  'How to Operate',
  'Understanding Settings',
  'Cleaning and Maintenance',
  'Safety Instructions',
  'Troubleshooting',
  'Energy Saving',
];

interface TutorialsPageProps {
  tutorialId?: string;
}

export const TutorialsPage: React.FC<TutorialsPageProps> = ({ tutorialId }) => {
  const {
    tutorials,
    appliances,
    navigate,
    savedTutorialIds,
    toggleSaveTutorial,
    recordTutorialView,
    completedTutorialIds,
    toggleCompleteTutorial,
    t,
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<'All' | TutorialCategory>('All');
  const [selectedAppliance, setSelectedAppliance] = useState<'all' | ApplianceId>('all');
  const [searchFilter, setSearchFilter] = useState('');

  // Detail view local states
  const [checkedSteps, setCheckedSteps] = useState<number[]>([]);
  const [activeChapterIdx, setActiveChapterIdx] = useState(0);
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);

  const currentIndex = tutorialId
    ? tutorials.findIndex((item) => item.id === tutorialId)
    : -1;
  const activeTutorial = currentIndex >= 0 ? tutorials[currentIndex] : undefined;

  useEffect(() => {
    if (activeTutorial) {
      recordTutorialView(activeTutorial.id);
      setCheckedSteps([]);
      setActiveChapterIdx(0);
      setIsPlayingDemo(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTutorial?.id]);

  // Simulate advancing through sample video demonstration chapters when playing
  useEffect(() => {
    if (!isPlayingDemo || !activeTutorial) return;
    const total = activeTutorial.videoChapters.length;
    if (total <= 1) return;
    const timer = window.setInterval(() => {
      setActiveChapterIdx((prev) => {
        if (prev + 1 >= total) {
          setIsPlayingDemo(false);
          return prev;
        }
        return prev + 1;
      });
    }, 3500);
    return () => window.clearInterval(timer);
  }, [isPlayingDemo, activeTutorial]);

  const filteredTutorials = useMemo(() => {
    const q = searchFilter.trim().toLowerCase();
    return tutorials.filter((tut) => {
      const catOk =
        selectedCategory === 'All' || tut.category === selectedCategory;
      const appOk =
        selectedAppliance === 'all' || tut.applianceId === selectedAppliance;
      const qOk =
        !q ||
        tut.title.toLowerCase().includes(q) ||
        tut.shortDesc.toLowerCase().includes(q) ||
        tut.applianceName.toLowerCase().includes(q);
      return catOk && appOk && qOk;
    });
  }, [tutorials, selectedCategory, selectedAppliance, searchFilter]);

  if (!tutorialId) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
              {t.nav.tutorials} Library
            </h1>
            <p className="text-base text-[#475569]">
              Step-by-step illustrated guides and sample video walkthroughs
              covering every home appliance category.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Filter tutorials..."
              aria-label="Filter tutorials"
              className="h-10 px-3.5 rounded-xl border border-[#D8D2C8] bg-white text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-teal-700"
            />
            <select
              aria-label="Filter by appliance"
              value={selectedAppliance}
              onChange={(e) =>
                setSelectedAppliance(e.target.value as 'all' | ApplianceId)
              }
              className="h-10 px-3.5 rounded-xl border border-[#D8D2C8] bg-white text-sm text-[#0F172A] focus:outline-none focus:border-teal-700"
            >
              <option value="all">All Appliances ({appliances.length})</option>
              {appliances.map((app) => (
                <option key={app.id} value={app.id}>
                  {app.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 pb-2 border-b border-[#E5E0D8]">
          {TUTORIAL_CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  active
                    ? 'bg-teal-700 text-white'
                    : 'bg-white border border-[#E2DDD4] text-[#334155] hover:border-teal-600'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {filteredTutorials.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#E5E0D8] p-12 text-center space-y-3">
            <p className="font-display text-lg font-bold text-[#0F172A]">
              No tutorials match your current filters
            </p>
            <p className="text-sm text-[#64748B]">
              Reset the category or appliance filter to view all {tutorials.length}{' '}
              available guides.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSelectedAppliance('all');
                setSearchFilter('');
              }}
              className="h-10 px-4 rounded-xl bg-teal-700 text-white text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutorials.map((tut) => {
              const isSaved = savedTutorialIds.includes(tut.id);
              const isDone = completedTutorialIds.includes(tut.id);
              return (
                <article
                  key={tut.id}
                  className="bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden flex flex-col"
                >
                  <div className="aspect-[4/3] bg-[#F3EFE8] overflow-hidden">
                    <SmartImage
                      src={tut.image}
                      alt={tut.title}
                      className="w-full h-full object-cover"
                      fallbackLabel={tut.applianceName}
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#64748B]">
                        <span className="font-medium text-teal-800">
                          {tut.applianceName}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{tut.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{tut.difficulty}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">
                          {tut.estimatedMinutes} min
                        </span>
                      </div>

                      <h2 className="font-display text-lg font-bold text-[#0F172A]">
                        {tut.title}
                      </h2>
                      <p className="text-sm text-[#475569] leading-relaxed">
                        {tut.shortDesc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F3F0EA] flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => navigate(`/tutorials/${tut.id}`)}
                        className="h-10 px-4 rounded-lg bg-teal-700 text-white hover:bg-teal-800 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>{t.sections.readTutorial}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-2">
                        {isDone && (
                          <span className="text-xs font-medium text-emerald-700 inline-flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Done</span>
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={() => toggleSaveTutorial(tut.id)}
                          aria-label={
                            isSaved
                              ? 'Remove from saved tutorials'
                              : 'Save tutorial'
                          }
                          className={`h-10 w-10 rounded-lg border flex items-center justify-center transition-colors cursor-pointer ${
                            isSaved
                              ? 'bg-teal-50 border-teal-300 text-teal-800'
                              : 'bg-white border-[#E2DDD4] text-[#64748B] hover:text-[#0F172A]'
                          }`}
                        >
                          <Bookmark
                            className={`w-4 h-4 ${
                              isSaved ? 'fill-current' : ''
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  if (!activeTutorial) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="font-display text-2xl font-bold text-[#0F172A]">
          Tutorial Not Found
        </h1>
        <p className="text-sm text-[#475569]">
          This tutorial may have been removed or renamed. Browse our library to
          pick another guide.
        </p>
        <button
          type="button"
          onClick={() => navigate('/tutorials')}
          className="h-11 px-5 rounded-xl bg-teal-700 text-white text-sm font-semibold cursor-pointer"
        >
          Back to Tutorial Library
        </button>
      </div>
    );
  }

  const prevTutorial = currentIndex > 0 ? tutorials[currentIndex - 1] : null;
  const nextTutorial =
    currentIndex < tutorials.length - 1 ? tutorials[currentIndex + 1] : null;

  const isSaved = savedTutorialIds.includes(activeTutorial.id);
  const isCompleted = completedTutorialIds.includes(activeTutorial.id);
  const currentChapter =
    activeTutorial.videoChapters[activeChapterIdx] ||
    activeTutorial.videoChapters[0];

  const toggleStep = (idx: number) => {
    setCheckedSteps((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-sm">
          <button
            type="button"
            onClick={() => navigate('/tutorials')}
            className="inline-flex items-center gap-1.5 text-[#475569] hover:text-teal-800 font-medium cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tutorials</span>
          </button>
          <span className="text-[#CBD5E1]">/</span>
          <button
            type="button"
            onClick={() => navigate(`/appliances/${activeTutorial.applianceId}`)}
            className="text-teal-800 font-medium hover:underline cursor-pointer"
          >
            {activeTutorial.applianceName}
          </button>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => toggleSaveTutorial(activeTutorial.id)}
            className={`h-10 px-4 rounded-xl border text-xs font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer ${
              isSaved
                ? 'bg-teal-50 border-teal-300 text-teal-800'
                : 'bg-white border-[#D8D2C8] text-[#334155] hover:border-teal-600'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            <span>{isSaved ? 'Saved' : 'Save Tutorial'}</span>
          </button>

          <button
            type="button"
            onClick={() => toggleCompleteTutorial(activeTutorial.id)}
            className={`h-10 px-4 rounded-xl text-xs font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer ${
              isCompleted
                ? 'bg-emerald-700 text-white'
                : 'bg-teal-700 text-white hover:bg-teal-800'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isCompleted ? 'Completed' : 'Mark Completed'}</span>
          </button>
        </div>
      </div>

      {/* Tutorial Header */}
      <div className="bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden">
        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748B]">
            <span className="font-semibold text-teal-800">
              {activeTutorial.applianceName}
            </span>
            <span aria-hidden="true">·</span>
            <span>{activeTutorial.category}</span>
            <span aria-hidden="true">·</span>
            <span>{activeTutorial.difficulty}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1 tabular-nums">
              <Clock className="w-3.5 h-3.5" />
              {activeTutorial.estimatedMinutes} min read
            </span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl font-bold text-[#0F172A] text-balance">
            {activeTutorial.title}
          </h1>
          <p className="text-base text-[#475569] leading-relaxed">
            {activeTutorial.shortDesc}
          </p>
        </div>

        <div className="aspect-[16/9] max-h-[380px] w-full bg-[#F3EFE8] overflow-hidden border-t border-[#EFECE6]">
          <SmartImage
            src={activeTutorial.image}
            alt={activeTutorial.title}
            className="w-full h-full object-cover"
            fallbackLabel={activeTutorial.applianceName}
          />
        </div>
      </div>

      {/* Interactive Sample Video Demonstration Placeholder */}
      <section className="bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-8 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <Video className="w-5 h-5 text-teal-700" />
            <h2 className="font-display text-xl font-bold text-[#0F172A]">
              Video Demonstration Walkthrough
            </h2>
          </div>
          <span className="text-xs font-medium text-[#64748B]">
            Sample Video Placeholder (Interactive Storyboard)
          </span>
        </div>

        <p className="text-sm text-[#475569]">{activeTutorial.videoSummary}</p>

        <div className="rounded-xl bg-[#0F172A] text-white p-6 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="font-mono-nums text-xs text-teal-300">
                Sample Chapter {activeChapterIdx + 1} of{' '}
                {activeTutorial.videoChapters.length} ·{' '}
                {currentChapter?.time || '00:00'}
              </p>
              <h3 className="font-display text-lg font-bold text-white">
                {currentChapter?.title || activeTutorial.title}
              </h3>
              <p className="text-sm text-slate-300">
                {currentChapter?.caption}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setIsPlayingDemo((p) => !p)}
                className="h-11 px-4 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                {isPlayingDemo ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>Pause Preview</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Play Preview</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsPlayingDemo(false);
                  setActiveChapterIdx(0);
                }}
                aria-label="Restart sample walkthrough"
                className="h-11 w-11 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chapter Selector */}
          <div className="grid sm:grid-cols-3 gap-2.5 pt-2 border-t border-slate-800">
            {activeTutorial.videoChapters.map((chap, idx) => (
              <button
                key={chap.title}
                type="button"
                onClick={() => {
                  setIsPlayingDemo(false);
                  setActiveChapterIdx(idx);
                }}
                className={`text-left p-3 rounded-lg border transition-colors cursor-pointer ${
                  idx === activeChapterIdx
                    ? 'bg-slate-800 border-teal-500 text-white'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span className="font-mono-nums text-xs text-teal-400 block">
                  {chap.time}
                </span>
                <span className="text-xs font-semibold block mt-0.5 truncate">
                  {chap.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Instructions */}
      <section className="bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-8 space-y-5">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-display text-xl font-bold text-[#0F172A]">
            Step-by-Step Instructions
          </h2>
          <span className="font-mono-nums text-xs text-[#64748B]">
            {checkedSteps.length} / {activeTutorial.steps.length} steps checked
          </span>
        </div>

        <ol className="space-y-4">
          {activeTutorial.steps.map((step, idx) => {
            const done = checkedSteps.includes(idx);
            return (
              <li
                key={step.heading}
                onClick={() => toggleStep(idx)}
                className={`p-5 rounded-xl border transition-colors cursor-pointer flex items-start gap-4 ${
                  done
                    ? 'bg-emerald-50/60 border-emerald-300'
                    : 'bg-[#FAF8F5] border-[#E5E0D8] hover:border-teal-600'
                }`}
              >
                <span
                  className={`w-8 h-8 rounded-lg font-mono-nums text-xs font-bold flex items-center justify-center shrink-0 ${
                    done
                      ? 'bg-emerald-700 text-white'
                      : 'bg-teal-700 text-white'
                  }`}
                >
                  {done ? '✓' : idx + 1}
                </span>
                <div className="space-y-1">
                  <h3 className="font-display text-base font-bold text-[#0F172A]">
                    {step.heading}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Safety Warnings */}
      <section className="bg-amber-50/70 rounded-2xl border border-amber-200 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2.5">
          <AlertTriangle className="w-5 h-5 text-amber-700" />
          <h2 className="font-display text-lg font-bold text-[#0F172A]">
            Safety Warnings
          </h2>
        </div>
        <ul className="space-y-2.5">
          {activeTutorial.safetyWarnings.map((warning) => (
            <li
              key={warning}
              className="flex items-start gap-2.5 text-sm text-[#334155]"
            >
              <span className="font-bold text-amber-800">•</span>
              <span>{warning}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Previous & Next Tutorial Navigation */}
      <div className="grid sm:grid-cols-2 gap-4 pt-2">
        {prevTutorial ? (
          <button
            type="button"
            onClick={() => navigate(`/tutorials/${prevTutorial.id}`)}
            className="text-left p-5 rounded-2xl bg-white border border-[#E5E0D8] hover:border-teal-600 transition-colors cursor-pointer space-y-1"
          >
            <span className="text-xs font-medium text-[#64748B] inline-flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              Previous Tutorial
            </span>
            <p className="font-display text-sm font-bold text-[#0F172A]">
              {prevTutorial.title}
            </p>
          </button>
        ) : (
          <div />
        )}

        {nextTutorial && (
          <button
            type="button"
            onClick={() => navigate(`/tutorials/${nextTutorial.id}`)}
            className="text-left sm:text-right p-5 rounded-2xl bg-white border border-[#E5E0D8] hover:border-teal-600 transition-colors cursor-pointer space-y-1"
          >
            <span className="text-xs font-medium text-[#64748B] inline-flex items-center gap-1 sm:justify-end">
              Next Tutorial
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
            <p className="font-display text-sm font-bold text-[#0F172A]">
              {nextTutorial.title}
            </p>
          </button>
        )}
      </div>
    </div>
  );
};
