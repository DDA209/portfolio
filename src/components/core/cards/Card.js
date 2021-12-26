import { Component } from 'react';
import CardExperience from '../../cards/CardExperience';
import CardSticker from '../../cards/CardSticker';
import './css/cards.css';

class Card extends Component {
	renders = {
		experience: (props) => {
			// console.log('card.js #renders render experience card');
			return (
				<CardExperience datas={props.datas} context={props.context} />
			);
		},
		sticker: (props) => {
			// console.log('card.js #renders render experience card');
			return <CardSticker datas={props.datas} />;
		},
	};

	render() {
		// console.log('card.js #renders this.props >>>', this.props);
		return (
			<div className="card-main">
				{this.renders[this.props.type](this.props)}
			</div>
		);
	}
}

export default Card;
