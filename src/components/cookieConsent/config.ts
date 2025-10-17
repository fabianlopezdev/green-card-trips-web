// EU/EEA Country Codes (GDPR applies)
export const EU_COUNTRIES = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR",
  "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL",
  "PL", "PT", "RO", "SK", "SI", "ES", "SE",
  // EEA countries (non-EU)
  "IS", "LI", "NO",
  // UK (still follows GDPR-like rules)
  "GB",
];

// California country code + state detection would be done separately
// For now, we'll use country code "US" and assume CCPA applies to all US

export type ConsentMode = "opt-in" | "opt-out" | "info";

export interface ConsentConfig {
  mode: ConsentMode;
  blockCookies: boolean; // Block cookies until consent?
}

/**
 * Determine consent mode based on country code
 */
export function getConsentMode(countryCode: string): ConsentConfig {
  // EU/EEA - Strict opt-in required (GDPR)
  if (EU_COUNTRIES.includes(countryCode)) {
    return {
      mode: "opt-in",
      blockCookies: true, // Block all non-essential cookies until user accepts
    };
  }

  // US - Opt-out approach (CCPA)
  // Note: Technically CCPA only applies to California, but we'll apply to all US for simplicity
  if (countryCode === "US") {
    return {
      mode: "opt-out",
      blockCookies: false, // Allow cookies but offer opt-out
    };
  }

  // Other countries - Informational notice
  return {
    mode: "info",
    blockCookies: false, // Allow cookies, just inform user
  };
}

/**
 * Get cookie from document.cookie
 */
export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() || null;
  }

  return null;
}
