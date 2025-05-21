import { motion, AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { ExtendedRecordMap } from "notion-types";
import TableOfContents from "../notion/TableOfContents";

interface TOCModalProps {
  isTocOpen: boolean;
  setIsTocOpen: Dispatch<SetStateAction<boolean>>;
  recordMap: ExtendedRecordMap;
}

export default function TOCModal({
  isTocOpen,
  setIsTocOpen,
  recordMap,
}: TOCModalProps) {
  return (
    <AnimatePresence>
      {isTocOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsTocOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-28 left-1/2 -translate-x-1/2 z-30 text-sm w-11/12 max-w-[600px] rounded-md p-4 pt-6 
            border border-[#c2c2c4] dark:border-[#3a3a3a] 
            bg-[#FAFAFA] dark:bg-[#1F1F1F] 
            text-black dark:text-white 
            shadow-md dark:shadow-[0_2px_10px_rgba(0,0,0,0.6)] 
            block lg:hidden"
          >
            <TableOfContents recordMap={recordMap} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
