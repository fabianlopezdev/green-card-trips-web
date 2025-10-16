import "../../../../i18n";
import AnimatedText from "../../../../components/animatedText";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { TemplateConfig } from "../../../../utils/configType";

interface Props {
  config: TemplateConfig;
}

function Features({ config }: Props) {
  const { t } = useTranslation();
  const {
    home: { features },
  } = config;
  if (!features) return null;

  const featureCards = [
    { icon: features.cards[0]?.icon, key: "tracking", altText: "Smart trip tracking icon" },
    { icon: features.cards[1]?.icon, key: "simulator", altText: "Travel simulator icon" },
    { icon: features.cards[2]?.icon, key: "dashboard", altText: "Dashboard insights icon" },
    { icon: features.cards[3]?.icon, key: "privacy", altText: "Privacy and security icon" },
  ];

  const cardBackgroundColors = [
    "rgb(249, 186, 17)",
    "", // Keep default bg-secondary/50
    "rgba(81, 13, 178, 0.2)",
    "rgb(50, 167, 137)",
  ];

  return (
    <section id={features.id} className="max-w-screen-lg mx-auto px-4 py-12" aria-label="App features">
      <div className="mb-12 max-w-none flex flex-col items-center prose prose-lg text-center">
        <h2 className="mb-3 font-normal">
          <AnimatedText text={t("features.title")} />
        </h2>
        <motion.div
          className="h-2 bg-gradient-to-r from-primary to-secondary rounded-full overflow-hidden [--w:200px] md:[--w:350px]"
          whileInView={{ width: "var(--w)" }}
          viewport={{ amount: 1, once: true, margin: "0px 0px -100px 0px" }}
        />
        {features.subtitle && (
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 0.7 }}
            viewport={{ once: true }}
            className="text-md max-w-lg"
          >
            {t("features.subtitle")}
          </motion.p>
        )}
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6"
      >
        {featureCards.map((feat, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { x: "-100%", opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            transition={{ delay: 0.25 + index * 0.25 }}
            className={clsx(
              "shadow-md border-primary/10 border-2 card relative overflow-hidden group px-12",
              {
                "col-span-2":
                  index === featureCards.length - 1 &&
                  featureCards.length % 2 === 1,
              }
            )}
          >
            <div className="relative mb-4 mt-4">
              <div
                className={clsx(
                  "absolute left-0 right-0 top-0 bottom-0 -z-10 rounded-lg",
                  {
                    "bg-secondary/50": !cardBackgroundColors[index],
                  }
                )}
                style={
                  cardBackgroundColors[index]
                    ? { backgroundColor: cardBackgroundColors[index] }
                    : undefined
                }
              />
              <figure className="py-4">
                <img
                  src={feat.icon}
                  width={160}
                  height={160}
                  loading="lazy"
                  alt={feat.altText}
                  className="w-40 transition-transform group-hover:scale-90"
                />
              </figure>
            </div>
            <div className="w-full pt-0 px-0 card-body items-center text-center transition-transform max-w-none group-hover:scale-95">
              <h2 className="card-title text-2xl font-bold">
                {t(`features.${feat.key}.title`)}
              </h2>
              <div className="h-0.5 w-full bg-primary/10" />
              <p className="opacity-[.7]">
                {t(`features.${feat.key}.description`)}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Features;
