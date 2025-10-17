/**
 * Legal page slug mappings for client-side use
 * This is duplicated from serverI18n.ts for use in browser
 */

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

export type LegalPageKey = keyof typeof legalPageSlugs;

/**
 * Get the legal page key from a slug in a specific language
 */
export function getLegalPageKeyFromSlug(slug: string, lang: string): LegalPageKey | null {
  for (const [key, slugs] of Object.entries(legalPageSlugs)) {
    if (slugs[lang as keyof typeof slugs] === slug) {
      return key as LegalPageKey;
    }
  }
  return null;
}

/**
 * Get the translated slug for a legal page in a target language
 */
export function getLegalPageSlug(pageKey: LegalPageKey, lang: string): string {
  return legalPageSlugs[pageKey][lang as keyof typeof legalPageSlugs[typeof pageKey]] || legalPageSlugs[pageKey].en;
}
