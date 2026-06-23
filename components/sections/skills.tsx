import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <section id="skills" className="section-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            label="Tech Stack"
            title="Skills & Technologies"
            description="The tools and practices I use to build reliable, scalable software."
          />
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <AnimatedSection key={group.category} delay={index * 0.08}>
              <div className="surface-card h-full rounded-xl p-6 ">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-400">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
