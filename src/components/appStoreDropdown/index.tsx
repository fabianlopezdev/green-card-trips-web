import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react';
import { ConfigContext } from '../../utils/configContext';

export default function AppStoreDropdown() {
  const { t } = useTranslation();
  const config = useContext(ConfigContext);
  const [isOpen, setIsOpen] = useState(false);

  if (!config) return null;

  const { appStoreLink, googlePlayLink } = config;

  // Don't show dropdown if neither link is available
  if (!appStoreLink && !googlePlayLink) return null;

  const stores = [
    ...(appStoreLink ? [{ name: 'iOS', link: appStoreLink, icon: '/stores/app-store.svg' }] : []),
    ...(googlePlayLink ? [{ name: 'Android', link: googlePlayLink, icon: '/stores/google-play.svg' }] : []),
  ];

  return (
    <div className="dropdown dropdown-end">
      <button
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        className="btn btn-primary btn-outline nav:py-4 rounded-full nav:hover:!text-white whitespace-nowrap max-nav:btn-ghost max-nav:btn-sm max-nav:p-0 max-nav:border-0 max-nav:bg-transparent max-nav:min-h-0 max-nav:h-auto max-nav:hover:!bg-transparent max-nav:hover:!border-0"
        aria-label="Get the app"
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
        <span className="hidden nav:inline">{t("nav.getApp")}</span>
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
                aria-label={store.name === 'iOS' ? t("nav.downloadAppStore") : t("nav.downloadPlayStore")}
              >
                <img src={store.icon} alt="" className="h-10" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
