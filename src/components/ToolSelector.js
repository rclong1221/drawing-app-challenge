import React, { PropTypes } from "react";
import { BRUSH, STAMP, ERASER } from "../constants/Tools";

export default function ToolSelector(props) {
	const { action, tool } = props;
	return (
		<div className="tool-container">
				<button
					htmlFor="brush-select"
					className={tool === BRUSH ? "btn btn-brush tool-active" : "btn btn-brush" }
					onClick={ (e) => { action(BRUSH) } }
				>
					Brush
				</button>
				<button
					htmlFor="stamp-select"
					className={tool === STAMP	 ? "btn btn-stamp tool-active" : "btn btn-stamp" }
					onClick={ (e) => { action(STAMP) } }
				>
					Stamp
				</button>
				<button
					htmlFor="eraser-select"
					className={tool === ERASER ? "btn btn-eraser tool-active" : "btn btn-eraser" }
					onClick={ (e) => { action(ERASER) } }
				>
					Eraser
				</button>
		</div>
	);
}

ToolSelector.propTypes = {
	tool: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired
};
