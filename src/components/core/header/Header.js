import { Component } from 'react';
import ProfilePicture from '../images/ProfilePicture';
import './css/header.css';

class Header extends Component {
	render() {
		return (
			<>
				<div id="background"></div>
				<header>
					<ProfilePicture
						moveProfilePicture={this.props.moveProfilePicture}
						path={this.props.path}
					/>
				</header>
			</>
		);
	}
}

export default Header;
