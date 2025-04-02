"use client";

import { tabs } from "@/constants/tabs";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { LuCheck } from "react-icons/lu";

export default function DropdownFilter({
  selectedTab,
}: {
  selectedTab: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const currentItem = tabs.find((tab) => tab.id === selectedTab);

  return (
    <div className="block md:hidden relative text-[14px]" ref={ref}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`flex items-center justify-center gap-3 font-semibold cursor-pointer px-2 py-1.5 rounded-[8px] hover:bg-[var(--hover-background)] ${
          isOpen ? "bg-[var(--hover-background)]" : ""
        }`}
      >
        <div className="flex items-center gap-2">
          <div
            className={`w-3 aspect-square rounded-full border border-[var(--border-color)] mt-0.5 ${currentItem?.color}`}
          />
          <span>{currentItem ? currentItem?.label : "All"}</span>
        </div>
        <span className="mt-0.5">
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="fixed inset-0"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute top-full left-0 mt-1 min-w-[180px] bg-white dark:bg-[#09090b] p-1 border border-[#E4E4E7] dark:border-[#27272A] rounded-md text-[13px] font-medium cursor-pointer shadow-md z-10"
            >
              <ul>
                {tabs.map((tab) => (
                  <li
                    key={tab.id}
                    className={`rounded-sm transition-all duration-300 ${
                      tab.id === selectedTab
                        ? "bg-[#F4F4F5] dark:bg-[#27272A] cursor-default text-[#F67373]"
                        : "hover:bg-[#F4F4F5] hover:dark:bg-[#27272A] cursor-pointer"
                    }`}
                  >
                    <div className="flex items-center justify-between p-2 w-full">
                      <Link
                        href={`?tag=${tab.id}`}
                        className="flex items-center gap-2 w-full"
                      >
                        <div
                          className={`w-3 aspect-square rounded-full border border-[var(--border-color)] mt-0.5 ${tab.color}`}
                        />
                        <p>{tab.label}</p>
                      </Link>
                      {tab.id === selectedTab && <LuCheck />}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
