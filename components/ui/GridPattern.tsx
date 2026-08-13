import { cn } from "@/lib/utils";

/**
 * Subtle dot-grid background pattern rendered as inline SVG.
 * No external image assets — everything is code-generated.
 */
export function GridPattern({ className }: { className?: string }) {
  const id = "grid-pattern-dots";
  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    >
      <defs>
        <pattern id={id} width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" className="fill-brand-300/40" />
        </pattern>
        <radialGradient id="grid-fade" cx="50%" cy="0%" r="75%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="grid-mask">
          <rect width="100%" height="100%" fill="url(#grid-fade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} mask="url(#grid-mask)" />
    </svg>
  );
}
