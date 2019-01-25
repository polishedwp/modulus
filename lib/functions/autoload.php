<?php
/**
 * File autoloader
 *
 * @package     PolishedWP\Modulus
 * @since       1.0.0
 * @author      Chuck Smith
 * @link        http://www.polishedwp.com
 * @license     GNU General Public License 2.0+
 */

namespace PolishedWP\Modulus\Functions;

/**
 * Loads non admin files.
 *
 * @since 1.0.1
 *
 * @return void
 */
function load_nonadmin_files() {
	$filenames = array(
		'setup.php',
		'admin/remove-adsense.php',
//		'components/simple-social-icon-defaults.php',
//		'components/widgets/widgets.php',
		'components/woocommerce/woocommerce-setup.php',
		'components/woocommerce/woocommerce-output.php',
		'components/woocommerce/woocommerce-notice.php',
//		'functions/formatting.php',
		'functions/load-assets.php',
		//'functions/load-minified-css.php',
//		'structure/archive.php',
		'structure/authorbox.php',
		'structure/comments.php',
//		'structure/footer.php',
//		'structure/header.php',
		'structure/menu.php',
		'structure/sidebar.php',
//		'structure/widgets.php'
	);

	load_specified_files( $filenames );
}

/**
 * Load admin files.
 *
 * @since 1.0.1
 *
 * @return void
 */
function load_admin_files() {
	$filenames = array(
		'components/customizer/customizer.php',
		'components/customizer/register-customizer.php',
		'components/customizer/css-handler.php',
		// 'components/customizer/customizer-settings-panel.php', --For Theme Settings Panel after release
		'components/customizer/remove-adsense.php',

	);

	load_specified_files( $filenames );
}

/**
 * Load each of the specified files.
 *
 * @since 1.0.0
 *
 * @param array  $filenames
 * @param string $folder_root
 *
 * @return void
 */
function load_specified_files( array $filenames, $folder_root = '' ) {
	$folder_root = $folder_root ?: CHILD_THEME_DIR . '/lib/';

	foreach ( $filenames as $filename ) {
		include( $folder_root . $filename );
	}
}

load_nonadmin_files();
load_admin_files();