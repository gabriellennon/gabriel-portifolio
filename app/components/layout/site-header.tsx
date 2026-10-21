'use client';

import { useState } from 'react';
import { locales } from '@/app/i18n';
import { sectionIds, site } from '@/app/lib/site';
import { useTranslations } from '@/app/providers/locale-provider';
import { useTheme } from '@/app/hooks/use-theme';
import { Arrow } from '../ui/arrow';

export function SiteHeader() {
  const { locale, translations: t, changeLocale } = useTranslations();
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main">{t.skip}</a>
      <header className="header wrap" id="top">
        <a href="#top" className="wordmark" aria-label={site.name}>
          GABRIEL LENNON<span>.</span>
        </a>
        <nav className={isMenuOpen ? 'nav is-open' : 'nav'} aria-label={t.navigation} id="site-navigation">
          {sectionIds.map(id => (
            <a key={id} href={`#${id}`} onClick={() => setIsMenuOpen(false)}>{t.nav[id]}</a>
          ))}
        </nav>
        <div className="header-actions">
          <div className="languages" role="group" aria-label={t.language}>
            {locales.map(language => (
              <button
                key={language}
                onClick={() => changeLocale(language)}
                aria-pressed={locale === language}
                aria-label={t.languageNames[language]}
              >
                {language.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="theme-toggle" aria-label={t.theme} aria-pressed={isDark} onClick={toggleTheme}>
            {isDark ? '☀' : '◐'}
          </button>
          <a className="button small header-cta" href="#contact">{t.talk} <Arrow /></a>
          <button
            className="menu-toggle"
            aria-label={isMenuOpen ? t.menuClose : t.menu}
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
            onClick={() => setIsMenuOpen(open => !open)}
          >
            {isMenuOpen ? '×' : '☰'}
          </button>
        </div>
      </header>
    </>
  );
}
