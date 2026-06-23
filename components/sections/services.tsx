import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { CTAButton } from "@/components/shared/cta-button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { services } from "@/content/services";
import { ArrowRight, Check } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="section-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            label="Services"
            title="What I Can Build For You"
            description="Custom development solutions for startups, enterprises, and independent clients."
          />
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.title} delay={index * 0.08}>
                <Card className="flex h-full flex-col">
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-950">
                      <Icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <ul className="mb-6 space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-slate-400"
                        >
                          <Check className="h-4 w-4 shrink-0 text-blue-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <CTAButton
                      href="#contact"
                      variant="outline"
                      className="mt-auto w-full"
                    >
                      Get a Quote
                      <ArrowRight className="h-4 w-4" />
                    </CTAButton>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
