import { Component } from 'react';
import CardExperience from '../../cards/CardExperience';
import CardSticker from '../../cards/CardSticker';
import './css/cards.css';

class Card extends Component {
	renders = {
		experience: (props) => {
			return (
				<CardExperience datas={props.datas} context={props.context} />
			);
		},
		sticker: (props) => {
			return <CardSticker datas={props.datas} />;
		},
	};

	render() {
		return (
			<div className="card-main">
				{this.renders[this.props.type](this.props)}
			</div>
		);
	}
}

export default Card;
