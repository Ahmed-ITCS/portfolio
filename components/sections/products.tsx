import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { CTAButton } from "@/components/shared/cta-button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/content/products";
import { Check, Sparkles } from "lucide-react";

export function Products() {
  return (
    <section id="products" className="section-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            label="Software Products"
            title="SaaS Products I've Built"
            description="Production software products designed to solve real business problems at scale."
          />
        </AnimatedSection>

        {products.map((product, index) => (
          <AnimatedSection key={product.slug} delay={index * 0.1}>
            <div className="surface-card overflow-hidden rounded-2xl ">
              <div className="grid lg:grid-cols-2">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white lg:p-12">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    <span className="text-sm font-medium text-blue-100">
                      {product.status}
                    </span>
                  </div>
                  <h3 className="mt-4 text-3xl font-bold">{product.name}</h3>
                  <p className="mt-2 text-lg text-blue-100">
                    {product.tagline}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <p className="leading-relaxed text-slate-400">
                    {product.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {product.links.map((link) => (
                      <CTAButton
                        key={link.label}
                        href={link.url}
                        variant={
                          link.label.includes("Demo") ? "default" : "outline"
                        }
                      >
                        {link.label}
                      </CTAButton>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
