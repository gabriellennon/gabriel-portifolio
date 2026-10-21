'use client';

import Image from 'next/image';
import { site } from '@/app/lib/site';
import { useTranslations } from '@/app/providers/locale-provider';
import { Arrow } from '../ui/arrow';

export function HeroSection() {
  const { translations: t } = useTranslations();

  return (
    <section className="hero wrap">
      <div className="hero-copy">
        <p className="eyebrow hero-kicker">{t.kicker}</p>
        <h1>
          {t.hero.map((line, index) => (
            <span key={line} className={index === 2 ? 'underline-accent' : ''}>{line}</span>
          ))}
        </h1>
        <p className="hero-description">{t.intro}</p>
        <div className="hero-buttons">
          <a className="button" href="#work">{t.work}<Arrow /></a>
          <a className="button outline" href={site.links.resume} download>
            {t.resume}<span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <div className="hero-art">
        <p className="location">{t.location}<br /><span>15°47′ S　47°53′ W</span></p>
        <div className="portrait-backdrop" />
        <div className="portrait-frame">
          <Image src={site.portrait} alt={t.portraitAlt} width={800} height={800} priority className="portrait" />
        </div>
        <span className="portrait-index">{t.portraitCaption}</span>
        <div className="availability"><span />{t.available}</div>
        <span className="art-cross" aria-hidden="true">+</span>
      </div>
      <div className="hero-bottom">
        <span>{t.heroMotto}</span>
        <a href="#about">{t.scroll}<span>↓</span></a>
      </div>
    </section>
  );
}
