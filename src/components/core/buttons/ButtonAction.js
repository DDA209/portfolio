import { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background-color: ${(props) =>
		props.colorBackground || '#b0b0b0ff'} !important;
	color: ${(props) => props.colorContent || '#b0b0b0ff'} !important;
	font-size: 1rem !important;
	height: 1rem !important;
	max-height: 1rem !important;
	width: ${(props) => props.size || '2.5rem'} !important;
	max-width: 2.5rem !important;
	margin: 0 0.175em !important;
	padding: 0.1em 0.5em !important;
	border-radius: 0.35rem !important;
	text-align: center !important;
	box-shadow: none !important;
	content-align: center;
	vertical-align: middle;
`;
class ButtonSimple extends Component {
	renderButton(role) {
		const roles = {
			edit: {
				// text: 'modifier',
				icon: 'pencil',
				colorBackground: '#90b8ffff',
				colorContent: '#000000ff',
				position: 'left',
				size: 'stretch',
			},
			delete: {
				// text: 'supprimer',
				icon: 'trash',
				colorBackground: '#ff5040ff',
				colorContent: '#ffffffff',
				position: 'right',
				size: 'stretch',
			},
		};

		const sizes = {
			stretch: '1.8rem',
			reduce: '3.6rem',
			normal: '5.4rem',
			large: '7.2rem',
		};

		return (
			<Button
				as="button"
				colorBackground={roles[role].colorBackground}
				colorContent={roles[role].colorContent}
				size={sizes[roles[role].size]}
				className={roles[role].position}
			>
				{this.children}
			</Button>
		);
	}
	render() {
		console.log(
			'components/core/buttons/ButtonAction.js #render this.props.role >>>',
			this.props.role
		);
		return <>{this.renderButton(this.props.role)}</>;
	}
}

export default ButtonSimple;
