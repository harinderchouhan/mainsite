import { Hero } from "@/components/home/Hero";
import { StatsBand } from "@/components/home/StatsBand";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Pricing } from "@/components/home/Pricing";
import { FeaturedCaseStudy } from "@/components/home/FeaturedCaseStudy";
import { FAQ } from "@/components/home/FAQ";
import { WhatsIncluded } from "@/components/home/WhatsIncluded";
import { VideoTestimonials } from "@/components/home/VideoTestimonials";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import { CtaBanner } from "@/components/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />

      <Section className="!pt-10">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="Hear it from real clients"
            description="No scripts, no actors — just business owners talking about what changed after we built their site."
            align="center"
            className="mx-auto"
          />
          <div className="mt-8 sm:mt-10">
            <VideoTestimonials />
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Our work"
            title="Results / Case Studies"
            description="Real client websites and real outcomes — not mockups."
            align="center"
            className="mx-auto"
          />
        </Container>
        <div className="mt-8 sm:mt-12">
          <FeaturedCaseStudy />
        </div>
        <Container>
          <div className="mt-8 sm:mt-12">
            <PortfolioPreview />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Sound familiar?"
            title="The Problem"
            description="Most pest control and dental practice owners we talk to are in one of these two columns. Here's what changes when you move to the second one."
            align="center"
            className="mx-auto"
          />
          <div className="mt-8 sm:mt-12">
            <ProblemSolution />
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="What's Included"
            description="No agency jargon — here's exactly what you get, in plain terms."
            align="center"
            className="mx-auto"
          />
          <div className="mt-8 sm:mt-12">
            <WhatsIncluded />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="How It Works"
            description="No black boxes. Whether you run a pest control company or a dental practice, you'll always know what stage your project is at and what's coming next."
            align="center"
            className="mx-auto"
          />
          <div className="mt-8 sm:mt-14">
            <ProcessSteps />
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
          <div className="mt-8 sm:mt-14">
            <Pricing />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we hear a lot"
            description="From pest control operators and dental practice owners considering a new website."
            align="center"
            className="mx-auto"
          />
          <div className="mt-8 sm:mt-12">
            <FAQ />
          </div>
        </Container>
      </Section>

      <Section>
        <CtaBanner
          title="Ready to grow your pest control or dental business online?"
          description="Tell us about your business and we'll put together a free, no-obligation quote — built specifically for pest control companies and dental practices."
        />
      </Section>
    </>
  );
}
