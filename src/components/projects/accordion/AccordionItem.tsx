import { ReactNode } from "react";

export default function AccordionItem({ children }: { children: ReactNode }) {
  return <div className="overflow-hidden mb-3">{children}</div>;
}
