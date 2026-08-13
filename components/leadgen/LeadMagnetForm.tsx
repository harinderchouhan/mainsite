"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Download, AlertCircle } from "lucide-react";
import { leadMagnet } from "@/lib/lead-magnet";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function LeadMagnetForm({
  source,
  compact = false,
}: {
  source: string;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      source,
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div>
        <div className="flex items-center gap-2 text-brand-700">
          <CheckCircle2 className="size-5 shrink-0" />
          <p className="text-sm font-semibold">
            Here&rsquo;s your checklist, {leadMagnet.items.length} points to
            check on your own site:
          </p>
        </div>
        <ul className={cn("mt-4 space-y-2.5", compact && "mt-3 space-y-2")}>
          {leadMagnet.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-3", compact ? "space-y-3" : "space-y-4")}>
      <div className={cn("grid gap-3", !compact && "sm:grid-cols-2")}>
        <input
          name="name"
          type="text"
          required
          minLength={2}
          placeholder="Your name"
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        />
      </div>

      {status === "error" ? (
        <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm text-red-700">
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Download className="size-4" />
            Get the free checklist
          </>
        )}
      </button>
      <p className="text-center text-xs text-muted">
        No spam. We&rsquo;ll never share your email.
      </p>
    </form>
  );
}
