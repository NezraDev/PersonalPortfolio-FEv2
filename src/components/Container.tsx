import type { ReactNode } from "react";
import { cn } from "../utils/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-5xl px-6 md:px-10", className)}>
      {children}
    </div>
  );
}
