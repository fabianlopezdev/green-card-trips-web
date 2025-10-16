import "../../../../i18n";
import AnimatedText from "../../../../components/animatedText";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { TemplateConfig } from "../../../../utils/configType";
import SwirlArrowBottomLeft from "./svg/swirlArrowBottomLeft";
import SwirlArrowBottomRight from "./svg/swirlArrowBottomRight";
import SwirlArrowBottom from "./svg/swirlArrowBottom";

interface Props {
  config: TemplateConfig;
}

function HowItWorks({ config }: Props) {
  const { t } = useTranslation();
  const {
    home: { howItWorks },
  } = config;

  if (!howItWorks) return null;

  // Map step titles to descriptive alt text
  const stepAltText = [
    "Person downloading app from the App Store on smartphone",
    "Hands entering green card details into the app",
    "User logging international trip information with dates",
    "Travel planning interface showing trip simulation",
    "Dashboard displaying compliance status and renewal reminders",
  ];

  const steps = howItWorks.steps.map((step, i) => ({
    image: step.image,
    key: `step${i + 1}`,
    altText: stepAltText[i] || `Step ${i + 1}: ${step.title}`,
  }));

  return (
    <section
      id={howItWorks.id}
      className="overflow-hidden max-w-screen-lg mx-auto px-4 py-12"
      aria-label="How the app works"
    >
      <div className="mb-12 max-w-none flex flex-col items-center prose prose-lg text-center">
        <h2 className="mb-3 font-normal">
          <AnimatedText text={t("howItWorks.title")} />
        </h2>
        {howItWorks.subtitle && (
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 0.7 }}
            viewport={{ once: true }}
            className="text-md max-w-lg"
          >
            {t("howItWorks.subtitle")}
          </motion.p>
        )}
      </div>
      <div className="flex flex-col gap-52">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className={clsx(
              "text-primary relative flex flex-col rounded-md md:flex-row",
              {
                "md:flex-row-reverse": index % 2 === 0,
              }
            )}
          >
            {index < steps.length - 1 && (
              <>
                <motion.div
                  variants={{
                    hidden: {
                      scale: 0,
                      translateX: "-50%",
                    },
                    visible: { scale: 1, translateX: "-50%" },
                  }}
                  transition={{ stiffness: 150, type: "spring" }}
                  className="hidden w-48 absolute -bottom-44 left-1/2 md:block"
                >
                  {index % 2 === 0 ? (
                    <SwirlArrowBottomLeft />
                  ) : (
                    <SwirlArrowBottomRight />
                  )}
                </motion.div>
                <motion.div
                  variants={{
                    hidden: {
                      scale: 0,
                      translateX: "-50%",
                    },
                    visible: { scale: 1, translateX: "-50%" },
                  }}
                  transition={{ stiffness: 150, type: "spring" }}
                  className="w-16 absolute -bottom-48 left-1/2 md:hidden md:-bottom-36"
                >
                  <SwirlArrowBottom />
                </motion.div>
              </>
            )}
            <motion.div
              variants={{
                hidden: { x: index % 2 === 0 ? "100%" : "-100%", opacity: 0 },
                visible: { x: "0%", opacity: 1 },
              }}
              className="mb-8 flex flex-col text-center justify-center prose flex-1"
            >
              <div className="pb-0 font-sketch text-8xl text-primary">
                {index < 10 && 0}
                {index + 1}
              </div>
              <h3 className="mt-0 text-2xl font-bold">
                {t(`howItWorks.${step.key}.title`)}
              </h3>
              <p className="mx-auto max-w-sm opacity-[.7]">
                {t(`howItWorks.${step.key}.description`)}
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { x: index % 2 === 1 ? "100%" : "-100%", opacity: 0 },
                visible: { x: "0%", opacity: 1 },
              }}
              className="flex-1 flex justify-center"
            >
              <img
                className="rounded-3xl lg:w-[75%]"
                src={step.image}
                width={400}
                height={300}
                loading="lazy"
                alt={step.altText}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
