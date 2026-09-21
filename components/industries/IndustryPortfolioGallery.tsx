import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { IndustryPortfolioItem } from "@/lib/industry-portfolios";

export function IndustryPortfolioGallery({ items }: { items: IndustryPortfolioItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <a
          key={item.url}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
        >
          <div className="relative h-40 overflow-hidden bg-background">
            <div className="flex h-6 items-center gap-1.5 border-b border-border bg-background px-3">
              <span className="size-2 rounded-full bg-border" />
              <span className="size-2 rounded-full bg-border" />
              <span className="size-2 rounded-full bg-border" />
            </div>
            <Image
              src={item.image}
              alt={`Screenshot of the live ${item.name} website`}
              width={640}
              height={480}
              className="h-[calc(100%-1.5rem)] w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex items-center justify-between gap-2 p-4">
            <span className="text-sm font-semibold text-foreground">{item.name}</span>
            <ArrowUpRight className="size-4 shrink-0 text-brand-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </a>
      ))}
    </div>
  );
}
