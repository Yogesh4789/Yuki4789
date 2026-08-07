'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className={cn("w-10 h-10 rounded-full glass", className)} />;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'relative flex items-center justify-center w-10 h-10 rounded-full glass transition-all hover:bg-white/10 active:scale-95 cursor-pointer z-50',
        className
      )}
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 transition-all absolute rotate-0 scale-100 dark:-rotate-90 dark:scale-0 text-amber-500" />
      <Moon className="h-5 w-5 transition-all absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100 text-violet-400" />
    </button>
  );
}
