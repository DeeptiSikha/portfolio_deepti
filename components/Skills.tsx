
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code, Server, Brain, Layout, Database } from 'lucide-react';
import { Skill } from '../types';

const SKILLS: Skill[] = [
  { name: 'Flutter', level: 95, icon: 'Smartphone', category: 'Mobile' },
  { name: 'Dart', level: 90, icon: 'Code', category: 'Mobile' },
  { name: 'Firebase', level: 85, icon: 'Database', category: 'Backend' },
  { name: 'Gemini/ML Kit', level: 80, icon: 'Brain', category: 'AI' },
  { name: 'REST APIs', level: 88, icon: 'Server', category: 'Backend' },
  { name: 'UI/UX Design', level: 75, icon: 'Layout', category: 'Design' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-white/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Core Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Where Engineering <br />Meets <span className="italic text-slate-400 font-light">Intelligence</span>
            </h3>
          </div>
          <p className="text-slate-500 max-w-sm">
            Leveraging cutting-edge technologies to build performant, scalable, and intelligent mobile solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 glass-panel rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                    {skill.name === 'Flutter' && <Smartphone size={24} />}
                    {skill.name === 'Dart' && <Code size={24} />}
                    {skill.name === 'Firebase' && <Database size={24} />}
                    {skill.name === 'Gemini/ML Kit' && <Brain size={24} />}
                    {skill.name === 'REST APIs' && <Server size={24} />}
                    {skill.name === 'UI/UX Design' && <Layout size={24} />}
                </div>
                <span className="text-xs font-bold text-slate-300 group-hover:text-blue-200 transition-colors uppercase tracking-widest">{skill.category}</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h4 className="font-heading font-bold text-xl">{skill.name}</h4>
                    <span className="text-blue-600 font-bold text-sm">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="h-full bg-blue-600 rounded-full"
                    />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
