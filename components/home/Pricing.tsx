import { CheckCircle2 } from "lucide-react";
import { pricingTiers } from "@/lib/pricing";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={cn(
              "flex flex-col rounded-2xl border p-6 sm:p-8",
              tier.featured
                ? "border-brand-300 bg-surface shadow-lg shadow-brand-900/5 lg:-my-4 lg:py-12"
                : "border-border bg-surface"
            )}
          >
            {tier.featured ? (
              <span className="mb-4 inline-flex w-fit items-center rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                Most popular
              </span>
            ) : null}
            <h3 className="text-xl font-semibold text-foreground">
              {tier.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-brand-700">
              {tier.tagline}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4">
              {tier.bestFor}
            </p>
            <ul className="mt-5 flex-1 space-y-3 sm:mt-6">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-500" />
                  <span className="text-sm leading-relaxed text-muted">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              href="/contact"
              size="md"
              variant={tier.featured ? "primary" : "secondary"}
              className="mt-6 w-full sm:mt-8"
            >
              Get a Custom Quote
            </Button>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-muted sm:mt-10">
        Every project is scoped and quoted individually — no two pest control
        companies or dental practices need the exact same build.
      </p>
    </div>
  );
}
