import "vanilla-cookieconsent/dist/cookieconsent.css";
import { getConsentMode, getCookie } from "./config";
import enLocale from "../../i18n/locales/en.json";
import esLocale from "../../i18n/locales/es.json";
import tlLocale from "../../i18n/locales/tl.json";
import viLocale from "../../i18n/locales/vi.json";
import zhCNLocale from "../../i18n/locales/zh-CN.json";

const log = {
  success: (msg: string, ...args: unknown[]) => {
    console.log(`%c🟢 [Cookie Consent] ${msg}`, "color: #10b981; font-weight: bold", ...args);
  },
  error: (msg: string, ...args: unknown[]) => {
    console.log(`%c🔴 [Cookie Consent] ${msg}`, "color: #ef4444; font-weight: bold", ...args);
  },
  info: (msg: string, ...args: unknown[]) => {
    console.log(`%c🔵 [Cookie Consent] ${msg}`, "color: #3b82f6; font-weight: bold", ...args);
  },
  warn: (msg: string, ...args: unknown[]) => {
    console.log(`%c🟡 [Cookie Consent] ${msg}`, "color: #f59e0b; font-weight: bold", ...args);
  },
};

const getTimestamp = () => new Date().toISOString().split("T")[1]?.split(".")[0] ?? "";

type CookieConsentModule = {
  run: (...args: any[]) => void;
  getCookie: () => any;
  acceptedCategory: (category: string) => boolean;
  acceptCategory: (categories: string | string[]) => void;
};

type CookieConsentInstance = CookieConsentModule & Record<string, any>;

function resolveCookieConsent(mod: Record<string, any>): CookieConsentInstance {
  if (mod.default) {
    return mod.default as CookieConsentInstance;
  }
  if (mod.CookieConsent) {
    return mod.CookieConsent as CookieConsentInstance;
  }
  return mod as CookieConsentInstance;
}

function buildTranslations() {
  const locales = {
    en: enLocale,
    es: esLocale,
    tl: tlLocale,
    vi: viLocale,
    "zh-CN": zhCNLocale,
  } as Record<string, any>;

  const translations: Record<string, any> = {};

  for (const [lang, locale] of Object.entries(locales)) {
    const cc = locale.cookieConsent;
    translations[lang] = {
      consentModal: {
        title: cc.title,
        description: cc.description,
        acceptAllBtn: cc.acceptAll,
        acceptNecessaryBtn: cc.acceptNecessary,
        showPreferencesBtn: cc.settings,
        footer: `\n          <a href="/privacy-policy">${cc.privacyPolicy}</a>\n          <a href="/cookies-policy">${cc.cookiePolicy}</a>\n        `,
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

interface InitOptions {
  currentLang: string;
}

export async function initCookieConsent({ currentLang }: InitOptions) {
  if (typeof window === "undefined") return;
  if ((window as any).__cookieConsentInitialized) {
    log.info("Cookie consent already initialized; skipping");
    return;
  }

  const module = await import("vanilla-cookieconsent");
  const CookieConsent = resolveCookieConsent(module);

  const normalizedLang = currentLang === "zh-cn" ? "zh-CN" : currentLang;
  const countryCode = getCookie("user_country") || "UNKNOWN";
  const consentConfig = getConsentMode(countryCode);

  log.info(`[${getTimestamp()}] Cookie consent system initializing...`);
  log.info(`Detected country code: ${countryCode}`);
  log.info(`Consent mode for ${countryCode}:`, consentConfig.mode);
  log.info(`Block cookies by default: ${consentConfig.blockCookies}`);

  if (consentConfig.mode === "opt-in") {
    log.warn(`[${getTimestamp()}] EU/GDPR region detected - blocking modal will appear`);
    log.info("User MUST accept cookies before analytics load");
  } else {
    log.success(`[${getTimestamp()}] Non-EU region detected - no blocking modal`);
    log.info("Analytics cookies enabled by default (opt-out model)");
    log.info("User can opt-out via footer 'Cookie Settings' link");
  }

  CookieConsent.run({
    mode: consentConfig.mode === "opt-in" ? "opt-in" : "opt-out",
    autoShow: consentConfig.mode === "opt-in",
    disablePageInteraction: consentConfig.mode === "opt-in",
    hideFromBots: true,
    cookie: {
      name: "cc_cookie",
      domain: window.location.hostname,
      path: "/",
      sameSite: "Lax",
      expiresAfterDays: 365,
    },
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
    categories: {
      necessary: {
        enabled: true,
        readOnly: true,
      },
      analytics: {
        enabled: consentConfig.mode !== "opt-in",
        readOnly: false,
        autoClear: {
          cookies: [
            { name: /^_ga/ },
            { name: "_gid" },
          ],
        },
      },
    },
    language: {
      default: normalizedLang,
      autoDetect: "document",
      translations: buildTranslations(),
    },
    onChange: ({ changedCategories }: { changedCategories: string[] }) => {
      log.info(`[${getTimestamp()}] 🔔 User changed cookie preferences`);
      log.info("Changed categories:", changedCategories);

      if (changedCategories.includes("analytics")) {
        const accepted = CookieConsent.acceptedCategory("analytics");

        if (accepted) {
          log.success(`[${getTimestamp()}] Analytics cookies ACCEPTED`);
          log.info("Google Analytics will load (if tracking ID configured)");
        } else {
          log.error(`[${getTimestamp()}] Analytics cookies REJECTED`);
          log.info("Google Analytics will NOT load / will be removed");
        }
      }
    },
    onFirstConsent: ({ cookie }: any) => {
      log.success(`[${getTimestamp()}] 🎉 First consent saved by user`);
      log.info("Consent cookie created:", cookie);
      log.info("Accepted categories:", cookie?.categories || []);
      log.info("This consent will persist for 365 days");
    },
    onConsent: ({ cookie }: any) => {
      log.success(`[${getTimestamp()}] Consent saved/updated`);
      log.info("Current categories:", cookie?.categories || []);

      if (cookie?.categories?.includes("analytics")) {
        log.success("✓ Analytics cookies: ACCEPTED");
      } else {
        log.error("✗ Analytics cookies: REJECTED");
      }

      log.success("✓ Necessary cookies: ALWAYS ENABLED (required for site functionality)");
    },
  });

  log.success(`[${getTimestamp()}] Cookie consent system initialized successfully`);
  log.info("Auto-show modal:", consentConfig.mode === "opt-in" ? "YES (EU)" : "NO (US/other)");
  window.dispatchEvent(new CustomEvent("cookie-consent-ready", { detail: CookieConsent }));

  const existingCookie = CookieConsent.getCookie();
  const hasEmptyCategories = existingCookie && (!existingCookie.categories || existingCookie.categories.length === 0);

  if (consentConfig.mode !== "opt-in" && (!existingCookie || hasEmptyCategories)) {
    if (!existingCookie) {
      log.info(`[${getTimestamp()}] No consent cookie found - auto-accepting analytics for opt-out region`);
    } else if (hasEmptyCategories) {
      log.warn(`[${getTimestamp()}] Malformed consent cookie detected (empty categories) - fixing by auto-accepting analytics`);
    }

    CookieConsent.acceptCategory(["necessary", "analytics"]);
    log.success(`[${getTimestamp()}] ✓ Analytics auto-accepted for opt-out region (US/other)`);
    log.info("User can opt-out anytime via footer 'Cookie Settings' link");
  }

  const win = window as unknown as {
    CookieConsent?: CookieConsentInstance;
    cookieConsentDebug?: Record<string, any>;
    __cookieConsentInitialized?: boolean;
  };

  if (!win.CookieConsent) {
    win.CookieConsent = CookieConsent;
    log.info(`[${getTimestamp()}] CookieConsent exposed globally on window.CookieConsent`);
  }

  if (!win.cookieConsentDebug) {
    win.cookieConsentDebug = {};
  }

  win.cookieConsentDebug.status = () => {
    const cookie = CookieConsent.getCookie();
    return {
      countryDetected: countryCode,
      consentMode: consentConfig.mode,
      bannerAutoShow: consentConfig.mode === "opt-in",
      consentGiven: !!cookie,
      consentCategories: cookie?.categories || [],
      analyticsAccepted: cookie?.categories?.includes("analytics") || false,
      cookieExpiry: cookie ? "365 days from consent" : "N/A",
    };
  };

  win.cookieConsentDebug.country = () => ({
    detected: countryCode,
    source: "Netlify Edge Function cookie (user_country)",
    mode: consentConfig.mode,
    isEU: consentConfig.mode === "opt-in",
  });

  win.cookieConsentDebug.cookies = () => {
    const allCookies = document.cookie.split(";").map((c) => c.trim());
    const consentCookie = allCookies.find((c) => c.startsWith("cc_cookie="));
    const gaCookies = allCookies.filter((c) => c.startsWith("_ga"));

    return {
      allCookies: allCookies.length > 0 ? allCookies : "No cookies found",
      consentCookie: consentCookie || "Not set",
      gaCookies: gaCookies.length > 0 ? gaCookies : "No GA cookies",
    };
  };

  win.cookieConsentDebug.test = {
    acceptAll: () => {
      log.info("🧪 TEST: Simulating 'Accept All' action...");
      CookieConsent.acceptCategory("all");
      log.success("✓ All categories accepted");
    },
    rejectAll: () => {
      log.info("🧪 TEST: Simulating 'Reject All' action...");
      CookieConsent.acceptCategory("necessary");
      log.success("✓ Only necessary cookies accepted");
    },
    clearConsent: () => {
      log.warn("🧪 TEST: Clearing consent cookie...");
      document.cookie = "cc_cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      log.success("✓ Consent cookie cleared");
    },
  };

  log.info("═══════════════════════════════════════════════════════════════");
  log.info("🔧 DEBUG HELPERS AVAILABLE IN CONSOLE:");
  log.info("  window.cookieConsentDebug.status()   - Show current consent status");
  log.info("  window.cookieConsentDebug.country()  - Show detected country info");
  log.info("  window.cookieConsentDebug.cookies()  - List all cookies");
  log.info("  window.cookieConsentDebug.test.acceptAll()   - Simulate accepting");
  log.info("  window.cookieConsentDebug.test.rejectAll()   - Simulate rejecting");
  log.info("  window.cookieConsentDebug.test.clearConsent() - Clear consent to retest");
  log.info("═══════════════════════════════════════════════════════════════");

  win.__cookieConsentInitialized = true;
}

export type { CookieConsentInstance };
