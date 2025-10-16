import "../../i18n";
import { useTranslation } from "react-i18next";
import type { TemplateConfig } from "../../utils/configType";
import Spill from "./svgs/spill";
import IphoneFrame from "../../components/iphoneFrame";
import { motion } from "framer-motion";
import clsx from "clsx";

interface Props {
  config: TemplateConfig;
}

function AppBanner({ config }: Props) {
  const { t, i18n } = useTranslation();
  const { googlePlayLink, appStoreLink, appBanner } = config;

  // Map browser language to supported language folders
  // Supported: en, es, tl, vi, zh-CN
  const getLanguageFolder = (lang: string | undefined) => {
    // Fallback to English if language is not available (SSR)
    if (!lang) return 'en';

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

  // Map screenshot names to descriptive alt text
  const screenshotAltText: Record<string, string> = {
    "dashboard": "App dashboard showing trip statistics and citizenship eligibility status",
    "trips": "Trip history list showing all international travel",
    "modify-trip": "Add or edit trip form with departure and return dates",
  };

  if (!appBanner) return null;
  return (
    <motion.section
      id={appBanner.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="relative max-w-screen-lg mx-auto px-4 -mb-3 -z-10 md:-mb-2 lg:mb-0"
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.9,
          },
          visible: {
            opacity: 1,
            scale: 1,
          },
        }}
        transition={{
          mass: 0.4,
          type: "spring",
          duration: 0.2,
        }}
      >
        <div className="p-4 pb-20 bg-primary text-primary-content rounded-t-[var(--rounded-box)] flex flex-col items-center md:flex-row">
          <div className="flex-1 flex flex-col items-center justify-center min-h-full">
            <motion.h2
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-0 mb-4 text-4xl md:text-6xl"
            >
              {t("appBanner.title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-primary-content/70 whitespace-pre-wrap text-left m-0 mt-1 md:text-lg"
            >
              {t("appBanner.subtitle")}
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="list-none flex gap-4 my-6 p-0 w-full"
            >
              {googlePlayLink && (
                <li className="m-0 p-0">
                  <a href={googlePlayLink}>
                    <img
                      className="h-14"
                      width={156}
                      height={56}
                      loading="lazy"
                      alt="google play logo"
                      src="/stores/google-play.svg"
                    />
                  </a>
                </li>
              )}
              {appStoreLink && (
                <li className="m-0 p-0">
                  <a href={appStoreLink}>
                    <img
                      className="h-14"
                      width={156}
                      height={56}
                      loading="lazy"
                      alt="app store logo"
                      src="/stores/app-store.svg"
                    />
                  </a>
                </li>
              )}
            </motion.ul>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative flex-1 flex justify-center z-20"
          >
            {appBanner.screenshots.map((name, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    scale: index > 0 ? 0.9 : 1,
                    opacity: 0,
                    rotate: 0,
                  },
                  visible: {
                    scale: index > 0 ? 0.9 : 1,
                    opacity: 1,
                    rotate: index === 0 ? 0 : index === 1 ? "-30deg" : "30deg",
                  },
                }}
                transition={{
                  stiffness: 150,
                  mass: 0.5,
                  type: "spring",
                  delay: index > 0 ? 0.8 : 0.5,
                }}
                className={clsx(
                  "h-[30rem]",
                  index === 0 && "relative z-20 block",
                  index === 1 && "absolute origin-bottom-left hidden xl:block",
                  index === 2 && "absolute origin-bottom-right hidden xl:block"
                )}
              >
                <IphoneFrame
                  src={`/screenshots/${languageFolder}/${name}.webp`}
                  altText={screenshotAltText[name] || `App screenshot: ${name}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* <Spill className="-translate-y-1"/> */}
      </motion.div>
    </motion.section>
  );
}

export default AppBanner;
