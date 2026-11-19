import React from 'react';
import {
  ArrowRight,
  BellRing,
  BookOpen,
  Bookmark,
  Globe,
  ListChecks,
  PlayCircle,
  Search,
  ShieldAlert,
  Zap,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HERO_KITCHEN_IMAGE } from '../data/appliances';
import { SmartImage } from '../components/SmartImage';

export const HomePage: React.FC = () => {
  const {
    t,
    appliances,
    tutorials,
    navigate,
    savedTutorialIds,
    toggleSaveTutorial,
    setSearchOpen,
  } = useApp();

  const whyIcons = [
    ListChecks,
    PlayCircle,
    Globe,
    ShieldAlert,
    Zap,
    BellRing,
  ];

  const featuredTutorials = tutorials.filter((tut) => tut.featured).slice(0, 6);
  const displayTutorials =
    featuredTutorials.length >= 3 ? featuredTutorials : tutorials.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <p className="text-xs font-semibold tracking-wide text-teal-800">
                VENRI · Home Appliances (Simple Living)
              </p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] leading-[1.12] text-balance">
                {t.hero.heading}
              </h1>
              <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-xl">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => navigate('/appliances')}
                  className="h-12 px-6 rounded-xl bg-teal-700 text-white hover:bg-teal-800 text-sm font-semibold inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-teal-700"
                >
                  <span>{t.hero.exploreBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/tutorials')}
                  className="h-12 px-6 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-[#0F172A] hover:bg-[#F1EDE5] text-sm font-semibold inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-teal-700"
                >
                  <BookOpen className="w-4 h-4 text-teal-700" />
                  <span>{t.hero.startBtn}</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="w-full max-w-md mt-2 h-11 px-4 rounded-xl border border-[#E2DDD4] bg-[#FAF8F5] hover:border-teal-600 text-left text-sm text-[#64748B] flex items-center gap-3 transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4 text-teal-700 shrink-0" />
                <span className="truncate">{t.nav.searchPlaceholder}</span>
              </button>
            </div>

            <div className="lg:col-span-6 flex">
              <div className="w-full rounded-2xl overflow-hidden border border-[#E5E0D8] bg-[#F3EFE8] min-h-[260px] lg:min-h-[380px]">
                <SmartImage
                  src={HERO_KITCHEN_IMAGE}
                  alt="Modern bright home kitchen equipped with everyday household appliances"
                  className="w-full h-full object-cover"
                  fallbackLabel="Modern Home Kitchen"
                />
              </div>
            </div>
          </div>

          {/* 4-column structured proof strip */}
          <div className="mt-10 pt-8 border-t border-[#EFECE6] grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1">
              <p className="font-mono-nums text-2xl font-bold text-[#0F172A]">
                {appliances.length}
              </p>
              <p className="text-sm text-[#475569]">{t.hero.statAppliances}</p>
            </div>
            <div className="space-y-1">
              <p className="font-mono-nums text-2xl font-bold text-[#0F172A]">
                {tutorials.length}
              </p>
              <p className="text-sm text-[#475569]">{t.hero.statTutorials}</p>
            </div>
            <div className="space-y-1">
              <p className="font-mono-nums text-2xl font-bold text-[#0F172A]">
                3
              </p>
              <p className="text-sm text-[#475569]">{t.hero.statLanguages}</p>
            </div>
            <div className="space-y-1">
              <p className="font-mono-nums text-2xl font-bold text-emerald-700">
                24/7
              </p>
              <p className="text-sm text-[#475569]">{t.hero.statReminders}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Appliance Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A] text-balance">
              {t.sections.popularAppliances}
            </h2>
            <p className="text-sm sm:text-base text-[#475569]">
              {t.sections.popularAppliancesSub}
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/appliances')}
            className="text-sm font-semibold text-teal-800 hover:text-teal-900 inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>{t.hero.exploreBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {appliances.map((app) => (
            <article
              key={app.id}
              onClick={() => navigate(`/appliances/${app.id}`)}
              className="group bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden hover:border-teal-600 hover:shadow-md transition-all cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/3] bg-[#F3EFE8] overflow-hidden">
                <SmartImage
                  src={app.image}
                  alt={`${app.name} appliance guide`}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
                  fallbackLabel={app.name}
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-1.5">
                  <h3 className="font-display text-lg font-bold text-[#0F172A] group-hover:text-teal-800 transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {app.shortDesc}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#F3F0EA] flex items-center justify-between">
                  <span className="text-xs text-[#64748B] font-mono-nums">
                    {
                      tutorials.filter((tut) => tut.applianceId === app.id)
                        .length
                    }{' '}
                    tutorials
                  </span>
                  <span className="text-sm font-semibold text-teal-700 inline-flex items-center gap-1.5">
                    <span>{t.sections.exploreAppliance}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why Choose VENRI */}
      <section className="bg-white border-y border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mb-10 space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A] text-balance">
              {t.sections.whyChooseTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#475569]">
              {t.sections.whyChooseSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.whyChooseItems.map((item, idx) => {
              const Icon = whyIcons[idx] || ListChecks;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/70 text-teal-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-[#0F172A]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How VENRI Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mb-10 space-y-2">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A] text-balance">
            {t.sections.howWorksTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#475569]">
            {t.sections.howWorksSub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.howItWorksSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-white border border-[#E5E0D8] flex flex-col gap-3"
            >
              <span className="font-mono-nums text-sm font-semibold text-teal-700">
                {step.step}.
              </span>
              <h3 className="font-display text-base font-bold text-[#0F172A]">
                {step.title}
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="bg-white border-t border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="space-y-2 max-w-2xl">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A] text-balance">
                {t.sections.featuredTutorialsTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#475569]">
                {t.sections.featuredTutorialsSub}
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/tutorials')}
              className="text-sm font-semibold text-teal-800 hover:text-teal-900 inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>{t.sections.viewAllTutorials}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayTutorials.map((tut) => {
              const isSaved = savedTutorialIds.includes(tut.id);
              return (
                <article
                  key={tut.id}
                  className="bg-[#FAF8F5] rounded-2xl border border-[#E5E0D8] overflow-hidden flex flex-col"
                >
                  <div className="aspect-[4/3] bg-[#EFECE5] overflow-hidden">
                    <SmartImage
                      src={tut.image}
                      alt={tut.title}
                      className="w-full h-full object-cover"
                      fallbackLabel={tut.applianceName}
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-[#64748B]">
                        <span className="font-medium text-teal-800">
                          {tut.applianceName}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{tut.difficulty}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">
                          {tut.estimatedMinutes} min
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-[#0F172A]">
                        {tut.title}
                      </h3>
                      <p className="text-sm text-[#475569] leading-relaxed">
                        {tut.shortDesc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E5E0D8] flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => navigate(`/tutorials/${tut.id}`)}
                        className="h-10 px-4 rounded-lg bg-teal-700 text-white hover:bg-teal-800 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>{t.sections.readTutorial}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => toggleSaveTutorial(tut.id)}
                        aria-label={
                          isSaved ? 'Remove from saved tutorials' : 'Save tutorial'
                        }
                        className={`h-10 w-10 rounded-lg border flex items-center justify-center transition-colors cursor-pointer ${
                          isSaved
                            ? 'bg-teal-50 border-teal-300 text-teal-800'
                            : 'bg-white border-[#E2DDD4] text-[#64748B] hover:text-[#0F172A]'
                        }`}
                      >
                        <Bookmark
                          className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`}
                        />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Call To Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="rounded-2xl bg-[#0F172A] text-white p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white text-balance">
              {t.sections.ctaTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.sections.ctaSubtitle}
            </p>
          </div>
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => navigate('/appliances')}
              className="h-12 px-6 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold inline-flex items-center gap-2 transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>{t.sections.ctaButton}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
