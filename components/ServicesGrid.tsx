import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/services";
import { getIcon } from "@/lib/icon-map";

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = getIcon(service.icon);
        return (
          <Link key={service.slug} href={`/services/${service.slug}`} className="group">
            <div className="flex h-full overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-200 group-hover:-translate-y-1 group-hover:border-brand-300 group-hover:shadow-lg group-hover:shadow-brand-900/5">
              <div className="flex w-20 shrink-0 items-center justify-center bg-gradient-to-b from-brand-600 to-brand-800 sm:w-24">
                <Icon className="size-7 text-white" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.shortDescription}
                </p>

                <ul className="mt-4 space-y-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-brand-500" />
                      <span className="text-xs leading-relaxed text-muted">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-muted">
                  <span className="font-semibold text-foreground">Good fit if: </span>
                  {service.whoItsFor[0]}
                </p>

                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-700">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        );
      })}

      <Link
        href="/contact"
        className="flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-brand-300 bg-brand-50/50 p-6 text-center transition-colors hover:bg-brand-50"
      >
        <ArrowUpRight className="size-6 text-brand-600" />
        <span className="text-sm font-semibold text-brand-700">
          Not sure what you need?
        </span>
        <span className="text-xs text-muted">
          Tell us about your project and we&apos;ll point you the right way.
        </span>
      </Link>
    </div>
  );
}
