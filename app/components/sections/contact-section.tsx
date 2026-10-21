'use client';

import { site } from '@/app/lib/site';
import { useTranslations } from '@/app/providers/locale-provider';
import { Arrow } from '../ui/arrow';
import { Reveal } from '../ui/reveal';
import { SectionLabel } from '../ui/section-label';

export function ContactSection() {
  const { translations: t } = useTranslations();

  return (
    <section className="contact-band" id="contact">
      <Reveal className="wrap contact-inner">
        <div>
          <SectionLabel>{t.contactLabel}</SectionLabel>
          <h2>
            {t.contactTitle.map((line, index) => (
              <span className={index === 2 ? 'red' : ''} key={line}>{line}</span>
            ))}
          </h2>
        </div>
        <div className="contact-copy">
          <p>{t.contactText}</p>
          <div className="contact-links">
            <a className="button" href={site.links.email}>{t.email}<Arrow /></a>
            {(['whatsapp', 'linkedin', 'github'] as const).map(channel => (
              <a className="button outline" key={channel} href={site.links[channel]} target="_blank" rel="noopener noreferrer">
                {t.contactLinks[channel]}<Arrow />
              </a>
            ))}
          </div>
          <a className="contact-email" href={site.links.email}>{site.email}</a>
        </div>
        <div className="contact-shape" aria-hidden="true" />
      </Reveal>
    </section>
  );
}
