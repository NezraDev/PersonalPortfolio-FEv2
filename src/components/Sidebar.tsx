import { Eye } from "lucide-react";
import { motion } from "framer-motion";
import Button from "./Button";
import SocialIcons from "./SocialIcons";
import { socials } from "../data/social";
import profilePhoto from "../assets/images/profile-light-v2.png";
import profileDarkPhoto from "../assets/images/profile-dark-v2.png";

export default function Sidebar() {
  const primarySocials = socials.filter(
    (s) => s.icon === "github" || s.icon === "linkedin" || s.icon === "mail",
  );

  return (
    <motion.aside
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="scroll-mt-nav py-10 lg:h-fit lg:py-16"
      id="home"
    >
      <div className="relative h-40 w-40 overflow-hidden rounded-full border border-border bg-surface-subtle shadow-sm">
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

      <h1 className="mt-6 text-xl font-bold tracking-tight text-ink sm:text-2xl">
        Arwil Martin Paraiso
      </h1>
      <p className="mt-1 text-sm font-medium text-ink-secondary">
        Computer Science Student
        <br />
        Aspiring Frontend Developer | UI/UX Designer | IT Support
      </p>

      <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
        Passionate about building innovative solutions, problem-solving, and
        creating meaningful user interface and experiences.
      </p>

      <Button
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        className="mt-5"
      >
        <Eye className="h-4 w-4" strokeWidth={2} />
        View Resume
      </Button>

      <div className="mt-6 border-t border-border pt-5">
        <SocialIcons socials={primarySocials} variant="list" />
      </div>
    </motion.aside>
  );
}
