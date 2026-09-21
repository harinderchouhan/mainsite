import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { getWpPosts } from "@/lib/wp-posts";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";

function formatDate(iso: string) {
  const date = new Date(iso.replace(" ", "T"));
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(date);
}

export async function BlogPreview() {
  const data = await getWpPosts({ perPage: 3 });
  if (!data || data.posts.length === 0) return null;

  return (
    <Section className="bg-surface">
      <Container>
        <SectionHeading
          eyebrow="From the blog"
          title="Ideas worth reading before your next project"
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                  {post.title}
                </h3>
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

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            Read more from the blog
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
