import type { Metadata } from "next";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { PageHeader } from "@/components/PageHeader";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design, SEO, ads management, social media, automation, and AI workflows from HanuiT Solutions — built specifically for pest control and dental businesses.",
  alternates: {
    canonical: `${site.url}/services`,
  },
};

const stats = [
  { value: "8", label: "focused services" },
  { value: "1", label: "team, no subcontractors" },
  { value: "12+", label: "years of experience" },
  { value: "1000+", label: "clients served" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Services", url: `${site.url}/services` },
        ])}
      />
      <PageHeader
        eyebrow="Services"
        title="Everything you need to grow online"
        description="From your website to your ads, your SEO, and your social media — one team handling all of it, so nothing gets stitched together from separate vendors who don't talk to each other."
      />

      <div className="border-b border-border bg-surface">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="px-2 py-6 text-center">
                <p className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <ServicesGrid />
        </Container>
      </Section>
      <Section className="bg-surface">
        <CtaBanner
          title="Not sure which service you need?"
          description="Tell us about your business and goals — we'll recommend the right starting point, free of charge."
        />
      </Section>
    </>
  );
}
