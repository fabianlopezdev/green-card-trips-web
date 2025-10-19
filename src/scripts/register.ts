/**
 * Vanilla JavaScript Interactivity Registry
 *
 * Central registry for component initializers using auto-discovery pattern.
 * Components register themselves via `registerInteraction(name, init)`.
 * Discovery happens via `data-interactive` attributes on HTML elements.
 *
 * Features:
 * - Idempotent initialization via WeakSet tracking
 * - Astro lifecycle awareness (DOMContentLoaded + astro:page-load)
 * - Safe multi-instance support
 * - Automatic garbage collection
 */

/** Initializer function that receives the root element of a component */
export type Initializer = (root: HTMLElement) => void;

/** Registry mapping component names to their initializers */
const registry = new Map<string, Initializer>();

/** Track elements that have been initialized to prevent double-initialization */
const hydrated = new WeakSet<HTMLElement>();

/**
 * Register a component initializer
 *
 * @param name - Unique identifier matching data-interactive attribute value
 * @param init - Initializer function receiving the component root element
 *
 * @example
 * ```ts
 * registerInteraction("header", (root) => {
 *   const menu = root.querySelector("[data-mobile-menu]");
 *   if (!menu) return;
 *   // ... initialization logic
 * });
 * ```
 */
export function registerInteraction(name: string, init: Initializer): void {
  if (registry.has(name)) {
    console.warn(`[Interactivity] Interaction "${name}" already registered. Skipping duplicate registration.`);
    return;
  }
  registry.set(name, init);
}

/**
 * Initialize all interactive components within a root node
 *
 * Scans for elements with `data-interactive` attribute and runs
 * matching registered initializers. Skips already-initialized elements.
 *
 * @param root - Parent node to search within (defaults to document)
 *
 * @example
 * ```html
 * <header data-interactive="header">...</header>
 * <section data-interactive="animations hero">...</section>
 * ```
 */
export function initInteractiveRoots(root: ParentNode = document): void {
  const candidates = root.querySelectorAll<HTMLElement>("[data-interactive]");

  // Early return if no interactive elements found
  if (!candidates.length) return;

  for (const el of candidates) {
    // Skip already initialized elements
    if (hydrated.has(el)) continue;

    // Parse space-separated interaction names
    const keys = el.dataset.interactive?.split(" ").filter(Boolean);
    if (!keys?.length) continue;

    // Run all matching initializers
    for (const key of keys) {
      const initializer = registry.get(key);
      if (!initializer) {
        console.warn(`[Interactivity] No initializer registered for "${key}"`);
        continue;
      }

      try {
        initializer(el);
      } catch (error) {
        console.error(`[Interactivity] Error initializing "${key}":`, error);
      }
    }

    // Mark as hydrated to prevent re-initialization
    hydrated.add(el);
  }
}

/**
 * Wire up lifecycle hooks
 * Runs on initial page load and Astro page transitions
 */
function wireLifecycle(): void {
  if (typeof document === "undefined") return;

  // Initial page load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initInteractiveRoots());
  } else {
    // DOM already ready
    initInteractiveRoots();
  }

  // Astro page transitions (View Transitions API)
  document.addEventListener("astro:page-load", () => {
    initInteractiveRoots();
  });
}

// Bootstrap the system
wireLifecycle();
