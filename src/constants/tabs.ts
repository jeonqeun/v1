import { FaReact } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import { BsGlobe } from "react-icons/bs";
import { BiCodeBlock } from "react-icons/bi";
import { GiConsoleController } from "react-icons/gi";
import {
  SiTailwindcss,
  SiFirebase,
  SiReactquery,
  SiFramer,
  SiTypescript,
} from "react-icons/si";
import { FiGrid } from "react-icons/fi";

export const tabs = [
  {
    label: "All",
    id: "all",
    icon: FiGrid,
  },
  {
    label: "Featured",
    id: "featured",
    icon: AiFillStar,
  },
  {
    label: "Web Publishing",
    id: "web-publishing",
    icon: BsGlobe,
  },
  {
    label: "Next.js",
    id: "nextjs",
    icon: TbBrandNextjs,
  },
  {
    label: "React",
    id: "react",
    icon: FaReact,
  },
  {
    label: "TypeScript",
    id: "typescript",
    icon: SiTypescript,
  },
  {
    label: "Firebase",
    id: "firebase",
    icon: SiFirebase,
  },
  {
    label: "TanStack Query",
    id: "tanstack-query",
    icon: SiReactquery,
  },
  {
    label: "Framer Motion",
    id: "framer-motion",
    icon: SiFramer,
  },
  {
    label: "Tailwind CSS",
    id: "tailwind",
    icon: SiTailwindcss,
  },
  {
    label: "API",
    id: "api",
    icon: BiCodeBlock,
  },
  {
    label: "Game",
    id: "game",
    icon: GiConsoleController,
  },
];
