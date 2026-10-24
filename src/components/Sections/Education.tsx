import { GraduationCap } from "lucide-react";
import SectionTitle from "../SectionTitle";
import LogoBox from "../LogoBox";
import { education } from "../../data/education";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <div className="education-page py-8 md:py-10">
      <SectionTitle title="Education" icon={GraduationCap} />

      <div className="education-list space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 1, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="education-item flex items-start gap-4"
          >
            <LogoBox
              src={edu.logo}
              alt={`${edu.school} logo`}
              icon={GraduationCap}
            />

            <div className="education-copy min-w-0 flex-1">
              <h3 className="education-school text-base font-semibold text-ink">{edu.school}</h3>

              {edu.campus && (
                <p className="education-campus mt-1 text-sm font-medium text-ink">
                  {edu.campus}
                </p>
              )}

              <p className="education-degree mt-1 text-sm text-ink-secondary">
                {edu.degree} {edu.major}
              </p>

              <p className="education-date mt-1 text-sm text-ink-muted">
                {edu.startMonth} {edu.startYear} – {edu.endMonth} {edu.endYear}
              </p>

              {edu.honors?.length && (
                <p className="education-honors mt-1 text-sm italic text-ink-muted">
                  {edu.honors.join(", ")}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
