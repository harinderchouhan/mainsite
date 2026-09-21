import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/industries";
import { getIndustryContent } from "@/lib/industry-content";
import { getIcon } from "@/lib/icon-map";
import { IconTile } from "@/components/ui/IconTile";

export function IndustriesPreview() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {industries.map((industry) => {
        const content = getIndustryContent(industry.slug);
        const Icon = getIcon(industry.icon);
        return (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            className="group flex flex-col rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-brand-300 hover:bg-brand-50/40"
          >
            <IconTile icon={Icon} size="lg" />
            <h3 className="mt-6 text-xl font-semibold text-foreground">
              {industry.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-brand-700">
              {industry.tagline}
            </p>
            {content ? (
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {content.heroDescription}
              </p>
            ) : null}
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 group-hover:text-brand-800">
              See what we build
              <ArrowRight className="size-4" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
