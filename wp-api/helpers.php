<?php
/**
 * Shared response, formatting, and lookup helpers used by every endpoint.
 * Errors are logged server-side and returned to the client as a generic
 * message only — never leak database details in an HTTP response.
 */

require_once __DIR__ . '/config.php';

function send_cors_headers(): void
{
    header('Access-Control-Allow-Origin: ' . ALLOWED_ORIGIN);
    header('Access-Control-Allow-Methods: GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json; charset=utf-8');

    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}

function json_response($data, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function json_error(string $message, int $status = 400): void
{
    json_response(['error' => $message], $status);
}

/**
 * Plain-text excerpt for listing cards. Strips tags/entities and the
 * trailing "[&hellip;]" marker WordPress leaves on auto-generated excerpts.
 */
function clean_excerpt(string $html, int $maxLength = 200): string
{
    $text = html_entity_decode(strip_tags($html), ENT_QUOTES);
    $text = preg_replace('/\s+/', ' ', $text);
    $text = trim(preg_replace('/\[&hellip;\]\s*$/', '', $text));

    if (mb_strlen($text) > $maxLength) {
        $text = mb_substr($text, 0, $maxLength);
        $text = trim(preg_replace('/\s+\S*$/', '', $text)) . '…';
    }

    return $text;
}

/**
 * Turns raw post_content into renderable HTML without going through
 * WordPress's own rendering pipeline (we're reading the DB directly, so
 * wpautop() and block rendering never ran).
 *
 * - Gutenberg blocks already store rendered HTML between their comment
 *   markers, so stripping just the `<!-- wp:... -->` comments is enough
 *   for the common core blocks (paragraph, heading, image, list, quote).
 * - Classic-editor plain text (blank-line-separated paragraphs, no HTML)
 *   gets a lightweight wpautop-style paragraph wrap.
 *
 * Complex/dynamic blocks (galleries, embeds, columns, reusable blocks,
 * shortcodes) are NOT specially handled — if your posts rely on those,
 * WordPress's own REST API (`/wp-json/wp/v2/posts`, `content.rendered`)
 * will render them correctly where this lightweight version won't.
 */
function format_post_content(string $content): string
{
    $content = preg_replace('/<!--\s*\/?wp:[^>]*-->/', '', $content);
    $content = trim($content);

    $hasBlockHtml = preg_match('/<(p|div|h[1-6]|ul|ol|blockquote|figure|table)[\s>]/i', $content);

    if ($content !== '' && !$hasBlockHtml) {
        $paragraphs = preg_split('/\n\s*\n/', $content);
        $wrapped = array_map(function ($paragraph) {
            $paragraph = trim($paragraph);
            if ($paragraph === '') {
                return '';
            }
            return '<p>' . nl2br(htmlspecialchars($paragraph, ENT_QUOTES)) . '</p>';
        }, $paragraphs);
        $content = implode("\n", array_filter($wrapped));
    }

    return $content;
}

function get_featured_image(PDO $pdo, int $postId): ?string
{
    $prefix = WP_DB_PREFIX;
    $stmt = $pdo->prepare("
        SELECT p2.guid
        FROM {$prefix}postmeta pm
        JOIN {$prefix}posts p2 ON p2.ID = pm.meta_value
        WHERE pm.post_id = :postId AND pm.meta_key = '_thumbnail_id'
        LIMIT 1
    ");
    $stmt->execute(['postId' => $postId]);
    $row = $stmt->fetch();

    return $row['guid'] ?? null;
}

function get_categories(PDO $pdo, int $postId): array
{
    $prefix = WP_DB_PREFIX;
    $stmt = $pdo->prepare("
        SELECT t.name, t.slug
        FROM {$prefix}term_relationships tr
        JOIN {$prefix}term_taxonomy tt ON tt.term_taxonomy_id = tr.term_taxonomy_id
        JOIN {$prefix}terms t ON t.term_id = tt.term_id
        WHERE tr.object_id = :postId AND tt.taxonomy = 'category'
        ORDER BY t.name ASC
    ");
    $stmt->execute(['postId' => $postId]);

    return $stmt->fetchAll();
}

function get_author_name(PDO $pdo, int $authorId): string
{
    $prefix = WP_DB_PREFIX;
    $stmt = $pdo->prepare("SELECT display_name FROM {$prefix}users WHERE ID = :id LIMIT 1");
    $stmt->execute(['id' => $authorId]);
    $row = $stmt->fetch();

    return $row['display_name'] ?? '';
}

function format_post_summary(PDO $pdo, array $row): array
{
    return [
        'id' => (int) $row['ID'],
        'slug' => $row['post_name'],
        'title' => html_entity_decode($row['post_title'], ENT_QUOTES),
        'excerpt' => clean_excerpt($row['post_excerpt'] !== '' ? $row['post_excerpt'] : $row['post_content']),
        'date' => $row['post_date'],
        'featuredImage' => get_featured_image($pdo, (int) $row['ID']),
        'author' => get_author_name($pdo, (int) $row['post_author']),
        'categories' => array_column(get_categories($pdo, (int) $row['ID']), 'name'),
    ];
}
