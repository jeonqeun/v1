"use client";

import Accordion from "./accordion/Accordion";
import AccordionHeader from "./accordion/AccordionHeader";
import AccordionItem from "./accordion/AccordionItem";
import AccordionPanel from "./accordion/AccordionPanel";
import Comment from "./Comment";
import ScrollProgressBar from "./ScrollProgressBar";
import MenuItem from "./accordion/MenuItem";
import Renderer from "./notion/Renderer";
import TableOfContents from "./notion/TableOfContents";
import { useState } from "react";
import { ExtractedPageProperties, NotionPage } from "@/types/notion";
import { ExtendedRecordMap } from "notion-types";
import { category } from "@/constants/category";
import Image from "next/image";
import MobileProjectPageHeader from "./MobileProjectPageHeader";
import CategoryModal from "./modal/CategoryModal";
import TOCModal from "./modal/TOCModal";

interface ProjectDetailLayoutProps {
  project: NotionPage;
  projects: NotionPage[];
  recordMap: ExtendedRecordMap;
  projectData: ExtractedPageProperties;
}

export default function ProjectDetailLayout({
  project,
  projects,
  recordMap,
  projectData,
}: ProjectDetailLayoutProps) {
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <>
      <ScrollProgressBar />
      <div className="mx-auto mt-14 max-w-[1500px]">
        <MobileProjectPageHeader
          onToggleToc={() => setIsTocOpen((prev) => !prev)}
          onToggleCategory={() => setIsCategoryOpen((prev) => !prev)}
        />
        <div className="justify-center gap-16 px-4 md:flex">
          {/* 모바일에서 보이는 CategoryModal */}
          <CategoryModal
            isOpen={isCategoryOpen}
            setIsOpen={setIsCategoryOpen}
            projects={projects}
            currentSlug={projectData.slug}
          />

          {/* 데스크탑에서 보이는 Category */}
          <div className="sticky top-14 hidden h-screen border-r border-[var(--border-color)] pr-4 xl:block">
            <div className="sticky top-0 w-[224px] max-w-[224px] min-w-[224px] self-start pt-8 text-sm md:pt-12">
              <Accordion>
                {category.map((item) => (
                  <AccordionItem key={item.id}>
                    <AccordionHeader item={item} />
                    <AccordionPanel>
                      <MenuItem
                        item={item}
                        projects={projects}
                        currentSlug={projectData.slug}
                      />
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Notion Content */}
          <div className="overflow-hidden pt-8 pb-16 md:pt-12 md:pb-32">
            <div className="mb-6">
              <div className="flex flex-col">
                <h1 className="mb-6 text-3xl leading-snug font-semibold text-[var(--notion-text-color)] md:text-4xl">
                  {projectData.title}
                </h1>
                {projectData.coverImageUrl && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                    <Image
                      src={projectData.coverImageUrl}
                      alt="프로젝트 커버"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
            <Renderer recordMap={recordMap} rootPageId={project.id} />

            <div>
              <div className="mt-16 flex items-center justify-end pb-6 text-sm opacity-50">
                <p>마지막 업데이트: {projectData.lastEditedDate}</p>
              </div>

              <div className="border-t border-[var(--border-color)] pt-6">
                <Comment />
              </div>
            </div>
          </div>

          {/* 모바일에서 TOC 표시 */}
          <TOCModal
            isTocOpen={isTocOpen}
            setIsTocOpen={setIsTocOpen}
            recordMap={recordMap}
          />

          {/* 데스크탑 TOC */}
          <div className="sticky top-[168px] hidden w-[224px] max-w-[224px] min-w-[224px] self-start border-l border-[var(--border-color)] text-[14px] lg:block xl:top-[108px]">
            <TableOfContents recordMap={recordMap} />
          </div>
        </div>
      </div>
    </>
  );
}
