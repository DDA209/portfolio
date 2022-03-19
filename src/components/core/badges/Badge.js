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
	margin: 0.05rem 0.5rem 0.15rem 0rem !important;
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
	languages: {
		colorBackground: ['#90e0e8ff', '#90e0e8ff', 0],
		colorContent: '#000000ff',
	},
	tools: {
		colorBackground: ['#c02000ff', '#c02000ff', 0],
		colorContent: '#ffffffff',
	},
	communication: {
		colorBackground: ['#009000ff', '#009000ff', 0],
		colorContent: '#ffffffff',
	},
	os: {
		colorBackground: ['#0050d0ff', '#0050d0ff', 0],
		colorContent: '#ffffffff',
	},
	hardware: {
		colorBackground: ['#ffd810ff', '#ffd810ff', 0],
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
			'components/core/badges/Badges.js #render this.props.group >>>',
			this.props.group
		);
		return (
			<>
				<Badge
					as="div"
					colorBackground={
						this.props.group === undefined
							? colors[this.props.type].colorBackground
							: colors[this.props.group].colorBackground
					}
					colorContent={
						this.props.group === undefined
							? colors[this.props.type].colorContent
							: colors[this.props.group].colorContent
					}
				>
					{this.props.children}
				</Badge>
			</>
		);
	}
}

export default BadgeDefault;
