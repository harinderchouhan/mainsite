// Real client websites shown on each /industries/[slug] page, grouped by
// industry slug. Screenshots are real captures of the live sites (see
// public/industries/<slug>/) — never stock or invented images. Sourced
// from the client links listed on the matching niche page on the live
// hanuitsolutions.com site.
//
// Only industries with real, verified entries appear here — pages for
// industries without an entry simply don't render this section.

export type IndustryPortfolioItem = {
  name: string;
  url: string;
  image: string;
};

export const industryPortfolios: Record<string, IndustryPortfolioItem[]> = {
  // No verified pest-control or dental-clinics client sites yet — add
  // entries here once real screenshots exist under public/industries/<slug>/.
};

export function getIndustryPortfolio(slug: string): IndustryPortfolioItem[] {
  return industryPortfolios[slug] ?? [];
}
