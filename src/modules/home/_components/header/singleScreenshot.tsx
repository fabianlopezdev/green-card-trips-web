import { motion, transform, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";

interface Props {
  index: number;
  totalCount: number;
  scrollYProgress: MotionValue<number>;
  src: string;
  altText: string;
}

function SingleScreenshot({ scrollYProgress, index, totalCount, src, altText }: Props) {
  const x = useTransform(scrollYProgress, (y) => {
    if (index > 0 && index % 2 === 0) {
      const i = totalCount - index;
      const transformer = transform(
        [(i - 1) / totalCount, i / totalCount],
        [0, 1]
      );
      return -transformer(y) * 100 + "%";
    }
    return 0;
  });
  const y = useTransform(scrollYProgress, (y) => {
    if (index % 2 === 1) {
      const i = totalCount - index;
      const transformer = transform(
        [(i - 1) / totalCount, i / totalCount],
        [0, 1]
      );
      return -transformer(y) * 100 + "%";
    }
    return 0;
  });
  // Generate responsive image paths
  const basePath = src.replace('.webp', '');

  return (
    <motion.img
      srcSet={`${basePath}-250.webp 250w, ${basePath}-298.webp 298w, ${basePath}-311.webp 311w, ${basePath}-327.webp 327w`}
      sizes="(max-width: 768px) 327px, 298px"
      src={`${basePath}-327.webp`}
      loading={index === 0 ? "eager" : "lazy"}
      // @ts-ignore - fetchpriority is a valid HTML attribute
      fetchpriority={index === 0 ? "high" : "low"}
      decoding="async"
      alt={altText}
      style={{ translateX: x, translateY: y, scale: 1 }}
      className="absolute overflow-hidden w-full h-full object-cover"
    />
  );
}

export default SingleScreenshot;
