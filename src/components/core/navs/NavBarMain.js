import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/navBar.css';
import './css/navBarMain.css';

class NavBarMain extends Component {
	render() {
		return (
			<>
				<nav className={'main' + this.props.navModify}>
					<Link to="/" href="#home">
						<img
							className="nameFull"
							src={
								this.props.path +
								'/images/didier-pascarel-bold.svg'
							}
							alt="Didier PASCAREL écrit de façon manuscrite"
						/>
						<img
							className="initials"
							src={this.props.path + '/images/initials.svg'}
							alt="D P écrit de façon manuscrite"
						/>
					</Link>

					<div>
						<ul>
							<li>
								<a href="#presentation">A propos de moi</a>
							</li>
							<li>
								<a href="#stack">Technos</a>
							</li>
							<li>
								<a href="#education">Formation</a>
							</li>
							<li>
								<a href="#experiences">Expériences</a>
							</li>
							<li>
								<a href="#footer-socials">Me contacter</a>
							</li>
						</ul>
					</div>
				</nav>
			</>
		);
	}
}

export default NavBarMain;
