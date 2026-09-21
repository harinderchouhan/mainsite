import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { getWpCaseStudies } from "@/lib/wp-case-studies";
import { PageHeader } from "@/components/PageHeader";
import { PortfolioFilter } from "@/components/PortfolioFilter";
import { CtaBanner } from "@/components/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Real case studies from HanuiT Solutions — website redesigns, SEO growth, and full rebrands for real clients.",
};

function formatDate(iso: string) {
  const date = new Date(iso.replace(" ", "T"));
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(date);
}

const PER_PAGE = 9;

export default async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);

  const data = await getWpCaseStudies({ page, perPage: PER_PAGE });

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Work we're proud of"
        description="A look at a few recent engagements — the problems we were brought in to solve and the outcomes that followed."
      />
      <Section>
        <Container>
          <PortfolioFilter />
        </Container>
      </Section>

      {data && data.caseStudies.length > 0 ? (
        <Section className="bg-surface">
          <Container>
            <SectionHeading
              eyebrow="All case studies"
              title="Every project, written up in full"
              align="center"
              className="mx-auto"
            />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {data.caseStudies.map((cs) => (
                <Link
                  key={cs.id}
                  href={`/portfolio/${cs.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-50">
                    {cs.featuredImage ? (
                      <Image
                        src={cs.featuredImage}
                        alt={cs.title}
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
                    <h3 className="text-lg font-semibold leading-snug text-foreground">
                      {cs.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {cs.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-muted">
                      <span>{formatDate(cs.date)}</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-brand-700">
                        Read the story
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
                  href={`/portfolio?page=${page - 1}`}
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
                  href={`/portfolio?page=${page + 1}`}
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
      ) : null}

      <Section className={data && data.caseStudies.length > 0 ? undefined : "bg-surface"}>
        <CtaBanner
          title="Want results like these?"
          description="Let's talk about what a redesign, rebrand, or SEO push could do for your business."
        />
      </Section>
    </>
  );
}
