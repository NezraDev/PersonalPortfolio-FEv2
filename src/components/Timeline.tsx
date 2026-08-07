import type { ReactNode } from "react";

interface TimelineItemProps {
  title: string;
  subtitle?: string;
  date: string;
  children?: ReactNode;
  isLast?: boolean;
}

export function TimelineItem({
  title,
  subtitle,
  date,
  children,
  isLast,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      <span className="absolute top-1.5 left-0 h-2.5 w-2.5 rounded-full border-2 border-ink bg-surface" />
      {!isLast && (
        <span className="absolute top-4 left-[4.5px] h-full w-px bg-border" />
      )}

      <div className="pb-10">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-base font-semibold text-ink">{title}</h3>
          <span className="text-xs font-medium text-ink-muted">{date}</span>
        </div>
        {subtitle && (
          <p className="mt-0.5 text-sm text-ink-secondary">{subtitle}</p>
        )}
        {children && <div className="mt-3">{children}</div>}
      </div>
    </div>
  );
}

interface TimelineProps {
  children: ReactNode;
}

export default function Timeline({ children }: TimelineProps) {
  return <div className="mt-2">{children}</div>;
}
