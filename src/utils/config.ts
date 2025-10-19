import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
  name: "Green Card Trips",
  seo: {
    title: "Green Card Trips - Physical Presence & Continuous Residence Calculator",
    description: "Green Card Trips helps U.S. permanent residents track physical presence, understand USCIS travel rules, and protect their path to citizenship. Calculate days in the U.S., avoid continuous residence breaks, and plan travel confidently.",
  },
  // Draws grid behind main container
  backgroundGrid: false,
  logo: "/green-card-trips-logo.svg",
  theme: "green-card-trips",
  // Forces theme to be chosen above, no matter what user prefers
  forceTheme: false,
  // Shows switch to toggle between dark and light modes
  showThemeSwitch: true,
  // Google Analytics tracking ID (GA4). Set to undefined to disable.
  googleAnalytics: "G-ZMHYCPL58R",
  appStoreLink: "#",
  googlePlayLink: undefined,
  footer: {
    legalLinks: {
      termsAndConditions: true,
      cookiesPolicy: true,
      privacyPolicy: true,
    },
    socials: {
      instagram: undefined,
      facebook: undefined,
      twitter: undefined,
    },
    links: [
      { href: "/#features", title: "features" },
      { href: "/#how-it-works", title: "howItWorks" },
      { href: "/#pricing", title: "pricing" },
      { href: "/#faq", title: "faq" },
    ],
  },
  topNavbar: {
    cta: "Get the app",
    disableWidthAnimation: false,
    hideAppStore: false,
    hideGooglePlay: false,
    links: [
      { href: "/#features", title: "features" },
      { href: "/#how-it-works", title: "howItWorks" },
      { href: "/#pricing", title: "pricing" },
      { href: "/#faq", title: "faq" },
    ],
  },
  appBanner: {
    id: "app-banner",
    screenshots: [
      "dashboard",
      "trips",
      "modify-trip",
    ],
  },
  home: {
    seo: {
      title: "Green Card Trips - Physical Presence & Continuous Residence Calculator",
      description: "Green Card Trips helps U.S. permanent residents track physical presence, understand USCIS travel rules, and protect their path to citizenship. Calculate days in the U.S., avoid continuous residence breaks, and plan travel confidently.",
    },
    howItWorks: {
      id: "how-it-works",
      steps: [
        { image: "/stock/01.webp" },
        { image: "/stock/02.webp" },
        { image: "/stock/03.webp" },
        { image: "/stock/04.webp" },
        { image: "/stock/05.webp" },
      ],
    },
    features: {
      id: "features",
      cards: [
        { icon: "/3D/icons-mobile-front-color.webp" },
        { icon: "/3D/clock-front-color.webp" },
        { icon: "/3D/icons-chart-front-color.webp" },
        { icon: "/3D/sheild-front-color.webp" },
      ],
    },
    faq: {
      id: "faq",
      qa: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    },
    hero: {
      id: "hero",
      screenshots: ["dashboard", "modify-trip", "trips"],
      rewards: undefined,
      headlineMark: [1, 4],
    },
    highlight: {
      id: "protect-your-green-card",
    },
    pricing: {
      id: "pricing",
      plans: [
        {
          price: "$4.99",
          featured: true,
          icon: "/3D/icons-wallet-front-color.webp",
        },
      ],
    },
  },
};

export default templateConfig;
