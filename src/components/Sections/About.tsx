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
            University — Los Baños Campus with a strong focus on frontend
            development, UI design, and UX. I enjoy transforming ideas into
            responsive, intuitive, and visually polished web experiences using
            React and modern web technologies.
          </p>

          <p>
            I combine design thinking with practical frontend development to
            create interfaces that are accessible, user-friendly, and
            maintainable. Through academic, personal, and project-based work,
            I’ve developed experience turning requirements and concepts into
            functional digital products while continuously improving my
            technical and design skills.
          </p>

          <p>
            I’m looking to grow as a frontend developer and UI/UX practitioner
            while contributing to products that solve real problems and provide
            meaningful experiences for users.
          </p>
        </div>
      </AnimatedSection>
    </Section>
  );
}
