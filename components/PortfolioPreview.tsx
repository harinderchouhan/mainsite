import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getWpCaseStudies } from "@/lib/wp-case-studies";
import { caseStudies as staticCaseStudies } from "@/lib/portfolio";
import { Card } from "@/components/ui/Card";

export async function PortfolioPreview() {
  const live = await getWpCaseStudies({ perPage: 3 });

  if (live && live.caseStudies.length > 0) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {live.caseStudies.map((cs) => (
          <Link key={cs.id} href={`/portfolio/${cs.slug}`} className="group">
            <Card className="flex h-full flex-col justify-between transition-all duration-200 group-hover:-translate-y-1 group-hover:border-brand-200 group-hover:shadow-lg group-hover:shadow-brand-900/5">
              <div>
                <h3 className="line-clamp-1 text-sm font-semibold leading-snug text-foreground">
                  {cs.title}
                </h3>
                <p className="mt-1 line-clamp-1 text-xs text-muted">
                  {cs.excerpt}
                </p>
              </div>
              <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700">
                Read the story
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Card>
          </Link>
        ))}
        <Link
          href="/portfolio"
          className="flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-brand-300 bg-brand-50/50 p-4 text-center transition-colors hover:bg-brand-50"
        >
          <ArrowUpRight className="size-5 text-brand-600" />
          <span className="text-xs font-semibold text-brand-700">
            See all case studies
          </span>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {staticCaseStudies.map((project) => (
        <Card
          key={project.slug}
          className="flex h-full flex-col justify-between"
        >
          <div>
            <h3 className="line-clamp-1 text-sm font-semibold leading-snug text-foreground">
              {project.client}
            </h3>
            <p className="mt-1 line-clamp-1 text-xs font-medium text-brand-600">
              {project.metric
                ? `${project.metric.value} ${project.metric.label}`
                : project.highlight}
            </p>
          </div>
          <Link
            href="/portfolio"
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700"
          >
            Read the story
            <ArrowRight className="size-3.5" />
          </Link>
        </Card>
      ))}
      <Link
        href="/portfolio"
        className="flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-brand-300 bg-brand-50/50 p-4 text-center transition-colors hover:bg-brand-50"
      >
        <ArrowUpRight className="size-5 text-brand-600" />
        <span className="text-xs font-semibold text-brand-700">
          See all case studies
        </span>
      </Link>
    </div>
  );
}
