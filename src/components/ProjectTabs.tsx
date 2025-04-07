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
  const selectedTabId = searchParams.get("tag") || tabs[0].id;

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
    <div className="w-full flex flex-col border-b border-[var(--border-color)]">
      <div className="w-full items-start justify-center flex px-4">
        <nav
          ref={navRef}
          className="flex overflow-x-auto whitespace-nowrap no-scrollbar relative z-0 py-2"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = tab.id === selectedTabId;

            return (
              <Link
                key={tab.id}
                href={`?tag=${tab.id}`}
                scroll={false}
                className={`text-sm font-medium relative rounded-md flex items-center gap-2 py-2 px-3 z-20 select-none transition-opacity hover:opacity-100 hover:bg-[var(--hover-background)] ${
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
              className="absolute z-10 bottom-0 left-0 h-[2px] bg-[var(--foreground)]"
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
    </div>
  );
}
