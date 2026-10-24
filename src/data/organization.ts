import type { Organization } from "../types/organization";
import luresLogo from "../assets/optimized/logos/lures.webp";
import colabLogo from "../assets/optimized/logos/colab.webp";
import mslLogo from "../assets/optimized/logos/msl.webp";

export const organizations: Organization[] = [
  {
    id: "lures",
    name: "Legion of Lures Esports",
    logo: luresLogo,
    role: "President",
    duration: "October 2025 - July 2026",
    description: undefined,
  },
  {
    id: "msl",
    name: "Moonton Student Leaders Philippines",
    logo: mslLogo,
    role: "Student Leader",
    duration: "May 2025 - July 2026",
    description: undefined,
  },
  {
    id: "colab",
    name: "Community, Outreach, and Laboratory Organization",
    logo: colabLogo,
    role: "Auditor",
    duration: "October 2025 - July 2026",
    description: undefined,
  },
];
