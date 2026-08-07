'use client'

import React from 'react';
import { cn } from '@/lib/utils';

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
  borderWidth?: number;
  rounded?: string;
}

export function GradientBorder({
  children,
  className,
  borderWidth = 1,
  rounded = 'rounded-2xl',
}: GradientBorderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden p-[1px]",
        rounded,
        className
      )}
      style={{ padding: `${borderWidth}px` }}
    >
      <style>{`
        @keyframes rotate-gradient {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <div 
        className="absolute inset-[-50%] z-0"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0%, rgba(139, 92, 246, 1) 25%, rgba(99, 102, 241, 1) 50%, rgba(59, 130, 246, 1) 75%, transparent 100%)',
          animation: 'rotate-gradient 4s linear infinite',
        }}
      />
      <div className="relative z-10 h-full w-full rounded-[inherit] bg-[rgba(18,20,31,0.9)] backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}
