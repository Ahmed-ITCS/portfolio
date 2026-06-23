import {
  Brain,
  Cloud,
  Code2,
  Layers,
  Settings,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
};

export const services: Service[] = [
  {
    title: "Backend & API Development",
    description:
      "Production-grade REST APIs, microservices, and backend systems built for scale, reliability, and maintainability.",
    icon: Code2,
    features: [
      "RESTful API design",
      "Microservices architecture",
      "Database modeling & optimization",
      "Authentication & authorization",
    ],
  },
  {
    title: "SaaS Development",
    description:
      "End-to-end SaaS backend infrastructure — from multi-tenant architecture to billing integrations and real-time features.",
    icon: Layers,
    features: [
      "Multi-tenant systems",
      "Feature-based architecture",
      "Real-time workflows",
      "Scalable data pipelines",
    ],
  },
  {
    title: "AI & LLM Integration",
    description:
      "Integrate Voice AI, LLMs, and intelligent automation into your products with secure, production-ready implementations.",
    icon: Brain,
    features: [
      "OpenAI & LLM integrations",
      "Voice AI (Twilio)",
      "Multi-agent systems",
      "Webhook orchestration",
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Deploy, monitor, and scale applications on AWS with Docker, Kubernetes, and CI/CD pipelines.",
    icon: Cloud,
    features: [
      "AWS infrastructure",
      "Docker & Kubernetes",
      "CI/CD with GitHub Actions",
      "Performance monitoring",
    ],
  },
  /*{
    title: "ERP Automation",
    description:
      "Custom ERPNext modules, enterprise automation, and business process integrations for accounting, sales, and HR.",
    icon: Settings,
    features: [
      "ERPNext customization",
      "Client/server scripts",
      "Business process automation",
      "Access control policies",
    ],
  },
  */
];
