import type { ReactNode } from "react";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import CertificationsPage from "./CertificationsPage";
import Achievements from "./Achievements";
import Contact from "./Contact";

/**
 * Home renders every section stacked in one long page (with dividers between
 * them), mirroring the original single-page layout — but in a condensed form,
 * without the longer description text for Experience, Projects, and
 * Achievements. Visiting a section's own nav link instead takes you to that
 * section's dedicated standalone page, where the full descriptions are shown.
 */
export default function Home() {
  const sections: ReactNode[] = [
    <About key="about" />,
    <Skills key="skills" />,
    <Education key="education" />,
    <Experience key="experience" showDescription={false} />,
    <Projects key="projects" showDescription={false} limit={3} />,
    <CertificationsPage key="certifications" />,
    <Achievements key="achievements" showDescription={false} />,
    <Contact key="contact" />,
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <div
          key={index}
          className={index > 0 ? "border-t border-border" : undefined}
        >
          {section}
        </div>
      ))}
    </div>
  );
}
