'use client';

import { useEffect } from 'react';
import { localeConfig, type Locale, type Translations } from '@/app/i18n';

export function useDocumentLocale(locale: Locale, metadata: Translations['metadata']) {
  useEffect(() => {
    document.documentElement.lang = localeConfig[locale].htmlLang;
    document.title = metadata.title;

    const tags = [
      ['name', 'description', metadata.description],
      ['property', 'og:title', metadata.ogTitle],
      ['property', 'og:description', metadata.ogDescription],
      ['property', 'og:locale', localeConfig[locale].openGraph],
    ];

    for (const [attribute, name, value] of tags) {
      document.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`)
        ?.setAttribute('content', value);
    }
  }, [locale, metadata]);
}
