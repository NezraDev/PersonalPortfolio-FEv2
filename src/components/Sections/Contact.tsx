import { useState } from "react";
import InquiryModal from "../portfolio/InquiryModal";
import { ArrowUpRight, Mail as MailIcon } from "lucide-react";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import AnimatedSection from "../AnimatedSection";
import { getSocialIcon } from "../../utils/icons";
import { socials } from "../../data/social";

interface ContactProps {
  compact?: boolean;
}

export default function Contact({ compact = false }: ContactProps) {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const contactItems = socials.filter(
    (s) => s.icon === "mapPin" || s.icon === "mail" || s.icon === "phone",
  );

  const email = contactItems.find((item) => item.icon === "mail");
  const otherContacts = contactItems.filter((item) => item.icon !== "mail");
  const professionalProfiles = socials.filter((item) => ["github", "linkedin"].includes(item.id));

  if (compact) {
    return (
      <Section id="contact" bordered={false} className="pb-16">
        <AnimatedSection>
          <SectionTitle icon={MailIcon} title="Contact" />
          <div className="flex flex-col flex-wrap gap-x-10 gap-y-4 sm:flex-row sm:items-center">
            {contactItems.map((item) => {
              const Icon = getSocialIcon(item.icon);
              const isExternal = item.url.startsWith("http");
              return <a key={item.id} href={item.url} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className="flex items-center gap-2.5 text-sm text-ink-secondary transition-colors hover:text-ink"><Icon className="h-4 w-4 shrink-0 text-ink-muted" strokeWidth={1.75} />{item.label}</a>;
            })}
          </div>
        </AnimatedSection>
      </Section>
    );
  }

  return (
    <Section id="contact" bordered={false} className="contact-page contact-studio">
      {inquiryOpen && email && <InquiryModal onClose={() => setInquiryOpen(false)} />}
      <AnimatedSection>
        <div className="contact-studio-main">
          <div className="contact-studio-intro">
            <p className="contact-studio-label">LET US CONNECT</p>
            <h2>A conversation.<br /><em>A new possibility.</em></h2>
            <p>For full stack web development roles, thoughtful websites, and creative collaborations. Tell me what you have in mind.</p>
            <button className="contact-studio-cta" type="button" onClick={() => setInquiryOpen(true)}>Send an email <ArrowUpRight size={18} /></button>
          </div>
          <div className="contact-studio-details">
            {email && <a className="contact-studio-email" href={email.url}>
              <span className="contact-studio-label">EMAIL / PREFERRED</span>
              <span className="contact-studio-address">{email.label}<ArrowUpRight size={22} /></span>
            </a>}
            {otherContacts.map((item) => {
              const Icon = getSocialIcon(item.icon);
              const isExternal = item.url.startsWith("http");
              return <a key={item.id} href={item.url} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className="contact-studio-method">
                <Icon size={20} strokeWidth={1.5} />
                <span><small>{item.icon === "phone" ? "PHONE" : "BASED IN"}</small><strong>{item.label}</strong></span>
                <ArrowUpRight size={17} />
              </a>;
            })}
          </div>
        </div>
        <div className="contact-studio-online">
          <p className="contact-studio-label">ELSEWHERE ONLINE</p>
          <div className="contact-studio-profiles">{professionalProfiles.map((item) => {
            const Icon = getSocialIcon(item.icon);
            return <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer">
              <Icon size={24} strokeWidth={1.5} />
              <span><strong>{item.id === "github" ? "GitHub" : "LinkedIn"}</strong><small>{item.id === "github" ? "Explore my code and projects" : "Connect with me professionally"}</small></span>
              <ArrowUpRight size={20} />
            </a>;
          })}</div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
