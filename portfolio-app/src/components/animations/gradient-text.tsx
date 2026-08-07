'use client'

import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
}

export function GradientText({
  children,
  className,
  from = 'from-violet-500',
  via = 'via-indigo-500',
  to = 'to-blue-500',
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-[length:200%_auto] bg-clip-text text-transparent",
        "animate-[background-position_3s_ease-in-out_infinite_alternate]",
        from,
        via,
        to,
        className
      )}
      style={{
        animationName: 'text-gradient-animation'
      }}
    >
      <style>{`
        @keyframes text-gradient-animation {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
      {children}
    </span>
  );
}
