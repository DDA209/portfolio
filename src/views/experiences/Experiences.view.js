import { Component } from 'react';
import Card from '../../components/core/cards/Card';

import './css/experiences.css';

class ExperiencesView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			experiences: [
				{
					id: 'konexio-1',
					jobTitle: {
						full: 'Développeur formateur stack MERN',
						short: 'Formateur dev Web',
					},
					workingContract: 'CDD',
					typeOfWorkLocation: 'Présentiel',
					company: {
						name: 'Konexio',
						activityArea: 'Centre de formation',
						logo:
							this.props.path +
							'/images/companies/logo-konexio.png',
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
					clients: [],
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
								groupName: 'know-how',
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
					id: 'mpmc-1',
					jobTitle: {
						full: "Développeur d'application Web full stack",
						short: 'Développeur Web full stack',
					},
					workingContract: 'Stage',
					typeOfWorkLocation: 'Télétravail complet',
					company: {
						name: 'mes Producteurs mes Cuisiniers',
						activityArea: 'Editeur Web',
						logo:
							this.props.path + '/images/companies/logo-mpmc.png',
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
					clients: [],
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
								groupName: 'know-how',
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
					id: 'transactis-1',
					jobTitle: {
						full: 'Analyste et homologateur monétique',
						short: 'Homologateur monétique',
					},
					workingContract: 'CDI',
					typeOfWorkLocation: 'Clientèle',
					company: {
						name: 'Capgemini',
						activityArea: 'Entreprise de services du numérique',
						logo:
							this.props.path +
							'/images/companies/logo-capgemini.png',
					},
					locations: [
						{
							zipCode: ['67', '600'],
							city: 'Sélestat',
							canton: '',
							department: 'Bas-Rhin',
							region: 'Gand-Est',
							state: '',
							country: 'France',
						},
					],
					dateStart: '01/01/2019',
					dateEnd: '12/31/2019',
					clients: [
						{
							name: 'Transactis',
							activityArea: 'Bancaire, monétique',
							logo:
								this.props.path +
								'/images/companies/logo-transactis.png',
						},
					],
					descriptions: {
						full: [
							'Réaliser et jouer les scénarios de tests.',
							'Détecter et remonter les anomalies aux interlocuteurs identifiés (développeurs, éditeurs, constructeurs, back et front office).',
							'Rédiger et transmettre les PV de test.',
							'Assurer la disponibilité de l’environnement de test.',
							'Former les nouveaux homologateurs aux outils et process.',
						],
						short: "Tester les mises à jour d'automates bancaires",
					},
					achievements: [
						'Environnement de test toujours disponible. Remontés pertinantes de bugs lors des tests',
					],
					skills: {
						hardSkills: [
							{
								groupName: 'tools',
								skills: [
									'HP ALM QC',
									'Kanest',
									'Argaus',
									'Archipel',
								],
							},
							{
								groupName: 'os',
								skills: ['Windows', 'z/OS mainframe', 'Neogab'],
							},
							{
								groupName: 'hardware',
								skills: ['GAB'],
							},
						],
						softSkills: [
							{
								groupName: 'know-how',
								skills: [
									'adaptabilité',
									'force de proposition',
									'polyvalence',
								],
							},
						],
						madSkills: [{ groupName: 'joy', skills: [''] }],
					},
				},
				{
					jobTitle: {
						full: 'Analyste développeur dans une TMA',
						short: 'Analyste développeur',
					},
					workingContract: 'CDI',
					typeOfWorkLocation: 'Clientèle',
					company: {
						name: 'Capgemini',
						activityArea: 'Entreprise de services du numérique',
						logo:
							this.props.path +
							'/images/companies/logo-capgemini.png',
					},
					locations: [
						{
							zipCode: ['67', '600'],
							city: 'Selestat',
							canton: '',
							department: 'Bas-Rhin',
							region: 'Gand-Est',
							state: '',
							country: 'France',
						},
					],
					dateStart: '03/01/2014',
					dateEnd: '12/31/2018',
					clients: [
						{
							name: 'Schmidt Groupe',
							activityArea: 'Industrie, meuble',
							logo:
								this.props.path +
								'/images/companies/logo-schmidt.png',
						},
					],
					descriptions: {
						full: [
							'Analyser les pannes et alertes applicatives.',
							'Développer, tester et mettre en production des correctifs et contrôles.',
							'Présenter les modifications du SI à la production.',
							'Communiquer à la production les impacts et délais.',
							'Anticiper les besoins de la production.',
							'Mettre en place et faire évoluer la documentation.',
						],
						short: 'Maintenir opérationnel les outils numériques de la production',
					},
					achievements: [
						'Résolutions de pannes et maintien de la production',
					],
					skills: {
						hardSkills: [
							{
								groupName: 'languages',
								skills: ['Transact-SQL', 'C#'],
							},
							{
								groupName: 'tools',
								skills: ['Nagios', 'Acronis'],
							},
							{
								groupName: 'os',
								skills: ['Windows CE', 'Windows 10'],
							},
							{
								groupName: 'hardware',
								skills: [
									'PC',
									'Lecteurs codes-barres',
									'Usines de meubles',
								],
							},
						],
						softSkills: [
							{
								groupName: 'know-how',
								skills: [
									'adaptabilité',
									'force de proposition',
									'ployvalence',
									'adaptabilité relationnelle',
									'adaptabilité technique',
								],
							},
						],
						madSkills: [{ groupName: 'joy', skills: [''] }],
					},
				},
			],
		};
	}

	experiences() {
		return (
			<section id="experiences">
				<h2>Mes expériences significatives</h2>
				<div className="cards-container">
					{this.state.experiences.map((experience, key) => {
						return (
							<Card
								key={key}
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
