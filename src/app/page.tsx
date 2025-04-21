import Card from "@/components/Card";
import { getBlogPosts } from "@/lib/blog";
import { extractPageProperties } from "@/utils/notion";
import Image from "next/image";
import profile from "../../public/images/profile.png";
import ProjectTabs from "@/components/ProjectTabs";

interface Props {
  searchParams: Promise<Record<string, string>>;
}

export default async function Home(props: Props) {
  const projects = await getBlogPosts();

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

  return (
    <div className="mt-[60px]">
      <div className="max-w-[1500px] flex flex-col items-center gap-2 md:gap-4 mx-auto pt-10 md:pt-16 pb-6 md:pb-12 px-4 md:text-center text-sm md:text-[15px] text-[#4f576c]">
        <h1 className="font-semibold text-3xl md:text-[44px] text-[var(--foreground)]">
          프로젝트 아카이브
        </h1>
        <div className="flex items-center justify-center gap-1">
          <div className="relative rounded-full border border-[var(--border-color)] overflow-hidden w-5 md:w-7 aspect-square">
            <Image
              src={profile}
              alt=""
              fill
              priority
              className="object-cover"
            />
          </div>
          <span>이정은 (Jeongeun Lee)</span>
        </div>
      </div>

      <ProjectTabs />

      <div className="max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-[30px] gap-12 pt-10 pb-20 px-4">
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
            <Card
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
    </div>
  );
}
