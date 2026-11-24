export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  mode: string;
  isUpcoming: boolean;
  statusBadge: string;
  scopeSummary: string;
  responsibilities: string[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "acelia-technologies",
    role: "Full Stack Developer Intern",
    company: "Acelia Technologies",
    duration: "Upcoming · Joining 1 December 2026",
    mode: "Hybrid",
    isUpcoming: true,
    statusBadge: "CONFIRMED FUTURE MISSION",
    scopeSummary: "Pre-placement internship offer confirmed during undergraduate engineering study at St. John College of Engineering.",
    responsibilities: [
      "Scheduled to collaborate on full-stack application development and scalable feature engineering.",
      "Pre-engagement alignment across modern enterprise software ecosystems and API protocols.",
      "Direct continuation of academic and practical full-stack capabilities.",
    ],
    technologies: ["Full Stack Architecture", "API Integration", "Web Engineering"],
  },
  {
    id: "freelance-developer",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "2024 — Present",
    mode: "Remote / Hybrid",
    isUpcoming: false,
    statusBadge: "ACTIVE PRODUCTION",
    scopeSummary: "Designed and engineered full-stack web solutions and client digital platforms using modern JavaScript ecosystems.",
    responsibilities: [
      "Designed and developed responsive web applications for clients using React, Node.js, and MongoDB.",
      "Managed full project lifecycle: requirements gathering, UI wireframing, component architecture, testing, and deployment.",
      "Engineered secure authentication, cloud storage, and database persistence utilizing Firebase and RESTful APIs.",
      "Ensured mobile responsiveness, fast performance, and cross-browser compatibility across client deployments.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Firebase", "Express.js", "REST APIs"],
  },
  {
    id: "kantascrypt",
    role: "Software Development Intern",
    company: "Kantascrypt (Onsite)",
    duration: "Dec 2024 — Jan 2025",
    mode: "Onsite",
    isUpcoming: false,
    statusBadge: "MISSION ACCOMPLISHED",
    scopeSummary: "Collaborated in an onsite agile team of developers to engineer a production Personal Expense Tracker application.",
    responsibilities: [
      "Developed a Personal Expense Tracker application delivering full CRUD functionality for personal finance management.",
      "Designed and normalized SQL Server database schemas, writing optimized queries and stored procedures.",
      "Built resilient backend services and business logic using the .NET Framework (C#).",
      "Collaborated within a team-based Agile environment — participated in daily standups, sprint reviews, and peer code reviews.",
      "Gained hands-on production experience with enterprise software development workflows and secure coding standards.",
    ],
    technologies: [".NET", "SQL Server", "C#", "HTML/CSS", "JavaScript", "Agile Sprints"],
  },
];
