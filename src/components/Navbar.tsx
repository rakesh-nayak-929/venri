import React, { useState } from 'react';
import {
  Globe,
  Home,
  LayoutDashboard,
  LogOut,
  Menu,
  Search,
  ShieldCheck,
  User,
  X,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { LanguageCode } from '../types';

export const Navbar: React.FC = () => {
  const {
    route,
    navigate,
    language,
    setLanguage,
    t,
    currentUser,
    logout,
    setSearchOpen,
  } = useApp();

  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.appliances, path: '/appliances' },
    { label: t.nav.tutorials, path: '/tutorials' },
    { label: t.nav.safety, path: '/safety' },
    { label: t.nav.maintenance, path: '/maintenance' },
    { label: t.nav.about, path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return route === '/';
    return route === path || route.startsWith(`${path}/`);
  };

  const handleNav = (path: string) => {
    setMobileOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand wordmark + icon */}
        <button
          type="button"
          onClick={() => handleNav('/')}
          className="flex items-center gap-2.5 text-left whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 rounded-lg py-1"
          aria-label="VENRI Home"
        >
          <span className="w-8 h-8 rounded-lg bg-teal-700 text-white flex items-center justify-center shrink-0">
            <Home className="w-4 h-4" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-[#0F172A]">
            VENRI
          </span>
        </button>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7"
        >
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <button
                key={item.path}
                type="button"
                onClick={() => handleNav(item.path)}
                className={`relative py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 rounded ${
                  active
                    ? 'text-teal-800 font-semibold'
                    : 'text-[#334155] hover:text-[#0F172A]'
                }`}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-[1px] h-0.5 bg-teal-700"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Language selector, Search trigger, and Primary Auth/User action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search appliances and tutorials"
            className="h-10 px-3 rounded-lg border border-[#E2DDD4] bg-white text-[#334155] hover:text-[#0F172A] hover:border-[#CBC4B8] flex items-center gap-2 text-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-teal-700"
          >
            <Search className="w-4 h-4 text-teal-700" />
            <span className="hidden xl:inline text-xs text-[#64748B]">Search</span>
          </button>

          <div className="hidden sm:flex items-center relative">
            <Globe
              className="w-3.5 h-3.5 text-[#64748B] absolute left-2.5 pointer-events-none"
              aria-hidden="true"
            />
            <select
              aria-label="Select Language"
              value={language}
              onChange={(e) => setLanguage(e.target.value as LanguageCode)}
              className="h-10 pl-8 pr-3 rounded-lg border border-[#E2DDD4] bg-white text-xs font-medium text-[#0F172A] hover:border-[#CBC4B8] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 cursor-pointer"
            >
              <option value="en">English</option>
              <option value="te">తెలుగు</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>

          {currentUser ? (
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  handleNav(currentUser.role === 'admin' ? '/admin' : '/dashboard')
                }
                className="h-10 px-3.5 rounded-lg bg-teal-700 text-white hover:bg-teal-800 text-xs font-semibold flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                {currentUser.role === 'admin' ? (
                  <ShieldCheck className="w-4 h-4" />
                ) : (
                  <LayoutDashboard className="w-4 h-4" />
                )}
                <span className="max-w-[110px] truncate">
                  {currentUser.role === 'admin' ? t.nav.admin : t.nav.dashboard}
                </span>
              </button>
              <button
                type="button"
                onClick={logout}
                aria-label={t.nav.logout}
                title={t.nav.logout}
                className="h-10 w-10 rounded-lg border border-[#E2DDD4] bg-white text-[#334155] hover:text-red-700 hover:border-red-200 flex items-center justify-center transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => handleNav('/auth')}
              className="hidden sm:inline-flex h-10 px-4 rounded-lg bg-teal-700 text-white hover:bg-teal-800 text-xs font-semibold items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-teal-700"
            >
              <User className="w-3.5 h-3.5" />
              <span>{t.nav.login}</span>
            </button>
          )}

          {/* Mobile Drawer Trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden h-11 w-11 rounded-lg border border-[#E2DDD4] bg-white text-[#0F172A] flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-teal-700"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Regional Language Sample Banner (Only when TE or HI active) */}
      {t.sampleNotice && (
        <div className="bg-teal-900 text-teal-50 text-xs py-1.5 px-4 text-center">
          {t.sampleNotice}
        </div>
      )}

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5E0D8] px-4 py-4 space-y-3">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <button
                  key={item.path}
                  type="button"
                  onClick={() => handleNav(item.path)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'bg-teal-50 text-teal-800 font-semibold'
                      : 'text-[#334155] hover:bg-[#F5F2EC]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => handleNav('/contact')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive('/contact')
                  ? 'bg-teal-50 text-teal-800 font-semibold'
                  : 'text-[#334155] hover:bg-[#F5F2EC]'
              }`}
            >
              {t.footer.contactUs}
            </button>
          </div>

          <div className="pt-3 border-t border-[#E5E0D8] flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-[#475569]">Language</span>
              <select
                aria-label="Mobile Language Selector"
                value={language}
                onChange={(e) => setLanguage(e.target.value as LanguageCode)}
                className="h-10 px-3 rounded-lg border border-[#E2DDD4] bg-[#FAF8F5] text-xs font-medium text-[#0F172A]"
              >
                <option value="en">English</option>
                <option value="te">తెలుగు (Telugu)</option>
                <option value="hi">हिन्दी (Hindi)</option>
              </select>
            </div>

            {currentUser ? (
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() =>
                    handleNav(currentUser.role === 'admin' ? '/admin' : '/dashboard')
                  }
                  className="h-11 rounded-lg bg-teal-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>
                    {currentUser.role === 'admin' ? t.nav.admin : t.nav.dashboard}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    logout();
                    setMobileOpen(false);
                  }}
                  className="h-11 rounded-lg border border-[#E2DDD4] bg-white text-[#334155] text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{t.nav.logout}</span>
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => handleNav('/auth')}
                className="w-full h-11 rounded-lg bg-teal-700 text-white text-sm font-semibold"
              >
                {t.nav.login} / Sign Up
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
