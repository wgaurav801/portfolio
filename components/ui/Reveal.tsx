'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Stagger in milliseconds. Keep under ~240ms total across a group. */
  delay?: number;
  as?: ElementType;
  className?: string;
}

/**
 * Scroll-reveal primitive.
 *
 * Deliberately starts in the *visible* state and only hides itself once the
 * effect has run. That ordering matters: the previous implementation set
 * `opacity: 0` in CSS, so if JavaScript failed or IntersectionObserver was
 * unavailable the entire page below the fold stayed invisible. Here, no JS
 * means no animation rather than no content.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!element || prefersReducedMotion || !('IntersectionObserver' in window)) {
      return;
    }

    // Only hide the content once we know we can reveal it again.
    setArmed(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const classes = [
    armed ? 'reveal' : undefined,
    armed && visible ? 'revealVisible' : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      ref={ref}
      className={classes || undefined}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
