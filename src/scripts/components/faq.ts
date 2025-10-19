/**
 * FAQ Accordion Component
 *
 * Enhances native <details> elements with:
 * - Smooth height animations
 * - Auto-close other items (optional)
 * - Keyboard navigation
 * - Accessibility improvements
 *
 * Usage:
 * <section data-interactive="faq" data-faq-mode="single">
 *   <details data-faq-item>
 *     <summary>Question</summary>
 *     <p>Answer</p>
 *   </details>
 * </section>
 */

import { registerInteraction } from "../register";
import { createEventManager } from "../utils/events";
import { getDataAttr } from "../utils/dataset";

/** Track initialized FAQ sections */
const initializedSections = new WeakSet<HTMLElement>();

/**
 * Initialize FAQ accordion behavior
 */
function initFaq(root: HTMLElement): void {
  // Skip if already initialized
  if (initializedSections.has(root)) return;

  const mode = getDataAttr(root, "faqMode", { defaultValue: "multiple" }) as string;
  const faqItems = root.querySelectorAll<HTMLDetailsElement>("[data-faq-item]");

  if (!faqItems.length) return;

  const events = createEventManager();

  // Initialize each FAQ item
  for (const item of faqItems) {
    initFaqItem(item);
  }

  // Auto-close behavior (only for "single" mode)
  if (mode === "single") {
    events.delegate(root, "toggle", "[data-faq-item]", (event, target) => {
      const details = target as HTMLDetailsElement;

      if (details.open) {
        // Close all other items
        for (const otherItem of faqItems) {
          if (otherItem !== details && otherItem.open) {
            otherItem.open = false;
          }
        }
      }
    });
  }

  // Keyboard navigation (arrow keys)
  events.delegate(root, "keydown", "[data-faq-item] summary", (event, target) => {
    const keyEvent = event as KeyboardEvent;
    const summary = target;
    const details = summary.parentElement as HTMLDetailsElement;
    const allSummaries = Array.from(
      root.querySelectorAll<HTMLElement>("[data-faq-item] summary")
    );
    const currentIndex = allSummaries.indexOf(summary);

    if (keyEvent.key === "ArrowDown") {
      keyEvent.preventDefault();
      const nextIndex = (currentIndex + 1) % allSummaries.length;
      allSummaries[nextIndex]?.focus();
    } else if (keyEvent.key === "ArrowUp") {
      keyEvent.preventDefault();
      const prevIndex = (currentIndex - 1 + allSummaries.length) % allSummaries.length;
      allSummaries[prevIndex]?.focus();
    } else if (keyEvent.key === "Home") {
      keyEvent.preventDefault();
      allSummaries[0]?.focus();
    } else if (keyEvent.key === "End") {
      keyEvent.preventDefault();
      allSummaries[allSummaries.length - 1]?.focus();
    }
  });

  initializedSections.add(root);
}

/**
 * Initialize smooth animations for a single FAQ item
 */
function initFaqItem(details: HTMLDetailsElement): void {
  const summary = details.querySelector("summary");
  if (!summary) return;

  const content = Array.from(details.children).find((el) => el !== summary) as HTMLElement;
  if (!content) return;

  // Set up animation styles
  details.style.overflow = "hidden";

  const animate = (opening: boolean) => {
    const startHeight = opening ? 0 : content.scrollHeight;
    const endHeight = opening ? content.scrollHeight : 0;

    // Use Web Animations API for smooth performance
    const animation = details.animate(
      [{ height: `${summary.offsetHeight + startHeight}px` }, { height: `${summary.offsetHeight + endHeight}px` }],
      {
        duration: 300,
        easing: "ease-in-out",
      }
    );

    animation.onfinish = () => {
      if (!opening) {
        details.open = false;
      }
      details.style.height = "";
    };
  };

  // Listen for toggle events
  details.addEventListener("toggle", () => {
    if (details.open) {
      animate(true);
    } else {
      // For closing, we need to prevent default closing and animate first
      requestAnimationFrame(() => {
        animate(false);
      });
    }
  });

  // Enhance summary for accessibility
  summary.setAttribute("role", "button");
  summary.setAttribute("aria-expanded", details.open ? "true" : "false");

  // Update aria-expanded on toggle
  details.addEventListener("toggle", () => {
    summary.setAttribute("aria-expanded", details.open ? "true" : "false");
  });
}

// Register the FAQ initializer
registerInteraction("faq", initFaq);
