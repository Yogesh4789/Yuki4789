import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  return (
    <div id={id}>
      <section className={cn("w-full max-w-7xl mx-auto px-6 py-16 md:py-24", className)}>
        {children}
      </section>
    </div>
  );
}
