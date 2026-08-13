import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { founders } from "@/lib/team";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";

export function TeamPreview() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {founders.map((person, index) => (
        <FadeIn key={person.name} delay={index * 0.08}>
          <Card className="h-full text-center">
            <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-lg font-bold text-white">
              {person.initials}
            </span>
            <h3 className="mt-4 text-base font-semibold text-foreground">
              {person.name}
            </h3>
            <p className="text-sm font-medium text-brand-700">
              {person.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {person.bio}
            </p>
          </Card>
        </FadeIn>
      ))}
      <FadeIn delay={founders.length * 0.08}>
        <Link
          href="/about"
          className="flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-brand-300 bg-brand-50/50 p-6 text-center transition-colors hover:bg-brand-50"
        >
          <ArrowRight className="size-6 text-brand-600" />
          <span className="text-sm font-semibold text-brand-700">
            Meet the full team
          </span>
        </Link>
      </FadeIn>
    </div>
  );
}
