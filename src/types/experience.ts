export interface Experience {
  id: string;
  company: string;
  logo: string;
  location: string;
  startDate: string;
  endDate: string;

  roles: {
    id: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string[];
    technologies: string[];
  }[];
}
