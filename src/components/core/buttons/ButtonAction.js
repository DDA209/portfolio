import { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import Icon from '../images/Icons';

const Button = styled.button`
	background-color: ${(props) => props.backgroundColor || '#b0b0b0ff'} !important;
	color: ${(props) => props.contentColor || '#b0b0b0ff'} !important;
	font-size: 1rem !important;
	height: 1.8rem !important;
	width: ${(props) => props.size || '2.5rem'} !important;
	min-height: 1.8rem !important;
	min-width: ${(props) => props.size || '2.5rem'} !important;
	margin: 0 0.175em !important;
	padding: 0.1em 0.5em !important;
	border-radius: 0.35rem !important;
	text-align: center !important;
	box-shadow: none !important;
    content-align center
`;

// const Button = styled(DefaultButton)`
// 	color: tomato;
// 	border-color: tomato;
// `;

class ButtonSimple extends Component {
	renderButton(role) {
		const roles = {
			edit: {
				// text: 'modifier',
				icon: 'pencil',
				backgroundColor: '#90b8ffff',
				contentColor: '#000000ff',
				position: 'left',
				size: 'normal',
			},
			delete: {
				// text: 'supprimer',
				icon: 'trash',
				backgroundColor: '#ff5040ff',
				contentColor: '#ffffffff',
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
				backgroundColor={roles[role].backgroundColor}
				contentColor={roles[role].contentColor}
				size={sizes[roles[role].size]}
				className={roles[role].position}
			>
				<Icon />
				{roles[role].icon && <Icon icon={roles[role].icon} />}
				{/* {(roles[role].icon] && roles[role]text) && ' - '} */}
				{true && roles[role].text}
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
