import { Building2, UsersRound } from "lucide-react";
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import LogoBox from "../LogoBox";
import { StaggerContainer, StaggerItem } from "../AnimatedSection";
import { organizations } from "../../data/organization";

export default function Organization() {
  return (
    <div className="py-8 md:py-10">
      <SectionTitle icon={UsersRound} title="Organization" />

      <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {organizations.map((organization) => (
          <StaggerItem key={organization.id}>
            <Card className="h-full p-5">
              <div className="flex items-start gap-4">
                <LogoBox
                  src={organization.logo}
                  alt={`${organization.name} logo`}
                  icon={Building2}
                  size="lg"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold leading-snug text-ink">
                    {organization.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-ink-muted">
                    {organization.duration}
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-semibold text-ink">
                  {organization.role}
                </p>
                {organization.description && (
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                    {organization.description}
                  </p>
                )}
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
