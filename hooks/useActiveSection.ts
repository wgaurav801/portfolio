'use client';

import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in view so the header can mark the
 * matching nav link as current.
 *
 * Uses a single IntersectionObserver across all sections rather than one per
 * section, and picks the entry closest to the top of the viewport so that
 * short sections don't lose to tall neighbours.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            visible.delete(entry.target.id);
          }
        }

        if (visible.size === 0) return;

        const topMost = [...visible.entries()].sort((a, b) => a[1] - b[1])[0];
        setActive(topMost[0]);
      },
      // Bias the detection band toward the upper half of the viewport.
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
