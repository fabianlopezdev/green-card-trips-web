import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { getLegalPageKeyFromSlug, getLegalPageSlug } from '../../utils/legalPageSlugs';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'tl', name: 'Tagalog' },
  { code: 'vi', name: 'Tiếng Việt' },
  { code: 'zh-CN', name: '简体中文' },
];

interface LanguageSwitcherProps {
  variant?: 'desktop' | 'mobile';
}

export default function LanguageSwitcher({ variant = 'desktop' }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    // Get current path and language
    const currentPath = window.location.pathname;
    const currentLang = (i18n.language || 'en').toLowerCase();

    // Remove language prefix to get the path
    const pathWithoutLang = currentPath.replace(/^\/(es|tl|vi|zh-cn)(\/|$)/, '/');

    // Check if we're on a legal page by extracting the last segment
    const pathSegments = pathWithoutLang.split('/').filter(Boolean);
    const lastSegment = pathSegments[pathSegments.length - 1];

    // Try to identify if this is a legal page
    let translatedPath = pathWithoutLang;
    if (lastSegment) {
      const legalPageKey = getLegalPageKeyFromSlug(lastSegment, currentLang);
      if (legalPageKey) {
        // This is a legal page - translate the slug
        const targetLang = lng.toLowerCase();
        const translatedSlug = getLegalPageSlug(legalPageKey, targetLang);
        translatedPath = `/${translatedSlug}`;
      }
    }

    // Construct new URL
    let newPath;
    if (lng === 'en') {
      // English at root - no prefix
      newPath = translatedPath === '/' ? '/' : translatedPath;
    } else {
      // Other languages with prefix - convert to lowercase for URL
      const urlLang = lng.toLowerCase();
      const cleanPath = translatedPath === '/' ? '' : translatedPath;
      newPath = `/${urlLang}${cleanPath}`;
    }

    // Navigate to new URL
    window.location.href = newPath;
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Mobile variant using native details element
  if (variant === 'mobile') {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    return (
      <details
        className="w-full relative"
        onToggle={(e) => setIsDetailsOpen((e.target as HTMLDetailsElement).open)}
      >
        <summary className="w-full py-3 px-4 cursor-pointer list-none flex justify-center items-center text-lg" aria-label={t("nav.chooseLanguage")}>
          <span className="relative">
            {t('nav.language')}
            <svg
              className={`absolute left-full top-1/2 -translate-y-1/2 ml-1 w-4 h-4 transition-transform duration-300 ${isDetailsOpen ? 'rotate-180' : ''}`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <div className="absolute left-0 right-0 bg-base-100 flex flex-col gap-1 py-2 z-10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full py-2 text-center ${
                i18n.language === lang.code ? 'font-semibold' : ''
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      </details>
    );
  }

  // Desktop variant (original dropdown design)
  return (
    <div className="dropdown dropdown-end">
      <button
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        className="inline-flex items-center gap-x-1 rounded-lg px-1.5 py-1.5 text-sm font-medium transition duration-300 hover:bg-neutral-200 hover:text-primary dark:hover:bg-neutral-700 dark:hover:text-primary"
        aria-label="Change language"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls="language-menu"
      >
        {/* Globe Icon */}
        <svg
          className="w-4 h-4 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"></path>
        </svg>

        {/* Chevron Icon */}
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>

      {isOpen && (
        <ul
          id="language-menu"
          role="menu"
          tabIndex={0}
          className="dropdown-content menu mt-2 rounded-lg bg-base-100 p-2 shadow-md w-40 border border-base-300"
        >
          {languages.map((lang) => (
            <li key={lang.code} role="none">
              <button
                role="menuitem"
                onClick={() => changeLanguage(lang.code)}
                className={`text-sm px-3 py-2 rounded-lg hover:bg-base-200 transition-colors ${
                  i18n.language === lang.code ? 'font-semibold' : ''
                }`}
                aria-current={i18n.language === lang.code ? 'true' : undefined}
              >
                {lang.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
