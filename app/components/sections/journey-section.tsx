'use client';

import { getExperience } from '@/app/content';
import { useTranslations } from '@/app/providers/locale-provider';
import { useReveal } from '@/app/hooks/use-reveal';
import { Reveal } from '../ui/reveal';
import { SectionLabel } from '../ui/section-label';

type Experience = ReturnType<typeof getExperience>[number];

function TimelineItem({ experience, index }: { experience: Experience; index: number }) {
  const ref = useReveal<HTMLElement>();

  return (
    <article ref={ref} className="timeline-item reveal">
      <span className="timeline-date">{experience.date}</span>
      <div className="timeline-content">
        <h3>{experience.role}</h3>
        <p className="company">{experience.company}</p>
        <p>{experience.description}</p>
        <span className="timeline-stack">{experience.stack}</span>
      </div>
      <span className="timeline-number">/ {String(index + 1).padStart(2, '0')}</span>
    </article>
  );
}

export function JourneySection() {
  const { locale, translations: t } = useTranslations();
  const experience = getExperience(locale);

  return (
    <section className="journey wrap section" id="journey">
      <Reveal className="section-heading">
        <div>
          <SectionLabel>{t.journeyLabel}</SectionLabel>
          <h2>{t.journeyTitle}</h2>
        </div>
        <span className="journey-years">2019 — 2026</span>
      </Reveal>
      <div className="timeline-label">
        <span>{t.experienceLabel}</span>
        <span>01 — {String(experience.length).padStart(2, '0')}</span>
      </div>
      <div className="timeline">
        {experience.map((entry, index) => <TimelineItem key={entry.id} experience={entry} index={index} />)}
      </div>
      <Reveal className="education">
        <span className="timeline-date">2022 — 2025</span>
        <div>
          <span className="education-label">{t.educationLabel}</span>
          <h3>{t.degree}</h3>
          <p>{t.school}</p>
        </div>
        <span className="timeline-number">↗</span>
      </Reveal>
    </section>
  );
}
