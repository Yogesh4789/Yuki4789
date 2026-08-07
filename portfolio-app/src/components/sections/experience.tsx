'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, CheckCircle2, Building2, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/animations/reveal';
import { GradientText } from '@/components/animations/gradient-text';
import { GlowCard } from '@/components/effects/glow-card';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/content/data';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <SectionWrapper id="experience">
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <GradientText>Experience</GradientText>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional journey and key accomplishments
          </p>
        </div>
      </Reveal>

      <div ref={ref} className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <motion.div
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border origin-top"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />

        {experiences.map((exp, i) => (
          <Reveal key={exp.id} delay={i * 0.15}>
            <div className={cn(
              'relative flex mb-12 pl-12 md:pl-0',
              i % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%]'
            )}>
              {/* Timeline Dot */}
              <div className="absolute left-2.5 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background z-10">
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
              </div>

              <div className={cn('w-full', i % 2 === 0 ? 'md:pr-8' : 'md:pl-8')}>
                <GlowCard>
                  <div className="p-6 space-y-4">
                    <div className={cn('flex flex-col gap-2', i % 2 === 0 ? 'md:items-end' : 'items-start')}>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building2 className="h-4 w-4 text-primary" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs font-mono">
                          <Calendar className="mr-1 h-3 w-3" />
                          {exp.startDate} — {exp.endDate}
                        </Badge>
                        <Badge variant="secondary" className="text-xs capitalize">{exp.type}</Badge>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className={cn('text-muted-foreground text-sm leading-relaxed', i % 2 === 0 && 'md:text-right')}>
                      {exp.description}
                    </p>

                    <ul className={cn('space-y-2', i % 2 === 0 && 'md:text-right')}>
                      {exp.achievements.map((achievement, j) => (
                        <li key={j} className={cn('flex items-start gap-2 text-sm text-foreground/80', i % 2 === 0 && 'md:flex-row-reverse')}>
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={cn('flex flex-wrap gap-1.5', i % 2 === 0 ? 'md:justify-end' : 'justify-start')}>
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
