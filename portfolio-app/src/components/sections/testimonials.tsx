'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/animations/reveal';
import { GradientText } from '@/components/animations/gradient-text';
import { GlowCard } from '@/components/effects/glow-card';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { testimonials } from '@/content/data';
import { useMediaQuery } from '@/hooks/use-media-query';

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
};

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % (testimonials?.length || 1));
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + (testimonials?.length || 1)) % (testimonials?.length || 1));
  }, []);

  useEffect(() => {
    if (isMobile || isPaused || !testimonials || testimonials.length === 0) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isMobile, isPaused, next]);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }



  const testimonial = testimonials[current];

  return (
    <SectionWrapper id="testimonials">
      <Reveal>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <GradientText>What People Say</GradientText>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feedback from colleagues and clients
          </p>
        </div>
      </Reveal>

      <div
        className="max-w-3xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="relative overflow-hidden min-h-[320px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: isMobile ? 0.2 : 0.4, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <GlowCard className="h-full">
                <div className="p-6 md:p-12 text-center space-y-5 md:space-y-6">
                  <Quote className="h-10 w-10 mx-auto text-primary/30" />

                  <p className="text-base md:text-xl text-foreground/90 italic leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Star Rating */}
                  <div className="flex justify-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          'h-5 w-5',
                          i < testimonial.rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-muted-foreground/20'
                        )}
                      />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-muted-foreground" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={cn(
                  'w-2.5 h-2.5 rounded-full transition-all duration-300',
                  i === current ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                )}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
