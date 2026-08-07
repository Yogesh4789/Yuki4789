'use client'

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypingEffectProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
}

export function TypingEffect({
  strings,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
  className,
  cursorClassName,
}: TypingEffectProps) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const currentString = strings[loopNum % strings.length];
    
    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      } else {
        timer = setTimeout(() => {
          setText(text.substring(0, text.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (text === currentString) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      } else {
        timer = setTimeout(() => {
          setText(currentString.substring(0, text.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, strings, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={cn(className)}>
      {text}
      <span className={cn("animate-pulse font-light", cursorClassName)}>|</span>
    </span>
  );
}
