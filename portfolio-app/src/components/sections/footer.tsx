'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Heart, Briefcase, MessageCircle, Mail, Code2, ExternalLink } from 'lucide-react';
import { Github, Linkedin, Twitter, Instagram } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/animations/reveal';
import { GradientText } from '@/components/animations/gradient-text';
import { personalInfo } from '@/content/data';
import { NAV_ITEMS, SOCIAL_LINKS } from '@/constants';

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github, linkedin: Linkedin, twitter: Twitter, instagram: Instagram, mail: Mail,
  code2: Code2, leetcode: Code2, hackerrank: Code2, medium: ExternalLink, devto: ExternalLink,
};

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="relative border-t border-border bg-card/50">
      {/* Gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1 font-medium">
            Let&apos;s build something amazing together.
          </p>
        </div>
      </div>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-primary/90 text-white shadow-lg shadow-primary/25 hover:bg-primary transition-colors z-40"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
