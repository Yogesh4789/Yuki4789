'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Briefcase, MessageCircle, Code2, ExternalLink, Loader2 } from 'lucide-react';
import { Github, Linkedin, Twitter, Instagram } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/animations/reveal';
import { GradientText } from '@/components/animations/gradient-text';
import { GlowCard } from '@/components/effects/glow-card';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { personalInfo } from '@/content/data';
import { SOCIAL_LINKS } from '@/constants';
import { useMediaQuery } from '@/hooks/use-media-query';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github, linkedin: Linkedin, twitter: Twitter, instagram: Instagram, mail: Mail,
  code2: Code2, leetcode: Code2, hackerrank: Code2, medium: ExternalLink, devto: ExternalLink,
};

import Hyperspeed from '@/components/backgrounds/Hyperspeed';

export function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const inputClasses = 'w-full px-4 py-3 rounded-xl bg-muted/30 border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all backdrop-blur-sm';

  return (
    <SectionWrapper id="contact" className="relative overflow-hidden">
      <div 
        className={cn('absolute inset-0 z-0 pointer-events-none', isMobile ? 'opacity-20' : 'opacity-100')}
        style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}
      >
        {!isMobile && <Hyperspeed effectOptions={{ onSpeedUp: () => { } }} />}
      </div>
      <div className="relative z-10">
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <GradientText>Get In Touch</GradientText>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let&apos;s talk!
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="lg:col-span-3">
          <Reveal delay={0.1}>
            <GlowCard>
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                    <input id="name" {...register('name')} placeholder="Yuki" className={inputClasses} />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                    <input id="email" type="email" {...register('email')} placeholder="yuki@example.com" className={inputClasses} />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                  <input id="subject" {...register('subject')} placeholder="Project Collaboration" className={inputClasses} />
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <textarea id="message" {...register('message')} placeholder="Tell me about your project..." rows={5} className={cn(inputClasses, 'resize-none')} />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-0"
                >
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="mr-2 h-4 w-4" /> Send Message</>
                  )}
                </Button>

                <AnimatePresence>
                  {submitStatus !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={cn(
                        'flex items-center gap-2 p-3 rounded-xl text-sm',
                        submitStatus === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/10 text-red-400 border border-red-500/30'
                      )}
                    >
                      {submitStatus === 'success' ? (
                        <><CheckCircle className="h-4 w-4" /> Message sent successfully!</>
                      ) : (
                        <><AlertCircle className="h-4 w-4" /> Failed to send. Please try again.</>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </GlowCard>
          </Reveal>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          <Reveal delay={0.2}>
            <GlowCard>
              <div className="p-6 space-y-5">
                <h3 className="font-semibold text-foreground text-lg">Contact Info</h3>
                <div className="space-y-4">
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm">{personalInfo.email}</span>
                  </a>
                  <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm">{personalInfo.phone}</span>
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </GlowCard>
          </Reveal>

          <Reveal delay={0.3}>
            <GlowCard>
              <div className="p-6">
                <h3 className="font-semibold text-foreground text-lg mb-4">Connect</h3>
                <div className="grid grid-cols-2 gap-2">
                  {SOCIAL_LINKS.map((link) => {
                    const Icon = socialIconMap[link.icon] || ExternalLink;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2.5 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-sm text-muted-foreground hover:text-foreground"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </GlowCard>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="inline-flex">
              <Badge variant="outline" className="px-4 py-1.5 bg-emerald-500/10 border-emerald-500/30 text-emerald-400">
                <span className="relative mr-2 flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for work
              </Badge>
            </div>
          </Reveal>
        </div>
      </div>
      </div>
    </SectionWrapper>
  );
}
