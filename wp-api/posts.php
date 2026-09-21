<?php
/**
 * GET /wp-api/posts.php
 *
 * Paginated list of published posts, newest first.
 *
 * Query params (all optional):
 *   page      default 1
 *   per_page  default 10, max 50
 *   search    matches title or content
 *   category  filter by category slug
 *
 * Example: /wp-api/posts.php?page=1&per_page=6
 */

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/helpers.php';

send_cors_headers();

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'GET') {
    json_error('Only GET requests are supported.', 405);
}

try {
    $pdo = wp_db();
} catch (Throwable $e) {
    error_log('WP API DB connection failed: ' . $e->getMessage());
    json_error('Unable to connect to the database.', 500);
}

$page = max(1, (int) ($_GET['page'] ?? 1));
$perPage = max(1, min((int) ($_GET['per_page'] ?? 10), 50));
$offset = ($page - 1) * $perPage;

$search = trim((string) ($_GET['search'] ?? ''));
$categorySlug = trim((string) ($_GET['category'] ?? ''));

$prefix = WP_DB_PREFIX;
$where = ["p.post_type = 'post'", "p.post_status = 'publish'"];
$params = [];

if ($search !== '') {
    $where[] = '(p.post_title LIKE :search OR p.post_content LIKE :search)';
    $params['search'] = '%' . $search . '%';
}

$joinCategory = '';
if ($categorySlug !== '') {
    $joinCategory = "
        JOIN {$prefix}term_relationships tr ON tr.object_id = p.ID
        JOIN {$prefix}term_taxonomy tt ON tt.term_taxonomy_id = tr.term_taxonomy_id AND tt.taxonomy = 'category'
        JOIN {$prefix}terms t ON t.term_id = tt.term_id AND t.slug = :categorySlug
    ";
    $params['categorySlug'] = $categorySlug;
}

$whereSql = implode(' AND ', $where);

try {
    $countStmt = $pdo->prepare("
        SELECT COUNT(DISTINCT p.ID)
        FROM {$prefix}posts p
        {$joinCategory}
        WHERE {$whereSql}
    ");
    $countStmt->execute($params);
    $total = (int) $countStmt->fetchColumn();

    $stmt = $pdo->prepare("
        SELECT DISTINCT p.ID, p.post_title, p.post_excerpt, p.post_content, p.post_date, p.post_name, p.post_author
        FROM {$prefix}posts p
        {$joinCategory}
        WHERE {$whereSql}
        ORDER BY p.post_date DESC
        LIMIT :limit OFFSET :offset
    ");
    foreach ($params as $key => $value) {
        $stmt->bindValue(':' . $key, $value);
    }
    $stmt->bindValue(':limit', $perPage, PDO::PARAM_INT);
    $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
    $stmt->execute();
    $rows = $stmt->fetchAll();
} catch (Throwable $e) {
    error_log('WP API posts query failed: ' . $e->getMessage());
    json_error('Unable to fetch posts.', 500);
}

$posts = array_map(fn(array $row) => format_post_summary($pdo, $row), $rows);

json_response([
    'posts' => $posts,
    'total' => $total,
    'totalPages' => $perPage > 0 ? (int) ceil($total / $perPage) : 0,
    'page' => $page,
    'perPage' => $perPage,
]);
