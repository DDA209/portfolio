import { Component } from 'react';
import './experiences.css';
import Card from '../../components/core/cards/Card';
import FormExperience from '../../components/core/forms/FormExperience';

class Experiences extends Component {
	constructor(props) {
		super(props);

		this.state = {
			jobTitle: {
				full: "Développeur d'application Web",
				short: 'Développeur Web full stack',
			},
			workingContract: 'Stage',
			typeOfWorkLocation: 'Télétravail complet',
			company: {
				name: 'mes Producteurs mes Cuisiniers',
				activityArea: 'Editeur Web',
				logo: '/images/companies/logo-mpmc.png',
			},
			locations: [
				{
					zipCode: ['75', '013'],
					city: 'Paris',
					canton: '',
					department: 'Paris',
					region: 'île de France',
					state: '',
					country: 'France',
				},
			],
			dateStart: Date.now(),
			dateEnd: '02/11/2018',
			clients: [
				// {
				// 	name: 'clientname',
				// 	activityArea: 'activité',
				// 	logo: '/images/companies/logo-itce.jpg',
				// },
				// {
				// 	name: '',
				// 	activityArea: '',
				// 	logo: '',
				// },
			],
			descriptions: {
				full: [
					"Création d'une application en totale autonomie",
					"Maquetter l'application, modéliser / designer la base de données et la développer, développer l'API REST, le back-end et le front-end de l'application.",
					// 'Être force de proposition dans différents domaines.',
					// 'Recruter et accompagner de nouveaux développeurs.',
				],
				short: "Développement d'une application from scratch",
			},
			achievements: ['fini les objectifs'],
			skills: {
				hardSkills: [
					{
						groupName: 'languages',
						skills: [
							'HTML',
							'CSS',
							'JavaScript',
							// 'MongoDB',
							// 'Express.JS',
							// 'React',
							// 'Node.JS',
							// 'Pyton',
							// 'Django',
							// 'MySQL',
							// 'Bootstrap',
						],
					},
					{
						groupName: 'tools',
						skills: ['GitLab', 'Free Mind', 'Draw IO', 'Miro'],
					},
					{
						groupName: 'communication',
						skills: ['Slack'],
					},
				],
				softSkills: [
					{
						groupName: 'savoir être',
						skills: [
							'autonome',
							'force de proposition',
							'recrutement',
							"détection et correction d'anomalies",
						],
					},
				],
				madSkills: [{ groupName: 'joy', skills: ['fédérateur'] }],
			},
		};
		// this.experiencesAdd = this.experiencesAdd.bind(this);
	}
	experiencesAdd() {
		return (
			<div className="experiences">
				<h2>Add an experience</h2>
				<FormExperience experience={this.state} />
				<Card
					context="consultation"
					type="experience"
					datas={this.state}
				/>
			</div>
		);
	}
	render() {
		return <>{this.experiencesAdd()}</>;
	}
}

export default Experiences;
