import React, { Component } from 'react';
import './css/images.css';

class ProfilePicture extends Component {
	render() {
		// console.log(
		// 	'components/core/images/ProfilePicture.js #render this.props.moveProfilePicture >>>',
		// 	this.props.moveProfilePicture
		// );
		return (
			<>
				<img
					id="picture-pofile"
					src="/images/4web.jpg"
					alt="Professional foto of Didier Pascarel"
					className={` ${this.props.moveProfilePicture}`}
				/>
			</>
		);
	}
}

export default ProfilePicture;
