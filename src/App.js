import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/core/header/Header';
import NavBarMain from './components/core/navs/NavBarMain';

import './css/style.css';
import './components/core/images/css/images.css';
import HomeView from './views/home/Home.view';
import Preload from './components/preload/Preload';
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
			console.log(
				'app.js #componentDidMount scrollYVAlue >>>',
				scrollYValue
			);
			document.querySelector(
				'main > .background'
			).style.cssText = `background-position = 0 -${scrollYValue}`;

			if (
				scrollYValue > 300 &&
				scrollYValue > this.state.scrollLastStep
			) {
				this.setState({
					navModify: ' hide',
					moveProfilePicture: ' move-profile-picture',
				});
			} else if (scrollYValue < 300) {
				this.setState({
					navModify: '',
				});
			}
			this.setState({
				scrollLastStep: scrollYValue,
			});
			if (scrollYValue < 300) {
				this.setState({
					moveProfilePicture: '',
				});
			}
		});
	}

	render() {
		return (
			<>
				<Preload />
				<NavBarMain navModify={this.state.navModify} />
				<main>
					<Header
						moveProfilePicture={this.state.moveProfilePicture}
					/>

					<Routes>
						<Route path="/" element={<HomeView />} />
					</Routes>
				</main>
			</>
		);
	}
}

export default App;
