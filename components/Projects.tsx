
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, X } from 'lucide-react';
import { Project } from '../types';

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'ReadysetConnect',
    description: 'A high-performance networking solution built with Flutter for seamless professional connectivity.',
    longDescription: 'ReadysetConnect is a comprehensive networking platform that streamlines professional interactions. Built with Flutter, it features real-time messaging, smart contact management, and integrated event scheduling.',
    image: 'https://picsum.photos/seed/connect/800/600',
    tags: ['Flutter', 'Firebase', 'Real-time Chat', 'BLoC'],
    link: '#',
    github: '#'
  },
  {
    id: '2',
    title: 'Pawland',
    description: 'A dedicated marketplace and community hub for pet lovers, featuring adoption and pet-care services.',
    longDescription: 'Pawland connects pet owners with essential services and a thriving community. It includes modules for pet adoption, grooming appointments, and a social feed for pet enthusiasts, all optimized for a smooth mobile experience.',
    image: 'https://picsum.photos/seed/pawland/800/600',
    tags: ['Flutter', 'Dart', 'E-commerce', 'Cloud Firestore'],
    link: '#',
    github: '#'
  },
  {
    id: '3',
    title: 'GPS Map Camera',
    description: 'Utility application for capturing photos with precise real-time geotagging and metadata overlays.',
    longDescription: 'GPS Map Camera allows users to capture moments with embedded location data. It provides customizable overlays including coordinates, address, and timestamps directly on the image, ideal for field workers and travelers.',
    image: 'https://picsum.photos/seed/gps/800/600',
    tags: ['Geotagging', 'Google Maps API', 'CameraX', 'Flutter'],
    link: '#',
    github: '#'
  },
  {
    id: '4',
    title: 'Meditation Music',
    description: 'Product app featuring curated soundscapes and personalized meditation timers for mental wellness.',
    longDescription: 'This Meditation Music product app provides users with a variety of high-quality ambient sounds. It features a sleek UI with customizable timers and offline playback capabilities to support mental health and focus.',
    image: 'https://picsum.photos/seed/meditation/800/600',
    tags: ['Audio Streaming', 'Wellness', 'UI/UX', 'Flutter'],
    link: '#',
    github: '#'
  },
  {
    id: '5',
    title: 'Wireless File transfer',
    description: 'Fast and secure P2P file sharing utility across local networks without internet dependency.',
    longDescription: 'Wireless File transfer leverages local Wi-Fi networks to enable high-speed file sharing between devices. It bypasses internet constraints, ensuring privacy and speed for large data transfers.',
    image: 'https://picsum.photos/seed/transfer/800/600',
    tags: ['Networking', 'P2P', 'Flutter', 'File System'],
    link: '#',
    github: '#'
  },
  {
    id: '6',
    title: 'Unit conversion',
    description: 'Minimalistic and intuitive unit converter covering over 50 categories with real-time calculations.',
    longDescription: 'A classic utility tool reimagined with a futuristic interface. It supports currency, measurement, and scientific unit conversions with a focus on speed and accuracy.',
    image: 'https://picsum.photos/seed/unit/800/600',
    tags: ['Utility', 'Algorithms', 'Flutter', 'Clean UI'],
    link: '#',
    github: '#'
  }
];

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = PROJECTS.find(p => p.id === selectedId);

  return (
    <section id="projects" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Selected Works</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900">Featured Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
              className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <span className="text-white font-bold flex items-center space-x-2">
                        <span>Learn More</span>
                        <ArrowRight size={18} />
                    </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-3 py-1 bg-slate-50 text-slate-500 rounded-full border border-slate-100 uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">{project.title}</h4>
                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedId && selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl"
              />
              <motion.div
                layoutId={selectedId}
                className="w-full max-w-4xl bg-white rounded-[3rem] overflow-hidden relative shadow-2xl flex flex-col md:flex-row"
              >
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 z-10 p-2 bg-white/20 backdrop-blur-md rounded-full text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="w-full md:w-1/2 h-64 md:h-auto">
                    <img src={selectedProject.image} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{selectedProject.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100 uppercase tracking-tighter">
                        {tag}
                        </span>
                    ))}
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                  
                  <div className="flex space-x-4">
                    <a href={selectedProject.link} className="flex-1 flex items-center justify-center space-x-2 py-4 bg-slate-900 text-white rounded-2xl hover:bg-blue-600 transition-colors font-bold">
                        <ExternalLink size={18} />
                        <span>View Live</span>
                    </a>
                    <a href={selectedProject.github} className="px-6 flex items-center justify-center bg-slate-100 text-slate-900 rounded-2xl hover:bg-slate-200 transition-colors">
                        <Github size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
