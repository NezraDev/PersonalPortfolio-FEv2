import type { LucideIcon } from "lucide-react";

interface SectionTitleProps {
  icon: LucideIcon;
  title: string;
}

export default function SectionTitle({ icon: Icon, title }: SectionTitleProps) {
  return (
    <div className="section-title">
      <Icon className="h-4 w-4 text-accent" strokeWidth={2} />
      <h2>
        {title}
      </h2>
    </div>
  );
}
