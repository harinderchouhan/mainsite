import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_2px_rgba(23,22,43,0.04)]",
        className
      )}
    >
      {children}
    </div>
  );
}
