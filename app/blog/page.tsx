import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { getBlogPosts } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical deep-dives, architecture notes, and engineering lessons from Ahmed Khawar.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="mx-auto max-w-4xl px-4 py-28 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold tracking-tight text-slate-50">Blog</h1>
      <p className="mt-4 text-lg text-slate-400">
        Building in public — architecture deep-dives and engineering milestones.
      </p>

      <div className="mt-12 space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="surface-card group rounded-xl p-6 transition-all hover:border-blue-800"
          >
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="mt-4 text-2xl font-semibold text-slate-100 group-hover:text-blue-400">
                {post.title}
              </h2>
            </Link>
            <p className="mt-2 text-slate-400">{post.description}</p>
            <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
