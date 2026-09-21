import type { IconName } from "@/lib/icon-map";

export type IncludedItem = {
  icon: IconName;
  title: string;
  description: string;
};

export const whatsIncluded: IncludedItem[] = [
  {
    icon: "Palette",
    title: "A website built around your business",
    description:
      "Custom-designed for pest control companies and dental practices — not a generic template every competitor down the street is also using.",
  },
  {
    icon: "Phone",
    title: "Click-to-call & online booking",
    description:
      "Make it effortless for a homeowner or patient to reach you or book an appointment — right from their phone.",
  },
  {
    icon: "MapPin",
    title: "Show up in local search",
    description:
      "Local SEO and Google Business Profile setup so you show up when someone searches \"pest control near me\" or \"dentist near me.\"",
  },
  {
    icon: "Star",
    title: "Reviews & trust signals",
    description:
      "Real Google reviews and trust signals built into your site, so new visitors feel confident before they even call.",
  },
  {
    icon: "Rocket",
    title: "Fast, mobile-first site",
    description:
      "Most searches happen on a phone, often under time pressure. Your site loads fast and works perfectly on every device.",
  },
  {
    icon: "Headset",
    title: "Support that doesn't disappear",
    description:
      "Ongoing updates, fixes, and improvements after launch — a real team you can reach, not a ticket queue.",
  },
];
