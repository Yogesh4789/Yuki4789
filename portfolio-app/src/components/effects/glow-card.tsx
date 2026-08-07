'use client'

import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({
  children,
  className,
  glowColor = 'rgba(139, 92, 246, 1)',
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: -1000, y: -1000 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative rounded-xl p-[2px] bg-white/10 overflow-hidden",
        className
      )}
    >
      {/* Spotlight Gradient */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.8), ${glowColor} 15%, transparent 60%)`,
        }}
      />
      
      {/* Inner Card (covers gradient except for 1px border) */}
      <div className="relative z-10 h-full w-full rounded-[11px] bg-[rgba(18,20,31,0.85)] backdrop-blur-xl p-6">
        {children}
      </div>
    </div>
  );
}
