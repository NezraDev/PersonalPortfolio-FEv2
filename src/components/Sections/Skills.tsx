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

      <StaggerContainer className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => {
          const isLargeGroup = group.skills.length > 6;

          return (
            <StaggerItem
              key={group.category}
              className={isLargeGroup ? "sm:col-span-2" : undefined}
            >
              <div className="mb-4 border-t border-border pt-3">
                <h3 className="text-sm font-semibold text-ink">
                  {group.category}
                </h3>
              </div>
              <ul
                className={
                  isLargeGroup
                    ? "grid gap-x-8 gap-y-3 sm:grid-cols-2"
                    : "space-y-3"
                }
              >
                {group.skills.map((skill) => {
                  const Icon = getTechIcon(skill.icon);
                  const color =
                    techBrandColors[skill.icon] ?? "var(--color-ink)";
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
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
