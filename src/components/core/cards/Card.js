import React, { Component } from 'react';
import CardExperience from './CardExperience';
import './card.css';

class Card extends Component {
	render() {
		return (
			<div class="cardMain">
				<CardExperience experience={this.props.experience} />
			</div>
		);
	}
}

export default Card;
