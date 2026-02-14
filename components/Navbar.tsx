
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onNavigate: (view: 'home' | 'about' | 'ai-attempts') => void;
  currentView: 'home' | 'about' | 'ai-attempts';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Me', href: '#about', view: 'about' as const },
    { name: 'AI attempts', href: '#ai-attempts', view: 'ai-attempts' as const },
    { name: 'Skills', href: '#skills', view: 'home' as const },
    { name: 'Projects', href: '#projects', view: 'home' as const },
    { name: 'Experience', href: '#experience', view: 'home' as const },
    { name: 'Contact', href: '#contact', view: 'home' as const },
  ];

  const handleLinkClick = (e: React.MouseEvent, view: 'home' | 'about' | 'ai-attempts', href: string) => {
    e.preventDefault();
    
    if (view !== currentView) {
      onNavigate(view);
      if (view === 'home') {
        // Wait for view transition before scrolling
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    } else if (view === 'home') {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:shadow-lg group-hover:shadow-blue-200 transition-all">A</div>
          <span className="font-heading font-bold text-xl tracking-tight hidden sm:block">ALEX RIVERA</span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.view, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`text-[11px] font-bold transition-colors uppercase tracking-[0.2em] relative py-1 ${
                (currentView === link.view && (link.view === 'about' || link.view === 'ai-attempts')) || (currentView === 'home' && link.view === 'home' && i > 1)
                  ? 'text-blue-600'
                  : 'text-slate-500 hover:text-blue-600'
              }`}
            >
              {link.name}
              {(currentView === link.view && (link.view === 'about' || link.view === 'ai-attempts')) && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                />
              )}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'home', '#contact')}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-slate-900 text-white text-[10px] font-bold rounded-full hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-200 transition-all uppercase tracking-widest"
          >
            Hire Me
          </motion.a>
        </div>

        <div className="md:hidden flex flex-col space-y-1.5 cursor-pointer">
            <div className="w-6 h-0.5 bg-slate-900"></div>
            <div className="w-6 h-0.5 bg-slate-900"></div>
            <div className="w-4 h-0.5 bg-slate-900 ml-auto"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
