'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
}

export function TiltedCard({ children, className }: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for rotation
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { damping: 30, stiffness: 200 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { damping: 30, stiffness: 200 });

  // Spring for the glare position
  const glareX = useSpring(useTransform(mouseX, [0, 1], [0, 100]), { damping: 30, stiffness: 200 });
  const glareY = useSpring(useTransform(mouseY, [0, 1], [0, 100]), { damping: 30, stiffness: 200 });
  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    x.set(xPct);
    y.set(yPct);
    mouseX.set(mouseXPos / width);
    mouseY.set(mouseYPos / height);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111] dark:bg-card shadow-2xl transition-all duration-200',
        className
      )}
    >
      {/* Glare effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) =>
              `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          ),
        }}
      />
      {/* Inner subtle glow */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
      
      <div 
        className="relative z-10 h-full w-full"
        style={{ transform: 'translateZ(30px)' }} // 3D pop out effect for content
      >
        {children}
      </div>
    </motion.div>
  );
}
