import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "JavaScript", levelDescription: "Modern ES6+, Async/Await, DOM" },
      { name: "HTML5", levelDescription: "Semantic Markup, Accessibility, SEO" },
      { name: "CSS3 / Tailwind", levelDescription: "Responsive Layouts, Flexbox, Grid, Motion" },
      { name: "Angular", levelDescription: "Component Architecture, Services, Directives" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: ".NET", levelDescription: "C#, Controllers, Middleware, Backend Logic" },
      { name: "Node.js", levelDescription: "Express, RESTful Services, Asynchronous Event Loops" },
    ],
  },
  {
    category: "Databases & Storage",
    skills: [
      { name: "SQL", levelDescription: "Relational Modeling, Query Optimization, Joins" },
      { name: "MySQL", levelDescription: "Schema Design, Relational Constraints, Indexing" },
      { name: "MongoDB", levelDescription: "Document Stores, Aggregations, NoSQL Integration" },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", levelDescription: "API Automation, Scripting, Logic Flow" },
      { name: "C++", levelDescription: "Object-Oriented Programming, Data Structures" },
      { name: "C", levelDescription: "Procedural Logic, Memory Management Foundations" },
    ],
  },
  {
    category: "Developer Tools & Version Control",
    skills: [
      { name: "Git", levelDescription: "Branching, Rebasing, Conflict Resolution" },
      { name: "GitHub", levelDescription: "Pull Requests, Code Reviews, Remote Collaboration" },
    ],
  },
  {
    category: "Engineering Concepts",
    skills: [
      { name: "REST APIs", levelDescription: "Resource URI Design, HTTP Verbs, Webhooks" },
      { name: "Debugging", levelDescription: "Root Cause Analysis, DevTools, Console Tracing" },
      { name: "Code Review", levelDescription: "Static Analysis, Best Practices, Clean Code" },
      { name: "Team Collaboration", levelDescription: "Peer Pair-Programming, Shared Repositories" },
    ],
  },
  {
    category: "Methodologies",
    skills: [
      { name: "Agile", levelDescription: "Iterative Sprints, Continuous Feedback" },
      { name: "Scrum", levelDescription: "Standups, Backlog Prioritization, Retrospectives" },
      { name: "Iterative Development", levelDescription: "Incremental Feature Rollouts, Modular Testing" },
    ],
  },
];
