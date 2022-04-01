import { Component } from 'react';
import Education from '../education/Education.view';
import ExperiencesView from '../experiences/Experiences.view';
import FooterMain from '../footer/FooterMain';
import PresentationView from '../presentation/Presentation.view';
import StackView from '../stack/Stack.view';

class HomeView extends Component {
	render() {
		return (
			<div id="home">
				<PresentationView path={this.props.path} />
				<StackView path={this.props.path} />
				<Education path={this.props.path} />
				<ExperiencesView path={this.props.path} />
				<FooterMain path={this.props.path} />
			</div>
		);
	}
}

export default HomeView;
