"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import folderImage from "../../../../public/images/folder.svg";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function FolderCard({
  title,
  imageKey,
}: {
  title: string;
  imageKey: string;
}) {
  return (
    <Link href={`/projects?tag=${imageKey}`}>
      <motion.div
        className="group bg-card flex flex-col items-center justify-center rounded-xl border border-[var(--border-color)] py-8 md:py-12"
        tabIndex={0}
        initial="rest"
        animate="rest"
        whileHover="hover"
      >
        <motion.div className="relative w-fit [perspective:1800px]">
          <Image src={folderImage} alt="" className="w-[180px] md:w-[238px]" />
          <motion.div
            className="absolute top-1/2 left-1/2 aspect-[3/2] w-28 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md border border-[var(--border-color)] shadow-lg will-change-transform md:w-36"
            variants={{
              rest: { rotate: -5, x: 0, y: -12 },
              hover: {
                rotate: -15,
                x: -80,
                y: -50,
                transition: { type: "spring", stiffness: 200, damping: 25 },
              },
            }}
          >
            <Image
              src={`/images/${imageKey}01.png`}
              alt=""
              className="object-cover"
              fill
              sizes="100vw"
              priority
            />
          </motion.div>
          <motion.div
            className="absolute top-1/2 left-1/2 aspect-[3/2] w-28 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md border border-[var(--border-color)] shadow-lg will-change-transform md:w-36"
            variants={{
              rest: { rotate: 5, x: 0, y: -12 },
              hover: {
                rotate: -5,
                x: 0,
                y: -25,
                transition: { type: "spring", stiffness: 200, damping: 25 },
              },
            }}
          >
            <Image
              src={`/images/${imageKey}02.png`}
              alt=""
              className="object-cover"
              fill
              sizes="100vw"
              priority
            />
          </motion.div>
          <motion.div
            className="absolute top-1/2 left-1/2 aspect-[3/2] w-28 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md border border-[var(--border-color)] shadow-lg will-change-transform md:w-36"
            variants={{
              rest: { rotate: 0, x: 0, y: -12 },
              hover: {
                rotate: 10,
                x: 80,
                y: -50,
                transition: { type: "spring", stiffness: 200, damping: 25 },
              },
            }}
          >
            <Image
              src={`/images/${imageKey}03.png`}
              alt=""
              className="object-cover"
              fill
              sizes="100vw"
              priority
            />
          </motion.div>
          <div className="absolute inset-x-0 bottom-0 h-4/5 origin-bottom [transform:rotateX(var(--rx))] rounded-[12px] bg-[linear-gradient(0deg,rgb(235,235,235)_0%,rgb(250,250,250)_53.9432%,rgb(229,229,231)_100%)] shadow-[inset_0_2px_0_0_rgb(255,255,255)] transition-[transform,clip-path,filter] duration-300 ease-out will-change-transform [--rx:0deg] [--spread:0%] [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] group-hover:[--rx:-65deg] group-hover:[--spread:6%] group-hover:[clip-path:polygon(calc(0%-var(--spread))_0%,calc(100%+var(--spread))_0%,100%_100%,0%_100%)] group-focus-visible:[--rx:-65deg] group-focus-visible:[--spread:6%] group-focus-visible:[clip-path:polygon(calc(0%-var(--spread))_0%,calc(100%+var(--spread))_0%,100%_100%,0%_100%)] md:h-[150px]" />
        </motion.div>
        <div className="mt-5 flex items-center gap-1 text-[15px] font-semibold">
          <span>{title}</span>
          <motion.div
            variants={{
              rest: { rotate: 0, x: 0, y: 0 },
              hover: {
                x: 3,
                y: -3,
                transition: { type: "spring", stiffness: 200, damping: 25 },
              },
            }}
          >
            <MdOutlineArrowOutward className="text-slate-400 dark:text-slate-500" />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
