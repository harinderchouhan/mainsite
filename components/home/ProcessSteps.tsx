import { Compass, Palette, Code2, Rocket } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Discover & plan",
    description:
      "We start with your business, your customers, and your goals — then map out what the site actually needs to do before any design work starts.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design",
    description:
      "We design a distinct, on-brand look built around real content and structure, not a generic template dropped in and reskinned.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build & test",
    description:
      "We develop in structured stages with regular check-ins, then test across devices and browsers before anything goes live.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & grow",
    description:
      "We deploy, hand over a site you can actually manage, and stick around for ongoing support, SEO, and improvements.",
  },
];

export function ProcessSteps() {
  return (
    <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div
        aria-hidden
        className="absolute left-0 right-0 top-11 hidden h-px bg-border lg:block"
      />
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <FadeIn key={step.number} delay={index * 0.08} className="relative">
            <div className="flex flex-col items-start">
              <div className="relative z-10 flex size-[4.5rem] items-center justify-center rounded-2xl border border-border bg-surface shadow-[0_1px_2px_rgba(23,22,43,0.04)]">
                <Icon className="size-6 text-brand-600" />
                <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-brand-600 text-[11px] font-bold text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
