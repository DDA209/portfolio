import { Component } from 'react';
import './css/modals.css';

class Modal extends Component {
	render() {
		return (
			<div
				id="modal"
				className={this.props.modalStatus}
				onClick={this.props.changeModalStatus}
			>
				{this.props.content}
			</div>
		);
	}
}

export default Modal;
