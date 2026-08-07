import { UserRound } from "lucide-react";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import AnimatedSection from "../AnimatedSection";

export default function About() {
  return (
    <Section id="about" bordered={false}>
      <AnimatedSection>
        <SectionTitle icon={UserRound} title="About Me" />

        <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-ink-secondary md:text-base text-justify">
          <p>
            I'm a 4th-year Computer Science student at Laguna State Polytechnic
            University — Los Baños Campus, specializing in frontend development
            and UI/UX design. I build responsive, user-centered web interfaces
            using React and Tailwind CSS, with a strong focus on translating
            Figma designs into polished, functional experiences.
          </p>

          <p>
            Through client, academic, and personal projects, I've worked on
            digital products ranging from management systems and interactive
            dashboards to AI-powered and monitoring interfaces. I combine design
            thinking with practical frontend development to turn requirements
            and visual concepts into intuitive, accessible, and maintainable
            interfaces.
          </p>

          <p>
            I'm continuing to grow as a Front-End Developer, strengthening both
            my technical implementation and design skills while creating digital
            experiences that solve real problems and make complex systems easier
            to use.
          </p>
        </div>
      </AnimatedSection>
    </Section>
  );
}
