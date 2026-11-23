export interface Project {
  id: string;
  codeName: string;
  title: string;
  category: string;
  year: string;
  status?: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  accentColor: string;
}

export const projectsData: Project[] = [
  {
    id: "expense-tracker",
    codeName: "OPERATION // LEDGER",
    title: "Personal Expense Tracker",
    category: "Full Stack & Financial Engineering",
    year: "2024",
    description:
      "A personal finance management application developed as part of an engineering internship project at Kantascrypt.",
    longDescription:
      "Engineered during internship tenure with an onsite agile team. Built to provide users complete visibility into cash inflows and categorized expenditures, backed by robust relational database persistence in SQL and backend logic structured in .NET.",
    features: [
      "Categorized expense and income logging",
      "Financial record management and audit trails",
      "Relational SQL database integration & stored queries",
      "Backend business logic and API endpoints in .NET",
      "Intuitive cash flow visualizations with monthly breakdowns",
    ],
    technologies: ["SQL", ".NET", "C#", "HTML5", "CSS3"],
    githubUrl: "https://github.com/SantoshMahat9",
    image: "/images/projects/expense-tracker.svg",
    accentColor: "#E50914",
  },
  {
    id: "whatsapp-chatbot",
    codeName: "OPERATION // DISPATCH",
    title: "WhatsApp Chatbot Automation",
    category: "API Integration & Automation",
    year: "2025",
    description:
      "Designed and built an automated WhatsApp chatbot using the WhatsApp Business API and Python, replacing manual message handling with automated responses.",
    longDescription:
      "A high-availability automation system interfacing directly with Meta Graph webhooks. Ingests incoming communications, routes user intent through a modular Python logic layer, and delivers instant contextual dispatches without manual intervention.",
    features: [
      "WhatsApp Business API & Meta Cloud webhook integration",
      "Automated intent recognition & dynamic responses",
      "REST API integration and structured JSON payloads",
      "Defensive error handling and incoming message routing",
      "Incremental feature extensions for multi-stage replies",
    ],
    technologies: ["Python", "WhatsApp Business API", "REST APIs", "Webhooks", "JSON"],
    githubUrl: "https://github.com/SantoshMahat9",
    image: "/images/projects/whatsapp-bot.svg",
    accentColor: "#E50914",
  },
  {
    id: "web-dev-projects",
    codeName: "OPERATION // LAB",
    title: "Full Stack Web & API Laboratory",
    category: "Full Stack Architecture",
    year: "2024–Present",
    status: "Active Research",
    description:
      "Building full-stack projects while practising RESTful API design, database integration and incremental software development.",
    longDescription:
      "An iterative exploration lab testing modern web standards. Focuses on asynchronous Node.js backends, Express middleware pipelines, MongoDB document schemas, reactive client interfaces, and robust error management.",
    features: [
      "RESTful API design and modular controller routing",
      "Document database modeling with MongoDB",
      "Asynchronous server-side architectures with Node.js and Express",
      "Component-based interactive interfaces with React & Tailwind",
      "Rigorous unit testing and Git commit discipline",
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "JavaScript", "React"],
    githubUrl: "https://github.com/SantoshMahat9",
    image: "/images/projects/web-lab.svg",
    accentColor: "#E50914",
  },
];
