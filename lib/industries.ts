import type { IconName } from "@/lib/icon-map";

export type Industry = {
  slug: string;
  name: string;
  icon: IconName;
  tagline: string;
};

export const industries: Industry[] = [
  {
    slug: "pest-control",
    name: "Pest Control",
    icon: "Bug",
    tagline: "Pest control & extermination companies",
  },
  {
    slug: "dental-clinics",
    name: "Dental Clinics",
    icon: "Smile",
    tagline: "Dental practices & orthodontic clinics",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
