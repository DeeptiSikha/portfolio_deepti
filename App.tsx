
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceTimeline from './components/Experience';
import Contact from './components/Contact';
import AIChatWidget from './components/AIChatWidget';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import AIAttempts from './components/AIAttempts';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'ai-attempts'>('home');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Smooth scroll to top when switching views
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  if (!isLoaded) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-white">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-16 h-16 bg-blue-500 rounded-full blur-xl"
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <Navbar onNavigate={(view) => setCurrentView(view)} currentView={currentView} />
      
      <main>
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <Skills />
              <Projects />
              <ExperienceTimeline />
              <Contact />
            </motion.div>
          )}
          {currentView === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <AboutMe onBack={() => setCurrentView('home')} />
            </motion.div>
          )}
          {currentView === 'ai-attempts' && (
            <motion.div
              key="ai-attempts"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <AIAttempts onBack={() => setCurrentView('home')} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-12 px-6 border-t border-slate-200 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
            <span className="font-heading font-bold text-xl tracking-tight">BD.DEV</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Bhaula Deeptisikha. Crafted with React & AI.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">LinkedIn</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">GitHub</a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>

      <AIChatWidget />
    </div>
  );
};

export default App;
