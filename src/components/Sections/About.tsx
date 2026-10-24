import { UserRound } from "lucide-react";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import AnimatedSection from "../AnimatedSection";

export default function About() {
  return (
    <Section id="about" bordered={false}>
      <AnimatedSection>
        <SectionTitle icon={UserRound} title="About Me" />

        <div className="max-w-2xl space-y-4 text-justify text-sm leading-relaxed text-ink-secondary md:text-base">
          <p>
            I'm a fourth-year Computer Science student at Laguna State
            Polytechnic University – Los Baños Campus, focused on full stack
            web development. I turn Figma designs into responsive,
            accessible interfaces using React, TypeScript, and Tailwind CSS,
            balancing visual clarity with maintainable implementation.
          </p>

          <p>
            Across professional, academic, and freelance projects, I've helped
            build management systems, administrative dashboards, and
            service-based websites for real users and organizations. My
            background in computer hardware, system setup, and troubleshooting
            also helps me approach problems beyond the interface. I'm continuing
            to grow as a full stack web developer who creates thoughtful digital
            products that make complex tasks easier to understand and complete.
          </p>
        </div>
      </AnimatedSection>
    </Section>
  );
}
