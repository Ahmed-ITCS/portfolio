export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ahmed architected our entire SaaS backend from the ground up. His modular approach and attention to API contracts made our frontend integration seamless. Response times dropped significantly and we scaled to 10,000+ concurrent users without issues.",
    author: "Product Lead",
    role: "Engineering Manager",
    company: "Voice AI Startup", // TODO: Replace with real client name
  },
  {
    quote:
      "We needed custom ERPNext automation across accounting and HR — Ahmed delivered secure, well-documented integrations that our team could maintain. He reduced our manual workflow overhead substantially.",
    author: "Operations Director",
    role: "Director of Operations",
    company: "Enterprise Client", // TODO: Replace with real client name
  },
  {
    quote:
      "Working with Ahmed on our AI-powered platform was exceptional. He understood both the backend architecture and AI integration requirements, delivering a production-ready system on schedule.",
    author: "Founder",
    role: "CEO",
    company: "Tech Startup", // TODO: Replace with real client name
  },
];
