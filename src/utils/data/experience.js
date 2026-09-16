export const experiences = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Airbus",
    location: "Bangalore, India",
    duration: "April 2025 - Present",
    highlights: [
      "Optimized React-based data grids rendering 10k+ manufacturing records, reducing initial render time from 1.8s to under 380ms through virtualization and rendering optimizations.",
      "Built Node.js microservices for aircraft assembly scheduling workflows, handling concurrent production data with sub-120ms p95 response times.",
      "Led infrastructure automation for 2 core enterprise applications, provisioning isolated VPCs, ALB routing, and ECS services using modular Terraform.",
      "Configured CloudWatch-to-Splunk alerting pipelines for critical manufacturing workflows, reducing mean time to detect (MTTD) from 45 minutes to under 15 minutes.",
      "Implemented zero-downtime deployment pipelines using GitHub Actions and AWS CodeDeploy with automated rollback triggers."
    ],
    skills: ["React.js", "Node.js", "TypeScript", "Terraform", "AWS ECS", "Splunk", "GitHub Actions", "CodeDeploy"]
  },
  {
    id: 2,
    title: "Associate Software Engineer",
    company: "Airbus",
    location: "Bangalore, India",
    duration: "August 2022 - March 2025",
    highlights: [
      "Developed interactive graph visualization workflows using Cytoscape.js, enabling engineers to map 500+ subsystem dependencies.",
      "Developed an asynchronous Portfolio Data Hub using AWS Lambda, SQS, and DynamoDB to ingest and index 2M+ monthly operational events.",
      "Designed and optimized SQL queries and indexing strategies in MySQL for a fleet emergency dispatch application, reducing read lock contention.",
      "Automated CloudWatch log filtering and custom dashboards to trace cross-service transaction failures across distributed production systems.",
      "Worked with domain architects to define API contracts, contribute to technical RFCs, and deliver microservice interfaces."
    ],
    skills: ["Cytoscape.js", "AWS Lambda", "Amazon SQS", "DynamoDB", "MySQL", "CloudWatch", "Microservices"]
  },
  {
    id: 3,
    title: "Software Development Intern",
    company: "Capgemini",
    location: "Virtual",
    duration: "February 2022 - May 2022",
    highlights: [
      "Built authenticated REST APIs using Java and Spring Boot and containerized baseline microservices with Docker during enterprise engineering training."
    ],
    skills: ["Java", "Spring Boot", "Docker", "REST APIs", "Cloud Fundamentals"]
  }
];
