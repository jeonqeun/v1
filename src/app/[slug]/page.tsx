import Comment from "@/components/Comment";
import Renderer from "@/components/Renderer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import TableOfContents from "@/components/TableOfContents";
import { getPageBySlug, getPageData } from "@/lib/notion";
import { extractPageProperties } from "@/utils/notion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const projectSlug = (await params).slug;
  const project = await getPageBySlug(projectSlug, "project");

  if (!project) return notFound();

  const recordMap = await getPageData(project.id);
  const projectData = extractPageProperties(project);

  return (
    <>
      <ScrollProgressBar />
      <div className="max-w-[1500px] mx-auto pt-[22px] md:pt-16 pb-16 md:pb-20 mt-[60px]">
        <div className="md:flex justify-center gap-[34px]">
          <div className="overflow-hidden p-4 max-w-[852px]">
            <div className="mb-2">
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold text-3xl md:text-[44px] leading-[1.3]">
                  {projectData.title}
                </h1>
                <div className="flex items-center justify-between text-[14px] md:text-base">
                  <div className="flex items-center gap-2 text-[#A09F9C]">
                    <span>{"개인 프로젝트"}</span>
                    <span>{"∙"}</span>
                    <span>{projectData?.date?.slice(0, 9)}</span>
                  </div>

                  <div className="relative flex items-center text-[#3C3C43] dark:text-[#EBEBF5]">
                    {projectData.githubUrl && (
                      <Link
                        href={projectData.githubUrl}
                        target="_blank"
                        className="p-2 rounded-[8px] hover:bg-[var(--hover-background)] opacity-60 hover:opacity-100 cursor-pointer text-[#24292F] dark:text-[#EBEBF5]"
                      >
                        <FaGithub size={20} />
                      </Link>
                    )}
                    {projectData.demoUrl && (
                      <Link
                        href={projectData.demoUrl}
                        target="_blank"
                        className="p-2 rounded-[8px] hover:bg-[var(--hover-background)] opacity-60 hover:opacity-100 cursor-pointer text-[#24292F] dark:text-[#EBEBF5]"
                      >
                        <LuExternalLink size={20} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Renderer recordMap={recordMap} rootPageId={project.id} />
            <Comment />
          </div>
          <TableOfContents recordMap={recordMap} />
        </div>
      </div>
    </>
  );
}
