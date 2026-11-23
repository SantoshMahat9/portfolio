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
    id: "whatsapp-chatbot",
    codeName: "OPERATION // DISPATCH",
    title: "API Integration & Automation — WhatsApp Chatbot",
    category: "Personal Project • API Integration & Automation",
    year: "2025",
    description:
      "Designed and built an automated WhatsApp chatbot using the WhatsApp Business API and Python, replacing manual message handling with automated responses.",
    longDescription:
      "A personal automation system leveraging the WhatsApp Business API and Python. Integrated REST APIs to route incoming messages and trigger automated responses, significantly reducing turnaround times for repetitive inquiries while adding features incrementally.",
    features: [
      "Designed and built an automated WhatsApp chatbot using the WhatsApp Business API and Python",
      "Replaced manual message handling with intelligent automated responses",
      "Integrated REST APIs to route incoming messages and trigger real-time responses",
      "Reduced response time for repetitive queries through efficient payload routing",
      "Built and improved the bot incrementally, adding features in small iterations",
    ],
    technologies: ["WhatsApp Business API", "Python", "REST APIs", "Automation", "JSON"],
    githubUrl: "https://github.com/SantoshMahat9",
    image: "/images/projects/whatsapp-bot.svg",
    accentColor: "#E50914",
  },
  {
    id: "expense-tracker",
    codeName: "OPERATION // LEDGER",
    title: "Personal Expense Tracker",
    category: "Internship Project • Full Stack Financial App",
    year: "2024",
    description:
      "Built a web application to log, categorize, and track daily income and expenses with .NET backend logic and relational SQL data storage.",
    longDescription:
      "Developed during the internship at Kantascrypt. Built to log, categorize, and track daily income and expenses. Implemented backend logic and robust data storage using .NET and SQL, validated through team code reviews and iterative sprint check-ins.",
    features: [
      "Built a web application to log, categorize, and track daily income and expenses",
      "Implemented backend logic and data storage using .NET and SQL",
      "Designed and managed the SQL database for personal finance data",
      "Took part in debugging and peer code reviews to improve performance and code quality",
      "Iterative agile delivery with regular progress check-ins",
    ],
    technologies: [".NET", "SQL", "HTML", "CSS", "C#"],
    githubUrl: "https://github.com/SantoshMahat9",
    image: "/images/projects/expense-tracker.svg",
    accentColor: "#E50914",
  },
  {
    id: "web-dev-projects",
    codeName: "OPERATION // LAB",
    title: "Web Development Projects (In Progress)",
    category: "Full Stack Development • Active Work",
    year: "2024 – Present",
    status: "In Progress",
    description:
      "Building mini full-stack projects using MongoDB and Node.js delivered in small, working increments while practising RESTful API design.",
    longDescription:
      "Continuous hands-on full-stack development initiatives exploring scalable web patterns. Focuses on asynchronous Node.js backends, MongoDB document persistence, RESTful API endpoint integration, and incremental feature delivery.",
    features: [
      "Building mini full-stack projects using MongoDB and Node.js",
      "Delivered in small, working increments following agile principles",
      "Practising RESTful API design, modular routing, and clean integration",
      "Responsive frontend client interfaces using HTML, CSS, and modern JavaScript",
      "Component-level testing, Git version control, and continuous refinement",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "MongoDB", "Node.js", "REST APIs"],
    githubUrl: "https://github.com/SantoshMahat9",
    image: "/images/projects/web-lab.svg",
    accentColor: "#E50914",
  },
];
