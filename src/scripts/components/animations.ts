/**
 * Scroll Animation Component
 *
 * Provides scroll-triggered animations for elements using IntersectionObserver.
 *
 * Features:
 * - Fade in/out animations
 * - Slide animations (up/down/left/right)
 * - Stagger animations for lists
 * - Parallax effects
 * - Respects prefers-reduced-motion
 *
 * Usage:
 * <section data-interactive="animations">
 *   <div data-animate="fade-in" data-delay="0">...</div>
 *   <div data-animate="slide-up" data-delay="100">...</div>
 *   <ul data-stagger="150">
 *     <li>...</li>
 *   </ul>
 *   <div data-parallax="0.5">...</div>
 * </section>
 */

import { registerInteraction } from "../register";
import { observe } from "../observers/intersection";
import { parseAnimationOptions, getDataAttr } from "../utils/dataset";
import { memoizeFrame } from "../utils/raf";

/** Track initialized elements to prevent double-initialization */
const initializedElements = new WeakSet<Element>();

/**
 * Initialize scroll animations within a section
 */
function initAnimations(root: HTMLElement): void {
  // Skip if already initialized
  if (initializedElements.has(root)) return;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    // Skip animations, just show everything
    showAllAnimatedElements(root);
    return;
  }

  // Find all elements with data-animate
  const animatedElements = root.querySelectorAll<HTMLElement>("[data-animate]");
  for (const element of animatedElements) {
    initAnimatedElement(element);
  }

  // Find all stagger containers
  const staggerContainers = root.querySelectorAll<HTMLElement>("[data-stagger]");
  for (const container of staggerContainers) {
    initStaggerAnimation(container);
  }

  // Find all parallax elements
  const parallaxElements = root.querySelectorAll<HTMLElement>("[data-parallax]");
  for (const element of parallaxElements) {
    initParallaxElement(element);
  }

  initializedElements.add(root);
}

/**
 * Initialize a single animated element
 */
function initAnimatedElement(element: HTMLElement): void {
  if (initializedElements.has(element)) return;

  const options = parseAnimationOptions(element);
  const { animation, delay, threshold, once } = options;

  if (!animation) return;

  // Add initial state classes (both hidden state and animation type)
  element.classList.add("animate-hidden", `animate-${animation}`);

  // Observe element
  observe(
    element,
    ([entry]) => {
      if (entry.isIntersecting) {
        // Trigger animation after delay
        setTimeout(() => {
          element.classList.remove("animate-hidden");
          element.classList.add("animate-visible");
        }, delay);
      } else if (!once) {
        // Reset animation if not "once"
        element.classList.add("animate-hidden");
        element.classList.remove("animate-visible");
      }
    },
    { threshold }
  );

  initializedElements.add(element);
}

/**
 * Initialize stagger animation for list items
 */
function initStaggerAnimation(container: HTMLElement): void {
  if (initializedElements.has(container)) return;

  const staggerDelay = getDataAttr(container, "stagger", {
    asNumber: true,
    defaultValue: 100,
  }) as number;

  const animation = container.dataset.staggerAnimate || "fade-in";
  const threshold = getDataAttr(container, "threshold", {
    asNumber: true,
    defaultValue: 0.1,
  }) as number;

  // Get all direct children
  const children = Array.from(container.children) as HTMLElement[];

  // Add hidden class to all children
  for (const child of children) {
    child.classList.add("animate-hidden");
  }

  // Observe container
  observe(
    container,
    ([entry]) => {
      if (entry.isIntersecting) {
        // Animate children with stagger
        children.forEach((child, index) => {
          setTimeout(() => {
            child.classList.remove("animate-hidden");
            child.classList.add("animate-visible", `animate-${animation}`);
          }, index * staggerDelay);
        });
      }
    },
    { threshold }
  );

  initializedElements.add(container);
}

/**
 * Initialize parallax effect
 */
function initParallaxElement(element: HTMLElement): void {
  if (initializedElements.has(element)) return;

  const speed = getDataAttr(element, "parallax", {
    asNumber: true,
    defaultValue: 0.5,
  }) as number;

  const direction = element.dataset.parallaxDirection || "vertical";

  let elementTop = 0;
  let elementHeight = 0;

  // Calculate element position
  const updateElementMetrics = () => {
    const rect = element.getBoundingClientRect();
    elementTop = rect.top + window.scrollY;
    elementHeight = rect.height;
  };

  updateElementMetrics();

  // Update parallax on scroll
  const updateParallax = memoizeFrame(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Calculate how much of element is in view
    const elementScrollProgress =
      (scrollY + windowHeight - elementTop) / (windowHeight + elementHeight);

    if (elementScrollProgress >= 0 && elementScrollProgress <= 1) {
      const offset = (elementScrollProgress - 0.5) * 100 * speed;

      if (direction === "vertical") {
        element.style.transform = `translateY(${offset}px)`;
      } else {
        element.style.transform = `translateX(${offset}px)`;
      }
    }
  });

  window.addEventListener("scroll", updateParallax, { passive: true });
  window.addEventListener("resize", () => {
    updateElementMetrics();
    updateParallax();
  });

  // Initial update
  updateParallax();

  initializedElements.add(element);
}

/**
 * Show all animated elements without animation (for reduced motion)
 */
function showAllAnimatedElements(root: HTMLElement): void {
  const elements = root.querySelectorAll<HTMLElement>(
    "[data-animate], [data-stagger], [data-parallax]"
  );

  for (const element of elements) {
    element.style.opacity = "1";
    element.style.transform = "none";
  }
}

// Register the animations initializer
registerInteraction("animations", initAnimations);
