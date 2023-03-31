<?php
/**
 * Plugin Name:     Blogroll Block
 * Description:     WordPress Blogroll, block edition
 * Version:         1.3.2
 * Author:          Michael Beckwith
 * Author URI:      https://michaelbox.net
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     blogroll-block
 * @package         tw2113-blogroll-block
 */
namespace tw2113_blogroll_block;

function blogroll_block_init() {
	register_block_type(
		__DIR__,
		[
			'render_callback' => __NAMESPACE__ . '\blogroll_block_construct_bookmarks_list',
		]
	);
}
add_action( 'init', __NAMESPACE__ . '\blogroll_block_init' );

function blogroll_block_construct_bookmarks_list( $attributes ) {
	$args = [];

	$list_type = ! empty( $attributes['list_type'] ) ? esc_html( $attributes['list_type'] ) : 'ul';
	unset( $attributes['list_type'] );

	foreach ( $attributes as $attribute => $attribute_value ) {
		// need to handle custom because `class` is a reserved keyword in js
		if ( 'roll_class' === $attribute ) {
			$args['class'] = $attribute_value;
		} else if ( 'roll_limit' === $attribute ) {
			// need to handle cause `limit` alone fails to work for me.
			$args['limit'] = $attribute_value;
		} else {
			$args[ $attribute ] = $attribute_value;
		}
	}

	ob_start();

	echo "<$list_type>";
	wp_list_bookmarks(
		$args
	);
	echo "</$list_type>";

	return ob_get_clean();
}

// Aid users in enabling the links menu without having to install other plugins or search how to.
add_filter( 'pre_option_link_manager_enabled', '__return_true' );
