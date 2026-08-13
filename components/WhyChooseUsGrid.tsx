import { values } from "@/lib/values";
import { getIcon } from "@/lib/icon-map";
import { IconTile } from "@/components/ui/IconTile";
import { FadeIn } from "@/components/ui/FadeIn";

export function WhyChooseUsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {values.map((value, index) => {
        const Icon = getIcon(value.icon);
        return (
          <FadeIn key={value.title} delay={(index % 4) * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6">
              <IconTile icon={Icon} />
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {value.description}
              </p>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
