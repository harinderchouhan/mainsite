"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Phone, X } from "lucide-react";

export function StickyCtaBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("hanuit_sticky_dismissed") === "1") {
      // Intentionally deferred to an effect (not a lazy useState initializer):
      // sessionStorage is unavailable during SSR, so computing this eagerly
      // would make the client's first render diverge from the server-rendered
      // HTML and trigger a hydration mismatch. Checking post-mount avoids that.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDismissed(true);
      return;
    }

    function onScroll() {
      setVisible(window.scrollY > 500);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || pathname === "/contact") return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 px-4 py-3 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3">
        <a
          href="tel:+917082069620"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-brand-200 px-4 py-2.5 text-sm font-semibold text-brand-700"
        >
          <Phone className="size-4" />
          Call
        </a>
        <Link
          href="/contact"
          className="flex flex-[1.4] items-center justify-center gap-2 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white"
        >
          Get Free Quote
        </Link>
        <button
          type="button"
          aria-label="Dismiss"
          onClick={() => {
            sessionStorage.setItem("hanuit_sticky_dismissed", "1");
            setDismissed(true);
          }}
          className="flex size-9 shrink-0 items-center justify-center rounded-full text-muted"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
}
