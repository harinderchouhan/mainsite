import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whatsIncluded } from "@/lib/whats-included";
import { getIcon } from "@/lib/icon-map";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export function WhatsIncluded() {
  return (
    <div>
      <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-surface sm:grid-cols-2">
        {whatsIncluded.map((item, index) => {
          const Icon = getIcon(item.icon);
          const row = Math.floor(index / 2);
          const col = index % 2;
          return (
            <FadeIn
              key={item.title}
              delay={(index % 3) * 0.06}
              className={cn(
                "flex items-start gap-4 p-5 sm:p-6",
                index > 0 && "border-t border-border",
                row === 0 && "sm:border-t-0",
                col === 1 && "sm:border-l"
              )}
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon className="size-4" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
      <div className="mt-6 text-center sm:mt-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          See everything we handle for you
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
