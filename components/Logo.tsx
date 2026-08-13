import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white shadow-sm shadow-brand-600/30">
        H
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-foreground">
        HanuiT<span className="text-brand-600"> Solutions</span>
      </span>
    </span>
  );
}
