'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, MonitorSmartphone, Server, Code2, Cloud, Brain, LineChart, Workflow, Network, GraduationCap } from 'lucide-react';
import { Reveal } from '@/components/animations/reveal';
import { GradientText } from '@/components/animations/gradient-text';
import { CountUp } from '@/components/animations/count-up';
import { GlowCard } from '@/components/effects/glow-card';
import { DriftWall } from '@/components/effects/drift-wall';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { personalInfo, stats, education } from '@/content/data';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-media-query';

const highlights = [
  { label: 'Full Stack Dev', icon: Code2 },
  { label: 'Backend APIs', icon: Server },
  { label: 'Responsive UI', icon: MonitorSmartphone },
  { label: 'AI Applications', icon: Brain },
  { label: 'Cloud Integration', icon: Cloud },
  { label: 'Data Analytics', icon: LineChart },
  { label: 'Automation', icon: Workflow },
  { label: 'Scalable Systems', icon: Network },
];

import Particles from '@/components/backgrounds/Particles';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <SectionWrapper id="about" className="relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-80 pointer-events-none"
        style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}
      >
        <Particles
          particleColors={['#8b5cf6', '#3b82f6']}
          particleCount={150}
          particleSpread={8}
          speed={0.08}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <div className="relative z-10">
      <Reveal>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <GradientText>About Me</GradientText>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about building impactful software
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Bio */}
        <div className="space-y-6">
          <Reveal delay={0.1}>
            <p className="text-foreground/90 leading-relaxed text-lg text-justify">
              {personalInfo.bio}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{personalInfo.location}</span>
            </div>
          </Reveal>
        </div>

        {/* What I Build Grid */}
        <div ref={ref} className="space-y-6">
          <Reveal delay={0.1}>
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-1">What I Build</h3>
              <p className="text-sm text-muted-foreground">Technologies and domains I enjoy building solutions in.</p>
            </div>
          </Reveal>
          
          <div className="w-full max-w-full overflow-hidden relative">
            <DriftWall items={highlights} className="w-full" />
          </div>
        </div>
      </div>

      {/* Education Cards */}
      <div className="mt-24 md:mt-32">
        <Reveal>
          <h3 className="text-3xl font-bold mb-10 md:mb-12 text-center">
            My <GradientText>Education</GradientText>
          </h3>
        </Reveal>
        
        <div className={cn(
          isMobile
            ? "flex flex-col gap-5"
            : "flex overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 gap-6 snap-x snap-mandatory hide-scrollbar",
          !isMobile && education.length <= 2 ? "md:justify-center" : ""
        )}>
          {education.map((item, i) => (
            <Reveal
              key={i}
              delay={i * 0.15}
              className={cn(isMobile ? 'w-full' : 'snap-center shrink-0 w-[90vw] md:w-[600px]')}
            >
              <GlowCard className="h-full overflow-hidden">
                <div className={cn(
                  'h-full',
                  isMobile
                    ? 'p-5 flex flex-col gap-5'
                    : 'p-8 flex flex-col md:flex-row gap-8 items-start md:items-center'
                )}>
                  
                  <div className={cn(
                    'shrink-0 flex items-center justify-center bg-zinc-900 dark:bg-zinc-900/80 rounded-2xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]',
                    isMobile ? 'w-20 h-20 p-3' : 'w-24 h-24 md:w-32 md:h-32 p-4'
                  )}>
                    {item.logo ? (
                      <div className="relative w-full h-full">
                        <Image 
                          src={item.logo}
                          alt={item.institution}
                          fill
                          sizes="(max-width: 768px) 80px, 128px"
                          className="object-contain drop-shadow-md filter brightness-110 contrast-125"
                        />
                      </div>
                    ) : (
                      <GraduationCap className={cn('text-primary', isMobile ? 'w-10 h-10' : 'w-12 h-12')} />
                    )}
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="space-y-1">
                      <h4 className={cn('font-bold text-foreground leading-tight', isMobile ? 'text-lg' : 'text-xl')}>
                        {item.institution}
                      </h4>
                      <p className={cn('text-muted-foreground leading-snug', isMobile ? 'text-sm' : 'text-xl')}>
                        {item.degree}
                      </p>
                    </div>

                    <div className={cn('flex flex-col gap-1 font-semibold mt-2', isMobile ? 'text-xs tracking-[0.18em] uppercase' : 'text-sm')}>
                      <span className="text-foreground">{item.grade}</span>
                      <span className="text-foreground">{item.duration}</span>
                    </div>

                    <p className={cn('text-muted-foreground leading-relaxed', isMobile ? 'text-sm mt-3' : 'text-sm mt-4')}>
                      {item.description}
                    </p>
                  </div>

                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
      </div>
    </SectionWrapper>
  );
}
