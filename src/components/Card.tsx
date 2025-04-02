"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { tabs } from "@/constants/tabs";
import { ExtractedPageProperties } from "@/types/notion";

export default function Card({
  title,
  coverImageUrl,
  slug,
  tags,
  description,
}: ExtractedPageProperties) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="block group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(`/${slug}`)}
    >
      <div className="relative w-full aspect-[278/171] rounded-lg overflow-hidden mb-5">
        <Image
          src={coverImageUrl!}
          alt={title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-all duration-300"
        />

        <motion.div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-4 text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <a
            href="https://github.com/jeonoeun"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center bg-[var(--background)] border border-[var(--border-color)] rounded-full w-10 h-10 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://remonth.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center bg-[var(--background)] border border-[var(--border-color)] rounded-full w-10 h-10 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <LuSquareArrowOutUpRight />
          </a>
        </motion.div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {tags?.map((tag) => {
              const matchedTab = tabs.find((tab) => tab.id === tag.name);

              return (
                <div
                  key={tag.id}
                  className={`w-3 aspect-square rounded-full border border-[var(--border-color)] ${matchedTab?.color} -ml-1`}
                />
              );
            })}
          </div>
          <p className="font-semibold">{title}</p>
        </div>
        <p className="text-[#a09f9c] text-[14px]">{description}</p>
      </div>
    </div>
  );
}
