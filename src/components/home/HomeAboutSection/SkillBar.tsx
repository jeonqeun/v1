"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type SkillBarProps = {
  label: string;
  percent: number;
  desc: string;
  icon: string;
};

export default function SkillBar({
  label,
  percent,
  desc,
  icon,
}: SkillBarProps) {
  return (
    <>
      <div className="relative space-y-2">
        <div className="relative h-16 w-full overflow-hidden rounded-lg bg-zinc-100 dark:bg-[#1A1A1A]">
          <motion.div
            className="absolute top-0 left-0 h-full bg-zinc-200 dark:bg-zinc-700"
            style={{ transformOrigin: "0% 50%" }}
            initial={{ width: `${percent / 2}%` }}
            whileInView={{ width: `${percent}%` }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              type: "tween",
              duration: 1.0,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        </div>

        <div className="absolute top-0 left-0 flex h-full w-full justify-between text-[13px]">
          <div className="flex h-full w-full items-center justify-between p-2.5 pr-8">
            <div className="flex h-full items-center gap-2.5">
              <div className="flex aspect-square h-full items-center justify-center rounded-md bg-[var(--background)]">
                <Image
                  src={`/images/icons/${icon}.svg`}
                  alt=""
                  width={24}
                  height={24}
                  className="aspect-square w-6"
                />
                {/* <Icon size={26} /> */}
              </div>
              <div>
                <span className="text-sm font-medium">{label}</span>
                <p>{desc}</p>
              </div>
            </div>

            <span className="rounded-full border border-[var(--border-color)] bg-white px-2 py-1 text-[#666666] backdrop-blur">
              {percent}%
            </span>
          </div>
        </div>
      </div>

      {/* <div className="relative">
        <div className="flex w-full justify-between text-[13px]">
          <div className="flex h-full w-full items-end justify-between py-2.5">
            <div>
              <span className="text-sm font-medium">{label}</span>
              <p>{desc}</p>
            </div>

            <span className="">{percent}%</span>
          </div>
        </div>

        <div className="relative h-2 w-full overflow-hidden rounded-lg bg-zinc-200 dark:bg-[#1A1A1A]">
          <motion.div
            className="absolute top-0 left-0 h-full bg-[var(--primary)] dark:bg-zinc-700"
            style={{ transformOrigin: "0% 50%" }}
            initial={{ width: `${percent / 2}%` }}
            whileInView={{ width: `${percent}%` }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              type: "tween",
              duration: 1.0,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        </div>
      </div> */}
    </>
  );
}
