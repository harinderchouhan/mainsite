import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { HeroBackground } from "@/components/home/HeroBackground";
import { HeroSlider } from "@/components/home/HeroSlider";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-mesh">
      <HeroBackground />

      <Container className="relative py-20 sm:py-28 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <FadeIn spring>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-700 backdrop-blur-sm">
                <Sparkles className="size-3.5" />
                Specialists in pest control & dental websites
              </span>
            </FadeIn>

            <FadeIn delay={0.1} spring>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Websites that turn searches into{" "}
                <span className="text-gradient">calls and bookings</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2} spring>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl lg:mx-0">
                HanuiT Solutions designs and builds websites for pest control
                companies and dental practices — fast, mobile-first, and
                built to turn an urgent search into a scheduled job or a
                booked appointment.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} spring>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Button href="/contact" size="lg" icon={ArrowRight}>
                  Get Your Free Quote
                </Button>
                <Button href="/portfolio" size="lg" variant="secondary">
                  View Our Work
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} spring>
            <HeroSlider />
          </FadeIn>
        </div>
      </Container>
    </div>
  );
}
