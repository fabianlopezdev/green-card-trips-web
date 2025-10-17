import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import { EU_COUNTRIES, getCookie } from "@components/cookieConsent/config";

interface Props {
  trackingId?: string;
}

// Google Consent Mode v2 types
type ConsentStatus = 'granted' | 'denied';

interface GoogleConsentState {
  ad_storage: ConsentStatus;
  analytics_storage: ConsentStatus;
  ad_user_data: ConsentStatus;
  ad_personalization: ConsentStatus;
}

// Color-coded logging helpers for production debugging
const log = {
  success: (msg: string, ...args: any[]) => {
    console.log(`%c🟢 [GA] ${msg}`, 'color: #10b981; font-weight: bold', ...args);
  },
  error: (msg: string, ...args: any[]) => {
    console.log(`%c🔴 [GA] ${msg}`, 'color: #ef4444; font-weight: bold', ...args);
  },
  info: (msg: string, ...args: any[]) => {
    console.log(`%c🔵 [GA] ${msg}`, 'color: #3b82f6; font-weight: bold', ...args);
  },
  warn: (msg: string, ...args: any[]) => {
    console.log(`%c🟡 [GA] ${msg}`, 'color: #f59e0b; font-weight: bold', ...args);
  },
};

const getTimestamp = () => new Date().toISOString().split('T')[1].split('.')[0];

/**
 * Get region-specific default consent state for Google Consent Mode v2
 * EU/EEA: All denied by default (strict opt-in)
 * US/Other: Analytics granted by default (opt-out)
 */
function getDefaultConsentState(countryCode: string): GoogleConsentState {
  const isEU = EU_COUNTRIES.includes(countryCode);

  if (isEU) {
    // EU: Strict opt-in - everything denied until user accepts
    return {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    };
  }

  // US/Other: Opt-out - analytics allowed by default, ads still require consent
  return {
    ad_storage: 'denied', // Keep ad storage denied until explicit consent
    analytics_storage: 'granted', // Analytics OK by default (opt-out model)
    ad_user_data: 'denied', // User data sharing requires explicit consent
    ad_personalization: 'denied', // Personalization requires explicit consent
  };
}

/**
 * Convert vanilla-cookieconsent categories to Google Consent Mode v2 state
 */
function getConsentStateFromCategories(categories: string[]): GoogleConsentState {
  const analyticsAccepted = categories.includes('analytics');

  if (analyticsAccepted) {
    // User accepted analytics - grant all consent parameters
    return {
      ad_storage: 'granted',
      analytics_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    };
  }

  // User rejected analytics - deny all
  return {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  };
}

export default function GoogleAnalytics({ trackingId }: Props) {
  useEffect(() => {
    if (!trackingId) {
      log.warn(`[${getTimestamp()}] No tracking ID configured in config.googleAnalytics`);
      log.info('To enable Google Analytics, add your GA4 tracking ID (e.g., "G-XXXXXXXXXX") to src/utils/config.ts');
      return;
    }

    log.info(`[${getTimestamp()}] Google Analytics component mounted with ID: ${trackingId}`);

    // ===== GOOGLE CONSENT MODE V2 SETUP =====
    // IMPORTANT: Must set default consent BEFORE any GA scripts load
    const countryCode = getCookie("user_country") || "UNKNOWN";
    const defaultConsent = getDefaultConsentState(countryCode);

    log.info(`[${getTimestamp()}] 🔐 Setting Google Consent Mode v2 defaults...`);
    log.info(`Country detected: ${countryCode} (${EU_COUNTRIES.includes(countryCode) ? 'EU - opt-in' : 'Non-EU - opt-out'})`);
    log.info('Default consent state:', defaultConsent);

    // Initialize gtag function FIRST (required before any gtag calls)
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };

    // Set default consent state BEFORE any measurement code loads
    window.gtag('consent', 'default', defaultConsent);

    log.success(`[${getTimestamp()}] ✓ Consent Mode v2 defaults set successfully`);
    log.info('These defaults apply until user makes a choice in the cookie banner');

    // Function to load Google Analytics
    const loadGoogleAnalytics = () => {
      // Check if already loaded
      if (window.gtag) {
        log.info(`[${getTimestamp()}] Google Analytics already loaded, skipping initialization`);
        return;
      }

      log.info(`[${getTimestamp()}] Loading Google Analytics scripts...`);

      // Load gtag.js script
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      script.onload = () => {
        log.success(`[${getTimestamp()}] Google Analytics script loaded successfully`);
      };
      script.onerror = () => {
        log.error(`[${getTimestamp()}] Failed to load Google Analytics script`);
      };
      document.head.appendChild(script);

      // Configure Google Analytics (gtag already initialized with consent mode)
      window.gtag("js", new Date());
      window.gtag("config", trackingId, {
        anonymize_ip: true, // Anonymize IP for privacy (GDPR compliance)
      });

      log.success(`[${getTimestamp()}] Google Analytics initialized with tracking ID: ${trackingId}`);
      log.info('Check Network tab for requests to googletagmanager.com');
      log.info('Check Application > Cookies for _ga, _gid, _ga_* cookies');
    };

    // Function to remove Google Analytics
    const removeGoogleAnalytics = () => {
      const scriptsFound = document.querySelectorAll(`script[src*="googletagmanager.com"]`).length;

      if (scriptsFound === 0 && !window.gtag) {
        log.info(`[${getTimestamp()}] Google Analytics not loaded, nothing to remove`);
        return;
      }

      log.error(`[${getTimestamp()}] Analytics cookies rejected - removing Google Analytics`);

      // Remove any existing GA scripts
      const scripts = document.querySelectorAll(`script[src*="googletagmanager.com"]`);
      scripts.forEach((script) => {
        script.remove();
        log.info(`[${getTimestamp()}] Removed GA script from DOM`);
      });

      // Clear dataLayer and gtag
      if (window.dataLayer) {
        window.dataLayer = [];
        log.info(`[${getTimestamp()}] Cleared dataLayer`);
      }
      if (window.gtag) {
        delete window.gtag;
        log.info(`[${getTimestamp()}] Removed gtag function`);
      }

      log.error(`[${getTimestamp()}] Google Analytics fully removed - no tracking will occur`);
      log.info('Verify in Network tab: No requests to googletagmanager.com');
      log.info('Verify in Application > Cookies: No _ga cookies');
    };

    // Update Google Consent Mode v2 based on user's choice
    const updateConsentMode = (categories: string[]) => {
      const newConsentState = getConsentStateFromCategories(categories);

      log.info(`[${getTimestamp()}] 🔐 Updating Google Consent Mode v2...`);
      log.info('User consent categories:', categories);
      log.info('New consent state:', newConsentState);

      // Update consent - Google will apply this immediately
      window.gtag('consent', 'update', newConsentState);

      log.success(`[${getTimestamp()}] ✓ Consent Mode v2 updated successfully`);
      log.info('Google will now use these consent signals for measurement');
    };

    // Check current consent status and load/remove GA accordingly
    const checkConsentAndLoad = () => {
      const cookie = CookieConsent.getCookie();
      const analyticsAccepted = cookie?.categories?.includes("analytics");

      log.info(`[${getTimestamp()}] Checking cookie consent status...`);
      log.info('Consent cookie exists:', !!cookie);
      log.info('Consent categories:', cookie?.categories || 'none');
      log.info('Analytics accepted:', analyticsAccepted ? 'YES' : 'NO');

      // Update consent mode if user has made a choice
      if (cookie?.categories) {
        updateConsentMode(cookie.categories);
      }

      if (analyticsAccepted) {
        log.success(`[${getTimestamp()}] Analytics cookies accepted - loading Google Analytics`);
        loadGoogleAnalytics();
      } else {
        log.error(`[${getTimestamp()}] Analytics cookies not accepted - Google Analytics will NOT load`);
        removeGoogleAnalytics();
      }
    };

    // Check consent on mount
    log.info(`[${getTimestamp()}] Initial consent check on component mount`);
    checkConsentAndLoad();

    // Listen for consent changes
    CookieConsent.on("consent", ({ cookie }) => {
      log.info(`[${getTimestamp()}] 🔔 Consent event fired - user made a choice`);
      log.info('New consent state:', cookie);
      checkConsentAndLoad();
    });

    CookieConsent.on("change", ({ changedCategories, changedServices }) => {
      log.info(`[${getTimestamp()}] 🔔 Preferences changed event fired`);
      log.info('Changed categories:', changedCategories);
      log.info('Changed services:', changedServices);
      checkConsentAndLoad();
    });

    // Expose debug helper to window for production testing
    if (!window.cookieConsentDebug) {
      window.cookieConsentDebug = {} as any;
    }

    window.cookieConsentDebug.ga = () => {
      const gaScripts = document.querySelectorAll(`script[src*="googletagmanager.com"]`);
      const gaCookies = document.cookie.split(';')
        .filter(c => c.trim().startsWith('_ga'))
        .map(c => c.trim());

      return {
        loaded: !!window.gtag,
        trackingId: trackingId,
        scriptsFound: gaScripts.length,
        scriptsInDOM: Array.from(gaScripts).map(s => (s as HTMLScriptElement).src),
        gaCookies: gaCookies.length > 0 ? gaCookies : 'none',
        dataLayerLength: window.dataLayer?.length || 0,
      };
    };

    window.cookieConsentDebug.consentMode = () => {
      const cookie = CookieConsent.getCookie();
      const currentState = cookie?.categories
        ? getConsentStateFromCategories(cookie.categories)
        : defaultConsent;

      return {
        consentModeVersion: 'v2',
        detectedCountry: countryCode,
        isEU: EU_COUNTRIES.includes(countryCode),
        defaultConsentState: defaultConsent,
        currentConsentState: currentState,
        userMadeChoice: !!cookie,
        description: 'Google Consent Mode v2 signals sent to Google Analytics',
        parameters: {
          ad_storage: 'Storage for advertising cookies and identifiers',
          analytics_storage: 'Storage for analytics cookies (visit count, session duration)',
          ad_user_data: 'Consent to send user data to Google for advertising',
          ad_personalization: 'Consent for personalized advertising',
        },
      };
    };

    log.info(`[${getTimestamp()}] Debug helpers available:`);
    log.info('  window.cookieConsentDebug.ga() - Google Analytics status');
    log.info('  window.cookieConsentDebug.consentMode() - Consent Mode v2 state');
  }, [trackingId]);

  return null; // This component doesn't render anything
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    cookieConsentDebug: any;
  }
}
