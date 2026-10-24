import type { Education } from "../types/education";
import lspuLogo from "../assets/optimized/logos/lspu.webp";
import tesdaLogo from "../assets/optimized/logos/tesda.webp";

export const education: Education[] = [
  {
    id: "lspu",
    school: "Laguna State Polytechnic University",
    campus: "Los Baños Campus",
    degree: "Bachelor of Science in Computer Science",
    major: "- Major in Intelligent Systems",
    startMonth: "August",
    endMonth: "June",
    startYear: "2023",
    endYear: "2027",
    honors: ["Dean's Lister"],
    location: "Los Baños, Laguna, Philippines",
    logo: lspuLogo,
  },
  {
    id: "tesda",
    school: "Philippine Technical Education and Skills Development Authority",
    campus: "Calauan, Laguna",
    degree: "Computer Systems Servicing NC II",
    major: undefined,
    startMonth: "July",
    endMonth: "August",
    startYear: "2026",
    endYear: "2026",
    honors: [""],
    location: "Calauan, Laguna, Philippines",
    logo: tesdaLogo,
  },
];
