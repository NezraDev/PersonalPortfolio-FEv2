import { Mail as MailIcon } from "lucide-react";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import AnimatedSection from "../AnimatedSection";
import { getSocialIcon } from "../../utils/icons";
import { socials } from "../../data/social";

export default function Contact() {
  const contactItems = socials.filter(
    (s) => s.icon === "mapPin" || s.icon === "mail" || s.icon === "phone",
  );

  return (
    <Section id="contact" bordered={false} className="pb-16">
      <AnimatedSection>
        <SectionTitle icon={MailIcon} title="Contact" />
        <div className="flex flex-col flex-wrap gap-x-10 gap-y-4 sm:flex-row sm:items-center">
          {contactItems.map((item) => {
            const Icon = getSocialIcon(item.icon);
            const isExternal = item.url.startsWith("http");
            return (
              <a
                key={item.id}
                href={item.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2.5 text-sm text-ink-secondary transition-colors hover:text-ink"
              >
                <Icon className="h-4 w-4 shrink-0 text-ink-muted" strokeWidth={1.75} />
                {item.label}
              </a>
            );
          })}
        </div>
      </AnimatedSection>
    </Section>
  );
}
