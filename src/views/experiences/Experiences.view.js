import { Component } from 'react';
import Card from '../../components/core/cards/Card';

import './css/experiences.css';

class ExperiencesView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			experiences: [
				{
					jobTitle: {
						full: 'Développeur formateur stack MERN',
						short: 'Formateur dev Web',
					},
					workingContract: 'CDD',
					typeOfWorkLocation: 'Présentiel',
					company: {
						name: 'Konexio',
						activityArea: 'Centre de formation',
						logo: '/images/companies/logo-konexio.png',
					},
					locations: [
						{
							zipCode: ['75', '020'],
							city: 'Paris',
							canton: '',
							department: 'Paris',
							region: 'île de France',
							state: '',
							country: 'France',
						},
					],
					dateStart: '06/28/2021',
					dateEnd: Date.now(),
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
							'Accompagner les stagiaires dans leur apprentissage du développement',
							"Effectuer les entretiens individuels et suivi d'apprentissage",
							'Animer des ateliers softskills, accueillir les intervenants',
							'Transmettre des connaissances techniques et non techniques',
							'Corriger les tests techniques des futur.e.s stagiaires',
							'Participer aux entretiens des nouveaux formateurs.rices et évaluer leurs compétences techniques et à leur intégration auprès des stagiaires',
						],
						short: 'Former aux développement Web full stack',
					},
					achievements: [
						'La majorité des stagiaires ont pu rejoindre un stage',
					],
					skills: {
						hardSkills: [
							{
								groupName: 'languages',
								skills: [
									'HTML',
									'CSS',
									'JavaScript',
									'MongoDB',
									'Express.JS',
									'React',
									'Node.JS',
									'Bootstrap',
								],
							},
							{
								groupName: 'tools',
								skills: [
									'GitHub',
									'Mdn',
									'Stack overflow',
									'Notion',
								],
							},
							{
								groupName: 'communication',
								skills: ['Slack', 'Google Meet'],
							},
						],
						softSkills: [
							{
								groupName: 'savoir être',
								skills: [
									'force de proposition',
									'recrutement',
									'pédagogie',
									'gestion de crise',
								],
							},
						],
						madSkills: [
							{ groupName: 'joy', skills: ['fédérateur'] },
						],
					},
				},
				{
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
					dateStart: '11/01/2020',
					dateEnd: '05/01/2021',
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
							'Être force de proposition dans différents domaines.',
							'Recruter et accompagner de nouveaux développeurs.',
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
									'MongoDB',
									'Express.JS',
									'React',
									'Node.JS',
									'Pyton',
									'Django',
									'MySQL',
									'Bootstrap',
								],
							},
							{
								groupName: 'tools',
								skills: [
									'GitLab',
									'Free Mind',
									'Draw IO',
									'Miro',
								],
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
						madSkills: [
							{ groupName: 'joy', skills: ['fédérateur'] },
						],
					},
				},
				{
					jobTitle: {
						full: 'Analyste technique',
						short: 'Analyste technique',
					},
					workingContract: 'CDI',
					typeOfWorkLocation: 'Clientèle',
					company: {
						name: 'Capgemini',
						activityArea: 'Entreprise de services du numérique',
						logo: '/images/companies/logo-capgemini.png',
					},
					locations: [
						{
							zipCode: ['67', '300'],
							city: 'Schiltigheim',
							canton: '',
							department: 'Bas-Rhin',
							region: 'Gand-Est',
							state: '',
							country: 'France',
						},
					],
					dateStart: '01/01/2019',
					dateEnd: '12/01/2019',
					clients: [
						{
							name: 'Transactis',
							activityArea: 'Bancaire, monétique',
							logo: '/images/companies/logo-transactis.png',
						},
						// {
						// 	name: 'Schmidt Groupe',
						// 	activityArea:
						// 		'Industrie du meubles',
						// 	logo: '/images/companies/logo-schmidt.png',
						// },
						// {
						// 	name: 'Novartis',
						// 	activityArea: 'Industrie bio-pharmaceutique',
						// 	logo: '/images/companies/logo-novartis.png',
						// },
					],
					descriptions: {
						full: [
							'- Expert support technique :',
							'clients : PriceWaterhouseCoopers, Mars, Air Liquide, Conseil Départemental du Haut-Rhin',
							'',
							'- Analyste monétique :',
							'clients : IT-CE, Transactis (Société Générale, La Banque Postale, Crédit du Nord)',
							'',
							'- Technicien Qualifié pharmaceutique GxP :',
							'client : Novartis',
						],
						short: "Technicien senior, intégrateur d'applications, développeur",
					},
					achievements: ['22 ans de confiance'],
					skills: {
						hardSkills: [
							{
								groupName: 'languages',
								skills: ['HTML'],
							},
							{
								groupName: 'tools',
								skills: ['GitHub'],
							},
							{
								groupName: 'communication',
								skills: ['Slack'],
							},
						],
						softSkills: [
							{
								groupName: 'savoir être',
								skills: ['force de proposition'],
							},
						],
						madSkills: [
							{ groupName: 'joy', skills: ['fédérateur'] },
						],
					},
				},
			],
		};
		// this.experiencesViewAdd = this.experiencesAdd.bind(this);
	}

	experiences() {
		return (
			<section id="experiences">
				<h2>Mes expériences</h2>
				<div className="cards-container">
					{this.state.experiences.map((experience) => {
						return (
							<Card
								context="consultation"
								type="experience"
								datas={experience}
							/>
						);
					})}
				</div>
			</section>
		);
	}
	render() {
		return <>{this.experiences()}</>;
	}
}

export default ExperiencesView;
