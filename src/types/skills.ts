export type SkillCategory =
  | "Programming Languages"
  | "Frontend"
  | "Backend"
  | "Databases"
  | "Tools"
  | "Design";

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
