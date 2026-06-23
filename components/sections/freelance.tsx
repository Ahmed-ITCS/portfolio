import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { freelanceProjects } from "@/content/freelance";
import { ExternalLink } from "lucide-react";

export function Freelance() {
  return (
    <section id="freelance" className="bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            label="Freelance Work"
            title="Client Projects"
            description="Independent development work delivering custom solutions for clients."
          />
        </AnimatedSection>

        <div className="space-y-8">
          {freelanceProjects.map((project, index) => (
            <AnimatedSection key={project.slug} delay={index * 0.1}>
              <div className="surface-card rounded-xl p-8 ">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-50">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-blue-400">
                      {project.client}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Problem
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Solution
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Outcome
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                {project.links.length > 0 && (
                  <div className="mt-6 flex gap-4">
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
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
