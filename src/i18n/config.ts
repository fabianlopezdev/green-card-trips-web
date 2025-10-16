import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import es from './locales/es.json';
import tl from './locales/tl.json';
import vi from './locales/vi.json';
import zhCN from './locales/zh-CN.json';

// Bundle all languages inline for immediate availability
const resources = {
  en: { translation: en },
  es: { translation: es },
  tl: { translation: tl },
  vi: { translation: vi },
  'zh-CN': { translation: zhCN },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'es', 'tl', 'vi', 'zh-CN'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
