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
 * Update hexagon SVG scale based on FAQ open state
 */
function updateHexagonScale(root: HTMLElement, faqItems: NodeListOf<HTMLDetailsElement>): void {
  const hexagon = root.querySelector("#faq-hexagon");
  if (!hexagon) return;

  // Use setTimeout to wait for all synchronous toggle events to complete
  // The animation logic programmatically sets details.open which triggers more events
  setTimeout(() => {
    // Check if any FAQ item is open
    const anyOpen = Array.from(faqItems).some((item) => item.open);

    if (anyOpen) {
      hexagon.classList.add("faq-open");
    } else {
      hexagon.classList.remove("faq-open");
    }
  }, 50);
}

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

  // Initialize each FAQ item and attach toggle listeners
  // Note: toggle events don't bubble, so we can't use delegation
  for (const item of faqItems) {
    initFaqItem(item);

    // Attach toggle listener directly to each item
    item.addEventListener("toggle", () => {
      if (mode === "single" && item.open) {
        // Close all other items
        for (const otherItem of faqItems) {
          if (otherItem !== item && otherItem.open) {
            otherItem.open = false;
          }
        }
      }

      // Update hexagon scale after DOM updates complete
      updateHexagonScale(root, faqItems);
    }, { signal: events.signal });
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
 * Initialize accessibility for a single FAQ item
 */
function initFaqItem(details: HTMLDetailsElement): void {
  const summary = details.querySelector("summary");
  if (!summary) return;

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
