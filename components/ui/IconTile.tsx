import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const toneMap = {
  brand: "bg-brand-50 text-brand-600",
  warm: "bg-warm-soft text-warm",
  dark: "bg-foreground/5 text-foreground",
  inverted: "bg-white/15 text-white",
};

export function IconTile({
  icon: Icon,
  tone = "brand",
  size = "md",
  className,
}: {
  icon: LucideIcon;
  tone?: keyof typeof toneMap;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClasses = {
    sm: "size-9 rounded-lg",
    md: "size-12 rounded-xl",
    lg: "size-14 rounded-2xl",
  };
  const iconSizes = {
    sm: "size-4",
    md: "size-5",
    lg: "size-6",
  };

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center",
        sizeClasses[size],
        toneMap[tone],
        className
      )}
    >
      <Icon className={iconSizes[size]} />
    </div>
  );
}
