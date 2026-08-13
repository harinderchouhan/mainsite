import type { Metadata } from "next";
import Link from "next/link";
import { industries, industryCategories } from "@/lib/industries";
import { getIcon } from "@/lib/icon-map";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "HanuiT Solutions builds websites and digital strategies for 49+ industries, from trades and manufacturing to healthcare and hospitality.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Websites built around how your industry actually works"
        description={`We've worked across ${industries.length}+ industries, which means we show up already understanding your customers, your sales cycle, and what your website actually needs to do.`}
      />

      <Section>
        <Container>
          <div className="space-y-16">
            {industryCategories.map((category) => {
              const items = industries.filter((i) => i.category === category);
              return (
                <div key={category}>
                  <h2 className="text-xl font-semibold text-foreground">
                    {category}
                  </h2>
                  <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {items.map((industry) => {
                      const Icon = getIcon(industry.icon);
                      return (
                        <Link
                          key={industry.slug}
                          href={`/industries/${industry.slug}`}
                          className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-4 transition-colors hover:border-brand-300 hover:bg-brand-50"
                        >
                          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 group-hover:bg-white">
                            <Icon className="size-4" />
                          </span>
                          <span className="text-sm font-medium text-foreground">
                            {industry.name}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <CtaBanner
          title="Don't see your exact industry?"
          description="Chances are we've still worked on something similar. Tell us about your business and let's talk."
        />
      </Section>
    </>
  );
}
