import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "whatsapp-chatbot",
    title: "WhatsApp Chatbot Automation",
    category: "API Integration & Automation",
    year: "2025",
    description:
      "Designed and built an automated WhatsApp chatbot using the WhatsApp Business API and Python, replacing manual message handling with automated responses.",
    longDescription:
      "A high-efficiency automation pipeline connecting meta business communication channels to a custom Python logic layer. Capable of receiving webhooks, parsing user intent, routing incoming inquiries, and triggering real-time contextual replies without human latency.",
    features: [
      "WhatsApp Business API integration",
      "Automated contextual responses",
      "REST API integration & webhook processing",
      "Incoming message routing & intent dispatch",
      "Incremental feature development and modular handlers",
    ],
    technologies: ["Python", "WhatsApp Business API", "REST APIs", "JSON", "Webhooks"],
    githubUrl: "https://github.com/SantoshMahat9",
    image: "/images/projects/whatsapp-bot.svg",
    accentColor: "#25D366",
  },
  {
    id: "expense-tracker",
    title: "Personal Expense Tracker",
    category: "Full Stack & Financial Engineering",
    year: "2024",
    description:
      "Built a web application to log, categorize and track daily income and expenses with robust backend data persistence.",
    longDescription:
      "Developed during tenure at Kantascrypt in an onsite agile engineering team. Features structured SQL schemas for transactional data, clean CRUD backend endpoints via .NET, and an intuitive UI to provide users clear visibility over personal cash flow and categorical spending habits.",
    features: [
      "Income & expenditure logging",
      "Custom expense categorization",
      "Transactional SQL data storage & schemas",
      "Robust backend business logic with .NET",
      "Responsive data dashboards with cash flow breakdown",
    ],
    technologies: [".NET", "SQL", "C#", "HTML5", "CSS3"],
    githubUrl: "https://github.com/SantoshMahat9",
    image: "/images/projects/expense-tracker.svg",
    accentColor: "#FF4D1C",
  },
  {
    id: "web-dev-projects",
    title: "Web Development Projects & API Lab",
    category: "Full Stack Architecture",
    year: "2024–Present",
    status: "In Progress",
    description:
      "Building mini full-stack projects while practising RESTful API design, database integration and incremental software development.",
    longDescription:
      "A hands-on exploratory lab environment where modern web standards are put to work. Focusing on asynchronous Node.js micro-services, MongoDB document schemas, reactive client-side interfaces, and rigorous defensive error handling.",
    features: [
      "RESTful API design and route structuring",
      "Document database modeling with MongoDB",
      "Asynchronous server-side architectures with Node.js",
      "Modern interactive frontend components",
      "Incremental version-controlled software iterations",
    ],
    technologies: ["JavaScript", "Node.js", "MongoDB", "Express", "HTML5", "CSS3"],
    githubUrl: "https://github.com/SantoshMahat9",
    image: "/images/projects/web-lab.svg",
    accentColor: "#FFC247",
  },
];
