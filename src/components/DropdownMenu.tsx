"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { LuCheck } from "react-icons/lu";

const navItems = [
  {
    id: 1,
    name: "Intro",
    link: "/",
  },
  {
    id: 2,
    name: "Projects",
    link: "/projects",
  },
  {
    id: 3,
    name: "Dictonary",
    link: "/dict",
  },
  {
    id: 4,
    name: "About",
    link: "/about",
  },
];

export default function DropdownMenu() {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const currentItem = navItems.find((item) => item.link === pathname);

  return (
    <div className="block md:hidden relative text-[14px]" ref={ref}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`flex items-center justify-center gap-1.5 font-semibold cursor-pointer px-2 py-1.5 rounded-[8px] hover:bg-[var(--hover-background)] ${
          isOpen ? "bg-[var(--hover-background)]" : ""
        }`}
      >
        <span>{currentItem?.name}</span>
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
              className="absolute top-full left-0 mt-1 min-w-[150px] bg-white dark:bg-[#09090b] p-1 border border-[#E4E4E7] dark:border-[#27272A] rounded-md text-[13px] font-medium capitalize cursor-pointer shadow-md"
            >
              <ul>
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className={`rounded-sm transition-all duration-300 ${
                      item.link === pathname
                        ? "bg-[#F4F4F5] dark:bg-[#27272A] cursor-default text-[#F67373]"
                        : "hover:bg-[#F4F4F5] hover:dark:bg-[#27272A] cursor-pointer"
                    }`}
                  >
                    <div className="flex items-center justify-between px-2 py-1.5 w-full">
                      <Link href={item.link} className="w-full">
                        {item.name}
                      </Link>
                      {item.link === pathname && <LuCheck />}
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
