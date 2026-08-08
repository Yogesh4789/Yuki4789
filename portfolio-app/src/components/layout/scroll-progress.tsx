'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useMediaQuery } from '@/hooks/use-media-query';

export function ScrollProgress() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  if (isMobile) return null;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 via-blue-500 to-indigo-500 origin-left z-50 pointer-events-none"
      style={{ scaleX }}
    />
  );
}
