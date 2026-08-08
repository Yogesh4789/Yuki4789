'use client';

import { motion } from 'framer-motion';
import { Download, Mail, ChevronDown, User, Briefcase, MessageCircle, Code2, ExternalLink } from 'lucide-react';
import { Github, Linkedin, Twitter, Instagram } from '@/components/icons';
import { BlurText } from '@/components/animations/blur-text';
import { TypingEffect } from '@/components/animations/typing-effect';
import { Reveal } from '@/components/animations/reveal';
import { AuroraBackground } from '@/components/effects/aurora-background';
import { Particles } from '@/components/effects/particles';
import { MagneticButton } from '@/components/effects/magnetic-button';
import { GradientBorder } from '@/components/effects/gradient-border';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { personalInfo, typingStrings } from '@/content/data';
import { SOCIAL_LINKS } from '@/constants';
import { useMediaQuery } from '@/hooks/use-media-query';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github, linkedin: Linkedin, twitter: Twitter, instagram: Instagram, mail: Mail,
  code2: Code2, leetcode: Code2, hackerrank: Code2, medium: ExternalLink, devto: ExternalLink,
};

export function Hero() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AuroraBackground className="absolute inset-0" />
      <Particles className={isMobile ? 'absolute inset-0 z-[1] opacity-80' : 'absolute inset-0 z-[1]'} particleCount={isMobile ? 8 : 40} />

      <div className="relative z-10 container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32 pb-16 lg:py-20 flex flex-col justify-start md:justify-center min-h-[calc(100vh-4rem)]">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <Reveal>
              <div className="inline-flex mb-2">
                <Badge variant="outline" className="px-4 py-1.5 text-sm backdrop-blur-sm bg-emerald-500/10 border-emerald-500/30 text-emerald-400">
                  <span className="relative mr-2 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Available for opportunities
                </Badge>
              </div>
            </Reveal>

            <BlurText text={personalInfo.name} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-display justify-center lg:justify-start" />

            <div className="h-10">
              <TypingEffect strings={typingStrings} className="text-xl md:text-2xl text-primary font-medium" />
            </div>

            {/* Profile Picture (Mobile Only - positioned between title and subtitle) */}
            <div className="flex md:hidden justify-center py-4">
              <Reveal delay={0.3}>
                <div className="relative">
                  <GradientBorder rounded="rounded-full" borderWidth={2}>
                    <div className="w-56 h-56 rounded-full overflow-hidden bg-muted/50 backdrop-blur-sm flex items-center justify-center">
                      {personalInfo.profileImage && !personalInfo.profileImage.includes('<<') ? (
                        <img 
                          src={personalInfo.profileImage} 
                          alt={personalInfo.name} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-muted-foreground text-center p-4">
                          <User className="h-16 w-16 mx-auto mb-3 opacity-40" />
                        </div>
                      )}
                    </div>
                  </GradientBorder>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.4}>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {personalInfo.subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href={personalInfo.resumeUrl} download>
                  <Button size="lg" className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/25 border-0 rounded-full px-8">
                    <Download className="mr-2 h-4 w-4" /> Resume
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="border-border hover:border-primary/50 hover:bg-primary/5 backdrop-blur-sm rounded-full px-8"
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) {
                      const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - 100;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}>
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.8}>
              <div className="flex gap-3 justify-center lg:justify-start">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = iconMap[link.icon] || ExternalLink;
                  return (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                      className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                      aria-label={link.name}>
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* Profile Picture (Desktop Only) */}
          <Reveal direction="right" delay={0.3}>
            <div className="relative hidden md:block">
              <GradientBorder rounded="rounded-full" borderWidth={2}>
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-muted/50 backdrop-blur-sm flex items-center justify-center">
                  {personalInfo.profileImage && !personalInfo.profileImage.includes('<<') ? (
                    <img 
                      src={personalInfo.profileImage} 
                      alt={personalInfo.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-muted-foreground text-center p-4">
                      <User className="h-16 w-16 lg:h-20 lg:w-20 mx-auto mb-3 opacity-40" />
                      <span className="text-xs font-mono opacity-60">{'<<UPLOAD_PROFILE_IMAGE>>'}</span>
                    </div>
                  )}
                </div>
              </GradientBorder>
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-violet-500/20 blur-sm animate-float" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-indigo-500/20 blur-md animate-float" style={{ animationDelay: '2s' }} />
              <div className="absolute top-1/2 -right-8 w-6 h-6 rounded-full bg-blue-500/20 blur-sm animate-float" style={{ animationDelay: '4s' }} />
            </div>
          </Reveal>
        </div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown className="h-6 w-6 text-muted-foreground/50" />
        </motion.div>
      </div>
    </section>
  );
}
