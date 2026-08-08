'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_ITEMS, SECTION_IDS } from '@/constants';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { useScrollDirection } from '@/hooks/use-scroll-direction';
import { useMounted } from '@/hooks/use-mounted';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMounted = useMounted();
  const scrollDirection = useScrollDirection();
  
  // Use scroll spy to detect active section. Use empty string for fallback.
  const activeSection = useScrollSpy(
    NAV_ITEMS.map((item) => item.href.substring(1)),
    100
  );

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      // The section itself has md:py-20 (80px) top padding.
      // The navbar is 72px tall (top-4 + h-14).
      // Setting navHeight to 0 means we scroll exactly to the top of the section's padding block.
      // The 80px padding perfectly clears the 72px navbar and leaves an 8px gap for the title!
      const navHeight = 0; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const navHidden = scrollDirection === 'down' && !isMobileMenuOpen;

  if (!isMounted) return null;

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: navHidden ? -100 : 0, 
          opacity: navHidden ? 0 : 1 
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-4 right-4 md:left-0 md:right-0 z-50 mx-auto max-w-3xl px-0 md:px-0 flex justify-end md:block"
      >
        <div className="hidden md:flex h-14 w-fit mx-auto items-center justify-center rounded-full border border-border bg-background/70 px-4 backdrop-blur-xl shadow-sm dark:shadow-none relative">
          
          {/* Centered Navigation Items */}
          <nav className="hidden md:flex items-center gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              const isContact = item.label === 'Contact';
              
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors text-center min-w-[80px]",
                    isContact 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full !text-white"
                      : isActive 
                        ? "text-foreground hover:text-foreground" 
                        : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && !isContact && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-full bg-primary/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-14 w-14 bg-background/70 backdrop-blur-xl border border-border shadow-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col items-center gap-6">
              {NAV_ITEMS.map((item, i) => {
                const isContact = item.label === 'Contact';
                return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "text-2xl font-bold tracking-tight hover:text-primary transition-colors",
                      isContact ? "bg-primary text-primary-foreground px-8 py-3 rounded-full mt-4 inline-block !text-white" : ""
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )})}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
