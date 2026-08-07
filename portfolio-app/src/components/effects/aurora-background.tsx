'use client'

import React from 'react';
import { cn } from '@/lib/utils';

interface AuroraBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export function AuroraBackground({ className, children }: AuroraBackgroundProps) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-[#08090d]", className)}>
      <div className="absolute inset-0 z-0">
        <style>{`
          @keyframes aurora-1 {
            0%, 100% { transform: translateY(0) translateX(0) scale(1); }
            50% { transform: translateY(-20%) translateX(10%) scale(1.1); }
          }
          @keyframes aurora-2 {
            0%, 100% { transform: translateY(0) translateX(0) scale(1); }
            50% { transform: translateY(20%) translateX(-10%) scale(0.9); }
          }
          @keyframes aurora-3 {
            0%, 100% { transform: translateY(0) translateX(0) scale(1); }
            50% { transform: translateY(-10%) translateX(-20%) scale(1.05); }
          }
        `}</style>
        <div 
          className="absolute -top-[20%] -left-[10%] h-[50%] w-[50%] rounded-full bg-violet-600/20 blur-[100px] will-change-transform"
          style={{ animation: 'aurora-1 15s ease-in-out infinite alternate' }}
        />
        <div 
          className="absolute top-[40%] -right-[10%] h-[60%] w-[50%] rounded-full bg-indigo-600/20 blur-[120px] will-change-transform"
          style={{ animation: 'aurora-2 20s ease-in-out infinite alternate' }}
        />
        <div 
          className="absolute -bottom-[20%] left-[20%] h-[50%] w-[60%] rounded-full bg-blue-600/20 blur-[100px] will-change-transform"
          style={{ animation: 'aurora-3 18s ease-in-out infinite alternate' }}
        />
      </div>
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}
