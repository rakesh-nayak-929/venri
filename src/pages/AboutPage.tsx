import React from 'react';
import {
  ArrowRight,
  Compass,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HERO_KITCHEN_IMAGE } from '../data/appliances';
import { SmartImage } from '../components/SmartImage';

export const AboutPage: React.FC = () => {
  const { navigate, t } = useApp();

  const pillars = [
    {
      icon: Compass,
      title: 'Our Vision',
      text: 'A home where every family member—regardless of technical background or age—feels confident operating, maintaining, and getting lasting value from modern household appliances.',
    },
    {
      icon: Target,
      title: 'Our Mission',
      text: 'To replace fragmented, jargon-heavy paper manuals with clear, accessible step-by-step tutorials, regional language interfaces, and practical preventive care tools.',
    },
    {
      icon: Users,
      title: 'The Problem We Solve',
      text: 'Families often buy modern appliances like air fryers, induction cooktops, or dishwashers only to leave key features unused or misapply cleaning routines—leading to frustration, higher electricity bills, or avoidable wear.',
    },
    {
      icon: Lightbulb,
      title: 'Our Proposed Solution',
      text: 'VENRI organizes appliance components, general operating walkthroughs, safety precautions, common troubleshooting answers, and maintenance reminders inside one calm, distraction-free platform.',
    },
    {
      icon: TrendingUp,
      title: 'Our Future Goals',
      text: 'Expanding regional language coverage across additional Indian languages, partnering with consumer appliance educators, and adding audio-guided checklists for elderly users.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="grid lg:grid-cols-12 gap-8 items-stretch bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden">
        <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center space-y-5">
          <p className="text-xs font-semibold text-teal-800">
            VENRI – Home Appliances (Simple Living)
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A] text-balance">
            {t.pages.aboutTitle}
          </h1>
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
            VENRI is a digital platform designed to make household appliance
            usage simple, safe and efficient. Our mission is to help families
            and homemakers understand modern appliances through easy tutorials,
            video demonstrations, regional language instructions and practical
            maintenance guidance.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => navigate('/appliances')}
              className="h-11 px-5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Appliances</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="h-11 px-5 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-[#0F172A] hover:bg-[#F1EDE5] text-sm font-semibold cursor-pointer"
            >
              Contact & Feedback
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 bg-[#F3EFE8] min-h-[260px]">
          <SmartImage
            src={HERO_KITCHEN_IMAGE}
            alt="VENRI home appliance learning kitchen"
            className="w-full h-full object-cover"
            fallbackLabel="VENRI Kitchen"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <article
              key={pillar.title}
              className="bg-white rounded-2xl border border-[#E5E0D8] p-6 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/70 text-teal-700 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h2 className="font-display text-lg font-bold text-[#0F172A]">
                {pillar.title}
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                {pillar.text}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
};
