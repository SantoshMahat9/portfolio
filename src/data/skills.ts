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
    category: "Frontend Architecture",
    tag: "CLIENT_SIDE",
    skills: [
      { name: "React & Next.js", description: "Component reactivity, SSR/SSG workflows, and modern UI systems", verified: true },
      { name: "JavaScript (ES6+)", description: "Async/await, DOM manipulation, closures, and modular JS execution", verified: true },
      { name: "Angular", description: "Enterprise component architecture, dependency injection, and RxJS", verified: true },
      { name: "HTML5 & CSS3", description: "Semantic web architecture, responsive layouts, Flexbox, and CSS Grid", verified: true },
      { name: "Bootstrap & Tailwind", description: "Utility-first and component frameworks for rapid responsive layouts", verified: true },
      { name: "UI/UX & Wireframing", description: "Design systems, user experience prototyping, and Figma mockups", verified: true },
    ],
  },
  {
    category: "Backend & Cloud Systems",
    tag: "SERVER_PERSISTENCE",
    skills: [
      { name: ".NET Framework / C#", description: "Enterprise backend logic, controllers, and services engineered at Kantascrypt", verified: true },
      { name: "Node.js & Express.js", description: "Asynchronous REST microservices, routing, middleware, and backend APIs", verified: true },
      { name: "SQL Server & MySQL", description: "Normalized relational schemas, stored procedures, indexing, and ACID queries", verified: true },
      { name: "MongoDB", description: "NoSQL document persistence, schema design, and aggregation pipelines", verified: true },
      { name: "Firebase", description: "Cloud database, real-time sync, and client authentication integrations", verified: true },
      { name: "RESTful API Architecture", description: "Stateless endpoint design, JSON payload serialization, and status protocols", verified: true },
    ],
  },
  {
    category: "Programming & AI/ML",
    tag: "CORE_LANGUAGES",
    skills: [
      { name: "Python", description: "Automation scripts, WhatsApp Cloud API bots, data parsing, and AI foundations", verified: true },
      { name: "C++", description: "Object-oriented programming, data structures, and algorithmic complexity", verified: true },
      { name: "C", description: "Foundational systems programming, memory pointers, and low-level logic", verified: true },
      { name: "C#", description: "Object-oriented enterprise development within the Microsoft .NET ecosystem", verified: true },
      { name: "AI/ML Foundations", description: "Scikit-learn algorithms, data preprocessing, and foundational LLM architectures", verified: true },
    ],
  },
  {
    category: "Tools & Methodologies",
    tag: "DEV_OPERATIONS",
    skills: [
      { name: "Git & GitHub", description: "Version control, branching strategy, pull requests, and collaborative code reviews", verified: true },
      { name: "Postman", description: "API request crafting, endpoint debugging, payload testing, and collection sharing", verified: true },
      { name: "Agile & Scrum", description: "Sprint planning, daily standups, iterative increments, and backlog grooming", verified: true },
      { name: "Debugging & Code Review", description: "Systematic root-cause diagnosis, performance profiling, and code standards", verified: true },
      { name: "Webhooks & Automation", description: "Event-driven payload routing and third-party webhook integrations", verified: true },
    ],
  },
];
