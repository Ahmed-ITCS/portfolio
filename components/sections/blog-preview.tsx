import Link from "next/link";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { CTAButton } from "@/components/shared/cta-button";
import { getBlogPosts } from "@/lib/mdx";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function BlogPreview() {
  const posts = getBlogPosts().slice(0, 2);

  return (
    <section className="section-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            label="Blog"
            title="Building in Public"
            description="Technical deep-dives, architecture notes, and engineering lessons from production."
          />
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="surface-card group block h-full rounded-xl p-6 transition-all hover:border-blue-800"
              >
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-100 group-hover:text-blue-400">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-slate-400">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readingTime}
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="mt-8 text-center">
          <CTAButton href="/blog" variant="outline">
            View All Posts
            <ArrowRight className="h-4 w-4" />
          </CTAButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
