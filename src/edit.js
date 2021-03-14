import { __ } from '@wordpress/i18n';

/**
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import './editor.scss';

import {
	PanelBody,
	ExternalLink,
	SelectControl,
	ToggleControl,
	TextControl,
} from '@wordpress/components';

export default function Edit( props ) {

	const {
		attributes: {
			orderby,
			order,
			roll_limit,
			category,
			category_name,
			hide_invisible,
			show_updated,
			categorize,
			show_description,
			title_li,
			title_before,
			title_after,
			roll_class,
			category_before,
			category_after,
			category_orderby,
			category_order,
		},
		setAttributes,
	} = props;

	function onChangeHideInvisible() {
		setAttributes( { hide_invisible: ! hide_invisible } );
	}

	function onChangeShowUpdated() {
		setAttributes( { show_updated: ! show_updated } );
	}

	function onChangeCategorize() {
		setAttributes( { categorize: ! categorize } );
	}

	function onChangeShowDescription() {
		setAttributes( { show_description: ! show_description } );
	}

	return (
		<div {...useBlockProps()}>
			{ (
				<ServerSideRender
					block="tw2113/blogroll-block"
					attributes={ {
						order: order,
						hide_invisible: hide_invisible,
						show_updated: show_updated,
						categorize: categorize,
						show_description: show_description,
						orderby: orderby,
						roll_limit: roll_limit,
						category: category,
						category_name: category_name,
						title_li: title_li,
						title_before: title_before,
						title_after: title_after,
						roll_class: roll_class,
						category_before: category_before,
						category_after: category_after,
						category_orderby: category_orderby,
						category_order: category_order
					} }
				/>
			) }
			<InspectorControls>
				<PanelBody
					title={ __( 'Blogroll Arguments', 'blogroll-block' ) }
				>
					<p><ExternalLink href="https://developer.wordpress.org/reference/functions/wp_list_bookmarks/">{ __( 'Read about wp_list_bookmarks', 'blogroll-block' ) }</ExternalLink></p>
					<SelectControl
						label={ __( 'Order', 'blogroll-block' ) }
						value={ order }
						help={ __( 'Whether to order bookmarks in ascending or descending order.', 'blogroll-block' ) }
						options={ [
							{ label: 'ASC', value: 'ASC' },
							{ label: 'DESC', value: 'DESC' },
						] }
						onChange={order => setAttributes({order})}
					/>

					<ToggleControl
						label={ __( 'Hide invisible', 'blogroll-block' ) }
						help={ __( 'Whether to show or hide links marked as "invisible"', 'blogroll-block' ) }
						checked={ !! hide_invisible }
						onChange={ onChangeHideInvisible }
					/>

					<ToggleControl
						label={ __( 'Show updated', 'blogroll-block' ) }
						help={ __( 'Whether to display the time the bookmark was last updated.', 'blogroll-block' ) }
						checked={ !! show_updated }
						onChange={ onChangeShowUpdated }
					/>

					<ToggleControl
						label={ __( 'Categorize', 'blogroll-block' ) }
						help={ __( 'Whether to show links listed by category or in a single column.', 'blogroll-block' ) }
						checked={ !! categorize }
						onChange={ onChangeCategorize }
					/>

					<ToggleControl
						label={ __( 'Show description', 'blogroll-block' ) }
						help={ __( 'Whether to show the bookmark descriptions.', 'blogroll-block' ) }
						checked={ !! show_description }
						onChange={ onChangeShowDescription }
					/>

					<TextControl
						label={ __( 'Order By', 'blogroll-block' ) }
						help={ __( 'How to order the links by. Accepts post fields. Default "name"', 'blogroll-block' ) }
						value={ orderby }
						onChange={orderby => setAttributes({orderby})}
					/>

					<TextControl
						label={ __( 'Limit', 'blogroll-block' ) }
						help={ __( 'Amount of bookmarks to display. Accepts 1+ or -1 for all.', 'blogroll-block' ) }
						value={ roll_limit }
						onChange={roll_limit => setAttributes({roll_limit})}
					/>

					<TextControl
						label={ __( 'Category', 'blogroll-block' ) }
						help={ __( 'Comma-separated list of category IDs to include links from.', 'blogroll-block' ) }
						value={ category }
						onChange={category => setAttributes({category})}
					/>

					<TextControl
						label={ __( 'Category Name', 'blogroll-block' ) }
						help={ __( 'Category to retrieve links for by name.', 'blogroll-block' ) }
						value={ category_name }
						onChange={category_name => setAttributes({category_name})}
					/>

					<TextControl
						label={ __( 'Title Li', 'blogroll-block' ) }
						help={ __( 'What to show before the links appear. Only shows when categorize is false', 'blogroll-block' ) }
						value={ title_li }
						onChange={title_li => setAttributes({title_li})}
					/>

					<TextControl
						label={ __( 'Title before', 'blogroll-block' ) }
						help={ __( 'The HTML or text to prepend to the $title_li string.', 'blogroll-block' ) }
						value={ title_before }
						onChange={title_before => setAttributes({title_before})}
					/>

					<TextControl
						label={ __( 'Title after', 'blogroll-block' ) }
						help={ __( 'The HTML or text to append to the $title_li string.', 'blogroll-block' ) }
						value={ title_after }
						onChange={title_after => setAttributes({title_after})}
					/>

					<TextControl
						label={ __( 'Class', 'blogroll-block' ) }
						help={ __( 'The CSS class to use for the $title_li.', 'blogroll-block' ) }
						value={ roll_class }
						onChange={roll_class => setAttributes({roll_class})}
					/>

					<TextControl
						label={ __( 'Category before', 'blogroll-block' ) }
						help={ __( 'The HTML or text to prepend to $title_before if $categorize is true. String must contain "%id" and "%class" to inherit the category ID and the $class argument used for formatting in themes.', 'blogroll-block' ) }
						value={ category_before }
						onChange={category_before => setAttributes({category_before})}
					/>

					<TextControl
						label={ __( 'Category after', 'blogroll-block' ) }
						help={ __( 'The HTML or text to append to $title_after if $categorize is true.', 'blogroll-block' ) }
						value={ category_after }
						onChange={category_after => setAttributes({category_after})}
					/>

					<TextControl
						label={ __( 'Category order by', 'blogroll-block' ) }
						help={ __( 'How to order the bookmark category based on term scheme if $categorize is true.', 'blogroll-block' ) }
						value={ category_orderby }
						onChange={category_orderby => setAttributes({category_orderby})}
					/>

					<SelectControl
						label={ __( 'Category order', 'blogroll-block' ) }
						value={ category_order }
						help={ __( 'Whether to order categories in ascending or descending order if $categorize is true.', 'blogroll-block' ) }
						options={ [
							{ label: 'ASC', value: 'ASC' },
							{ label: 'DESC', value: 'DESC' },
						] }
						onChange={category_order => setAttributes({category_order})}
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
