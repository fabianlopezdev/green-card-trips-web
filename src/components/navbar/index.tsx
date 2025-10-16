import AnimatedList from "../../components/animatedList";
import MenuToggle from "../../components/menuToggle";
import clsx from "clsx";
import { easeIn, motion, useScroll, useTransform } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ConfigContext } from "../../utils/configContext";
import ThemeSwitcher from "./themeSwitcher";
import LanguageSwitcher from "../languageSwitcher";
import AppStoreDropdown from "../appStoreDropdown";
import GreenCardLogoSimplified from "./GreenCardLogoSimplified";

function Navbar() {
  const { t } = useTranslation();
  const {
    name,
    showThemeSwitch,
    topNavbar,
    googlePlayLink,
    appStoreLink,
  } = useContext(ConfigContext)!;

  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [targetWidth, setTargetWidth] = useState("88%");

  useEffect(() => {
    const calculateWidth = () => {
      const vw = window.innerWidth;
      if (vw >= 1025) {
        setTargetWidth("88%");
      } else if (vw <= 890) {
        setTargetWidth("98%");
      } else {
        // Linear interpolation between 890px (98%) and 1025px (88%)
        const percent = 98 - ((vw - 890) / (1025 - 890)) * 10;
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
      className="opacity-0 max-w-screen-lg mx-auto sticky top-0 z-50"
      animate={{ opacity: 1 }}
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
      >
        <motion.div
          style={{ opacity: isMobileNavVisible ? 1 : opacity }}
          className={clsx(
            "will-change-[border-radius,opacity] transition-all z-[-1] rounded-full absolute left-0 right-0 top-0 bottom-0 bg-base-100 shadow-xl",
            {
              "rounded-none": isMobileNavVisible,
            }
          )}
        />
        <div className="navbar-start flex-1 max-nav:flex-auto">
          <a href="/" className="flex items-center" aria-label={t("nav.homeLink")}>
            <GreenCardLogoSimplified className="h-16" />
            <span className="font-logo font-medium mx-1 text-2xl tracking-[-0.01em]">{name}</span>
          </a>
        </div>
        <div className="nav:hidden items-center max-nav:w-auto max-nav:flex-shrink-0">
          <MenuToggle
            toggle={() => setIsMobileNavVisible((current) => !current)}
            isOpen={isMobileNavVisible}
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
                  {t(key)}
                </a>
              </li>
            ))}
            <div className="flex border-l border-current pl-2">
            <LanguageSwitcher />
            {showThemeSwitch && <ThemeSwitcher />}
            </div>
          </ul>
          {topNavbar.cta && <AppStoreDropdown />}
        </div>
      </motion.div>
      <AnimatedList
        id="mobile-navigation-menu"
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
              <ThemeSwitcher />
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
                  {t(key)}
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
                <a href={googlePlayLink} target="_blank" rel="noopener noreferrer" aria-label={t("nav.downloadPlayStore")}>
                  <img className="h-14" width={156} height={56} loading="lazy" src="/stores/google-play.svg" alt="" />
                </a>
              </li>
            )}
            {appStoreLink && (
              <li>
                <a href={appStoreLink} target="_blank" rel="noopener noreferrer" aria-label={t("nav.downloadAppStore")}>
                  <img className="h-14" width={156} height={56} loading="lazy" src="/stores/app-store.svg" alt="" />
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
