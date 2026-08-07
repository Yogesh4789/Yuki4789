'use client'

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CountUpProps {
  target: number;
  start?: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function CountUp({
  target,
  start = 0,
  duration = 2,
  className,
  prefix = '',
  suffix = '',
  decimals = 0,
}: CountUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const count = useMotionValue(start);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, target, duration, count]);

  return (
    <span ref={ref} className={cn("inline-flex items-center", className)}>
      {prefix && <span>{prefix}</span>}
      <motion.span>{rounded}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
