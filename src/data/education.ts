import { Education, EducationItem } from "@/types";

export const educationHistory: EducationItem[] = [
  {
    id: "sjcem-degree",
    degree: "Bachelor of Engineering (B.E. / B.Tech)",
    field: "Computer Engineering",
    institution: "St. John College of Engineering and Management (SJCEM)",
    university: "University of Mumbai",
    duration: "2023 — 2027",
    status: "Pursuing · Final Phase",
    cgpa: "6.5",
    location: "Palghar / Boisar, Maharashtra",
    isCurrent: true,
    highlights: [
      "Rigorous engineering coursework covering Data Structures, Relational Database Systems, Operating Systems, and Distributed Web Architectures.",
      "Hands-on project delivery in enterprise software stacks (.NET, SQL Server, Node.js, React).",
      "Author & presenter of technical research paper at Anveshnam 2024 symposium at SJCEM.",
      "Active participant in departmental hackathons, technical symposiums, and code review cohorts.",
    ],
  },
  {
    id: "sdsm-hsc",
    degree: "Higher Secondary Certificate (HSC) — Science",
    field: "Informatics Practices (Python & Computer Science)",
    institution: "Sonopant Dandekar Shikshan Mandali (SDSM) College",
    board: "MSBSHSE (Maharashtra State Board)",
    duration: "2021 — 2023",
    status: "Completed",
    location: "Palghar, Maharashtra",
    isCurrent: false,
    highlights: [
      "Strong academic foundations in Science, Mathematics, Physics, and Chemistry.",
      "Early specialization in Informatics Practices with practical Python programming, logic, and data handling.",
      "Graduated with distinction in core pre-engineering STEM disciplines.",
    ],
  },
];

export const educationData: Education = educationHistory[0];
