import { motion, AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { NotionPage } from "@/types/notion";
import Accordion from "../accordion/Accordion";
import AccordionItem from "../accordion/AccordionItem";
import AccordionHeader from "../accordion/AccordionHeader";
import AccordionPanel from "../accordion/AccordionPanel";
import MenuItem from "../accordion/MenuItem";
import { category } from "@/constants/category";

interface CategoryModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  projects: NotionPage[];
  currentSlug?: string;
}

export default function CategoryModal({
  isOpen,
  setIsOpen,
  projects,
  currentSlug,
}: CategoryModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 block xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: { x: 0 },
              closed: { x: "-100%" },
            }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="fixed top-0 left-0 min-w-[300px] w-[300px] border-r border-[var(--border-color)] h-screen bg-[var(--background)] text-sm p-8 z-50 block xl:hidden"
          >
            <Accordion>
              {category.map((item) => (
                <AccordionItem key={item.id}>
                  <AccordionHeader item={item} />
                  <AccordionPanel>
                    <MenuItem
                      item={item}
                      projects={projects}
                      currentSlug={currentSlug}
                    />
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
