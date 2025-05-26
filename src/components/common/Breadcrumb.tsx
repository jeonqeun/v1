import { category } from "@/constants/category";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

interface BreadcrumbProps {
  title?: string;
  slug?: string;
  categoryId?: string;
}

export default function Breadcrumb({
  title,
  slug,
  categoryId,
}: BreadcrumbProps) {
  const matchedCategory = category.find((v) => v.id === categoryId);

  return (
    <div className="hidden xl:flex items-center pb-6 text-[13px] gap-3">
      <Link href="/" className="opacity-50">
        <FaHome />
      </Link>
      <span className="opacity-15">|</span>
      <Link href={`/?tag=${matchedCategory?.id}`} className="opacity-50">
        {matchedCategory?.label}
      </Link>
      <IoIosArrowForward size={14} className="opacity-50" />
      <Link href={`/${slug}`} className="text-[var(--foreground)] opacity-100">
        {title}
      </Link>
    </div>
  );
}
