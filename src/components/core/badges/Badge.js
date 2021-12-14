import { Component } from 'react';
import styled from 'styled-components';

const Badge = styled.div`
	background: linear-gradient(
		${(props) => props.colorBackground[2] || 0}deg,
		${(props) => props.colorBackground[0] || '#b0b0b0ff'},
		${(props) => props.colorBackground[1] || '#b0b0b0ff'}
	) !important;
	color: ${(props) => props.colorContent || '#202020ff'} !important;
	font-size: 0.8rem !important;
	height: 1rem !important;
	border-radius: 0.6rem !important;
	padding: 0rem 0.5rem 0.15rem 0.5rem !important;
	font-weight: 600 !important;
	margin: 0.1rem 0.3rem !important;
	display: inline-block !important;
`;
/**
 * 	{
 * 		***skillType*** : {
 * 			colorBackground: [
 * 				***first color***,
 * 				***second color***,
 * 				***angle in degres***
 * 			]
 * 			colorContent: ***Text or content color***,
 * 		}
 * 	}
 */
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
	action: {
		colorBackground: ['#000080ff', '#000080ff', 0],
		colorContent: '#ffffffff',
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
		console.log(
			'components/core/badges/Badges.js #render this.props.type >>>',
			this.props.type
		);
		return (
			<>
				<Badge
					as="div"
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