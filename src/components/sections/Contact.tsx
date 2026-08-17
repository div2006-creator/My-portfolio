import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-cyber-grid">
      {/* Glow ambient circle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyber-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Build Something Epic"
          subtitle="Have a project in mind, looking for a 3D web developer, or just want to connect?"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Contact Details Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <GlassCard className="space-y-4 border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-cyber-cyan" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase">Direct Email</h4>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-semibold text-white hover:text-cyber-cyan transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="space-y-4 border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyber-purple/10 border border-cyber-purple/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-cyber-purple" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase">Location</h4>
                  <p className="text-sm font-semibold text-white">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="space-y-4 border-slate-800 bg-gradient-to-br from-cyber-cyan/5 to-cyber-purple/5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyber-cyan" />
                <h4 className="text-xs font-mono text-cyber-cyan uppercase font-semibold">Availability</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Currently open to freelance contracts, full-stack 3D applications, and engineering roles.
              </p>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <GlassCard className="border-cyber-cyan/30">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyber-cyan transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyber-cyan transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyber-cyan transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project details or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyber-cyan transition-colors resize-none"
                  />
                </div>

                {status === 'success' && (
                  <div className="p-3 rounded-xl bg-cyber-emerald/10 border border-cyber-emerald/40 text-cyber-emerald text-xs font-mono flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Message sent successfully! I will reply shortly.
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === 'submitting'}
                  className="w-full justify-center"
                  icon={<Send className="w-4 h-4" />}
                >
                  {status === 'submitting' ? 'Transmitting...' : 'Send Message'}
                </Button>
              </form>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
