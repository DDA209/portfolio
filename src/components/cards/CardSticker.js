import { Component } from 'react';
import './css/cardSticker.css';
class CardSticker extends Component {
	render() {
		return (
			<div className="card-sticker">
				<div className="logo width-12 height-15">
					<img
						className={this.props.skillTypes[0]}
						src={
							this.props.picture.url ||
							'/images/stack/logo-skill-default.svg'
						}
						alt={
							this.props.picture.url
								? this.props.picture.description
								: 'pas de logo disponible'
						}
					/>
				</div>
				<div className="title width-12 height-5">
					<p>{this.props.name}</p>
				</div>
			</div>
		);
	}
}

export default CardSticker;
