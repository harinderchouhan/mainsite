<?php
/**
 * GET /wp-api/case-studies.php
 *
 * Paginated list of published case studies (the "portfolio-item" custom
 * post type), newest first. Same shape and behavior as posts.php, just
 * pointed at a different post_type — no category filter since this post
 * type has no taxonomies registered.
 *
 * Query params (all optional):
 *   page      default 1
 *   per_page  default 10, max 50
 *   search    matches title or content
 *
 * Example: /wp-api/case-studies.php?page=1&per_page=6
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

$prefix = WP_DB_PREFIX;
$where = ["p.post_type = 'portfolio-item'", "p.post_status = 'publish'"];
$params = [];

if ($search !== '') {
    $where[] = '(p.post_title LIKE :search OR p.post_content LIKE :search)';
    $params['search'] = '%' . $search . '%';
}

$whereSql = implode(' AND ', $where);

try {
    $countStmt = $pdo->prepare("SELECT COUNT(*) FROM {$prefix}posts p WHERE {$whereSql}");
    $countStmt->execute($params);
    $total = (int) $countStmt->fetchColumn();

    $stmt = $pdo->prepare("
        SELECT p.ID, p.post_title, p.post_excerpt, p.post_content, p.post_date, p.post_name, p.post_author
        FROM {$prefix}posts p
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
    error_log('WP API case studies query failed: ' . $e->getMessage());
    json_error('Unable to fetch case studies.', 500);
}

$caseStudies = array_map(fn(array $row) => format_post_summary($pdo, $row), $rows);

json_response([
    'caseStudies' => $caseStudies,
    'total' => $total,
    'totalPages' => $perPage > 0 ? (int) ceil($total / $perPage) : 0,
    'page' => $page,
    'perPage' => $perPage,
]);
