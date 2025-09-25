import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartRadarDots } from "@/components/home/HomeAboutSection/ChartRadarDots";
import { TrendingUp } from "lucide-react";
import { VscRepoPush } from "react-icons/vsc";
import { FaSeedling, FaBlog } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const activities = [
  {
    label: "깃허브 Push",
    value: "45회",
    icon: VscRepoPush,
    color: "text-amber-500 dark:text-amber-400",
  },
  {
    label: "잔디 심은 날",
    value: "20일",
    icon: FaSeedling,
    color: "text-green-600 dark:text-green-400",
  },
  {
    label: "블로그 글 작성",
    value: "3편",
    icon: FaBlog,
    color: "text-blue-500 dark:text-blue-400",
  },
  {
    label: "코딩 문제 풀이",
    value: "15개",
    icon: SiLeetcode,
    color: "text-purple-600 dark:text-purple-400",
  },
];

export default function SkillsAndActivity() {
  return (
    <section className="bg-card flex h-full w-full flex-col justify-between gap-6 overflow-hidden rounded-xl border pt-7 pb-6">
      <ChartRadarDots />

      <div className="flex flex-col gap-6">
        <CardHeader className="items-center">
          <CardTitle>
            <div className="flex items-center gap-2">
              Activity Statistics
              <TrendingUp className="h-4 w-4" />
            </div>
          </CardTitle>
          <CardDescription>
            꾸준한 학습과 활동을 통해 개발 역량을 확장하고 있습니다.
          </CardDescription>
        </CardHeader>
        <div className="flex px-4">
          {activities.map(({ label, value, icon: Icon, color }) => (
            <div
              key={label}
              className="flex aspect-square flex-1 flex-col items-center justify-center gap-2.5 rounded-md transition-all duration-200 hover:bg-[var(--hover-background)]"
            >
              <Icon size={20} className={color} />
              <span className="text-sm font-medium">{value}</span>
              <span className="text-muted-foreground text-xs">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
