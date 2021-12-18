import { Component } from 'react';
import CardExperience from './CardExperience';
import './css/cards.css';

class Card extends Component {
	renders = {
		experience: (props) => {
			console.log('card.js #renders props >>>', props);
			return (
				<CardExperience
					datas={props.datas}
					context={this.props.context}
				/>
			);
		},
	};

	render() {
		console.log('card.js #renders this.props >>>', this.props);
		return (
			<div className="card-main">
				{this.renders[this.props.type](this.props)}
			</div>
		);
	}
}

export default Card;
