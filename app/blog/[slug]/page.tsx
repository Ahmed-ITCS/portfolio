import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { getBlogPost, getBlogSlugs } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      publishedTime: post.meta.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-28 sm:px-6 lg:px-8">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>

      <div className="flex flex-wrap gap-2">
        {post.meta.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-50">
        {post.meta.title}
      </h1>

      <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
        <time dateTime={post.meta.date}>
          {new Date(post.meta.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <span className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          {post.meta.readingTime}
        </span>
      </div>

      <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-a:text-blue-400">
        {post.content}
      </div>
    </article>
  );
}
