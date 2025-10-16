import { motion, type SVGMotionProps } from "framer-motion";
import { useTranslation } from "react-i18next";

interface Props {
  toggle: () => void;
  isOpen: boolean;
}

const Path = (props: SVGMotionProps<SVGElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle, isOpen }: Props) => {
  const { t } = useTranslation();

  return (
    <button
      onClick={toggle}
      aria-label={isOpen ? t("nav.closeMenu") : t("nav.openMenu")}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation-menu"
    >
    <motion.svg
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="text-base-content"
      width="23"
      height="23"
      viewBox="0 0 23 23"
      aria-hidden="true"
    >
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.2 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </motion.svg>
  </button>
  );
};

export default MenuToggle;
