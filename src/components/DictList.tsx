"use client";

import { colorMap } from "@/constants/colorMap";
import { NotionPage } from "@/types/notion";
import { extractPageProperties } from "@/utils/notion";
import { LayoutGroup, motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Renderer from "./Renderer";
import { MdEditCalendar, MdArrowDropDownCircle } from "react-icons/md";

export default function DictList({ dictList }: { dictList: NotionPage[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [dictInfo, setDictInfo] = useState<NotionPage>(dictList[0]);
  const [recordMap, setRecordMap] = useState(null);

  const { title, date, type, color } = extractPageProperties(dictInfo);
  const style = colorMap[color!];

  const handleOpenModal = async (dict: NotionPage) => {
    setSelectedId(dict.id);
    setDictInfo(dict);

    const res = await fetch(`/api/getPageData?id=${dict.id}`);
    const recordMapData = await res.json();
    setRecordMap(recordMapData);
  };

  const handleCloseModal = () => {
    setSelectedId(null);
    setRecordMap(null);
    setDictInfo(dictList[0]);
  };

  return (
    <LayoutGroup>
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-20 px-4">
        {dictList.map((dict) => {
          const { title, type, color } = extractPageProperties(dict);
          const style = colorMap[color!];

          return (
            <motion.div
              key={dict.id}
              layoutId={dict.id}
              className={`bg-[#f9fafa] hover:bg-[#ECEEF0] dark:bg-[#1A1A1A] dark:hover:bg-[#2A2A2A] cursor-pointer border border-[var(--border-color)] rounded-md p-4 font-medium`}
              onClick={() => handleOpenModal(dict)}
            >
              <p className="text-[15px] mb-3">{title}</p>
              <div className="flex justify-end">
                <div
                  className={`flex items-center gap-1.5 rounded-md w-fit py-0.5 px-1.5 ${style.bg}`}
                >
                  <div
                    className={`w-[6px] aspect-square rounded-full ${style.dot}`}
                  />
                  <span className={`text-xs ${style.text}`}>{type}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedId && dictInfo && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black/50"
            onClick={handleCloseModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId={selectedId}
              className={`bg-[#f9fafa] dark:bg-[#1A1A1A] border border-[var(--border-color)] rounded-md px-6 md:px-16 py-16 md:py-20 font-medium w-[90%] max-w-[920px] h-[80vh] overflow-y-auto shadow-md`}
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <h2 className="mb-2 font-bold text-3xl md:text-4xl leading-[1.3]">
                  {title}
                </h2>
                <div className="text-sm border-b border-[var(--border-color)] pt-1 pb-2">
                  <div className="flex items-center">
                    <div className="flex items-center gap-1.5 text-[rgb(55,53,47)]/60 dark:text-[rgb(202,202,202)]/60 px-1.5 w-[160px]">
                      <MdEditCalendar size={16} />
                      <span>작성일</span>
                    </div>
                    <p className="pt-1.5 pb-2">{date}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center gap-1.5 text-[rgb(55,53,47)]/60 dark:text-[rgb(202,202,202)]/60 px-1.5 w-[160px]">
                      <MdArrowDropDownCircle size={16} />
                      <span>태그</span>
                    </div>
                    <p className="pt-1.5 pb-2">
                      <div
                        className={`flex items-center gap-1.5 rounded-md w-fit py-0.5 px-1.5 ${style.bg}`}
                      >
                        <div
                          className={`w-[6px] aspect-square rounded-full ${style.dot}`}
                        />
                        <span className={`text-xs ${style.text}`}>{type}</span>
                      </div>
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  {recordMap && dictInfo && (
                    <Renderer recordMap={recordMap} rootPageId={dictInfo.id} />
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
