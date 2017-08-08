import React, { PropTypes } from "react";

export default function SaveImage(props) {
	const { action } = props;
	let d = new Date();
	let n = d.getTime();
	return (
    <button
			className="btn btn-save"
			onClick={ (e) => {
        action('save' + n.toString());
      }}
		>
			Save
		</button>
	);
}

SaveImage.propTypes = {
	action: PropTypes.func.isRequired
};
