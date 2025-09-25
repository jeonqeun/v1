"use client";

import { motion } from "framer-motion";
import { extractPageProperties } from "@/utils/notion";
import { NotionPage } from "@/types/notion";
import ProjectCard from "./ProjectCard";
import ProjectTabs from "./ProjectTabs";

interface ProjectsPageClientProps {
  filteredProjects: NotionPage[];
}

export default function ProjectsPageClient({
  filteredProjects,
}: ProjectsPageClientProps) {
  return (
    <div className="mt-[60px]">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mx-auto max-w-[1500px] px-4 pt-10 pb-6 md:pt-16 md:pb-12 md:text-center"
      >
        <h1 className="text-center text-4xl leading-9 font-semibold tracking-tighter sm:text-5xl md:leading-14">
          프로젝트
        </h1>
        <p className="mx-auto mt-3.5 max-w-xl text-center leading-7 text-slate-600 dark:text-slate-400">
          Frontend 기반의 개인 프로젝트와 웹 퍼블리싱 작업을 정리했습니다.
        </p>
      </motion.div>

      <ProjectTabs />

      <motion.div
        key={filteredProjects.map((p) => p.id).join("-")}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 gap-x-[16px] px-4 pt-[30px] pb-20 sm:grid-cols-2 md:grid-cols-3 md:pt-10">
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
              <ProjectCard
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
