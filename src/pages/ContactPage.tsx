import React, { useState } from 'react';
import { CheckCircle2, Mail, MessageSquare, Send, Star } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ApplianceId } from '../types';

export const ContactPage: React.FC = () => {
  const {
    appliances,
    submitContactMessage,
    submitFeedback,
    currentUser,
    t,
  } = useApp();

  // Contact Form State
  const [name, setName] = useState(currentUser?.name || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [contactError, setContactError] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Feedback Form State
  const [rating, setRating] = useState<number>(5);
  const [fbAppliance, setFbAppliance] = useState<ApplianceId | 'general'>('air-fryer');
  const [suggestions, setSuggestions] = useState('');
  const [confusingInfo, setConfusingInfo] = useState('');
  const [fbError, setFbError] = useState('');
  const [fbSubmitted, setFbSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setContactError('Please complete all required contact fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setContactError('Please enter a valid email address.');
      return;
    }
    setContactError('');
    submitContactMessage({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });
    setSubject('');
    setMessage('');
    setContactSubmitted(true);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestions.trim() && !confusingInfo.trim()) {
      setFbError(
        'Please share a suggestion or tell us what information felt unclear.'
      );
      return;
    }
    setFbError('');
    const appName =
      fbAppliance === 'general'
        ? 'General Platform'
        : appliances.find((a) => a.id === fbAppliance)?.name || 'Appliance';

    submitFeedback({
      rating,
      applianceId: fbAppliance,
      applianceName: appName,
      suggestions: suggestions.trim() || 'No extra suggestions provided.',
      confusingInfo: confusingInfo.trim() || undefined,
      userName: currentUser?.name || name.trim() || 'Household Learner',
    });
    setSuggestions('');
    setConfusingInfo('');
    setFbSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="max-w-2xl space-y-2">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
          {t.pages.contactTitle}
        </h1>
        <p className="text-base text-[#475569]">
          Have a question about an appliance tutorial or want to suggest an
          improvement? Reach out or submit learning feedback below.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Contact Us Form */}
        <form
          onSubmit={handleContactSubmit}
          className="bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-8 space-y-5"
        >
          <div className="flex items-center gap-2.5">
            <Mail className="w-5 h-5 text-teal-700" />
            <h2 className="font-display text-xl font-bold text-[#0F172A]">
              Send Us a Message
            </h2>
          </div>

          {contactSubmitted && (
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div className="text-sm text-emerald-900">
                <p className="font-semibold">Message received!</p>
                <p className="text-xs text-emerald-800 mt-0.5">
                  Thank you for contacting VENRI. Your message has been saved
                  and can also be reviewed in the Admin Dashboard.
                </p>
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label
              htmlFor="contact-name"
              className="block text-xs font-semibold text-[#334155]"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setContactSubmitted(false);
              }}
              placeholder="Your full name"
              className="w-full h-11 px-3.5 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-sm text-[#0F172A] focus:outline-none focus:border-teal-700"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="contact-email"
              className="block text-xs font-semibold text-[#334155]"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setContactSubmitted(false);
              }}
              placeholder="you@example.com"
              className="w-full h-11 px-3.5 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-sm text-[#0F172A] focus:outline-none focus:border-teal-700"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="contact-subject"
              className="block text-xs font-semibold text-[#334155]"
            >
              Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
                setContactSubmitted(false);
              }}
              placeholder="e.g., Request for new appliance topic"
              className="w-full h-11 px-3.5 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-sm text-[#0F172A] focus:outline-none focus:border-teal-700"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="contact-message"
              className="block text-xs font-semibold text-[#334155]"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setContactSubmitted(false);
              }}
              placeholder="Write your question or inquiry..."
              className="w-full p-3.5 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-sm text-[#0F172A] focus:outline-none focus:border-teal-700"
            />
          </div>

          {contactError && (
            <p className="text-xs font-medium text-red-700">{contactError}</p>
          )}

          <button
            type="submit"
            className="w-full h-11 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Submit Message</span>
          </button>
        </form>

        {/* Learning Feedback Form */}
        <form
          onSubmit={handleFeedbackSubmit}
          className="bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-8 space-y-5"
        >
          <div className="flex items-center gap-2.5">
            <MessageSquare className="w-5 h-5 text-teal-700" />
            <h2 className="font-display text-xl font-bold text-[#0F172A]">
              Learning Experience Feedback
            </h2>
          </div>

          {fbSubmitted && (
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div className="text-sm text-emerald-900">
                <p className="font-semibold">Feedback submitted!</p>
                <p className="text-xs text-emerald-800 mt-0.5">
                  Thank you for helping improve VENRI tutorials. Your feedback is
                  stored locally and visible in the Admin Dashboard.
                </p>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <span className="block text-xs font-semibold text-[#334155]">
              Rate Your Learning Experience
            </span>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => {
                    setRating(star);
                    setFbSubmitted(false);
                  }}
                  aria-label={`Rate ${star} out of 5`}
                  className={`h-10 w-10 rounded-xl border flex items-center justify-center transition-colors cursor-pointer ${
                    star <= rating
                      ? 'bg-amber-50 border-amber-300 text-amber-600'
                      : 'bg-[#FAF8F5] border-[#E2DDD4] text-[#94A3B8]'
                  }`}
                >
                  <Star
                    className={`w-5 h-5 ${
                      star <= rating ? 'fill-current' : ''
                    }`}
                  />
                </button>
              ))}
              <span className="font-mono-nums text-xs font-medium text-[#475569] ml-2">
                {rating} / 5
              </span>
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="fb-appliance"
              className="block text-xs font-semibold text-[#334155]"
            >
              Select an Appliance
            </label>
            <select
              id="fb-appliance"
              value={fbAppliance}
              onChange={(e) => {
                setFbAppliance(e.target.value as ApplianceId | 'general');
                setFbSubmitted(false);
              }}
              className="w-full h-11 px-3.5 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-sm text-[#0F172A] focus:outline-none focus:border-teal-700"
            >
              {appliances.map((app) => (
                <option key={app.id} value={app.id}>
                  {app.name}
                </option>
              ))}
              <option value="general">General Platform</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="fb-suggestions"
              className="block text-xs font-semibold text-[#334155]"
            >
              Share Suggestions
            </label>
            <textarea
              id="fb-suggestions"
              rows={3}
              value={suggestions}
              onChange={(e) => {
                setSuggestions(e.target.value);
                setFbSubmitted(false);
              }}
              placeholder="What helped you most or what new topic should we add?"
              className="w-full p-3.5 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-sm text-[#0F172A] focus:outline-none focus:border-teal-700"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="fb-confusing"
              className="block text-xs font-semibold text-[#334155]"
            >
              Report Missing or Confusing Information (Optional)
            </label>
            <textarea
              id="fb-confusing"
              rows={2}
              value={confusingInfo}
              onChange={(e) => {
                setConfusingInfo(e.target.value);
                setFbSubmitted(false);
              }}
              placeholder="Let us know if any step or safety rule felt unclear..."
              className="w-full p-3.5 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-sm text-[#0F172A] focus:outline-none focus:border-teal-700"
            />
          </div>

          {fbError && (
            <p className="text-xs font-medium text-red-700">{fbError}</p>
          )}

          <button
            type="submit"
            className="w-full h-11 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white text-sm font-semibold transition-colors cursor-pointer"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};
