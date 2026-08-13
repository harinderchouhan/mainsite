// Lucide-react no longer ships brand/logo icons, so these small social marks
// are hand-drawn inline SVGs — still zero external image/icon dependencies.

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.34C16.3 4.24 15.34 4.15 14.22 4.15c-2.34 0-3.94 1.43-3.94 4.05v2.3H7.77v3h2.51V21h3.22Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 8.5H4V20h2.94V8.5ZM5.47 4c-1 0-1.72.7-1.72 1.6 0 .88.7 1.6 1.68 1.6h.02c1.02 0 1.72-.72 1.72-1.6C7.15 4.7 6.47 4 5.47 4ZM20 13.3c0-3-1.6-4.4-3.74-4.4-1.72 0-2.49.95-2.92 1.61V8.5H10.4c.04.85 0 11.5 0 11.5h2.94v-6.42c0-.34.02-.68.12-.93.28-.68.9-1.4 1.96-1.4 1.38 0 1.93 1.06 1.93 2.6V20H20v-6.7Z" />
    </svg>
  );
}
