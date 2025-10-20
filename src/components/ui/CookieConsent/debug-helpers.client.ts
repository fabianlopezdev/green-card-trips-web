// Debug helpers for testing cookie consent in different scenarios
// STEP 9: Add debug helpers for testing

if (typeof window !== 'undefined') {
  // Expose debug helpers on window object
  (window as any).cookieConsentDebug = {
    /**
     * Simulate a specific country by setting the user_country cookie
     * @param countryCode - Two-letter country code (e.g., 'DE', 'US', 'FR')
     */
    setCountry(countryCode: string) {
      document.cookie = `user_country=${countryCode.toUpperCase()}; path=/`;
      console.log(`[Debug] Country set to: ${countryCode.toUpperCase()}`);
      console.log('[Debug] Reload page to apply changes');
    },

    /**
     * Clear all cookie consent related cookies and reload
     */
    clearConsent() {
      // Clear cc_ cookies (vanilla-cookieconsent)
      document.cookie.split(';').forEach(cookie => {
        const name = cookie.split('=')[0].trim();
        if (name.includes('cc_')) {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
          console.log(`[Debug] Cleared cookie: ${name}`);
        }
      });

      // Clear GA cookies
      document.cookie.split(';').forEach(cookie => {
        const name = cookie.split('=')[0].trim();
        if (name.startsWith('_ga')) {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
          console.log(`[Debug] Cleared GA cookie: ${name}`);
        }
      });

      console.log('[Debug] All consent cookies cleared');
      console.log('[Debug] Reloading page...');
      setTimeout(() => location.reload(), 500);
    },

    /**
     * Check current consent status
     */
    checkStatus() {
      const CC = (window as any).CookieConsent;
      const cookies = document.cookie.split(';').reduce((acc, cookie) => {
        const [name, value] = cookie.split('=').map(s => s.trim());
        acc[name] = value;
        return acc;
      }, {} as Record<string, string>);

      console.log('[Debug] === Cookie Consent Status ===');
      console.log('[Debug] Current country:', cookies.user_country || 'UNKNOWN');
      console.log('[Debug] Consent cookie (cc_cookie):', cookies.cc_cookie || 'Not set');
      console.log('[Debug] GA cookies:', Object.keys(cookies).filter(k => k.startsWith('_ga')));
      console.log('[Debug] CookieConsent API available:', !!CC);

      if (CC && typeof CC.acceptedCategory === 'function') {
        console.log('[Debug] Analytics accepted:', CC.acceptedCategory('analytics'));
        console.log('[Debug] Necessary accepted:', CC.acceptedCategory('necessary'));
      }
    },

    /**
     * Test EU country scenario (shows banner)
     */
    testEU() {
      console.log('[Debug] Testing EU scenario (Germany)');
      this.setCountry('DE');
    },

    /**
     * Test non-EU country scenario (auto-accept, no banner)
     */
    testNonEU() {
      console.log('[Debug] Testing non-EU scenario (United States)');
      this.setCountry('US');
    },

    /**
     * Show help for debug commands
     */
    help() {
      console.log(`
[Debug] === Cookie Consent Debug Helpers ===

Available commands:
  window.cookieConsentDebug.setCountry('DE')  - Set country (DE, US, FR, etc.)
  window.cookieConsentDebug.clearConsent()    - Clear all consent cookies & reload
  window.cookieConsentDebug.checkStatus()     - Check current consent status
  window.cookieConsentDebug.testEU()          - Test EU scenario (Germany)
  window.cookieConsentDebug.testNonEU()       - Test non-EU scenario (US)
  window.cookieConsentDebug.help()            - Show this help

Example workflow:
  1. cookieConsentDebug.testEU()       // Sets country to DE
  2. <reload page>                      // Banner should appear
  3. cookieConsentDebug.checkStatus()  // Check current state
  4. cookieConsentDebug.clearConsent() // Reset and reload
      `);
    }
  };

  // Show help on load (only in development)
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('[Debug] Cookie Consent debug helpers loaded. Type "cookieConsentDebug.help()" for commands.');
  }
}
