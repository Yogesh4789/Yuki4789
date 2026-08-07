'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StaggerChildrenProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  as?: React.ElementType;
}

const containerVariants = {
  hidden: {},
  visible: (staggerDelay: number) => ({
    transition: {
      staggerChildren: staggerDelay,
    },
  }),
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

export function StaggerChildren({
  children,
  staggerDelay = 0.1,
  className,
  as = 'div',
}: StaggerChildrenProps) {
  const MotionComponent = (motion as any)[as as any] || motion.div;

  return (
    <MotionComponent
      variants={containerVariants as any}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      custom={staggerDelay}
      className={cn(className)}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return (
          <motion.div variants={childVariants as any}>
            {child}
          </motion.div>
        );
      })}
    </MotionComponent>
  );
}
