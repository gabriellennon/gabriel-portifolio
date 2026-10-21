import en from './translations/en.json';
import pt from './translations/pt.json';
import es from './translations/es.json';

export const locales = ['en', 'pt', 'es'] as const;
export type Locale = (typeof locales)[number];
export type Translations = typeof en;
export const defaultLocale: Locale = 'en';
// A new key avoids inheriting the previous implementation's automatically saved Portuguese default.
export const localeStorageKey = 'gl-language';
export const localeConfig = {
  en: { htmlLang: 'en', openGraph: 'en_US' },
  pt: { htmlLang: 'pt-BR', openGraph: 'pt_BR' },
  es: { htmlLang: 'es', openGraph: 'es_ES' },
} as const;
export const content: Record<Locale, Translations> = { en, pt, es };
export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && locales.some(locale => locale === value);
}
