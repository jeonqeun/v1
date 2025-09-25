"use client";

import { ReactNode } from "react";
import { useAccordion } from "./Accordion";
import { AnimatePresence, motion } from "framer-motion";

export default function AccordionPanel({ children }: { children: ReactNode }) {
  const { isActive } = useAccordion();

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        >
          <div>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
