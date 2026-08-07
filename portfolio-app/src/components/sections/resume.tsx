'use client';

import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { Reveal } from '@/components/animations/reveal';
import { GradientText } from '@/components/animations/gradient-text';
import { GradientBorder } from '@/components/effects/gradient-border';
import { MagneticButton } from '@/components/effects/magnetic-button';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/content/data';

export function Resume() {
  return (
    <SectionWrapper id="resume">
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <GradientText>Resume</GradientText>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download my resume to learn more about my experience
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="max-w-2xl mx-auto relative">
          {/* Floating decorations */}
          <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl" />

          <GradientBorder borderWidth={1} rounded="2xl">
            <div className="bg-card/80 backdrop-blur-xl rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
              {/* Subtle grid bg */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }} />

              <div className="relative z-10 space-y-6">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-border flex items-center justify-center">
                    <FileText className="h-10 w-10 text-primary" />
                  </div>
                </motion.div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {personalInfo.name} — Resume
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    PDF • Last updated: August 2026
                  </p>
                </div>

                <MagneticButton>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/25 border-0 px-8"
                    asChild
                  >
                    <a href={personalInfo.resumeUrl} download>
                      <Download className="mr-2 h-5 w-5" />
                      Download Resume
                    </a>
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </GradientBorder>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
