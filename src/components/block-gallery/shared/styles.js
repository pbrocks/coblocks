/**
 * WordPress dependencies
 */
const { getColorClassName } = wp.editor;

/**
 * Background Classes
 */
function GalleryStyles( attributes ) {

	const captionColorClass = getColorClassName( 'color', attributes.captionColor );

	const styles = {
		color: captionColorClass ? undefined : attributes.customCaptionColor,
	};

	return styles;
}

export default GalleryStyles;