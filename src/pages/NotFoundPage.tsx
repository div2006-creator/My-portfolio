import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Terminal } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full glass-panel border border-cyber-cyan/30 rounded-3xl p-8 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center mx-auto text-cyber-cyan">
          <Terminal className="w-8 h-8" />
        </div>
        <h1 className="text-6xl font-heading font-extrabold text-gradient">404</h1>
        <p className="text-slate-400 text-sm font-mono">
          System error: Requested signal coordinates not found in WebGL memory matrix.
        </p>
        <Button href="/" variant="primary" icon={<ArrowLeft className="w-4 h-4" />}>
          Return to Home Base
        </Button>
      </div>
    </div>
  );
};
