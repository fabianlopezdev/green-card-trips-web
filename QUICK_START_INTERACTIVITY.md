# Quick Start: Adding Interactivity to Components

The vanilla JavaScript interactivity system is now fully set up and ready to use! This guide shows you how to add interactivity to your components step-by-step.

## System Overview

The system uses a **registry pattern** with **auto-discovery**:
1. You add `data-interactive="component-name"` attributes to your HTML
2. The system automatically finds these elements on page load
3. Matching initializer functions run to add interactivity
4. Everything is tracked to prevent double-initialization

## Quick Example: Add Scroll Animations to Hero

### Step 1: Add Data Attributes

Update `src/modules/home/_components/hero/index.astro`:

```astro
<!-- Add data-interactive="animations" to the section -->
<section id={hero.id} class="relative pb-8 md:pb-4" data-interactive="animations">
  <!-- Add animation attributes to elements -->
  <h1 data-animate="fade-in" data-delay="0">
    {/* ... headline content ... */}
  </h1>

  <p data-animate="slide-up" data-delay="200">
    {translations.hero.subtitle}
  </p>

  <!-- Stagger the download buttons -->
  <ul data-stagger="100" class="list-none flex gap-4 m-0 p-0">
    <li>...</li>
    <li>...</li>
  </ul>
</section>
```

### Step 2: That's It!

The animations will work automatically. No need to:
- Import anything
- Register anything
- Write any initialization code

The system handles everything!

## Available Animations

### Basic Animations

```astro
<!-- Fade in -->
<div data-animate="fade-in">Fades in when scrolled into view</div>

<!-- Slide from bottom -->
<div data-animate="slide-up">Slides up from bottom</div>

<!-- Slide from top -->
<div data-animate="slide-down">Slides down from top</div>

<!-- Slide from right -->
<div data-animate="slide-left">Slides from right to left</div>

<!-- Slide from left -->
<div data-animate="slide-right">Slides from left to right</div>
```

### Custom Options

```astro
<div
  data-animate="slide-up"
  data-delay="300"          <!-- Delay before starting (ms) -->
  data-duration="800"       <!-- Animation duration (ms) -->
  data-threshold="0.5"      <!-- How much must be visible (0-1) -->
  data-once="true"          <!-- Only animate once -->
>
  Custom animation
</div>
```

### Stagger Children

```astro
<!-- Animate children one after another -->
<ul data-stagger="150">  <!-- 150ms between each item -->
  <li>Item 1 (0ms)</li>
  <li>Item 2 (150ms)</li>
  <li>Item 3 (300ms)</li>
</ul>

<!-- With custom animation type -->
<ul data-stagger="150" data-stagger-animate="slide-left">
  <li>Item slides from right</li>
</ul>
```

### Parallax Effect

```astro
<div data-parallax="0.5">
  <!-- Moves at half scroll speed -->
</div>

<!-- Horizontal parallax -->
<div data-parallax="0.3" data-parallax-direction="horizontal">
  <!-- Moves horizontally -->
</div>
```

## Add Interactivity to Features Section

```astro
<!-- src/modules/home/_components/features/features.astro -->
<section id={features.id} data-interactive="animations">
  <!-- Animate title -->
  <h2 data-animate="fade-in">
    {translations.features.title}
  </h2>

  <!-- Stagger feature cards -->
  <div data-stagger="150" class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    {featureCards.map((feature) => (
      <article class="card">
        <!-- Each card will animate in sequence -->
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </article>
    ))}
  </div>
</section>
```

## Add Interactivity to FAQ Section

Update `src/modules/home/_components/faq/faq.astro`:

```astro
<!-- Add data-interactive="faq" -->
<section
  id={faq.id}
  data-interactive="faq"
  data-faq-mode="single"  <!-- Only one item open at a time -->
>
  {faqs.map((faqItem) => (
    <!-- Add data-faq-item to each details element -->
    <details data-faq-item>
      <summary>{faqItem.question}</summary>
      <p>{faqItem.answer}</p>
    </details>
  ))}
</section>
```

Features you get automatically:
- ✅ Smooth height animations
- ✅ Auto-close others when opening one (in "single" mode)
- ✅ Keyboard navigation (arrow keys)
- ✅ Accessibility improvements

## Already Working

These components already have interactivity wired up:

### Header
- ✅ Sticky header (hide on scroll down, show on scroll up)
- ✅ Mobile menu toggle
- ✅ Theme switcher
- ✅ Active nav link highlighting

### Theme Switcher
Theme switching is already working with localStorage persistence!

## Testing Locally

1. **Run dev server:**
   ```bash
   pnpm dev
   ```

2. **Open browser:** http://localhost:4321

3. **Open browser console** (F12) to see:
   - `[Interactivity] System initialized`
   - No errors should appear

4. **Test interactions:**
   - Scroll to see animations
   - Click theme toggle
   - Open mobile menu
   - Click FAQ items

5. **Check without JavaScript:**
   - Disable JS in browser
   - Site should still work (progressive enhancement)

## Component-by-Component Checklist

### ✅ Already Done
- [x] Header (sticky, mobile menu, theme toggle)
- [x] System infrastructure
- [x] Animation utilities
- [x] FAQ accordion
- [x] Theme management

### 🎯 Ready to Add Interactivity

Add `data-interactive="animations"` and animation attributes to:

- [ ] Hero section (`src/modules/home/_components/hero/index.astro`)
- [ ] Features section (`src/modules/home/_components/features/features.astro`)
- [ ] How It Works section (`src/modules/home/_components/howItWorks/howItWorks.astro`)
- [ ] Pricing section (`src/modules/home/_components/pricing/pricing.astro`)
- [ ] Partners section (`src/modules/home/_components/partners/partners.astro`)

### Example: Update Hero Section

```diff
  <!-- src/modules/home/_components/hero/index.astro -->
- <section id={hero.id} class="relative pb-8 md:pb-4">
+ <section id={hero.id} class="relative pb-8 md:pb-4" data-interactive="animations">
    <div class="flex flex-1 items-center md:items-start md:h-[300vh]">
      <div class="static top-40 flex flex-col prose">
-       <h1 class="mt-0 mb-4 text-4xl font-semibold">
+       <h1 class="mt-0 mb-4 text-4xl font-semibold" data-animate="fade-in">
          {translations.hero.headline}
        </h1>

-       <p class="whitespace-pre-wrap text-left">
+       <p class="whitespace-pre-wrap text-left" data-animate="slide-up" data-delay="200">
          {translations.hero.subtitle}
        </p>

-       <ul class="list-none flex gap-4">
+       <ul class="list-none flex gap-4" data-stagger="100">
          {/* Download buttons */}
        </ul>
      </div>
    </div>
  </section>
```

## Creating Custom Interactivity

If you need custom behavior beyond animations:

### 1. Create Component Script

```ts
// src/scripts/components/my-feature.ts
import { registerInteraction } from "../register";
import { createEventManager } from "../utils/events";

function initMyFeature(root: HTMLElement): void {
  const button = root.querySelector("[data-my-button]");
  if (!button) return; // Early return if missing

  const events = createEventManager();

  events.on(button, "click", () => {
    console.log("Button clicked!");
  });
}

registerInteraction("my-feature", initMyFeature);
```

### 2. Import in Entry Point

```ts
// src/components/initScripts/interactivity-init.ts
import "../../scripts/components/my-feature";
```

### 3. Use in Component

```astro
<div data-interactive="my-feature">
  <button data-my-button>Click me</button>
</div>
```

## Performance Tips

1. **Animations are optimized:**
   - Uses IntersectionObserver (not scroll listeners)
   - Respects `prefers-reduced-motion`
   - Shared observer instances (efficient)

2. **Event handlers are optimized:**
   - Uses event delegation where possible
   - RAF-based scroll/resize handlers
   - Passive event listeners

3. **Memory safe:**
   - WeakMaps/WeakSets for automatic garbage collection
   - Proper cleanup on unmount
   - No memory leaks

## Troubleshooting

### Animations not working?

1. Check browser console for errors
2. Verify `data-interactive="animations"` is on parent element
3. Check that CSS classes exist in `src/styles/styles.scss`

### Elements not being initialized?

1. Open console and check for: `[Interactivity] System initialized`
2. Run: `document.querySelectorAll("[data-interactive]")`
3. Verify attribute names match registered components

### Need help?

Check the comprehensive documentation:
- `src/scripts/README.md` - Full documentation
- `src/scripts/components/*.ts` - Component examples

## Next Steps

1. **Add animations** to hero, features, pricing sections
2. **Test** on different devices
3. **Customize** animation timings to match your design
4. **Create custom** interactive components as needed

Happy coding! 🚀
