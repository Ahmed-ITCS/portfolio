import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            label="Experience"
            title="Professional Journey"
            description="Building production systems across Voice AI, enterprise automation, and SaaS platforms."
          />
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-slate-800 sm:block" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <AnimatedSection key={item.company} delay={index * 0.1}>
                <div className="relative sm:pl-12">
                  <div className="absolute left-2.5 top-1.5 hidden h-3 w-3 rounded-full border-2 border-blue-600 bg-slate-950 sm:block" />

                  <div className="surface-card rounded-xl p-6 ">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {item.role}
                        </h3>
                        <p className="text-blue-400">{item.company}</p>
                        <p className="text-sm text-slate-500">
                          {item.location}
                        </p>
                      </div>
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-400">
                        {item.period}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2 text-sm text-slate-400"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
