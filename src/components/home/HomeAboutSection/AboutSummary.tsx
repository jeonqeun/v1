import { FaExternalLinkAlt } from "react-icons/fa";

export const personalTags = [
  { label: "🏃 러닝 10K", bg: "bg-yellow-100", text: "text-yellow-600" },
  { label: "🎬 영화 1,001편 보기", bg: "bg-rose-100", text: "text-rose-600" },
  {
    label: "📸 사진 찍기",
    bg: "bg-neutral-100",
    text: "text-neutral-600",
  },
  {
    label: "🌏 영어·일본어 학습",
    bg: "bg-indigo-100",
    text: "text-indigo-600",
  },

  {
    label: "🥁 드럼",
    bg: "bg-amber-100",
    text: "text-amber-600",
  },
];

export const devTags = [
  { label: "🤖 AI 학습", bg: "bg-green-100", text: "text-green-600" },
  { label: "📚 기술 서적 읽기", bg: "bg-blue-100", text: "text-blue-600" },
  { label: "🎨 UI/UX 탐구", bg: "bg-pink-100", text: "text-pink-600" },
  { label: "✍️ 기술 블로깅", bg: "bg-red-100", text: "text-red-600" },
  { label: "🗂️ 사이드 프로젝트", bg: "bg-gray-100", text: "text-gray-600" },
  { label: "👥 스터디 활동", bg: "bg-purple-100", text: "text-purple-600" },
];

export default function AboutSummary() {
  return (
    <section className="bg-card flex flex-col justify-between gap-8 overflow-hidden rounded-xl border px-6 py-7 md:gap-0 md:px-8">
      <div>
        <div className="flex w-fit items-center gap-1.5 rounded-2xl bg-neutral-100 px-3 py-2 text-xs font-semibold text-neutral-950 dark:bg-neutral-600 dark:text-neutral-300">
          <div className="animate-pulse-dot aspect-square w-1 rounded-full bg-green-600" />
          About Me
        </div>
      </div>
      <div className="flex flex-col gap-3.5">
        <p className="text-3xl leading-9 font-semibold tracking-tighter">
          Crafting valuable user experiences
        </p>
        <p className="text-muted-foreground text-[15px]">
          가치 있는 사용자 경험(UX)을 설계합니다.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold text-gray-600">
            Development
          </span>
          <div className="flex flex-wrap gap-2 text-xs">
            {devTags.map((tag) => (
              <span
                key={tag.label}
                className={`rounded-md px-3 py-2 font-medium ${tag.bg} ${tag.text}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold text-gray-600">Personal</span>
          <div className="flex flex-wrap gap-2 text-xs">
            {personalTags.map((tag) => (
              <span
                key={tag.label}
                className={`rounded-md px-3 py-2 font-medium ${tag.bg} ${tag.text}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="text-muted-foreground flex items-center gap-1.5 text-sm">
        <span>더 자세한 소개는 이력서에서 보실 수 있습니다!</span>
        <FaExternalLinkAlt size={10} />
      </div>
    </section>
  );
}
