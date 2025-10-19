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

  // Feature: Detach and shrink animation (NEW!)
  initDetachAnimation(root, events);

  // Feature: Mobile menu toggle
  initMobileMenu(root, events);

  // Feature: Theme switcher
  initThemeSwitcher(root, events);

  // Feature: Active nav link highlighting
  initActiveNavLinks(root);

  // Store state and cleanup
  headerStates.set(root, {
    cleanup: () => {
      events.cleanup();
      headerStates.delete(root);
    },
  });
}

/**
 * Detach and shrink animation - triggered by scroll position
 * Animates header width, position, and backdrop opacity
 */
function initDetachAnimation(
  root: HTMLElement,
  events: ReturnType<typeof createEventManager>
): void {
  const nav = root.querySelector<HTMLElement>("nav");
  const navInner = nav?.querySelector<HTMLElement>(".nav-inner");
  const backdrop = navInner?.querySelector<HTMLElement>(".backdrop");

  if (!navInner || !backdrop) {
    console.warn("[Header Detach] Missing elements:", { navInner: !!navInner, backdrop: !!backdrop });
    return;
  }

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    // Set final state immediately without animation
    navInner.style.maxWidth = "932px";
    navInner.style.transform = "translateY(12px)";
    backdrop.style.opacity = "0.95";
    backdrop.style.backdropFilter = "blur(12px)";
    return;
  }

  // Animation parameters
  const SCROLL_THRESHOLD = 2200; // Pixels to complete animation (sweet spot - not too fast, not too slow)
  const MAX_WIDTH_START = 1024; // px (matches max-w-screen-lg)
  const MAX_WIDTH_END = 932; // px (91% - matches deployed final state)
  const TRANSLATE_END = 12; // px (matches deployed version)
  const OPACITY_END = 0.95; // backdrop opacity
  const BLUR_END = 12; // px backdrop blur

  const updateAnimation = (scrollY: number) => {
    const progress = Math.min(scrollY / SCROLL_THRESHOLD, 1);

    // Easing function (ease-out cubic)
    const eased = 1 - Math.pow(1 - progress, 3);

    // Calculate values
    const maxWidth = MAX_WIDTH_START - (MAX_WIDTH_START - MAX_WIDTH_END) * eased;
    const translateY = TRANSLATE_END * eased;
    const opacity = OPACITY_END * eased;
    const blur = BLUR_END * eased;

    // Apply transforms
    navInner.style.maxWidth = `${maxWidth}px`;
    navInner.style.transform = `translateY(${translateY}px)`;
    backdrop.style.opacity = `${opacity}`;

    // Only apply backdrop-filter if supported
    if (CSS.supports("backdrop-filter", "blur(12px)")) {
      backdrop.style.backdropFilter = `blur(${blur}px)`;
    }
  };

  // Check if Lenis smooth scroll is available
  const lenis = (window as any).__lenisInstance;

  if (lenis) {
    // Use Lenis scroll event
    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      updateAnimation(scroll);
    });
  } else {
    // Fallback to native scroll event if Lenis is not available
    const memoizedUpdate = memoizeFrame(() => {
      updateAnimation(window.scrollY);
    });
    events.on(window, "scroll", memoizedUpdate, { passive: true });
  }

  // Initial state
  updateAnimation(window.scrollY || 0);
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
