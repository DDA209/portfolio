import { Component } from 'react';
import ExperiencesView from '../experiences/Experiences.view';
import PresentationView from '../presentation/Presentation.view';
import StackView from '../stack/Stack.view';
// import './home.css';

class HomeView extends Component {
	render() {
		return (
			<div id="home">
				<PresentationView />
				<StackView />
				<ExperiencesView />
			</div>
		);
	}
}

export default HomeView;
