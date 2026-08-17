import React from 'react';
import { cn } from '../../utils/cn';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: 'cyan' | 'purple' | 'emerald' | 'pink';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = true,
  glowColor = 'cyan',
  ...props
}) => {
  const glowStyles = {
    cyan: "hover:border-cyber-cyan/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]",
    purple: "hover:border-cyber-purple/50 hover:shadow-[0_0_30px_rgba(112,0,255,0.15)]",
    emerald: "hover:border-cyber-emerald/50 hover:shadow-[0_0_30px_rgba(0,255,157,0.15)]",
    pink: "hover:border-cyber-pink/50 hover:shadow-[0_0_30px_rgba(255,0,127,0.15)]",
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl p-6 transition-all duration-300",
        hoverEffect ? "glass-panel-interactive" : "glass-panel",
        hoverEffect && glowStyles[glowColor],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
