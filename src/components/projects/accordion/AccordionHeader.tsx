"use client";

import { CategoryItem } from "@/constants/category";
import { useAccordion } from "./Accordion";
import { motion } from "framer-motion";

import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function AccordionHeader({ item }: { item: CategoryItem }) {
  const { isActive, index, onChangeIndex } = useAccordion();

  return (
    <motion.div
      onClick={() => onChangeIndex(index)}
      className="cursor-pointer p-2"
    >
      <h3 className="flex justify-between items-center font-semibold">
        <span className="block">{item.label}</span>
        <span>
          {isActive ? (
            <MdOutlineKeyboardArrowDown />
          ) : (
            <MdOutlineKeyboardArrowRight />
          )}
        </span>
      </h3>
    </motion.div>
  );
}
