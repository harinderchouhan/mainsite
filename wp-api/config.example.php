<?php
/**
 * Copy this file to config.php and fill in your real values before
 * uploading to your server. config.php is the only file that should ever
 * contain real credentials — never commit it to a public git repository.
 */

// Standard MySQL connection details for your WordPress database. These are
// the exact same values found in your WordPress install's wp-config.php
// (DB_HOST, DB_NAME, DB_USER, DB_PASSWORD).
define('WP_DB_HOST', 'localhost');
define('WP_DB_NAME', 'your_database_name');
define('WP_DB_USER', 'your_database_user');
define('WP_DB_PASS', 'your_database_password');

// The table prefix your WordPress install uses. Also found in
// wp-config.php as $table_prefix. Default is 'wp_', but many hosts
// generate a random prefix (e.g. 'wp7x2a_') for security.
define('WP_DB_PREFIX', 'wp_');

// Which origin(s) are allowed to call this API from a browser.
// '*' allows any site — fine for a public, read-only blog API.
// To restrict it, set your Next.js site's exact origin instead, e.g.
// 'https://www.hanuitsolutions.com'
define('ALLOWED_ORIGIN', '*');
