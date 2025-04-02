import { tabs } from "@/constants/tabs";
import Link from "next/link";

export default function Tabs({ selectedTab }: { selectedTab: string }) {
  return (
    <ul className="hidden md:flex flex-wrap items-center justify-center w-full">
      {tabs.map((tab) => (
        <li key={tab.id}>
          <Link
            href={`?tag=${tab.id}`}
            className={`flex items-center gap-2 text-[14px] font-medium px-3 py-1.5 rounded-md hover:bg-[var(--hover-background)] text-nowrap ${
              tab.id === selectedTab
                ? "bg-[var(--hover-background)] cursor-default"
                : "cursor-pointer"
            }`}
          >
            <div
              className={`w-3 aspect-square rounded-full border border-[var(--border-color)] ${tab.color}`}
            />
            <span>{tab.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
