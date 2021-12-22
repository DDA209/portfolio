import { Component } from 'react';
import CardSticker from '../../components/cards/CardSticker';

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
					name: 'github',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-github.svg',
						description: 'logo of github',
					},
				},
				{
					name: 'inkscape',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-inkscape.svg',
						description: 'logo of inkscape',
					},
				},
				{
					name: 'CSS 3',
					types: ['technic', 'framework'],
					picture: {
						url: '',
						description: 'logo of CSS 3',
					},
				},
				{
					name: 'javascript',
					types: ['technic', 'framework'],
					picture: {
						url: '',
						description: 'logo of javascript',
					},
				},
				{
					name: 'react',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-react.svg',
						description: 'logo of react',
					},
				},
				{
					name: 'html 5',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-html5.svg',
						description: 'logo of html5',
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
					name: 'gitlab',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-gitlab.svg',
						description: 'logo of gitlab',
					},
				},
				{
					name: 'node',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-node.svg',
						description: 'logo of node',
					},
				},
				{
					name: 'gimp',
					types: ['technic', 'framework'],
					picture: {
						url: '/images/stack/logo-gimp2.svg',
						description: 'logo of gimp',
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
