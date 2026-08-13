import { Hero } from "@/components/home/Hero";
import { StatsBand } from "@/components/home/StatsBand";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { FeaturedCaseStudy } from "@/components/home/FeaturedCaseStudy";
import { TeamPreview } from "@/components/home/TeamPreview";
import { FAQ } from "@/components/home/FAQ";
import { ServicesGrid } from "@/components/ServicesGrid";
import { WhyChooseUsGrid } from "@/components/WhyChooseUsGrid";
import { IndustriesPreview } from "@/components/IndustriesPreview";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import { CtaBanner } from "@/components/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Services built to move the needle"
            description="From first impression to final checkout, we handle the pieces that make a website actually perform for your business."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <ServicesGrid />
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="A clear process from first call to launch"
            description="No black boxes. You'll always know what stage your project is at and what's coming next."
            align="center"
            className="mx-auto"
          />
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Why HanuiT Solutions"
            title="A team that treats your growth like our own"
            description="Twelve years in, here's what clients consistently tell us they value most about working with us."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <WhyChooseUsGrid />
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title="Built for your industry, not a generic template"
            description="We've built sites for businesses across manufacturing, healthcare, trades, hospitality, and professional services."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <IndustriesPreview />
          </div>
        </Container>
      </Section>

      <Section>
        <FeaturedCaseStudy />
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Our work"
            title="Real projects, real outcomes"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <PortfolioPreview />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="The people behind the work"
            description="A small, senior team — not a rotating cast of subcontractors."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <TeamPreview />
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we hear a lot"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <FAQ />
          </div>
        </Container>
      </Section>

      <Section>
        <CtaBanner />
      </Section>
    </>
  );
}
