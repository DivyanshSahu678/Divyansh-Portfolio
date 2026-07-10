import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9999] h-1 w-full origin-left bg-[#CCFF00]"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}

export default ScrollProgress;