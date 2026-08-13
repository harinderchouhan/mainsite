import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PortfolioFilter } from "@/components/PortfolioFilter";
import { CtaBanner } from "@/components/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Real case studies from HanuiT Solutions — website redesigns, SEO growth, and full rebrands for real clients.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Work we're proud of"
        description="A look at a few recent engagements — the problems we were brought in to solve and the outcomes that followed."
      />
      <Section>
        <Container>
          <PortfolioFilter />
        </Container>
      </Section>
      <Section className="bg-surface">
        <CtaBanner
          title="Want results like these?"
          description="Let's talk about what a redesign, rebrand, or SEO push could do for your business."
        />
      </Section>
    </>
  );
}
