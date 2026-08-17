import React from 'react';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  center = true,
  className,
}) => {
  return (
    <div className={cn("mb-12 md:mb-16", center && "text-center", className)}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono font-semibold tracking-wider uppercase mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-heading font-bold text-gradient tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
