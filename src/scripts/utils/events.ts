/**
 * Event handling utilities with modern best practices
 *
 * Provides helpers for event delegation, AbortController-based cleanup,
 * and efficient event listener management.
 */

import type { DelegationOptions } from "../types";

/**
 * Event delegation helper with type safety
 *
 * Attaches a single listener to a parent element that handles events
 * from matching child elements. Much more efficient than attaching
 * individual listeners to each child.
 *
 * @param parent - Parent element to attach listener to
 * @param eventType - Event type (e.g., "click", "input")
 * @param selector - CSS selector for target elements
 * @param handler - Event handler function
 * @param options - Delegation options including AbortSignal
 * @returns Cleanup function
 *
 * @example
 * ```ts
 * const cleanup = delegate(
 *   container,
 *   "click",
 *   "[data-nav-link]",
 *   (e, target) => {
 *     e.preventDefault();
 *     console.log("Clicked:", target.href);
 *   }
 * );
 *
 * // Later: cleanup();
 * ```
 */
export function delegate<K extends keyof HTMLElementEventMap>(
  parent: HTMLElement,
  eventType: K,
  selector: string,
  handler: (event: HTMLElementEventMap[K], target: HTMLElement) => void,
  options: Omit<DelegationOptions, "selector"> = {}
): () => void {
  const listener = (event: HTMLElementEventMap[K]) => {
    const target = (event.target as HTMLElement).closest<HTMLElement>(selector);
    if (!target) return;
    if (!parent.contains(target)) return;

    handler(event, target);
  };

  parent.addEventListener(eventType, listener as EventListener, {
    signal: options.signal,
    ...options.options,
  });

  return () => {
    parent.removeEventListener(eventType, listener as EventListener);
  };
}

/**
 * Create managed event listeners with AbortController
 *
 * Returns an object with methods to add listeners and cleanup all at once.
 * Useful for components that attach multiple listeners.
 *
 * @returns EventManager object
 *
 * @example
 * ```ts
 * const events = createEventManager();
 *
 * events.on(window, "scroll", handleScroll, { passive: true });
 * events.on(button, "click", handleClick);
 *
 * // Cleanup all listeners at once
 * events.cleanup();
 * ```
 */
export function createEventManager() {
  const controller = new AbortController();
  const { signal } = controller;

  return {
    /**
     * Add event listener with automatic cleanup support
     */
    on<K extends keyof HTMLElementEventMap>(
      element: HTMLElement | Window | Document,
      eventType: K,
      handler: (event: HTMLElementEventMap[K]) => void,
      options: AddEventListenerOptions = {}
    ): void {
      element.addEventListener(
        eventType as string,
        handler as EventListener,
        { signal, ...options }
      );
    },

    /**
     * Add delegated event listener
     */
    delegate<K extends keyof HTMLElementEventMap>(
      parent: HTMLElement,
      eventType: K,
      selector: string,
      handler: (event: HTMLElementEventMap[K], target: HTMLElement) => void,
      options: AddEventListenerOptions = {}
    ): void {
      delegate(parent, eventType, selector, handler, { signal, options });
    },

    /**
     * Remove all managed event listeners
     */
    cleanup(): void {
      controller.abort();
    },

    /**
     * Get the AbortSignal for manual listener registration
     */
    get signal(): AbortSignal {
      return signal;
    },
  };
}

/**
 * Dispatch custom event with type safety
 *
 * @param element - Element to dispatch from
 * @param eventName - Custom event name
 * @param detail - Event detail payload
 * @param options - Event options
 *
 * @example
 * ```ts
 * dispatchCustomEvent(element, "menu:opened", { menuId: "main" });
 * ```
 */
export function dispatchCustomEvent<T = any>(
  element: HTMLElement,
  eventName: string,
  detail?: T,
  options: Omit<CustomEventInit<T>, "detail"> = {}
): void {
  const event = new CustomEvent(eventName, {
    detail,
    bubbles: true,
    cancelable: true,
    ...options,
  });

  element.dispatchEvent(event);
}

/**
 * Wait for event to fire
 *
 * Returns a promise that resolves when the specified event fires.
 *
 * @param element - Element to listen to
 * @param eventType - Event type to wait for
 * @param options - Event listener options
 * @returns Promise that resolves with the event
 *
 * @example
 * ```ts
 * await waitForEvent(image, "load");
 * console.log("Image loaded!");
 * ```
 */
export function waitForEvent<K extends keyof HTMLElementEventMap>(
  element: HTMLElement,
  eventType: K,
  options: AddEventListenerOptions = {}
): Promise<HTMLElementEventMap[K]> {
  return new Promise((resolve) => {
    element.addEventListener(
      eventType,
      (event) => resolve(event),
      { once: true, ...options }
    );
  });
}

/**
 * Debounced event listener
 *
 * @param element - Element to listen to
 * @param eventType - Event type
 * @param handler - Event handler
 * @param delay - Debounce delay in milliseconds
 * @param options - Event listener options
 * @returns Cleanup function
 *
 * @example
 * ```ts
 * const cleanup = onDebounced(input, "input", handleInput, 300);
 * ```
 */
export function onDebounced<K extends keyof HTMLElementEventMap>(
  element: HTMLElement | Window | Document,
  eventType: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  delay: number,
  options: AddEventListenerOptions = {}
): () => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const debouncedHandler = (event: HTMLElementEventMap[K]) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      handler(event);
      timeoutId = null;
    }, delay);
  };

  element.addEventListener(
    eventType as string,
    debouncedHandler as EventListener,
    options
  );

  return () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    element.removeEventListener(
      eventType as string,
      debouncedHandler as EventListener
    );
  };
}
