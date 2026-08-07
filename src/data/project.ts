import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "portfolio-latest",
    title: "Personal Portfolio Website V2.0 - Latest Version",
    description:
      "A modern, responsive personal portfolio showcasing my projects, technical skills, experience, and achievements with an interactive and user-friendly interface.",
    coverImage: "assets/projects/portfolio_v2.png",
    technologies: ["React", "TailwindCSS"],
    githubUrl: "https://github.com/NezraDev/PersonalPortfolio-FEv2.git",
    liveUrl: "https://nezra.netlify.app",
    year: "2026",
    category: "Frontend Development",
    featured: true,
  },

  {
    id: "centrisai",
    title:
      "CentrisAI - Central Bangkok Flood Monitoring and Monitoring System (V2.0 - In-Progress)",
    description:
      "A unified dashboard for forecasting flood conditions, monitoring rainfall, canal levels, and flow, and reviewing district-level risk across Central Bangkok.",
    coverImage: "assets/projects/centrisai.png",
    technologies: ["React", "TailwindCSS"],
    githubUrl: "https://github.com/NezraDev?tab=repositories",
    liveUrl: "https://centrisai.netlify.app",
    year: "2026",
    category: "Frontend Development",
    featured: true,
  },
  {
    id: "rooftop",
    title: "AI-Based Rooftop Detection and House Counting (In-Progress)",
    description:
      "An AI-powered computer vision system that automatically detects rooftops from aerial or satellite imagery to estimate the number of houses within a specified area.",
    coverImage: "assets/projects/rooftop.png",
    technologies: ["React", "TailwindCSS"],
    githubUrl: "https://github.com/NezraDev/Rooftop-House-Detection.git",
    liveUrl: "https://rooftop-detection-ph.netlify.app",
    year: "2026",
    category: "Frontend Development",
    featured: true,
  },
  {
    id: "intellilock",
    title: "IntelliLock - IoT RFID Smart Door Lock System",
    description:
      "An IoT-based classroom access management system that uses RFID authentication to prevent unauthorized entry, record classroom access logs, and monitor room availability through a centralized Laravel dashboard.",
    coverImage: "assets/projects/intellilock.png",
    technologies: [
      "Laravel",
      "Blade",
      "PHP",
      "TailwindCSS",
      "MySQL",
      "ESP32",
      "RFID",
    ],
    githubUrl: "https://github.com/NezraDev?tab=repositories",
    liveUrl: "",
    year: "2026",
    category: "Frontend Development",
    featured: true,
  },
  {
    id: "bkk-floodwatch",
    title:
      "BKK FloodWatch - Bangkok Flood Monitoring and Monitoring System (V1.0)",
    description:
      "A unified dashboard for forecasting flood conditions, monitoring rainfall, canal levels, and flow, and reviewing district-level risk across the Bangkok, Thailand",
    coverImage: "assets/projects/bkk.png",
    technologies: ["Vue", "CSS"],
    githubUrl: "https://github.com/NezraDev/bkk-floodwatch",
    liveUrl: "https://bkk-floodwatch.netlify.app",
    year: "2026",
    category: "Frontend Development",
    featured: true,
  },
  {
    id: "suss-magazine",
    title: "SUSS: The Social Communal - Digital Magazine Management System",
    description:
      "A web-based digital magazine platform that allows users to browse, read, download, and manage digital publications through responsive and interactive reading interfaces.",
    coverImage: "assets/projects/social.png",
    technologies: ["React", "TailwindCSS"],
    githubUrl: "https://github.com/NezraDev/digital-suss-magazine.git",
    liveUrl: "https://the-social-communal.netlify.app/",
    year: "2026",
    category: "Frontend Development",
    featured: true,
  },
  {
    id: "cc",
    title: "Digital Citizen Charter Satisfaction Survey",
    description:
      "A responsive frontend survey page that enables citizens to conveniently submit Citizen Charter satisfaction feedback online through an intuitive, accessible, and mobile-friendly interface.",
    coverImage: "assets/projects/cc.png",
    technologies: ["React", "TailwindCSS"],
    githubUrl:
      "https://github.com/NezraDev/LSPU-LB-Citizen-Client-Satisfaction-Survey-Frontend.git",
    liveUrl: "https://lspu-lb-cc-survey.netlify.app",
    year: "2026",
    category: "Frontend Development",
    featured: true,
  },

  {
    id: "portfolio-old",
    title: "Personal Portfolio Website V1.0",
    description:
      "A minimalist, resume-inspired personal portfolio built with a modern React and TypeScript stack, focused on clean typography, smooth scroll animations, and a fully responsive layout.",
    coverImage: "assets/projects/portfolio_v1.png",
    technologies: ["React", "Tailwind CSS", "HTML", "JavaScript"],
    githubUrl: "https://github.com/NezraDev/PersonalPortfolio-FE.git",
    liveUrl: "https://nezradev.me",
    year: "2025",
    category: "Frontend Development",
    featured: false,
  },
  {
    id: "resident-management",
    title: "GAD Information Management System",
    description:
      "A web-based resident information management dashboard that centralizes resident records, streamlines data retrieval, and provides filtering, search, and record management for municipal staff.",
    coverImage: "assets/projects/gadbm.png",
    technologies: ["React"],
    githubUrl: "https://github.com/NezraDev/gad-solution-react.git",
    liveUrl: "https://gad-batong-malake.netlify.app",
    year: "2025",
    category: "Frontend Development",
    featured: true,
  },

  {
    id: "heal",
    title: "HEAL Medical Appointment System",
    description:
      "A mobile healthcare application that enables patients to schedule appointments, manage bookings, and access healthcare services through an intuitive and user-friendly interface.",
    coverImage: "assets/projects/heal.png",
    technologies: ["Figma"],
    githubUrl: undefined,
    liveUrl:
      "https://www.figma.com/design/ByuSd4aaULsxHmPQOOjYkp/HEAL?node-id=0-1&t=cRnA6tQ0qDZnuqM4-1",
    year: "2026",
    category: "UI/UX Design",
    featured: true,
  },

  {
    id: "fitness-go",
    title: "Fitness Go Mobile Application",
    description:
      "A mobile fitness application that helps users manage workouts, track fitness activities, and navigate personalized exercise features through an intuitive interface.",
    coverImage: "assets/projects/fitness-go.png",
    technologies: ["Figma"],
    githubUrl: undefined,
    liveUrl:
      "https://www.figma.com/design/OszR2d0GoCwiK6GOT1TFre/Fitness-Go?node-id=0-1&p=f&t=gqUWNjyDrsissA3y-0",
    year: "2025",
    category: "UI/UX Design",
    featured: true,
  },
  {
    id: "Kakampster",
    title: "Kakampster - Disaster Preparedness App ",
    description:
      "A disaster preparedness mobile application built with React Native that provides real-time alerts, emergency contacts, disaster updates, incident reporting, community forums, donation and volunteer opportunities, and an SOS feature.",
    coverImage: "assets/projects/kakampster.png",
    technologies: ["Figma"],
    githubUrl: undefined,
    liveUrl:
      "https://www.figma.com/design/AWyQWSvYF6V6flWHmx9Jb7/KAKAMPSTER-WIREFRAME--Copy-?node-id=0-1&p=f&t=LJ0GJbUQZIalexGu-0",
    year: "2025",
    category: "UI/UX Design",
    featured: true,
  },
  {
    id: "magify",
    title: "Magify - Magazine Management System",
    description:
      "A magazine management platform that provides an organized interface for browsing, managing, and accessing digital magazine collections with a modern user experience.",
    coverImage: "assets/projects/magify.png",
    technologies: ["Figma"],
    githubUrl: undefined,
    liveUrl:
      "https://www.figma.com/design/Zfz8g71Pl1L8jFWMhdD66W/Magify?node-id=73-3238&t=2Q35uSqSHO7XzmNl-0",
    year: "2025",
    category: "UI/UX Design",
    featured: true,
  },
];
