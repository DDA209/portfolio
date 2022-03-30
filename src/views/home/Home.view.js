import { Component } from 'react';
import Education from '../education/Education.view';
import ExperiencesView from '../experiences/Experiences.view';
import FooterMain from '../footer/FooterMain';
import PresentationView from '../presentation/Presentation.view';
import StackView from '../stack/Stack.view';
// import './home.css';

class HomeView extends Component {
	render() {
		return (
			<div id="home">
				<PresentationView />
				<StackView />
				<Education />
				<ExperiencesView />
				<FooterMain />
			</div>
		);
	}
}

export default HomeView;
