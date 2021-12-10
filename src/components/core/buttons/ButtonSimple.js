import { Component } from 'react';
import './css/buttons.css';

class ButtonSimple extends Component {
	render() {
		return (
			<>
				<button>{this.props.children}</button>
			</>
		);
	}
}

export default ButtonSimple;
