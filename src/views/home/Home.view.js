import { Component } from 'react';
import ExperiencesView from '../experiences/Experiences.view';
import PresentationView from '../presentation/Presentation.view';
// import './home.css';

class HomeView extends Component {
	render() {
		return (
			<>
				<PresentationView />
				<ExperiencesView />
			</>
		);
	}
}

export default HomeView;
