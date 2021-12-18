import { Component } from 'react';
import ProfilePicture from '../images/ProfilePicture';
import './css/header.css';

class Header extends Component {
	render() {
		return (
			<>
				<div className="background"></div>
				<header>
					<ProfilePicture
						moveProfilePicture={this.props.moveProfilePicture}
					/>
				</header>
			</>
		);
	}
}

export default Header;
