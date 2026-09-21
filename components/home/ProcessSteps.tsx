import { Compass, Palette, Code2, Rocket, type LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

type Step = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
};

const steps: Step[] = [
  {
    number: "01",
    icon: Compass,
    title: "Discover & plan",
    description:
      "We start with your business, your customers, and your goals — then map out what the site actually needs to do before any design work starts.",
    details: [
      "Business, competitor, and audience review",
      "Goals and success criteria defined together",
      "Site map and content plan drafted",
    ],
  },
  {
    number: "02",
    icon: Palette,
    title: "Design",
    description:
      "We design a distinct, on-brand look built around real content and structure, not a generic template dropped in and reskinned.",
    details: [
      "Wireframes before any visual design",
      "Typography, color, and imagery direction",
      "Mobile-first layouts reviewed with you",
    ],
  },
  {
    number: "03",
    icon: Code2,
    title: "Build & test",
    description:
      "We develop in structured stages with regular check-ins, then test across devices and browsers before anything goes live.",
    details: [
      "Structured build with regular check-ins",
      "Cross-device and cross-browser testing",
      "Staging environment before anything goes live",
    ],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & grow",
    description:
      "We deploy, hand over a site you can actually manage, and stick around for ongoing support, SEO, and improvements.",
    details: [
      "Guided handover of your content management system",
      "Launch monitoring and post-launch fixes",
      "Ongoing support, SEO, and improvements available",
    ],
  },
];

export function ProcessSteps() {
  return (
    <div>
      {/* Mobile / tablet: vertical timeline */}
      <div className="relative space-y-10 pl-10 lg:hidden">
        <div aria-hidden className="absolute bottom-2 left-4 top-2 w-px bg-border" />
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <FadeIn key={step.number} delay={index * 0.08} className="relative">
              <span className="absolute -left-10 top-0 flex size-8 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white ring-4 ring-background">
                {step.number}
              </span>
              <div className="flex items-center gap-2">
                <Icon className="size-4 text-brand-500" />
                <h3 className="text-base font-semibold text-foreground">
                  {step.title}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
              <ul className="mt-3 space-y-1.5">
                {step.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-xs text-muted">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-brand-400" />
                    {detail}
                  </li>
                ))}
              </ul>
            </FadeIn>
          );
        })}
      </div>

      {/* Desktop: numbered horizontal axis */}
      <div className="relative hidden lg:grid lg:grid-cols-4 lg:gap-10">
        <div aria-hidden className="absolute left-0 right-0 top-8 h-px bg-border" />
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <FadeIn key={step.number} delay={index * 0.08} className="relative">
              <span className="relative z-10 flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-xl font-bold text-white shadow-md shadow-brand-900/20 ring-4 ring-background">
                {step.number}
              </span>
              <div className="mt-5 flex items-center gap-2">
                <Icon className="size-4 shrink-0 text-brand-500" />
                <h3 className="text-base font-semibold text-foreground">
                  {step.title}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
              <ul className="mt-3 space-y-1.5">
                {step.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-xs text-muted">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-brand-400" />
                    {detail}
                  </li>
                ))}
              </ul>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
