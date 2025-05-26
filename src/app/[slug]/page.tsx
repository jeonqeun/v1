import ProjectDetailLayout from "@/components/layout/ProjectDetailLayout";
import { getPageBySlug, getPageData, getProjectList } from "@/lib/notion";
import { extractPageProperties } from "@/utils/notion";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const projectSlug = (await params).slug;
  const project = await getPageBySlug(projectSlug);

  if (!project) return notFound();

  const { title, description } = extractPageProperties(project);

  return {
    title: title,
    description: description ?? "",
    openGraph: {
      title: title,
      description: description ?? "",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const projectSlug = (await params).slug;
  const project = await getPageBySlug(projectSlug);
  const projects = await getProjectList();

  if (!project) return notFound();

  const recordMap = await getPageData(project.id);
  const projectData = extractPageProperties(project);

  return (
    <ProjectDetailLayout
      project={project}
      projects={projects}
      recordMap={recordMap}
      projectData={projectData}
    />
  );
}
