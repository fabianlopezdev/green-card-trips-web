import type { TemplateConfig } from "./configType";

/**
 * Generate structured data (JSON-LD) for SEO and rich search results
 */

interface FAQ {
  question: string;
  answer: string;
}

/**
 * Generate MobileApplication schema for the Green Card Trips app
 *
 * Note: aggregateRating is removed until we have verified App Store reviews.
 * Add it back when the app is published and has real user ratings.
 */
export function generateMobileApplicationSchema(config: TemplateConfig, currentUrl: string) {
  const { name, seo, appStoreLink, googlePlayLink } = config;

  // Use site root URL for the app schema (not the current page URL)
  const siteUrl = new URL('/', currentUrl).href;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": name,
    "description": seo?.description || "",
    "url": siteUrl,
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": "iOS",
    "offers": {
      "@type": "Offer",
      "price": "4.99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
    // aggregateRating removed - will be added when we have real App Store reviews
  };

  // Add download URLs if available
  if (appStoreLink) {
    (schema as any).downloadUrl = appStoreLink;
  }
  if (googlePlayLink) {
    (schema as any).installUrl = googlePlayLink;
  }

  return schema;
}

/**
 * Generate FAQPage schema for rich search results
 */
export function generateFAQPageSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Generate Organization schema for business info
 *
 * Note: Always uses the site root URL, not the current page URL
 */
export function generateOrganizationSchema(config: TemplateConfig, currentUrl: string) {
  const { name, logo, seo, footer } = config;

  // Always use site root URL for Organization (not subpages like /privacy-policy)
  const siteUrl = new URL('/', currentUrl).href;

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "description": seo?.description || "",
    "url": siteUrl,
    "logo": new URL(logo, currentUrl).href,
    "sameAs": []
  };

  // Add social media links if available
  if (footer.socials?.facebook) {
    schema.sameAs.push(footer.socials.facebook);
  }
  if (footer.socials?.instagram) {
    schema.sameAs.push(footer.socials.instagram);
  }
  if (footer.socials?.twitter) {
    schema.sameAs.push(footer.socials.twitter);
  }

  // Remove sameAs if empty
  if (schema.sameAs.length === 0) {
    delete schema.sameAs;
  }

  return schema;
}

/**
 * Generate WebSite schema for site-wide search
 *
 * Note: Always uses the site root URL, not the current page URL
 */
export function generateWebSiteSchema(config: TemplateConfig, currentUrl: string) {
  const { name, seo } = config;

  // Always use site root URL for WebSite (not subpages)
  const siteUrl = new URL('/', currentUrl).href;

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "description": seo?.description || "",
    "url": siteUrl
  };
}

/**
 * Generate Review schemas for testimonials to show in rich search results
 *
 * IMPORTANT: This function is currently disabled to avoid Google penalties for fake reviews.
 * TODO: Uncomment and use this when we have real user testimonials from the App Store.
 *
 * Fake reviews violate Google's structured data guidelines and can result in:
 * - Manual actions against the site
 * - Loss of rich results eligibility
 * - Reduced search rankings
 *
 * Only enable this when you have verified, genuine customer reviews.
 */
export function generateReviewSchema(config: TemplateConfig) {
  // Disabled until we have real testimonials
  return [];

  /* Uncomment when you have real reviews:
  const testimonials = config.home?.testimonials;

  if (!testimonials || !testimonials.cards || testimonials.cards.length === 0) {
    return [];
  }

  return testimonials.cards.map(({ name, comment }) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "MobileApplication",
      "name": config.name
    },
    "author": {
      "@type": "Person",
      "name": name
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "reviewBody": comment
  }));
  */
}

/**
 * Generate Product schema for the app pricing/offering
 *
 * Note: aggregateRating is removed until we have verified user reviews.
 * Price ($4.99) is kept as it's the actual product price.
 * Add aggregateRating back when the app is published and has real ratings.
 */
export function generateProductSchema(config: TemplateConfig, currentUrl: string) {
  const { name, seo, appStoreLink } = config;

  // Use site root URL for offers (not subpages)
  const siteUrl = new URL('/', currentUrl).href;

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": seo?.description || "",
    "image": new URL(config.logo, currentUrl).href,
    "brand": {
      "@type": "Brand",
      "name": name
    },
    "offers": {
      "@type": "Offer",
      "price": "4.99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2026-12-31",
      "url": siteUrl
    }
    // aggregateRating removed - will be added when we have real user reviews
  };

  // Add download URLs if available
  if (appStoreLink && appStoreLink !== "#") {
    (schema.offers as any).availableAtOrFrom = {
      "@type": "Place",
      "name": "Apple App Store"
    };
  }

  return schema;
}

/**
 * Generate BreadcrumbList schema for navigation breadcrumbs
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
}
