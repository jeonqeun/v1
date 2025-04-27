import { getProjectList } from "@/lib/notion";
import HomeContent from "@/components/HomeContent";

interface Props {
  searchParams: Promise<Record<string, string>>;
}

export default async function Home(props: Props) {
  const projects = await getProjectList();

  const searchParams = await props.searchParams;
  const selectedTab = searchParams.tag ?? "all";

  const filteredProjects =
    selectedTab === "all"
      ? projects
      : projects.filter((project) =>
          project.properties?.Tags?.multi_select.some(
            (tag) => tag.name === selectedTab
          )
        );

  return <HomeContent filteredProjects={filteredProjects} />;
}
