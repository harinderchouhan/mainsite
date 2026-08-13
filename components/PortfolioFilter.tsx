"use client";

import { useMemo, useState } from "react";
import { FolderOpen } from "lucide-react";
import { caseStudies, portfolioCategories, type CaseStudy } from "@/lib/portfolio";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const filters: (CaseStudy["categories"][number] | "All")[] = [
  "All",
  ...portfolioCategories,
];

export function PortfolioFilter() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return caseStudies;
    return caseStudies.filter((project) => project.categories.includes(active));
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === filter
                ? "border-brand-600 bg-brand-600 text-white"
                : "border-border bg-surface text-foreground/70 hover:border-brand-300 hover:text-brand-700"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Card key={project.slug} className="flex h-full flex-col">
              <div
                className={cn(
                  "flex h-36 items-center justify-center rounded-xl bg-gradient-to-br px-4 text-center",
                  i % 3 === 0
                    ? "from-brand-500 to-brand-700"
                    : i % 3 === 1
                    ? "from-brand-400 via-brand-600 to-warm"
                    : "from-warm to-brand-600"
                )}
              >
                <span className="font-display text-xl font-bold text-white/90">
                  {project.client}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.categories.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.summary}
              </p>
            </Card>
          ))}
        </div>
      ) : (
        <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-16 text-center">
          <FolderOpen className="size-8 text-brand-400" />
          <p className="mt-4 text-sm text-muted">
            No case studies in this category yet — check back soon, or browse
            another category above.
          </p>
        </div>
      )}
    </div>
  );
}
