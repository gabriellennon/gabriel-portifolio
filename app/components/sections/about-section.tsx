'use client';

import { site } from '@/app/lib/site';
import { useTranslations } from '@/app/providers/locale-provider';
import { useReveal } from '@/app/hooks/use-reveal';
import { SectionLabel } from '../ui/section-label';

export function AboutSection() {
  const { translations: t } = useTranslations();
  const ref = useReveal<HTMLElement>();
  const stats = [
    { value: '150k+', label: t.downloads },
    { value: '3+', label: t.ifood },
    { value: '02', label: t.platforms },
  ];

  return (
    <section ref={ref} className="about wrap section reveal" id="about">
      <div className="about-copy">
        <SectionLabel>{t.aboutLabel}</SectionLabel>
        <h2 className="about-title">{t.aboutTitle}</h2>
        <p>{t.aboutText}</p>
        <p>{t.aboutMore}</p>
        <div className="about-signature">
          <span className="signature">{site.name}</span>
          <span>{t.signatureMotto}</span>
        </div>
      </div>
      <div className="about-stats">
        <div className="big-stat">6<span>+</span></div>
        <p className="stat-heading">{t.years}</p>
        {stats.map(stat => (
          <div className="stat-row" key={stat.label}><b>{stat.value}</b><span>{stat.label}</span></div>
        ))}
        <div className="focus-note">
          <span>{t.focusLabel}</span>
          <p>{t.focus}</p>
          <span className="asterisk" aria-hidden="true">✳</span>
        </div>
      </div>
    </section>
  );
}
