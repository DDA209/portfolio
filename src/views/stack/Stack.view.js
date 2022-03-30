import { Component } from 'react';
import CardSticker from '../../components/cards/CardSticker';
import './css/stackView.css';

class StackView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			skills: [
				{
					name: 'mongoDB',
					types: ['technic', 'database'],
					picture: {
						url: '/images/stack/logo-mongodb-wordmark.svg',
						description: 'logo of mongo DB',
					},
				},
				{
					name: 'Express.JS',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-express.svg',
						description: 'logo of Express.JS',
					},
				},
				{
					name: 'React',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-react.svg',
						description: 'logo of react',
					},
				},
				{
					name: 'Node',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-node-wordmark.svg',
						description: 'logo of Node',
					},
				},
				{
					name: 'HTML 5',
					types: ['technic', 'language'],
					picture: {
						url: '/images/stack/logo-html5.svg',
						description: 'logo of HTML 5',
					},
				},
				{
					name: 'CSS 3',
					types: ['technic', 'language'],
					picture: {
						url: '/images/stack/logo-css3.svg',
						description: 'logo of CSS 3',
					},
				},
				{
					name: 'JavaScript',
					types: ['technic', 'language'],
					picture: {
						url: '/images/stack/logo-javascript.svg',
						description: 'logo of JavaScript',
					},
				},
				{
					name: 'Bootstrap',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-bootstrap.svg',
						description: 'logo of Bootstrap',
					},
				},
				{
					name: 'git',
					types: ['technic', 'tools'],
					picture: {
						url: '/images/stack/logo-git.svg',
						description: 'logo of git',
					},
				},
				{
					name: 'GitHub',
					types: ['technic', 'tools'],
					picture: {
						url: '/images/stack/logo-github.svg',
						description: 'logo of GitHub',
					},
				},
				{
					name: 'GitLab',
					types: ['technic', 'tools'],
					picture: {
						url: '/images/stack/logo-gitlab.svg',
						description: 'logo of GitLab',
					},
				},
				{
					name: 'MDN',
					types: ['technic', 'documentation'],
					picture: {
						url: '/images/stack/logo-mdn.svg',
						description: 'logo of MDN',
					},
				},
				{
					name: 'mongoose',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-mongoose.svg',
						description: 'logo of mongoose',
					},
				},
				{
					name: 'Gimp',
					types: ['technic', 'Graphism'],
					picture: {
						url: '/images/stack/logo-gimp2.svg',
						description: 'logo of Gimp',
					},
				},
				{
					name: 'Inkscape',
					types: ['technic', 'Graphism'],
					picture: {
						url: '/images/stack/logo-inkscape.svg',
						description: 'logo of Inkscape',
					},
				},
				{
					name: 'Autoit',
					types: ['technic', 'language'],
					picture: {
						url: '/images/stack/logo-autoit.svg',
						description: 'logo of Autoit',
					},
				},
			],
		};
	}
	render() {
		return (
			<section id="stack">
				<h2>Mes technos préférées</h2>
				<div className="cards-container">
					{this.state.skills.map((skill, key) => {
						return (
							<CardSticker
								key={key}
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
