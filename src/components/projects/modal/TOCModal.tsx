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
            className="fixed top-28 left-1/2 z-30 block w-11/12 max-w-[600px] -translate-x-1/2 rounded-md border border-[#c2c2c4] bg-[#FAFAFA] p-4 pt-6 text-sm text-black shadow-md lg:hidden dark:border-[#3a3a3a] dark:bg-[#1F1F1F] dark:text-white dark:shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
          >
            <TableOfContents recordMap={recordMap} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
