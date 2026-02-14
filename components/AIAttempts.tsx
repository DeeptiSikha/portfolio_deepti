
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Terminal, Bot, Clock, MessageSquare, ShieldCheck } from 'lucide-react';

interface AIAttemptsProps {
  onBack: () => void;
}

const AIAttempts: React.FC<AIAttemptsProps> = ({ onBack }) => {
  const prompts = [
    {
      id: 1,
      timestamp: 'Initial Concept',
      text: "Design a professional, futuristic, minimalistic portfolio website for a Flutter Developer with 2 years of experience, In the existing Flutter portfolio app, add a new screen called About Me. Do not change any existing code, screens, or functionality. The About Me screen should be fully modern, minimalistic, and visually stunning, matching the style and animations of the current app.\n\nScreen Requirements:\n\nHeader / Hero Section:\n\nDisplay developer’s name and role (\"Flutter Developer & AI Enthusiast\") with subtle text animation (fade-in, slide, or typewriter effect).\n\nOptional background effect: soft gradient, floating particles, or subtle motion that aligns with the existing theme.\n\nPersonal Bio Section:\n\nInclude short professional bio emphasizing Flutter experience, AI integration in apps, and career highlights.\n\nText should appear with smooth reveal animations on scroll.\n\nSkills & Strengths Section:\n\nHighlight key skills: Flutter, Dart, Firebase, UI/UX, REST APIs, State Management, AI-powered app features.\n\nDisplay skills as interactive skill bars, animated badges, or icons, visually appealing but minimal.\n\nFun / Personal Touch Section: (Optional but recommended)\n\nInclude hobbies, interests, or a quote to make the page more human and relatable.\n\nSmall subtle micro-interactions (hover effects, soft motion graphics).\n\nCall-to-Action:\n\nButton to navigate back to Home or Projects (animated hover, consistent with existing buttons).\n\nEnsure no errors occur, all interactions are smooth.\n\nDesign Guidelines:\n\nKeep UI consistent with existing screens (fonts, colors, layout, animations).\n\nMinimalistic, modern, and elegant layout.\n\nFully responsive for mobile, tablet, and desktop.\n\nSmooth animations and interactions throughout, without breaking existing functionality.\n\nGoal:\nAdd a new About Me screen that is professional, engaging, and visually stunning, showcasing the developer’s story, skills, and personality, without altering any other part of the existing portfolio app."
    },
    {
      id: 2,
      timestamp: 'Navigation Logic',
      text: "In the existing Flutter portfolio app, add navigation and actions to the buttons labeled Skills, Projects, Experience, and Contact. Do not change any other code, screens, or UI elements.\n\nRequirements for Button Actions:\n\nSkills Button:\n\nOn tap, smoothly scroll or navigate to the Skills section of the portfolio.\n\nInclude a subtle highlight animation on tap.\n\nProjects Button:\n\nOn tap, smoothly scroll or navigate to the Projects section.\n\nInclude a short animation, e.g., fade or slide transition.\n\nExperience Button:\n\nOn tap, smoothly scroll or navigate to the Experience / Timeline section.\n\nInclude animated scroll reveal, consistent with existing animations.\n\nContact Button:\n\nOn tap, smoothly scroll or navigate to the Contact section.\n\nButton should have hover or tap animation consistent with other buttons.\n\nEnsure form or social links are fully functional with no errors.\n\nDesign Guidelines:\n\nKeep all existing layouts, animations, and styles intact.\n\nAll button interactions should feel smooth, responsive, and visually appealing.\n\nNo new screens are created — just actions for existing sections.\n\nButtons should not break any existing functionality or UI.\n\nGoal:\nEnable full interactive navigation through Skills, Projects, Experience, and Contact buttons, enhancing UX and animations, without modifying any other part of the existing portfolio code."
    },
    {
      id: 3,
      timestamp: 'Feature Addition',
      text: "Don't make any changes in the old code. Only make a new section at top bar called \"AI attempts\". On click of that redirect to a new screen where List out all the prompts that i have told you there like a chat message."
    },
    {
      id: 4,
      timestamp: 'Refinement Request',
      text: "Okay. Everything is so good. But in AI Attempts screen add whole prompt message dont take few lines. Also make no change in other things."
    },
    {
      id: 5,
      timestamp: 'Final Implementation',
      text: "Now don't make changes on anyother thing only remove dynamic data in AI Attempts section put that static directly take it from above."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen pt-32 pb-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-24 -left-24 text-[30rem] font-bold text-slate-50 select-none -z-0 opacity-20 pointer-events-none">
        LOG
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <motion.button
              onClick={onBack}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-8 flex items-center space-x-2 text-slate-400 hover:text-blue-600 transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold text-[10px] uppercase tracking-widest">Return Home</span>
            </motion.button>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Development Journal</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Static Command <br />
              <span className="text-slate-400 font-light italic text-3xl">Archive</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-3 text-slate-400 bg-white/50 backdrop-blur-md px-5 py-3 rounded-2xl border border-slate-100 shadow-sm"
          >
            <Bot size={20} className="text-blue-500" />
            <div className="text-[10px] font-bold uppercase tracking-widest">Permanent Registry</div>
          </motion.div>
        </div>

        {/* Conversation List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10 relative"
        >
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 top-4 bottom-4 w-px bg-slate-100 hidden sm:block"></div>

          {prompts.map((prompt, index) => (
            <motion.div
              key={prompt.id}
              variants={itemVariants}
              className="relative sm:pl-16 group"
            >
              {/* Icon Marker */}
              <div className="absolute left-3 sm:left-4 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-slate-200 group-hover:border-blue-500 group-hover:bg-blue-50 transition-all z-10 hidden sm:block"></div>

              <div className="glass-panel p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-50/20 transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500">
                      <Terminal size={14} />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Entry #0{prompt.id}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-300">
                    <Clock size={12} />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">{prompt.timestamp}</span>
                  </div>
                </div>

                <div className="relative group/prompt">
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-blue-100 rounded-full group-hover/prompt:bg-blue-400 transition-colors"></div>
                    <p className="text-slate-600 font-mono text-xs leading-relaxed whitespace-pre-wrap bg-slate-50/50 p-6 rounded-2xl border border-slate-100/50 select-text">
                        {prompt.text}
                    </p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-[10px] font-bold text-green-500 uppercase tracking-widest">
                    <ShieldCheck size={14} />
                    <span>Hardcoded Data</span>
                  </div>
                  <div className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">
                    Source: User Prompt History
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-3 px-8 py-4 bg-slate-900 text-white rounded-[2rem] text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-blue-600 transition-colors cursor-default shadow-xl shadow-slate-200">
            <MessageSquare size={14} />
            <span>End of Archive</span>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-24 -right-24 text-[30rem] font-bold text-slate-50 select-none -z-10 pointer-events-none opacity-50">
        AI
      </div>
    </section>
  );
};

export default AIAttempts;
