/**
 * Interactivity System Entry Point
 *
 * This file bootstraps the vanilla JavaScript interactivity system.
 * It imports the registry (which auto-wires lifecycle hooks) and
 * all component initializers (which self-register).
 *
 * Components are loaded lazily - initializers only run when elements
 * with matching data-interactive attributes are found in the DOM.
 */

// Import registry (this wires up the lifecycle hooks automatically)
import "../../scripts/register";

// Import all component initializers (these self-register via registerInteraction)
import "../../scripts/components/header";
import "../../scripts/components/animations";
import "../../scripts/components/faq";
import "../../scripts/components/theme";

// Guard against duplicate initialization
if (typeof window !== "undefined") {
  if (!(window as any).__interactivityLoader) {
    (window as any).__interactivityLoader = true;
    console.log("[Interactivity] System initialized");
  }
}
