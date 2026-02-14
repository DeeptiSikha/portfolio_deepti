
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Cpu, Smartphone, Zap, Code, Layout, Layers, Send } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20">
      <div className="max-w-4xl w-full text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold mb-8 uppercase tracking-widest"
        >
          <Zap size={14} className="fill-current" />
          <span>BASED IN SURAT, GUJARAT, INDIA</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold text-slate-900 leading-[1.1] mb-6"
        >
          Flutter Architect <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
            AI Driven
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Crafting sleek Flutter apps, powered by AI innovation. With 2 years of experience, I bridge the gap between human needs and machine intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#projects')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-200 transition-all flex items-center justify-center space-x-2 text-sm uppercase tracking-widest"
            >
              <span>View Projects</span>
              <ChevronRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-2xl hover:border-blue-300 hover:text-blue-600 transition-all flex items-center justify-center space-x-2 text-sm uppercase tracking-widest"
            >
              <Send size={18} />
              <span>Contact Me</span>
            </motion.button>
          </div>

          {/* Secondary Quick Nav */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <motion.button
              whileHover={{ y: -2, color: '#2563eb' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#skills')}
              className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center space-x-2 transition-colors"
            >
              <Code size={14} />
              <span>Skills</span>
            </motion.button>
            <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
            <motion.button
              whileHover={{ y: -2, color: '#2563eb' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#experience')}
              className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center space-x-2 transition-colors"
            >
              <Layers size={14} />
              <span>Experience</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden lg:block absolute left-[15%] top-1/2 p-6 glass-panel rounded-3xl shadow-xl"
      >
        <Smartphone className="text-blue-500 mb-3" size={32} />
        <div className="font-heading font-bold text-xl">25+</div>
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mobile Screens</div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden lg:block absolute right-[15%] bottom-1/4 p-6 glass-panel rounded-3xl shadow-xl"
      >
        <Cpu className="text-indigo-500 mb-3" size={32} />
        <div className="font-heading font-bold text-xl">100%</div>
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">AI Integrated</div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        onClick={() => scrollToSection('#skills')}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
        <span className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-[0.3em]">Explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;
