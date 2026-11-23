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
    statusBadge: "MISSION OFFERED / CONFIRMED FOR DEC 2026",
    scopeSummary: "Pre-placement internship offer confirmed during undergraduate engineering study at St. John College of Engineering.",
    responsibilities: [
      "Scheduled to collaborate on full-stack application development and scalable feature engineering.",
      "Pre-engagement alignment across modern enterprise software ecosystems and API protocols.",
      "Direct continuation of academic and practical full-stack capabilities.",
    ],
    technologies: ["Full Stack Architecture", "API Integration", "Web Engineering"],
  },
  {
    id: "kantascrypt",
    role: "Full Stack Developer Intern",
    company: "Kantascrypt",
    duration: "March 2024 – April 2024",
    mode: "Onsite",
    isUpcoming: false,
    statusBadge: "MISSION COMPLETED",
    scopeSummary: "Engineered core backend and relational schemas for a production Personal Expense Tracker.",
    responsibilities: [
      "Collaborated in a team of engineering interns to design and develop the Personal Expense Tracker application.",
      "Designed, maintained, and optimized relational SQL database schemas for personal financial records.",
      "Implemented core backend logic and service endpoints using .NET / C#.",
      "Engaged in active debugging, issue resolution, and iterative peer code reviews.",
      "Delivered functional features in short agile development sprints with scheduled progress check-ins.",
    ],
    technologies: [".NET", "SQL", "C#", "Database Schemas", "Agile Sprints"],
  },
];
