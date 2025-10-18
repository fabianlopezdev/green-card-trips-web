import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import { getConsentMode, getCookie } from "./config";

// Import all locale files for cookie consent translations
import enLocale from "../../i18n/locales/en.json";
import esLocale from "../../i18n/locales/es.json";
import tlLocale from "../../i18n/locales/tl.json";
import viLocale from "../../i18n/locales/vi.json";
import zhCNLocale from "../../i18n/locales/zh-CN.json";

// Color-coded logging helpers for production debugging
const log = {
  success: (msg: string, ...args: any[]) => {
    console.log(`%c🟢 [Cookie Consent] ${msg}`, 'color: #10b981; font-weight: bold', ...args);
  },
  error: (msg: string, ...args: any[]) => {
    console.log(`%c🔴 [Cookie Consent] ${msg}`, 'color: #ef4444; font-weight: bold', ...args);
  },
  info: (msg: string, ...args: any[]) => {
    console.log(`%c🔵 [Cookie Consent] ${msg}`, 'color: #3b82f6; font-weight: bold', ...args);
  },
  warn: (msg: string, ...args: any[]) => {
    console.log(`%c🟡 [Cookie Consent] ${msg}`, 'color: #f59e0b; font-weight: bold', ...args);
  },
};

const getTimestamp = () => new Date().toISOString().split('T')[1].split('.')[0];

// Helper function to build cookie consent translations from i18n locale files
function buildCookieConsentTranslations() {
  const locales = {
    en: enLocale,
    es: esLocale,
    tl: tlLocale,
    vi: viLocale,
    'zh-CN': zhCNLocale,
  };

  const translations: any = {};

  for (const [lang, locale] of Object.entries(locales)) {
    const cc = (locale as any).cookieConsent;
    translations[lang] = {
      consentModal: {
        title: cc.title,
        description: cc.description,
        acceptAllBtn: cc.acceptAll,
        acceptNecessaryBtn: cc.acceptNecessary,
        showPreferencesBtn: cc.settings,
        footer: `
          <a href="/privacy-policy">${cc.privacyPolicy}</a>
          <a href="/cookies-policy">${cc.cookiePolicy}</a>
        `,
      },
      preferencesModal: {
        title: cc.preferences.title,
        acceptAllBtn: cc.acceptAll,
        acceptNecessaryBtn: cc.acceptNecessary,
        savePreferencesBtn: cc.preferences.save,
        closeIconLabel: cc.preferences.close,
        sections: [
          {
            title: cc.preferences.usage,
            description: cc.preferences.usageDesc,
          },
          {
            title: cc.preferences.necessary,
            description: cc.preferences.necessaryDesc,
            linkedCategory: "necessary",
          },
          {
            title: cc.preferences.analytics,
            description: cc.preferences.analyticsDesc,
            linkedCategory: "analytics",
          },
        ],
      },
    };
  }

  return translations;
}

interface Props {
  currentLang?: string;
}

export default function CookieConsentBanner({ currentLang = 'en' }: Props) {
  useEffect(() => {
    // Normalize language code: 'zh-cn' from URL -> 'zh-CN' for translations
    const normalizedLang = currentLang === 'zh-cn' ? 'zh-CN' : currentLang;

    // Get user's country from cookie set by edge function
    const countryCode = getCookie("user_country") || "UNKNOWN";
    const consentConfig = getConsentMode(countryCode);

    log.info(`[${getTimestamp()}] Cookie consent system initializing...`);
    log.info(`Detected country code: ${countryCode}`);
    log.info(`Consent mode for ${countryCode}:`, consentConfig.mode);
    log.info(`Block cookies by default: ${consentConfig.blockCookies}`);

    if (consentConfig.mode === "opt-in") {
      log.warn(`[${getTimestamp()}] EU/GDPR region detected - blocking modal will appear`);
      log.info('User MUST accept cookies before analytics load');
    } else {
      log.success(`[${getTimestamp()}] Non-EU region detected - no blocking modal`);
      log.info('Analytics cookies enabled by default (opt-out model)');
      log.info('User can opt-out via footer "Cookie Settings" link');
    }

    // Initialize cookie consent
    CookieConsent.run({
      // Set mode based on region: 'opt-in' for EU (GDPR), 'opt-out' for US/others
      // Note: vanilla-cookieconsent only supports 'opt-in' and 'opt-out', so 'info' maps to 'opt-out'
      mode: consentConfig.mode === "opt-in" ? "opt-in" : "opt-out",

      // Only auto-show banner for EU (opt-in). For US/opt-out, no banner - just footer link
      autoShow: consentConfig.mode === "opt-in",

      // Don't show the modal again if user already consented
      disablePageInteraction: consentConfig.mode === "opt-in",

      // Hide the consent modal from bots/crawlers
      hideFromBots: true,

      // Cookie settings
      cookie: {
        name: "cc_cookie",
        domain: window.location.hostname,
        path: "/",
        sameSite: "Lax",
        expiresAfterDays: 365,
      },

      // GUI options
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom right",
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          position: "right",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },

      // Define cookie categories
      categories: {
        necessary: {
          enabled: true, // Always enabled
          readOnly: true, // Cannot be disabled
        },
        analytics: {
          enabled: consentConfig.mode !== "opt-in", // Auto-enabled for opt-out/info modes
          readOnly: false,
          autoClear: {
            cookies: [
              {
                name: /^_ga/, // Clear Google Analytics cookies
              },
              {
                name: "_gid",
              },
            ],
          },
        },
      },

      // Language settings with all supported languages
      language: {
        default: normalizedLang,
        autoDetect: "document",
        translations: buildCookieConsentTranslations(),
      },

      // Callbacks for Google Analytics integration
      onChange: ({ changedCategories, changedServices }) => {
        log.info(`[${getTimestamp()}] 🔔 User changed cookie preferences`);
        log.info('Changed categories:', changedCategories);
        log.info('Changed services:', changedServices);

        // Handle Google Analytics
        if (changedCategories.includes("analytics")) {
          const accepted = CookieConsent.acceptedCategory("analytics");

          if (accepted) {
            log.success(`[${getTimestamp()}] Analytics cookies ACCEPTED`);
            log.info('Google Analytics will load (if tracking ID configured)');
          } else {
            log.error(`[${getTimestamp()}] Analytics cookies REJECTED`);
            log.info('Google Analytics will NOT load / will be removed');
          }
        }
      },

      onFirstConsent: ({ cookie }) => {
        log.success(`[${getTimestamp()}] 🎉 First consent saved by user`);
        log.info('Consent cookie created:', cookie);
        log.info('Accepted categories:', cookie.categories);
        log.info('This consent will persist for 365 days');
      },

      onConsent: ({ cookie }) => {
        log.success(`[${getTimestamp()}] Consent saved/updated`);
        log.info('Current categories:', cookie.categories);

        if (cookie.categories?.includes('analytics')) {
          log.success('✓ Analytics cookies: ACCEPTED');
        } else {
          log.error('✗ Analytics cookies: REJECTED');
        }

        log.success('✓ Necessary cookies: ALWAYS ENABLED (required for site functionality)');
      },
    });

    log.success(`[${getTimestamp()}] Cookie consent system initialized successfully`);
    log.info('Auto-show modal:', consentConfig.mode === "opt-in" ? 'YES (EU)' : 'NO (US/other)');

    // For opt-out regions (US/others), if no consent cookie exists, automatically accept analytics
    // This ensures analytics loads by default as expected in opt-out regions
    const existingCookie = CookieConsent.getCookie();
    if (consentConfig.mode !== "opt-in" && !existingCookie) {
      log.info(`[${getTimestamp()}] No consent cookie found - auto-accepting analytics for opt-out region`);
      CookieConsent.acceptCategory(['necessary', 'analytics']);
      log.success(`[${getTimestamp()}] ✓ Analytics auto-accepted for opt-out region (US/other)`);
      log.info('User can opt-out anytime via footer "Cookie Settings" link');
    }

    // Expose CookieConsent globally so footer can call showPreferences()
    if (!window.CookieConsent) {
      window.CookieConsent = CookieConsent;
      log.info(`[${getTimestamp()}] CookieConsent exposed globally on window.CookieConsent`);
    }

    // Expose debug helpers to window for production testing
    if (!window.cookieConsentDebug) {
      window.cookieConsentDebug = {} as any;
    }

    window.cookieConsentDebug.status = () => {
      const cookie = CookieConsent.getCookie();
      return {
        countryDetected: countryCode,
        consentMode: consentConfig.mode,
        bannerAutoShow: consentConfig.mode === "opt-in",
        consentGiven: !!cookie,
        consentCategories: cookie?.categories || [],
        analyticsAccepted: cookie?.categories?.includes('analytics') || false,
        cookieExpiry: cookie ? '365 days from consent' : 'N/A',
      };
    };

    window.cookieConsentDebug.country = () => {
      return {
        detected: countryCode,
        source: 'Netlify Edge Function cookie (user_country)',
        mode: consentConfig.mode,
        isEU: consentConfig.mode === 'opt-in',
      };
    };

    window.cookieConsentDebug.cookies = () => {
      const allCookies = document.cookie.split(';').map(c => c.trim());
      const consentCookie = allCookies.find(c => c.startsWith('cc_cookie='));
      const gaCookies = allCookies.filter(c => c.startsWith('_ga'));

      return {
        allCookies: allCookies.length > 0 ? allCookies : 'No cookies found',
        consentCookie: consentCookie || 'Not set',
        gaCookies: gaCookies.length > 0 ? gaCookies : 'No GA cookies',
      };
    };

    window.cookieConsentDebug.test = {
      acceptAll: () => {
        log.info('🧪 TEST: Simulating "Accept All" action...');
        CookieConsent.acceptCategory('all');
        log.success('✓ All categories accepted');
        log.info('Check console logs above for GA loading');
      },
      rejectAll: () => {
        log.info('🧪 TEST: Simulating "Reject All" action...');
        CookieConsent.acceptCategory('necessary');
        log.success('✓ Only necessary cookies accepted');
        log.info('Check console logs above for GA removal');
      },
      clearConsent: () => {
        log.warn('🧪 TEST: Clearing consent cookie...');
        document.cookie = 'cc_cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        log.success('✓ Consent cookie cleared');
        log.info('Refresh page to see modal again (if EU) or reset to defaults');
      },
    };

    log.info('═══════════════════════════════════════════════════════════════');
    log.info('🔧 DEBUG HELPERS AVAILABLE IN CONSOLE:');
    log.info('  window.cookieConsentDebug.status()   - Show current consent status');
    log.info('  window.cookieConsentDebug.country()  - Show detected country info');
    log.info('  window.cookieConsentDebug.ga()       - Show Google Analytics status');
    log.info('  window.cookieConsentDebug.cookies()  - List all cookies');
    log.info('  window.cookieConsentDebug.test.acceptAll()   - Simulate accepting');
    log.info('  window.cookieConsentDebug.test.rejectAll()   - Simulate rejecting');
    log.info('  window.cookieConsentDebug.test.clearConsent() - Clear consent to retest');
    log.info('═══════════════════════════════════════════════════════════════');
  }, [currentLang]);

  return null; // This component only initializes the library
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    CookieConsent: typeof CookieConsent;
    cookieConsentDebug: any;
  }
}
