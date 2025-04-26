import DictList from "@/components/DictList";
import { getDictList } from "@/lib/notion";

export default async function Page() {
  const dictList = await getDictList();

  return (
    <div className="mt-[60px]">
      <div className="max-w-[1000px] flex flex-col items-center gap-4 md:gap-6 mx-auto py-10 md:py-16 px-4 md:text-center text-sm md:text-[15px] text-[#4f576c]">
        <h1 className="font-medium text-3xl md:text-[44px] text-[var(--foreground)]">
          Dev Odyssey
        </h1>
        <p>
          개발을 배우고 협업하는 과정에서 마주하는 생소한 용어나 간단한 개념,
          순간적인 궁금증들을 정리한 개발 사전입니다.
        </p>
      </div>
      <DictList dictList={dictList} />
    </div>
  );
}
