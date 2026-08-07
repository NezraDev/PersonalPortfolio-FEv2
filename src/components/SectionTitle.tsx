import type { LucideIcon } from "lucide-react";

interface SectionTitleProps {
  icon: LucideIcon;
  title: string;
}

export default function SectionTitle({ icon: Icon, title }: SectionTitleProps) {
  return (
    <div className="mb-8 flex items-center gap-2.5 md:mb-10">
      <Icon className="h-4 w-4 text-accent" strokeWidth={2} />
      <h2 className="text-xs font-semibold tracking-[0.15em] text-ink-secondary uppercase">
        {title}
      </h2>
    </div>
  );
}
