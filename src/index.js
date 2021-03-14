import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import './style.scss';
import Edit from './edit';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
export default registerBlockType( 'tw2113/blogroll-block', {
	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	apiVersion: 2,
	title: __( 'Blogroll Block', 'blogroll-block' ),
	description: __(
		'WordPress Blogroll Block',
		'blogroll-block'
	),
	attributes: {
		orderby: {
			type: 'string',
			default: 'name',
		},
		order: {
			type: 'string',
			default: 'ASC',
		},
		roll_limit: {
			type: 'string',
			default: '-1',
		},
		category: {
			type: 'string',
		},
		category_name: {
			type: 'string',
		},
		hide_invisible: {
			type: 'boolean',
			default: true,
		},
		show_updated: {
			type: 'boolean',
		},
		categorize: {
			type: 'boolean',
			default: true,
		},
		show_description: {
			type: 'boolean',
		},
		title_li: {
			type: 'string',
			default: 'Bookmarks',
		},
		title_before: {
			type: 'string',
			default: '<h2>',
		},
		title_after: {
			type: 'string',
			default: '</h2>',
		},
		roll_class: {
			type: 'string',
			default: 'linkcat',
		},
		category_before: {
			type: 'string',
			default: '<li id="%id" class="%class">',
		},
		category_after: {
			type: 'string',
			default: '</li>',
		},
		category_orderby: {
			type: 'string',
			default: 'name',
		},
		category_order: {
			type: 'string',
			default: 'ASC',
		},
	},
	category: 'widgets',
	icon: 'book-alt',
	edit: Edit,
	save: () => {
		return null;
	},
} );
