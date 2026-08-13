import { cn } from "@/lib/utils";

/**
 * Abstract gradient blob shape used for visual interest in place of photography.
 * Pure CSS/SVG — no external image dependency.
 */
export function Blob({
  className,
  tone = "brand",
}: {
  className?: string;
  tone?: "brand" | "warm";
}) {
  const gradientId = tone === "brand" ? "blob-gradient-brand" : "blob-gradient-warm";
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 600"
      className={cn("absolute blur-3xl opacity-60", className)}
    >
      <defs>
        <linearGradient id="blob-gradient-brand" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b78ff" />
          <stop offset="100%" stopColor="#5730f0" />
        </linearGradient>
        <linearGradient id="blob-gradient-warm" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffb488" />
          <stop offset="100%" stopColor="#ff8a4c" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        d="M420.5,320.5Q400,441,279,447.5Q158,454,120.5,332.5Q83,211,192,145.5Q301,80,392,152Q483,224,420.5,320.5Z"
      />
    </svg>
  );
}
