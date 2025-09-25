"use client";

import {
  createContext,
  useContext,
  useState,
  Children,
  ReactNode,
} from "react";

const AccordionContext = createContext<{
  isActive: boolean;
  index: number;
  onChangeIndex: (index: number) => void;
}>({
  isActive: false,
  index: -1,
  onChangeIndex: () => {},
});
export const useAccordion = () => useContext(AccordionContext);

export default function Accordion({ children }: { children: ReactNode }) {
  const [activeIndex, setActiveIndex] = useState<number[]>([0, 1, 2]);

  function onChangeIndex(index: number) {
    setActiveIndex((currentActiveIndex: number[]) => {
      if (currentActiveIndex.includes(index)) {
        return currentActiveIndex.filter((i) => i !== index);
      }

      return currentActiveIndex.concat(index);
    });
  }

  return Children.map(children, (child, index) => {
    const isActive = activeIndex.includes(index);

    return (
      <AccordionContext.Provider value={{ isActive, index, onChangeIndex }}>
        {child}
      </AccordionContext.Provider>
    );
  });
}
