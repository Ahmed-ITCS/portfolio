export const siteConfig = {
  name: "Ahmed Khawar",
  title: "Ahmed Khawar — Software Engineer",
  description:
    "Software Engineer specializing in backend development, APIs, system architecture, cloud deployment, and AI-integrated applications. Available for freelance and custom development projects.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ahmedkhawar.dev",
  ogImage: "/opengraph-image",
  headline: "Software Engineer — Backend, APIs, Cloud & AI",
  subheadline:
    "I architect scalable SaaS backends, integrate AI systems, and ship production-ready APIs that power real businesses. 3+ years building high-performance systems for startups and enterprise clients.",
  location: "Lahore, Pakistan",
  email: "ahmedkhawarbs@gmail.com",
  phone: "+92 333 125 1264",
  initials: "AK",
  profileImage: "/images/profile.png",
  links: {
    linkedin: "https://linkedin.com/in/ahmed-k-b44781128",
    github: "https://github.com/Ahmed-ITCS", // TODO: Update with your GitHub URL
    calendly:
      process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/placeholder",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Products", href: "#products" },
    { label: "Freelance", href: "#freelance" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
