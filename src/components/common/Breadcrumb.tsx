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
    <div className="hidden xl:flex items-center pb-6 text-[13px] gap-3 text-[#71717A]">
      <Link href="/">
        <FaHome />
      </Link>
      <span className="text-[#E4E4E7]">|</span>
      <Link href={`/?tag=${matchedCategory?.id}`}>
        {matchedCategory?.label}
      </Link>
      <IoIosArrowForward size={14} />
      <Link href={`/${slug}`} className="text-black">
        {title}
      </Link>
    </div>
  );
}
