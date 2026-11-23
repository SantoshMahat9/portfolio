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
      { name: "JavaScript", description: "Modern ES6+, Async/Await, DOM manipulation", verified: true },
      { name: "React", description: "Component state, hooks, reactive UI flows", verified: true },
      { name: "HTML5", description: "Semantic document structure, web accessibility", verified: true },
      { name: "CSS3 / Tailwind", description: "Responsive layouts, Flexbox, Grid, keyframes", verified: true },
      { name: "Responsive Web Design", description: "Fluid breakpoints, mobile-first architectures", verified: true },
      { name: "Angular", description: "Enterprise services, component hierarchy", verified: true },
    ],
  },
  {
    category: "Backend Engineering",
    tag: "SERVER_SIDE",
    skills: [
      { name: "Node.js", description: "Asynchronous runtime, event loop, API services", verified: true },
      { name: "Express.js", description: "RESTful routing, middleware pipelines, error handlers", verified: true },
      { name: ".NET", description: "C# backend controllers, service logic at Kantascrypt", verified: true },
    ],
  },
  {
    category: "Database Systems",
    tag: "DATA_PERSISTENCE",
    skills: [
      { name: "SQL", description: "Relational queries, ACID schemas, joins, normalization", verified: true },
      { name: "MySQL", description: "Relational constraints, indexing, data modeling", verified: true },
      { name: "MongoDB", description: "NoSQL document stores, flexible collections", verified: true },
    ],
  },
  {
    category: "Development Tools & Environment",
    tag: "ARSENAL_OPS",
    skills: [
      { name: "Git", description: "Version control, branching, merge conflict resolution", verified: true },
      { name: "GitHub", description: "Pull requests, code reviews, collaborative repos", verified: true },
      { name: "VS Code", description: "Primary IDE workflow, debugging, extensions", verified: true },
      { name: "Figma", description: "UI wireframing, component tokens, layout inspection", verified: true },
    ],
  },
];
