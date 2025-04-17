"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[4px] bg-[#F67373] origin-left z-[9999]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
