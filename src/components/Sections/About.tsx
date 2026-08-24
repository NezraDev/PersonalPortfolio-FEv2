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
            University — Los Baños Campus, with experience in front-end
            development, UI/UX design, and basic IT support. I build responsive,
            user-centered web interfaces using React and Tailwind CSS, with a
            strong focus on translating Figma designs into polished and
            functional experiences.
          </p>

          <p>
            Through client, academic, and personal projects, I've worked on
            digital products ranging from management systems and interactive
            dashboards to AI-powered and monitoring interfaces. I also have
            foundational knowledge of computer hardware and software, system
            setup, maintenance, and troubleshooting common technical issues. I
            combine design thinking, frontend development, and practical IT
            skills to create intuitive and maintainable solutions.
          </p>

          <p>
            I'm continuing to grow as a Front-End Developer and IT professional,
            strengthening my technical implementation, design, troubleshooting,
            and problem-solving skills while creating digital experiences that
            solve real problems and make complex systems easier to use.
          </p>
        </div>
      </AnimatedSection>
    </Section>
  );
}
