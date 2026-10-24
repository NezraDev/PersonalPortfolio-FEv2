import { BadgeCheck, ExternalLink } from "lucide-react";
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import LogoBox from "../LogoBox";
import { StaggerContainer, StaggerItem } from "../AnimatedSection";
import { certifications } from "../../data/certification";

export default function Certifications() {
  return (
    <div>
      <SectionTitle icon={BadgeCheck} title="Certifications" />

      <StaggerContainer className="certification-list flex flex-col gap-4">
        {certifications.map((cert) => (
          <StaggerItem key={cert.id}>
            <Card className="certification-card flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
              <div className="certification-copy flex flex-1 items-center gap-4">
                {!cert.hideLogo && <LogoBox
                  src={cert.logo}
                  alt={`${cert.organization} logo`}
                  icon={BadgeCheck}
                  size="lg"
                  className="certification-logo"
                />}

                <div className="certification-details min-w-0">
                  <h3 className="text-base font-semibold text-ink">
                    {cert.name}
                  </h3>

                  <p className="mt-1 text-sm text-ink-muted">
                    {cert.organization}
                  </p>

                  {cert.date && <p className="mt-2 text-xs font-medium text-ink-secondary">
                    {cert.date}
                  </p>}
                </div>
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-link flex shrink-0 items-center gap-1.5 text-sm font-medium text-ink-secondary transition-colors hover:text-ink"
                >
                  <ExternalLink className="h-4 w-4" strokeWidth={1.75} />
                  <span>Credential</span>
                </a>
              )}
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
