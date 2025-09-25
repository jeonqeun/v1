import FolderCard from "./FolderCard";

export default function HomeProjectsSection() {
  return (
    <div className="mb-20">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tighter">Projects</h2>
        <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">
          Frontend 기반의 개인 프로젝트와 웹 퍼블리싱 작업을 정리했습니다.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-3">
        <FolderCard title="Featured" imageKey="featured" />
        <FolderCard title="Web Publishing" imageKey="web-publishing" />
        <FolderCard title="Responsive" imageKey="responsive" />
      </div>
    </div>
  );
}
