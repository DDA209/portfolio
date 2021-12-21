import { Component } from 'react';
import './css/preload.css';

class Preload extends Component {
	render() {
		return (
			<div id="loading">
				<img
					src="/images/didier-pascarel.svg"
					alt="Didier PASCAREL écrit de façon manuscrite"
				/>
				<h2>Développeur Web</h2>
			</div>
		);
	}
}

export default Preload;
