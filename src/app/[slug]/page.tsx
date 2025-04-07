import Comment from "@/components/Comment";
import Renderer from "@/components/Renderer";
import TableOfContents from "@/components/TableOfContents";
import { getBlogPosts } from "@/lib/blog";
import { getPageBySlug, getPageData } from "@/lib/notion";
import { extractPageProperties } from "@/utils/notion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IoLogoGithub } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const projectSlug = (await params).slug;
  const projects = await getBlogPosts();
  const project = await getPageBySlug(projectSlug, "project");

  if (!project) return notFound();

  const recordMap = await getPageData(project.id);
  const projectData = extractPageProperties(project);

  return (
    <div className="max-w-[1500px] mx-auto py-10 lg:py-16">
      <div className="lg:flex lg:justify-center lg:gap-20 lg:px-4">
        <div className="hidden lg:block w-[200px] min-w-[200px] max-w-[200px] sticky top-0 self-start text-[14px] pt-32">
          <ul>
            {projects.map((project, idx) => {
              const { title, slug } = extractPageProperties(project);

              return (
                <li
                  key={idx}
                  className={`transition duration-300 rounded-[4px] hover:text-[#F67373] ${
                    projectSlug === slug ? "text-[#F67373]" : "text-[#A09F9C]"
                  }`}
                >
                  <Link href={`${slug}`} className="inline-block w-full p-1.5">
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="max-w-[720px] mx-auto lg:mx-0 overflow-hidden">
          <div className="p-4">
            <div className="flex flex-col gap-4 mb-6">
              <h1 className="font-semibold text-3xl md:text-[44px] leading-[1.3]">
                {projectData.title}
              </h1>
              <div className="flex items-center justify-between text-[14px] md:text-base">
                <div className="flex items-center gap-2 text-[#A09F9C]">
                  <span>{"개인 프로젝트"}</span>
                  <span>{"・"}</span>
                  <span>{projectData?.date?.slice(0, 9)}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  {!!projectData.githubUrl && (
                    <Link
                      href={projectData.githubUrl}
                      target="_blank"
                      className="flex items-center justify-center"
                    >
                      <IoLogoGithub size={20} />
                    </Link>
                  )}
                  {!!projectData.demoUrl && (
                    <Link
                      href={projectData.demoUrl}
                      target="_blank"
                      className="flex items-center justify-center"
                    >
                      <LuExternalLink size={20} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
            {projectData.coverImageUrl && (
              <div className="relative w-full aspect-[900/550] rounded-xl overflow-hidden">
                <Image
                  src={projectData.coverImageUrl}
                  alt={projectData.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
          <Renderer recordMap={recordMap} rootPageId={project.id} />
          <Comment />
        </div>

        <TableOfContents recordMap={recordMap} />
      </div>
    </div>
  );
}
