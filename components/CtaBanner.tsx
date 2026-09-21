import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GridPattern } from "@/components/ui/GridPattern";

export function CtaBanner({
  title = "Ready to grow your business online?",
  description = "Tell us about your project and we'll put together a free, no-obligation quote.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Container>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 px-6 py-10 text-center sm:px-16 sm:py-20">
        <GridPattern className="opacity-20" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-lg">
            {description}
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <Button href="/contact" size="lg" variant="secondary" icon={ArrowRight}>
              Get Free Quote
            </Button>
            <Button href="tel:+917082069620" size="lg" variant="outline" icon={Phone} iconPosition="left">
              +91 7082069620
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
