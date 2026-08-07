import { Download, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../Section";
import Button from "../Button";
import SocialIcons from "../SocialIcons";
import { socials } from "../../data/social";
import profilePhoto from "../../assets/images/profile.png";
import profileDarkPhoto from "../../assets/images/profile darkmode.png";

export default function Hero() {
  return (
    <Section
      id="home"
      bordered={false}
      className="pt-16 pb-16 md:pt-24 md:pb-24"
    >
      <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0"
        >
          <div className="relative h-40 w-40 overflow-hidden rounded-full border border-border bg-surface-subtle shadow-sm md:h-48 md:w-48">
            <img
              src={profilePhoto}
              alt="Arwil Martin S. Paraiso"
              className="theme-image-light absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <img
              src={profileDarkPhoto}
              alt=""
              aria-hidden="true"
              className="theme-image-dark absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Arwil Martin S. Paraiso
          </h1>
          <p className="mt-2 text-base font-medium text-ink-secondary md:text-lg">
            Computer Science Student · Aspiring Software Engineer
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-muted md:mx-0 md:text-base">
            Passionate about building innovative solutions, solving real
            problems with code, and creating meaningful user experiences from
            front to back.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Button
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-4 w-4" strokeWidth={2} />
              Download Resume
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
              <ArrowDown className="h-4 w-4" strokeWidth={2} />
            </Button>
          </div>

          <SocialIcons
            socials={socials}
            className="mt-7 justify-center md:justify-start"
          />
        </motion.div>
      </div>
    </Section>
  );
}
