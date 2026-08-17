import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../../utils/constants';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Layers, Cpu, Database, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { label: 'All', icon: <Layers className="w-4 h-4" /> },
    { label: '3D & Graphics', icon: <Cpu className="w-4 h-4" /> },
    { label: 'Frontend', icon: <Layers className="w-4 h-4" /> },
    { label: 'Backend & Database', icon: <Database className="w-4 h-4" /> },
    { label: 'Tools & DevOps', icon: <Wrench className="w-4 h-4" /> },
  ];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Technical Stack"
          title="Skills & Technologies"
          subtitle="Mastering modern tools, graphics frameworks, and full-stack software development workflows."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setSelectedCategory(cat.label)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                selectedCategory === cat.label
                  ? 'bg-cyber-cyan text-background font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                  : 'glass-panel text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <GlassCard className="space-y-3 border-slate-800/80 hover:border-cyber-cyan/40">
                <div className="flex items-center justify-between">
                  <span className="font-heading font-semibold text-white text-base">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono text-cyber-cyan font-bold">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar track */}
                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden p-0.5 border border-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-cyber-cyan to-cyber-purple shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                  />
                </div>

                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 pt-1">
                  <span>{skill.category}</span>
                  <span>Proficiency</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
