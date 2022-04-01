import React, { Component } from 'react';
import './css/images.css';

class ProfilePicture extends Component {
	render() {
		return (
			<>
				<img
					id="picture-pofile"
					src={`${this.props.path}/images/4web.jpg`}
					alt="photographie de Didier Pascarel"
					className={` ${this.props.moveProfilePicture}`}
				/>
			</>
		);
	}
}

export default ProfilePicture;
