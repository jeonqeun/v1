import ProjectsPageClient from "@/components/projects/ProjectsPageClient";
import { getProjectList } from "@/lib/notion";

interface Props {
  searchParams: Promise<Record<string, string>>;
}

export default async function Page(props: Props) {
  const projects = await getProjectList();

  const searchParams = await props.searchParams;
  const selectedTab = searchParams.tag ?? "all";

  const filteredProjects =
    selectedTab === "all"
      ? projects
      : projects.filter((project) =>
          project.properties?.Tags?.multi_select.some(
            (tag) => tag.name === selectedTab,
          ),
        );

  return <ProjectsPageClient filteredProjects={filteredProjects} />;
}
