/**
 * Theme Management Component
 *
 * Centralized theme switching with:
 * - localStorage persistence
 * - System preference detection
 * - Smooth transitions
 * - Sync across multiple toggle buttons
 * - Custom event dispatch
 *
 * Usage:
 * <div data-interactive="theme">
 *   <button data-theme-toggle>Toggle Theme</button>
 * </div>
 */

import { registerInteraction } from "../register";
import { createEventManager } from "../utils/events";
import { dispatchCustomEvent } from "../utils/events";

/** Track initialized theme components */
const initializedComponents = new WeakSet<HTMLElement>();

/** Current theme state */
let currentTheme: "light" | "dark" | null = null;

/**
 * Get preferred color scheme from system
 */
function getSystemTheme(): "light" | "dark" {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

/**
 * Get current theme from DOM or localStorage
 */
function getCurrentTheme(): "light" | "dark" {
  if (currentTheme) return currentTheme;

  // Check DOM first
  const domTheme = document.documentElement.getAttribute("data-theme");
  if (domTheme === "dark" || domTheme === "light") {
    currentTheme = domTheme;
    return currentTheme;
  }

  // Check localStorage
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      currentTheme = stored;
      return currentTheme;
    }
  } catch (error) {
    console.warn("[Theme] Failed to read localStorage:", error);
  }

  // Fallback to system preference
  currentTheme = getSystemTheme();
  return currentTheme;
}

/**
 * Set theme across the application
 */
function setTheme(theme: "light" | "dark", persist = true): void {
  // Update state
  currentTheme = theme;

  // Update DOM with transition class
  document.documentElement.classList.add("theme-transition");
  document.documentElement.setAttribute("data-theme", theme);

  // Remove transition class after animation
  setTimeout(() => {
    document.documentElement.classList.remove("theme-transition");
  }, 300);

  // Persist to localStorage
  if (persist) {
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.warn("[Theme] Failed to save theme preference:", error);
    }
  }

  // Dispatch custom event for other components
  dispatchCustomEvent(document.documentElement, "theme:changed", { theme });
}

/**
 * Toggle theme between light and dark
 */
function toggleTheme(): void {
  const current = getCurrentTheme();
  const newTheme = current === "dark" ? "light" : "dark";
  setTheme(newTheme);
}

/**
 * Initialize theme component
 */
function initTheme(root: HTMLElement): void {
  // Skip if already initialized
  if (initializedComponents.has(root)) return;

  const events = createEventManager();

  // Find all theme toggle buttons
  const toggleButtons = root.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]");

  if (!toggleButtons.length) return;

  // Attach click handlers
  for (const button of toggleButtons) {
    events.on(button, "click", () => {
      toggleTheme();
    });

    // Update button icon/state based on current theme
    updateButtonState(button, getCurrentTheme());
  }

  // Listen for theme changes to update button states
  document.addEventListener("theme:changed", (event: Event) => {
    const customEvent = event as CustomEvent<{ theme: "light" | "dark" }>;
    const theme = customEvent.detail.theme;

    for (const button of toggleButtons) {
      updateButtonState(button, theme);
    }
  });

  initializedComponents.add(root);
}

/**
 * Update theme toggle button state/icon
 */
function updateButtonState(button: HTMLButtonElement, theme: "light" | "dark"): void {
  // Update aria-label for accessibility
  button.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
  );

  // Update aria-pressed state
  button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");

  // Update data attribute for CSS styling
  button.dataset.theme = theme;
}

// Register the theme initializer
registerInteraction("theme", initTheme);

// Export utility functions for use by other modules
export { getCurrentTheme, setTheme, toggleTheme };
