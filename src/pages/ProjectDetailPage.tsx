import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../utils/constants';
import { ArrowLeft, ExternalLink, Github, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { StarsBackground } from '../components/canvas/StarsBackground';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id) || PROJECTS[0];

  return (
    <div className="relative min-h-screen bg-background text-slate-100 selection:bg-cyber-cyan selection:text-background">
      <StarsBackground />
      <Navbar />

      <main className="relative z-10 pt-32 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono text-cyber-cyan hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono font-semibold">
              {project.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-gradient">
            {project.title}
          </h1>

          <p className="text-slate-400 text-base max-w-2xl">
            {project.tagline}
          </p>
        </div>

        <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden glass-panel border border-slate-800 shadow-2xl">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>

        <GlassCard className="space-y-6">
          <h2 className="text-xl font-heading font-bold text-white">Project Overview</h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            {project.longDescription || project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
            {project.liveUrl && (
              <Button href={project.liveUrl} target="_blank" variant="primary" icon={<ExternalLink className="w-4 h-4" />}>
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button href={project.githubUrl} target="_blank" variant="secondary" icon={<Github className="w-4 h-4" />}>
                View Source Code
              </Button>
            )}
          </div>
        </GlassCard>
      </main>

      <Footer />
    </div>
  );
};
