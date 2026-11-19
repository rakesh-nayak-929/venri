import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { AppliancesPage } from './pages/AppliancesPage';
import { TutorialsPage } from './pages/TutorialsPage';
import { SafetyPage } from './pages/SafetyPage';
import { MaintenancePage } from './pages/MaintenancePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AuthPage } from './pages/AuthPage';
import { DashboardPage } from './pages/DashboardPage';
import { AdminPage } from './pages/AdminPage';
import { LegalPage } from './pages/LegalPage';

const AppRouter: React.FC = () => {
  const { route } = useApp();

  const renderPage = () => {
    if (route === '/' || route === '') {
      return <HomePage />;
    }
    if (route === '/appliances') {
      return <AppliancesPage />;
    }
    if (route.startsWith('/appliances/')) {
      const id = route.replace('/appliances/', '').split('/')[0];
      return <AppliancesPage applianceId={id} />;
    }
    if (route === '/tutorials') {
      return <TutorialsPage />;
    }
    if (route.startsWith('/tutorials/')) {
      const id = route.replace('/tutorials/', '').split('/')[0];
      return <TutorialsPage tutorialId={id} />;
    }
    if (route === '/safety') {
      return <SafetyPage />;
    }
    if (route === '/maintenance') {
      return <MaintenancePage />;
    }
    if (route === '/about') {
      return <AboutPage />;
    }
    if (route === '/contact') {
      return <ContactPage />;
    }
    if (route === '/auth') {
      return <AuthPage />;
    }
    if (route === '/dashboard') {
      return <DashboardPage />;
    }
    if (route === '/admin') {
      return <AdminPage />;
    }
    if (route === '/privacy') {
      return <LegalPage type="privacy" />;
    }
    if (route === '/terms') {
      return <LegalPage type="terms" />;
    }
    return <HomePage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#0F172A]">
      <Navbar />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
      <SearchModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
