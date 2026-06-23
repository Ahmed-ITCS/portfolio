export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Pentagon AI",
    role: "Lead Backend Engineer",
    location: "Lahore, Pakistan",
    period: "Jan 2025 — Present",
    highlights: [
      "Architected scalable SaaS backend in Python supporting 10,000+ concurrent sessions with sub-150ms response latency.",
      "Designed modular, feature-based service architecture across 7+ interconnected modules for real-time communication, scheduling, transcription, and AI intent parsing.",
      "Integrated Voice AI and LLM infrastructures (Twilio, OpenAI) via secure REST APIs and webhook handlers across 5+ external services.",
      "Led PostgreSQL schema design and optimization, reducing query overhead by 45% for a multi-tenant architecture.",
      "Directed backend security compliance (JWT, OAuth, input sanitization), eliminating 95%+ of exploit vectors in penetration testing.",
      "Established rigid API contracts with cross-functional teams, reducing integration bugs by 70%.",
      "Mentored intern on OOP, scalable system design, and clean web API creation.",
    ],
  },
  {
    company: "Nidam AI",
    role: "Software Engineer",
    location: "Lahore, Pakistan",
    period: "Oct 2024 — Oct 2025",
    highlights: [
      "Led design and customization of enterprise ERPNext systems with custom client/server scripts and API integrations.",
      "Automated modular operations across accounting, sales, and HR departments.",
      "Established secure authentication flows and access control policies, reducing common security vulnerabilities by ~75%.",
    ],
  },
  {
    company: "TronAI Technologies",
    role: "Software Engineer",
    location: "Lahore, Pakistan",
    period: "May 2024 — Jan 2025",
    highlights: [
      "Engineered scalable backend microservices using FastAPI and PostgreSQL, improving API response times by 25%.",
      "Implemented asynchronous task handling with Celery and Redis for heavy background processing jobs.",
      "Designed modular, reusable core backend components reducing feature development effort by 35% with 90%+ test coverage.",
    ],
  },
];
