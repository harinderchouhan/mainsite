import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { leadMagnet } from "@/lib/lead-magnet";
import { LeadMagnetForm } from "@/components/leadgen/LeadMagnetForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { GridPattern } from "@/components/ui/GridPattern";
import { Blob } from "@/components/ui/Blob";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: leadMagnet.title,
  description: leadMagnet.description,
};

export default function WebsiteGrowthChecklistPage() {
  return (
    <>
      <div className="relative overflow-hidden bg-mesh">
        <GridPattern className="opacity-60" />
        <Blob tone="brand" className="-left-24 -top-24 h-72 w-72" />
        <Container className="relative py-16 sm:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 backdrop-blur-sm">
                Free resource
              </span>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {leadMagnet.title}
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                {leadMagnet.description}
              </p>
              <ul className="mt-8 space-y-3">
                {leadMagnet.items.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-500" />
                    <span>{item}</span>
                  </li>
                ))}
                <li className="pl-6 text-sm font-medium text-muted">
                  + {leadMagnet.items.length - 4} more, free below
                </li>
              </ul>
            </div>

            <Card className="sm:p-8">
              <h2 className="text-lg font-semibold text-foreground">
                Get the full checklist
              </h2>
              <p className="mt-1.5 text-sm text-muted">
                Enter your details and it unlocks right here on the page.
              </p>
              <div className="mt-6">
                <LeadMagnetForm source="checklist-page" />
              </div>
            </Card>
          </div>
        </Container>
      </div>

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Want us to run it for you instead?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              If you&rsquo;d rather skip the DIY audit, we&rsquo;ll review your
              site against this checklist ourselves and tell you exactly
              what&rsquo;s holding it back — free, no obligation.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Request a free audit
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
