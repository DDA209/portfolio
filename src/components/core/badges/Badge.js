import { Component } from 'react';
import styled from 'styled-components';

const Badge = styled.div`
	background: linear-gradient(
		${(props) => props.colorBackground[2] || 0}deg,
		${(props) => props.colorBackground[0] || '#b0b0b0ff'},
		${(props) => props.colorBackground[1] || '#b0b0b0ff'}
	);
	color: ${(props) => props.colorContent || '#202020ff'} !important;
	height: 1rem !important;
	border-radius: 0.6rem !important;
	padding: 0.1rem 0.5rem;
	font-size: 0.8rem;
	margin: 0.1rem 0.3rem;
`;

const colors = {
	skillTechnic: {
		colorBackground: ['#90e0e8ff', '#90d8e0ff', 0],
		colorContent: '#000000ff',
	},
	skillSoft: {
		colorBackground: ['#b4e0c4ff', '#90d8e0ff', 0],
		colorContent: '#000000ff',
	},
	skillSocial: {
		colorBackground: ['#e0d080ff', '#90d8e0ff', 0],
		colorContent: '#000000ff',
	},
};

/**
 * **Standard badge component**
 *
 * \<BadgeDefault type="type"\>content\<\/BadgeDefault\>
 *
 * ***Usable types:***
 * - skillTechnic - bg color = soft blue, text color = black
 * - skillSoft - bg color = soft green, text color = black
 * - skillSocial - bg color = soft brun, text color = black
 */
class BadgeDefault extends Component {
	render() {
		return (
			<>
				<Badge
					as="badge"
					colorBackground={colors[this.props.type].colorBackground}
					colorContent={colors[this.props.type].colorContent}
				>
					{this.props.children}
				</Badge>
			</>
		);
	}
}

export default BadgeDefault;
