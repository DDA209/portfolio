import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/core/header/Header';
import NavBarMain from './components/core/navs/NavBarMain';

import './css/style.css';
import './components/core/images/css/images.css';
import HomeView from './views/home/Home.view';
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
		main.addEventListener('scroll', () => {
			const scrollYValue = main.scrollTop;
			console.log(
				'components/core/navs/NavBarMain.js #componentDidMount scrollYVAlue >>>',
				scrollYValue
			);
			if (
				scrollYValue > 300 &&
				scrollYValue > this.state.scrollLastStep
			) {
				this.setState({
					navModify: ' hide',
					moveProfilePicture: ' move-profile-picture',
				});
			} else {
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
				<NavBarMain navModify={this.state.navModify} />
				<main>
					<Header
						moveProfilePicture={this.props.moveProfilePicture}
					/>

					<Routes>
						<Route
							path="/"
							element={
								<HomeView
									moveProfilePicture={
										this.state.moveProfilePicture
									}
								/>
							}
						/>
					</Routes>
				</main>
			</>
		);
	}
}

export default App;
