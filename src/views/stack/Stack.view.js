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
					},
				},
				{
					name: 'HTML 5',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-html5.svg',
						description: 'logo of HTML 5',
					},
				},
				{
					name: 'CSS 3',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-css3.svg',
						description: 'logo of CSS 3',
					},
				},
				{
					name: 'JavaScript',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-javascript.svg',
						description: 'logo of JavaScript',
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
					name: 'Autoit',
					types: ['technic', 'development'],
					picture: {
						url: '/images/stack/logo-autoit.svg',
						description: 'logo of Autoit',
					},
				},
				{
					name: 'git',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-git.svg',
						description: 'logo of git',
					},
				},
				{
					name: 'GitHub',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-github.svg',
						description: 'logo of GitHub',
					},
				},
				{
					name: 'GitLab',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-gitlab.svg',
						description: 'logo of GitLab',
					},
				},
				{
					name: 'MDN',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-mdn.svg',
						description: 'logo of MDN',
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
					name: 'Express.JS',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-express.svg',
						description: 'logo of Express.JS',
					},
				},
				{
					name: 'mongoDB',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-mongodb-wordmark.svg',
						description: 'logo of mongo DB',
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
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-gimp2.svg',
						description: 'logo of Gimp',
					},
				},
				{
					name: 'Inkscape',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-inkscape.svg',
						description: 'logo of Inkscape',
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
