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
 */
export function generateMobileApplicationSchema(config: TemplateConfig, currentUrl: string) {
  const { name, seo, appStoreLink, googlePlayLink } = config;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": name,
    "description": seo?.description || "",
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": "iOS",
    "offers": {
      "@type": "Offer",
      "price": "4.99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "250",
      "bestRating": "5",
      "worstRating": "1"
    }
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
 */
export function generateOrganizationSchema(config: TemplateConfig, currentUrl: string) {
  const { name, logo, seo, footer } = config;

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "description": seo?.description || "",
    "url": currentUrl,
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
 */
export function generateWebSiteSchema(config: TemplateConfig, currentUrl: string) {
  const { name, seo } = config;

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "description": seo?.description || "",
    "url": currentUrl
  };
}

/**
 * Generate Review schemas for testimonials to show in rich search results
 */
export function generateReviewSchema(config: TemplateConfig) {
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
}

/**
 * Generate Product schema for the app pricing/offering
 */
export function generateProductSchema(config: TemplateConfig, currentUrl: string) {
  const { name, seo, appStoreLink, googlePlayLink } = config;

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
      "url": currentUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "250",
      "bestRating": "5",
      "worstRating": "1"
    }
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
