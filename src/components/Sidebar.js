import React, { Component } from "react";
import ToolSelector from "./ToolSelector";
import BrushSize from "./BrushSize";
import BrushColor from "./BrushColor";
import InputImage from "./InputImage";
import SaveImage from "./SaveImage";
import ResetCanvas from "./ResetCanvas";

export default class Sidebar extends Component {
	render() {
		const { tools, actions } = this.props;
		const { brush_size, brush_color, image } = tools;
		return (
			<div className="sidebar">
				<section className="section section--tool-selector">
					<h3 className="section__heading">Tool</h3>
					<ToolSelector
						tool={ tools.tool }
						action={ actions.selectTool }
					/>
				</section>
				<hr/>
				<section className="section section--brush-size">
					<h3 className="section__heading">Brush Size</h3>
					<BrushSize
						brush_size={ brush_size }
						action={ actions.changeSize }
					/>
				</section>
				<hr/>
				<section className="section section--brush-color">
					<h3 className="section__heading">Brush Color</h3>
					<BrushColor
						brush_color={ brush_color }
						action={ actions.changeColor }
					/>
				</section>
				<hr/>
				<section className="section section--image-stamp">
					<h3 className="section__heading">Image Stamp</h3>
					<InputImage
						image={ image }
						action={ actions.changeImage }
					/>
				</section>
				<hr/>
				<section className="section section--reset-canvas">
					<h3 className="section__heading">Reset</h3>
					<ResetCanvas action={ actions.resetCanvas } />
				</section>
				<hr/>
				<section className="section section--save-image">
					<h3 className="section__heading">Save</h3>
					<SaveImage action={ actions.saveCanvas } />
				</section>
				<hr/>
			</div>
		)
	}
}
