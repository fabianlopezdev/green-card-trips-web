import "../../i18n";
import AnimatedList from "../../components/animatedList";
import MenuToggle from "../../components/menuToggle";
import clsx from "clsx";
import { easeIn, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { TemplateConfig } from "../../utils/configType";
import type { TranslationObject } from "../../utils/serverI18n";
import ThemeSwitcher from "./themeSwitcher";
import LanguageSwitcher from "../languageSwitcher";
import AppStoreDropdown from "../appStoreDropdown";
import GreenCardLogoSimplified from "./GreenCardLogoSimplified";

interface Props {
  config: TemplateConfig;
  translations: TranslationObject;
  currentLang?: string;
}

function Navbar({ config, translations, currentLang }: Props) {
  const { i18n } = useTranslation();
  const {
    name,
    showThemeSwitch,
    topNavbar,
    googlePlayLink,
    appStoreLink,
  } = config;

  // Map browser language to supported language folders
  // Supported: en, es, tl, vi, zh-CN
  const getLanguageFolder = (lang: string) => {
    const supportedLanguages = ['en', 'es', 'tl', 'vi', 'zh-CN'];
    // If exact match, use it
    if (supportedLanguages.includes(lang)) return lang;
    // Otherwise try base language (e.g., en-US -> en)
    const baseLang = lang.split('-')[0];
    if (supportedLanguages.includes(baseLang)) return baseLang;
    // Fallback to English
    return 'en';
  };
  const languageFolder = getLanguageFolder(i18n.language);

  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [targetWidth, setTargetWidth] = useState("91%");

  useEffect(() => {
    const calculateWidth = () => {
      const vw = window.innerWidth;
      if (vw >= 1025) {
        setTargetWidth("91%");
      } else if (vw <= 932) {
        setTargetWidth("100%");
      } else {
        // Linear interpolation between 932px (100%) and 1025px (91%)
        const percent = 100 - ((vw - 932) / (1025 - 932)) * 9;
        setTargetWidth(`${percent}%`);
      }
    };

    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    return () => window.removeEventListener('resize', calculateWidth);
  }, []);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1 / 3], [0, 12], {
    ease: easeIn,
  });
  const width = useTransform(scrollYProgress, [0, 1 / 3], ["100%", targetWidth], {
    ease: easeIn,
  });
  const opacity = useTransform(scrollYProgress, [0, 1 / 3], [0, 1], {
    ease: easeIn,
  });

  // Map config links to translation keys
  const navLinks = [
    { href: "/#features", key: "nav.features" },
    { href: "/#how-it-works", key: "nav.howItWorks" },
    { href: "/#pricing", key: "nav.pricing" },
    { href: "/#faq", key: "nav.faq" },
  ];

  return (
    <motion.nav
      className="opacity-0 max-w-screen-lg mx-auto fixed top-0 left-0 right-0 z-50"
      animate={{ opacity: 1 }}
      aria-label="Main navigation"
    >
      <motion.div
        style={{
          width:
            isMobileNavVisible || topNavbar.disableWidthAnimation
              ? "100%"
              : width,
          translateY: isMobileNavVisible ? 0 : y,
        }}
        className="will-change-[width,transform] transition-all mx-auto navbar relative px-4 max-nav:!w-full"
        suppressHydrationWarning
      >
        <motion.div
          style={{ opacity: isMobileNavVisible ? 1 : opacity }}
          className={clsx(
            "will-change-[border-radius,opacity] transition-all z-[-1] rounded-full absolute left-0 right-0 top-0 bottom-0 bg-base-100 shadow-xl",
            {
              "rounded-none": isMobileNavVisible,
            }
          )}
          suppressHydrationWarning
        />
        <div className="navbar-start flex-1 max-nav:flex-auto">
          <a href="/" className="flex items-center" aria-label={translations.nav.homeLink}>
            <GreenCardLogoSimplified className="h-16" />
            <span className="font-logo font-medium mx-1 text-2xl tracking-[-0.01em]">{name}</span>
          </a>
        </div>
        <div className="nav:hidden items-center max-nav:w-auto max-nav:flex-shrink-0">
          <MenuToggle
            toggle={() => setIsMobileNavVisible((current) => !current)}
            isOpen={isMobileNavVisible}
            openMenuLabel={translations.nav.openMenu}
            closeMenuLabel={translations.nav.closeMenu}
          />
        </div>
        <div className="navbar-end hidden font-medium nav:flex">
          <ul className="flex gap-4 px-1 items-center">
            
            {navLinks.map(({ key, href }, index) => (
              <li key={index}>
                <a
                  className="text-sm whitespace-nowrap link link-hover"
                  href={href}
                >
                  {translations.nav[key.split('.')[1] as keyof typeof translations.nav]}
                </a>
              </li>
            ))}
            <div className="flex border-l border-current pl-2">
            <LanguageSwitcher />
            {showThemeSwitch && <ThemeSwitcher config={config} />}
            </div>
          </ul>
          {topNavbar.cta && (
            <AppStoreDropdown
              config={config}
              getAppLabel={translations.nav.getApp}
              downloadAppStoreLabel={translations.nav.downloadAppStore}
              downloadPlayStoreLabel={translations.nav.downloadPlayStore}
              currentLang={currentLang || i18n.language}
              translations={translations}
            />
          )}
        </div>
      </motion.div>
      <AnimatedList
        listKey="mobile-navbar"
        listClassName="absolute bg-base-100 top-20 h-[calc(100vh-5rem)] w-full px-4 flex flex-col gap-2 nav:hidden overflow-y-auto"
        isVisible={isMobileNavVisible}
      >
        <nav aria-label="Mobile navigation" className="my-auto flex flex-col gap-2">
          {showThemeSwitch && (
            <motion.div
              variants={{
                show: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "100%" },
              }}
              className="w-full flex justify-center py-2"
            >
              <ThemeSwitcher config={config} />
            </motion.div>
          )}
          <ul className="list-none flex flex-col gap-2 m-0 p-0">
            {navLinks.map(({ key, href }, index) => (
              <li key={index}>
                <motion.a
                  className="w-full py-3 px-4 text-center text-lg block"
                  href={href}
                  onClick={() => setIsMobileNavVisible(false)}
                  variants={{
                    show: { x: 0 },
                    hidden: { x: "-100%" },
                  }}
                >
                  {translations.nav[key.split('.')[1] as keyof typeof translations.nav]}
                </motion.a>
              </li>
            ))}
          </ul>
          <motion.div
            variants={{
              show: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "100%" },
            }}
            className="w-full"
          >
            <LanguageSwitcher variant="mobile" />
          </motion.div>
        </nav>
        <motion.div
          variants={{
            show: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: "100%" },
          }}
          className="flex justify-center items-center mt-auto pb-6"
        >
          <ul className="flex gap-2 list-none m-0 p-0">
            {googlePlayLink && (
              <li>
                <a href={googlePlayLink} target="_blank" rel="noopener noreferrer" aria-label={translations.nav.downloadPlayStore}>
                  <img className="h-14" width={156} height={56} loading="lazy" src={`/stores/${languageFolder}/google-play.svg`} alt={translations.alt.stores.googlePlay} />
                </a>
              </li>
            )}
            {appStoreLink && (
              <li>
                <a href={appStoreLink} target="_blank" rel="noopener noreferrer" aria-label={translations.nav.downloadAppStore}>
                  <img className="h-14" width={156} height={56} loading="lazy" src={`/stores/${languageFolder}/app-store.svg`} alt={translations.alt.stores.appStore} />
                </a>
              </li>
            )}
          </ul>
        </motion.div>
      </AnimatedList>
    </motion.nav>
  );
}

export default Navbar;
