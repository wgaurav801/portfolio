'use client';

import { useEffect, useRef } from 'react';

export function useScrollAnimation(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    // Observe the element and all its children with the animate class
    const animatedElements = element.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    // Also observe the element itself if it has the class
    if (element.classList.contains('animate-on-scroll')) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
}
