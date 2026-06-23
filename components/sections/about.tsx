import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { siteConfig } from "@/content/site";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";

export function About() {
  return (
    <section id="about" className="bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            label="About Me"
            title="Engineering systems that scale"
            description="Backend engineer, SaaS builder, and independent consultant helping businesses ship reliable software."
          />
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <div className="space-y-4 leading-relaxed text-slate-400">
              <p>
                I&apos;m{" "}
                <strong className="text-white">{siteConfig.name}</strong>, a
                Software Engineer with 3+ years of professional experience
                building production backends, APIs, and AI-integrated
                applications. I currently lead backend engineering at{" "}
                <strong className="text-white">Pentagon AI</strong>, where I
                architect SaaS infrastructure supporting 10,000+ concurrent
                sessions.
              </p>
              <p>
                Beyond my full-time role, I run my own software services
                business and take on freelance projects — delivering custom
                backend solutions, SaaS products, and enterprise automation for
                clients who need production-grade engineering without the
                overhead of a large team.
              </p>
              <p>
                I&apos;m an advocate of the &ldquo;building in public&rdquo;
                philosophy, regularly sharing technical documentation,
                architecture deep-dives, and engineering milestones with the
                professional community.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 text-blue-600" />
                {siteConfig.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Briefcase className="h-4 w-4 text-blue-600" />
                3+ Years Experience
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="surface-card rounded-xl p-6 ">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-950">
                  <GraduationCap className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100">
                    Bachelor of Science in Software Engineering
                  </h3>
                  <p className="text-sm text-slate-400">
                    University of Central Punjab, Lahore
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Oct 2020 — Jul 2024
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-800 pt-6">
                <p className="text-sm font-medium text-slate-100">
                  Ongoing Training
                </p>
                <ul className="mt-3 space-y-3 text-sm text-slate-400">
                  <li>
                    <span className="font-medium text-slate-200">
                      AWS CSA & DevOps
                    </span>{" "}
                    — EC2, ECS, S3, RDS, Docker, Kubernetes, IAM
                  </li>
                  <li>
                    <span className="font-medium text-slate-200">
                      Agentic AI
                    </span>{" "}
                    — Multi-agent frameworks, tool integration, reasoning chains
                  </li>
                </ul>
              </div>

              <div className="mt-6 border-t border-slate-800 pt-6">
                <p className="text-sm font-medium text-slate-100">Interests</p>
                <p className="mt-2 text-sm text-slate-400">
                  System Architecture, Voice AI Frameworks, Multi-Agent AI
                  Ecosystems, Technical Mentorship
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
