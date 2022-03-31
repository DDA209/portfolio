import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/core/header/Header';
import NavBarMain from './components/core/navs/NavBarMain';

import './css/shadows.css';
import './css/style.css';
import './components/core/images/css/images.css';
import HomeView from './views/home/Home.view';
import Preload from './components/preload/Preload';

const path = process.env.PUBLIC_URL;

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			scrollLastStep: 0,
			navModify: '',
			moveProfilePicture: '',
		};
	}

	componentDidMount() {
		const main = document.querySelector('main');

		main.addEventListener('scroll', (event) => {
			console.log('app.js #componentDidMount event >>>', event);
			const scrollYValue = main.scrollTop;
			const scrollBreackPoint = 300;
			console.log(
				'app.js #componentDidMount scrollYVAlue >>>',
				scrollYValue
			);
			document.querySelector(
				'main > #background'
			).style.cssText = `background-position-y = -${scrollYValue / 2}`;

			if (
				scrollYValue > scrollBreackPoint &&
				scrollYValue > this.state.scrollLastStep
			) {
				this.setState({
					navModify: ' hide',
					moveProfilePicture: ' move-profile-picture',
				});
			} else if (scrollYValue < scrollBreackPoint) {
				this.setState({
					navModify: '',
				});
			}
			this.setState({
				scrollLastStep: scrollYValue,
			});

			/**
			 * Moving and resising profile picture with scroll
			 */
			if (scrollYValue < scrollBreackPoint) {
				this.setState({
					moveProfilePicture: '',
				});
			}

			/**
			 * Moving background slower
			 */
		});
	}

	render() {
		console.log('app.js path >>>', path);
		return (
			<>
				<Preload path={path} />

				<NavBarMain navModify={this.state.navModify} path={path} />
				<main>
					<Header
						moveProfilePicture={this.state.moveProfilePicture}
						path={path}
					/>

					<Routes>
						<Route
							path={`${path}/`}
							// path={`/`}
							element={<HomeView path={path} />}
						/>
					</Routes>
				</main>
			</>
		);
	}
}

export default App;
