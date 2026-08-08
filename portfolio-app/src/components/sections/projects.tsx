'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ExternalLink, Star, FolderOpen, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/animations/reveal';
import { GradientText } from '@/components/animations/gradient-text';
import { GlowCard } from '@/components/effects/glow-card';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/content/data';
import type { ProjectCategory } from '@/types';
import { useMediaQuery } from '@/hooks/use-media-query';

const categories: { value: ProjectCategory; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'ai-ml', label: 'AI/ML' },
];

export function Projects() {
  const [active, setActive] = useState<ProjectCategory>('all');
  const [search, setSearch] = useState('');
  const isMobile = useMediaQuery('(max-width: 767px)');

  const filtered = projects.filter((p) => {
    const matchesCategory = active === 'all' || p.category === active;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <SectionWrapper id="projects" className="relative overflow-hidden">
      <div className="relative z-10">
        <Reveal>
          <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <GradientText>Featured Projects</GradientText>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion
          </p>
        </div>
      </Reveal>

      {/* Search & Filter */}
      <Reveal delay={0.1}>
        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-center">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted/30 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all backdrop-blur-sm"
            />
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="flex justify-center mb-10">
          <div className="flex gap-1 p-1 rounded-xl bg-muted/50 backdrop-blur-sm border border-border overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap',
                  active === cat.value ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {active === cat.value && (
                  <motion.div
                    layoutId="projectTab"
                    className="absolute inset-0 rounded-lg bg-background border border-border shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-full group relative rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col h-full">
                  {/* Image Area */}
                  <div className="relative aspect-video bg-muted/50 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
                      {project.videoUrl && !project.videoUrl.includes('<<') ? (
                        <video 
                          src={project.videoUrl} 
                          autoPlay={!isMobile} 
                          muted 
                          loop={!isMobile} 
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : project.image && !project.image.includes('<<') ? (
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center text-muted-foreground">
                          <FolderOpen className="h-10 w-10 mx-auto mb-2 opacity-30" />
                          <span className="text-xs font-mono opacity-50 break-words px-2">
                            {project.videoUrl && project.videoUrl.includes('<<') 
                              ? project.videoUrl.split('/').pop() 
                              : project.image.includes('<<') 
                                ? project.image.split('/').pop() 
                                : '<<UPLOAD_MEDIA>>'}
                          </span>
                        </div>
                      )}
                    </div>
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-3 right-3 z-10">
                        <Badge className="bg-amber-500/90 text-white border-0 text-xs">
                          <Star className="h-3 w-3 mr-1 fill-current" /> Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-semibold text-lg text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">+{project.technologies.length - 4}</Badge>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <Button size="sm" variant="outline" className="flex-1" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Code2 className="mr-1.5 h-3.5 w-3.5" /> Code
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-0" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
          <FolderOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground/30" />
          <p className="text-muted-foreground">No projects found matching your criteria</p>
        </motion.div>
      )}
      </div>
    </SectionWrapper>
  );
}
