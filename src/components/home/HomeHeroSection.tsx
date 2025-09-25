import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function HomeHeroSection() {
  return (
    <div className="mb-20 pt-20 text-center">
      <h1 className="text-3xl leading-9 font-bold tracking-tighter md:text-4xl md:leading-14">
        I&apos;m Jeongeun, building web UI
      </h1>

      <p className="mx-auto mt-3.5 max-w-3xl text-center leading-7 text-slate-600 md:flex md:flex-col md:items-center md:justify-center dark:text-slate-400">
        <span>
          안녕하세요, 웹 퍼블리셔 · 프론트엔드 개발자 이정은입니다. 표준화와
          최적화를 고려한 구조적인 마크업을 지향하며,
        </span>
        <span>
          가치 있는 사용자 경험을 위해 배우고 적용하며, 꾸준히 성장하고
          있습니다.
        </span>
      </p>
      <div className="mt-10 flex justify-center gap-4 text-sm font-semibold">
        <Link
          href="/projects"
          className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-3 text-white transition-all duration-200 hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
        >
          <span>View Projects</span>
          <FaArrowRight
            size={12}
            className="text-slate-400 dark:text-slate-600"
          />
        </Link>
        <Link
          href="https://drive.google.com/file/d/1rdIBtaSZKLD3ZKQNGe12uKb5RIFDWjzx/view"
          target="_blank"
          className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-[var(--background)] px-4 py-3 text-slate-900 ring-1 ring-slate-900/10 transition-all duration-200 hover:bg-gray-50/50 hover:ring-slate-900/15 dark:bg-slate-900 dark:text-slate-100 dark:ring-slate-100/10 dark:hover:bg-slate-800/70 dark:hover:ring-slate-100/20"
        >
          <span>Resume</span>
          <FaExternalLinkAlt
            size={12}
            className="text-slate-400 dark:text-slate-500"
          />
        </Link>
      </div>
    </div>
  );
}
