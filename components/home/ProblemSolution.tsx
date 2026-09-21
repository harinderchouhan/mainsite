import { Check, X, ArrowRight, TrendingDown, TrendingUp, AlertTriangle } from "lucide-react";
import { problems, solutions } from "@/lib/problem-solution";
import { Button } from "@/components/ui/Button";
import { GridPattern } from "@/components/ui/GridPattern";
import { FadeIn } from "@/components/ui/FadeIn";

export function ProblemSolution({
  showRevenueCallout = false,
}: {
  /** Adds a bold revenue-loss statement above the comparison — used on service pages, not the homepage. */
  showRevenueCallout?: boolean;
}) {
  return (
    <FadeIn>
      {showRevenueCallout ? (
        <div className="mb-4 flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 sm:mb-6 sm:items-center sm:p-6">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
            <AlertTriangle className="size-4" />
          </span>
          <p className="text-sm font-medium leading-relaxed text-rose-900 sm:text-base">
            Every day your site doesn&apos;t rank locally, you&apos;re losing
            jobs and patients to the pest control company or dental practice
            down the street that shows up first.
          </p>
        </div>
      ) : null}

      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-lg shadow-brand-900/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          <div className="relative bg-rose-50/40 p-6 sm:p-10 lg:p-12">
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-500">
                <TrendingDown className="size-5" />
              </span>
              <span className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-600">
                Before
              </span>
            </div>
            <h3 className="mt-4 font-display text-xl font-bold text-foreground sm:mt-5">
              Without a site that works for you
            </h3>
            <ul className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                    <X className="size-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/70">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 -my-5 flex justify-center lg:hidden">
            <span
              aria-hidden
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-brand-700 shadow-lg ring-4 ring-background"
            >
              <ArrowRight className="size-4 rotate-90" />
            </span>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-700 to-brand-900 p-6 sm:p-10 lg:p-12">
            <GridPattern className="opacity-10" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                  <TrendingUp className="size-5" />
                </span>
                <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
                  After
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-white sm:mt-5">
                With HanuiT Solutions
              </h3>
              <ul className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
                {solutions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white text-brand-700">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-white/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                href="/contact"
                variant="secondary"
                className="mt-6 sm:mt-8"
                icon={ArrowRight}
              >
                Let&apos;s fix this — Get Your Free Quote
              </Button>
              <p className="mt-3 text-xs text-white/60">
                Free, no-obligation quote.
              </p>
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 z-20 hidden size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-700 shadow-lg ring-4 ring-background lg:flex"
        >
          <ArrowRight className="size-5" />
        </div>
      </div>
    </FadeIn>
  );
}
