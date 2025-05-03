import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export function FadeIn({ 
  children, 
  className = '', 
  direction = 'up',
  delay = 0 
}: FadeInProps) {
  const [ref, isVisible] = useIntersectionObserver();

  const getTransformStyle = () => {
    switch (direction) {
      case 'up':
        return 'translateY(20px)';
      case 'down':
        return 'translateY(-20px)';
      case 'left':
        return 'translateX(20px)';
      case 'right':
        return 'translateX(-20px)';
      default:
        return 'translateY(0)';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getTransformStyle(),
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}