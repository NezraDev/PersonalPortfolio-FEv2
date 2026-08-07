import type { SkillGroup } from "../types/skills";

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: [
      {
        id: "python",
        name: "Python",
        category: "Programming Languages",
        icon: "python",
      },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { id: "react", name: "React", category: "Frontend", icon: "react" },

      {
        id: "tailwind",
        name: "Tailwind CSS",
        category: "Frontend",
        icon: "tailwind",
      },
      { id: "html5", name: "HTML5", category: "Frontend", icon: "html5" },
      { id: "css3", name: "CSS3", category: "Frontend", icon: "css3" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { id: "nodejs", name: "Node.js", category: "Backend", icon: "nodejs" },
      { id: "php", name: "PHP", category: "Backend", icon: "php" },
      { id: "laravel", name: "Laravel", category: "Backend", icon: "laravel" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { id: "mysql", name: "MySQL", category: "Databases", icon: "mysql" },
      { id: "sqlite", name: "SQLite", category: "Databases", icon: "sqlite" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { id: "git", name: "Git & GitHub", category: "Tools", icon: "git" },
      { id: "vscode", name: "VS Code", category: "Tools", icon: "vscode" },
      { id: "docker", name: "Docker", category: "Tools", icon: "docker" },
    ],
  },
  {
    category: "Design",
    skills: [{ id: "figma", name: "Figma", category: "Design", icon: "figma" }],
  },
];
