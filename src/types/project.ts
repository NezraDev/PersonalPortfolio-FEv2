export type ProjectType = "Client Project" | "Academic Project" | "Personal Project";

export type ProjectCategory =
  | "Web Development"
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
  highlighted?: boolean;
  category: ProjectCategory;
  projectType?: ProjectType;
}
