import { Component } from 'react';
import './css/cardExperience.css';
import '../../css/scrollbars.css';

class CardSticker extends Component {
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
			<div className="card-sticker width-12 height-20">
				<div className="card-sticker width-12 height-15">
					<img
						className={this.props.types[0]}
						src={this.props.url}
						alt={this.props.description}
					/>
				</div>
				<div className="card-sticker width-12 height-5">
					<h3>{this.props.name}</h3>
				</div>
			</div>
		);
	}
}

export default CardSticker;
