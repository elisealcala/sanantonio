<?php

/**
* Load services definition file.
*/
$config ['system.site'] ['name'] = 'Colegio San Antonio';
$settings['container_yamls'][] = __DIR__ . '/services.yml';
$settings['hash_salt'] = '$HASH_SALT';
/**
* Include the Pantheon-specific settings file.
*
* n.b. The settings.pantheon.php file makes some changes
*      that affect all envrionments that this site
*      exists in.  Always include this file, even in
*      a local development environment, to insure that
*      the site settings remain consistent.
*/
include __DIR__ . "/settings.pantheon.php";

/**
* If there is a local settings file, then include it
*/
$local_settings = __DIR__ . "/settings.local.php";
if (file_exists($local_settings)) {
 include $local_settings;
}
// Local development configuration.
if (!defined('PANTHEON_ENVIRONMENT')) {
 // Database.
 $databases['default']['default'] = array(
   'database' => 'bd-sanantonio',
   'username' => 'elizalc1',
   'password' => 'Mobiles123!',
   'host' => 'localhost',
   'driver' => 'mysql',
   'port' => '',
   'prefix' => '',
 );
}$settings['install_profile'] = 'standard';

$settings['twig_debug'] = TRUE;
