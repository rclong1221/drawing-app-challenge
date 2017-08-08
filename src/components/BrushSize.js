import React, { PropTypes } from "react";

export default function BrushSize(props) {
	const { action, brush_size } = props;
	// Bug at really big number
	// Limit to 2048 (probably can limit to smaller)
	function parseNumber(e) {
		if (e.target.value < 2048) action(e.target.value);
		else action(2048)
	}
	return (
		<input
			type="number"
			className="number-input"
			value={brush_size}
			onChange={ (e) => {parseNumber(e);} }
		/>
	);
}

BrushSize.propTypes = {
	brush_size: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired
};
