import "../../../../i18n";
import AnimatedText from "../../../../components/animatedText";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { TemplateConfig } from "../../../../utils/configType";
import NeonHexagon from "./svgs/neonHexagon";

interface Props {
  config: TemplateConfig;
}

function Faq({ config }: Props) {
  const { t } = useTranslation();
  const {
    home: { faq },
  } = config;
  const [activeIndex, setActiveIndex] = useState<number>();

  if (!faq) return null;

  const faqs = faq.qa.map((_, i) => `q${i + 1}`);

  return (
    <section id={faq.id} className="max-w-screen-lg mx-auto px-4 mb-12">
      <div className="flex flex-col md:flex-row">
        <div className="relative flex-1 flex items-center">
          <NeonHexagon />
          <div className="h-full w-full flex items-center justify-center">
            <h3 className="text-center font-normal text-3xl flex flex-col items-center mb-8 md:mb-0 md:text-left">
              <AnimatedText text={t("faq.title")} initial={{ y: "0%" }} />
            </h3>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex-1"
        >
          {faqs.map((key, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ delay: 0.25 + index * 0.25 }}
              className={clsx(
                "border-2 border-primary/30 my-2 collapse collapse-arrow",
                {
                  "collapse-open": activeIndex === index,
                }
              )}
            >
              <button
                onClick={() =>
                  setActiveIndex((current) =>
                    current === index ? undefined : index
                  )
                }
                className="text-start collapse-title text-lg font-medium"
              >
                {t(`faq.${key}.question`)}
              </button>
              <div
                className={clsx(
                  "grid grid-rows-[0fr] duration-300 transition-[grid-template-rows,padding]",
                  {
                    "grid-rows-[1fr] pb-4": activeIndex === index,
                  }
                )}
              >
                <p className="overflow-hidden mx-4 opacity-[.7]">
                  {t(`faq.${key}.answer`)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Faq;
