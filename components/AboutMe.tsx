
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Brain, Code, Coffee, Globe, Heart, Sparkles, User } from 'lucide-react';

interface AboutMeProps {
  onBack: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ onBack }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const skills = [
    { name: 'Flutter Architecture', icon: <Code size={20} />, color: 'text-blue-500' },
    { name: 'Generative AI Integration', icon: <Brain size={20} />, color: 'text-purple-500' },
    { name: 'User-Centric Design', icon: <Globe size={20} />, color: 'text-indigo-500' },
    { name: 'Scalable Backend Systems', icon: <Sparkles size={20} />, color: 'text-pink-500' }
  ];

  return (
    <section id="about-me" className="min-h-screen pt-32 pb-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="mb-12 flex items-center space-x-2 text-slate-400 hover:text-blue-600 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold text-xs uppercase tracking-widest">Back to Portfolio</span>
        </motion.button>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        >
          {/* Hero Section */}
          <div className="lg:col-span-7">
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Behind the Code</h2>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
                Alex Rivera <br />
                <span className="italic font-light text-slate-400">The Architect</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed mb-12 space-y-6">
              <p>
                Hello! I'm Alex, a dedicated Flutter Developer with a core focus on bridging the gap between high-performance mobile engineering and the limitless possibilities of Artificial Intelligence.
              </p>
              <p>
                Over the past 2 years, I've transformed from a mobile enthusiast into an AI-first architect. My journey is defined by a relentless pursuit of "Smart UX"—applications that don't just react to users, but understand and anticipate their needs through integrated machine learning and generative AI.
              </p>
              <p>
                I believe that every line of Dart is an opportunity to create something meaningful. Whether it's optimizing state management in BLoC or fine-tuning a prompt for Gemini, I approach every challenge with a minimalist aesthetic and a futuristic mindset.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="glass-panel p-6 rounded-3xl border border-slate-100 flex items-center space-x-4 hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <span className="font-bold text-slate-800 text-sm">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Profile / Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div variants={itemVariants} className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100">
               <img 
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                 alt="Alex Rivera Profile"
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
               />
               <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-[2.5rem] space-y-6">
              <h3 className="font-heading font-bold text-xl flex items-center space-x-2">
                <Heart size={20} className="text-pink-500 fill-current" />
                <span>Beyond the Screen</span>
              </h3>
              <div className="space-y-4 text-slate-500 text-sm leading-relaxed">
                <div className="flex items-start space-x-3">
                  <Coffee size={18} className="text-slate-400 mt-1" />
                  <p>A firm believer that great code is fueled by single-origin espresso and late-night R&B playlists.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <User size={18} className="text-slate-400 mt-1" />
                  <p>When I'm not debugging, I'm usually exploring architectural photography or tinkering with my mechanical keyboard.</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-100">
                <blockquote className="italic text-slate-400 text-sm">
                  "Design is not just what it looks like and feels like. Design is how it works."
                </blockquote>
              </div>
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onBack}
              className="w-full py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-200 uppercase tracking-widest text-xs"
            >
              Back to Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-5 pointer-events-none">
        <h1 className="text-[20rem] font-bold text-slate-900 select-none">ABOUT</h1>
      </div>
    </section>
  );
};

export default AboutMe;
