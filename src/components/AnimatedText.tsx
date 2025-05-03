import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface AnimatedTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export function AnimatedText({ text, speed = 50, delay = 0, className = '' }: AnimatedTextProps) {
  const displayText = useTypewriter(text, speed, delay);
  
  return <span className={className}>{displayText}</span>;
}