
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Ready to build <br />the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">future</span> together?
            </h3>
            <p className="text-slate-500 mb-12 text-lg max-w-md leading-relaxed">
              I'm currently available for freelance work and full-time opportunities. Drop a message and let's discuss your next breakthrough project.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-slate-100">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Me</div>
                  <div className="font-bold text-slate-900">alex@flutterarchitect.dev</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm border border-slate-100">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Location</div>
                  <div className="font-bold text-slate-900">Surat, Gujarat, India</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass-panel p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Name</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all placeholder:text-slate-300"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  required 
                  rows={4} 
                  placeholder="Tell me about your project..." 
                  className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all resize-none placeholder:text-slate-300"
                ></textarea>
              </div>
              
              <button
                disabled={status !== 'idle'}
                className={`w-full py-5 rounded-2xl font-bold text-white transition-all flex items-center justify-center space-x-2 ${
                  status === 'success' ? 'bg-green-500' : 'bg-slate-900 hover:bg-blue-600 shadow-lg hover:shadow-blue-200'
                }`}
              >
                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
                {status === 'submitting' && (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                )}
                {status === 'success' && (
                  <>
                    <span>Message Sent!</span>
                    <CheckCircle size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
