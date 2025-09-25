"use client";

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface MobileProjectPageHeaderProps {
  onToggleToc: () => void;
  onToggleCategory: () => void;
}

export default function MobileProjectPageHeader({
  onToggleToc,
  onToggleCategory,
}: MobileProjectPageHeaderProps) {
  return (
    <div className="sticky top-14 z-10 flex items-center justify-between border-b border-[var(--border-color)] bg-[var(--background)] px-2 py-3 text-xs xl:hidden">
      <button
        onClick={onToggleCategory}
        className="flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-2 hover:bg-[var(--hover-background)]"
      >
        <HiOutlineMenuAlt2 />
        <span>프로젝트 리스트</span>
      </button>
      <button
        onClick={onToggleToc}
        className="flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-2 hover:bg-[var(--hover-background)] lg:hidden"
      >
        <span>On this page</span>
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
}
