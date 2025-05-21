import { CategoryItem } from "@/constants/category";
import { NotionPage } from "@/types/notion";
import { extractPageProperties } from "@/utils/notion";
import Link from "next/link";

interface MenuItemProps {
  item: CategoryItem;
  projects: NotionPage[];
  currentSlug?: string;
}

export default function MenuItem({
  item,
  projects,
  currentSlug,
}: MenuItemProps) {
  return (
    <ul>
      {projects
        .filter((project) => project.properties?.Type?.select?.name === item.id)
        .map((project) => {
          const { title, slug } = extractPageProperties(project);

          return (
            <li
              key={slug}
              className={`opacity-50 hover:opacity-100 p-2 rounded-md text-[13px] ${
                currentSlug === slug
                  ? "text-[#5A5FC3] opacity-100 bg-[#F7F7FC] dark:bg-[#1A1A1D] font-medium hover:text-[#5A5FC3] hover:bg-[#F7F7FC] hover:dark:bg-[#1A1A1D]"
                  : "hover:bg-[var(--hover-background)]"
              }`}
            >
              <Link href={`/${slug}`} className="w-full block px-2">
                {title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
