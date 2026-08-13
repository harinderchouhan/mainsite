import { Gift } from "lucide-react";
import { leadMagnet } from "@/lib/lead-magnet";
import { LeadMagnetForm } from "@/components/leadgen/LeadMagnetForm";
import { Container } from "@/components/ui/Container";
import { GridPattern } from "@/components/ui/GridPattern";
import { FadeIn } from "@/components/ui/FadeIn";

export function LeadMagnetBanner() {
  return (
    <Container>
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl border border-brand-200 bg-brand-50/60">
          <GridPattern className="opacity-30" />
          <div className="relative grid grid-cols-1 gap-8 p-8 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:p-12">
            <div>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-sm">
                <Gift className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Not ready to talk yet? Take the checklist first.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                {leadMagnet.description}
              </p>
            </div>
            <div className="rounded-2xl bg-background p-6 shadow-sm sm:p-7">
              <LeadMagnetForm source="homepage-banner" compact />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}
