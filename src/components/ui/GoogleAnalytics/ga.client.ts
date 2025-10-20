/* Google Analytics - COMMENTED OUT

import { EU_COUNTRIES, getCookie } from "@components/ui/CookieConsent/config";

type ConsentStatus = "granted" | "denied";

interface GoogleConsentState {
  ad_storage: ConsentStatus;
  analytics_storage: ConsentStatus;
  ad_user_data: ConsentStatus;
  ad_personalization: ConsentStatus;
}

type CookieConsentInstance = {
  getCookie?: () => { categories?: string[] } | undefined;
  on?: (event: string, handler: (...args: any[]) => void) => void;
};

const log = {
  success: (msg: string, ...args: unknown[]) => console.log(`%c🟢 [GA] ${msg}`, "color: #10b981; font-weight: bold", ...args),
  error: (msg: string, ...args: unknown[]) => console.log(`%c🔴 [GA] ${msg}`, "color: #ef4444; font-weight: bold", ...args),
  info: (msg: string, ...args: unknown[]) => console.log(`%c🔵 [GA] ${msg}`, "color: #3b82f6; font-weight: bold", ...args),
  warn: (msg: string, ...args: unknown[]) => console.log(`%c🟡 [GA] ${msg}`, "color: #f59e0b; font-weight: bold", ...args),
};

const timestamp = () => new Date().toISOString().split("T")[1]?.split(".")[0] ?? "";

function defaultConsent(countryCode: string): GoogleConsentState {
  const isEU = EU_COUNTRIES.includes(countryCode);
  if (isEU) {
    return {
      ad_storage: "denied",
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    };
  }
  return {
    ad_storage: "denied",
    analytics_storage: "granted",
    ad_user_data: "denied",
    ad_personalization: "denied",
  };
}

function consentFromCategories(categories: string[] | undefined): GoogleConsentState {
  if (categories?.includes("analytics")) {
    return {
      ad_storage: "granted",
      analytics_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    };
  }
  return {
    ad_storage: "denied",
    analytics_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  };
}

function ensureGtag() {
  const win = window as Window & {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  };
  win.dataLayer = win.dataLayer || [];
  win.gtag = win.gtag || function (...args: any[]) {
    win.dataLayer?.push(args);
  };
  return win.gtag!;
}

function loadGaScript(trackingId: string) {
  const existing = document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${trackingId}"]`);
  if (existing) {
    return;
  }
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  script.onload = () => log.success(`[${timestamp()}] Google Analytics script loaded`);
  script.onerror = () => log.error(`[${timestamp()}] Failed to load Google Analytics script`);
  document.head.appendChild(script);
}

function configureGa(trackingId: string) {
  const gtag = ensureGtag();
  gtag("js", new Date());
  gtag("config", trackingId, { anonymize_ip: true });
  log.success(`[${timestamp()}] Google Analytics configured (${trackingId})`);
}

function removeGa() {
  document
    .querySelectorAll('script[src*="googletagmanager.com"]')
    .forEach((script) => script.remove());
  const win = window as Window & {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  };
  if (win.dataLayer) {
    win.dataLayer = [];
    log.info("Cleared dataLayer");
  }
  if (win.gtag) {
    delete win.gtag;
    log.info("Removed gtag reference");
  }
}

function updateConsent(consent: GoogleConsentState) {
  const gtag = ensureGtag();
  gtag("consent", "update", consent);
  log.info(`[${timestamp()}] Consent Mode updated`, consent);
}

let started = false;

export function initGoogleAnalytics(trackingId: string) {
  if (!trackingId) {
    log.warn("No GA tracking ID configured");
    return;
  }
  if ((window as any).__gaLoaderInitialized) {
    return;
  }

  const countryCode = getCookie("user_country") || "UNKNOWN";
  const defaults = defaultConsent(countryCode);
  ensureGtag()("consent", "default", defaults);
  log.info(`[${timestamp()}] Set Consent Mode defaults`, defaults);

  const start = (consentInstance?: CookieConsentInstance) => {
    if (started) return;
    started = true;

    const apply = (categories: string[] | undefined) => {
      const consentState = consentFromCategories(categories);
      updateConsent(consentState);

      if (consentState.analytics_storage === "granted") {
        loadGaScript(trackingId);
        configureGa(trackingId);
      } else {
        removeGa();
      }
    };

    const current = consentInstance?.getCookie?.();
    apply(current?.categories);

    consentInstance?.on?.("change", (cookie: any, changedCategories?: string[]) => {
      const categories = Array.isArray(changedCategories)
        ? changedCategories
        : cookie?.categories ?? [];
      apply(categories);
    });
  };

  const readyListener = (event: Event) => {
    const detail = (event as CustomEvent).detail as CookieConsentInstance | undefined;
    start(detail ?? (window as any).CookieConsent);
  };

  if ((window as any).CookieConsent) {
    start((window as any).CookieConsent);
  } else {
    window.addEventListener("cookie-consent-ready", readyListener, { once: true });
  }

  (window as any).__gaLoaderInitialized = true;
}

*/
