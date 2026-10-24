import { useState } from "react";
import { Trophy } from "lucide-react";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import ImageLightbox from "../ImageLightbox";
import { StaggerContainer, StaggerItem } from "../AnimatedSection";
import { achievements } from "../../data/achievement";

interface AchievementsProps {
  /** Set to false to hide each achievement's description text (used on the condensed Home page). */
  showDescription?: boolean;
}

export default function Achievements({
  showDescription = true,
}: AchievementsProps) {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(
    null,
  );

  return (
    <>
      <Section id="achievements" bordered={false}>
        <SectionTitle icon={Trophy} title="Achievements" />

        <StaggerContainer className="achievement-list flex flex-col gap-4">
          {achievements.map((achievement) => {
            return (
              <StaggerItem key={achievement.id}>
                <Card className="achievement-card flex min-w-0 flex-col gap-5 p-4 sm:p-5 md:flex-row md:items-center md:justify-between">
                  {/* Left Content */}
                  <div className="achievement-summary flex min-w-0 flex-1 items-start gap-3 sm:gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden p-1.5 sm:h-14 sm:w-14 sm:p-2">
                      <img
                        src={achievement.logo}
                        alt={`${achievement.title} logo`}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="break-words text-sm font-semibold leading-snug text-ink sm:text-base">
                        {achievement.title}
                      </h3>

                      {showDescription && (
                        <p className="mt-1 break-words lg:text-justify text-sm leading-relaxed text-ink-muted">
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
                    <div className="achievement-image w-full min-w-0 overflow-hidden p-1 sm:p-2 md:h-28 md:w-40 md:shrink-0">
                      <button
                        type="button"
                        onClick={() =>
                          setPreview({
                            src: achievement.image!,
                            alt: achievement.title,
                          })
                        }
                        className="block w-full cursor-zoom-in overflow-hidden rounded-md focus-visible:outline-offset-2 md:h-full"
                        aria-label={`Enlarge ${achievement.title} image`}
                      >
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="h-auto max-h-64 w-full rounded-md object-contain md:h-full md:max-h-none md:object-fill"
                          loading="lazy"
                        />
                      </button>
                    </div>
                  )}
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>

      <ImageLightbox
        src={preview?.src}
        alt={preview?.alt ?? "Achievement"}
        onClose={() => setPreview(null)}
      />
    </>
  );
}
