export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  highlights: string[];
  links: ProjectLink[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "smartconvo",
    title: "SmartConvo",
    description:
      "Distributed Voice AI platform with high-throughput real-time voice data orchestration.",
    longDescription:
      "Architected a high-performance backend ecosystem utilizing Django for core business logic and a custom FastAPI service layer for high-throughput, real-time voice data stream orchestration.",
    tech: ["Django", "FastAPI", "PostgreSQL", "AWS", "Twilio", "OpenAI"],
    highlights: [
      "Redesigned microservice communication boundaries, increasing throughput by 40%.",
      "Maintained 99.9% uptime across real-time voice processing pipelines.",
      "Coordinated 7+ interconnected modules for scheduling, transcription, and AI intent parsing.",
    ],
    links: [
      { label: "Live Demo", url: "#" }, // TODO: Add SmartConvo URL
      { label: "Case Study", url: "#products" },
    ],
    featured: true,
  },
  {
    slug: "evo-trade-ai",
    title: "Evo Trade AI",
    description:
      "Multi-agent autonomous cryptocurrency trading engine with real-time sentiment analysis.",
    longDescription:
      "Deployed a modular multi-agent trading engine automating the full lifecycle across four decoupled, specialized AI agents executing real-time sentiment analysis and technical indicators (RSI, MACD).",
    tech: ["FastAPI", "Gemini API", "PostgreSQL", "Redis", "Python"],
    highlights: [
      "Centralized strategic coordinator aggregating asynchronous market data streams.",
      "Four specialized AI agents for signal validation and trade execution.",
      "Real-time technical indicator processing with Redis-backed caching.",
    ],
    links: [
      { label: "GitHub", url: "#" }, // TODO: Add repository URL
    ],
    featured: true,
  },
  {
    slug: "unifix",
    title: "UniFix",
    description:
      "AI-driven internship platform with intelligent student-to-internship matching.",
    longDescription:
      "Developed a full-stack web application featuring secure application tracking, student-to-internship matching via intelligent AI matching logic, and automated application status workflows.",
    tech: ["Django", "React.js", "SQLite", "Python"],
    highlights: [
      "AI-powered matching logic for student-internship pairing.",
      "Automated application status workflows and tracking.",
      "Secure authentication and role-based access control.",
    ],
    links: [
      { label: "Demo", url: "#" }, // TODO: Add UniFix demo URL
    ],
    featured: true,
  },
];
