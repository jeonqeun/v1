import ProjectDetailLayout from "@/components/layout/ProjectDetailLayout";
import { getPageBySlug, getPageData, getProjectList } from "@/lib/notion";
import { extractPageProperties } from "@/utils/notion";
import { notFound } from "next/navigation";

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
