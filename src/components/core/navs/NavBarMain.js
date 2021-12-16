import React, { Component } from 'react';
import './css/navBar.css';
import './css/navBarMain.css';

class NavBarMain extends Component {
	constructor(props) {
		super(props);

		this.state = {
			scrollLastStep: 0,
			navModify: '',
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', () => {
			const scrollYValue = window.scrollY;
			console.log(
				'scrollYValue',
				scrollYValue,
				'\nthis.state.scrollLastStep',
				this.state.scrollLastStep
			);

			if (
				scrollYValue > 100 &&
				scrollYValue > this.state.scrollLastStep
			) {
				console.log('sccroll > 100', scrollYValue > 100);
				this.setState({
					navModify: ' nav-modify',
				});
			} else {
				// if (scrollYValue === 0) {
				console.log(scrollYValue > 100);
				this.setState({
					navModify: '',
				});
			}
			this.setState({
				scrollLastStep: scrollYValue,
			});
		});
	}

	render() {
		console.log(' this.state.navModify >>>', this.state.navModify);
		return (
			<>
				<nav className={'main' + this.state.navModify}>
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
				{/* <div className="ghost"></div> */}
			</>
		);
	}
}

export default NavBarMain;
