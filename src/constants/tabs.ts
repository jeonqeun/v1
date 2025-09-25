import { FaReact, FaPalette } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import { BsGlobe } from "react-icons/bs";
import { BiCodeBlock } from "react-icons/bi";
import { GiConsoleController } from "react-icons/gi";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { FiGrid } from "react-icons/fi";
import { IconType } from "react-icons";

export type TabItem = {
  label: string;
  id: string;
  icon: IconType;
};

// 탭 목록
export const tabs: TabItem[] = [
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
    label: "웹 퍼블리싱",
    id: "web-publishing",
    icon: FaPalette,
  },
  {
    label: "반응형",
    id: "responsive",
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
