import React, { PropTypes, Component } from "react";
import { BRUSH, ERASER, STAMP } from "../constants/Tools";

let ctx;

export default class Canvas extends Component {
	constructor(props) {
		super(props);
		this.isDrawing = false;
		this.isStamping = false;
		this.start = this.start.bind(this);
		this.end = this.end.bind(this);
		this.draw = this.draw.bind(this);
	}
	componentDidMount() {
		this.refs.canvas.height = window.innerHeight;
		this.refs.canvas.width = window.innerWidth;
		ctx = this.refs.canvas.getContext("2d");
	}
	componentWillReceiveProps(nextProps) {
		if (this.props.tools.save !== nextProps.tools.save) this.saveCanvas();
		else if (this.props.tools.reset !== nextProps.tools.reset) this.clearCanvas();
	}
	clearCanvas() {
		ctx.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
	}
	saveCanvas() {
    let img_url = this.refs.canvas.toDataURL("image/png");
    let new_window = window.open('about:blank', 'image');
    new_window.document.write("<img src='" + img_url + "' alt='artwork'/>");
	}
	getStroke() {
		return this.props.tools.brush_size;
	}
	getColor() {
		return this.props.tools.brush_color;
	}
	drawImage(event) {
		let img = new Image();
		let e = event;
		e.persist();
		img.onload = () => {
			let asp_ratio = img.width / img.height;
			let brush_size = this.getStroke() * 2;
			let resized_width = 160;
			let resized_height = 160;

			// Set to max width or max height, exclusively, to match CSS
			if (img.width >= img.height) resized_height /= asp_ratio;
			else resized_width *= asp_ratio;

			img.width = brush_size / 10 * resized_width;
			img.height = brush_size / 10 * resized_height;

			ctx.drawImage(img, this.getImageCenterX(event, img), this.getImageCenterY(event, img), img.width, img.height);
    };

		// Default image won't load due to cross-origin security restrictions
		// Change to anonymous
		img.setAttribute('crossOrigin', 'anonymous');
		img.src = this.props.tools.image;
	}
	getX(event) {
		if (event.pageX === undefined) {
			return event.targetTouches[0].pageX - this.refs.canvas.offsetLeft;
		}
		else {
			return event.pageX - this.refs.canvas.offsetLeft;
		}
	}
	getY(event) {
		if (event.pageY === undefined) {
			return event.targetTouches[0].pageY - this.refs.canvas.offsetTop;
		}
		else {
			return event.pageY - this.refs.canvas.offsetTop;
		}
	}

	// Calculate and adjust STAMP image center
	getImageCenterX(event, img) {
		return this.getX(event) - img.width / 2;
	}
	getImageCenterY(event, img) {
		return this.getY(event) - img.height / 2;
	}

	start(event) {
		if (this.props.tools.tool === BRUSH || this.props.tools.tool === ERASER) {
			this.isDrawing = true;
			ctx.beginPath();
			ctx.moveTo(this.getX(event), this.getY(event));
			this.setContext(event);
		}
		else if (this.props.tools.tool === STAMP) {
			this.isStamping = true;
			this.setContext(event);
			this.drawImage(event);
		}
		event.preventDefault();
	}
	setContext(event) {
		ctx.lineTo(this.getX(event), this.getY(event));
		ctx.lineWidth = this.getStroke();
		ctx.strokeStyle = this.getColor();
		if (this.props.tools.tool === ERASER)
			ctx.globalCompositeOperation = "destination-out";
		else
			ctx.globalCompositeOperation = "source-over";
		ctx.lineCap = "round";
		ctx.lineJoin = "round";
	}
	draw(event) {
		if (this.isDrawing) {
			this.setContext(event);
			ctx.stroke();
		}
		event.preventDefault();
	}
	end(event) {
		if (this.isDrawing) {
			ctx.stroke();
			ctx.closePath();
			this.isDrawing = false;
		}
		else if (this.isStamping) {
			this.isStamping = false;
		}
		event.preventDefault();
	}
	render() {
		return (
			<canvas
				className="canvas"
				id="canvas"
				ref="canvas"
				onMouseDown={ this.start }
				onMouseUp={ this.end }
				onMouseMove={ this.draw }
			></canvas>
		)
	}
}

Canvas.propTypes = {
	save: PropTypes.string,
	reset: PropTypes.string,
	tools: PropTypes.object.isRequired
}
