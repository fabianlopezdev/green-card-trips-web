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

  // Shared state for menu integration with detach animation
  const sharedState = {
    menuOpen: false,
    onMenuToggle: null as ((isOpen: boolean) => void) | null,
  };

  // Feature: Detach and shrink animation (NEW!)
  initDetachAnimation(root, events, sharedState);

  // Feature: Mobile menu toggle
  initMobileMenu(root, events, sharedState);

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
 * Works on both mobile and desktop with different width behaviors
 * Mobile menu integration: Un-detaches when menu opens, re-detaches when menu closes
 */
function initDetachAnimation(
  root: HTMLElement,
  events: ReturnType<typeof createEventManager>,
  sharedState: { menuOpen: boolean; onMenuToggle: ((isOpen: boolean) => void) | null }
): void {
  const nav = root.querySelector<HTMLElement>("nav");
  const navInner = nav?.querySelector<HTMLElement>(".nav-inner");
  const backdrop = navInner?.querySelector<HTMLElement>(".backdrop");

  if (!navInner || !backdrop) {
    console.warn("[Header Detach] Missing elements:", { navInner: !!navInner, backdrop: !!backdrop });
    return;
  }

  // Check if we're on mobile (below nav breakpoint: 932px)
  const isMobile = window.matchMedia("(max-width: 931px)").matches;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    // Set final state immediately without animation
    const finalWidth = isMobile ? `${window.innerWidth * 0.95}px` : "932px";
    navInner.style.setProperty('width', finalWidth, 'important');
    navInner.style.setProperty('min-width', finalWidth, 'important');
    navInner.style.setProperty('max-width', finalWidth, 'important');
    navInner.style.transform = "translateY(12px)";
    backdrop.style.opacity = "0.8";
    backdrop.style.backdropFilter = "blur(12px)";
    return;
  }

  // Animation parameters (mobile shrinks to 95% width, desktop shrinks to 932px)
  const SCROLL_THRESHOLD = 2200; // Pixels to complete animation (sweet spot - not too fast, not too slow)
  const MAX_WIDTH_START = isMobile ? window.innerWidth : 1024; // 100vw on mobile, 1024px on desktop
  const MAX_WIDTH_END = isMobile ? window.innerWidth * 0.95 : 932; // 95vw on mobile, 932px on desktop
  const TRANSLATE_END = 12; // px (same for mobile and desktop)
  const OPACITY_END = 0.8; // backdrop opacity (same for mobile and desktop, matches bg-base-100/80)
  const BLUR_END = 12; // px backdrop blur (same for mobile and desktop)

  const updateAnimation = (scrollY: number, force = false) => {
    // If mobile menu is open (on mobile only), force header to attached state
    if (isMobile && sharedState.menuOpen) {
      navInner.style.setProperty('width', `${MAX_WIDTH_START}px`, 'important');
      navInner.style.setProperty('min-width', `${MAX_WIDTH_START}px`, 'important');
      navInner.style.setProperty('max-width', `${MAX_WIDTH_START}px`, 'important');
      navInner.style.transform = `translateY(0px)`;
      backdrop.style.opacity = `0`;
      if (CSS.supports("backdrop-filter", "blur(12px)")) {
        backdrop.style.backdropFilter = `blur(0px)`;
      }
      return;
    }

    const progress = Math.min(scrollY / SCROLL_THRESHOLD, 1);

    // Easing function (ease-out cubic)
    const eased = 1 - Math.pow(1 - progress, 3);

    // Calculate values
    const maxWidth = MAX_WIDTH_START - (MAX_WIDTH_START - MAX_WIDTH_END) * eased;
    const translateY = TRANSLATE_END * eased;
    const opacity = OPACITY_END * eased;
    const blur = BLUR_END * eased;

    // Apply transforms
    navInner.style.setProperty('width', `${maxWidth}px`, 'important');
    navInner.style.setProperty('min-width', `${maxWidth}px`, 'important');
    navInner.style.setProperty('max-width', `${maxWidth}px`, 'important');
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

  // Expose callback for mobile menu toggle (only on mobile)
  if (isMobile) {
    sharedState.onMenuToggle = (isOpen: boolean) => {
      // Add faster transition class for menu open/close
      navInner.style.transition = 'width 0.3s ease-out, min-width 0.3s ease-out, max-width 0.3s ease-out, transform 0.3s ease-out';
      backdrop.style.transition = 'opacity 0.3s ease-out, backdrop-filter 0.3s ease-out';

      // Trigger animation update
      updateAnimation(window.scrollY || 0);

      // Reset transition to default after animation completes
      setTimeout(() => {
        navInner.style.transition = '';
        backdrop.style.transition = '';
      }, 300);
    };
  }

  // Initial state
  updateAnimation(window.scrollY || 0);
}

/**
 * Mobile menu toggle behavior with animations
 * Integrates with header detach animation to un-detach when menu opens
 */
function initMobileMenu(
  root: HTMLElement,
  events: ReturnType<typeof createEventManager>,
  sharedState: { menuOpen: boolean; onMenuToggle: ((isOpen: boolean) => void) | null }
): void {
  const mobileMenuDetails = root.querySelector<HTMLDetailsElement>("[data-mobile-menu]");
  if (!mobileMenuDetails) return;

  const overlay = mobileMenuDetails.querySelector<HTMLElement>("[data-mobile-menu-overlay]");
  if (!overlay) return;

  // Get animatable elements
  const menuItems = mobileMenuDetails.querySelectorAll<HTMLElement>("[data-menu-item]");
  const themeSection = mobileMenuDetails.querySelector<HTMLElement>("[data-menu-theme]");
  const languageSection = mobileMenuDetails.querySelector<HTMLElement>("[data-menu-language]");
  const storesSection = mobileMenuDetails.querySelector<HTMLElement>("[data-menu-stores]");

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /**
   * Open menu with staggered animations
   */
  const openMenu = () => {
    // Lock body scroll
    document.body.style.overflow = "hidden";

    if (prefersReducedMotion) {
      // Skip animations, show immediately
      overlay.classList.remove("mobile-menu-hidden");
      overlay.classList.add("mobile-menu-visible");
      menuItems.forEach((item) => {
        item.classList.remove("menu-item-hidden");
        item.classList.add("menu-item-visible");
      });
      [themeSection, languageSection, storesSection].forEach((section) => {
        if (section) {
          section.classList.remove("menu-section-hidden");
          section.classList.add("menu-section-visible");
        }
      });
      return;
    }

    // Animate overlay
    overlay.classList.remove("mobile-menu-hidden");
    overlay.classList.add("mobile-menu-visible");

    // First, ensure all elements are in hidden state
    menuItems.forEach((item) => {
      item.classList.remove("menu-item-visible");
      item.classList.add("menu-item-hidden");
    });

    [themeSection, languageSection, storesSection].forEach((section) => {
      if (section) {
        section.classList.remove("menu-section-visible");
        section.classList.add("menu-section-hidden");
      }
    });

    // Use requestAnimationFrame to ensure browser paints the hidden state before triggering animations
    requestAnimationFrame(() => {
      // Staggered animation sequence (like hero.ts)
      const sequence: Array<{ element: HTMLElement | null; delay: number }> = [
        { element: themeSection, delay: 100 },
      ];

      // Add menu items with staggered delays
      menuItems.forEach((item, index) => {
        sequence.push({ element: item, delay: 150 + index * 80 });
      });

      // Add language and stores sections
      sequence.push({ element: languageSection, delay: 150 + menuItems.length * 80 + 80 });
      sequence.push({ element: storesSection, delay: 150 + menuItems.length * 80 + 160 });

      // Trigger animations
      sequence.forEach(({ element, delay }) => {
        if (!element) return;

        setTimeout(() => {
          // Check if it's a menu item or a section and apply the correct classes
          if (element.hasAttribute('data-menu-item')) {
            element.classList.remove("menu-item-hidden");
            element.classList.add("menu-item-visible");
          } else {
            element.classList.remove("menu-section-hidden");
            element.classList.add("menu-section-visible");
          }
        }, delay);
      });
    });
  };

  /**
   * Close menu and reset animations
   */
  const closeMenu = () => {
    // Unlock body scroll
    document.body.style.overflow = "";

    // Reset overlay
    overlay.classList.remove("mobile-menu-visible");
    overlay.classList.add("mobile-menu-hidden");

    // Reset all animated elements
    menuItems.forEach((item) => {
      item.classList.remove("menu-item-visible");
      item.classList.add("menu-item-hidden");
    });

    [themeSection, languageSection, storesSection].forEach((section) => {
      if (section) {
        section.classList.remove("menu-section-visible");
        section.classList.add("menu-section-hidden");
      }
    });
  };

  // Listen to toggle event (fired when details open/close state changes)
  mobileMenuDetails.addEventListener("toggle", () => {
    const isOpen = mobileMenuDetails.open;

    // Update shared state
    sharedState.menuOpen = isOpen;

    // Trigger header detach animation callback (un-detach/re-detach)
    if (sharedState.onMenuToggle) {
      sharedState.onMenuToggle(isOpen);
    }

    // Trigger menu open/close animations
    if (isOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  });

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
  events.delegate(mobileMenuDetails, "click", "[data-nav-link]", () => {
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
