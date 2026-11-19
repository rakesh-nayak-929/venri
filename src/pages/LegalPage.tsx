import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface LegalPageProps {
  type: 'privacy' | 'terms';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const { navigate } = useApp();
  const isPrivacy = type === 'privacy';

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
      <button
        type="button"
        onClick={() => navigate('/')}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#475569] hover:text-teal-800 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </button>

      <div className="bg-white rounded-2xl border border-[#E5E0D8] p-8 space-y-5">
        <h1 className="font-display text-3xl font-bold text-[#0F172A]">
          {isPrivacy ? 'Privacy Policy' : 'Terms and Conditions'}
        </h1>
        <p className="text-xs text-[#64748B]">
          VENRI – Home Appliances (Simple Living) · Effective 2026
        </p>

        {isPrivacy ? (
          <div className="space-y-4 text-sm text-[#334155] leading-relaxed">
            <p>
              VENRI operates as an educational home appliance learning and
              maintenance guidance platform. In this local demonstration mode,
              your preferences, saved tutorials, maintenance reminders, feedback,
              and demo account profile are stored strictly inside your browser&apos;s
              localStorage.
            </p>
            <p>
              No personal information is transmitted to external third-party
              advertisers. You may clear your browser storage at any time to
              reset all saved local records.
            </p>
            <p>
              When deployed with hosted authentication and database services in
              production, standard account privacy controls apply as documented
              at deployment.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-sm text-[#334155] leading-relaxed">
            <p>
              All appliance tutorials, recommended general settings, cleaning
              checklists, and troubleshooting suggestions on VENRI are provided
              for general household educational purposes only.
            </p>
            <p>
              Appliance electrical ratings, internal mechanisms, and warranty
              rules vary across brands and models. Always consult your
              manufacturer&apos;s official instruction manual before operating any
              appliance, and contact an authorised service technician for any
              electrical, heating-element, or internal repair work.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
