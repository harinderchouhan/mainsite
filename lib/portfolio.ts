export type CaseStudy = {
  slug: string;
  client: string;
  categories: ("Web Design" | "Branding" | "Healthcare" | "E-commerce")[];
  summary: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "sand-born",
    client: "Sand Born",
    categories: ["Web Design"],
    summary:
      "We redesigned and restructured the Sand Born website layout from the ground up, reorganizing navigation and page flow to deliver a significantly cleaner user experience. The result is a site that's easier to browse and easier to trust.",
  },
  {
    slug: "meuraki",
    client: "Meuraki.com",
    categories: ["Web Design", "E-commerce"],
    summary:
      "A full redesign paired with focused SEO work gave Meuraki.com a faster, more coherent shopping experience. Within three months of launch, the site saw 25% growth in visitors.",
  },
  {
    slug: "equipoinfra-solutions",
    client: "Equipoinfra Solutions",
    categories: ["Branding", "Web Design"],
    summary:
      "We led a full rebrand for Equipoinfra Solutions alongside a brand-new website build, giving the company a cohesive visual identity and a site that reflects its position in the infrastructure space.",
  },
];

export const portfolioCategories = [
  "Web Design",
  "Branding",
  "Healthcare",
  "E-commerce",
] as const;
