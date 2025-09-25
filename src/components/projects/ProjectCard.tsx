"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ExtractedPageProperties } from "@/types/notion";

export default function ProjectCard({
  title,
  coverImageUrl,
  slug,
  description,
  githubUrl,
  demoUrl,
}: ExtractedPageProperties) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group block cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(`/projects/${slug}`)}
    >
      <div className="relative mb-5 aspect-[278/171] w-full overflow-hidden rounded-lg">
        <Image
          src={coverImageUrl!}
          alt={title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-300 group-hover:scale-105"
        />

        <motion.div
          className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-4 text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--background)] shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--background)] shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <LuSquareArrowOutUpRight />
          </a>
        </motion.div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="font-semibold">{title}</p>
        <p className="text-center text-[14px] text-[#a09f9c]">{description}</p>
      </div>
    </div>
  );
}
