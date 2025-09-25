"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/images/logo.svg";
import { FaGithub, FaLink } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle";
import MobileNavDropdown from "./MobileNavDropdown";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navItems } from "@/constants/nav";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isHome = pathname === "/";
  const isProjectsList = pathname === "/projects";
  const isProjectDetail = pathname?.startsWith("/projects/") && !isProjectsList;

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 100);

      if (currentY > lastScrollY && currentY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome, lastScrollY]);

  let bgClass = "bg-transparent";
  let borderClass = "";

  if (isHome) {
    if (scrolled) {
      bgClass = "bg-[var(--background)]/80 backdrop-blur";
      borderClass = "border-b border-[var(--border-color)]";
    } else {
      bgClass = "bg-[var(--background)]/80 backdrop-blur";
      borderClass = "border-b border-[var(--border-color)]";
    }
  } else if (isProjectsList) {
    bgClass = "bg-[var(--background)]";
    borderClass = "";
  } else if (isProjectDetail) {
    bgClass = "bg-[var(--background)]";
    borderClass = "border-b border-[var(--border-color)]";
  }

  const variants = {
    shown: {
      y: 0,
      transition: { type: "spring", stiffness: 220, damping: 28, mass: 0.9 },
    },
    hidden: {
      y: "-100%",
      transition: { type: "spring", stiffness: 220, damping: 28, mass: 0.9 },
    },
  };

  return (
    <motion.header
      role="banner"
      initial={false}
      animate={isHome && hidden ? "hidden" : "shown"}
      variants={variants}
      className={[
        "fixed top-0 left-0 z-50 w-full will-change-transform",
        bgClass,
        borderClass,
      ].join(" ")}
    >
      <div className="mx-auto flex h-14 max-w-[1500px] items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="relative aspect-square w-6 md:w-8">
              <Image src={logo} alt="" fill className="object-cover" />
            </div>
          </Link>
          <MobileNavDropdown />
        </div>

        <div className="flex items-center gap-6">
          <nav className="relative hidden after:absolute after:top-1/2 after:-right-2 after:h-[18px] after:w-px after:-translate-y-1/2 after:bg-[var(--border-color)] after:content-[''] md:block">
            <ul className="flex items-center text-[14px] font-medium">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className="ml-2 inline-block rounded-[8px] px-3 py-1.5 opacity-85 hover:bg-[var(--hover-background)] hover:opacity-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />

          <div className="relative flex items-center text-[#3C3C43] before:absolute before:-left-2 before:h-[18px] before:w-px before:bg-[var(--border-color)] before:content-[''] dark:text-[#EBEBF5]">
            <Link
              href="https://github.com/jeonqeun"
              target="_blank"
              className="cursor-pointer rounded-[8px] p-2 opacity-75 hover:bg-[var(--hover-background)] hover:text-[#24292F] hover:opacity-100 dark:hover:text-[#EBEBF5]"
            >
              <FaGithub size={20} />
            </Link>
            <Link
              href="https://jeongeun.hashnode.dev"
              target="_blank"
              className="cursor-pointer rounded-[8px] p-2 opacity-75 hover:bg-[var(--hover-background)] hover:text-[#2862FF] hover:opacity-100"
            >
              <FaHashnode size={20} />
            </Link>
            <Link
              href="https://drive.google.com/file/d/1rdIBtaSZKLD3ZKQNGe12uKb5RIFDWjzx/view"
              target="_blank"
              className="cursor-pointer rounded-[8px] p-2 opacity-75 hover:bg-[var(--hover-background)] hover:text-[var(--primary)] hover:opacity-100"
            >
              <FaLink size={20} />
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
