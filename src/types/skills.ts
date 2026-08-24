export type SkillCategory =
  | "Programming Languages"
  | "Frontend"
  | "Backend"
  | "Databases"
  | "Tools"
  | "Design"
  | "Productivity Tools"
  | "IT Support & Troubleshooting";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  icon: string;
}

export interface SkillGroup {
  category: SkillCategory;
  skills: Skill[];
}
