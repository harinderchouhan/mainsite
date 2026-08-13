import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/industries";
import { getIcon } from "@/lib/icon-map";

const preview = industries.slice(0, 12);

export function IndustriesPreview() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {preview.map((industry) => {
          const Icon = getIcon(industry.icon);
          return (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-4 transition-colors hover:border-brand-300 hover:bg-brand-50"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 group-hover:bg-white">
                <Icon className="size-4" />
              </span>
              <span className="text-sm font-medium text-foreground">
                {industry.name}
              </span>
            </Link>
          );
        })}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          View all {industries.length} industries we serve
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
