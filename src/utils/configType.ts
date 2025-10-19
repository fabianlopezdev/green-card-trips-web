export type TemplateConfig = {
    name: string;
    seo: {
        title: string;
        description: string;
    };
    logo: string;
    theme: string;
    backgroundGrid: boolean;
    forceTheme: boolean;
    showThemeSwitch: boolean;
    googleAnalytics?: string | undefined;
    googlePlayLink?: string | undefined;
    appStoreLink?: string | undefined;
    footer: {
        links: {
            title: string;
            href: string;
        }[];
        legalLinks: {
            termsAndConditions: boolean;
            privacyPolicy: boolean;
            cookiesPolicy: boolean;
        };
        socials?: {
            facebook?: string | undefined;
            instagram?: string | undefined;
            twitter?: string | undefined;
        } | undefined;
    };
    topNavbar: {
        cta?: string | undefined;
        disableWidthAnimation?: boolean | undefined;
        links: {
            title: string;
            href: string;
        }[];
        hideGooglePlay?: boolean | undefined;
        hideAppStore?: boolean | undefined;
    };
    appBanner?: {
        id?: string | undefined;
        screenshots: string[];
    } | undefined;
    home: {
        seo: {
            title: string;
            description: string;
        };
        hero: {
            id?: string | undefined;
            headlineMark?: number[] | undefined;
            screenshots: string[];
            rewards?: string[] | undefined;
        };
        testimonials?: {
            id?: string | undefined;
            title: string;
            subtitle?: string | undefined;
            cards: {
                name: string;
                comment: string;
            }[];
        } | undefined;
        highlight?: {
            id?: string | undefined;
        } | undefined;
        faq?: {
            id?: string | undefined;
            qa: Record<string, never>[];
        } | undefined;
        howItWorks?: {
            id?: string | undefined;
            steps: {
                image: string;
            }[];
        } | undefined;
        features?: {
            id?: string | undefined;
            cards: {
                icon: string;
            }[];
        } | undefined;
        pricing?: {
            id?: string | undefined;
            plans?: {
                featured?: boolean | undefined;
                price: string;
                icon?: string | undefined;
            }[] | undefined;
        } | undefined;
    };
}
