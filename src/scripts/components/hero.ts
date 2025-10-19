/**
 * Hero Section Interactivity
 *
 * Features:
 * - Orchestrated page load animations (staggered fade + slide up)
 * - Scroll-based phone screenshot transitions (cross-fade between 3 screenshots)
 */

import { registerInteraction } from "../register";
import { createEventManager } from "../utils/events";

/** Per-element state management using WeakMap */
const heroStates = new WeakMap<
  HTMLElement,
  {
    cleanup: () => void;
  }
>();

/**
 * Initialize hero interactivity
 */
function initHero(root: HTMLElement): void {
  // Skip if already initialized
  if (heroStates.has(root)) return;

  const events = createEventManager();

  // Feature: Page load orchestrated animations
  initPageLoadAnimations(root);

  // Feature: Scroll-based screenshot transitions
  initScreenshotTransitions(root, events);

  // Feature: Gradient blob animations
  initGradientBlobs(root, events);

  // Store state and cleanup
  heroStates.set(root, {
    cleanup: () => {
      events.cleanup();
      heroStates.delete(root);
    },
  });
}

/**
 * Orchestrated page load animations
 * Elements appear one by one with staggered delays
 */
function initPageLoadAnimations(root: HTMLElement): void {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    // Skip animations, show everything immediately
    const elements = root.querySelectorAll<HTMLElement>(
      "[data-hero-heading], [data-hero-subtitle], [data-hero-cta], [data-hero-avatars], [data-hero-phone], [data-hero-highlight]"
    );
    elements.forEach((el) => el.classList.add("hero-visible"));
    return;
  }

  // Find all animatable elements
  const heading = root.querySelector<HTMLElement>("[data-hero-heading]");
  const subtitle = root.querySelector<HTMLElement>("[data-hero-subtitle]");
  const cta = root.querySelector<HTMLElement>("[data-hero-cta]");
  const avatars = root.querySelector<HTMLElement>("[data-hero-avatars]");
  const phone = root.querySelector<HTMLElement>("[data-hero-phone]");
  const highlight = root.querySelector<HTMLElement>("[data-hero-highlight]");

  // Animation sequence with delays (in milliseconds)
  const sequence: Array<{ element: HTMLElement | null; delay: number }> = [
    { element: heading, delay: 150 },
    { element: subtitle, delay: 300 },
    { element: cta, delay: 450 },
    { element: avatars, delay: 600 },
    { element: phone, delay: 750 },
    { element: highlight, delay: 900 },
  ];

  // Trigger animations with staggered delays
  sequence.forEach(({ element, delay }) => {
    if (!element) return;

    setTimeout(() => {
      element.classList.add("hero-visible");
    }, delay);
  });
}

/**
 * Scroll-based screenshot transitions
 * Replicates Framer Motion's scroll-linked slide animations
 * - Even indices slide LEFT (translateX: 0 → -100%)
 * - Odd indices slide UP (translateY: 0 → -100%)
 * - Index 0 stays static (final revealed screenshot)
 */
function initScreenshotTransitions(
  root: HTMLElement,
  events: ReturnType<typeof createEventManager>
): void {
  const scrollContainer = root.querySelector<HTMLElement>("[data-hero-phone-container]");
  const screenshots = root.querySelectorAll<HTMLImageElement>("[data-hero-screenshot]");

  if (!scrollContainer || screenshots.length === 0) {
    return;
  }

  const totalCount = screenshots.length;

  const updateScreenshots = () => {
    // Get scroll container position and height
    const containerRect = scrollContainer.getBoundingClientRect();
    const containerTop = containerRect.top + window.scrollY;
    const containerHeight = containerRect.height;

    // Calculate scroll progress through the container (0 to 1)
    const scrollY = window.scrollY;
    const scrollStart = containerTop;
    const scrollEnd = containerTop + containerHeight - window.innerHeight;
    const scrollRange = scrollEnd - scrollStart;

    const scrollYProgress = Math.max(0, Math.min(1, (scrollY - scrollStart) / scrollRange));

    screenshots.forEach((screenshot, index) => {
      let translateX = 0;
      let translateY = 0;

      // Even indices (2, 4, ...) slide LEFT
      if (index > 0 && index % 2 === 0) {
        const i = totalCount - index;
        const rangeStart = (i - 1) / totalCount;
        const rangeEnd = i / totalCount;

        // Map scroll progress in this range to 0-1
        let progress = 0;
        if (scrollYProgress >= rangeStart && scrollYProgress <= rangeEnd) {
          progress = (scrollYProgress - rangeStart) / (rangeEnd - rangeStart);
        } else if (scrollYProgress > rangeEnd) {
          progress = 1;
        }

        translateX = -progress * 100; // Slide left
      }

      // Odd indices (1, 3, ...) slide UP
      if (index % 2 === 1) {
        const i = totalCount - index;
        const rangeStart = (i - 1) / totalCount;
        const rangeEnd = i / totalCount;

        // Map scroll progress in this range to 0-1
        let progress = 0;
        if (scrollYProgress >= rangeStart && scrollYProgress <= rangeEnd) {
          progress = (scrollYProgress - rangeStart) / (rangeEnd - rangeStart);
        } else if (scrollYProgress > rangeEnd) {
          progress = 1;
        }

        translateY = -progress * 100; // Slide up
      }

      // Apply transform directly (no CSS transition)
      screenshot.style.transform = `translate(${translateX}%, ${translateY}%)`;
    });
  };

  // Check if Lenis smooth scroll is available
  const lenis = (window as any).__lenisInstance;

  if (lenis) {
    // Use Lenis scroll event
    lenis.on("scroll", () => {
      updateScreenshots();
    });
  } else {
    // Fallback to native scroll event if Lenis is not available
    events.on(window, "scroll", updateScreenshots, { passive: true });
  }

  // Initial state
  updateScreenshots();
}

/**
 * Gradient blob animations
 * - Page load scale/fade-in animations (staggered)
 * - Continuous floating motion using CSS keyframes
 * - Parallax scroll effect on container
 */
function initGradientBlobs(root: HTMLElement, events: ReturnType<typeof createEventManager>): void {
  const scrollContainer = root.querySelector<HTMLElement>("[data-hero-phone-container]");
  const blobsContainer = root.querySelector<HTMLElement>("[data-hero-blobs]");
  const blobs = root.querySelectorAll<HTMLElement>("[data-hero-blob]");

  if (!scrollContainer || !blobsContainer || blobs.length === 0) {
    return;
  }

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Blob configurations matching the original React code
  const blobConfigs = [
    {
      // Blob 1 - Large
      width: "450px",
      height: "500px",
      left: "100px",
      top: "150px",
      background: "linear-gradient(135deg, oklch(var(--p) / 0.4) 0%, oklch(var(--s) / 0.3) 100%)",
      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
      blur: "60px",
      animationName: "blob-float-1",
      duration: "10s",
      delay: "0s",
      scaleDelay: 0,
    },
    {
      // Blob 2 - Medium
      width: "380px",
      height: "420px",
      left: "300px",
      top: "250px",
      background: "linear-gradient(225deg, oklch(var(--s) / 0.35) 0%, oklch(var(--p) / 0.25) 100%)",
      borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
      blur: "50px",
      animationName: "blob-float-2",
      duration: "12s",
      delay: "0.5s",
      scaleDelay: 200,
    },
    {
      // Blob 3 - Small
      width: "320px",
      height: "350px",
      left: "400px",
      top: "80px",
      background: "linear-gradient(315deg, oklch(var(--s) / 0.3) 0%, oklch(var(--p) / 0.35) 100%)",
      borderRadius: "40% 60% 60% 40% / 70% 30% 70% 30%",
      blur: "45px",
      animationName: "blob-float-3",
      duration: "8s",
      delay: "1s",
      scaleDelay: 400,
    },
  ];

  // Apply initial styles and animations to each blob
  blobs.forEach((blob, index) => {
    const config = blobConfigs[index];
    if (!config) return;

    // Set base styles
    Object.assign(blob.style, {
      position: "absolute",
      width: config.width,
      height: config.height,
      left: config.left,
      top: config.top,
      background: config.background,
      borderRadius: config.borderRadius,
      filter: `blur(${config.blur})`,
      pointerEvents: "none",
    });

    if (prefersReducedMotion) {
      // Just show blobs without animations
      blob.style.opacity = "1";
      blob.style.transform = "scale(1)";
    } else {
      // Initial hidden state for page load animation
      blob.style.opacity = "0";
      blob.style.transform = "scale(0)";

      // Trigger page load animation (scale + fade in)
      setTimeout(() => {
        blob.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        blob.style.opacity = "1";
        blob.style.transform = "scale(1)";

        // After scale animation completes, add floating animation
        setTimeout(() => {
          blob.style.transition = ""; // Remove transition
          blob.style.animation = `${config.animationName} ${config.duration} ${config.delay} ease-in-out infinite`;
        }, 800);
      }, config.scaleDelay);
    }
  });

  // Set container base styles
  Object.assign(blobsContainer.style, {
    width: "800px",
    height: "800px",
    position: "absolute",
    overflow: "visible",
    pointerEvents: "none",
  });

  if (prefersReducedMotion) {
    // No parallax effect
    return;
  }

  // Parallax scroll effect on blob container
  const updateParallax = () => {
    const containerRect = scrollContainer.getBoundingClientRect();
    const containerTop = containerRect.top + window.scrollY;
    const containerHeight = containerRect.height;
    const scrollY = window.scrollY;
    const scrollRange = containerTop + containerHeight - window.innerHeight - containerTop;
    const scrollYProgress = Math.max(0, Math.min(1, (scrollY - containerTop) / scrollRange));

    // Parallax: blobs move from 0% to -30% as we scroll through the hero section
    // Range: 0.85 to 1.0 (last 15% of scroll)
    let parallaxProgress = 0;
    if (scrollYProgress >= 0.85) {
      parallaxProgress = (scrollYProgress - 0.85) / 0.15; // Map 0.85-1.0 to 0-1
    }

    const yOffset = -30 * parallaxProgress; // 0% to -30%
    blobsContainer.style.transform = `translateY(${yOffset}%)`;
  };

  // Check if Lenis smooth scroll is available
  const lenis = (window as any).__lenisInstance;

  if (lenis) {
    lenis.on("scroll", () => {
      updateParallax();
    });
  } else {
    events.on(window, "scroll", updateParallax, { passive: true });
  }

  // Initial state
  updateParallax();
}

// Register the hero initializer
registerInteraction("hero", initHero);
