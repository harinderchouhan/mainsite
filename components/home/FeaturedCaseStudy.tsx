import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GridPattern } from "@/components/ui/GridPattern";
import { FadeIn } from "@/components/ui/FadeIn";

export function FeaturedCaseStudy() {
  return (
    <Container>
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface">
          <GridPattern className="opacity-40" />
          <div className="relative grid grid-cols-1 gap-10 p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:p-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
                Featured case study
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                How Meuraki.com grew visitors by 25% in three months
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">
                A full redesign paired with focused SEO work gave Meuraki.com
                a faster, more coherent shopping experience — without a
                ground-up rebuild of their catalog or operations. The result
                was a measurable lift in traffic within the first quarter
                after launch.
              </p>
              <Link
                href="/portfolio"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700"
              >
                See more of our work
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 via-brand-600 to-warm p-8 text-center text-white sm:p-10">
              <TrendingUp className="size-8 text-white/80" />
              <div className="mt-4 font-display text-5xl font-bold">
                +25%
              </div>
              <p className="mt-2 text-sm text-white/80">
                visitor growth within 3 months of launch
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}
