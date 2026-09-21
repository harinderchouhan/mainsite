import { techStack } from "@/lib/tech-stack";
import { getIcon } from "@/lib/icon-map";
import { Container } from "@/components/ui/Container";

export function TechStack() {
  return (
    <Container>
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-muted">
        Platforms & tools we build with
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {techStack.map((item) => {
          const Icon = getIcon(item.icon);
          return (
            <span
              key={item.name}
              className="flex items-center gap-2 text-sm font-medium text-foreground/70"
            >
              <Icon className="size-4 text-brand-500" />
              {item.name}
            </span>
          );
        })}
      </div>
    </Container>
  );
}
