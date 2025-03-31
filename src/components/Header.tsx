import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import logo from "../../public/images/logo.svg";
import { FaGithub } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import DropdownMenu from "./DropdownMenu";

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

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between max-w-[1500px] h-[72px] mx-auto px-4">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="relative w-6 md:w-8 h-6 md:h-8">
              <Image src={logo} alt="" fill className="object-cover" />
            </div>
          </Link>
          <DropdownMenu />
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:block">
            <ul className="flex items-center text-[14px] font-medium">
              {navItems.slice(1).map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className="inline-block px-3 py-1.5 ml-2 rounded-[8px] hover:bg-[var(--hover-background)]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="relative before:hidden md:before:block md:before:content-[''] before:absolute before:bg-[var(--border-color)] before:w-px before:h-[20px] before:-left-4">
            <ThemeToggle />
          </div>
          <div className="relative flex items-center text-[#3C3C43] dark:text-[#EBEBF5] before:content-[''] before:absolute before:bg-[var(--border-color)] before:w-px before:h-[20px] before:-left-2">
            <Link
              href="https://github.com/jeonoeun"
              target="_blank"
              className="p-2 rounded-[8px] hover:bg-[var(--hover-background)] opacity-75 hover:opacity-100 cursor-pointer hover:text-[#24292F]"
            >
              <FaGithub size={20} />
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
