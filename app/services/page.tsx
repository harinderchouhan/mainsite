import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CtaBanner } from "@/components/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design, web development, SEO, ecommerce, and WordPress services from HanuiT Solutions — built to grow your business online.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything you need to grow online"
        description="Five focused services, one team — so your website, your search visibility, and your online store all work together instead of pulling in different directions."
      />
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
