export interface Education {
  id: string;
  school: string;
  campus?: string;
  degree: string;
  startMonth: string;
  endMonth: string;
  startYear: string;
  endYear: string;
  honors?: string[];
  major?: string;
  location?: string;
  logo?: string;
}
