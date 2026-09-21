// Fetches blog posts directly from WordPress's own built-in REST API
// (https://developer.wordpress.org/rest-api/) at WP_SITE_URL — no custom
// backend needs to be deployed. Every function here fails soft — if
// WP_SITE_URL isn't set, or the request fails, callers get null/empty
// instead of a thrown error, so pages can fall back to a "coming soon"
// state instead of crashing.

export type WpPostSummary = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  featuredImage: string | null;
  author: string;
  categories: string[];
};

export type WpPost = WpPostSummary & {
  content: string;
  modified: string;
};

type WpPostsResponse = {
  posts: WpPostSummary[];
  total: number;
  totalPages: number;
  page: number;
  perPage: number;
};

type RestTerm = { id: number; name: string; taxonomy: string };

type RestPost = {
  id: number;
  slug: string;
  date: string;
  modified: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    author?: { name: string }[];
    "wp:featuredmedia"?: { source_url: string }[];
    "wp:term"?: RestTerm[][];
  };
};

function getSiteUrl(): string | null {
  const url = process.env.WP_SITE_URL;
  return url ? url.replace(/\/$/, "") : null;
}

function stripHtml(html: string): string {
  return decodeEntities(html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim());
}

function decodeEntities(text: string): string {
  return text
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&hellip;|&#8230;/g, "…")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function toSummary(post: RestPost): WpPostSummary {
  const embedded = post._embedded;
  const categories =
    embedded?.["wp:term"]
      ?.flat()
      .filter((term) => term.taxonomy === "category")
      .map((term) => decodeEntities(term.name)) ?? [];

  return {
    id: post.id,
    slug: post.slug,
    title: decodeEntities(post.title.rendered),
    excerpt: stripHtml(post.excerpt.rendered),
    date: post.date,
    featuredImage: embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null,
    author: embedded?.author?.[0]?.name ?? "HanuiT Solutions",
    categories,
  };
}

async function resolveCategoryId(base: string, slug: string): Promise<number | null> {
  try {
    const res = await fetch(
      `${base}/wp-json/wp/v2/categories?slug=${encodeURIComponent(slug)}`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) return null;
    const categories = (await res.json()) as { id: number }[];
    return categories[0]?.id ?? null;
  } catch {
    return null;
  }
}

export async function getWpPosts(options: {
  page?: number;
  perPage?: number;
  search?: string;
  category?: string;
} = {}): Promise<WpPostsResponse | null> {
  const base = getSiteUrl();
  if (!base) return null;

  const page = options.page ?? 1;
  const perPage = options.perPage ?? 10;

  const params = new URLSearchParams();
  params.set("_embed", "1");
  params.set("page", String(page));
  params.set("per_page", String(perPage));
  if (options.search) params.set("search", options.search);
  if (options.category) {
    const categoryId = await resolveCategoryId(base, options.category);
    if (categoryId) params.set("categories", String(categoryId));
  }

  try {
    const res = await fetch(`${base}/wp-json/wp/v2/posts?${params.toString()}`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;

    const posts = (await res.json()) as RestPost[];
    const total = Number(res.headers.get("X-WP-Total") ?? posts.length);
    const totalPages = Number(res.headers.get("X-WP-TotalPages") ?? 1);

    return {
      posts: posts.map(toSummary),
      total,
      totalPages,
      page,
      perPage,
    };
  } catch {
    return null;
  }
}

export async function getWpPost(slug: string): Promise<WpPost | null> {
  const base = getSiteUrl();
  if (!base) return null;

  try {
    const res = await fetch(
      `${base}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed=1`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) return null;

    const posts = (await res.json()) as RestPost[];
    const post = posts[0];
    if (!post) return null;

    return {
      ...toSummary(post),
      content: post.content.rendered,
      modified: post.modified,
    };
  } catch {
    return null;
  }
}
