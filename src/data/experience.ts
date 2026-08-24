import type { Experience } from "../types/experience";
import moontonLogo from "../assets/logos/moonton.png";
import lspuLogo from "../assets/logos/lspu.png";
import bpi from "../assets/logos/bpi.png";
import freelance from "../assets/logos/freelance.png";
import dmsaLogo from "../assets/logos/dmsa.png";

export const experience: Experience[] = [
  {
    id: "moonton-student-leaders",
    company: "Moonton Games",
    logo: moontonLogo,
    location: "Hybrid · Philippines",
    startDate: "May 2025",
    endDate: "Present",
    roles: [
      {
        id: "msl-website-frontend",
        position: "Frontend Developer",
        startDate: "August 2026",
        endDate: "Present",
        description: [
          "Currently developing the MSL Website 2026 by translating Figma UI designs into responsive and functional web interfaces.",
        ],
        technologies: [
          "Figma",
          "Tailwind CSS",
          "React",
          "Inertia.js",
          "Laravel",
        ],
      },
      {
        id: "student-leader",
        position: "Moonton Student Leader (Philippines)",
        startDate: "May 2025",
        endDate: "July 2026",
        description: [
          "Selected as a campus ambassador under the Moonton Student Leaders Philippines program, representing Moonton Games while promoting esports, student engagement, and leadership initiatives within the university.",
          "Managed partnerships between Moonton Games, university departments, and campus organizations by coordinating communications, documentation, fund liquidation, partnership reports, and deliverables, contributing to the successful execution of four major esports events attended by more than 1,000 students.",
          "Collaborated with the Sponsorship Department to organize more than 10 hybrid events by coordinating sponsorship activities, monitoring partnership commitments, and preparing post-event reports, achieving 100% completion of partnership deliverables.",
          "Led the planning and execution of monthly campus esports tournaments by coordinating with university departments and the Campus Department, overseeing event operations, documenting outcomes, and preparing activity reports that engaged more than 300 students.",
          "Strengthened collaboration among students, university stakeholders, and industry partners through effective communication, project coordination, and relationship management.",
        ],
        technologies: [
          "Leadership",
          "Project Management",
          "Event Management",
          "Stakeholder Management",
          "Partnership Management",
          "Leadership",
          "Documentation",
          "Public Relations",
          "Microsoft Office",
          "Google Workspace",
        ],
      },
    ],
  },
  {
    id: "dmsa-digital-media",
    company: "DMSA Pest Control Services",
    logo: dmsaLogo,
    location: "Los Baños, Laguna, Philippines",
    startDate: "August 2026",
    endDate: "Present",
    roles: [
      {
        id: "digital-media-operator",
        position: "Digital Media Operator & Web Developer",
        startDate: "August 2026",
        endDate: "Present",
        description: [
          "Manage and oversee the company's digital assets, including its business email, online profile, inquiry channels, and website, ensuring that essential information remains organized and accessible.",

          "Monitor and organize customer inquiries received through digital channels, supporting timely and professional communication with prospective clients.",

          "Will be responsible for the ongoing development and maintenance of the company's website, including updating service information, contact details, and digital content to support a consistent online presence.",

          "Coordinate the company's digital content and online presentation, helping maintain accurate information and consistent branding across its digital platforms.",
        ],
        technologies: [
          "Digital Asset Management",
          "Business Email Management",
          "Company Profile Management",
          "Inquiry Management",
          "Website Development",
          "Content Management",
        ],
      },
    ],
  },
  {
    id: "freelance-uiux",
    company: "Freelance / Independent Contract Work",
    logo: freelance,
    location: "Remote",
    startDate: "Jan 2024",
    endDate: "Present",
    roles: [
      {
        id: "freelance-it-support",
        position: "Computer Hardware & Software Support",
        startDate: "Jan 2025",
        endDate: "Present",
        description: [
          "Built and assembled personal computers by installing compatible hardware components and configuring systems for use.",

          "Assisted with basic hardware and software troubleshooting by identifying and resolving common computer issues.",

          "Reformatted computers, installed operating systems, and configured essential software for proper system setup.",
        ],
        technologies: [
          "PC Building",
          "Hardware Troubleshooting",
          "Software Troubleshooting",
          "Operating System Installation",
          "System Reformatting",
          "Data Backup",
          "Software Installation",
          "Computer Maintenance",
        ],
      },
      {
        id: "uiux-frontend",
        position: "UI/UX Designer & Frontend Developer",
        startDate: "Jan 2024",
        endDate: "Present",
        description: [
          "Designed a user-centered mobile application interface for a medical appointment system by creating wireframes and high-fidelity prototypes, streamlining the appointment booking experience within a one-day turnaround and earning a 98% evaluation score for design quality and usability.",

          "Designed and developed the frontend of a responsive digital magazine platform, creating accessible interfaces that supported 10,000+ users and 100+ digital magazines, with features including downloadable publications and an interactive flipbook reading experience.",

          "Designed a magazine management system in Figma, producing wireframes, high-fidelity mockups, user flows, and interactive prototypes while strengthening information architecture, usability, and design consistency.",

          "Led the UI/UX design of a fitness mobile application by creating user flows, wireframes, high-fidelity prototypes, and interface layouts for workout-related features, contributing to a project that received a 99% academic evaluation for design quality and usability.",
        ],
        technologies: ["Figma", "React", "TypeScript", "Tailwind CSS"],
      },
    ],
  },

  {
    id: "lspu-extension",
    company: "Volunteer / Laguna State Polytechnic University",
    logo: lspuLogo,
    location: "Onsite - Los Baños, Laguna, Philippines",
    startDate: "Jan 2025",
    endDate: "Present",
    roles: [
      {
        id: "uiux",
        position: "UI/UX Designer & Frontend Developer",
        startDate: "Jan 2025",
        endDate: "Present",
        description: [
          "Designed user-centered interfaces and collaborated on digital solutions for academic institutions and local government stakeholders through the LSPU Extension Program.",
          "Designed and developed a digital survey management system as part of a 10-member team, transforming paper-based surveys into a digital platform used across 8 departments and 28 offices, improving processing efficiency by approximately 60%.",
          "Led the UI/UX design and frontend development of the Barangay Batong Malake Resident Management System, creating an intuitive dashboard for managing over 10,000 resident records and improving information retrieval efficiency by approximately 40–60%.",
        ],
        technologies: [
          "Figma",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Laravel",
          "Django",
        ],
      },
      {
        id: "training",
        position: "Research and Training Assistant",
        startDate: "Jan 2025",
        endDate: "Present",
        description: [
          "Collaborated with a 10-member team and stakeholders across 8 college departments and 28 school offices to design and develop a user-friendly digital survey system, replacing paper-based workflows and improving processing efficiency by approximately 60%.",
          "Assisted 5 professors and 100+ stakeholders in software and hardware training sessions by supporting user onboarding, process documentation, attendance tracking, and coordination of trainee activities, contributing to a well-structured training experience and achieving approximately 95% positive post-evaluation feedback.",
        ],
        technologies: [
          "Computer Hardware",
          "Computer Software Training",
          "Documentation",
          "Coordination",
          "Software Documentation",
        ],
      },
    ],
  },

  {
    id: "bureau-of-plant-industry",
    company:
      "Bureau of Plant Industry – Los Baños National Crop Research, Development and Production Support Center",
    logo: bpi,
    location: "Los Baños, Laguna, Philippines",
    startDate: "April 2023",
    endDate: "May 2023",
    roles: [
      {
        id: "work-immersion",
        position: "Senior High School - Work Immersion ",
        startDate: "April 2023",
        endDate: "May 2023",
        description: [
          "Recognized as the Best Work Immersion individual for outstanding performance, professionalism, initiative, and commitment throughout the work immersion program.",
          "Assisted office personnel in carrying out daily administrative and operational tasks, contributing to the efficient completion of departmental activities.",
          "Coordinated with facilitators, supervisors, and office personnel to support the planning and execution of assigned activities while ensuring effective communication and collaboration.",
          "Demonstrated reliability, teamwork, and a strong work ethic by completing assigned responsibilities accurately and efficiently.",
        ],
        technologies: [
          "Administrative Support",
          "Coordination",
          "Communication",
          "Team Collaboration",
          "Organization",
          "Problem Solving",
        ],
      },
    ],
  },
];
