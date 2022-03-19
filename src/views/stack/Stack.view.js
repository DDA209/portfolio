import { Component } from 'react';
import CardSticker from '../../components/cards/CardSticker';
import './css/stackView.css';

class StackView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			skills: [
				{
					name: 'Bootstrap',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-bootstrap.svg',
						description: 'logo of Bootstrap',
						priority: 10,
					},
				},
				{
					name: 'HTML 5',
					types: ['technic', 'language'],
					picture: {
						url: '/images/stack/logo-html5.svg',
						description: 'logo of HTML 5',
						priority: 3,
					},
				},
				{
					name: 'CSS 3',
					types: ['technic', 'language'],
					picture: {
						url: '/images/stack/logo-css3.svg',
						description: 'logo of CSS 3',
						priority: 2,
					},
				},
				{
					name: 'JavaScript',
					types: ['technic', 'language'],
					picture: {
						url: '/images/stack/logo-javascript.svg',
						description: 'logo of JavaScript',
						priority: 3,
					},
				},
				{
					name: 'React',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-react.svg',
						description: 'logo of react',
						priority: 6,
					},
				},
				{
					name: 'Autoit',
					types: ['technic', 'language'],
					picture: {
						url: '/images/stack/logo-autoit.svg',
						description: 'logo of Autoit',
						priority: 0,
					},
				},
				{
					name: 'git',
					types: ['technic', 'tools'],
					picture: {
						url: '/images/stack/logo-git.svg',
						description: 'logo of git',
						priority: 7,
					},
				},
				{
					name: 'GitHub',
					types: ['technic', 'tools'],
					picture: {
						url: '/images/stack/logo-github.svg',
						description: 'logo of GitHub',
						priority: 8,
					},
				},
				{
					name: 'GitLab',
					types: ['technic', 'tools'],
					picture: {
						url: '/images/stack/logo-gitlab.svg',
						description: 'logo of GitLab',
						priority: 9,
					},
				},
				{
					name: 'MDN',
					types: ['technic', 'documentation'],
					picture: {
						url: '/images/stack/logo-mdn.svg',
						description: 'logo of MDN',
						priority: 13,
					},
				},
				{
					name: 'Node',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-node-wordmark.svg',
						description: 'logo of Node',
						priority: 7,
					},
				},
				{
					name: 'Express.JS',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-express.svg',
						description: 'logo of Express.JS',
						priority: 5,
					},
				},
				{
					name: 'mongoDB',
					types: ['technic', 'database'],
					picture: {
						url: '/images/stack/logo-mongodb-wordmark.svg',
						description: 'logo of mongo DB',
						priority: 4,
					},
				},
				{
					name: 'mongoose',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-mongoose.svg',
						description: 'logo of mongoose',
						priority: 10,
					},
				},
				{
					name: 'Gimp',
					types: ['technic', 'Graphism'],
					picture: {
						url: '/images/stack/logo-gimp2.svg',
						description: 'logo of Gimp',
						priority: 11,
					},
				},
				{
					name: 'Inkscape',
					types: ['technic', 'Graphism'],
					picture: {
						url: '/images/stack/logo-inkscape.svg',
						description: 'logo of Inkscape',
						priority: 12,
					},
				},
			],
		};
	}
	render() {
		return (
			<section id="stack">
				<h2>Mes technos</h2>
				<div className="cards-container">
					{this.state.skills.map((skill) => {
						return (
							<CardSticker
								type="skill"
								skillTypes={skill.types}
								picture={skill.picture}
								name={skill.name}
							/>
						);
					})}
				</div>
			</section>
		);
	}
}

export default StackView;
