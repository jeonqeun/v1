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
    <div className="border-b border-[var(--border-color)] sticky top-[60px] bg-[var(--background)] z-10 text-xs flex xl:hidden items-center justify-between py-3 px-2">
      <button
        onClick={onToggleCategory}
        className="py-2 px-3 flex items-center gap-1.5 hover:bg-[var(--hover-background)] rounded-md cursor-pointer"
      >
        <HiOutlineMenuAlt2 />
        <span>프로젝트 리스트</span>
      </button>
      <button
        onClick={onToggleToc}
        className="py-2 px-3 flex lg:hidden items-center gap-1.5 hover:bg-[var(--hover-background)] rounded-md cursor-pointer"
      >
        <span>On this page</span>
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
}
