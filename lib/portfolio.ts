export type CaseStudy = {
  slug: string;
  client: string;
  categories: ("Web Design" | "Branding" | "Healthcare" | "E-commerce")[];
  summary: string;
  /** A verified, quantified outcome — only set this when there's a real number behind it. */
  metric?: { value: string; label: string };
  /** A short qualitative outcome tag for projects without a measured number yet. */
  highlight?: string;
  /** Path under /public to a real screenshot of the live client site — never a stock or invented image. */
  image?: string;
  /** Path under /public to the client's real logo, cropped from their live site — never a stock or invented mark. */
  logo?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "sand-born",
    client: "Sand Born",
    categories: ["Web Design"],
    summary:
      "We redesigned and restructured the Sand Born website layout from the ground up, reorganizing navigation and page flow to deliver a significantly cleaner user experience. The result is a site that's easier to browse and easier to trust.",
    highlight: "Full navigation & UX overhaul",
  },
  {
    slug: "meuraki",
    client: "Meuraki.com",
    categories: ["Web Design", "E-commerce"],
    summary:
      "A full redesign paired with focused SEO work gave Meuraki.com a faster, more coherent shopping experience. Within three months of launch, the site saw 25% growth in visitors.",
    metric: { value: "+25%", label: "visitor growth in 3 months" },
    image: "/case-studies/meuraki.png",
    logo: "/brand/meuraki-logo.png",
  },
  {
    slug: "equipoinfra-solutions",
    client: "Equipoinfra Solutions",
    categories: ["Branding", "Web Design"],
    summary:
      "We led a full rebrand for Equipoinfra Solutions alongside a brand-new website build, giving the company a cohesive visual identity and a site that reflects its position in the infrastructure space.",
    highlight: "Full rebrand + new site",
    image: "/case-studies/equipoinfra.png",
    logo: "/brand/equipoinfra-logo.png",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export const portfolioCategories = [
  "Web Design",
  "Branding",
  "Healthcare",
  "E-commerce",
] as const;
