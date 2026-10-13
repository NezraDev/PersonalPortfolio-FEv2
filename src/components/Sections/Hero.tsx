import { Download, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../Section";
import Button from "../Button";
import SocialIcons from "../SocialIcons";
import { socials } from "../../data/social";
import profilePhoto from "../../assets/images/profile-light-v2.png";
import profileDarkPhoto from "../../assets/images/profile-dark-v2.png";

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Arwil_Paraiso_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section id="home" bordered={false}>
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="shrink-0"
        >
          <picture>
            <source
              srcSet={profileDarkPhoto}
              media="(prefers-color-scheme: dark)"
            />
            <img
              src={profilePhoto}
              alt="Arwil Martin S. Paraiso"
              className="h-32 w-32 rounded-full object-cover md:h-40 md:w-40"
            />
          </picture>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Arwil Martin S. Paraiso
          </h1>

          <p className="mt-2 text-base font-medium text-ink-secondary md:text-lg">
            Computer Science Student · Aspiring Software Engineer
          </p>

          <p className="mx-auto mt-4 max-w-xl lg:text-justify text-sm leading-relaxed text-ink-muted md:mx-0 md:text-base">
            Passionate about building innovative solutions, solving real
            problems with code, and creating meaningful user experiences from
            front to back.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Button onClick={handleDownloadResume}>
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
              <ArrowDown className="h-4 w-4" strokeWidth={2} />
              View Projects
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
