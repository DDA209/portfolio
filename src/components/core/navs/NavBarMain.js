import React, { Component } from 'react';
import './css/navBar.css';
import './css/navBarMain.css';

class NavBarMain extends Component {
	render() {
		console.log(' this.state.navModify >>>', this.props.navModify);
		return (
			<>
				<nav className={'main' + this.props.navModify}>
					<h2>Didier PASCAREL</h2>
					<div>
						<ul>
							<li>
								<a href="#presentation">A propos de moi</a>
							</li>
							<li>
								<a href="#stack">Compétences</a>
							</li>
							<li>
								<a href="#softskills">Qualités</a>
							</li>
						</ul>
					</div>
				</nav>
			</>
		);
	}
}

export default NavBarMain;
