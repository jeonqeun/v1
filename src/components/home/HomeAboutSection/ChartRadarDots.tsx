"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import { CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radar chart with dots";

const chartData = [
  { skill: "HTML/CSS", score: 85 },
  { skill: "JavaScript", score: 80 },
  { skill: "TypeScript", score: 30 },
  { skill: "React", score: 60 },
  { skill: "Next.js", score: 40 },
];

const chartConfig = {
  score: {
    label: "Skill Level",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartRadarDots() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-0.5 px-6 md:px-8">
        <span className="text-xs font-semibold text-gray-600">기술 스택</span>
        <span className="text-2xl font-semibold tracking-tighter">
          Technical Skills
        </span>
      </div>

      <CardContent className="pb-0">
        <ChartContainer config={chartConfig} className="mx-auto max-h-[220px]">
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="skill" />
            <PolarGrid gridType="circle" />
            <Radar
              dataKey="score"
              fill="var(--color-score)"
              fillOpacity={0.6}
              dot={{
                r: 3,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </div>
  );
}
