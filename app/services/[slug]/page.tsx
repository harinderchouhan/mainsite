import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { services, getService } from "@/lib/services";
import { getIcon } from "@/lib/icon-map";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";

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
      <PageHeader eyebrow="Service" title={service.name} description={service.heroDescription} />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <IconTile icon={Icon} size="lg" />
              <h2 className="mt-6 text-2xl font-semibold text-foreground">
                What&rsquo;s included
              </h2>
              <ul className="mt-6 space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-600" />
                    <span className="text-base leading-relaxed text-foreground/90">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Card className="bg-brand-50/60">
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
                          className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-white"
                        >
                          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand-600">
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
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700"
                >
                  Get a free quote
                  <ArrowRight className="size-4" />
                </Link>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Our process"
            title="How we get there"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <div key={step.title} className="relative rounded-2xl border border-border bg-surface p-6">
                <span className="font-display text-3xl font-bold text-brand-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
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
