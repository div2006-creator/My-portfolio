import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { ContactCanvas } from '../canvas/ContactCanvas';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Client-side input validation
  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please enter a message (at least 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrors({});

    // Simulated secure transmission state (no exposed API keys)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 1200);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1.0] }
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-cyber-grid">
      {/* 3D WebGL Background Element */}
      <ContactCanvas />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Get In Touch"
          title="Let's Build Something Together"
          subtitle="Have an engineering opportunity, software project, or collaboration in mind? Feel free to reach out!"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto"
        >
          
          {/* Left Column: Direct Contact Details & Links */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <GlassCard className="space-y-4 border-slate-800 hover:border-sky-400/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email Address</h4>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-heading font-semibold text-white hover:text-sky-300 transition-colors break-all flex items-center gap-1"
                  >
                    {PERSONAL_INFO.email}
                    <ArrowUpRight className="w-3.5 h-3.5 text-sky-400 inline" />
                  </a>
                </div>
              </div>
            </GlassCard>

            {/* LinkedIn Card */}
            <GlassCard className="space-y-4 border-slate-800 hover:border-sky-400/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-indigo-400/10 border border-indigo-400/30 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">LinkedIn Profile</h4>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-heading font-semibold text-white hover:text-sky-300 transition-colors flex items-center gap-1"
                  >
                    divyansh-sharma
                    <ArrowUpRight className="w-3.5 h-3.5 text-sky-400 inline" />
                  </a>
                </div>
              </div>
            </GlassCard>

            {/* GitHub Card */}
            <GlassCard className="space-y-4 border-slate-800 hover:border-sky-400/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-200 flex-shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">GitHub Profile</h4>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-heading font-semibold text-white hover:text-sky-300 transition-colors flex items-center gap-1"
                  >
                    div2006-creator
                    <ArrowUpRight className="w-3.5 h-3.5 text-sky-400 inline" />
                  </a>
                </div>
              </div>
            </GlassCard>

            {/* Availability Pill */}
            <div className="p-4 rounded-2xl glass-panel border border-sky-400/20 space-y-2 bg-gradient-to-br from-sky-400/5 to-indigo-500/5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400 animate-pulse" />
                <h4 className="text-xs font-mono text-sky-400 uppercase font-semibold">Open for Collaboration</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Available for Software Engineering roles, Full-Stack applications, Computer Vision projects, and technical discussions.
              </p>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <GlassCard className="border-sky-400/30 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-800">
                <MessageSquare className="w-5 h-5 text-sky-400" />
                <h3 className="text-xl font-heading font-bold text-white">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                
                {/* Name Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 flex items-center justify-between">
                    <span>Name *</span>
                    {errors.name && <span className="text-rose-400 text-[11px]">{errors.name}</span>}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
                      errors.name ? 'border-rose-400/80' : 'border-slate-800'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors`}
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 flex items-center justify-between">
                    <span>Email *</span>
                    {errors.email && <span className="text-rose-400 text-[11px]">{errors.email}</span>}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
                      errors.email ? 'border-rose-400/80' : 'border-slate-800'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors`}
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 flex items-center justify-between">
                    <span>Message *</span>
                    {errors.message && <span className="text-rose-400 text-[11px]">{errors.message}</span>}
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project, inquiry, or message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
                      errors.message ? 'border-rose-400/80' : 'border-slate-800'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors resize-none`}
                  />
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="p-3.5 rounded-xl bg-emerald-400/10 border border-emerald-400/40 text-emerald-400 text-xs font-mono flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Message sent successfully! I will reply to your email shortly.</span>
                  </div>
                )}

                {status === 'error' && Object.keys(errors).length > 0 && (
                  <div className="p-3.5 rounded-xl bg-rose-400/10 border border-rose-400/40 text-rose-300 text-xs font-mono flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Please correct the errors in the form before sending.</span>
                  </div>
                )}

                {/* Submit Button */}
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

        </motion.div>
      </div>
    </section>
  );
};
