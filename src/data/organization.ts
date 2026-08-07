import type { Organization } from "../types/organization";
import luresLogo from "../assets/logos/lures.png";
import colabLogo from "../assets/logos/colab.png";
import mslLogo from "../assets/logos/msl.png";

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
