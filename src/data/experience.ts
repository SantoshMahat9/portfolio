import { Experience } from "@/types";

export const experienceData: Experience[] = [
  {
    id: "acelia-technologies",
    company: "Acelia Technologies",
    role: "Full Stack Developer Intern",
    period: "Upcoming · Joining 1 December 2026",
    joiningDate: "1 December 2026",
    mode: "Hybrid",
    isUpcoming: true,
    statusBadge: "Offer Received / Upcoming Role",
    responsibilities: [
      "Role offered and confirmed for December 2026.",
      "Scheduled to collaborate on full stack engineering, client feature development, and modern cloud application ecosystems upon commencement.",
      "Focusing on pre-joining technical alignment across modern enterprise web stacks.",
    ],
    technologies: ["Full Stack Architecture", "API Integration", "Web Engineering"],
    highlight: "Pre-placement offer received during undergraduate engineering study.",
  },
  {
    id: "kantascrypt",
    company: "Kantascrypt",
    role: "Intern Developer",
    period: "March 2024 – April 2024",
    mode: "Onsite",
    isUpcoming: false,
    statusBadge: "Completed Internship",
    responsibilities: [
      "Collaborated with a team of engineering interns to build a Personal Expense Tracker.",
      "Designed and managed relational SQL databases for personal finance and transactional records.",
      "Developed core backend logic and service layers using .NET.",
      "Actively participated in debugging sessions, issue resolution, and peer code reviews.",
      "Worked in short iterations with shared tasks and recurring progress check-ins.",
    ],
    technologies: [".NET", "SQL", "C#", "Database Design", "Agile Review"],
    highlight: "Successfully shipped core database schemas and service endpoints on schedule.",
  },
];
