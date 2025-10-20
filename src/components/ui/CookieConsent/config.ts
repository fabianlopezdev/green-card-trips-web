// Cookie Consent Configuration - Steps 3 & 4: Geolocation and Mode Logic

/**
 * EU/EEA countries requiring GDPR opt-in consent
 */
export const EU_COUNTRIES = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
  'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
  'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  // EEA countries (not in EU but follow GDPR)
  'IS', 'LI', 'NO',
  // UK (follows GDPR-like regulations)
  'GB'
];

/**
 * Get a cookie value by name
 */
export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }

  return null;
}

/**
 * Get the user's country code from the cookie set by Netlify Edge Function
 * Returns 'UNKNOWN' if cookie doesn't exist (e.g., in local development)
 */
export function getUserCountry(): string {
  const country = getCookie('user_country');
  return country || 'UNKNOWN';
}

/**
 * Check if the user is from an EU/EEA country requiring GDPR consent
 */
export function isEUCountry(countryCode: string): boolean {
  return EU_COUNTRIES.includes(countryCode.toUpperCase());
}

/**
 * Determine if we should show the cookie banner
 * - EU countries: Show banner (GDPR requires opt-in)
 * - All others: Don't show banner (auto-accept)
 */
export function shouldShowBanner(countryCode: string): boolean {
  return isEUCountry(countryCode);
}
