import {
  Code2,
  Database,
  Globe,
  Mail,
  Phone,
  MapPin,
  Star,
  Users,
  Trophy,
  Award,
  type LucideIcon,
} from "lucide-react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiGit,
  SiPostman,
  SiDocker,
  SiFigma,
  SiGithub,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import type { IconType } from "react-icons";

/**
 * Unified icon type.
 *
 * `lucide-react` only ships generic/outline UI icons and doesn't (and won't)
 * include trademarked brand logos (GitHub, LinkedIn, Figma, Docker, Postman,
 * etc.). For those we use `react-icons/si` (Simple Icons), which provides
 * official, up-to-date brand marks as tree-shakeable React components.
 *
 * Both `LucideIcon` and `IconType` render as plain SVG components that accept
 * `className`, `size`, and standard SVG attributes (incl. `strokeWidth`), so
 * they can be safely used interchangeably anywhere an `AppIcon` is expected.
 */
export type AppIcon = LucideIcon | IconType;

export const techIconMap: Record<string, AppIcon> = {
  // Languages
  python: SiPython,
  javascript: SiJavascript,
  typescript: SiTypescript,
  cpp: SiCplusplus,
  sql: Database, // no single official "SQL" brand mark — generic icon
  php: SiPhp,

  // Frontend
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  html5: SiHtml5,
  css3: SiCss,

  // Backend
  nodejs: SiNodedotjs,
  express: SiExpress,
  laravel: SiLaravel,
  api: Globe, // generic REST/API concept — not a brand

  // Databases
  mysql: SiMysql,
  postgresql: SiPostgresql,
  sqlite: SiSqlite,

  // Tooling
  git: SiGit,
  vscode: Code2, // no official brand mark bundled — generic code icon

  postman: SiPostman,
  docker: SiDocker,
  figma: SiFigma,
};

export const socialIconMap: Record<string, AppIcon> = {
  github: SiGithub,
  linkedin: FaLinkedin,
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
};

export const achievementIconMap: Record<string, LucideIcon> = {
  star: Star,
  code: Code2,
  users: Users,
  trophy: Trophy,
  award: Award,
};

/**
 * Official (or closest-match) brand colors for each tech-stack icon, used to
 * render the Tech Stack section in full color instead of flat monochrome.
 */
export const techBrandColors: Record<string, string> = {
  python: "#3776AB",
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  cpp: "#00599C",
  sql: "#4479A1",
  php: "#777BB4",

  react: "#61DAFB",
  nextjs: "var(--color-ink)",
  tailwind: "#06B6D4",
  html5: "#E34F26",
  css3: "#1572B6",

  nodejs: "#339933",
  express: "var(--color-ink)",
  laravel: "#FF2D20",
  api: "var(--color-ink)",

  mysql: "#4479A1",
  postgresql: "#4169E1",
  sqlite: "#003B57",

  git: "#F05032",
  vscode: "#007ACC",

  postman: "#FF6C37",
  docker: "#2496ED",
  figma: "#F24E1E",
};

export function getTechIcon(key: string): AppIcon {
  return techIconMap[key] ?? Code2;
}

export function getSocialIcon(key: string): AppIcon {
  return socialIconMap[key] ?? Globe;
}
