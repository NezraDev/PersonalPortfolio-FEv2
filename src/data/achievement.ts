import type { Achievement } from "../types/achievement";
import lspuLogo from "../assets/optimized/logos/lspu.webp";
import ccs from "../assets/optimized/logos/ccs.webp";
import bm from "../assets/optimized/logos/bm.webp";
import more from "../assets/optimized/logos/more.webp";
import ccsCert from "../assets/optimized/certs/ccs.webp";
import ccsCertBM from "../assets/optimized/certs/bm.webp";
import moreCert from "../assets/optimized/certs/more.webp";
import osasCert from "../assets/optimized/certs/osas.webp";

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
