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
  Laptop,
  MonitorCog,
  Wrench,
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
  SiGoogle,
} from "react-icons/si";

import { FaLinkedin } from "react-icons/fa6";
import type { IconType } from "react-icons";

export type AppIcon = LucideIcon | IconType;

export const techIconMap: Record<string, AppIcon> = {
  // Languages
  python: SiPython,
  javascript: SiJavascript,
  typescript: SiTypescript,
  cpp: SiCplusplus,
  sql: Database,
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
  api: Globe,

  // Databases
  mysql: SiMysql,
  postgresql: SiPostgresql,
  sqlite: SiSqlite,

  // Tooling
  git: SiGit,
  vscode: Code2,
  postman: SiPostman,
  docker: SiDocker,
  figma: SiFigma,

  // Productivity Tools
  google: SiGoogle,

  // IT Support and Troubleshooting
  hardware: Laptop,
  software: MonitorCog,
  troubleshooting: Wrench,
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

  google: "#4285F4",
  hardware: "var(--color-ink)",
  software: "var(--color-ink)",
  troubleshooting: "var(--color-ink)",
};

export function getTechIcon(key: string): AppIcon {
  return techIconMap[key] ?? Code2;
}

export function getSocialIcon(key: string): AppIcon {
  return socialIconMap[key] ?? Globe;
}
