import { CodeXml } from "lucide-react";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import { StaggerContainer, StaggerItem } from "../AnimatedSection";
import { skillGroups } from "../../data/skills";
import { getTechIcon, techBrandColors } from "../../utils/icons";

export default function Skills() {
  return (
    <Section id="skills" bordered={false}>
      <SectionTitle icon={CodeXml} title="Skills" />

      <StaggerContainer className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <StaggerItem key={group.category}>
            <h3 className="mb-4 text-sm font-semibold text-ink">
              {group.category}
            </h3>
            <ul className="space-y-3">
              {group.skills.map((skill) => {
                const Icon = getTechIcon(skill.icon);
                const color = techBrandColors[skill.icon] ?? "var(--color-ink)";
                return (
                  <li
                    key={skill.id}
                    className="flex items-center gap-2.5 text-sm text-ink-secondary"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0"
                      style={{ color }}
                      strokeWidth={1.75}
                    />
                    {skill.name}
                  </li>
                );
              })}
            </ul>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
