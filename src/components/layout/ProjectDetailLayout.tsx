"use client";

import Accordion from "../accordion/Accordion";
import AccordionHeader from "../accordion/AccordionHeader";
import AccordionItem from "../accordion/AccordionItem";
import AccordionPanel from "../accordion/AccordionPanel";
import Comment from "../common/Comment";
import ScrollProgressBar from "../common/ScrollProgressBar";
import MenuItem from "../accordion/MenuItem";
import MobileProjectPageHeader from "./MobileProjectPageHeader";
import Renderer from "../notion/Renderer";
import TableOfContents from "../notion/TableOfContents";
import { useState } from "react";
import { ExtractedPageProperties, NotionPage } from "@/types/notion";
import { ExtendedRecordMap } from "notion-types";
import CategoryModal from "../modal/CategoryModal";
import TOCModal from "../modal/TOCModal";
import { category } from "@/constants/category";

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
      <div className="max-w-[1500px] mx-auto mt-[60px]">
        <MobileProjectPageHeader
          onToggleToc={() => setIsTocOpen((prev) => !prev)}
          onToggleCategory={() => setIsCategoryOpen((prev) => !prev)}
        />
        <div className="md:flex justify-center gap-16 px-4">
          {/* 모바일에서 보이는 CategoryModal */}
          <CategoryModal
            isOpen={isCategoryOpen}
            setIsOpen={setIsCategoryOpen}
            projects={projects}
            currentSlug={projectData.slug}
          />

          {/* 데스크탑에서 보이는 Category */}
          <div className="sticky top-0 h-screen border-r border-[var(--border-color)] pr-4 hidden xl:block">
            <div className="max-w-[224px] min-w-[224px] w-[224px] sticky top-[108px] self-start text-sm">
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
          <div className="overflow-hidden pt-[32px] md:pt-12 pb-16 md:pb-32">
            <div className="mb-2">
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold text-3xl md:text-4xl leading-snug text-[var(--notion-text-color)]">
                  {projectData.title}
                </h1>
              </div>
            </div>
            <Renderer recordMap={recordMap} rootPageId={project.id} />

            <div>
              <div className="mt-16 flex items-center justify-end opacity-50 text-sm pb-6">
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
          <div className="hidden lg:block sticky top-[168px] xl:top-[108px] self-start border-l border-[var(--border-color)] w-[224px] min-w-[224px] max-w-[224px] text-[14px]">
            <TableOfContents recordMap={recordMap} />
          </div>
        </div>
      </div>
    </>
  );
}
