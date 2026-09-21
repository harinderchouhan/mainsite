// Fetches case studies (the WordPress "portfolio-item" custom post type)
// from the custom API in /wp-api. Mirrors lib/wp-posts.ts — same fail-soft
// behavior: missing config or a failed request returns null/empty instead
// of throwing, so pages fall back to existing static content instead of
// crashing.

export type WpCaseStudySummary = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  featuredImage: string | null;
  author: string;
};

export type WpCaseStudy = WpCaseStudySummary & {
  content: string;
  modified: string;
};

type WpCaseStudiesResponse = {
  caseStudies: WpCaseStudySummary[];
  total: number;
  totalPages: number;
  page: number;
  perPage: number;
};

function getBaseUrl(): string | null {
  const url = process.env.WP_API_BASE_URL;
  return url ? url.replace(/\/$/, "") : null;
}

export async function getWpCaseStudies(options: {
  page?: number;
  perPage?: number;
  search?: string;
} = {}): Promise<WpCaseStudiesResponse | null> {
  const base = getBaseUrl();
  if (!base) return null;

  const params = new URLSearchParams();
  if (options.page) params.set("page", String(options.page));
  if (options.perPage) params.set("per_page", String(options.perPage));
  if (options.search) params.set("search", options.search);

  try {
    const res = await fetch(`${base}/case-studies.php?${params.toString()}`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    return (await res.json()) as WpCaseStudiesResponse;
  } catch {
    return null;
  }
}

export async function getWpCaseStudy(slug: string): Promise<WpCaseStudy | null> {
  const base = getBaseUrl();
  if (!base) return null;

  try {
    const res = await fetch(`${base}/case-study.php?slug=${encodeURIComponent(slug)}`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    return (await res.json()) as WpCaseStudy;
  } catch {
    return null;
  }
}
