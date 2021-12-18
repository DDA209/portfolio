import { Component } from 'react';
import './css/cardExperience.css';
import '../../../css/scrollbars.css';
import CardExperienceFront from './CardExperienceFront';
import CardExperienceBack from './CardExperienceBack';

class CardExperience extends Component {
	render() {
		console.log(
			'components/core/cards/CardExperience.js #renders this.props >>>',
			this.props
		);
		console.log(
			'components/core/cards/CardExperience.js #renders this.props.context >>>',
			this.props.context
		);

		return (
			<div className="card-experience width-12 height-20">
				<CardExperienceFront datas={this.props.datas} />
				<CardExperienceBack datas={this.props.datas} />
			</div>
		);
	}
}

export default CardExperience;
