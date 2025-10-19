/**
 * Shared IntersectionObserver factory with instance caching
 *
 * Reuses observer instances for elements with identical options,
 * dramatically improving performance when observing many elements.
 */

import type { ObserverOptions } from "../types";

/** Cache of observer instances keyed by options hash */
const observerCache = new Map<string, IntersectionObserver>();

/** Map of elements to their callback functions */
const elementCallbacks = new WeakMap<Element, IntersectionObserverCallback>();

/**
 * Generate cache key from observer options
 */
function getOptionsKey(options: ObserverOptions = {}): string {
  return JSON.stringify({
    threshold: options.threshold ?? 0,
    rootMargin: options.rootMargin ?? "0px",
    root: options.root ?? null,
  });
}

/**
 * Get or create a cached IntersectionObserver
 *
 * @param options - Observer configuration
 * @returns Cached or new IntersectionObserver instance
 */
function getObserver(options: ObserverOptions = {}): IntersectionObserver {
  const key = getOptionsKey(options);

  if (!observerCache.has(key)) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const callback = elementCallbacks.get(entry.target);
        if (callback) {
          callback([entry], observer);
        }
      }
    }, options);

    observerCache.set(key, observer);
  }

  return observerCache.get(key)!;
}

/**
 * Observe an element with IntersectionObserver
 *
 * Automatically uses cached observer instances for efficiency.
 * Returns cleanup function to stop observing.
 *
 * @param element - Element to observe
 * @param callback - Callback fired when intersection changes
 * @param options - Observer options
 * @returns Cleanup function
 *
 * @example
 * ```ts
 * const cleanup = observe(
 *   element,
 *   ([entry]) => {
 *     if (entry.isIntersecting) {
 *       element.classList.add("is-visible");
 *     }
 *   },
 *   { threshold: 0.5 }
 * );
 *
 * // Later: cleanup();
 * ```
 */
export function observe(
  element: Element,
  callback: IntersectionObserverCallback,
  options: ObserverOptions = {}
): () => void {
  if (!element) return () => {};

  const observer = getObserver(options);

  // Store callback for this element
  elementCallbacks.set(element, callback);

  // Start observing
  observer.observe(element);

  // Return cleanup function
  return () => {
    observer.unobserve(element);
    elementCallbacks.delete(element);
  };
}

/**
 * Observe element and run callback once when it becomes visible
 *
 * Automatically cleans up after first intersection.
 *
 * @param element - Element to observe
 * @param callback - Callback fired once when element is visible
 * @param options - Observer options
 * @returns Cleanup function
 *
 * @example
 * ```ts
 * observeOnce(element, () => {
 *   console.log("Element is now visible!");
 *   // Start animations, load images, etc.
 * });
 * ```
 */
export function observeOnce(
  element: Element,
  callback: () => void,
  options: ObserverOptions = {}
): () => void {
  let cleanup: (() => void) | null = null;

  cleanup = observe(
    element,
    ([entry]) => {
      if (entry.isIntersecting) {
        callback();
        // Auto-cleanup after first intersection
        if (cleanup) cleanup();
      }
    },
    options
  );

  return () => {
    if (cleanup) cleanup();
  };
}

/**
 * Observe multiple elements with the same callback and options
 *
 * More efficient than calling observe() multiple times.
 *
 * @param elements - Array or NodeList of elements
 * @param callback - Callback for each element
 * @param options - Observer options
 * @returns Cleanup function that stops observing all elements
 *
 * @example
 * ```ts
 * const items = document.querySelectorAll("[data-animate]");
 * const cleanup = observeMany(items, ([entry]) => {
 *   if (entry.isIntersecting) {
 *     entry.target.classList.add("is-visible");
 *   }
 * });
 * ```
 */
export function observeMany(
  elements: Element[] | NodeListOf<Element>,
  callback: IntersectionObserverCallback,
  options: ObserverOptions = {}
): () => void {
  if (!elements.length) return () => {};

  const cleanups = Array.from(elements).map((el) =>
    observe(el, callback, options)
  );

  return () => {
    for (const cleanup of cleanups) {
      cleanup();
    }
  };
}

/**
 * Wait for element to intersect viewport
 *
 * Returns a promise that resolves when element becomes visible.
 *
 * @param element - Element to wait for
 * @param options - Observer options
 * @returns Promise that resolves when element is visible
 *
 * @example
 * ```ts
 * await waitForIntersection(element);
 * console.log("Element is now visible!");
 * ```
 */
export function waitForIntersection(
  element: Element,
  options: ObserverOptions = {}
): Promise<IntersectionObserverEntry> {
  return new Promise((resolve) => {
    const cleanup = observe(
      element,
      ([entry]) => {
        if (entry.isIntersecting) {
          resolve(entry);
          cleanup();
        }
      },
      options
    );
  });
}

/**
 * Clear all cached observers
 *
 * Useful for testing or manual cleanup. Normally not needed
 * as observers are reused throughout the page lifecycle.
 */
export function clearObserverCache(): void {
  for (const observer of observerCache.values()) {
    observer.disconnect();
  }
  observerCache.clear();
}
