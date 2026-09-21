import { values } from "@/lib/values";
import { getIcon } from "@/lib/icon-map";
import { IconTile } from "@/components/ui/IconTile";
import { FadeIn } from "@/components/ui/FadeIn";

export function WhyChooseUsGrid() {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
      {values.map((value, index) => {
        const Icon = getIcon(value.icon);
        return (
          <FadeIn key={value.title} delay={(index % 4) * 0.06}>
            <div className="flex items-start gap-4 border-t border-white/10 pt-6">
              <IconTile icon={Icon} tone="inverted" />
              <div>
                <h3 className="text-base font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                  {value.description}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-white/45">
                  {value.proof}
                </p>
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
