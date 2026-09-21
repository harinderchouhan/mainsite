<?php
/**
 * GET /wp-api/post.php?slug=your-post-slug
 *
 * A single published post by slug, with full content.
 */

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/helpers.php';

send_cors_headers();

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'GET') {
    json_error('Only GET requests are supported.', 405);
}

$slug = trim((string) ($_GET['slug'] ?? ''));
if ($slug === '') {
    json_error('Missing required "slug" parameter.', 400);
}

try {
    $pdo = wp_db();
} catch (Throwable $e) {
    error_log('WP API DB connection failed: ' . $e->getMessage());
    json_error('Unable to connect to the database.', 500);
}

$prefix = WP_DB_PREFIX;

try {
    $stmt = $pdo->prepare("
        SELECT ID, post_title, post_excerpt, post_content, post_date, post_modified, post_name, post_author
        FROM {$prefix}posts
        WHERE post_name = :slug AND post_type = 'post' AND post_status = 'publish'
        LIMIT 1
    ");
    $stmt->execute(['slug' => $slug]);
    $row = $stmt->fetch();
} catch (Throwable $e) {
    error_log('WP API post query failed: ' . $e->getMessage());
    json_error('Unable to fetch post.', 500);
}

if (!$row) {
    json_error('Post not found.', 404);
}

json_response([
    'id' => (int) $row['ID'],
    'slug' => $row['post_name'],
    'title' => html_entity_decode($row['post_title'], ENT_QUOTES),
    'content' => format_post_content($row['post_content']),
    'excerpt' => clean_excerpt($row['post_excerpt'] !== '' ? $row['post_excerpt'] : $row['post_content']),
    'date' => $row['post_date'],
    'modified' => $row['post_modified'],
    'featuredImage' => get_featured_image($pdo, (int) $row['ID']),
    'author' => get_author_name($pdo, (int) $row['post_author']),
    'categories' => array_column(get_categories($pdo, (int) $row['ID']), 'name'),
]);
