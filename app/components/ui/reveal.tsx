'use client';

import type { ReactNode } from 'react';
import { useReveal } from '@/app/hooks/use-reveal';

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useReveal<HTMLDivElement>();

  return <div ref={ref} className={`${className} reveal`.trim()}>{children}</div>;
}
