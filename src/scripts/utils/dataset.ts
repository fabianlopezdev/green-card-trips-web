/**
 * Data attribute parsing utilities
 *
 * Safe helpers for extracting typed values from data-* attributes
 * with proper error handling and defaults.
 */

import type { DatasetOptions } from "../types";

/**
 * Parse space-separated list from data attribute
 *
 * @param value - Data attribute value
 * @returns Array of trimmed strings, empty array if undefined/empty
 *
 * @example
 * ```ts
 * const interactions = parseDatasetList(element.dataset.interactive);
 * // "header theme" -> ["header", "theme"]
 * // undefined -> []
 * ```
 */
export function parseDatasetList(value: string | undefined): string[] {
  if (!value) return [];
  return value.split(" ").map((s) => s.trim()).filter(Boolean);
}

/**
 * Get data attribute value with type coercion
 *
 * @param element - HTML element
 * @param key - Data attribute key (without 'data-' prefix)
 * @param options - Parsing options
 * @returns Typed value or default
 *
 * @example
 * ```ts
 * // <div data-delay="300" data-enabled="true">
 * const delay = getDataAttr(el, "delay", { asNumber: true }); // 300
 * const enabled = getDataAttr(el, "enabled", { asBoolean: true }); // true
 * ```
 */
export function getDataAttr(
  element: HTMLElement,
  key: string,
  options: DatasetOptions = {}
): string | number | boolean | undefined {
  const value = element.dataset[key];

  // Return default if attribute missing
  if (value === undefined) {
    return options.defaultValue;
  }

  // Parse as number
  if (options.asNumber) {
    const num = Number(value);
    return Number.isNaN(num) ? options.defaultValue : num;
  }

  // Parse as boolean
  if (options.asBoolean) {
    return value === "true" || value === "";
  }

  return value;
}

/**
 * Extract all data-* options with a specific prefix
 *
 * @param element - HTML element
 * @param prefix - Prefix to match (without 'data-')
 * @returns Object with camelCased keys
 *
 * @example
 * ```ts
 * // <div data-anim-delay="300" data-anim-duration="600">
 * const opts = getDataOptions(el, "anim");
 * // { delay: "300", duration: "600" }
 * ```
 */
export function getDataOptions(
  element: HTMLElement,
  prefix: string
): Record<string, string> {
  const result: Record<string, string> = {};
  const prefixLength = prefix.length;

  for (const key in element.dataset) {
    if (key.startsWith(prefix)) {
      const optionKey = key.slice(prefixLength);
      // Convert to camelCase (e.g., "Delay" -> "delay")
      const camelKey = optionKey.charAt(0).toLowerCase() + optionKey.slice(1);
      result[camelKey] = element.dataset[key]!;
    }
  }

  return result;
}

/**
 * Check if element has specific data attribute
 *
 * @param element - HTML element
 * @param key - Data attribute key
 * @returns True if attribute exists
 *
 * @example
 * ```ts
 * if (hasDataAttr(el, "enabled")) {
 *   // ...
 * }
 * ```
 */
export function hasDataAttr(element: HTMLElement, key: string): boolean {
  return element.dataset[key] !== undefined;
}

/**
 * Parse animation options from data attributes
 *
 * @param element - HTML element
 * @returns Animation options object
 *
 * @example
 * ```ts
 * // <div data-animate="fade-in" data-delay="200" data-duration="600">
 * const opts = parseAnimationOptions(el);
 * // { animation: "fade-in", delay: 200, duration: 600 }
 * ```
 */
export function parseAnimationOptions(element: HTMLElement) {
  return {
    animation: element.dataset.animate,
    delay: getDataAttr(element, "delay", { asNumber: true, defaultValue: 0 }) as number,
    duration: getDataAttr(element, "duration", { asNumber: true, defaultValue: 600 }) as number,
    threshold: getDataAttr(element, "threshold", { asNumber: true, defaultValue: 0.1 }) as number,
    once: getDataAttr(element, "once", { asBoolean: true, defaultValue: true }) as boolean,
  };
}
