import type { Achievement } from "../types/achievement";
import lspuLogo from "../assets/logos/lspu.png";
import ccs from "../assets/logos/ccs.png";
import bm from "../assets/logos/bm.png";
import more from "../assets/logos/more.png";
import ccsCert from "../assets/certs/ccs.png";
import ccsCertBM from "../assets/certs/bm.png";
import moreCert from "../assets/certs/more.png";
import osasCert from "../assets/certs/osas.png";

export const achievements: Achievement[] = [
  {
    id: "gawad-parangal-2026",
    title: "Most Active Officer Award",
    description:
      "Recognized for outstanding contributions and active participation in Student Body Organization activities, Laguna State Polytechnic University – Los Baños Campus.",
    logo: lspuLogo,
    date: "July 2026",
    image: osasCert,
  },
  {
    id: "more-rides-uiux",
    title: "Best UI/UX Feedback Contributor (Beta Testing)",
    description:
      "Recognized for providing valuable UI/UX feedback during the beta testing of the MORE Rides application.",
    logo: more,
    image: moreCert,
    date: "April 2026",
  },
  {
    id: "figma-design-champion",
    title: "Figma Design Competition Champion",
    description:
      "Champion, College of Computer Studies, Laguna State Polytechnic University – Los Baños Campus.",
    logo: ccs,
    date: "April 2026",
    image: ccsCert,
  },
  {
    id: "gad-excellence-award",
    title: "Excellence Award",
    description:
      "Gender and Development – Residency Management System, Barangay Batong Malake, Los Baños, Laguna.",
    logo: bm,
    date: "April 2026",
    image: ccsCertBM,
  },
];
