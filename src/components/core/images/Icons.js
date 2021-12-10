import React, { Component } from 'react';

// import trashIcon from '/images/icons/trash.svg';
// import penLineIcon from '/images/icons/pen-line.svg';
const iconStyle = {
	height: '1rem',
	width: '1rem',
};

const icons = {
	// trash: <FontAwesomeIcon icon={faTrash} />,
	// pencil: <FontAwesomeIcon icon={faPen} />,
	trash: (
		<img
			src="/images/icons/trash.svg"
			alt="Icone de poubelle"
			style={iconStyle}
		/>
	),
	pencil: (
		<img
			src="/images/icons/pen-line.svg"
			alt="Icone de stylo qui écrit"
			style={iconStyle}
		/>
	),
};
class Icon extends Component {
	render() {
		return <>{icons[this.props.icon]}</>;
	}
}

export default Icon;
