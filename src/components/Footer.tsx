import React from 'react';
import { Home } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { navigate, t } = useApp();

  const links = [
    { label: t.footer.aboutUs, path: '/about' },
    { label: t.footer.exploreAppliances, path: '/appliances' },
    { label: t.footer.tutorials, path: '/tutorials' },
    { label: t.footer.safetyGuidelines, path: '/safety' },
    { label: t.footer.contactUs, path: '/contact' },
    { label: t.footer.privacyPolicy, path: '/privacy' },
    { label: t.footer.terms, path: '/terms' },
  ];

  return (
    <footer className="bg-white border-t border-[#E5E0D8] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-[#EFECE6]">
          <div className="space-y-2">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="flex items-center gap-2.5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 rounded"
            >
              <span className="w-8 h-8 rounded-lg bg-teal-700 text-white flex items-center justify-center">
                <Home className="w-4 h-4" />
              </span>
              <span className="font-display text-lg font-bold text-[#0F172A]">
                VENRI
              </span>
            </button>
            <p className="text-sm font-medium text-[#334155]">
              {t.footer.tagline}
            </p>
          </div>

          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap gap-x-6 gap-y-2.5"
          >
            {links.map((link) => (
              <button
                key={link.path}
                type="button"
                onClick={() => navigate(link.path)}
                className="text-sm text-[#475569] hover:text-teal-800 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>{t.footer.copyright}</p>
          <p>
            Educational home appliance guidance. Always refer to your appliance
            manufacturer manual for model-specific ratings and servicing.
          </p>
        </div>
      </div>
    </footer>
  );
};
