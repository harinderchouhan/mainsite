import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Palette, TrendingUp, ShoppingCart, Sparkles } from "lucide-react";
import { getWpPosts } from "@/lib/wp-posts";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { NotifyForm } from "@/components/blog/NotifyForm";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { GridPattern } from "@/components/ui/GridPattern";
import { Blob } from "@/components/ui/Blob";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights and resources on website design, SEO, ads, and social media for pest control companies and dental practices, from HanuiT Solutions.",
  alternates: {
    canonical: `${site.url}/blog`,
  },
};

const topics = [
  {
    icon: Palette,
    title: "Web design",
    description: "Practical breakdowns of what makes a website convert.",
  },
  {
    icon: TrendingUp,
    title: "SEO",
    description: "Real strategies for ranking and getting found online.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce",
    description: "Lessons on building stores customers actually buy from.",
  },
];

function formatDate(iso: string) {
  const date = new Date(iso.replace(" ", "T"));
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(date);
}

const PER_PAGE = 9;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);

  const data = await getWpPosts({ page, perPage: PER_PAGE });

  if (!data || data.posts.length === 0) {
    return (
      <Section className="relative overflow-hidden bg-mesh">
        <GridPattern className="opacity-60" />
        <Blob tone="warm" className="-right-24 top-10 h-72 w-72" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-white/70 text-brand-600 shadow-sm backdrop-blur-sm">
              <Sparkles className="size-6" />
            </span>
            <span className="mt-5 inline-flex items-center rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 backdrop-blur-sm">
              Insights & Resources
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              New articles coming soon
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              We&rsquo;re building out a library of practical, no-fluff writing on
              web design, SEO, and ecommerce — the same thinking we bring to
              client projects. Leave your email and we&rsquo;ll let you know the
              moment we publish.
            </p>

            <div className="mx-auto mt-8 max-w-md">
              <NotifyForm />
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-2xl border border-border bg-surface/80 p-6 text-center backdrop-blur-sm"
              >
                <span className="mx-auto flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <topic.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-foreground">
                  {topic.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{topic.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Blog", url: `${site.url}/blog` },
        ])}
      />
      <PageHeader
        eyebrow="Insights & Resources"
        title="The blog"
        description="Practical, no-fluff writing on website design, SEO, ads, and social media for pest control companies and dental practices."
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-50">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-brand-500 to-brand-700 text-white/80">
                      <Sparkles className="size-8" />
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  {post.categories.length > 0 ? (
                    <span className="inline-flex w-fit items-center rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">
                      {post.categories[0]}
                    </span>
                  ) : null}
                  <h2 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted">
                    <span>{formatDate(post.date)}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-brand-700">
                      Read more
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {data.totalPages > 1 ? (
            <div className="mt-12 flex items-center justify-center gap-3">
              <Link
                href={`/blog?page=${page - 1}`}
                aria-disabled={page <= 1}
                className={`inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors ${
                  page <= 1 ? "pointer-events-none opacity-40" : "hover:border-brand-300 hover:text-brand-700"
                }`}
              >
                <ArrowLeft className="size-4" />
                Previous
              </Link>
              <span className="text-sm text-muted">
                Page {page} of {data.totalPages}
              </span>
              <Link
                href={`/blog?page=${page + 1}`}
                aria-disabled={page >= data.totalPages}
                className={`inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors ${
                  page >= data.totalPages ? "pointer-events-none opacity-40" : "hover:border-brand-300 hover:text-brand-700"
                }`}
              >
                Next
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ) : null}
        </Container>
      </Section>
    </>
  );
}
