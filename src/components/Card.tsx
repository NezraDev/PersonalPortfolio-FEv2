import type { ReactNode } from "react";
import { cn } from "../utils/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({
  children,
  className,
  hoverable = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface p-6 transition-all duration-300 ease-premium",
        hoverable && "hover:-translate-y-1 hover:border-border-strong hover:shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
