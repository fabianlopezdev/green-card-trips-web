/**
 * Server-side i18n utility for Astro build-time translation loading
 * This replaces client-side i18next for static site generation
 */

import en from '@i18n/locales/en.json';
import es from '@i18n/locales/es.json';
import tl from '@i18n/locales/tl.json';
import vi from '@i18n/locales/vi.json';
import zhCN from '@i18n/locales/zh-CN.json';

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

// Legal page slug mappings for each language
export const legalPageSlugs = {
  'privacy-policy': {
    en: 'privacy-policy',
    es: 'politica-de-privacidad',
    tl: 'patakaran-sa-privacy',
    vi: 'chinh-sach-bao-mat',
    'zh-cn': 'yinsi-zhengce',
  },
  'terms-and-conditions': {
    en: 'terms-and-conditions',
    es: 'terminos-y-condiciones',
    tl: 'mga-tuntunin-at-kundisyon',
    vi: 'dieu-khoan-va-dieu-kien',
    'zh-cn': 'tiaokuan-he-tiaozheng',
  },
  'cookies-policy': {
    en: 'cookies-policy',
    es: 'politica-de-cookies',
    tl: 'patakaran-sa-cookies',
    vi: 'chinh-sach-cookies',
    'zh-cn': 'cookies-zhengce',
  },
} as const;

type LegalPageKey = keyof typeof legalPageSlugs;

export function getLegalPageSlug(pageKey: LegalPageKey, lang: string): string {
  return legalPageSlugs[pageKey][lang as keyof typeof legalPageSlugs[typeof pageKey]] || legalPageSlugs[pageKey].en;
}

export function getLegalPageKeyFromSlug(slug: string, lang: string): LegalPageKey | null {
  for (const [key, slugs] of Object.entries(legalPageSlugs)) {
    if (slugs[lang as keyof typeof slugs] === slug) {
      return key as LegalPageKey;
    }
  }
  return null;
}

export type { TranslationObject, LegalPageKey };
