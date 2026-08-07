'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface DriftWallProps {
  items: { label: string; icon: LucideIcon }[];
  className?: string;
}

export function DriftWall({ items, className }: DriftWallProps) {
  const row1 = items.slice(0, Math.ceil(items.length / 2));
  const row2 = items.slice(Math.ceil(items.length / 2));

  const renderRow = (rowItems: { label: string; icon: LucideIcon }[], direction: 1 | -1) => {
    // Duplicate the items once to create a seamless scroll (moving exactly -50%)
    // But since the items might be small, we duplicate them enough times to fill the screen twice,
    // then we wrap them in a container that translates -50%.
    const baseItems = [...rowItems, ...rowItems, ...rowItems, ...rowItems];
    const loopItems = [...baseItems, ...baseItems]; // Two exact halves

    return (
      <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex w-max min-w-full gap-4 items-center pr-4"
          animate={{
            x: direction === -1 ? ['0%', '-50%'] : ['-50%', '0%'],
          }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 35, // much faster
          }}
        >
          {loopItems.map((item, i) => (
            <div
              key={i}
              className="group relative flex-shrink-0 flex items-center gap-4 px-5 py-3 h-[64px] rounded-2xl border border-white/10 bg-[#111111] dark:bg-card/50 backdrop-blur-md shadow-lg transition-all hover:bg-white/5 hover:-translate-y-1 hover:border-primary/50 cursor-pointer"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-colors group-hover:bg-primary/20">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-base font-semibold text-foreground/90 whitespace-nowrap group-hover:text-foreground transition-colors">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <div className={cn('flex flex-col gap-4 relative overflow-hidden', className)}>
      {renderRow(row1, -1)}
      {renderRow(row2, 1)}
    </div>
  );
}
