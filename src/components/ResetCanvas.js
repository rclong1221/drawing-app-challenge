import React, { PropTypes } from "react";

export default function ResetCanvas(props) {
	const { action } = props;
	let d = new Date();
	let n = d.getTime();
	return (
    <button
      className="btn btn-reset"
      onClick={ () => {
        action('reset' + n.toString());
      }}
    >
    Reset
    </button>
	);
}

ResetCanvas.propTypes = {
	action: PropTypes.func.isRequired
};
