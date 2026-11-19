import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CalendarClock,
  Cpu,
  Search,
  Wrench,
  X,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SAFETY_SECTIONS } from '../data/safety';

interface SearchResult {
  id: string;
  kind: 'Appliance' | 'Tutorial' | 'Safety' | 'Maintenance' | 'Problem';
  title: string;
  subtitle: string;
  path: string;
}

export const SearchModal: React.FC = () => {
  const {
    isSearchOpen,
    setSearchOpen,
    appliances,
    tutorials,
    maintenanceTasks,
    navigate,
    t,
  } = useApp();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 30);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  const results = useMemo<SearchResult[]>(() => {
    const q = query.trim().toLowerCase();
    const collected: SearchResult[] = [];

    if (!q) {
      appliances.slice(0, 3).forEach((app) => {
        collected.push({
          id: `app-${app.id}`,
          kind: 'Appliance',
          title: app.name,
          subtitle: app.shortDesc,
          path: `/appliances/${app.id}`,
        });
      });
      tutorials.slice(0, 3).forEach((tut) => {
        collected.push({
          id: `tut-${tut.id}`,
          kind: 'Tutorial',
          title: tut.title,
          subtitle: `${tut.applianceName} · ${tut.category}`,
          path: `/tutorials/${tut.id}`,
        });
      });
      return collected;
    }

    appliances.forEach((app) => {
      if (
        app.name.toLowerCase().includes(q) ||
        app.shortDesc.toLowerCase().includes(q) ||
        app.introduction.toLowerCase().includes(q)
      ) {
        collected.push({
          id: `app-${app.id}`,
          kind: 'Appliance',
          title: app.name,
          subtitle: app.shortDesc,
          path: `/appliances/${app.id}`,
        });
      }
      app.troubleshooting.forEach((issue, idx) => {
        if (
          issue.problem.toLowerCase().includes(q) ||
          issue.solution.toLowerCase().includes(q) ||
          issue.possibleCause.toLowerCase().includes(q)
        ) {
          collected.push({
            id: `prob-${app.id}-${idx}`,
            kind: 'Problem',
            title: issue.problem,
            subtitle: `${app.name} · ${issue.solution}`,
            path: `/appliances/${app.id}`,
          });
        }
      });
    });

    tutorials.forEach((tut) => {
      if (
        tut.title.toLowerCase().includes(q) ||
        tut.shortDesc.toLowerCase().includes(q) ||
        tut.category.toLowerCase().includes(q) ||
        tut.applianceName.toLowerCase().includes(q)
      ) {
        collected.push({
          id: `tut-${tut.id}`,
          kind: 'Tutorial',
          title: tut.title,
          subtitle: `${tut.applianceName} · ${tut.category} · ${tut.estimatedMinutes} min`,
          path: `/tutorials/${tut.id}`,
        });
      }
    });

    SAFETY_SECTIONS.forEach((sec) => {
      const matchedRule = sec.rules.find((r) => r.toLowerCase().includes(q));
      if (
        sec.title.toLowerCase().includes(q) ||
        sec.summary.toLowerCase().includes(q) ||
        matchedRule
      ) {
        collected.push({
          id: `safe-${sec.id}`,
          kind: 'Safety',
          title: sec.title,
          subtitle: matchedRule || sec.summary,
          path: '/safety',
        });
      }
    });

    maintenanceTasks.forEach((task) => {
      if (
        task.taskTitle.toLowerCase().includes(q) ||
        task.applianceName.toLowerCase().includes(q) ||
        (task.notes && task.notes.toLowerCase().includes(q))
      ) {
        collected.push({
          id: `maint-${task.id}`,
          kind: 'Maintenance',
          title: task.taskTitle,
          subtitle: `${task.applianceName} · Due ${task.dueDate}`,
          path: '/maintenance',
        });
      }
    });

    return collected.slice(0, 14);
  }, [query, appliances, tutorials, maintenanceTasks]);

  if (!isSearchOpen) return null;

  const renderIcon = (kind: SearchResult['kind']) => {
    switch (kind) {
      case 'Appliance':
        return <Cpu className="w-4 h-4 text-teal-700" />;
      case 'Tutorial':
        return <BookOpen className="w-4 h-4 text-teal-700" />;
      case 'Safety':
        return <AlertTriangle className="w-4 h-4 text-amber-700" />;
      case 'Maintenance':
        return <CalendarClock className="w-4 h-4 text-emerald-700" />;
      case 'Problem':
        return <Wrench className="w-4 h-4 text-[#334155]" />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0F172A]/40 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Global Search"
      onClick={() => setSearchOpen(false)}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl border border-[#E5E0D8] shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#EFECE6]">
          <Search className="w-5 h-5 text-teal-700 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.nav.searchPlaceholder}
            className="w-full text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none bg-transparent"
          />
          <button
            type="button"
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
            className="w-8 h-8 rounded-lg hover:bg-[#F5F2EC] flex items-center justify-center text-[#64748B] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto divide-y divide-[#F3F0EA]">
          {results.length === 0 ? (
            <div className="px-6 py-10 text-center">
              <p className="text-sm font-medium text-[#0F172A]">
                No matches found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-[#64748B] mt-1">
                Try searching for &ldquo;air fryer&rdquo;, &ldquo;sparks&rdquo;,
                &ldquo;filter&rdquo;, &ldquo;defrost&rdquo;, or &ldquo;induction&rdquo;.
              </p>
            </div>
          ) : (
            results.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setSearchOpen(false);
                  navigate(item.path);
                }}
                className="w-full text-left px-4 py-3.5 hover:bg-[#FAF8F5] flex items-center justify-between gap-4 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-[#F3EFE8] flex items-center justify-center shrink-0 mt-0.5">
                    {renderIcon(item.kind)}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-xs text-[#64748B] mb-0.5">
                      <span className="font-medium text-teal-800">{item.kind}</span>
                    </div>
                    <p className="text-sm font-semibold text-[#0F172A] truncate">
                      {item.title}
                    </p>
                    <p className="text-xs text-[#475569] truncate">{item.subtitle}</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#94A3B8] shrink-0" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
