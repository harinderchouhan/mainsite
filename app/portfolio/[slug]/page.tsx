import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import { getWpCaseStudy } from "@/lib/wp-case-studies";
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
  const caseStudy = await getWpCaseStudy(slug);
  if (!caseStudy) return {};

  const url = `${site.url}/portfolio/${caseStudy.slug}`;

  return {
    title: caseStudy.title,
    description: caseStudy.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.excerpt,
      url,
      type: "article",
      publishedTime: caseStudy.date,
      modifiedTime: caseStudy.modified,
      authors: [caseStudy.author],
      images: caseStudy.featuredImage ? [caseStudy.featuredImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.title,
      description: caseStudy.excerpt,
      images: caseStudy.featuredImage ? [caseStudy.featuredImage] : undefined,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const caseStudy = await getWpCaseStudy(slug);
  if (!caseStudy) notFound();

  const url = `${site.url}/portfolio/${caseStudy.slug}`;

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: caseStudy.title,
          description: caseStudy.excerpt,
          url,
          image: caseStudy.featuredImage,
          datePublished: caseStudy.date,
          dateModified: caseStudy.modified,
          authorName: caseStudy.author,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Portfolio", url: `${site.url}/portfolio` },
          { name: caseStudy.title, url },
        ])}
      />
      <div className="relative overflow-hidden bg-mesh">
        <GridPattern className="opacity-60" />
        <Blob tone="brand" className="-left-24 -top-24 h-72 w-72" />
        <Container className="relative py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700"
            >
              <ArrowLeft className="size-4" />
              Back to portfolio
            </Link>

            <span className="mt-5 flex w-fit items-center rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 backdrop-blur-sm">
              Case study
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {caseStudy.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <Calendar className="size-4" />
                {formatDate(caseStudy.date)}
              </span>
            </div>
          </div>
        </Container>
      </div>

      <Section className="!pt-10">
        <Container>
          <div className="mx-auto max-w-3xl">
            {caseStudy.featuredImage ? (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border">
                <Image
                  src={caseStudy.featuredImage}
                  alt={caseStudy.title}
                  fill
                  sizes="768px"
                  priority
                  className="object-cover"
                />
              </div>
            ) : null}

            <div
              className="blog-content mt-10"
              dangerouslySetInnerHTML={{ __html: caseStudy.content }}
            />
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <CtaBanner
          title="Want results like these?"
          description="Let's talk about what a redesign, rebrand, or SEO push could do for your business."
        />
      </Section>
    </>
  );
}
