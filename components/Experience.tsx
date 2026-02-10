
import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../types';

const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    title: 'Senior Flutter Developer',
    company: 'Innovate Solutions',
    period: '2023 - Present',
    description: 'Leading mobile development for AI-integrated enterprise tools.',
    achievements: [
        'Implemented custom LLM interfaces using Gemini API',
        'Reduced app load time by 40% through lazy loading and asset optimization',
        'Mentored junior developers in BLoC state management'
    ]
  },
  {
    id: 'exp2',
    title: 'Mobile App Developer',
    company: 'SwiftTech Labs',
    period: '2022 - 2023',
    description: 'Developed and maintained consumer-facing Flutter applications.',
    achievements: [
        'Successfully migrated 3 legacy apps from native to Flutter',
        'Integrated Firebase Auth, Firestore and Push Notifications',
        'Collaborated with design teams for pixel-perfect UI'
    ]
  },
  {
    id: 'exp3',
    title: 'AI/ML Enthusiast & Flutter Intern',
    company: 'FutureWorks',
    period: '2021 - 2022',
    description: 'Focusing on integrating ML Kit features into Flutter apps.',
    achievements: [
        'Built a text recognition tool with 99% accuracy',
        'Mastered Dart asynchronous programming and REST API integration',
        'Contributed to 2 open-source Flutter packages'
    ]
  }
];

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">The Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900">Career Milestones</h3>
        </div>

        <div className="relative border-l border-slate-200 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`relative mb-16 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto text-left'}`}
            >
              {/* Timeline Dot */}
              <div className="absolute top-0 left-[-21px] md:left-auto md:right-[-9px] md:translate-x-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-50 z-10" 
                style={index % 2 !== 0 ? {left: '-9px', right: 'auto'} : {}}
              />

              <div className="glass-panel p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full mb-3 uppercase tracking-tighter">
                    {exp.period}
                </span>
                <h4 className="text-2xl font-bold text-slate-900 mb-1">{exp.title}</h4>
                <div className="text-slate-400 font-medium mb-4">{exp.company}</div>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{exp.description}</p>
                <ul className={`space-y-2 text-sm text-slate-600 ${index % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start space-x-2">
                        {index % 2 !== 0 && <span className="text-blue-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>}
                        <span>{ach}</span>
                        {index % 2 === 0 && <span className="hidden md:inline-block text-blue-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
