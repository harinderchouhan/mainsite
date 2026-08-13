import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries, getIndustry } from "@/lib/industries";
import { categoryContent } from "@/lib/industry-content";
import { getService } from "@/lib/services";
import { getIcon } from "@/lib/icon-map";
import { CtaBanner } from "@/components/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { IconTile } from "@/components/ui/IconTile";
import { ServiceLinkCard } from "@/components/industries/ServiceLinkCard";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: `Web Design & Digital Solutions for ${industry.name}`,
    description: categoryContent[industry.category].heroDescription(industry.name),
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const content = categoryContent[industry.category];
  const Icon = getIcon(industry.icon);
  const relevantServices = content.serviceSlugs
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <div className="relative overflow-hidden bg-mesh">
        <Container className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-white/70 shadow-sm backdrop-blur-sm">
              <IconTile icon={Icon} size="lg" />
            </div>
            <span className="mt-5 inline-flex items-center rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 backdrop-blur-sm">
              {industry.category}
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Websites for {industry.name}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {content.heroDescription(industry.name)}
            </p>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Why it matters"
            title={`Why ${industry.name.toLowerCase()} businesses need a strong web presence`}
            description={content.whyIntro(industry.name)}
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {content.challenges.map((challenge) => {
              const ChallengeIcon = getIcon(challenge.icon);
              return (
                <div
                  key={challenge.title}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <ChallengeIcon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {challenge.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {challenge.description(industry.name)}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Recommended services"
            title={`How we can help your ${industry.name.toLowerCase()} business`}
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {relevantServices.map((service) => (
              <ServiceLinkCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <CtaBanner
          title={`Let's build a site for your ${industry.name.toLowerCase()} business`}
          description="Get a free, no-obligation quote tailored to your industry and goals."
        />
      </Section>
    </>
  );
}
