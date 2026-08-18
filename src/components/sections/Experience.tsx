import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Sparkles, Rocket } from 'lucide-react';
import { EXPERIENCES } from '../../utils/constants';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';

export const Experience: React.FC = () => {
  const hasExperiences = EXPERIENCES && EXPERIENCES.length > 0;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-cyber-grid">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Experience"
          title="Work Experience"
          subtitle={hasExperiences ? "Professional career history & engineering roles." : undefined}
        />

        {hasExperiences ? (
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-sky-400 via-indigo-500 to-transparent opacity-40" />

            <div className="space-y-12">
              {EXPERIENCES.map((exp, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`relative flex flex-col sm:flex-row items-center ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-sky-400 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(56,189,248,0.6)]">
                      <div className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
                    </div>

                    <div className="w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0">
                      <GlassCard className="space-y-4 border-slate-800 hover:border-sky-400/40">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                          <div>
                            <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                              <Briefcase className="w-4 h-4 text-sky-400" />
                              {exp.role}
                            </h3>
                            <p className="text-xs font-mono text-sky-400">{exp.company}</p>
                          </div>
                          <div className="flex items-center gap-1 text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
                            <Calendar className="w-3 h-3 text-indigo-400" />
                            {exp.period}
                          </div>
                        </div>

                        <ul className="space-y-2 text-xs text-slate-300">
                          {exp.description.map((desc, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 leading-relaxed">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </GlassCard>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Minimal & Honest Experience Placeholder Card */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <GlassCard className="border-slate-800 p-8 sm:p-10 text-center space-y-4 hover:border-sky-400/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-sky-400/10 border border-sky-400/30 flex items-center justify-center mx-auto text-sky-400">
                <Rocket className="w-7 h-7" />
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                Continuous Learning & Projects
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-xl mx-auto">
                Currently building my skills through projects, hackathons, certifications, and continuous learning.
              </p>

              <div className="pt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-sky-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Open for Software Engineering Internships & Roles</span>
              </div>
            </GlassCard>
          </motion.div>
        )}

      </div>
    </section>
  );
};
