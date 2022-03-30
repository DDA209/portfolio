import { Component } from 'react';
import './css/modals.css';

class Modal extends Component {
	render() {
		// console.log(
		// 	'components/core/modal/Modal.js #render this.props.modalStatus >>>',
		// 	this.props.modalStatus
		// );
		console.log(
			'components/core/modal/Modal.js #render this.props.content >>>',
			this.props.content
		);
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
