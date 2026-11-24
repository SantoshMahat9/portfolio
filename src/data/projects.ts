import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "darkpattern-ai",
    codeName: "OPERATION // ECLIPSE",
    title: "Darkpattern-AI — Deceptive UI Detection System",
    category: "AI/ML & Full-Stack System • Academic Research",
    year: "2026",
    status: "Verified Open Source",
    description:
      "A production-quality detection platform for identifying, classifying, and localizing deceptive user-interface patterns (dark patterns) on websites using multimodal vision and DOM analysis.",
    longDescription:
      "Engineered an automated research-grade system that uncovers manipulative commercial patterns such as disguised ads, confirmshaming, forced continuity, and hidden recurring fees. Features a headless web crawler, a DOM and computed style extractor, machine learning classification pipelines, and a browser extension frontend for real-time client verification.",
    features: [
      "Engineered multimodal analysis pipeline combining screenshot computer vision and DOM tree traversal",
      "Built full-stack crawler, backend classification service, and browser extension interface",
      "Implemented stateful tracking across multi-step checkout and cart funnels to detect disguised fees",
      "Containerized system with Docker Compose for benchmark replication and academic evaluation",
      "Extensible classification architecture ready for browser extension and auditing pipelines",
    ],
    technologies: ["TypeScript", "Python", "FastAPI", "Docker", "DOM Traversal", "Machine Learning", "Browser Extension"],
    githubUrl: "https://github.com/SantoshMahat9/Darkpattern",
    repoStatus: "Public GitHub Repository",
    demoStatus: "Local Prototype / Research Bench",
    image: "/images/projects/web-lab.svg",
    accentColor: "#E50914",
  },
  {
    id: "expense-tracker",
    codeName: "OPERATION // LEDGER",
    title: "Personal Expense Tracker — Financial Intelligence",
    category: "Enterprise Internship Project • Full Stack Finance",
    year: "2024",
    status: "Mission Accomplished",
    description:
      "Engineered an enterprise financial tracking web application during an onsite internship at Kantascrypt, developing relational SQL schemas and backend .NET business logic.",
    longDescription:
      "Collaborated onsite in an agile developer team at Kantascrypt to deliver a personal financial management platform. Designed normalized relational database schemas in SQL, wrote defensive .NET backend service controllers to compute transaction ledgers, and participated in sprint code reviews to ship working software in short, disciplined iterations.",
    features: [
      "Designed and normalized relational SQL database tables ensuring ACID compliance for transactions",
      "Developed backend controllers and transaction processing logic in .NET and C#",
      "Created structured category classification for daily income and expenditure tracking",
      "Participated in agile ceremonies: daily stand-ups, backlog grooming, and team code reviews",
      "Performed defensive input sanitization and unit-level validation on financial figures",
    ],
    technologies: [".NET", "SQL", "C#", "HTML5", "CSS3", "Agile Sprints", "Code Reviews"],
    githubUrl: undefined, // Internal enterprise repository at Kantascrypt (proprietary)
    repoStatus: "Kantascrypt Internal Dossier",
    demoStatus: "Internal Enterprise Deployment",
    image: "/images/projects/expense-tracker.svg",
    accentColor: "#E50914",
  },
  {
    id: "whatsapp-chatbot",
    codeName: "OPERATION // DISPATCH",
    title: "WhatsApp Automated Chatbot Engine",
    category: "Automation & API Engineering • Personal Project",
    year: "2025",
    status: "Deployed Engine",
    description:
      "Engineered an automated customer interaction and webhook routing pipeline using the WhatsApp Business Cloud API and Python, replacing manual message handling with real-time automated workflows.",
    longDescription:
      "Architected a serverless webhook receiver and message router in Python. Integrated official Meta WhatsApp Business API endpoints, parsed structured incoming JSON payloads, and automated dynamic response routing, dramatically slashing response times for repetitive queries.",
    features: [
      "Integrated official WhatsApp Business Cloud API with cryptographically verified webhooks",
      "Engineered Python message dispatcher with structured intent parsing and automated responses",
      "Automated FAQ resolution and payload routing, eliminating manual handling latency",
      "Designed resilient error handling and retry mechanisms for webhook connection drops",
      "Iterative deployment with continuous logging and payload verification",
    ],
    technologies: ["WhatsApp Business API", "Python", "REST APIs", "Webhooks", "JSON", "Automation"],
    githubUrl: undefined, // Private integration repository with live API credentials
    repoStatus: "Private Integration Pipeline",
    demoStatus: "API Cloud Webhook Active",
    image: "/images/projects/whatsapp-bot.svg",
    accentColor: "#E50914",
  },
  {
    id: "smartparking",
    codeName: "OPERATION // MATRIX",
    title: "Smart Parking Allocation & Reservation System",
    category: "IoT & Full Stack Engineering • Verified Public Repo",
    year: "2024",
    status: "Verified Open Source",
    description:
      "Automated parking space detection and slot reservation platform managing vehicle allocation, real-time availability tracking, and automated entry/exit logging.",
    longDescription:
      "Developed a web-based smart parking management system providing vehicle owners with real-time parking slot discovery and reservation capabilities while offering operators an intuitive dashboard to monitor occupancy, entry/exit logs, and parking turnover.",
    features: [
      "Engineered real-time slot state management tracking available, occupied, and reserved bays",
      "Built automated vehicle entry and departure timestamp logging",
      "Designed responsive UI for quick bay discovery and reservation confirmation",
      "Clean modular codebase for easy integration with hardware IoT sensor arrays",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "SQL", "IoT Logic"],
    githubUrl: "https://github.com/SantoshMahat9/smartparking",
    repoStatus: "Public GitHub Repository",
    demoStatus: "Open Source Repository",
    image: "/images/projects/web-lab.svg",
    accentColor: "#E50914",
  },
];
