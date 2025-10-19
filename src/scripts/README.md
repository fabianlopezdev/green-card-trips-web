# Vanilla JavaScript Interactivity System

Enterprise-grade vanilla JavaScript system for progressively enhancing static Astro sites with animations and interactivity.

## Architecture Overview

### Core Principles

1. **Progressive Enhancement**: Site works without JavaScript; JS only enhances
2. **Registry Pattern**: Components self-register via `registerInteraction(name, init)`
3. **Auto-Discovery**: Elements marked with `data-interactive` are automatically enhanced
4. **Idempotent**: Safe to run multiple times (WeakSet tracking prevents double-initialization)
5. **Lifecycle Aware**: Handles both initial load and Astro page transitions
6. **Efficient**: Shared observers, RAF-based handlers, event delegation
7. **Type-Safe**: Full TypeScript coverage
8. **Memory Safe**: WeakMaps/WeakSets for automatic garbage collection

### File Structure

```
src/scripts/
├── register.ts              # Central registry + auto-discovery
├── types.ts                 # Shared TypeScript types
├── observers/
│   ├── intersection.ts      # Cached IntersectionObserver factory
│   └── resize.ts           # Shared ResizeObserver
├── utils/
│   ├── raf.ts              # RequestAnimationFrame helpers
│   ├── dataset.ts          # Data attribute parsers
│   └── events.ts           # Event delegation + AbortController
└── components/
    ├── header.ts           # Header interactivity
    ├── animations.ts       # Scroll animations
    ├── faq.ts             # FAQ accordion
    └── theme.ts           # Theme management
```

## Getting Started

### 1. Add Data Attributes to Components

Mark components that need interactivity with `data-interactive`:

```astro
<!-- Header with sticky behavior and theme toggle -->
<header data-interactive="header" data-sticky="true">
  <button data-theme-toggle>Toggle Theme</button>
  <a data-nav-link href="#features">Features</a>
</header>

<!-- Section with scroll animations -->
<section data-interactive="animations">
  <h2 data-animate="fade-in">Title</h2>
  <p data-animate="slide-up" data-delay="200">Paragraph</p>
</section>

<!-- FAQ with accordion -->
<section data-interactive="faq" data-faq-mode="single">
  <details data-faq-item>
    <summary>Question?</summary>
    <p>Answer</p>
  </details>
</section>
```

### 2. Multiple Interactions per Element

Elements can have multiple interactions:

```astro
<section data-interactive="animations theme">
  <!-- This element gets both animation and theme enhancements -->
</section>
```

### 3. The System Handles the Rest

The registry automatically:
- Discovers marked elements on page load
- Runs matching initializers
- Tracks initialization to prevent duplicates
- Re-runs on Astro page transitions
- Cleans up when needed

## Available Components

### Header (`data-interactive="header"`)

Features:
- Sticky header with hide-on-scroll-down, show-on-scroll-up
- Mobile menu toggle with outside-click closing
- Theme switcher with localStorage persistence
- Active nav link highlighting based on scroll position

**Data Attributes:**

```astro
<header data-interactive="header" data-sticky="true">
  <details data-mobile-menu>
    <summary>Menu</summary>
    <!-- Menu items -->
  </details>

  <nav>
    <a data-nav-link href="#section">Section</a>
  </nav>

  <button data-theme-toggle>Toggle Theme</button>
</header>
```

### Animations (`data-interactive="animations"`)

Scroll-triggered animations with IntersectionObserver.

**Animation Types:**
- `fade-in` - Fade in
- `slide-up` - Slide from bottom
- `slide-down` - Slide from top
- `slide-left` - Slide from right
- `slide-right` - Slide from left

**Data Attributes:**

```astro
<!-- Basic animation -->
<div data-animate="fade-in">Fades in</div>

<!-- With custom delay and threshold -->
<div
  data-animate="slide-up"
  data-delay="300"
  data-duration="800"
  data-threshold="0.5"
  data-once="true"
>
  Slides up after 300ms delay
</div>

<!-- Stagger children -->
<ul data-stagger="150" data-stagger-animate="fade-in">
  <li>Item 1 (0ms)</li>
  <li>Item 2 (150ms)</li>
  <li>Item 3 (300ms)</li>
</ul>

<!-- Parallax effect -->
<div data-parallax="0.5" data-parallax-direction="vertical">
  Moves at half speed while scrolling
</div>
```

**Required CSS** (add to your global styles):

```css
/* Animation base classes */
.animate-hidden {
  opacity: 0;
}

.animate-visible {
  opacity: 1;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* Animation variants */
.animate-fade-in {
  opacity: 1;
}

.animate-slide-up {
  transform: translateY(0);
}

.animate-slide-up.animate-hidden {
  transform: translateY(50px);
}

.animate-slide-down {
  transform: translateY(0);
}

.animate-slide-down.animate-hidden {
  transform: translateY(-50px);
}

.animate-slide-left {
  transform: translateX(0);
}

.animate-slide-left.animate-hidden {
  transform: translateX(100px);
}

.animate-slide-right {
  transform: translateX(0);
}

.animate-slide-right.animate-hidden {
  transform: translateX(-100px);
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .animate-visible,
  .animate-hidden {
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
```

### FAQ (`data-interactive="faq"`)

Enhanced `<details>` accordion with smooth animations.

**Data Attributes:**

```astro
<!-- Single mode: only one item open at a time -->
<section data-interactive="faq" data-faq-mode="single">
  <details data-faq-item>
    <summary>Question 1</summary>
    <p>Answer 1</p>
  </details>

  <details data-faq-item>
    <summary>Question 2</summary>
    <p>Answer 2</p>
  </details>
</section>

<!-- Multiple mode: multiple items can be open -->
<section data-interactive="faq" data-faq-mode="multiple">
  <!-- FAQ items -->
</section>
```

**Features:**
- Smooth height animations using Web Animations API
- Arrow key navigation
- Auto-close others in "single" mode
- Accessibility enhancements (ARIA attributes)

### Theme (`data-interactive="theme"`)

Global theme management with persistence.

**Data Attributes:**

```astro
<div data-interactive="theme">
  <button data-theme-toggle>Toggle Theme</button>
</div>
```

**Features:**
- Toggles between light/dark themes
- Persists to localStorage
- Syncs across all toggle buttons
- Dispatches `theme:changed` custom event
- Smooth transitions

**Optional CSS:**

```css
/* Smooth theme transition */
.theme-transition,
.theme-transition *,
.theme-transition *::before,
.theme-transition *::after {
  transition: background-color 0.3s ease-in-out,
              color 0.3s ease-in-out,
              border-color 0.3s ease-in-out !important;
}
```

## Creating New Interactive Components

### Step 1: Create Component File

```ts
// src/scripts/components/my-component.ts
import { registerInteraction } from "../register";
import { createEventManager } from "../utils/events";

function initMyComponent(root: HTMLElement): void {
  // Early return if missing required elements
  const button = root.querySelector("[data-my-button]");
  if (!button) return;

  // Create event manager for cleanup
  const events = createEventManager();

  // Add interactivity
  events.on(button, "click", () => {
    console.log("Clicked!");
  });

  // Events will be auto-cleaned up when component is destroyed
}

// Self-register
registerInteraction("my-component", initMyComponent);
```

### Step 2: Import in Entry Point

```ts
// src/components/initScripts/interactivity-init.ts
import "../../scripts/components/my-component";
```

### Step 3: Use in Components

```astro
<div data-interactive="my-component">
  <button data-my-button>Click me</button>
</div>
```

## Utilities Reference

### RAF Helpers (`utils/raf.ts`)

```ts
import { memoizeFrame, throttleFrame, debounceFrame } from "../utils/raf";

// Run at most once per frame
const handleScroll = memoizeFrame(() => {
  console.log("Scroll", window.scrollY);
});
window.addEventListener("scroll", handleScroll, { passive: true });

// Throttle with minimum delay
const handleResize = throttleFrame(() => {
  console.log("Resize");
}, 150);

// Debounce using RAF
const handleInput = debounceFrame((value) => {
  console.log("Search:", value);
});
```

### Event Management (`utils/events.ts`)

```ts
import { createEventManager, delegate } from "../utils/events";

// Managed events with automatic cleanup
const events = createEventManager();

events.on(window, "scroll", handleScroll, { passive: true });
events.delegate(container, "click", "[data-link]", (e, target) => {
  console.log("Clicked:", target);
});

// Later: cleanup all at once
events.cleanup();
```

### IntersectionObserver (`observers/intersection.ts`)

```ts
import { observe, observeOnce, observeMany } from "../observers/intersection";

// Observe element
const cleanup = observe(
  element,
  ([entry]) => {
    if (entry.isIntersecting) {
      console.log("Visible!");
    }
  },
  { threshold: 0.5 }
);

// Observe once
observeOnce(element, () => {
  console.log("First time visible!");
});

// Observe many elements
const items = document.querySelectorAll("[data-item]");
observeMany(items, ([entry]) => {
  // ...
});
```

### Data Attributes (`utils/dataset.ts`)

```ts
import { getDataAttr, parseDatasetList, parseAnimationOptions } from "../utils/dataset";

// Get typed attribute
const delay = getDataAttr(el, "delay", {
  asNumber: true,
  defaultValue: 0
}); // number

const enabled = getDataAttr(el, "enabled", {
  asBoolean: true
}); // boolean

// Parse lists
const interactions = parseDatasetList(el.dataset.interactive);
// "header theme" -> ["header", "theme"]

// Parse animation options
const opts = parseAnimationOptions(el);
// { animation: "fade-in", delay: 200, duration: 600 }
```

## Best Practices

### 1. Always Use Early Returns

```ts
function initComponent(root: HTMLElement): void {
  // Check for required elements
  const button = root.querySelector("[data-button]");
  if (!button) return; // Early return if missing

  // Continue with initialization
}
```

### 2. Use Event Managers for Cleanup

```ts
function initComponent(root: HTMLElement): void {
  const events = createEventManager();

  events.on(button, "click", handleClick);
  events.delegate(root, "click", "[data-link]", handleLink);

  // All events auto-cleanup when component unmounts
}
```

### 3. Cache Expensive Queries

```ts
function initComponent(root: HTMLElement): void {
  // Cache DOM queries
  const items = root.querySelectorAll("[data-item]");
  const itemsArray = Array.from(items); // Convert once

  // Reuse cached results
  itemsArray.forEach(item => {
    // ...
  });
}
```

### 4. Use WeakMap for Per-Element State

```ts
const elementStates = new WeakMap<HTMLElement, { count: number }>();

function initComponent(root: HTMLElement): void {
  elementStates.set(root, { count: 0 });

  // Later
  const state = elementStates.get(root);
  state!.count++;
}
```

### 5. Respect Reduced Motion

```ts
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion) {
  // Skip animations
  return;
}
```

## Performance Tips

1. **Use IntersectionObserver** instead of scroll listeners for viewport detection
2. **Memoize scroll/resize handlers** with `memoizeFrame()`
3. **Use event delegation** instead of attaching listeners to many elements
4. **Reuse observers** - the factory automatically caches instances
5. **Use passive event listeners** for scroll/touch events
6. **Batch DOM reads/writes** with RAF queue

## Debugging

### Enable Verbose Logging

The registry logs warnings for:
- Duplicate registrations
- Missing initializers
- Initialization errors

Check browser console for `[Interactivity]` messages.

### Check Initialization

```js
// In browser console
console.log(document.querySelectorAll("[data-interactive]"));
```

### Test Without JS

Disable JavaScript to verify progressive enhancement works.

## TypeScript

All components are fully typed. Import types as needed:

```ts
import type {
  Initializer,
  AnimationOptions,
  ObserverOptions
} from "../types";
```

## Browser Support

- Modern browsers (ES2020+)
- IntersectionObserver support required
- ResizeObserver support required
- Gracefully degrades when JS disabled

## Migration from React/Framer Motion

If you had Framer Motion animations:

**Before:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

**After:**
```astro
<div data-animate="slide-up" data-once="true">
  Content
</div>
```

Much simpler, no hydration, better performance!
