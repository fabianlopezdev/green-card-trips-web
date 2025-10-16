import "../../i18n";
import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * InitScripts component initializes global functionality:
 * - i18next for translations (imported at top)
 * - Lenis for smooth scrolling
 *
 * This component renders nothing, only runs side effects.
 */
export default function InitScripts() {
  useEffect(() => {
    // Initialize Lenis with custom configuration for premium feel
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
    });

    // Request animation frame loop for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
