"use client";

import { useState, type FormEvent } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export function NotifyForm() {
  const [submitted, setSubmitted] = useState(false);

  // TODO: This is UI-only for now — it does not call an API route or store
  // the email anywhere. Wire this up to a real subscriber list (e.g. a
  // Next.js route handler + email provider) before relying on it to
  // actually collect signups.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex items-center justify-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-5 py-3.5 text-sm font-medium text-brand-700">
        <CheckCircle2 className="size-4" />
        You&rsquo;re on the list — we&rsquo;ll let you know when we publish.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <div className="relative flex-1">
        <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" />
        <input
          type="email"
          required
          placeholder="you@example.com"
          aria-label="Email address"
          className="w-full rounded-full border border-border bg-surface py-3.5 pl-11 pr-4 text-sm text-foreground outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
      >
        Notify me
      </button>
    </form>
  );
}
