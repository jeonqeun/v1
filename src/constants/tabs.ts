import { FaReact } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import { BsGlobe } from "react-icons/bs";
import { BiCodeBlock } from "react-icons/bi";
import { GiConsoleController } from "react-icons/gi";
import { SiTailwindcss } from "react-icons/si";
import { FiGrid } from "react-icons/fi";

export const tabs = [
  { label: "All", id: "all", color: "bg-[#C5C5C5]", icon: FiGrid },
  {
    label: "Featured",
    id: "featured",
    color: "bg-[#F38B88]",
    icon: AiFillStar,
  },
  {
    label: "Next.js",
    id: "nextjs",
    color: "bg-[#444444]",
    icon: TbBrandNextjs,
  },
  { label: "React", id: "react", color: "bg-[#61dbfb]", icon: FaReact },
  {
    label: "Web Publishing",
    id: "web-publishing",
    color: "bg-[#f1e05a]",
    icon: BsGlobe,
  },
  { label: "API", id: "api", color: "bg-[#6CC8A1]", icon: BiCodeBlock },
  {
    label: "Game",
    id: "game",
    color: "bg-[#9c8aff]",
    icon: GiConsoleController,
  },
  {
    label: "Tailwind CSS",
    id: "tailwind",
    color: "bg-[#38bdf9]",
    icon: SiTailwindcss,
  },
];
