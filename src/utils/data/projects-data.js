export const projectsData = [
  {
    id: 1,
    name: "Performance Optimizer",
    description: "Multi-stack static performance analysis tool built using Python AST parsing and rule-based checks for React, Angular, Node.js, SQL, and AWS codebases. Detects UI re-rendering issues, Node.js event-loop bottlenecks, memory leaks, N+1 database queries, SQL indexing and pagination, and AWS serverless latency. Distributed as a zero-dependency CLI on PyPI with CI/CD quality gates generating HTML audits, machine-readable JSON reports, and PR Markdown summaries.",
    tools: ["Python", "AST Parsing", "CLI", "Static Analysis", "CI/CD", "React", "Node.js", "SQL", "AWS"],
    role: "Creator & Lead Developer",
    code: "https://github.com/Ravik27280/Performance-Optimizer",
    demo: "https://ravik27280.github.io/Performance-Optimizer/",
  },
  {
    id: 2,
    name: "Infralab — System Design Lab",
    description: "Interactive canvas for designing distributed system architectures with atomic undo/redo state management using Zustand and Zundo. Features an event-driven request traversal simulator modeling request latency, rate limiting, and cache hit/miss behavior across multi-tier topologies. Includes an automated topology evaluator using Gemini API to analyze architecture graphs for single points of failure (SPOFs), scalability bottlenecks, and latency risks. Integrated Google OAuth 2.0, JWT session validation, OTP recovery, RBAC, and PostHog instrumentation.",
    tools: ["React", "TypeScript", "Node.js", "Zustand", "Gemini API", "OAuth 2.0", "PostHog", "Tailwind CSS"],
    role: "Full Stack & System Architect",
    code: "https://github.com/Ravik27280/TheInfraLab",
    demo: "https://theinfralab.com/",
  }
];