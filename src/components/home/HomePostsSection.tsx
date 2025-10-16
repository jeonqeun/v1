import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar, FaRegClock } from "react-icons/fa";

export const posts = [
  {
    id: 1,
    title: "AI 툴 완전 정복: ChatGPT, Gemini, Claude 활용 가이드",
    publishedAt: "2025-10-02",
    excerpt: `이전 글에서 AI의 기본 개념과 미래 전망까지 알아보았다. 이번 글에서는 ✳︎ [허성범의 AI학개론] 시리즈를 통해 ChatGPT, Gemini, Claude 등 주요 AI 툴별 핵심 기능을 알아보고, 상황별로 어떤 AI 툴을 쓰는 것이 효과적인지 정리해보았다.`,
    readTimeMinutes: 5,
    url: "https://jeongeun.hashnode.dev/ai-chatgpt-gemini-claude",
  },
  {
    id: 2,
    title: "AI(인공지능)의 기본 개념 이해: 필수 지식부터 미래 전망까지",
    publishedAt: "2025-10-02",
    excerpt: `AI가 빠른 속도로 발전하면서 “10년 안에 모든 일자리 80% 대체 가능?” “인간은 기본소득만 받고 모든 일은 AI가 대신하는 시대가 온다”는 이야기들이 생겨났다. 내가 지금 취업을 준비하고 있는 직업군은 AI의 영향을 가장 크게, 가장 빠르게 받고 있기 때문에 하루하루 쏟아져 나오는 AI 관련 기사와 영상을 보면서 불안감은 커져만 가는데, 가장 큰 문제는 내가 AI에 대해 아무것도 모른다는 것이었다.`,
    readTimeMinutes: 7,
    url: "https://jeongeun.hashnode.dev/ai",
  },
  {
    id: 3,
    title: `주소창에 "www.naver.com" 을 입력하면 어떤 일이 일어날까?`,
    publishedAt: "2023-12-17",
    excerpt: `<브라우저의 동작 과정 : DNS 요청부터 렌더링까지> 브라우저에 "www.naver.com"을 치면 무슨 일이 일어날까? 브라우저의 DNS 요청부터 렌더링까지, 도메인 입력 후 IP를 찾고 HTML·CSS·JS를 받아 화면에 표시되는 과정까지 정리해보았습니다.`,
    readTimeMinutes: 4,
    url: "https://jeongeun.hashnode.dev/web-browser",
  },
];

export default function HomePostsSection() {
  return (
    <div className="mb-20">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tighter">From the blog</h2>
        <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">
          개발 과정에서 학습한 내용들을 정리하고, 코드와 디자인 사이에서 찾은
          인사이트들을 기록합니다.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-3">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

function PostCard({
  id,
  title,
  publishedAt,
  excerpt,
  readTimeMinutes,
  url,
}: {
  id: number;
  title: string;
  publishedAt: string;
  excerpt: string;
  readTimeMinutes: number;
  url: string;
}) {
  return (
    <div className="bg-card overflow-hidden rounded-xl border">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={`/images/post${id}.png`}
          alt=""
          className="object-cover transition-all duration-300 hover:scale-105"
          fill
          sizes="100vw"
          priority
        />
      </div>
      <div className="p-1.5">
        <div className="flex flex-col gap-3 p-3 pb-8">
          <div className="flex items-center gap-2 text-[13px] text-[#666666] dark:text-[#A1A1A1]">
            <p className="flex items-center gap-1">
              <FaRegCalendar size={12} />
              <span>{publishedAt}</span>
            </p>
            <span>·</span>
            <p className="flex items-center gap-1">
              <FaRegClock size={12} />
              <span>{readTimeMinutes} min read</span>
            </p>
          </div>
          <p className="text-xl font-semibold">{title}</p>
          <div className="h-1/2 overflow-hidden [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,transparent_100%)] [mask-image:linear-gradient(to_bottom,#000_0%,transparent_100%)]">
            <p className="max-h-20 overflow-hidden text-[15px]">{excerpt}</p>
          </div>
        </div>
        <Link
          href={url}
          target="_blank"
          className="group flex h-9 w-full cursor-pointer items-center justify-center gap-1.5 rounded-sm border bg-neutral-50 text-sm text-neutral-600 transition-all duration-200 hover:bg-neutral-100 hover:text-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 hover:dark:bg-neutral-800 hover:dark:text-neutral-100"
        >
          <span>View on Hashnode</span>
        </Link>
      </div>
    </div>
  );
}
