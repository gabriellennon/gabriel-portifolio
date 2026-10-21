'use client';

import { useEffect, useRef } from 'react';

/** Observe each mounted element, including project cards added after filtering. */
export function useReveal<Element extends HTMLElement>() {
  const ref = useRef<Element>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries.some(entry => entry.isIntersecting)) {
        element.classList.add('is-visible');
        observer.disconnect();
      }
    }, { threshold: 0.08 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}
