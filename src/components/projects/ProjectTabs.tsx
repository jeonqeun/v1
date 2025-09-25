"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { tabs } from "@/constants/tabs";

const transition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.15,
};

export default function ProjectTabs() {
  const searchParams = useSearchParams();
  const selectedTabId = searchParams?.get("tag") || tabs[0].id;

  const navRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState<{
    width: number;
    x: number;
  } | null>(null);

  useEffect(() => {
    const navEl = navRef.current;
    const selectedEl = navEl?.querySelector(`[data-tab-id="${selectedTabId}"]`);

    if (navEl && selectedEl) {
      const selectedRect = selectedEl.getBoundingClientRect();
      const navRect = navEl.getBoundingClientRect();
      const scrollLeft = navEl.scrollLeft;

      setIndicator({
        width: selectedRect.width,
        x: selectedRect.left - navRect.left + scrollLeft,
      });
    }
  }, [selectedTabId]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="sticky top-14 z-40 flex w-full flex-col border-b border-[var(--border-color)] bg-[var(--background)]"
    >
      <div className="flex w-full items-start justify-center px-4">
        <nav
          ref={navRef}
          className="no-scrollbar relative z-0 flex overflow-x-auto py-2 whitespace-nowrap"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = tab.id === selectedTabId;

            return (
              <Link
                key={tab.id}
                href={`?tag=${tab.id}`}
                scroll={false}
                className={`relative z-20 flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-opacity select-none hover:bg-[var(--hover-background)] hover:opacity-100 ${
                  isSelected ? "opacity-100" : "opacity-50"
                }`}
                data-tab-id={tab.id}
              >
                {Icon && <Icon size={14} />}
                {tab.label}
              </Link>
            );
          })}

          {indicator && (
            <motion.div
              className="absolute bottom-0 left-0 z-10 h-[2px] bg-[var(--foreground)]"
              initial={false}
              animate={{
                width: indicator.width,
                x: indicator.x,
                opacity: 1,
              }}
              transition={transition}
            />
          )}
        </nav>
      </div>
    </motion.div>
  );
}
