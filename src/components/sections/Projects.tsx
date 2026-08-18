import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, X, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { PROJECTS } from '../../utils/constants';
import { Project } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Full Stack',
    'AI & Computer Vision',
    'IoT & Web',
    'Data Analytics'
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1.0] }
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-cyber-grid">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Featured Works"
          title="Engineering & Software Projects"
          subtitle="Explore real-world software applications, computer vision systems, IoT printer farm managers, and analytics platforms."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-sky-400 text-slate-950 font-bold shadow-[0_0_20px_rgba(56,189,248,0.4)]'
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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              >
                <GlassCard
                  onClick={() => setSelectedProject(project)}
                  className="h-full flex flex-col justify-between group cursor-pointer border-slate-800 hover:border-sky-400/50 p-0 overflow-hidden transform hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(56,189,248,0.18)] transition-all duration-300"
                >
                  {/* Thumbnail Image Banner */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    {/* Category Tag */}
                    <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[10px] font-mono text-sky-400 font-semibold">
                      {project.category}
                    </div>

                    {/* Context Tag (Hackathon / Task) */}
                    {project.contextTag && (
                      <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-sky-400/10 backdrop-blur-md border border-sky-400/30 text-[10px] font-mono text-sky-300 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-sky-400" /> {project.contextTag}
                      </div>
                    )}
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-lg font-heading font-bold text-white group-hover:text-sky-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed font-sans">
                        {project.description}
                      </p>
                    </div>

                    {/* Feature Highlights (Up to 3) */}
                    {project.features && (
                      <div className="space-y-1 pt-2 border-t border-slate-800/60">
                        {project.features.slice(0, 3).map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[11px] font-mono text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer Actions / Click hint */}
                    <div className="pt-3 flex items-center justify-between border-t border-slate-800/60 text-xs font-mono text-sky-400 group-hover:text-sky-300">
                      <span className="flex items-center gap-1">
                        View Details <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>

                      {/* Direct Links if available */}
                      <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-400 transition-colors"
                            aria-label="GitHub Repository"
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-400 transition-colors"
                            aria-label="Live Demo"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl glass-panel border border-sky-400/30 rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-400 transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner Image */}
              <div className="relative h-60 sm:h-72 rounded-2xl overflow-hidden bg-slate-950">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                {selectedProject.contextTag && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs font-mono text-sky-400">
                    {selectedProject.contextTag}
                  </div>
                )}
              </div>

              {/* Modal Content */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/30 text-sky-400 text-xs font-mono font-semibold">
                    {selectedProject.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  {selectedProject.title}
                </h3>

                <p className="text-sky-300 text-xs font-mono font-medium">
                  {selectedProject.tagline}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  {selectedProject.longDescription || selectedProject.description}
                </p>

                {/* Features Checklist */}
                {selectedProject.features && (
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                    <h4 className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-sky-400" /> Key Features & Components
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Tags */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Action Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
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
                      GitHub Source Code
                    </Button>
                  )}
                  {!selectedProject.liveUrl && !selectedProject.githubUrl && (
                    <div className="text-xs font-mono text-slate-500 italic">
                      Enterprise / Private project repository
                    </div>
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
