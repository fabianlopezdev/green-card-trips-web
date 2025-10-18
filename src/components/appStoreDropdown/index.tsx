import { useState } from 'react';
import type { TemplateConfig } from '../../utils/configType';

interface Props {
  config: TemplateConfig;
  getAppLabel: string;
  downloadAppStoreLabel: string;
  downloadPlayStoreLabel: string;
  currentLang?: string;
}

export default function AppStoreDropdown({ config, getAppLabel, downloadAppStoreLabel, downloadPlayStoreLabel, currentLang = "en" }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const { appStoreLink, googlePlayLink } = config;

  // Map browser language to supported language folders
  // Supported: en, es, tl, vi, zh-CN
  const getLanguageFolder = (lang: string) => {
    const supportedLanguages = ['en', 'es', 'tl', 'vi', 'zh-CN'];
    // If exact match, use it
    if (supportedLanguages.includes(lang)) return lang;
    // Otherwise try base language (e.g., en-US -> en)
    const baseLang = lang.split('-')[0];
    if (supportedLanguages.includes(baseLang)) return baseLang;
    // Fallback to English
    return 'en';
  };
  const languageFolder = getLanguageFolder(currentLang);

  // Don't show dropdown if neither link is available
  if (!appStoreLink && !googlePlayLink) return null;

  const stores = [
    ...(appStoreLink ? [{ name: 'iOS', link: appStoreLink, icon: `/stores/${languageFolder}/app-store.svg`, label: downloadAppStoreLabel }] : []),
    ...(googlePlayLink ? [{ name: 'Android', link: googlePlayLink, icon: `/stores/${languageFolder}/google-play.svg`, label: downloadPlayStoreLabel }] : []),
  ];

  return (
    <div className="dropdown dropdown-end">
      <button
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        className="btn btn-primary btn-outline nav:py-4 rounded-full nav:hover:!text-white whitespace-nowrap max-nav:btn-ghost max-nav:btn-sm max-nav:p-0 max-nav:border-0 max-nav:bg-transparent max-nav:min-h-0 max-nav:h-auto max-nav:hover:!bg-transparent max-nav:hover:!border-0"
        aria-label={getAppLabel}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls="app-store-menu"
      >
        {/* Download icon for mobile */}
        <svg
          className="w-6 h-6 text-primary nav:hidden"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        {/* Text for desktop */}
        <span className="hidden nav:inline">{getAppLabel}</span>
      </button>

      {isOpen && (
        <ul
          id="app-store-menu"
          role="menu"
          tabIndex={0}
          className="dropdown-content menu mt-2 rounded-lg bg-base-100 p-2 shadow-md w-48 border border-base-300"
        >
          {stores.map((store) => (
            <li key={store.name} role="none">
              <a
                role="menuitem"
                href={store.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center px-3 py-2 rounded-lg hover:bg-base-200 transition-colors"
                aria-label={store.label}
              >
                <img src={store.icon} width={112} height={40} loading="lazy" alt="" className="h-10" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
