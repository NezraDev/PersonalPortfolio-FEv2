import { Briefcase } from "lucide-react";
import SectionTitle from "../SectionTitle";
import Badge from "../Badge";
import LogoBox from "../LogoBox";
import { experience } from "../../data/experience";
import { motion } from "framer-motion";

interface ExperienceProps {
  /** Set to false to hide each role's bullet-point description (used on the condensed Home page). */
  showDescription?: boolean;
}

export default function Experience({ showDescription = true }: ExperienceProps) {
  return (
    <div className="py-8 md:py-10">
      <SectionTitle icon={Briefcase} title="Experience" />

      <div className="space-y-8">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.15), ease: [0.16, 1, 0.3, 1] }}
            className={
              index > 0
                ? "flex items-start gap-4 border-t border-border pt-8"
                : "flex items-start gap-4"
            }
          >
            <LogoBox
              src={exp.logo}
              alt={`${exp.company} logo`}
              icon={Briefcase}
            />

            <div className="min-w-0 flex-1">
              {/* Company */}
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-ink">
                  {exp.company}
                </h3>

                <span className="text-sm font-medium text-ink-muted">
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>

              <p className="mt-1 text-sm text-ink-secondary">{exp.location}</p>

              {/* Roles */}
              <div className="mt-6 space-y-6">
                {exp.roles.map((role, roleIndex) => (
                  <div
                    key={role.id}
                    className={
                      roleIndex > 0 ? "border-t border-border pt-6" : ""
                    }
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h4 className="text-base font-semibold text-ink">
                        {role.position}
                      </h4>

                      {showDescription && (
                        <span className="text-sm text-ink-muted">
                          {role.startDate} – {role.endDate}
                        </span>
                      )}
                    </div>

                    {showDescription && (
                      <ul className="mt-3 space-y-3">
                        {role.description.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted" />

                            <p className="flex-1 text-justify text-sm leading-7 text-ink-secondary">
                              {point}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}

                    {role.technologies && role.technologies.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {role.technologies.map((tech) => (
                          <Badge key={tech}>{tech}</Badge>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
