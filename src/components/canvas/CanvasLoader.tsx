import React from 'react';
import { Html, useProgress } from '@react-three/drei';

export const CanvasLoader: React.FC = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div className="relative flex items-center justify-center">
        {/* Futuristic glowing spinner */}
        <div className="w-16 h-16 rounded-full border-2 border-cyber-cyan/20 border-t-cyber-cyan animate-spin" />
        <div className="absolute w-10 h-10 rounded-full border-2 border-cyber-purple/30 border-b-cyber-purple animate-spin-slow" />
      </div>
      <p className="mt-4 text-xs font-mono font-semibold text-cyber-cyan tracking-wider text-glow-cyan uppercase">
        Loading 3D Core {progress.toFixed(0)}%
      </p>
    </Html>
  );
};
