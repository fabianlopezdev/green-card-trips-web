/**
 * Server-side i18n utility for Astro build-time translation loading
 * This replaces client-side i18next for static site generation
 */

import en from '../i18n/locales/en.json';
import es from '../i18n/locales/es.json';
import tl from '../i18n/locales/tl.json';
import vi from '../i18n/locales/vi.json';
import zhCN from '../i18n/locales/zh-CN.json';

type TranslationObject = typeof en;

const translations: Record<string, TranslationObject> = {
  en,
  es,
  tl,
  vi,
  'zh-cn': zhCN,
};

export function getTranslations(lang: string): TranslationObject {
  return translations[lang] || translations['en'];
}

export function getSupportedLanguages(): string[] {
  return ['en', 'es', 'tl', 'vi', 'zh-cn'];
}

export type { TranslationObject };
