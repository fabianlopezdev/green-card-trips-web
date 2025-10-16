import { easeIn, motion, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";

interface Props {
  className?: string;
  scrollYProgress: MotionValue<number>;
}

function GradientBlobs({ className, scrollYProgress }: Props) {
  // Parallax scroll effect - blobs move before other elements
  const y = useTransform(scrollYProgress, [0.85, 1], ["0%", "-30%"], {
    ease: easeIn,
  });

  return (
    <motion.div
      className={className}
      style={{
        y, // Apply parallax transform
        width: '800px',
        height: '800px',
        position: 'absolute',
        overflow: 'visible',
        pointerEvents: 'none'
      }}
    >
      {/* Blob 1 - Large */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          x: [0, 120, -40, 0],
          y: [0, -80, 60, 0],
        }}
        transition={{
          scale: { duration: 0.8 },
          opacity: { duration: 0.8 },
          x: { duration: 10, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
          y: { duration: 10, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }
        }}
        style={{
          position: 'absolute',
          width: '450px',
          height: '500px',
          left: '100px',
          top: '150px',
          background: 'linear-gradient(135deg, oklch(var(--p) / 0.4) 0%, oklch(var(--s) / 0.3) 100%)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          filter: 'blur(60px)',
        }}
      />

      {/* Blob 2 - Medium */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          x: [0, -100, 80, 0],
          y: [0, 120, -60, 0],
        }}
        transition={{
          scale: { duration: 0.8, delay: 0.2 },
          opacity: { duration: 0.8, delay: 0.2 },
          x: { duration: 12, repeat: Infinity, repeatType: "loop", ease: "easeInOut", delay: 0.5 },
          y: { duration: 12, repeat: Infinity, repeatType: "loop", ease: "easeInOut", delay: 0.5 }
        }}
        style={{
          position: 'absolute',
          width: '380px',
          height: '420px',
          left: '300px',
          top: '250px',
          background: 'linear-gradient(225deg, oklch(var(--s) / 0.35) 0%, oklch(var(--p) / 0.25) 100%)',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          filter: 'blur(50px)',
        }}
      />

      {/* Blob 3 - Small */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          x: [0, 60, -80, 0],
          y: [0, -100, 40, 0],
        }}
        transition={{
          scale: { duration: 0.8, delay: 0.4 },
          opacity: { duration: 0.8, delay: 0.4 },
          x: { duration: 8, repeat: Infinity, repeatType: "loop", ease: "easeInOut", delay: 1 },
          y: { duration: 8, repeat: Infinity, repeatType: "loop", ease: "easeInOut", delay: 1 }
        }}
        style={{
          position: 'absolute',
          width: '320px',
          height: '350px',
          left: '400px',
          top: '80px',
          background: 'linear-gradient(315deg, oklch(var(--s) / 0.3) 0%, oklch(var(--p) / 0.35) 100%)',
          borderRadius: '40% 60% 60% 40% / 70% 30% 70% 30%',
          filter: 'blur(45px)',
        }}
      />
    </motion.div>
  );
}

export default GradientBlobs;
