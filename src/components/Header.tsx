"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import logo from "../../public/images/logo.svg";
import { FaGithub } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { CgGirl } from "react-icons/cg";

export default function Header() {
  const pathname = usePathname();
  const isHome =
    pathname === "/" || pathname === "" || pathname?.startsWith("/?");

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-[var(--background)] ${
        isHome ? "" : "border-b border-[var(--border-color)]"
      }`}
    >
      <div className="flex items-center justify-between max-w-[1500px] h-[60px] mx-auto px-4">
        <Link href="/">
          <div className="relative w-6 md:w-8 aspect-square">
            <Image src={logo} alt="" fill className="object-cover" />
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <ThemeToggle />
          <div className="relative flex items-center text-[#3C3C43] dark:text-[#EBEBF5] before:content-[''] before:absolute before:bg-[var(--border-color)] before:w-px before:h-[20px] before:-left-2">
            <Link
              href="https://github.com/jeonoeun"
              target="_blank"
              className="p-2 rounded-[8px] hover:bg-[var(--hover-background)] opacity-75 hover:opacity-100 cursor-pointer hover:text-[#24292F] dark:hover:text-[#EBEBF5]"
            >
              <FaGithub size={20} />
            </Link>
            <Link
              href="https://github.com/jeonoeun"
              target="_blank"
              className="p-2 rounded-[8px] hover:bg-[var(--hover-background)] opacity-75 hover:opacity-100 cursor-pointer hover:text-[#FFD63A]"
            >
              <CgGirl size={24} />
            </Link>
            <Link
              href="https://jeongeun.hashnode.dev"
              target="_blank"
              className="p-2 rounded-[8px] hover:bg-[var(--hover-background)] opacity-75 hover:opacity-100 cursor-pointer hover:text-[#2862FF]"
            >
              <FaHashnode size={20} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
