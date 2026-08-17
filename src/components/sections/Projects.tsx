import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, X, CheckCircle } from 'lucide-react';
import { PROJECTS } from '../../utils/constants';
import { Project } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', '3D & Creative', 'AI & Web3'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyber-cyan/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Featured Works"
          title="Innovative Digital Projects"
          subtitle="Explore recent interactive applications, WebGL visualizers, and full-stack solutions."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-cyber-cyan text-background font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                  : 'glass-panel text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <GlassCard
                  onClick={() => setSelectedProject(project)}
                  className="h-full flex flex-col justify-between group cursor-pointer border-slate-800/80 hover:border-cyber-cyan/40 p-0 overflow-hidden"
                >
                  {/* Image container */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    {/* Category pill */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[10px] font-mono text-cyber-cyan font-semibold">
                      {project.category}
                    </div>

                    {project.featured && (
                      <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-cyber-purple/80 backdrop-blur-md border border-cyber-purple text-[10px] font-mono text-white flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-cyber-cyan" /> Featured
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyber-cyan transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-3xl glass-panel border border-cyber-cyan/30 rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyber-cyan transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner Image */}
              <div className="relative h-64 rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              </div>

              {/* Modal Content */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono font-semibold">
                    {selectedProject.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  {selectedProject.title}
                </h3>

                <p className="text-cyber-cyan text-xs font-mono font-medium">
                  {selectedProject.tagline}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedProject.longDescription || selectedProject.description}
                </p>

                {/* Metrics */}
                {selectedProject.metrics && (
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-800">
                    {selectedProject.metrics.map((m, idx) => (
                      <div key={idx} className="glass-panel p-3 rounded-xl">
                        <div className="text-xs font-mono text-slate-400">{m.label}</div>
                        <div className="text-lg font-heading font-bold text-cyber-cyan">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4">
                  {selectedProject.liveUrl && (
                    <Button
                      href={selectedProject.liveUrl}
                      target="_blank"
                      variant="primary"
                      icon={<ExternalLink className="w-4 h-4" />}
                    >
                      Live Demo
                    </Button>
                  )}
                  {selectedProject.githubUrl && (
                    <Button
                      href={selectedProject.githubUrl}
                      target="_blank"
                      variant="secondary"
                      icon={<Github className="w-4 h-4" />}
                    >
                      Source Code
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
