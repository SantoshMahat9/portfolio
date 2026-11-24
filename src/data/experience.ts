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
    id: "kantascrypt",
    role: "Intern Developer",
    company: "Kantascrypt (Onsite)",
    duration: "Mar – Apr 2024",
    mode: "Onsite",
    isUpcoming: false,
    statusBadge: "MISSION ACCOMPLISHED",
    scopeSummary: "Collaborated in an onsite team of interns to engineer a production Personal Expense Tracker application.",
    responsibilities: [
      "Collaborated in a team of interns to build a Personal Expense Tracker web application, working in short iterations with shared tasks and regular progress check-ins.",
      "Designed and managed the SQL database for personal finance data.",
      "Developed backend logic in .NET to process user data.",
      "Took part in debugging and peer code reviews to improve application performance and code quality.",
    ],
    technologies: [".NET", "SQL", "C#", "Agile Sprints", "Code Reviews"],
  },
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
];
