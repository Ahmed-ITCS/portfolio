import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { projects } from "@/content/projects";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            label="Featured Projects"
            title="Selected Work"
            description="Technical case studies from production systems I've architected and shipped."
          />
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-3">
          {featured.map((project, index) => (
            <AnimatedSection key={project.slug} delay={index * 0.1}>
              <Card className="flex h-full flex-col overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-400" />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="mb-4 text-sm text-slate-400">
                    {project.longDescription}
                  </p>

                  <ul className="mb-4 space-y-1">
                    {project.highlights.slice(0, 2).map((h) => (
                      <li key={h} className="text-xs text-slate-500">
                        • {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:underline"
                      >
                        {link.label}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
