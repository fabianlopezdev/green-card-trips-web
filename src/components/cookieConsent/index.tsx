import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import { getConsentMode, getCookie } from "./config";

export default function CookieConsentBanner() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Get user's country from cookie set by edge function
    const countryCode = getCookie("user_country") || "UNKNOWN";
    const consentConfig = getConsentMode(countryCode);

    console.log("Cookie consent initialized for country:", countryCode, consentConfig);

    // Initialize cookie consent
    CookieConsent.run({
      // Automatically show the consent modal on first visit
      autoShow: true,

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

      // Language settings
      language: {
        default: i18n.language || "en",
        autoDetect: "document",

        translations: {
          en: {
            consentModal: {
              title: t("cookieConsent.title", "We use cookies"),
              description: t(
                "cookieConsent.description",
                "We use cookies to improve your experience and analyze site traffic. You can choose which cookies to accept."
              ),
              acceptAllBtn: t("cookieConsent.acceptAll", "Accept all"),
              acceptNecessaryBtn: t("cookieConsent.acceptNecessary", "Reject all"),
              showPreferencesBtn: t("cookieConsent.settings", "Settings"),
              footer: `
                <a href="/privacy-policy">${t("cookieConsent.privacyPolicy", "Privacy Policy")}</a>
                <a href="/cookies-policy">${t("cookieConsent.cookiePolicy", "Cookie Policy")}</a>
              `,
            },
            preferencesModal: {
              title: t("cookieConsent.preferences.title", "Cookie preferences"),
              acceptAllBtn: t("cookieConsent.acceptAll", "Accept all"),
              acceptNecessaryBtn: t("cookieConsent.acceptNecessary", "Reject all"),
              savePreferencesBtn: t("cookieConsent.preferences.save", "Save preferences"),
              closeIconLabel: t("cookieConsent.preferences.close", "Close"),
              sections: [
                {
                  title: t("cookieConsent.preferences.usage", "Cookie usage"),
                  description: t(
                    "cookieConsent.preferences.usageDesc",
                    "We use cookies to ensure the basic functionalities of the website and to enhance your online experience."
                  ),
                },
                {
                  title: t("cookieConsent.preferences.necessary", "Strictly necessary cookies"),
                  description: t(
                    "cookieConsent.preferences.necessaryDesc",
                    "These cookies are essential for the proper functioning of the website. Without these cookies, the website would not work properly."
                  ),
                  linkedCategory: "necessary",
                },
                {
                  title: t("cookieConsent.preferences.analytics", "Analytics cookies"),
                  description: t(
                    "cookieConsent.preferences.analyticsDesc",
                    "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously."
                  ),
                  linkedCategory: "analytics",
                },
              ],
            },
          },
        },
      },

      // Callbacks for Google Analytics integration (Phase 6)
      onChange: ({ changedCategories, changedServices }) => {
        console.log("Cookie preferences changed:", changedCategories);

        // Handle Google Analytics
        if (changedCategories.includes("analytics")) {
          const accepted = CookieConsent.acceptedCategory("analytics");

          if (accepted) {
            console.log("Analytics accepted - will load GA in Phase 6");
            // Phase 6: Load Google Analytics here
          } else {
            console.log("Analytics rejected - GA will not load");
          }
        }
      },

      onFirstConsent: ({ cookie }) => {
        console.log("First consent saved:", cookie);
      },

      onConsent: ({ cookie }) => {
        console.log("Consent saved:", cookie);
      },
    });
  }, [i18n.language, t]);

  return null; // This component only initializes the library
}
