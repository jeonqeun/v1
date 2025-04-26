import Comment from "@/components/common/Comment";
import ScrollProgressBar from "@/components/common/ScrollProgressBar";
import Renderer from "@/components/notion/Renderer";
import TableOfContents from "@/components/notion/TableOfContents";
import { getPageBySlug, getPageData } from "@/lib/notion";
import { extractPageProperties } from "@/utils/notion";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const projectSlug = (await params).slug;
  const project = await getPageBySlug(projectSlug);

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
                <h1 className="font-semibold text-3xl md:text-[40px] leading-[1.3]">
                  {projectData.title}
                </h1>
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
