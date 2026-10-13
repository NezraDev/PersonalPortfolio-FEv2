import type { Experience } from "../types/experience";
import moontonLogo from "../assets/logos/moonton.png";
import lspuLogo from "../assets/logos/lspu.png";
import bpi from "../assets/logos/bpi.png";
import freelance from "../assets/logos/freelance.png";
import dmsaLogo from "../assets/logos/dmsa.png";
import tesdaLogo from "../assets/logos/tesda.png";
import luresLogo from "../assets/logos/lures.png";
import arcLogo from "../assets/logos/arc.png";
import suurfaceLogo from "../assets/logos/suurface.png";

export const experience: Experience[] = [
  {
    id: "arc-solutions-technology",
    company: "ARC Solutions and Technology",
    logo: arcLogo,
    location: "Remote · Los Baños, Laguna, Philippines",
    startDate: "October 2026",
    endDate: "Present",
    roles: [
      {
        id: "co-founder",
        position: "Co-Founder | Full Stack Developer",
        startDate: "October 2026",
        endDate: "Present",
        description: [
          "Co-founded ARC Solutions and Technology to develop practical software solutions that address real-world client problems.",
        ],
        technologies: ["Full-Stack Web Development", "Problem Solving"],
      },
    ],
  },
  {
    id: "suurfaceinc",
    company: "SuurfaceInc",
    logo: suurfaceLogo,
    location: "Hybrid · Quezon City, Philippines",
    startDate: "October 2026",
    endDate: "Present",
    roles: [
      {
        id: "junior-software-developer",
        position: "Internship | Junior Software Engineer",
        startDate: "October 2026",
        endDate: "Present",
        description: [
          "Recently joined as a Junior Software Engineer Intern and was assigned to develop an internal company project focused on improving workflow processes.",
        ],
        technologies: ["Software Development", "Workflow Improvement"],
      },
    ],
  },
  {
    id: "dmsa-digital-media",
    company: "DMSA Pest Control Services",
    logo: dmsaLogo,
    location: "Remote · Los Baños, Laguna, Philippines",
    startDate: "August 2026",
    endDate: "Present",
    roles: [
      {
        id: "digital-media-operator",
        position: "Digital Media Operator | Web Developer",
        startDate: "August 2026",
        endDate: "Present",
        description: [
          "Developed and deployed seven responsive pages as the full-stack developer using Next.js, React, TypeScript, and Tailwind CSS, transforming DMSA Pest Control Services’ manual quotation process into a centralized digital workflow for collecting customer, service, scheduling, and property-location details.",
          "Built four service presentations, three interactive MapLibre experiences, and a reusable six-image treatment gallery, consolidating service discovery, location selection, project viewing, and quotation requests into one mobile-responsive platform.",
          " Implemented technical SEO across seven routes, accessibility improvements, server-side validation, anti-spam safeguards, and 19 automated tests, achieving a 100% test pass rate while strengthening the website’s reliability, security, and search readiness.",
          "Managed the business’s digital media requirements by creating, organizing, and maintaining website content, treatment photographs, branding assets, and online promotional materials to ensure consistent and professional communication across its digital channels.",
        ],
        technologies: [
          "React.js",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "MapLibre GL JS",
          "Frontend Development",
          "Full-Stack Web Development",
          "Responsive Web Design",
          "UI/UX Design",
          "Technical SEO",
          "Web Accessibility",
          "Server-Side Validation",
          "Automated Testing",
          "Website Development",
          "Content Management",
          "Digital Asset Management",
          "Business Email Management",
          "Inquiry Management",
          "Company Profile Management",
          "Canva",
        ],
      },
    ],
  },
  {
    id: "moonton-student-leaders",
    company: "Moonton Games - Moonton Student Leaders PH",
    logo: moontonLogo,
    location: "Hybrid · Philippines",
    startDate: "May 2025",
    endDate: "Present",
    roles: [
      {
        id: "msl-website-frontend",
        position: "Moonton Student Leader - Frontend Developer",
        startDate: "August 2026",
        endDate: "Present",
        description: [
          "Collaborated as a Frontend Developer within a 10-person development team to translate high-fidelity UI designs into responsive React, Inertia.js, and Tailwind CSS pages for Regional Admin, Event Management, Registration Management, and Account Management, resulting in consistent and accessible desktop and mobile experiences.",
          "Served as a UI-to-Code Implementer responsible for building reusable components, searchable tables, standard pagination, form validation, CRUD modals, confirmation workflows, and school-assignment functionality, resulting in a maintainable and consistent administration interface.",
          "Contributed to frontend architecture by separating activity events, attendance registration, regional administration, and account-management workflows into organized, backend-ready components, resulting in clearer feature boundaries and easier future system integration.",
        ],
        technologies: [
          "Figma",
          "Tailwind CSS",
          "React",
          "Inertia.js",
          "Laravel",
          "Google Sheet",
          "Lark",
          "Git",
        ],
      },
      {
        id: "student-leader",
        position: "Moonton Student Leader",
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
          "Documentation",
          "Public Relations",
          "Microsoft Office",
          "Google Workspace",
          "Google Sheets",
          "Event Coordination",
          "Event Planning",
          "Google Docs",
          "Google Forms",
          "Event Execution",
          "Strategic Communications",
          "Problem Solving",
          "Design Thinking",
        ],
      },
    ],
  },
  {
    id: "freelance-uiux",
    company: "Freelance",
    logo: freelance,
    location: "Remote · Los Baños, Laguna, Philippines",
    startDate: "Jan 2024",
    endDate: "Present",
    roles: [
      {
        id: "freelance-it-support",
        position: "Computer Hardware | Software Support",
        startDate: "Jan 2025",
        endDate: "Present",
        description: [
          "Built and assembled personal computers as part of computer systems servicing tasks by selecting compatible hardware components, installing internal parts, and configuring systems, delivering fully functional computers ready for use.",
          "Performed basic hardware and software troubleshooting by identifying common system issues, diagnosing hardware and software problems, and applying appropriate corrective procedures, restoring proper computer functionality.",
          "Reformatted and prepared computer systems by installing operating systems, device drivers, and essential software, providing properly configured and operational workstations.",
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
        position: "Frontend Developer | UI/UX Designer",
        startDate: "Jan 2024",
        endDate: "Present",
        description: [
          "Designed a user-centered mobile application interface for a medical appointment system by creating wireframes and high-fidelity prototypes, streamlining the appointment booking experience within a one-day turnaround and earning a 98% evaluation score for design quality and usability.",

          "Designed and developed the frontend of a responsive digital magazine platform, creating accessible interfaces that supported 10,000+ users and 100+ digital magazines, with features including downloadable publications and an interactive flipbook reading experience.",

          "Designed a magazine management system in Figma, producing wireframes, high-fidelity mockups, user flows, and interactive prototypes while strengthening information architecture, usability, and design consistency.",

          "Led the UI/UX design of a fitness mobile application by creating user flows, wireframes, high-fidelity prototypes, and interface layouts for workout-related features, contributing to a project that received a 99% academic evaluation for design quality and usability.",
        ],
        technologies: [
          "Figma",
          "HTML",
          "Tailwind CSS",
          "CSS",
          "JavaScript",
          "React Native",
          "PHP",
          "Laravel",
          "React.js",
          "SQLite",
          "MySQL",
          "Next.js",
        ],
      },
    ],
  },

  {
    id: "tesda-css-ncii",
    company: "Technical Education and Skills Development Authority",
    logo: tesdaLogo,
    location: "Calauan, Laguna, Philippines",
    startDate: "July 2026",
    endDate: "August 2026",
    roles: [
      {
        id: "computer-systems-servicing-trainee",
        position: "Computer Systems Servicing NC II Trainee",
        startDate: "July 2026",
        endDate: "August 2026",
        description: [
          "Assembled and configured computer hardware by installing components, configuring BIOS, connecting peripherals, and applying safety procedures to produce fully functional computer units.",

          "Installed and configured operating systems and client-server systems by setting up drivers, applications, server and client configurations, and performing system troubleshooting to maintain reliable and ready-to-use workstations.",

          "Configured computer networks and performed data backup procedures by setting up LAN connections, testing network connectivity, managing shared resources, and backing up system data to maintain stable network operations and data availability.",
        ],
        technologies: [
          "Computer Hardware Assembly",
          "Operating System Installation",
          "Client-Server Configuration",
          "Network Configuration",
          "System Troubleshooting",
          "Data Backup",
        ],
      },
    ],
  },

  {
    id: "legion-of-lures-esports",
    company: "Legion of Lures Esports",
    logo: luresLogo,
    location: "Los Baños, Laguna, Philippines",
    startDate: "October 2025",
    endDate: "July 2026",
    roles: [
      {
        id: "lures-president",
        position: "President",
        startDate: "October 2025",
        endDate: "July 2026",
        description: [
          "Awarded Most Active Officer in recognition of outstanding dedication, active participation, and contributions to organizational activities and events.",
          "Managed and supported 80+ internal officers and members by coordinating organizational activities, facilitating communication, and overseeing task execution, contributing to efficient operations and successful event delivery.",
          "Conducted and hosted 10+ campus events by collaborating with partners and sponsors, including AcadArena, Mountain Dew, HyperX Philippines, Qanba, and MSL Philippines, resulting in successful event execution and engagement from over 1,000 students",
          "Partnered with multiple university departments and colleges to organize 10+ campus events, fostering cross-functional collaboration that engaged 300+ active participants and reached over 1,000 students.",
        ],
        technologies: [
          "Project Management",
          "Event Planning",
          "Event Coordination",
          "Strategic Partnerships",
          "Community Outreach",
          "Interpersonal Communication",
          "Tournament Handling",
          "Leadership",
        ],
      },
    ],
  },

  {
    id: "lspu-extension",
    company: "Laguna State Polytechnic University",
    logo: lspuLogo,
    location: "Hybrid · Los Baños, Laguna, Philippines",
    startDate: "Jan 2024",
    endDate: "Present",
    roles: [
      {
        id: "uiux",
        position: "Frontend Developer | UI/UX Designer",
        startDate: "November 2024",
        endDate: "January 2026",
        description: [
          "Designed user-centered interfaces and collaborated on digital solutions for academic institutions and local government stakeholders through the LSPU Extension Program.",
          "Designed and developed a digital survey management system as part of a 10-member team, transforming paper-based surveys into a digital platform used across 8 departments and 28 offices, improving processing efficiency by approximately 60%.",
          "Led the UI/UX design and frontend development of the Barangay Batong Malake Resident Management System, creating an intuitive dashboard for managing over 10,000 resident records and improving information retrieval efficiency by approximately 40–60%.",
        ],
        technologies: [
          "React.js",
          "Figma",
          "Git",
          "GitHub",
          "Django",
          "Laravel",
          "TypeScript",
        ],
      },
      {
        id: "training",
        position: "Student Research | Training Assistant",
        startDate: "November 2024",
        endDate: "January 2026",
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
    location: "Onsite · Los Baños, Laguna, Philippines",
    startDate: "April 2023",
    endDate: "May 2023",
    roles: [
      {
        id: "work-immersion",
        position: "Senior High School - Work Immersion ",
        startDate: "April 2023",
        endDate: "May 2023",
        description: [
          "Supported office personnel as a work immersion trainee by assisting with daily administrative and operational tasks, contributing to the efficient completion of departmental activities.",
          "Coordinated with facilitators, supervisors, and office personnel by supporting the planning and execution of assigned activities, maintaining effective communication and smooth collaboration.",
          "Handled assigned responsibilities by demonstrating reliability, initiative, teamwork, and professionalism while completing tasks accurately and efficiently, earning recognition as Best Work Immersion Individual for outstanding performance and commitment.",
        ],
        technologies: [
          "Office Administration",
          "Team Coordination",
          "Communication",
          "Organization Skills",
          "Problem Solving",
          "Crop Management",
          "Crop Protection",
          "Video Editing",
          "Research Skills",
        ],
      },
    ],
  },
];
