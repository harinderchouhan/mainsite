// Lightweight, dependency-free helpers for formatting rendered WordPress
// post HTML — no full HTML parser, just targeted regex on well-formed
// block content (matches the same "lightweight approximation" approach
// used by wp-api/helpers.php on the PHP side).

export type TocItem = { id: string; text: string };

function slugifyHeading(text: string): string {
  return (
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "section"
  );
}

/**
 * Injects an `id` attribute into every top-level `<h2>` in the given HTML
 * (for anchor links) and returns a table of contents built from them.
 */
export function addHeadingIdsAndExtractToc(html: string): {
  html: string;
  toc: TocItem[];
} {
  const toc: TocItem[] = [];
  const usedSlugs = new Map<string, number>();

  const withIds = html.replace(
    /<h2([^>]*)>([\s\S]*?)<\/h2>/gi,
    (match, attrs: string, inner: string) => {
      const text = inner.replace(/<[^>]*>/g, "").trim();
      if (!text) return match;

      const base = slugifyHeading(text);
      const seen = usedSlugs.get(base) ?? 0;
      usedSlugs.set(base, seen + 1);
      const id = seen > 0 ? `${base}-${seen}` : base;

      toc.push({ id, text });
      return `<h2${attrs} id="${id}">${inner}</h2>`;
    }
  );

  return { html: withIds, toc };
}

/** Rough reading time in whole minutes, based on a 200 words/minute pace. */
export function estimateReadingTime(html: string): number {
  const words = html
    .replace(/<[^>]*>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
