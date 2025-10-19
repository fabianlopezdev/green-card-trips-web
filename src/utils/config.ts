import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
  name: "Green Card Trips",
  seo: {
    title: "Green Card Trips - Track Your Path to U.S. Citizenship",
    description: "Simple, beautiful app for green card holders to track physical presence in the USA and manage their journey to citizenship with confidence.",
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
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  topNavbar: {
    cta: "Get the app",
    disableWidthAnimation: false,
    hideAppStore: false,
    hideGooglePlay: false,
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  appBanner: {
    id: "app-banner",
    title: "Ready to Take Control of Your Citizenship Journey?",
    subtitle:
      "Join green card holders who trust Green Card Trips to stay compliant and achieve their citizenship goals.",
    screenshots: [
      "dashboard",
      "trips",
      "modify-trip",
    ],
  },
  home: {
    seo: {
      title: "Green Card Trips - Track Your Path to U.S. Citizenship",
      description: "Simple, beautiful app for green card holders to track physical presence in the USA and manage their journey to citizenship with confidence.",
    },
    howItWorks: {
      id: "how-it-works",
      title: "How It Works",
      subtitle:
        "Get started in minutes and take control of your citizenship journey",
      steps: [
        {
          title: "Download the App",
          subtitle:
            "Install Green Card Trips on your iOS device.",
          image: "/stock/01.webp",
        },
        {
          title: "Enter Green Card Details",
          subtitle:
            "Add your green card date and select your eligibility path (3-year or 5-year).",
          image: "/stock/02.webp",
        },
        {
          title: "Log Your Trips",
          subtitle:
            "Manually enter past and upcoming trips with departure and return dates.",
          image: "/stock/03.webp",
        },
        {
          title: "Plan Travel Safely",
          subtitle:
            "Use the simulator to check how future trips affect your eligibility before booking.",
          image: "/stock/04.webp",
        },
        {
          title: "Stay Compliant",
          subtitle:
            "Monitor your dashboard for warnings, track renewal dates, and maintain your status.",
          image: "/stock/05.webp",
        },
      ],
    },
    features: {
      id: "features",
      title: "Everything You Need to Stay Compliant",
      subtitle:
        "Simple tools to track your presence, plan travel, and achieve your citizenship goals",
      cards: [
        {
          title: "Smart Trip Tracking",
          subtitle:
            "Easily log all your international trips with dates and destinations. See your days in the USA at a glance.",
          icon: "/3D/icons-mobile-front-color.webp",
        },
        {
          title: "Travel Simulator",
          subtitle:
            "Plan future trips with confidence. See exactly how travel affects your citizenship eligibility before you book.",
          icon: "/3D/clock-front-color.webp",
        },
        {
          title: "Dashboard Insights",
          subtitle:
            "Real-time presence statistics with 180-day and 365-day warnings. Know your status instantly.",
          icon: "/3D/icons-chart-front-color.webp",
        },
        {
          title: "Privacy & Security",
          subtitle:
            "Offline-first design with field-level encryption. Your data never leaves your device unless you choose cloud sync.",
          icon: "/3D/sheild-front-color.webp",
        },
      ],
    },
    faq: {
      id: "faq",
      title: "Frequently Asked Questions",
      qa: [
        {
          question: "What is Green Card Trips?",
          answer:
            "Green Card Trips is a mobile app that helps U.S. green card holders track their physical presence in the United States to meet citizenship eligibility requirements. It prevents costly mistakes by monitoring critical travel thresholds.",
        },
        {
          question: "How accurate are the calculations?",
          answer:
            "Our calculations follow official USCIS rules precisely. Departure and return days count as physical presence. And we monitor thresholds that affect continuous residence and physical presence for green card status.",
        },
        {
          question: "Is my data private and secure?",
          answer:
            "Absolutely. All data is stored locally on your device. Your information never leaves your phone. We don't have access to your data.",
        },
        {
          question: "Can I use it offline?",
          answer:
            "Yes! The entire app works offline. Log trips, use the simulator, and check your dashboard anywhere without internet.",
        },
        {
          question: "Is the app available on Android?",
          answer:
            "Not yet, but we're working on bringing Green Card Trips to Android soon! Currently, the app is only available for iOS devices. We'll announce the Android launch as soon as it's ready.",
        },
      ],
    },
    hero: {
      headline: "Your Peace of Mind Partner on the Path to U.S. Citizenship",
      subtitle:
        "Track your trips, plan your travel, and stay compliant with USCIS requirements. Green Card Trips makes citizenship eligibility simple and stress-free.",
      screenshots: [
        "dashboard",
        "modify-trip",
        "trips",
      ],
      rewards: undefined,
      usersDescription: "Trusted by green card holders",
      headlineMark: [0, 4],
    },
    pricing: {
      id: "pricing",
      title: "Simple, Transparent Pricing",
      subtitle: "One-time purchase.",
      actionText: "Download Now",
      plans: [
        {
          title: "Green Card Trips",
          price: "$4.99",
          featured: true,
          rows: [
            "Unlimited trip tracking",
            "Travel simulator",
            "Dashboard insights",
            "Compliance reminders",
            "Offline mode",
          ],
        },
      ],
    },
  },
};

export default templateConfig;
