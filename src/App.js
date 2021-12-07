import React, { Component } from 'react';
// import CardExperience from './core/components/cards/CardExperience';
// import FormExperience from './core/components/forms/FormExperience';
import Header from './components/core/header/Header';
import NavBarMain from './components/core/navs/NavBarMain';
import './css/style.css';
import Experiences from './views/experiences/Experiences';

class App extends Component {
	render() {
		return (
			<>
				<NavBarMain />
				<Header />
				<Experiences />
			</>
		);
	}
}

export default App;