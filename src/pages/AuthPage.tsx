import React, { useState } from 'react';
import { Info, LogIn, ShieldCheck, User, UserPlus } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ApplianceId } from '../types';

export const AuthPage: React.FC = () => {
  const {
    appliances,
    loginWithCredentials,
    signUpUser,
    loginAsDemo,
    navigate,
  } = useApp();

  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedAppliances, setSelectedAppliances] = useState<ApplianceId[]>([
    'air-fryer',
    'microwave-oven',
  ]);
  const [error, setError] = useState('');

  const toggleApplianceChoice = (id: ApplianceId) => {
    setSelectedAppliances((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (mode === 'login') {
      if (!email.trim() || !password.trim()) {
        setError('Please enter both email and password.');
        return;
      }
      const res = loginWithCredentials(email, password);
      if (!res.ok) {
        setError(res.error || 'Could not sign in.');
        return;
      }
      navigate('/dashboard');
      return;
    }

    if (!name.trim() || !email.trim() || password.length < 4) {
      setError(
        'Please enter your name, a valid email, and a password of at least 4 characters.'
      );
      return;
    }
    const res = signUpUser({
      name,
      email,
      password,
      preferredAppliances: selectedAppliances,
    });
    if (!res.ok) {
      setError(res.error || 'Could not create account.');
      return;
    }
    navigate('/dashboard');
  };

  return (
    <div className="max-w-lg mx-auto px-4 sm:px-6 py-12 space-y-6">
      {/* Honest Demo Auth Notice */}
      <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 flex items-start gap-3">
        <Info className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-950 space-y-1">
          <p className="font-semibold">Demo Authentication Mode (Local Storage)</p>
          <p className="leading-relaxed">
            Firebase credentials are not configured in this local showcase
            environment. Accounts created here are stored in browser
            localStorage for demonstration only and do not provide production
            account security.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-8 space-y-6">
        <div className="grid grid-cols-2 p-1 rounded-xl bg-[#F3EFE8]">
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setError('');
            }}
            className={`h-10 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              mode === 'login'
                ? 'bg-white text-[#0F172A] shadow-xs'
                : 'text-[#475569] hover:text-[#0F172A]'
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('signup');
              setError('');
            }}
            className={`h-10 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              mode === 'signup'
                ? 'bg-white text-[#0F172A] shadow-xs'
                : 'text-[#475569] hover:text-[#0F172A]'
            }`}
          >
            Sign Up
          </button>
        </div>

        <div className="space-y-1">
          <h1 className="font-display text-2xl font-bold text-[#0F172A]">
            {mode === 'login' ? 'Sign In to VENRI' : 'Create a Demo Account'}
          </h1>
          <p className="text-xs text-[#64748B]">
            {mode === 'login'
              ? 'Access your saved tutorials, preferred appliances, and reminders.'
              : 'Save your home appliances and personal learning progress locally.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div className="space-y-1.5">
              <label
                htmlFor="auth-name"
                className="block text-xs font-semibold text-[#334155]"
              >
                Full Name
              </label>
              <input
                id="auth-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Priya Sharma"
                className="w-full h-11 px-3.5 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-sm text-[#0F172A] focus:outline-none focus:border-teal-700"
              />
            </div>
          )}

          <div className="space-y-1.5">
            <label
              htmlFor="auth-email"
              className="block text-xs font-semibold text-[#334155]"
            >
              Email Address
            </label>
            <input
              id="auth-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full h-11 px-3.5 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-sm text-[#0F172A] focus:outline-none focus:border-teal-700"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="auth-password"
              className="block text-xs font-semibold text-[#334155]"
            >
              Demo Password
            </label>
            <input
              id="auth-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full h-11 px-3.5 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-sm text-[#0F172A] focus:outline-none focus:border-teal-700"
            />
          </div>

          {mode === 'signup' && (
            <div className="space-y-2 pt-1">
              <span className="block text-xs font-semibold text-[#334155]">
                Select Appliances in Your Home
              </span>
              <div className="grid grid-cols-2 gap-2">
                {appliances.map((app) => {
                  const active = selectedAppliances.includes(app.id);
                  return (
                    <button
                      key={app.id}
                      type="button"
                      onClick={() => toggleApplianceChoice(app.id)}
                      className={`px-3 py-2 rounded-lg border text-xs font-medium text-left transition-colors cursor-pointer ${
                        active
                          ? 'bg-teal-50 border-teal-600 text-teal-900'
                          : 'bg-[#FAF8F5] border-[#E2DDD4] text-[#475569]'
                      }`}
                    >
                      {app.name}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {error && <p className="text-xs font-medium text-red-700">{error}</p>}

          <button
            type="submit"
            className="w-full h-11 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            {mode === 'login' ? (
              <>
                <LogIn className="w-4 h-4" />
                <span>Sign In</span>
              </>
            ) : (
              <>
                <UserPlus className="w-4 h-4" />
                <span>Create Demo Account</span>
              </>
            )}
          </button>
        </form>

        {/* One-Click Demo Accounts for Viva / Showcase */}
        <div className="pt-5 border-t border-[#EFECE6] space-y-3">
          <p className="text-xs font-semibold text-[#475569]">
            Instant Showcase Demo Logins
          </p>
          <div className="grid sm:grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => {
                loginAsDemo('user');
                navigate('/dashboard');
              }}
              className="h-11 px-3.5 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] hover:border-teal-600 text-xs font-semibold text-[#0F172A] inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <User className="w-4 h-4 text-teal-700" />
              <span>Demo Family User</span>
            </button>
            <button
              type="button"
              onClick={() => {
                loginAsDemo('admin');
                navigate('/admin');
              }}
              className="h-11 px-3.5 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] hover:border-teal-600 text-xs font-semibold text-[#0F172A] inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-teal-700" />
              <span>Demo Content Admin</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
