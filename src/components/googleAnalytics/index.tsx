import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";

interface Props {
  trackingId?: string;
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

export default function GoogleAnalytics({ trackingId }: Props) {
  useEffect(() => {
    if (!trackingId) {
      log.warn(`[${getTimestamp()}] No tracking ID configured in config.googleAnalytics`);
      log.info('To enable Google Analytics, add your GA4 tracking ID (e.g., "G-XXXXXXXXXX") to src/utils/config.ts');
      return;
    }

    log.info(`[${getTimestamp()}] Google Analytics component mounted with ID: ${trackingId}`);

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

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
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

    // Check current consent status
    const checkConsentAndLoad = () => {
      const cookie = CookieConsent.getCookie();
      const analyticsAccepted = cookie?.categories?.includes("analytics");

      log.info(`[${getTimestamp()}] Checking cookie consent status...`);
      log.info('Consent cookie exists:', !!cookie);
      log.info('Consent categories:', cookie?.categories || 'none');
      log.info('Analytics accepted:', analyticsAccepted ? 'YES' : 'NO');

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

    log.info(`[${getTimestamp()}] Debug helper available: Run 'window.cookieConsentDebug.ga()' in console`);
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
