import { Monitor } from "lucide-react";
import SectionTitle from "../SectionTitle";
import { techStack } from "../../data/techStack";
import { getTechIcon, techBrandColors } from "../../utils/icons";

export default function TechStack() {
  return (
    <div id="tech-stack" className="scroll-mt-nav">
      <SectionTitle icon={Monitor} title="Tech Stack" />
      <div className="grid grid-cols-6 gap-4 sm:grid-cols-7">
        {techStack.map((tech) => {
          const Icon = getTechIcon(tech.icon);
          const color = techBrandColors[tech.icon] ?? "var(--color-ink)";
          return (
            <div
              key={tech.id}
              className="flex items-center justify-center"
              title={tech.name}
            >
              <Icon
                className="h-6 w-6 transition-transform hover:scale-110"
                style={{ color }}
                strokeWidth={1.5}
              />
              <span className="sr-only">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
