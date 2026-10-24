import type { Certification } from "../types/certification";

export const certifications: Certification[] = [
  {
    id: "topcit-level-3",
    name: "TOPCIT Passer - Competent Level 3",
    organization: "IITP",
    date: "2026",
  },
  {
    id: "tesda-css-nc-ii",
    name: "National Certificate II (NC II) in Computer Systems Servicing (CSS) - Competent",
    organization: "TESDA",
    date: "2026",
  },
  {
    id: "python-crash-course",
    name: "Crash Course on Python",
    organization: "Google",
    date: "2026",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/71EISIP1K62S",
    logo: "/assets/logos/freecodecamp.png",
  },
  {
    id: "web-and-responsive-design",
    name: "Web and Responsive Design",
    organization: "freeCodeCamp",
    date: "2026",
    credentialUrl:
      "https://www.freecodecamp.org/certification/DevNezra/responsive-web-design",
    logo: "/assets/logos/freecodecamp.png",
  },
];
