import { FaReact } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import { BsGlobe } from "react-icons/bs";
import { BiCodeBlock } from "react-icons/bi";
import { GiConsoleController } from "react-icons/gi";
import { SiTailwindcss } from "react-icons/si";
import { FiGrid } from "react-icons/fi";
import { SiTypescript } from "react-icons/si";

export const tabs = [
  { label: "All", id: "all", icon: FiGrid },
  {
    label: "Featured",
    id: "featured",
    icon: AiFillStar,
  },
  {
    label: "Next.js",
    id: "nextjs",
    icon: TbBrandNextjs,
  },
  { label: "React", id: "react", icon: FaReact },
  {
    label: "Web Publishing",
    id: "web-publishing",
    icon: BsGlobe,
  },
  { label: "API", id: "api", icon: BiCodeBlock },
  {
    label: "Game",
    id: "game",
    icon: GiConsoleController,
  },
  {
    label: "Tailwind CSS",
    id: "tailwind",
    icon: SiTailwindcss,
  },
  {
    label: "TypeScript",
    id: "typescript",
    icon: SiTypescript,
  },
];
