import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services";
import { getIcon } from "@/lib/icon-map";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";

export function ServiceLinkCard({ service }: { service: Service }) {
  const Icon = getIcon(service.icon);
  return (
    <Link href={`/services/${service.slug}`} className="group">
      <Card className="h-full transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-brand-900/5">
        <IconTile icon={Icon} />
        <h3 className="mt-4 text-base font-semibold text-foreground">
          {service.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {service.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
          Learn more
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Card>
    </Link>
  );
}
