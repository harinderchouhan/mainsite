import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/portfolio";
import { Card } from "@/components/ui/Card";

export function PortfolioPreview() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {caseStudies.map((project, i) => (
        <Card key={project.slug} className="flex h-full flex-col">
          <div
            className={`flex h-32 items-center justify-center rounded-xl bg-gradient-to-br ${
              i % 3 === 0
                ? "from-brand-500 to-brand-700"
                : i % 3 === 1
                ? "from-brand-400 via-brand-600 to-warm"
                : "from-warm to-brand-600"
            }`}
          >
            <span className="font-display text-xl font-bold text-white/90">
              {project.client}
            </span>
          </div>
          <div className="mt-2 flex flex-wrap gap-2 pt-4">
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
      <Link
        href="/portfolio"
        className="flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-brand-300 bg-brand-50/50 p-6 text-center transition-colors hover:bg-brand-50"
      >
        <ArrowUpRight className="size-6 text-brand-600" />
        <span className="text-sm font-semibold text-brand-700">
          See all case studies
        </span>
      </Link>
    </div>
  );
}
