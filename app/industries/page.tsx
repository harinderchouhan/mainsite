import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/industries";
import { getIndustryContent } from "@/lib/industry-content";
import { getIcon } from "@/lib/icon-map";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { IconTile } from "@/components/ui/IconTile";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "HanuiT Solutions builds websites for pest control companies and dental clinics — two industries we focus on deeply, instead of spreading thin across everything.",
  alternates: {
    canonical: `${site.url}/industries`,
  },
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Industries", url: `${site.url}/industries` },
        ])}
      />
      <PageHeader
        eyebrow="Industries"
        title="We build for two industries. That's the point."
        description="Instead of being generalists, we've focused our team on pest control companies and dental clinics — so we already understand your customers, your booking flow, and what your website needs to do before the first call."
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {industries.map((industry) => {
              const content = getIndustryContent(industry.slug);
              const Icon = getIcon(industry.icon);
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group flex flex-col rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-brand-300 hover:bg-brand-50/40"
                >
                  <IconTile icon={Icon} size="lg" />
                  <h2 className="mt-6 text-xl font-semibold text-foreground">
                    {industry.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-brand-700">
                    {industry.tagline}
                  </p>
                  {content ? (
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {content.heroDescription}
                    </p>
                  ) : null}
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 group-hover:text-brand-800">
                    See what we build
                    <ArrowRight className="size-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <CtaBanner
          title="Not a pest control company or dental practice?"
          description="We're intentionally focused on these two industries right now, so we can go deeper than a generalist agency can. Get in touch and we'll be straight with you about whether we're the right fit."
        />
      </Section>
    </>
  );
}
