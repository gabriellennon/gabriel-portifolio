'use client';

import { sectionIds, site } from '@/app/lib/site';
import { useTranslations } from '@/app/providers/locale-provider';

export function SiteFooter() {
  const { translations: t } = useTranslations();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <a href="#top" className="wordmark">GABRIEL LENNON<span>.</span></a>
            <p>{t.footer}</p>
            <p>{t.footerSpecialties}</p>
          </div>
          <div>
            <h3>{t.navigation}</h3>
            {sectionIds.map(id => <a key={id} href={`#${id}`}>{t.nav[id]}</a>)}
          </div>
          <div>
            <h3>{t.elsewhere}</h3>
            <a href={site.links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={site.links.resume} download>{t.resume} ↓</a>
          </div>
          <div>
            <h3>{t.nav.contact}</h3>
            <a href={site.links.email}>{site.email} ↗</a>
            <p>{t.location}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 {site.name}. {t.rights}</span>
          <a href="#top">{t.back} ↑</a>
        </div>
      </div>
    </footer>
  );
}
