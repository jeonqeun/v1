"use client";

import { navItems } from "@/constants/nav";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

export default function MobileNavDropdown() {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const currentItem = navItems.find((item) => {
    if (item.link === "/") {
      return (
        pathname === "/" ||
        (!pathname.startsWith("/dict") && pathname.startsWith("/"))
      );
    }
    return pathname.startsWith(item.link);
  });

  return (
    <div className="relative block text-[14px] md:hidden" ref={ref}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`flex cursor-pointer items-center justify-center gap-1.5 rounded-[8px] px-2 py-1.5 font-semibold hover:bg-[var(--hover-background)] ${
          isOpen ? "bg-[var(--hover-background)]" : ""
        }`}
      >
        <span>{currentItem?.label}</span>
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
              className="absolute top-full left-0 mt-1 min-w-[150px] cursor-pointer rounded-md border border-[#E4E4E7] bg-white px-1 text-[13px] font-medium capitalize shadow-md dark:border-[#27272A] dark:bg-[#09090b]"
            >
              <ul>
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className={`overflow-hidden border-b border-[var(--border-color)] transition-all duration-300 last:border-0 ${
                      item.id === currentItem?.id
                        ? "font-semibold text-[#F67373]"
                        : "cursor-pointer"
                    }`}
                  >
                    <div className="my-1 flex w-full items-center justify-between rounded-sm p-2 hover:bg-[#F4F4F5] hover:dark:bg-[#27272A]">
                      <Link href={item.link} className="w-full">
                        {item.label}
                      </Link>
                      {item.id === currentItem?.id && <FaCheck />}
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
