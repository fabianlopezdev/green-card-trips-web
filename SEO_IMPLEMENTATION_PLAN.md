# SEO Implementation Plan - Green Card Trips

**Goal**: Fix all SEO, accessibility, and semantic HTML issues identified in audit.
**Approach**: One fix at a time → Test → Commit → Move to next.
**Current SEO Score**: 49/100 🔴
**Target SEO Score**: 90+/100 🟢

---

## 🎯 PRIORITY 1: Critical SEO Fixes

### Phase 1.1: Heading Hierarchy Fix
**Impact**: Critical for SEO and Accessibility
**Files to modify**: All home section components

- [ ] **Step 1.1.1**: Fix hero heading - Change H2 to H1 in header component
  - File: `src/modules/home/_components/header/index.tsx:63`
  - Change: `<h2>` → `<h1>`
  - Commit: "Fix hero heading to use H1 for main page title"

- [ ] **Step 1.1.2**: Demote Features section heading - Change H1 to H2
  - File: `src/modules/home/_components/features/index.tsx:36`
  - Change: `<h1>` → `<h2>`
  - Commit: "Demote features heading from H1 to H2"

- [ ] **Step 1.1.3**: Fix How It Works section heading - Change H1 to H2
  - File: Find and update in `src/modules/home/_components/howItWorks/index.tsx`
  - Change: `<h1>` → `<h2>`
  - Commit: "Demote how it works heading from H1 to H2"

- [ ] **Step 1.1.4**: Fix How It Works step headings - Change H4 to H3
  - File: `src/modules/home/_components/howItWorks/index.tsx`
  - Change all 5 step headings: `<h4>` → `<h3>`
  - Commit: "Fix how it works step headings from H4 to H3"

- [ ] **Step 1.1.5**: Demote Pricing section heading - Change H1 to H2
  - File: Find and update in `src/modules/home/_components/pricing/index.tsx`
  - Change: `<h1>` → `<h2>`
  - Commit: "Demote pricing heading from H1 to H2"

- [ ] **Step 1.1.6**: Fix FAQ section heading - Change H3 to H2
  - File: Find and update in `src/modules/home/_components/faq/index.tsx`
  - Change: `<h3>` → `<h2>`
  - Commit: "Fix FAQ heading from H3 to H2"

- [ ] **Step 1.1.7**: Verify heading hierarchy with browser audit
  - Expected order: H1 → H2 → H2/H3 → H2 → H3 → H2 → H2 → H2

---

### Phase 1.2: Dynamic Language Attribute
**Impact**: Critical for i18n and Accessibility
**Files to modify**: `src/Layout.astro`

- [ ] **Step 1.2.1**: Make HTML lang attribute dynamic based on current language
  - File: `src/Layout.astro:11`
  - Change: `<html lang="en">` → `<html lang={i18n.language || "en"}>`
  - Need to pass language from page/config or detect from i18n
  - Commit: "Add dynamic HTML lang attribute for i18n support"

- [ ] **Step 1.2.2**: Test language switching and verify lang attribute updates

---

### Phase 1.3: Canonical URL
**Impact**: Critical for duplicate content prevention
**Files to modify**: `src/Layout.astro`

- [ ] **Step 1.3.1**: Add canonical URL meta tag
  - File: `src/Layout.astro` (in `<head>`)
  - Add after line 17: `<link rel="canonical" href={Astro.url} />`
  - Commit: "Add canonical URL meta tag"

- [ ] **Step 1.3.2**: Verify canonical tag appears in HTML head

---

### Phase 1.4: Image Alt Text Improvements
**Impact**: High for Accessibility and Image SEO
**Files to modify**: Multiple component files

- [ ] **Step 1.4.1**: Fix navbar app store logo alt text (empty)
  - File: `src/components/navbar/index.tsx:181,188`
  - Change: `alt=""` → `alt="Download on Google Play"` and `alt="Download on App Store"`
  - Commit: "Add descriptive alt text to navbar store badges"

- [ ] **Step 1.4.2**: Fix feature icons alt text (generic)
  - File: `src/modules/home/_components/features/index.tsx:98`
  - Change: `alt="feature icon"` → Descriptive alt based on feature
  - Suggested alts:
    - "Smart trip tracking icon"
    - "Travel simulator icon"
    - "Dashboard insights icon"
    - "Privacy and security icon"
  - Commit: "Add descriptive alt text to feature icons"

- [ ] **Step 1.4.3**: Fix hero screenshots alt text
  - File: `src/modules/home/_components/header/index.tsx`
  - Change: `alt="screenshot 0"` → Descriptive names like "Dashboard showing trip tracker", "Add trip form", "Trip history list"
  - Commit: "Add descriptive alt text to hero screenshots"

- [ ] **Step 1.4.4**: Fix How It Works step images alt text
  - File: Find in `src/modules/home/_components/howItWorks/`
  - Change: `alt="step 0"` → Descriptive like "Download app from store", "Enter green card details", etc.
  - Commit: "Add descriptive alt text to how it works step images"

- [ ] **Step 1.4.5**: Fix pricing plan icon alt text
  - File: Find in `src/modules/home/_components/pricing/`
  - Change: `alt="pricing plan"` → `alt="One-time payment wallet icon"`
  - Commit: "Add descriptive alt text to pricing icon"

- [ ] **Step 1.4.6**: Fix app banner screenshots alt text
  - File: Find in `src/components/appBanner/`
  - Change generic alts to descriptive ones
  - Commit: "Add descriptive alt text to app banner screenshots"

- [ ] **Step 1.4.7**: Verify all images have meaningful alt text with browser inspection

---

### Phase 1.5: Structured Data (Schema.org)
**Impact**: Critical for Rich Search Results
**Files to modify**: `src/Layout.astro` or new utility file

- [ ] **Step 1.5.1**: Create utility for generating structured data
  - File: Create `src/utils/structuredData.ts`
  - Add functions to generate WebApplication, Organization, FAQPage schemas
  - Commit: "Add structured data utility for schema.org markup"

- [ ] **Step 1.5.2**: Add WebApplication JSON-LD schema
  - File: `src/Layout.astro` or `src/pages/index.astro`
  - Add WebApplication schema with app info, ratings, offers
  - Commit: "Add WebApplication structured data schema"

- [ ] **Step 1.5.3**: Add FAQPage JSON-LD schema
  - Should include all FAQ questions and answers from config
  - Commit: "Add FAQPage structured data schema"

- [ ] **Step 1.5.4**: Add Organization JSON-LD schema
  - Include logo, name, social links, contact info
  - Commit: "Add Organization structured data schema"

- [ ] **Step 1.5.5**: Test structured data with Google Rich Results Test
  - URL: https://search.google.com/test/rich-results
  - Verify all schemas validate correctly

---

## 🎯 PRIORITY 2: Important SEO Enhancements

### Phase 2.1: Hreflang Tags
**Impact**: Critical for Multilingual SEO
**Files to modify**: `src/Layout.astro`

- [ ] **Step 2.1.1**: Add hreflang tags for all language variants
  - File: `src/Layout.astro` (in `<head>`)
  - Add for: en, es, tl, vi, zh-CN
  - Commit: "Add hreflang tags for multilingual SEO"

- [ ] **Step 2.1.2**: Add x-default hreflang for default language
  - Add: `<link rel="alternate" hreflang="x-default" href={defaultUrl} />`
  - Commit: "Add x-default hreflang tag"

- [ ] **Step 2.1.3**: Verify hreflang tags in HTML head

---

### Phase 2.2: Semantic Header Element
**Impact**: Moderate for SEO and Accessibility
**Files to modify**: `src/modules/home/index.tsx`

- [ ] **Step 2.2.1**: Wrap Navbar in semantic `<header>` element
  - File: `src/modules/home/index.tsx:22-23`
  - Wrap `<Navbar>` with `<header>` tags
  - Commit: "Add semantic header element for navbar"

- [ ] **Step 2.2.2**: Verify header landmark appears in accessibility tree

---

### Phase 2.3: Robots Meta Tag
**Impact**: Moderate for SEO
**Files to modify**: `src/Layout.astro`

- [ ] **Step 2.3.1**: Add robots meta tag
  - File: `src/Layout.astro` (in `<head>`)
  - Add: `<meta name="robots" content="index, follow" />`
  - Commit: "Add robots meta tag for search engine indexing"

- [ ] **Step 2.3.2**: Verify robots tag in HTML head

---

### Phase 2.4: ARIA Labels for Navigation and Sections
**Impact**: Moderate for Accessibility
**Files to modify**: Multiple component files

- [ ] **Step 2.4.1**: Add aria-label to main desktop navigation
  - File: `src/components/navbar/index.tsx:70`
  - Add: `aria-label="Main navigation"`
  - Commit: "Add aria-label to main navigation"

- [ ] **Step 2.4.2**: Add aria-label to header section
  - File: `src/modules/home/_components/header/index.tsx:42`
  - Add: `aria-label="Hero section"`
  - Commit: "Add aria-label to hero section"

- [ ] **Step 2.4.3**: Add aria-label to features section
  - File: `src/modules/home/_components/features/index.tsx:34`
  - Add: `aria-label="Features section"`
  - Commit: "Add aria-label to features section"

- [ ] **Step 2.4.4**: Add aria-label to how it works section
  - File: Find in `src/modules/home/_components/howItWorks/`
  - Add: `aria-label="How it works section"`
  - Commit: "Add aria-label to how it works section"

- [ ] **Step 2.4.5**: Add aria-label to pricing section
  - File: Find in `src/modules/home/_components/pricing/`
  - Add: `aria-label="Pricing section"`
  - Commit: "Add aria-label to pricing section"

- [ ] **Step 2.4.6**: Add aria-label to FAQ section
  - File: Find in `src/modules/home/_components/faq/`
  - Add: `aria-label="Frequently asked questions"`
  - Commit: "Add aria-label to FAQ section"

- [ ] **Step 2.4.7**: Verify aria-labels with accessibility inspector

---

## 🎯 PRIORITY 3: Polish and Optimization

### Phase 3.1: Skip to Content Link
**Impact**: Moderate for Accessibility
**Files to modify**: `src/modules/home/index.tsx` or new component

- [ ] **Step 3.1.1**: Create skip to content link component
  - File: Create `src/components/skipLink/index.tsx`
  - Component should be visually hidden until focused
  - Commit: "Add skip to content link component"

- [ ] **Step 3.1.2**: Add skip link before navbar
  - File: `src/modules/home/index.tsx:22`
  - Add skip link that jumps to main content
  - Commit: "Add skip to content link for keyboard navigation"

- [ ] **Step 3.1.3**: Add id="main-content" to main element
  - File: `src/modules/home/index.tsx:22`
  - Add id to main tag for skip link target
  - Commit: "Add main content id for skip link"

- [ ] **Step 3.1.4**: Test skip link with keyboard navigation (Tab key)

---

### Phase 3.2: Semantic Elements for Content Cards
**Impact**: Low-Moderate for SEO
**Files to modify**: Feature, Pricing, FAQ components

- [ ] **Step 3.2.1**: Convert feature cards to `<article>` elements
  - File: `src/modules/home/_components/features/index.tsx:62`
  - Change wrapping div to article with proper semantic structure
  - Commit: "Use article elements for feature cards"

- [ ] **Step 3.2.2**: Convert pricing card to `<article>` element
  - File: Find in `src/modules/home/_components/pricing/`
  - Change wrapping element to article
  - Commit: "Use article element for pricing card"

- [ ] **Step 3.2.3**: Convert FAQ items to use semantic elements
  - File: Find in `src/modules/home/_components/faq/`
  - Consider using article or improving semantic structure
  - Commit: "Improve semantic structure of FAQ items"

- [ ] **Step 3.2.4**: Verify semantic structure with HTML validator

---

### Phase 3.3: Preconnect Resource Hints
**Impact**: Low for Performance
**Files to modify**: `src/Layout.astro`

- [ ] **Step 3.3.1**: Upgrade dns-prefetch to preconnect for critical domains
  - File: `src/Layout.astro:24`
  - Change critical dns-prefetch to preconnect
  - Keep dns-prefetch for non-critical
  - Commit: "Add preconnect hints for critical external domains"

- [ ] **Step 3.3.2**: Test page load performance with Chrome DevTools

---

### Phase 3.4: Meta Keywords (Optional)
**Impact**: Very Low (Google ignores, but some search engines may use)
**Files to modify**: `src/Layout.astro` and `src/utils/config.ts`

- [ ] **Step 3.4.1**: Add keywords to SEO config
  - File: `src/utils/config.ts`
  - Add keywords array to seo object
  - Commit: "Add keywords to SEO configuration"

- [ ] **Step 3.4.2**: Add meta keywords tag
  - File: `src/Layout.astro`
  - Add: `<meta name="keywords" content={seo.keywords?.join(', ')} />`
  - Commit: "Add meta keywords tag"

---

## 📋 Final Verification Checklist

After all phases are complete:

- [ ] **Final Test 1**: Run full accessibility audit in Chrome DevTools
- [ ] **Final Test 2**: Test all 5 language variants
- [ ] **Final Test 3**: Validate HTML with W3C Validator
- [ ] **Final Test 4**: Test structured data with Google Rich Results Test
- [ ] **Final Test 5**: Run Lighthouse audit (target: 90+ SEO score)
- [ ] **Final Test 6**: Test keyboard navigation (Tab, Enter, Escape)
- [ ] **Final Test 7**: Test with screen reader (VoiceOver/NVDA)
- [ ] **Final Test 8**: Verify all images have descriptive alt text
- [ ] **Final Test 9**: Verify heading hierarchy (H1 → H2 → H3 with no skips)
- [ ] **Final Test 10**: Check all meta tags are present and correct

---

## 🎉 Expected Results

**Before**: SEO Score 49/100 🔴
**After**: SEO Score 90+/100 🟢

### Improvements:
- ✅ Proper heading hierarchy (H1-H6)
- ✅ Semantic HTML5 elements
- ✅ Comprehensive structured data
- ✅ Full internationalization support
- ✅ Excellent accessibility (WCAG 2.1 AA)
- ✅ Descriptive alt text for all images
- ✅ Complete meta tag coverage
- ✅ Proper landmark regions
- ✅ Keyboard navigation support

---

## 📝 Notes

- Test each step in the browser before committing
- If something breaks, revert the last commit: `git revert HEAD`
- Keep commits atomic (one fix per commit)
- All commits use one-liner format without attribution
- Verify visual layout hasn't changed after each step
- Use browser DevTools for verification at each checkpoint
