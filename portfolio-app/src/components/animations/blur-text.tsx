'use client'

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  animateBy?: 'characters' | 'words';
  direction?: 'up' | 'down';
}

export function BlurText({
  text,
  className,
  delay = 0,
  animateBy = 'words',
  direction = 'up',
}: BlurTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay },
    },
  };

  const childVariant = {
    hidden: { 
      opacity: 0, 
      filter: 'blur(10px)', 
      y: direction === 'up' ? 10 : -10 
    },
    visible: { 
      opacity: 1, 
      filter: 'blur(0px)', 
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container as any}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={cn("flex flex-wrap", className)}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={childVariant as any}
          className="inline-block"
          style={{ marginRight: animateBy === 'words' ? '0.25em' : '0' }}
        >
          {element === ' ' ? '\u00A0' : element}
        </motion.span>
      ))}
    </motion.div>
  );
}
