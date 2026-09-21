import type { Metadata } from "next";
import { Target, Eye } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { WhyChooseUsGrid } from "@/components/WhyChooseUsGrid";
import { CtaBanner } from "@/components/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { StatCard } from "@/components/ui/StatCard";
import { Card } from "@/components/ui/Card";
import { founders } from "@/lib/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "HanuiT Solutions is a digital agency with 12+ years of experience, 1000+ clients served, and 1200+ projects completed. Meet the team behind the work.",
};

const stats = [
  { value: "1000+", label: "Clients served" },
  { value: "12+", label: "Years of experience" },
  { value: "1200+", label: "Projects completed" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About HanuiT Solutions"
        title="A team built to make your website actually work for you"
        description="For over a decade, we've been building websites, online stores, and digital strategies for businesses that want more than a nice-looking page — they want a site that brings in customers."
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Who we are"
                title="Digital solutions, built by people who understand business"
              />
              <p className="mt-6 text-base leading-relaxed text-muted">
                HanuiT Solutions started with a simple idea: a website should
                be judged by the results it produces, not just how it looks
                in a portfolio. Over 12+ years, that idea has taken us across
                dozens of industries — and today it&rsquo;s why we&rsquo;ve chosen to
                focus deeply on two: pest control companies and dental
                practices, building sites, booking flows, and search
                strategies that hold up under real traffic and real
                customers.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Today we&rsquo;re a full-service digital team covering design,
                development, SEO, e-commerce, and WordPress — which means
                clients get one team that understands how all of those
                pieces fit together, instead of stitching together separate
                vendors who don&rsquo;t talk to each other.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Card>
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Target className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                Our mission
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                To give businesses of every size a digital presence that
                genuinely drives growth — through thoughtful design, solid
                engineering, and strategy grounded in real business goals,
                not guesswork.
              </p>
            </Card>
            <Card>
              <span className="flex size-12 items-center justify-center rounded-xl bg-warm-soft text-warm">
                <Eye className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                Our vision
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                To be the long-term digital partner businesses turn to at
                every stage of growth — from a first website to a fully
                scaled online operation.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="The people behind HanuiT Solutions"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:max-w-2xl sm:mx-auto">
            {founders.map((person) => (
              <Card key={person.name} className="text-center">
                <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-lg font-bold text-white">
                  {person.initials}
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {person.name}
                </h3>
                <p className="text-sm font-medium text-brand-700">
                  {person.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {person.bio}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Why clients stay"
            title="What working with us looks like"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <WhyChooseUsGrid />
          </div>
        </Container>
      </Section>

      <Section>
        <CtaBanner />
      </Section>
    </>
  );
}
