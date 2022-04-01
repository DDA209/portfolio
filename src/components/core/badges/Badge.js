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
	border-radius: 0rem !important;
	padding: 0.3rem 0.7rem 0.45rem 0.7rem !important;
	font-weight: 500 !important;
	margin: 0.15rem 0.15rem 0.15rem 0.15rem !important;
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
		colorBackground: ['#f0f0f0ff', '#f0f0f0ff', 0],
		colorContent: '#595c5fff',
	},
	languages: {
		colorBackground: ['#f0f0f0ff', '#f0f0f0ff', 0],
		colorContent: '#595c5fff',
	},
	tools: {
		colorBackground: ['#f0f0f0ff', '#f0f0f0ff', 0],
		colorContent: '#595c5fff',
	},
	communication: {
		colorBackground: ['#f0f0f0ff', '#f0f0f0ff', 0],
		colorContent: '#595c5fff',
	},
	os: {
		colorBackground: ['#f0f0f0ff', '#f0f0f0ff', 0],
		colorContent: '#595c5fff',
	},
	hardware: {
		colorBackground: ['#f0f0f0ff', '#f0f0f0ff', 0],
		colorContent: '#595c5fff',
	},
	skillSoft: {
		colorBackground: ['#f0f0f0ff', '#f0f0f0ff', 0],
		colorContent: '#595c5fff',
	},
	skillSocial: {
		colorBackground: ['#f0f0f0ff', '#f0f0f0ff', 0],
		colorContent: '#595c5fff',
	},
	action: {
		colorBackground: ['#f0f0f0ff', '#f0f0f0ff', 0],
		colorContent: '#595c5fff',
	},
};

class BadgeDefault extends Component {
	render() {
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
