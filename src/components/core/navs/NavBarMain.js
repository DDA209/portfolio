import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './css/navBar.css';
import './css/navBarMain.css';

class NavBarMain extends Component {
	render() {
		console.log(' this.state.navModify >>>', this.props.navModify);
		return (
			<>
				<nav className={'main' + this.props.navModify}>
					<Link to="/">
						<h2>Didier PASCAREL</h2>
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
								<a href="#softskills">Qualités</a>
							</li>
							<li>
								<a href="#softskills">J'aime</a>
							</li>
							<div className="vr"></div>
							<li>
								<a href="#softskills">Me contacter</a>
							</li>
							<li></li>
						</ul>
					</div>
				</nav>
			</>
		);
	}
}

export default NavBarMain;
