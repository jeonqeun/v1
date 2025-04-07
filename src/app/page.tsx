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
    <>
      <div className="max-w-[1500px] flex flex-col items-center gap-2 md:gap-4 mx-auto py-10 pb-6 md:py-20 px-4 md:text-center text-sm md:text-[15px] text-[#4f576c]">
        <h1 className="font-semibold text-3xl md:text-5xl text-[var(--foreground)]">
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
        <p className="hidden md:block max-w-[860px] mt-8">
          안녕하세요, 이유 있는 마크업으로 의미 있는 웹을 만드는 퍼블리셔
          이정은입니다. UI 마크업의 작은 요소도 사용자 경험에 영향을 준다고
          믿으며, 작은 작업에서도 개선의 여지를 찾고, 더 효율적이고 의미 있는
          코드를 작성하기 위해 배우고 적용하는 과정을 꾸준히 이어가고 있습니다.
        </p>
      </div>

      <ProjectTabs />

      <div className="max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[30px] gap-12 pt-6 py-12 px-4">
        {filteredProjects.map((project) => {
          const { title, coverImageUrl, slug, tags, description } =
            extractPageProperties(project);

          return (
            <Card
              key={slug}
              title={title}
              coverImageUrl={coverImageUrl}
              slug={slug}
              tags={tags}
              description={description}
            />
          );
        })}
      </div>
    </>
  );
}
