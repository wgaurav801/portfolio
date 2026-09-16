'use client';

import { useCallback, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

/**
 * Reads the theme that ThemeScript already applied to <html>, and persists
 * any change. The DOM attribute is the source of truth, not React state —
 * that keeps the pre-hydration script and the toggle from disagreeing.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'light' ? 'light' : 'dark');
  }, []);

  const toggle = useCallback(() => {
    setTheme((previous) => {
      const next: Theme = previous === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try {
        localStorage.setItem('theme', next);
      } catch {
        // Storage can be unavailable (private mode, blocked cookies).
        // The theme still applies for this page view.
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}
