import { Component } from 'react';
import CardExperience from './CardExperience';
import './css/cards.css';

class Card extends Component {
	render() {
		return (
			<div className="card-main">
				<CardExperience experience={this.props.experience} />
			</div>
		);
	}
}

export default Card;
