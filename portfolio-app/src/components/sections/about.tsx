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

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <SectionWrapper id="about">
      <Reveal>
        <div className="text-center mb-16">
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
      <div className="mt-32">
        <Reveal>
          <h3 className="text-3xl font-bold mb-12 text-center">
            My <GradientText>Education</GradientText>
          </h3>
        </Reveal>
        
        <div className={cn(
          "flex overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 gap-6 snap-x snap-mandatory hide-scrollbar",
          education.length <= 2 ? "md:justify-center" : ""
        )}>
          {education.map((item, i) => (
            <Reveal key={i} delay={i * 0.15} className="snap-center shrink-0 w-[90vw] md:w-[600px]">
              <GlowCard className="h-full">
                <div className="p-8 flex flex-col md:flex-row gap-8 items-start md:items-center h-full">
                  
                  {/* Logo Container styled like the uploaded N logo */}
                  <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 flex items-center justify-center p-4 bg-zinc-900 dark:bg-zinc-900/80 rounded-2xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                    {item.logo ? (
                      <div className="relative w-full h-full">
                        <Image 
                          src={item.logo}
                          alt={item.institution}
                          fill
                          sizes="(max-width: 768px) 96px, 128px"
                          className="object-contain drop-shadow-md filter brightness-110 contrast-125"
                        />
                      </div>
                    ) : (
                      <GraduationCap className="w-12 h-12 text-primary" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <h4 className="text-xl font-bold text-foreground leading-tight">
                      {item.degree} <span className="text-muted-foreground">@{item.institution}</span>
                    </h4>
                    
                    <div className="flex flex-col gap-1 text-sm font-semibold mt-2">
                      <span className="text-foreground">{item.grade}</span>
                      <span className="text-foreground">{item.duration}</span>
                    </div>

                    <p className="text-muted-foreground mt-4 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>

                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
