'use client';

import { Award, Calendar, ExternalLink, Download } from 'lucide-react';
import { Reveal } from '@/components/animations/reveal';
import { GradientText } from '@/components/animations/gradient-text';
import { GlowCard } from '@/components/effects/glow-card';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { certifications } from '@/content/data';

export function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <GradientText>Certifications</GradientText>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and credentials
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <Reveal key={cert.id} delay={index * 0.1}>
            <GlowCard className="h-full">
              <div className="p-6 space-y-4">
                {/* Certificate Image or Thumbnail */}
                <div className="aspect-[4/3] rounded-xl bg-white border border-border flex items-center justify-center overflow-hidden relative">
                  {cert.image && cert.image.endsWith('.pdf') ? (
                    <div className="text-center text-muted-foreground">
                      <Award className="h-12 w-12 mx-auto mb-2 opacity-40 text-primary" />
                      <span className="text-xs font-mono opacity-80">PDF Document</span>
                    </div>
                  ) : cert.image && !cert.image.includes('<<') ? (
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center text-muted-foreground">
                      <Award className="h-12 w-12 mx-auto mb-2 opacity-40" />
                      <span className="text-xs font-mono opacity-60">{'<<UPLOAD_CERTIFICATE>>'}</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div>
                  <h3 className="font-semibold text-lg text-foreground line-clamp-2">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{cert.issuer}</p>
                </div>

                {cert.issueDate && !cert.issueDate.includes('<<') && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.issueDate}</span>
                  </div>
                )}

                {cert.credentialId && !cert.credentialId.includes('<<') && (
                  <p className="text-xs font-mono text-muted-foreground/70">
                    ID: {cert.credentialId}
                  </p>
                )}

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  {cert.credentialUrl && !cert.credentialUrl.includes('<<') && (
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        Verify
                      </a>
                    </Button>
                  )}
                  {cert.image && !cert.image.includes('<<') && (
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={cert.image} download target="_blank" rel="noopener noreferrer">
                        <Download className="mr-1.5 h-3.5 w-3.5" />
                        View / Save
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
