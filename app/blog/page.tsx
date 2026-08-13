import type { Metadata } from "next";
import { Palette, TrendingUp, ShoppingCart, Sparkles } from "lucide-react";
import { NotifyForm } from "@/components/blog/NotifyForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { GridPattern } from "@/components/ui/GridPattern";
import { Blob } from "@/components/ui/Blob";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights and resources on web design, SEO, and ecommerce from HanuiT Solutions — new articles coming soon.",
};

const topics = [
  {
    icon: Palette,
    title: "Web design",
    description: "Practical breakdowns of what makes a website convert.",
  },
  {
    icon: TrendingUp,
    title: "SEO",
    description: "Real strategies for ranking and getting found online.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce",
    description: "Lessons on building stores customers actually buy from.",
  },
];

export default function BlogPage() {
  return (
    <Section className="relative overflow-hidden bg-mesh">
      <GridPattern className="opacity-60" />
      <Blob tone="warm" className="-right-24 top-10 h-72 w-72" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-white/70 text-brand-600 shadow-sm backdrop-blur-sm">
            <Sparkles className="size-6" />
          </span>
          <span className="mt-5 inline-flex items-center rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 backdrop-blur-sm">
            Insights & Resources
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            New articles coming soon
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            We&rsquo;re building out a library of practical, no-fluff writing on
            web design, SEO, and ecommerce — the same thinking we bring to
            client projects. Leave your email and we&rsquo;ll let you know the
            moment we publish.
          </p>

          <div className="mx-auto mt-8 max-w-md">
            <NotifyForm />
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-2xl border border-border bg-surface/80 p-6 text-center backdrop-blur-sm"
            >
              <span className="mx-auto flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <topic.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-foreground">
                {topic.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted">{topic.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
