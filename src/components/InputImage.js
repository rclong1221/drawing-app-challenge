import React, { PropTypes, Component } from "react";

export default class InputImage extends Component {
	constructor(props) {
		super(props);
		this.handleImageChange = this.handleImageChange.bind(this);
		this.loadImage = this.loadImage.bind(this);
	}

	loadImage(file_location) {
		let reader = new FileReader();
    let file = file_location;

		reader.readAsDataURL(file);
    reader.onloadend = () => {
			this.props.action(reader.result)
    }
	}
	handleImageChange(e) {
    e.preventDefault();
		let ext = e.target.files[0].name.substring(e.target.files[0].name.lastIndexOf('.') + 1);
		if( ext === "gif" ||
				ext === "GIF" ||
				ext === "JPEG" ||
				ext === "jpeg" ||
				ext === "jpg" ||
				ext === "JPG" ||
			  ext === "png" ||
			  ext === "PNG" )
				this.loadImage(e.target.files[0])
		return;
  }
	render() {
		return (
			<div>
				<div className='file-input-container'>
					<button className="btn btn-upload">Upload Image</button>
					<input className="file-input"
			      type="file"
						name="image"
			      onChange={(e) => {
							this.handleImageChange(e)
						}}
					/>
				</div>
				<img className="image-preview"
					src={this.props.image}
					alt={"uploaded file"}
				/>
			</div>
		);
	}
}

InputImage.propTypes = {
	image: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired
};
