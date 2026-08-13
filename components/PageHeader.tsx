import { Container } from "@/components/ui/Container";
import { GridPattern } from "@/components/ui/GridPattern";
import { Blob } from "@/components/ui/Blob";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-mesh", className)}>
      <GridPattern className="opacity-60" />
      <Blob tone="brand" className="-left-24 -top-24 h-72 w-72" />
      <Container className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow ? (
            <span className="inline-flex items-center rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 backdrop-blur-sm">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
