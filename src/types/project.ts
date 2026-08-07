export type ProjectCategory =
  | "Frontend Development"
  | "UI/UX Design"
  | "Full-Stack & IoT Development";

export interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  year: string;
  featured?: boolean;
  category: ProjectCategory;
}
