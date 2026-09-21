<?php
/**
 * Shared PDO connection to the WordPress MySQL database.
 * Uses prepared statements everywhere downstream — never build SQL by
 * concatenating raw user input.
 */

require_once __DIR__ . '/config.php';

function wp_db(): PDO
{
    static $pdo = null;

    if ($pdo === null) {
        $dsn = 'mysql:host=' . WP_DB_HOST . ';dbname=' . WP_DB_NAME . ';charset=utf8mb4';
        $pdo = new PDO($dsn, WP_DB_USER, WP_DB_PASS, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]);
    }

    return $pdo;
}
