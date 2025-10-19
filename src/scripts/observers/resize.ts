/**
 * Shared ResizeObserver utilities
 *
 * Provides efficient element resize observation with callback management.
 */

/** Single shared ResizeObserver instance for all elements */
let sharedObserver: ResizeObserver | null = null;

/** Map of elements to their resize callbacks */
const elementCallbacks = new WeakMap<Element, Set<ResizeObserverCallback>>();

/**
 * Get or create the shared ResizeObserver
 */
function getSharedObserver(): ResizeObserver {
  if (!sharedObserver) {
    sharedObserver = new ResizeObserver((entries, observer) => {
      for (const entry of entries) {
        const callbacks = elementCallbacks.get(entry.target);
        if (callbacks) {
          for (const callback of callbacks) {
            callback([entry], observer);
          }
        }
      }
    });
  }

  return sharedObserver;
}

/**
 * Observe element resize events
 *
 * Uses a single shared ResizeObserver for efficiency.
 *
 * @param element - Element to observe
 * @param callback - Callback fired when element resizes
 * @returns Cleanup function
 *
 * @example
 * ```ts
 * const cleanup = observeResize(element, ([entry]) => {
 *   console.log("New size:", entry.contentRect.width, entry.contentRect.height);
 * });
 *
 * // Later: cleanup();
 * ```
 */
export function observeResize(
  element: Element,
  callback: ResizeObserverCallback
): () => void {
  if (!element) return () => {};

  const observer = getSharedObserver();

  // Get or create callback set for this element
  let callbacks = elementCallbacks.get(element);
  if (!callbacks) {
    callbacks = new Set();
    elementCallbacks.set(element, callbacks);
    observer.observe(element);
  }

  // Add callback to set
  callbacks.add(callback);

  // Return cleanup function
  return () => {
    const callbacks = elementCallbacks.get(element);
    if (!callbacks) return;

    callbacks.delete(callback);

    // If no more callbacks, stop observing
    if (callbacks.size === 0) {
      observer.unobserve(element);
      elementCallbacks.delete(element);
    }
  };
}

/**
 * Observe element resize and call callback once
 *
 * @param element - Element to observe
 * @param callback - Callback fired once
 * @returns Cleanup function
 */
export function observeResizeOnce(
  element: Element,
  callback: () => void
): () => void {
  let cleanup: (() => void) | null = null;

  cleanup = observeResize(element, () => {
    callback();
    if (cleanup) cleanup();
  });

  return () => {
    if (cleanup) cleanup();
  };
}

/**
 * Wait for element to resize
 *
 * @param element - Element to wait for
 * @returns Promise that resolves on next resize
 */
export function waitForResize(element: Element): Promise<ResizeObserverEntry> {
  return new Promise((resolve) => {
    const cleanup = observeResize(element, ([entry]) => {
      resolve(entry);
      cleanup();
    });
  });
}
