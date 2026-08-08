'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);
  
  useEffect(() => {
    const isMobile = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

    if (isMobile) {
      setScrollDirection(null);
      return;
    }

    lastScrollYRef.current = window.pageYOffset;
    
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      if (tickingRef.current) {
        return;
      }

      tickingRef.current = true;

      requestAnimationFrame(() => {
        const lastScrollY = lastScrollYRef.current;
        const delta = scrollY - lastScrollY;
        const direction = delta > 0 ? 'down' : 'up';

        if (Math.abs(delta) > 10) {
          setScrollDirection((current) => (current === direction ? current : direction));
        }

        lastScrollYRef.current = scrollY > 0 ? scrollY : 0;
        tickingRef.current = false;
      });
    };
    
    window.addEventListener('scroll', updateScrollDirection, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, []);
  
  return scrollDirection;
}
