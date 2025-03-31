"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuSun, LuMoon } from "react-icons/lu";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <div
      onClick={toggleTheme}
      className={`w-[40px] h-[22px] rounded-full p-0.5 bg-[#EFF0F3] dark:bg-[#272930] border border-[#C2C2C4] dark:border-[#3D3F45] hover:border-[#F67373] flex items-center cursor-pointer transition-colors ${
        isDark ? "justify-end" : "justify-start"
      }`}
    >
      <motion.div
        className="w-[18px] h-[18px] rounded-full bg-white dark:bg-black shadow-md flex items-center justify-center"
        layout
        transition={spring}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ rotate: 360, opacity: 1 }}
            exit={{ rotate: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center"
          >
            {isDark ? <LuMoon size={12} /> : <LuSun size={12} />}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
