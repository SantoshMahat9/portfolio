export interface SkillCategory {
  category: string;
  tag: string;
  skills: {
    name: string;
    description: string;
    verified: boolean;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    tag: "CLIENT_SIDE",
    skills: [
      { name: "HTML & HTML5", description: "Semantic web architecture and accessibility standards", verified: true },
      { name: "CSS & CSS3", description: "Responsive layouts, Flexbox, Grid systems, modern styling", verified: true },
      { name: "JavaScript", description: "Modern ES6+, DOM manipulation, asynchronous programming", verified: true },
      { name: "Angular", description: "Enterprise component architecture, data binding, and services", verified: true },
      { name: "React & Next.js", description: "Component state, server-side rendering, and UI systems", verified: true },
    ],
  },
  {
    category: "Backend & Database",
    tag: "SERVER_PERSISTENCE",
    skills: [
      { name: ".NET / C#", description: "Backend logic and data processing engineered at Kantascrypt", verified: true },
      { name: "Node.js", description: "Asynchronous runtime, microservices, and server-side execution", verified: true },
      { name: "SQL / MySQL", description: "Database design, relational queries, schemas, and ACID operations", verified: true },
      { name: "MongoDB", description: "NoSQL document persistence and collection modeling", verified: true },
    ],
  },
  {
    category: "Programming Languages",
    tag: "CORE_LANGUAGES",
    skills: [
      { name: "Python", description: "Automation scripts, WhatsApp Business API bot, data handling", verified: true },
      { name: "C++", description: "Object-oriented programming, data structures, and algorithms", verified: true },
      { name: "C", description: "Foundational systems programming, memory model, and logic", verified: true },
      { name: "C#", description: "Enterprise backend development in .NET ecosystems", verified: true },
    ],
  },
  {
    category: "Tools & Methodologies",
    tag: "DEV_OPERATIONS",
    skills: [
      { name: "Git & GitHub", description: "Version control, feature branching, pull requests, and review workflows", verified: true },
      { name: "REST APIs", description: "RESTful endpoint architecture, HTTP verbs, JSON payloads, and integration", verified: true },
      { name: "Debugging & Code Review", description: "Systematic root-cause diagnosis and collaborative code quality review", verified: true },
      { name: "Agile & Scrum", description: "Sprint cycles, daily stand-ups, backlog grooming, iterative incremental delivery", verified: true },
    ],
  },
];
