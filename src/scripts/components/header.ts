/**
 * Header Component Interactivity
 *
 * Features:
 * - Sticky header with show/hide on scroll
 * - Mobile menu toggle
 * - Theme switcher with localStorage persistence
 * - Active nav link highlighting based on scroll position
 * - Smooth anchor scrolling
 */

import { registerInteraction } from "../register";
import { memoizeFrame } from "../utils/raf";
import { createEventManager } from "../utils/events";
import { observe } from "../observers/intersection";

/** Per-element state management using WeakMap */
const headerStates = new WeakMap<
  HTMLElement,
  {
    lastScrollY: number;
    isVisible: boolean;
    cleanup: () => void;
  }
>();

/**
 * Initialize header interactivity
 */
function initHeader(root: HTMLElement): void {
  // Skip if already initialized
  if (headerStates.has(root)) return;

  const events = createEventManager();
  let lastScrollY = 0;
  let isVisible = true;

  // Feature: Sticky header show/hide on scroll
  initStickyHeader(root, events);

  // Feature: Mobile menu toggle
  initMobileMenu(root, events);

  // Feature: Theme switcher
  initThemeSwitcher(root, events);

  // Feature: Active nav link highlighting
  initActiveNavLinks(root);

  // Store state and cleanup
  headerStates.set(root, {
    lastScrollY,
    isVisible,
    cleanup: () => {
      events.cleanup();
      headerStates.delete(root);
    },
  });
}

/**
 * Sticky header behavior - show/hide on scroll
 */
function initStickyHeader(root: HTMLElement, events: ReturnType<typeof createEventManager>): void {
  const isSticky = root.dataset.sticky === "true";
  if (!isSticky) return;

  let lastScrollY = window.scrollY;
  let isVisible = true;

  const handleScroll = memoizeFrame(() => {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY;
    const scrollThreshold = 100; // Minimum scroll before hiding

    if (currentScrollY < scrollThreshold) {
      // Always show at top of page
      if (!isVisible) {
        root.style.transform = "translateY(0)";
        isVisible = true;
      }
    } else if (scrollingDown && isVisible) {
      // Hide when scrolling down
      root.style.transform = "translateY(-100%)";
      isVisible = false;
    } else if (!scrollingDown && !isVisible) {
      // Show when scrolling up
      root.style.transform = "translateY(0)";
      isVisible = true;
    }

    lastScrollY = currentScrollY;
  });

  // Add smooth transition
  root.style.transition = "transform 0.3s ease-in-out";

  events.on(window, "scroll", handleScroll, { passive: true });
}

/**
 * Mobile menu toggle behavior
 */
function initMobileMenu(root: HTMLElement, events: ReturnType<typeof createEventManager>): void {
  const mobileMenuDetails = root.querySelector<HTMLDetailsElement>("[data-mobile-menu]");
  if (!mobileMenuDetails) return;

  // Close menu when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (!mobileMenuDetails.open) return;

    const target = event.target as HTMLElement;
    if (!mobileMenuDetails.contains(target)) {
      mobileMenuDetails.open = false;
    }
  };

  events.on(document, "click", handleClickOutside);

  // Close menu when clicking nav links
  events.delegate(mobileMenuDetails, "click", "[data-nav-link]", (e) => {
    mobileMenuDetails.open = false;
  });

  // Close menu on escape key
  events.on(document, "keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape" && mobileMenuDetails.open) {
      mobileMenuDetails.open = false;
    }
  });
}

/**
 * Theme switcher functionality
 */
function initThemeSwitcher(root: HTMLElement, events: ReturnType<typeof createEventManager>): void {
  const themeToggles = root.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]");
  if (!themeToggles.length) return;

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Update DOM
    document.documentElement.setAttribute("data-theme", newTheme);

    // Persist to localStorage
    try {
      localStorage.setItem("theme", newTheme);
    } catch (error) {
      console.warn("[Header] Failed to save theme preference:", error);
    }

    // Optional: Dispatch custom event for other components
    const event = new CustomEvent("theme:changed", {
      detail: { theme: newTheme },
      bubbles: true,
    });
    document.dispatchEvent(event);
  };

  // Attach click handlers to all theme toggles
  for (const toggle of themeToggles) {
    events.on(toggle, "click", toggleTheme);
  }
}

/**
 * Active nav link highlighting based on scroll position
 */
function initActiveNavLinks(root: HTMLElement): void {
  const navLinks = root.querySelectorAll<HTMLAnchorElement>("[data-nav-link]");
  if (!navLinks.length) return;

  // Build map of section IDs to nav links
  const sectionMap = new Map<string, HTMLAnchorElement>();

  for (const link of navLinks) {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) continue;

    const sectionId = href.slice(1); // Remove #
    sectionMap.set(sectionId, link);
  }

  if (!sectionMap.size) return;

  // Observe all sections
  const activeClass = "text-primary";
  const observedSections = new Set<string>();

  for (const [sectionId, link] of sectionMap) {
    const section = document.getElementById(sectionId);
    if (!section) continue;

    observe(
      section,
      ([entry]) => {
        if (entry.isIntersecting) {
          // Mark this section as visible
          observedSections.add(sectionId);

          // Remove active class from all links
          for (const navLink of navLinks) {
            navLink.classList.remove(activeClass);
          }

          // Add active class to current section's link
          link.classList.add(activeClass);
        } else {
          observedSections.delete(sectionId);
        }
      },
      { threshold: 0.3, rootMargin: "-20% 0px -20% 0px" }
    );
  }
}

// Register the header initializer
registerInteraction("header", initHeader);
