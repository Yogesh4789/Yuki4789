'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '@/hooks/use-media-query';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery('(max-width: 767px)');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, isMobile ? 700 : 1500);

    return () => clearTimeout(timer);
  }, [isMobile]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#08090d]"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative flex flex-col items-center gap-4"
          >
            {/* Minimalist Monogram / Logo */}
            <div className="relative w-16 h-16 border border-violet-500/30 flex items-center justify-center rounded-xl bg-violet-500/5 backdrop-blur-md">
              <span className="text-2xl font-bold bg-gradient-to-br from-violet-400 to-indigo-600 bg-clip-text text-transparent">
                DB
              </span>
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border border-t-violet-500 border-r-transparent border-b-transparent border-l-transparent rounded-xl"
              />
            </div>
            {/* Loading text / progress indicator */}
            <div className="flex gap-1 items-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  className="w-1.5 h-1.5 rounded-full bg-violet-500"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
