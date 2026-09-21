import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, List, User } from "lucide-react";
import { getWpPost } from "@/lib/wp-posts";
import { addHeadingIdsAndExtractToc, estimateReadingTime } from "@/lib/blog-format";
import { site } from "@/lib/site";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { GridPattern } from "@/components/ui/GridPattern";
import { Blob } from "@/components/ui/Blob";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";

type Params = { slug: string };

function formatDate(iso: string) {
  const date = new Date(iso.replace(" ", "T"));
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(date);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getWpPost(slug);
  if (!post) return {};

  const url = `${site.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: [post.author],
      section: post.categories[0],
      tags: post.categories,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await getWpPost(slug);
  if (!post) notFound();

  const { html: content, toc } = addHeadingIdsAndExtractToc(post.content);
  const readingTime = estimateReadingTime(post.content);
  const url = `${site.url}/blog/${post.slug}`;

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.excerpt,
          url,
          image: post.featuredImage,
          datePublished: post.date,
          dateModified: post.modified,
          authorName: post.author,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Blog", url: `${site.url}/blog` },
          { name: post.title, url },
        ])}
      />
      <div className="relative overflow-hidden bg-mesh">
        <GridPattern className="opacity-60" />
        <Blob tone="brand" className="-left-24 -top-24 h-72 w-72" />
        <Container className="relative py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700"
            >
              <ArrowLeft className="size-4" />
              Back to blog
            </Link>

            {post.categories.length > 0 ? (
              <span className="mt-5 flex w-fit items-center rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 backdrop-blur-sm">
                {post.categories[0]}
              </span>
            ) : null}

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
              {post.author ? (
                <span className="flex items-center gap-1.5">
                  <User className="size-4" />
                  {post.author}
                </span>
              ) : null}
              <span className="flex items-center gap-1.5">
                <Calendar className="size-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4" />
                {readingTime} min read
              </span>
            </div>
          </div>
        </Container>
      </div>

      <Section className="!pt-10">
        <Container>
          <div className="mx-auto max-w-3xl">
            {post.featuredImage ? (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  sizes="768px"
                  priority
                  className="object-cover"
                />
              </div>
            ) : null}

            {toc.length > 2 ? (
              <nav
                aria-label="Table of contents"
                className="mt-10 rounded-2xl border border-border bg-surface p-6"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <List className="size-4 text-brand-600" />
                  In this article
                </div>
                <ul className="mt-3 space-y-2">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm text-muted transition-colors hover:text-brand-700"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}

            <div
              className="blog-content mt-10"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <CtaBanner
          title="Ready to put this into practice?"
          description="Tell us about your project and we'll put together a free, no-obligation quote."
        />
      </Section>
    </>
  );
}
