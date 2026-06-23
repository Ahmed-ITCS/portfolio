export type FreelanceProject = {
  slug: string;
  title: string;
  client: string;
  problem: string;
  solution: string;
  outcome: string;
  tech: string[];
  links: { label: string; url: string }[];
};

export const freelanceProjects: FreelanceProject[] = [
  {
    slug: "unifix",
    title: "UniFix — AI Internship Platform",
    client: "Independent Client Project",
    problem:
      "Universities and students needed a streamlined way to discover, apply to, and track internship opportunities — with intelligent matching to reduce manual coordination overhead.",
    solution:
      "Built a full-stack platform with Django backend and React frontend, featuring AI-driven student-to-internship matching, secure application tracking, and automated status workflows.",
    outcome:
      "Delivered an end-to-end internship management system with intelligent matching logic, reducing manual application processing and improving match quality for students and employers.",
    tech: ["Django", "React.js", "SQLite", "Python", "AI Matching"],
    links: [
      { label: "View Demo", url: "#" }, // TODO: Add UniFix demo URL
    ],
  },
];
