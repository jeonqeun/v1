"use client";

import { useEffect, useState } from "react";
import { ExtendedRecordMap } from "notion-types";

export default function TableOfContents({
  recordMap,
}: {
  recordMap: ExtendedRecordMap;
}) {
  const tocItems = extractTableOfContents(recordMap);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-60px 0px -80% 0px",
        threshold: 0.1,
      }
    );

    const headingElements = tocItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [tocItems]);

  if (!tocItems.length) {
    return null;
  }

  return (
    <div className="hidden lg:block w-[200px] min-w-[200px] max-w-[200px] sticky top-0 self-start text-[14px] pt-32 m-4">
      <p className="font-semibold pb-2">목차</p>
      <ul>
        {tocItems.map((item) => (
          <li
            key={item.id}
            className={`opacity-45 transition-all duration-150 rounded-[4px] ${
              item.type === "header"
                ? "pl-0"
                : item.type === "sub_header"
                ? "pl-0"
                : "pl-3"
            } ${
              activeId === item.id
                ? "opacity-100 font-medium"
                : "hover:font-medium hover:opacity-100"
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById(item.id);
                if (target) {
                  const headerOffset = 60;
                  const y =
                    target.getBoundingClientRect().top +
                    window.pageYOffset -
                    headerOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="w-full text-left p-1.5 cursor-pointer"
            >
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const extractTableOfContents = (recordMap: ExtendedRecordMap) => {
  if (!recordMap?.block) return [];

  return Object.values(recordMap.block)
    .map(({ value }) => {
      if (!value || !value.id || !value.type) return null;

      if (["header", "sub_header", "sub_sub_header"].includes(value.type)) {
        return {
          id: value.id.replace(/-/g, ""),
          type: value.type as "header" | "sub_header" | "sub_sub_header",
          text: value.properties?.title?.[0]?.[0] || "(제목 없음)",
        };
      }
      return null;
    })
    .filter(
      (
        item
      ): item is {
        id: string;
        type: "header" | "sub_header" | "sub_sub_header";
        text: string;
      } => item !== null
    );
};
