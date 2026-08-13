import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GridPattern } from "@/components/ui/GridPattern";
import { Blob } from "@/components/ui/Blob";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-mesh">
      <GridPattern className="opacity-70" />
      <Blob tone="brand" className="-left-32 -top-24 h-96 w-96" />
      <Blob tone="warm" className="-right-24 top-40 h-80 w-80" />

      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-700 backdrop-blur-sm">
              <Sparkles className="size-3.5" />
              12+ years building for real businesses
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Websites that{" "}
              <span className="text-gradient">grow your business</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              HanuiT Solutions designs, builds, and optimizes websites,
              e-commerce stores, and digital strategies for businesses that
              want more than an online brochure — they want results.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg" icon={ArrowRight}>
                Get Your Free Quote
              </Button>
              <Button href="/portfolio" size="lg" variant="secondary">
                View Our Work
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
}
