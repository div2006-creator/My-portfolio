import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Award,
  Briefcase,
  GraduationCap,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';
import { ACHIEVEMENTS_TIMELINE } from '../../utils/constants';
import { TimelineType } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';

export const Experience: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { label: 'All', icon: <Sparkles className="w-4 h-4" /> },
    { label: 'Hackathon', icon: <Trophy className="w-4 h-4" /> },
    { label: 'Competition', icon: <Award className="w-4 h-4" /> },
    { label: 'Project', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
  ];

  const filteredTimeline = selectedCategory === 'All'
    ? ACHIEVEMENTS_TIMELINE
    : ACHIEVEMENTS_TIMELINE.filter(item => item.category === selectedCategory);

  const getCategoryIcon = (category: TimelineType) => {
    switch (category) {
      case 'Hackathon': return <Trophy className="w-4 h-4 text-amber-400" />;
      case 'Competition': return <Award className="w-4 h-4 text-purple-400" />;
      case 'Project': return <Briefcase className="w-4 h-4 text-sky-400" />;
      case 'Education': return <GraduationCap className="w-4 h-4 text-indigo-400" />;
      default: return <Sparkles className="w-4 h-4 text-sky-400" />;
    }
  };

  const getCategoryBadgeClass = (category: TimelineType) => {
    switch (category) {
      case 'Hackathon': return 'bg-amber-400/10 border-amber-400/30 text-amber-300';
      case 'Competition': return 'bg-purple-400/10 border-purple-400/30 text-purple-300';
      case 'Project': return 'bg-sky-400/10 border-sky-400/30 text-sky-300';
      case 'Education': return 'bg-indigo-400/10 border-indigo-400/30 text-indigo-300';
      default: return 'bg-sky-400/10 border-sky-400/30 text-sky-300';
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-cyber-grid">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Timeline & Milestones"
          title="Experience & Achievements"
          subtitle="Hackathons, engineering projects, technical competitions, and academic milestones."
        />

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setSelectedCategory(cat.label)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                selectedCategory === cat.label
                  ? 'bg-sky-400 text-slate-950 font-bold shadow-[0_0_20px_rgba(56,189,248,0.4)]'
                  : 'glass-panel text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Futuristic Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Timeline Spine */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-sky-400 via-indigo-500 to-transparent opacity-40" />

          <div className="space-y-12">
            <AnimatePresence mode="popLayout">
              {filteredTimeline.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 35, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className={`relative flex flex-col sm:flex-row items-center ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Glowing Center Node Circle */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-950 border-2 border-sky-400 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(56,189,248,0.6)]">
                      <div className="w-3 h-3 rounded-full bg-sky-400 animate-pulse" />
                    </div>

                    {/* Timeline Card Container */}
                    <div className="w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0">
                      <GlassCard className="space-y-4 border-slate-800 hover:border-sky-400/50 transition-all duration-300 transform hover:-translate-y-1.5 hover:rotate-1 hover:shadow-[0_15px_35px_rgba(56,189,248,0.18)] group p-6">
                        
                        {/* Header: Title, Category Badge & Date Tag */}
                        <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-slate-800/80">
                          <div className="space-y-1">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-semibold ${getCategoryBadgeClass(item.category)}`}>
                              {getCategoryIcon(item.category)}
                              {item.category}
                            </span>
                            <h3 className="text-lg font-heading font-bold text-white group-hover:text-sky-300 transition-colors pt-1">
                              {item.title}
                            </h3>
                            <p className="text-xs font-mono text-sky-400">{item.subtitle}</p>
                          </div>

                          {item.dateTag && (
                            <div className="text-[10px] font-mono text-slate-400 bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800">
                              {item.dateTag}
                            </div>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                          {item.description}
                        </p>

                        {/* Bullet Highlights */}
                        <div className="space-y-1.5 pt-1">
                          {item.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs font-mono text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Skills Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Optional External Link Button */}
                        {item.link && (
                          <div className="pt-2 flex justify-end">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:underline"
                            >
                              <span>View Live Project</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        )}

                      </GlassCard>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};
