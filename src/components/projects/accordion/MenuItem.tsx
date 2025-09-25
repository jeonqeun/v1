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
              className={`rounded-md p-2 text-[13px] opacity-50 hover:bg-[#f7f7f7] hover:opacity-100 hover:dark:bg-[#1A1A1D] ${
                currentSlug === slug
                  ? "bg-[#f7f7f7] font-medium text-[var(--primary)] opacity-100 dark:bg-[#1A1A1D]"
                  : ""
              }`}
            >
              <Link href={`/projects/${slug}`} className="block w-full px-2">
                {title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
