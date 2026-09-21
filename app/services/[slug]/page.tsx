import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { services, getService } from "@/lib/services";
import { trustFaqs } from "@/lib/faq";
import { getIcon } from "@/lib/icon-map";
import { CtaBanner } from "@/components/CtaBanner";
import { FAQ } from "@/components/home/FAQ";
import { StatsBand } from "@/components/home/StatsBand";
import { FeaturedCaseStudy } from "@/components/home/FeaturedCaseStudy";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { Pricing } from "@/components/home/Pricing";
import { AuditCapture } from "@/components/home/AuditCapture";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { IconTile } from "@/components/ui/IconTile";
import { GridPattern } from "@/components/ui/GridPattern";
import { Blob } from "@/components/ui/Blob";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.heroDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = getIcon(service.icon);
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <div className="relative overflow-hidden bg-mesh">
        <GridPattern className="opacity-60" />
        <Blob tone="brand" className="-left-24 -top-24 h-72 w-72" />
        <Container className="relative py-10 sm:py-14">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-white/70 shadow-sm backdrop-blur-sm">
              <IconTile icon={Icon} size="sm" />
            </div>
            <span className="mt-3 inline-flex items-center rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 backdrop-blur-sm">
              Service
            </span>
            <h1 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {service.name}
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              {service.heroDescription}
            </p>
          </div>
        </Container>
      </div>

      <StatsBand />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Our work"
            title="Results / Case Studies"
            description="Real client websites and real outcomes — not mockups."
            align="center"
            className="mx-auto"
          />
        </Container>
        <div className="mt-12">
          <FeaturedCaseStudy />
        </div>
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Sound familiar?"
            title="The Problem"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <ProblemSolution showRevenueCallout />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-start">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {service.overview.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-relaxed text-foreground/90"
                  >
                    {paragraph}
                  </p>
                ))}

                <div className="overflow-hidden rounded-2xl border border-brand-200 bg-brand-50/50 p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm">
                      <CheckCircle2 className="size-5" />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">
                      Is this for you?
                    </h3>
                  </div>
                  <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {service.whoItsFor.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-600" />
                        <span className="text-sm leading-relaxed text-foreground/80">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-14 border-t border-border pt-14">
                <SectionHeading eyebrow="Included" title="What's included" />
                <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-background">
                  {service.features.map((feature, index) => (
                    <div
                      key={feature}
                      className={`flex items-start gap-3 px-5 py-4 ${
                        index > 0 ? "border-t border-border" : ""
                      }`}
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-600" />
                      <span className="text-sm leading-relaxed text-foreground/90">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-14 border-t border-border pt-14">
                <SectionHeading
                  eyebrow="Comparison"
                  title="HanuiT Solutions vs. the alternatives"
                />
                <div className="mt-8">
                  <ComparisonTable />
                </div>
              </div>

              <div className="mt-14 border-t border-border pt-14">
                <SectionHeading eyebrow="Our process" title="How we get there" />

                {/* Mobile / tablet: vertical timeline */}
                <div className="relative mt-10 space-y-10 pl-10 lg:hidden">
                  <div aria-hidden className="absolute bottom-2 left-4 top-2 w-px bg-border" />
                  {service.process.map((step, index) => (
                    <div key={step.title} className="relative">
                      <span className="absolute -left-10 top-0 flex size-8 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white ring-4 ring-background">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                        {step.timeframe ? (
                          <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[11px] font-semibold text-brand-700">
                            {step.timeframe}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                    </div>
                  ))}
                </div>

                {/* Desktop: two-column stack (narrower column than a full-width page) */}
                <div className="relative mt-10 hidden lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8">
                  {service.process.map((step, index) => (
                    <div key={step.title} className="flex gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-sm font-bold text-white shadow-md shadow-brand-900/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                          {step.timeframe ? (
                            <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[11px] font-semibold text-brand-700">
                              {step.timeframe}
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6">
                <h3 className="text-base font-semibold text-foreground">
                  Ready to get started?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Tell us about your project and we&rsquo;ll put together a
                  free, no-obligation quote.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                >
                  Get Your Free Quote
                  <ArrowRight className="size-4" />
                </Link>
                <a
                  href="tel:+917082069620"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-200 px-5 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
                >
                  <Phone className="size-4" />
                  +91 7082069620
                </a>
                <div className="mt-5 flex items-center justify-between border-t border-brand-100 pt-4 text-center">
                  <div>
                    <p className="font-display text-lg font-bold text-foreground">12+</p>
                    <p className="text-xs text-muted">years</p>
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-foreground">1000+</p>
                    <p className="text-xs text-muted">clients</p>
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-foreground">1200+</p>
                    <p className="text-xs text-muted">projects</p>
                  </div>
                </div>
              </div>

              <div className="max-h-[22rem] overflow-y-auto rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-base font-semibold text-foreground">
                  Other services
                </h3>
                <ul className="mt-4 space-y-3">
                  {otherServices.map((s) => {
                    const OtherIcon = getIcon(s.icon);
                    return (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-brand-50"
                        >
                          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                            <OtherIcon className="size-4" />
                          </span>
                          <span className="text-sm font-medium text-foreground">
                            {s.name}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700"
                >
                  View all services
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Investment"
            title="Pricing"
            description="Every pest control company and dental practice is different, so we don't do one-size-fits-all packages — here's roughly what's included at each level of engagement."
            align="center"
            className="mx-auto"
          />
          <div className="mt-14">
            <Pricing />
          </div>
        </Container>
      </Section>

      <Section>
        <AuditCapture source={`service-${service.slug}`} />
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title={`Questions about ${service.name.toLowerCase()}`}
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <FAQ faqs={[...service.faqs, ...trustFaqs]} />
          </div>
        </Container>
      </Section>

      <Section>
        <CtaBanner
          title={`Ready to talk about ${service.name.toLowerCase()}?`}
          description="Share a few details about your project and we'll follow up with a free, no-obligation quote."
        />
      </Section>
    </>
  );
}
