import React, { Component } from 'react';
import './css/style.css';
import './components/core/images/images.css';
// import CardExperience from './core/components/cards/CardExperience';
// import FormExperience from './core/components/forms/FormExperience';
import Header from './components/core/header/Header';
import NavBarMain from './components/core/navs/NavBarMain';
import ExperiencesView from './views/experiences/Experiences.view';

class App extends Component {
	render() {
		return (
			<>
				<NavBarMain />
				<Header />
				<ExperiencesView />
			</>
		);
	}
}

export default App;
