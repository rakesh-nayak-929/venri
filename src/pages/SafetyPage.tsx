import React, { useState } from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react';
import { MANDATORY_SAFETY_NOTICE, SAFETY_SECTIONS } from '../data/safety';
import { useApp } from '../context/AppContext';

export const SafetyPage: React.FC = () => {
  const { navigate, t } = useApp();
  const [filterSeverity, setFilterSeverity] = useState<
    'All' | 'Critical' | 'Caution' | 'Essential'
  >('All');

  const visibleSections = SAFETY_SECTIONS.filter(
    (sec) => filterSeverity === 'All' || sec.severity === filterSeverity
  );

  const renderSeverityIndicator = (
    severity: 'Critical' | 'Caution' | 'Essential'
  ) => {
    if (severity === 'Critical') {
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-700">
          <AlertOctagon className="w-4 h-4" />
          <span>Critical Safety</span>
        </span>
      );
    }
    if (severity === 'Caution') {
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800">
          <AlertTriangle className="w-4 h-4" />
          <span>Caution</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800">
        <ShieldCheck className="w-4 h-4" />
        <span>Essential Practice</span>
      </span>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="max-w-3xl space-y-3">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
          {t.pages.safetyTitle}
        </h1>
        <p className="text-base text-[#475569]">
          Clear household safety rules to help families prevent electrical
          hazards, burns, and avoidable appliance damage.
        </p>
      </div>

      {/* Prominent Mandatory Safety Notice */}
      <div className="rounded-2xl bg-amber-50 border border-amber-300 p-6 flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
          <ShieldAlert className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <p className="text-xs font-semibold text-amber-900">
            Important Safety Notice
          </p>
          <p className="text-sm sm:text-base font-medium text-[#0F172A]">
            {t.pages.safetyNotice || MANDATORY_SAFETY_NOTICE}
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#E5E0D8]">
        {(['All', 'Critical', 'Caution', 'Essential'] as const).map((level) => (
          <button
            key={level}
            type="button"
            onClick={() => setFilterSeverity(level)}
            className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              filterSeverity === level
                ? 'bg-teal-700 text-white'
                : 'bg-white border border-[#E2DDD4] text-[#334155] hover:border-teal-600'
            }`}
          >
            {level === 'All' ? 'All Guidelines (8)' : level}
          </button>
        ))}
      </div>

      {/* 8 Safety Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleSections.map((sec) => (
          <article
            key={sec.id}
            className={`rounded-2xl border p-6 sm:p-7 flex flex-col justify-between gap-5 ${
              sec.severity === 'Critical'
                ? 'bg-white border-red-200'
                : sec.severity === 'Caution'
                ? 'bg-white border-amber-200'
                : 'bg-white border-[#E5E0D8]'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                {renderSeverityIndicator(sec.severity)}
              </div>

              <div className="space-y-1.5">
                <h2 className="font-display text-xl font-bold text-[#0F172A]">
                  {sec.title}
                </h2>
                <p className="text-sm text-[#475569]">{sec.summary}</p>
              </div>

              <ul className="space-y-2.5 pt-2 border-t border-[#F3F0EA]">
                {sec.rules.map((rule) => (
                  <li
                    key={rule}
                    className="flex items-start gap-2.5 text-sm text-[#334155]"
                  >
                    <AlertTriangle
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        sec.severity === 'Critical'
                          ? 'text-red-600'
                          : sec.severity === 'Caution'
                          ? 'text-amber-700'
                          : 'text-teal-700'
                      }`}
                    />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {sec.applianceId && (
              <div className="pt-3 border-t border-[#F3F0EA]">
                <button
                  type="button"
                  onClick={() => navigate(`/appliances/${sec.applianceId}`)}
                  className="text-xs font-semibold text-teal-800 hover:text-teal-900 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Open Full Appliance Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};
