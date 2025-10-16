import "../../i18n";
import { useTranslation } from "react-i18next";
import type { TemplateConfig } from "../../utils/configType";
import InstagramLogo from "./svgs/instagram";
import FacebookLogo from "./svgs/facebook";
import TwitterLogo from "./svgs/twitter";
import Heart from "./svgs/Heart";
import { motion } from "framer-motion";

interface Props {
  config: TemplateConfig;
  lang?: string;
}

function Footer({ config, lang }: Props) {
  const { t } = useTranslation();
  const {
    footer: { links, legalLinks, socials },
  } = config;

  // Helper to construct language-aware URLs
  const getLocalizedUrl = (path: string) => {
    if (!lang || lang === 'en') {
      return path;
    }
    // For non-English languages, prepend language prefix
    return `/${lang}${path}`;
  };

  const footerLinks = [
    { href: getLocalizedUrl("/#features"), key: "nav.features" },
    { href: getLocalizedUrl("/#how-it-works"), key: "nav.howItWorks" },
    { href: getLocalizedUrl("/#pricing"), key: "nav.pricing" },
    { href: getLocalizedUrl("/#faq"), key: "nav.faq" },
  ];

  return (
    <footer className="relative mt-0 bg-gradient-to-b from-primary to-secondary/70">
      <div className="absolute -top-12 left-0 w-full h-12 overflow-hidden">
        <div className="w-full h-24 bg-primary rounded-t-[50%]" />
      </div>
      <div className="relative text-neutral-content px-4 pb-2 md:pb-0 pt-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-screen-lg mx-auto mt-12"
      >
        <div className="flex flex-col md:flex-row gap-8 mb-4">
          <nav className="flex flex-col items-center md:items-start justify-center gap-4">
            {footerLinks.map(({ key, href }, index) => (
              <motion.a
                key={index}
                variants={{
                  hidden: { opacity: 0, x: "-100%" },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ delay: index * 0.25 }}
                className="text-xl font-bold block uppercase whitespace-nowrap link no-underline text-white hover:text-white/70 md:text-4xl"
                href={href}
              >
                {t(key).toUpperCase()}
              </motion.a>
            ))}
          </nav>
          <motion.div
            className="flex-1 flex items-center justify-center md:justify-end md:pb-8"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <img
              src="/green-card-trips-logo-footer.svg"
              width={400}
              height={200}
              loading="lazy"
              alt="Green Card Trips Logo"
              className="h-32 md:h-[15rem] w-auto"
            />
          </motion.div>
        </div>
        <aside className="flex flex-col items-center justify-between mt-4 w-full overflow-hidden md:flex-row lg:overflow-visible border-b border-gray-500/30 pb-3">
          {(socials?.facebook || socials?.instagram || socials?.twitter) ? (
            <div className="flex items-center gap-3 text-primary mb-4 md:mb-0">
              {socials?.facebook && (
                <motion.a
                  variants={{
                    hidden: { opacity: 0, x: "-100%" },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ delay: 0.25 }}
                  className="w-8 h-8 hover:text-primary/50"
                  target="_blank"
                  href={socials.facebook}
                >
                  <FacebookLogo />
                </motion.a>
              )}
              {socials?.instagram && (
                <motion.a
                  variants={{
                    hidden: { opacity: 0, x: "-100%" },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ delay: 0.5 }}
                  className="w-8 h-8 hover:text-primary/50"
                  target="_blank"
                  href={socials.instagram}
                >
                  <InstagramLogo />
                </motion.a>
              )}
              {socials?.twitter && (
                <motion.a
                  variants={{
                    hidden: { opacity: 0, x: "-100%" },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ delay: 0.75 }}
                  className="w-8 h-8 hover:text-primary/50"
                  target="_blank"
                  href={socials.twitter}
                >
                  <TwitterLogo />
                </motion.a>
              )}
            </div>
          ) : (
            <div className="hidden md:block"></div>
          )}
          <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {legalLinks.termsAndConditions && (
                <motion.a
                  variants={{
                    hidden: { opacity: 0, scale: 0.4 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ delay: 0.25 }}
                  className="font-bold text-primary hover:text-primary/50 lg:whitespace-nowrap"
                  href={getLocalizedUrl("/terms-and-conditions")}
                >
                  Terms & conditions
                </motion.a>
              )}
              {legalLinks.privacyPolicy && (
                <motion.a
                  variants={{
                    hidden: { opacity: 0, scale: 0.4 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ delay: 0.5 }}
                  className="font-bold text-primary hover:text-primary/50 lg:whitespace-nowrap"
                  href={getLocalizedUrl("/privacy-policy")}
                >
                  Privacy policy
                </motion.a>
              )}
              {legalLinks.cookiesPolicy && (
                <motion.a
                  variants={{
                    hidden: { opacity: 0, scale: 0.4 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ delay: 0.75 }}
                  className="font-bold text-primary hover:text-primary/50 lg:whitespace-nowrap"
                  href={getLocalizedUrl("/cookies-policy")}
                >
                  Cookies policy
                </motion.a>
              )}
            </div>
            <motion.p
              variants={{
                hidden: { opacity: 0, scale: 0.4 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ delay: 1 }}
              className="md:whitespace-nowrap text-white"
            >
              All rights reserved © {new Date().getFullYear()}
            </motion.p>
          </div>
        </aside>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 pt-4 md:pt-0 text-neutral-content">
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 1.25 }}
            className="md:flex md:items-center md:gap-1 text-center md:text-left text-white"
            style={{ fontFamily: "'PlaywriteAR', cursive", fontSize: '0.7rem' }}
          >
            <span className="block md:inline">{t('footer.madeBy')}</span>
            <span className="block md:inline mt-2 md:mt-0">{t('footer.madeByFor')}</span>
            <br className="md:hidden" />
            <Heart className="w-6 h-6 md:w-3 md:h-3 inline-block" />
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 1.5 }}
            className="font-sans whitespace-nowrap md:pb-4 text-white text-center md:text-left"
            style={{ fontSize: '0.625rem' }}
          >
            {t('footer.developedBy')}{' '}
            <a
              href="https://fabapps.dev/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="underline hover:scale-105 transition-transform inline-block"
            >
              Fabulous Apps<span className="inline-block text-3xl text-blue-600 leading-none align-baseline">.</span>
            </a>
          </motion.p>
        </div>
      </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
