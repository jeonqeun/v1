"use client";

import { motion } from "framer-motion";
import { extractPageProperties } from "@/utils/notion";
import Card from "./common/Card";
import Image from "next/image";
import ProjectTabs from "./layout/ProjectTabs";
import profile from "../../public/images/profile.png";
import { NotionPage } from "@/types/notion";

interface HomeContentProps {
  filteredProjects: NotionPage[];
}

export default function HomeContent({ filteredProjects }: HomeContentProps) {
  return (
    <div className="mt-[60px]">
      <div className="max-w-[1500px] flex flex-col items-center gap-2 md:gap-4 mx-auto pt-10 md:pt-16 pb-6 md:pb-12 px-4 md:text-center text-sm md:text-[15px] text-[#4f576c]">
        <h1 className="font-medium text-3xl md:text-[44px] text-[var(--foreground)]">
          프로젝트 아카이브
        </h1>

        <div className="flex items-center justify-center gap-1">
          <div className="relative rounded-full border border-[var(--border-color)] overflow-hidden w-5 md:w-7 aspect-square">
            <Image
              src={profile}
              alt=""
              fill
              priority
              className="object-cover"
            />
          </div>
          <span>이정은 (Jeongeun Lee)</span>
        </div>
      </div>

      <ProjectTabs />

      <motion.div
        key={filteredProjects.map((p) => p.id).join("-")}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[16px] gap-10 pt-[30px] md:pt-10 pb-20 px-4">
          {filteredProjects.map((project) => {
            const {
              title,
              coverImageUrl,
              slug,
              description,
              githubUrl,
              demoUrl,
            } = extractPageProperties(project);

            return (
              <Card
                key={slug}
                title={title}
                coverImageUrl={coverImageUrl}
                slug={slug}
                description={description}
                githubUrl={githubUrl}
                demoUrl={demoUrl}
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
