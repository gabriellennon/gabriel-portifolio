'use client';

import { createContext, useContext, useEffect, type ReactNode } from 'react';
import { content, defaultLocale, isLocale, localeStorageKey, type Locale, type Translations } from '@/app/i18n';
import { useDocumentLocale } from '@/app/hooks/use-document-locale';
import { usePersistedPreference } from '@/app/hooks/use-persisted-preference';

type LocaleContextValue = {
  locale: Locale;
  translations: Translations;
  changeLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, changeLocale] = usePersistedPreference(localeStorageKey, defaultLocale, isLocale);
  const translations = content[locale];

  useDocumentLocale(locale, translations.metadata);

  useEffect(() => {
    document.documentElement.classList.add('motion-ready');
    return () => document.documentElement.classList.remove('motion-ready');
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, translations, changeLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error('useTranslations must be used within LocaleProvider.');
  return context;
}
