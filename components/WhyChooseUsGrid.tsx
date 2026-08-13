import { values } from "@/lib/values";
import { getIcon } from "@/lib/icon-map";
import { IconTile } from "@/components/ui/IconTile";

export function WhyChooseUsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {values.map((value) => {
        const Icon = getIcon(value.icon);
        return (
          <div
            key={value.title}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <IconTile icon={Icon} />
            <h3 className="mt-4 text-base font-semibold text-foreground">
              {value.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {value.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
