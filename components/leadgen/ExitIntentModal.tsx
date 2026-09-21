"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X, Gift } from "lucide-react";
import { leadMagnet } from "@/lib/lead-magnet";
import { LeadMagnetForm } from "@/components/leadgen/LeadMagnetForm";

const STORAGE_KEY = "hanuit_leadmagnet_shown";
const EXCLUDED_PATHS = ["/contact", "/resources/website-growth-checklist"];

export function ExitIntentModal() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (EXCLUDED_PATHS.includes(pathname)) return;
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;

    const pageLoadedAt = Date.now();
    let triggered = false;

    function trigger() {
      if (triggered) return;
      if (Date.now() - pageLoadedAt < 8000) return; // avoid instant firing
      triggered = true;
      sessionStorage.setItem(STORAGE_KEY, "1");
      setOpen(true);
    }

    function onMouseLeave(event: MouseEvent) {
      if (event.clientY <= 0) trigger();
    }

    function onScroll() {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && scrolled / max > 0.65 && Date.now() - pageLoadedAt > 15000) {
        trigger();
      }
    }

    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-md rounded-3xl border border-border bg-background p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-muted hover:bg-brand-50 hover:text-brand-700"
        >
          <X className="size-4" />
        </button>

        <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
          <Gift className="size-6" />
        </span>
        <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-foreground">
          Before you go — grab {leadMagnet.title.toLowerCase()}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {leadMagnet.description}
        </p>

        <div className="mt-5">
          <LeadMagnetForm source="exit-intent-modal" compact />
        </div>
      </div>
    </div>
  );
}
