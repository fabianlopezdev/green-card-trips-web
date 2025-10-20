// Client-side script to wire the Cookie Settings button in footer
// STEP 8: Wire footer Cookie Settings button

// Wait for DOM to be ready
if (typeof document !== 'undefined') {
  // Function to attach event listener to cookie settings button
  function wireCookieSettingsButton() {
    // Find the cookie settings button in the footer by looking for button with cookie settings text
    const buttons = document.querySelectorAll('footer button');
    let cookieSettingsBtn: HTMLElement | null = null;

    for (const button of Array.from(buttons)) {
      const text = button.textContent?.toLowerCase() || '';
      // Match various languages: "cookie settings", "configuración de cookies", "mga setting ng cookie", etc.
      if (text.includes('cookie') && (text.includes('setting') || text.includes('configuración') || text.includes('cài đặt') || text.includes('设置'))) {
        cookieSettingsBtn = button as HTMLElement;
        break;
      }
    }

    if (!cookieSettingsBtn) {
      console.log('[CookieConsent] Cookie settings button not found in footer');
      return;
    }

    cookieSettingsBtn.addEventListener('click', (e) => {
      e.preventDefault();

      // Access the global CookieConsent API
      const CC = (window as any).CookieConsent;

      if (CC && typeof CC.showPreferences === 'function') {
        console.log('[CookieConsent] Opening preferences modal');
        CC.showPreferences();
      } else {
        console.warn('[CookieConsent] CookieConsent API not available');
      }
    });

    console.log('[CookieConsent] Cookie settings button wired');
  }

  // Try to wire immediately if DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireCookieSettingsButton);
  } else {
    wireCookieSettingsButton();
  }
}
