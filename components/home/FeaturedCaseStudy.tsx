import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { getCaseStudy } from "@/lib/portfolio";
import { getWpCaseStudies } from "@/lib/wp-case-studies";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export async function FeaturedCaseStudy() {
  const project = getCaseStudy("meuraki");
  if (!project || !project.metric) return null;

  const live = await getWpCaseStudies({ search: "meuraki", perPage: 1 });
  const liveSlug = live?.caseStudies[0]?.slug;
  const href = liveSlug ? `/portfolio/${liveSlug}` : "/portfolio";

  return (
    <Container>
      <FadeIn>
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-surface shadow-sm lg:grid-cols-2">
          <div className="relative min-h-56 sm:min-h-72 lg:min-h-[26rem]">
            {project.image ? (
              <Image
                src={project.image}
                alt={`Screenshot of the live ${project.client} website`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-brand-600 to-brand-800" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-900/0 to-transparent" />

            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                <TrendingUp className="size-5" />
              </span>
              <div>
                <div className="font-display text-xl font-bold leading-none text-foreground">
                  {project.metric.value}
                </div>
                <p className="mt-1 text-xs text-muted">{project.metric.label}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-12 lg:p-14">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
              Featured case study
            </span>
            <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-foreground sm:mt-5 sm:text-3xl">
              How {project.client} grew visitors by{" "}
              {project.metric.value.replace("+", "")} in three months
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
              {project.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
              {project.categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted"
                >
                  {cat}
                </span>
              ))}
            </div>
            <Link
              href={href}
              className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-700"
            >
              {liveSlug ? "Read the full case study" : "See more of our work"}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}
