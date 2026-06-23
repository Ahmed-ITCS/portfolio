export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  tech: string[];
  status: string;
  links: { label: string; url: string }[];
};

export const products: Product[] = [
  {
    slug: "smartconvo",
    name: "SmartConvo",
    tagline: "Distributed Voice AI Platform for Modern Businesses",
    description:
      "SmartConvo is a production-grade Voice AI SaaS platform that enables businesses to deploy intelligent voice agents, manage call workflows, and process real-time transcriptions at scale. Built to handle 10,000+ concurrent sessions with enterprise-grade reliability.",
    features: [
      "Real-time voice data stream orchestration",
      "AI-powered intent parsing and call scheduling",
      "Multi-tenant SaaS architecture",
      "Twilio & OpenAI integrations",
      "Sub-150ms API response latency",
      "Secure webhook handling across 5+ services",
    ],
    tech: ["Django", "FastAPI", "PostgreSQL", "AWS", "Twilio", "OpenAI"],
    status: "Active — SaaS Product",
    links: [
      { label: "Visit Product", url: "#" }, // TODO: Add live product URL
      { label: "Request Demo", url: "#contact" },
    ],
  },
];
