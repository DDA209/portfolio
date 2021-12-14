import React, { Component } from 'react';
import styled from 'styled-components';

const Icon = styled.img`
	heigth: 1rem;
	width: 1rem;
`;

const icons = {
	trash: {
		src: '/images/icons/trash.svg',
		alt: 'Icone de poubelle',
	},
	pencil: {
		src: '/images/icons/pen-line.svg',
		alt: 'Icone de stylo qui écrit',
	},
};
class IconMini extends Component {
	render() {
		return <Icon>{icons[this.props.icon]}</Icon>;
	}
}

export default IconMini;
