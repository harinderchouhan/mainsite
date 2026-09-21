# HanuiT Solutions — WordPress Content API

A small, self-contained, **read-only** PHP API that queries your WordPress
MySQL database directly (no WordPress core files required at runtime) and
returns published content as JSON — blog posts, and case studies (the
`portfolio-item` custom post type). Built for the Next.js site to consume
for the blog, the portfolio, and their homepage previews.

## What's in this folder

| File                  | Purpose                                                          |
| ---------------------- | ------------------------------------------------------------------ |
| `config.example.php`  | Template for your database credentials — copy, don't edit.       |
| `config.php`           | Your real credentials. **Never commit this to a public repo.**   |
| `db.php`                | Shared PDO database connection.                                  |
| `helpers.php`           | Shared formatting/lookup helpers used by every endpoint.         |
| `posts.php`             | **Public endpoint** — paginated blog post listing.                |
| `post.php`              | **Public endpoint** — a single blog post by slug.                 |
| `case-studies.php`      | **Public endpoint** — paginated case study listing.               |
| `case-study.php`        | **Public endpoint** — a single case study by slug.                |
| `.htaccess`             | Blocks direct access to everything except the public endpoints.  |

## Setup

1. **Upload this folder's contents** to your WordPress hosting — anywhere
   reachable over HTTPS. It does not need to sit inside your WordPress
   install; it only needs network access to the same MySQL database. Two
   common choices:
   - A sibling folder next to `wp-content`, e.g. `public_html/wp-api/`
     (endpoints end up at `https://yourdomain.com/wp-api/posts.php`).
   - The document root of its own subdomain, e.g. `app.yourdomain.com`
     (endpoints end up at `https://app.yourdomain.com/posts.php`) — this
     is HanuiT Solutions' own setup.

2. **Fill in `config.php`** with your real database details — the exact
   same values as in your WordPress `wp-config.php`:
   - `WP_DB_HOST`, `WP_DB_NAME`, `WP_DB_USER`, `WP_DB_PASS`
   - `WP_DB_PREFIX` — check `wp-config.php` for `$table_prefix` (often
     `wp_`, but hosts frequently generate a random one).
   - `ALLOWED_ORIGIN` — leave as `'*'`, or lock it down to your Next.js
     site's exact origin (e.g. `https://www.hanuitsolutions.com`).

3. **Test it** by visiting these URLs directly in a browser (or `curl`) —
   adjust the path to match wherever you uploaded to in step 1:
   ```
   https://app.yourdomain.com/posts.php?per_page=3
   https://app.yourdomain.com/post.php?slug=some-real-post-slug
   ```
   You should get back JSON. If you get a 500 error, check your server's
   PHP error log — it'll have the real database error (the API itself
   never leaks that in its response).

4. **Tell the Next.js site where to find it** — set this environment
   variable in the site's deployment (`.env.local` for local dev, or your
   host's environment variable settings in production):
   ```
   WP_API_BASE_URL=https://app.yourdomain.com
   ```
   Once that's set, the blog listing, single post pages, the portfolio
   listing, single case study pages, and both homepage previews all start
   pulling real content automatically — no other changes needed.

   If you're adding `case-studies.php`/`case-study.php` to a `wp-api`
   folder that's already live from a previous upload, you only need to
   upload those two new files — everything else (config, helpers, db
   connection) is shared and already in place.

## Endpoints

### `GET /posts.php`

Query params (all optional): `page` (default 1), `per_page` (default 10,
capped at 50), `search`, `category` (category slug).

```json
{
  "posts": [
    {
      "id": 123,
      "slug": "seo-vs-geo",
      "title": "SEO vs GEO: How to Stay Visible in the Future of Search",
      "excerpt": "Search is changing rapidly...",
      "date": "2026-08-13 11:36:40",
      "featuredImage": "https://.../image.jpg",
      "author": "Herry Chouhan",
      "categories": ["SEO"]
    }
  ],
  "total": 42,
  "totalPages": 5,
  "page": 1,
  "perPage": 10
}
```

### `GET /post.php?slug=...`

Same shape as one item above, plus `content` (full post HTML) and
`modified`. Returns a 404 JSON error if the slug doesn't exist or isn't
published.

### `GET /case-studies.php`

Same shape as `/posts.php`, but reads from the `portfolio-item` post type
instead of `post`, and the top-level key is `caseStudies` instead of
`posts`. Query params: `page`, `per_page`, `search` — no `category` param,
since this post type has no taxonomies registered.

### `GET /case-study.php?slug=...`

Same shape as `/post.php`, for a single case study. No `categories` field
(same reason as above).

## Security notes

- Every query is parameterized (PDO prepared statements) — no raw string
  concatenation of user input into SQL, anywhere.
- Every endpoint is hard-coded to its own `post_type` (`post` or
  `portfolio-item`) `AND post_status = 'publish'` — drafts, pages, and
  other content are never exposed.
- This is **read-only**. There is no write/delete/update endpoint at all.
- Database errors are logged server-side via `error_log()` and never
  echoed back to the client.
- `.htaccess` blocks direct requests to `config.php`, `db.php`, and
  `helpers.php` — only the four public endpoints are reachable.

## A known limitation worth knowing

Because this reads `wp_posts.post_content` directly instead of going
through WordPress's own rendering pipeline, `format_post_content()` in
`helpers.php` does a **lightweight** approximation of what WordPress
normally does automatically: it strips Gutenberg's `<!-- wp:... -->`
comment markers (the HTML between them is usually already valid for core
blocks — paragraphs, headings, images, lists, quotes) and wraps
plain-text classic-editor content in `<p>` tags.

It does **not** handle dynamic blocks, embeds, galleries, columns, or
shortcodes — those will render incorrectly or not at all. If your posts
use those and you start seeing broken formatting, the fix is either to
extend `format_post_content()` for the specific blocks you use, or to
switch that one field to pull from WordPress's own built-in REST API
(`https://yourdomain.com/wp-json/wp/v2/posts/<id>` → `content.rendered`,
which is already enabled and returns fully-rendered HTML) while keeping
everything else here.
