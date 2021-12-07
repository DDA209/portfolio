import React, { Component } from 'react';
import './buttons.css';

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
