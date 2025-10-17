import AnimatedText from "../../../../components/animatedText";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { TemplateConfig } from "../../../../utils/configType";
import type { TranslationObject } from "../../../../utils/serverI18n";
import Airplane from "./svgs/airplane";

const planImages = [
  "/misc/wallet-front-color.webp",
  "/misc/money-front-color.webp",
  "/misc/locker-front-color.webp",
];

const planImageAltText = [
  "Wallet icon representing one-time payment",
  "Money icon representing subscription pricing",
  "Locker icon representing secure premium features",
];

const planBGs = ["bg-primary/80", "bg-secondary/80", "bg-accent/80"];

interface Props {
  config: TemplateConfig;
  translations: TranslationObject;
  currentLang?: string;
}

function Pricing({ config, translations }: Props) {
  const {
    home: { pricing },
  } = config;
  if (!pricing) return null;

  return (
    <section
      id={pricing.id}
      className="overflow-hidden max-w-screen-lg mx-auto px-4 py-12"
      aria-label="Pricing plans"
    >
      <div className="mb-12 max-w-none flex flex-col items-center prose prose-lg text-center">
        <h2 className="mb-0 font-normal">
          <AnimatedText text={translations.pricing.title} />
        </h2>
        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 0.7 }}
          viewport={{ once: true }}
          className="text-xl max-w-lg"
        >
          {translations.pricing.subtitle}
        </motion.p>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col max-w-none gap-8 md:flex-row md:justify-center"
      >
        {pricing.plans?.map((plan, index) => (
          <motion.article
            key={index}
            transition={{ delay: 0.25 + index * 0.25 }}
            className="md:w-1/3 flex relative"
            variants={{
              hidden: { x: "-100%", opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
          >
            {plan.featured && (
              <div className="absolute top-0 bottom-1 right-1 left-0 bg-secondary/50 -z-10 rounded-[var(--rounded-box)]" />
            )}
            <a
              href="/app"
              className={clsx(
                "border-2 border-primary/10 flex-1 card p-0 shadow-md bg-base-100 z-10 overflow-hidden cursor-pointer",
                {
                  "md:-translate-x-3 md:-translate-y-3 transition-transform md:hover:translate-x-0 md:hover:translate-y-0":
                    plan.featured,
                }
              )}
            >
              <div className="card-body p-0 text-center">
                <div className="flex relative border-b border-gray-300">
                  <div className={clsx("h-32 w-1/2 p-4", planBGs[index])}>
                    <img
                      src={planImages[index]}
                      width={160}
                      height={160}
                      loading="lazy"
                      alt={planImageAltText[index]}
                      className="m-0 h-full w-full object-contain"
                    />
                  </div>
                  <div className="w-1/2 flex items-center justify-center py-8">
                    <p className="text-[2.5rem]">{translations.pricing.price}</p>
                  </div>
                </div>
                <div className="w-full flex-1 flex flex-col mb-4">
                  {translations.pricing.features.map(
                    (feature: string, idx: number) => (
                      <div key={idx} className="flex relative items-center">
                        <span className="mx-6">
                          <Airplane />
                        </span>
                        <p className="flex-1 text-left my-2">{feature}</p>
                      </div>
                    )
                  )}
                </div>
                {pricing.actionText && (
                  <div className="w-full">
                    <span className="btn btn-primary btn-square no-animation rounded-none w-full text-lg h-auto py-4">
                      {translations.pricing.cta}
                    </span>
                  </div>
                )}
              </div>
            </a>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default Pricing;
