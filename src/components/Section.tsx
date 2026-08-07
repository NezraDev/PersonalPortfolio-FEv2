import type { ReactNode } from "react";
import { cn } from "../utils/cn";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}

export default function Section({
  id,
  children,
  className,
  bordered = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-nav py-8 md:py-10",
        bordered && "border-t border-border",
        className,
      )}
    >
      {children}
    </section>
  );
}
