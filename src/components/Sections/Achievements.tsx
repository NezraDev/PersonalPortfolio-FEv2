import { Trophy } from "lucide-react";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import { StaggerContainer, StaggerItem } from "../AnimatedSection";
import { achievements } from "../../data/achievement";

interface AchievementsProps {
  /** Set to false to hide each achievement's description text (used on the condensed Home page). */
  showDescription?: boolean;
}

export default function Achievements({
  showDescription = true,
}: AchievementsProps) {
  return (
    <Section id="achievements" bordered={false}>
      <SectionTitle icon={Trophy} title="Achievements" />

      <StaggerContainer className="flex flex-col gap-4">
        {achievements.map((achievement) => {
          return (
            <StaggerItem key={achievement.id}>
              <Card className="flex flex-col gap-5 p-5 md:flex-row md:items-center md:justify-between">
                {/* Left Content */}
                <div className="flex flex-1 items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden p-2">
                    <img
                      src={achievement.logo}
                      alt={`${achievement.title} logo`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-ink">
                      {achievement.title}
                    </h3>

                    {showDescription && (
                      <p className="mt-1 text-sm text-ink-muted">
                        {achievement.description}
                      </p>
                    )}

                    <p className="mt-2 text-xs font-medium text-ink-secondary">
                      {achievement.date}
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                {achievement.image && (
                  <div className="h-28 w-40 shrink-0 overflow-hidden  p-2">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="h-full w-full rounded-md"
                      loading="lazy"
                    />
                  </div>
                )}
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
