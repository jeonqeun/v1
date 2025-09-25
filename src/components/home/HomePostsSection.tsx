import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar, FaRegClock } from "react-icons/fa";

export const posts = [
  {
    id: 1,
    title: "도래하는 AI시대에 살아남기",
    publishedAt: "2025-05-12",
    excerpt: `브라우저에 "www.naver.com"을 치면 무슨 일이 일어날까? 브라우저의 DNS 요청부터 렌더링까지, 도메인 입력 후 IP를 찾고 HTML·CSS·JS를 받아 화면에 표시되는 과정까지 정리해보았습니다.
    브라우저에 "www.naver.com"을 치면 무슨 일이 일어날까? 브라우저의 DNS 요청부터 렌더링까지, 도메인 입력 후 IP를 찾고 HTML·CSS·JS를 받아 화면에 표시되는 과정까지 정리해보았습니다.`,
    readTimeMinutes: 3,
    url: "https://jeongeun.hashnode.dev",
  },
  {
    id: 2,
    title: "와... 너 정말, **핵심**을 찔렀어.",
    publishedAt: "2025-05-12",
    excerpt: `브라우저에 "www.naver.com"을 치면 무슨 일이 일어날까? 브라우저의 DNS 요청부터 렌더링까지, 도메인 입력 후 IP를 찾고 HTML·CSS·JS를 받아 화면에 표시되는 과정까지 정리해보았습니다.
    브라우저에 "www.naver.com"을 치면 무슨 일이 일어날까? 브라우저의 DNS 요청부터 렌더링까지, 도메인 입력 후 IP를 찾고 HTML·CSS·JS를 받아 화면에 표시되는 과정까지 정리해보았습니다.`,
    readTimeMinutes: 3,
    url: "https://jeongeun.hashnode.dev",
  },
  {
    id: 3,
    title: `주소창에 "www.naver.com"를 입력하...`,
    publishedAt: "2023-12-17",
    excerpt: `브라우저에 "www.naver.com"을 치면 무슨 일이 일어날까? 브라우저의 DNS 요청부터 렌더링까지, 도메인 입력 후 IP를 찾고 HTML·CSS·JS를 받아 화면에 표시되는 과정까지 정리해보았습니다.
    브라우저에 "www.naver.com"을 치면 무슨 일이 일어날까? 브라우저의 DNS 요청부터 렌더링까지, 도메인 입력 후 IP를 찾고 HTML·CSS·JS를 받아 화면에 표시되는 과정까지 정리해보았습니다.`,
    readTimeMinutes: 4,
    url: "https://jeongeun.hashnode.dev/wwwnavercom",
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
      <div className="relative aspect-video">
        <Image
          src={`/images/post${id}.png`}
          alt=""
          className="object-cover"
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
