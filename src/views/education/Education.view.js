import { Component } from 'react';
import utils from '../../common/utils';
import Modal from '../../components/core/modals/Modal';

import './css/education.css';

class Education extends Component {
	constructor(props) {
		super(props);

		this.state = {
			education: [
				// 1 Konexio DevWeb
				{
					title: 'Développeur Web et Web mobile',
					school: {
						name: 'Konexio',
						url: 'https://www.konexio.eu',
						logo:
							this.props.path +
							'/images/companies/logo-konexio.png',
					},
					graduation: {
						name: 'Développeur web et web mobile',
						modals: [
							{
								type: 'image',
								url:
									this.props.path +
									'/images/certifications/RNCP31114.jpg',
								thumbnail:
									this.props.path +
									'/images/certifications/RNCP31114-icon.jpg',
								alt: 'diplôme Développeur Web et Web mobile',
							},
						],
						visible: false,
					},
					grade: 'RNCP Niveau 5',
					code: 'RNCP31114',
					description: [
						"Le développeur web et web mobile développe ou fait évoluer des applications orientées web, ou web mobile ou les deux à la fois, en respectant les normes et standards reconnus par la profession et en suivant l'état de l'art de la sécurité informatique à toutes les étapes. Ces applications sont destinées à des internautes ou des salariés d'entreprise.",
						"Le développeur conçoit la partie visuelle de l'application exécutée sur le navigateur côté ordinateur client. Il ébauche la maquette des écrans de l'interface utilisateur et prévoit la navigation de l'application web ou web mobile. Il code l'ensemble avec les langages de programmation web adaptés et une architecture applicative conforme aux bonnes pratiques du développement web et web mobile. Il réalise la partie visuelle de l'application dans un premier temps de manière statique et en la rendant adaptable au contexte puis dans un deuxième temps capable d'interagir avec l'utilisateur de manière dynamique.",
						"En fonction des besoins de l'utilisateur, il peut installer et adapter une solution préétablie de gestion de contenu ou d'e-commerce.",
						"Il respecte les principes de sécurisation des interfaces utilisateur et prend en compte la charte graphique, ou les interfaces utilisateur standardisées, ainsi que les règles d'accessibilité",
						"A la suite ou en parallèle au développement de la partie visuelle, le développeur conçoit et code la partie back-end, c'est-à-dire exécutée côté serveur pour accéder aux données. Le développeur crée la base de données et développe les composants d'accès aux données pour pouvoir les afficher et les mettre à jour dans l'application web ou web mobile.",
						"Si le choix a été fait de mettre en œuvre une solution de gestion de contenu ou d'e-commerce, il développe des modules complémentaires pour adapter la solution choisie et installée au préalable.",
						"Il s'adapte en continu aux évolutions technologiques du secteur du développement web et web mobile. Pour assurer cette veille, l'usage de la langue anglaise est souvent requis pour la lecture et la compréhension de documentations techniques ainsi que pour assurer des échanges techniques au moyen de textes courts avec des développeurs distants pouvant être de nationalités différentes.",
						"Il peut travailler éventuellement à distance en tant que salarié d'une entreprise, ou pour un client de la société de services qui l'emploie, ou en tant qu'indépendant directement pour un client. Ses activités diffèrent selon la taille de l'entreprise. En PME, il peut mener seul le développement d'un projet. Dans une grande structure, il travaille soit au sein d'une équipe hiérarchisée sous la responsabilité d'un chef de projet, soit en équipe pluridisciplinaire. Il applique les normes de qualité logicielle de son entreprise ou de son prestataire de services. Il applique les recommandations de sécurité émises par l'Agence Nationale de la Sécurité des Systèmes d'Information (ANSSI).",
						'Les environnements de développement et de test sont prédéfinis par un Lead Developer ou un chef de projet.',
						'Il participe aux réunions de projet et aux ateliers de présentations utilisateurs.',
						"Dans le cadre d'un développement en approche de type Agile, il échange avec l'utilisateur ou un responsable de maîtrise d'ouvrage. Il est encadré éventuellement par un développeur plus expérimenté (lead developer).",
						"Dans le cadre d'un développement en approche classique, il n'a pas d'échange direct avec l'utilisateur et il est encadré par un chef de projet.",
						"Le développeur travaille en équipe. Il utilise notamment des outils de gestion de version et des outils collaboratifs. Selon le contexte, il collabore avec d'autres développeurs, un ergonome, un web designer, un architecte logiciel, un testeur et avec le responsable de la sécurité des systèmes d'information (RSSI) de son entreprise, de son client ou de son hébergeur.",
						"Assurant sa mission dans des entreprises et des contextes professionnels divers, il est mobile géographiquement et s'adapte aux nouveaux environnements de travail.",
					],
					skills: [
						{
							bloc: "Développer la partie front-end d'une application web ou web mobile en intégrant les recommandations de sécurité",
							skills: [
								'Maquetter une application.',
								'Réaliser une interface utilisateur web statique et adaptable.',
								'Développer une interface utilisateur web dynamique.',
								'Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce.',
							],
						},
						{
							bloc: "Développer la partie back-end d'une application web ou web mobile en intégrant les recommandations de sécurité",
							skills: [
								'Créer une base de données.',
								"Développer les composants d'accès aux données.",
								"Développer la partie back-end d'une application web ou web mobile.",
								'Elaborer et mettre en œuvre des composants dans une application de gestion de contenu ou e-commerce.',
							],
						},
					],
					certified: true,
					dateStart: '05-01-2020',
					dateEnd: '10-01-2020',
				},
				// 2 IB ITIL
				{
					title: 'ITIL V4 foundation',
					school: {
						name: 'IB formation',
						url: 'https://www.cegos.fr',
						logo: this.props.path + '/images/companies/logo-ib.png',
					},
					graduation: null,
					grade: null,
					code: null,
					description: [
						'Comprendre les différentes phases et les processus du cycle de vie des services informatiques.',
						"Comprendre la terminologie et les concepts d'ITIL®.",
					],
					skills: [
						{
							bloc: 'Stratégie des services',
							skills: [
								"Quels services l'organisation informatique doit-elle offrir à ses clients ou interlocuteurs internes.",
								'Comment développer un marché pour ces services.',
								'Comment créer de la valeur pour les clients ou interlocuteurs internes.',
								'Comment traduire les objectifs business en termes de services.',
								'Comment évaluer la pertinence des demandes.',
								"Comment prendre les bonnes décisions en terme d'investissement.",
							],
						},
						{
							bloc: 'Conception des services',
							skills: [
								'Concevoir des services utiles avec des garanties satisfaisantes en termes de disponibilité, capacité, continuité et sécurité.',
								'Trouver les meilleures solutions de service et développer de manière efficace les processus de gestion de services.',
							],
						},
						{
							bloc: 'Transition des services',
							skills: [
								'Mettre en œuvre les éléments nécessaires pour développer, construire, tester, valider et déployer de nouveaux services ou modifier des services existants, tout en réduisant les risques.',
							],
						},
						{
							bloc: 'Exploitation des services',
							skills: [
								"Les bonnes pratiques liées à la fourniture et au support des services en production afin d'assurer une valeur optimale aux clients ou interlocuteurs internes en restant réactif et proactif.",
							],
						},
						{
							bloc: 'Amélioration continue des services',
							skills: [
								'Améliorer la valeur apportée aux clients ou interlocuteurs internes à travers une gestion opérationnelle plus efficace et une organisation plus efficiente.',
								'Améliorer les services et les processus informatiques pour aller dans ce sens.',
							],
						},
					],
					certified: null,
					dateStart: null,
					dateEnd: '10-09-2019',
				},
				// 3 Cap SQL
				{
					title: 'Consolidation et optimisation SQL',
					school: {
						name: 'Capgemini',
						url: 'https://www.capgemini.com',
						logo:
							this.props.path +
							'/images/companies/logo-capgemini.png',
					},
					graduation: null,
					grade: null,
					code: null,
					description: [''],
					skills: [
						{
							bloc: '',
							skills: [''],
						},
					],
					certified: null,
					dateStart: null,
					dateEnd: '04-01-2018',
				},
				// 4 Orsys C#
				{
					title: 'Introduction à la programmation avec C# ',
					school: {
						name: 'Orsys',
						url: 'https://www.orsys.com',
						logo:
							this.props.path +
							'/images/companies/logo-orsys.png',
					},
					graduation: null,
					grade: null,
					code: null,
					description: [
						"Ce cours présente les fondements de la programmation impérative : les variables, les conditionnelles, les boucles, les fonctions et l'accès aux bases de données. Les nombreux TP sont en C#, mais tous les langages de programmation se ressemblent. Vous pourrez, ensuite, passer sans grande difficulté au C, ou au Python.",
					],
					skills: [
						{
							bloc: 'Objectifs',
							skills: [
								'Structurer des programmes selon un algorithme',
								"Maîtriser les éléments de lexique et de syntaxe d'un langage pour écrire un programme",
								'Compiler et exécuter un programme',
								'Déboguer et tester un programme',
								'Accéder à une base de données',
								'Comprendre les grands principes de la Programmation Orientée Objet',
							],
						},
					],
					certified: null,
					dateStart: null,
					dateEnd: '06-01-2018',
				},
				// 5 FCC SQL
				{
					title: "Interrogation d'une base de données SQL server avec Transact-SQL",
					school: {
						name: 'FC consulting',
						url: null,
						logo: null,
					},
					graduation: null,
					grade: null,
					code: null,
					description: [''],
					skills: [
						{
							bloc: '',
							skills: [''],
						},
					],
					certified: null,
					dateStart: null,
					dateEnd: '07-01-2014',
				},
				// 6 IB Objet
				{
					title: 'La conception orientée objet',
					school: {
						name: 'IB formation',
						url: 'https://www.cegos.fr',
						logo: this.props.path + '/images/companies/logo-ib.png',
					},
					graduation: null,
					grade: null,
					code: null,
					description: [
						'Mettre en oeuvre les principes fondamentaux de la conception orientée objet et de concevoir des applications.',
					],
					skills: [
						{
							bloc: 'Objectifs',
							skills: [
								'Appliquer les principes de la Conception Orientée Objet',
								'Maîtriser la syntaxe du langage Java',
								'Concevoir des applications Java utilisant des classes',
								'Utiliser les outils de développement associés au langage Java',
								'Maîtriser les ajouts majeurs de la norme Java',
							],
						},
					],
					certified: null,
					dateStart: null,
					dateEnd: '01-01-2014',
				},
				// 7 LT C#
				{
					title: 'Les fondamentaux de la programmation C#',
					school: {
						name: 'Learning Tree',
						url: null,
						logo:
							this.props.path +
							'/images/companies/logo-learning-tree.png',
					},
					graduation: null,
					grade: null,
					code: null,
					description: [
						'Mettre en oeuvre les principes fondamentaux de la conception orientée objet et de concevoir des applications.',
					],
					skills: [
						{
							bloc: 'Objectifs',
							skills: [
								'Appliquer les principes de la Conception Orientée Objet',
								'Maîtriser la syntaxe du langage Java',
								'Concevoir des applications Java utilisant des classes',
								'Utiliser les outils de développement associés au langage Java',
								'Maîtriser les ajouts majeurs de la norme Java',
							],
						},
					],
					certified: null,
					dateStart: null,
					dateEnd: '01-01-2014',
				},
			],
			modalsStatus: { rncp: 'hidden' },
		};
	}

	changeModalStatus = () => {
		console.log(
			'views/education/Education.js/ #changeModalStatus this.state.modalStatus >>>',
			this.state.modalStatus
		);
		switch (this.state.modalsStatus.rncp) {
			case 'hidden':
				this.setState({
					modalsStatus: {
						...this.state.modalsStatus,
						rncp: 'visible',
					},
				});
				break;
			case 'visible':
				this.setState({
					modalsStatus: {
						...this.state.modalsStatus,
						rncp: 'hidden',
					},
				});
				break;
			default:
				break;
		}
	};

	renderGraduation(content) {
		return (
			<>
				{content.type === 'image' && (
					<img
						src={content.url}
						alt={content.alt}
						className="modalContent"
					/>
				)}
			</>
		);
	}

	render() {
		return (
			<>
				<Modal
					modalStatus={this.state.modalsStatus.rncp}
					changeModalStatus={this.changeModalStatus}
					content={this.renderGraduation(
						this.state.education[0].graduation.modals[0]
					)}
				></Modal>
				<section id="education">
					<h2>Ma formation</h2>

					<div className="articles">
						{this.state.education
							.filter((training) => {
								return training.dateStart !== null;
							})
							.map((training, key) => {
								return (
									<article key={key}>
										<div className="width-12 height-20">
											<h3 className="title">
												{training.title}
											</h3>
											{training.school.logo && (
												<img
													className="logo"
													src={training.school.logo}
													alt={
														'Logo de la société ' +
														training.school.name
													}
												/>
											)}
											<h3 className="school">
												{training.school.name}
											</h3>
											<h4>
												De{' '}
												{utils.month(
													training.dateStart
												)}{' '}
												{utils.year(training.dateStart)}{' '}
												à{' '}
												{utils.month(training.dateEnd)}{' '}
												{utils.year(training.dateEnd)}
											</h4>
											{training.description[0] && (
												<article className="description">
													<p>
														{
															training
																.description[0]
														}
													</p>
												</article>
											)}
											<img
												className="media"
												onClick={this.changeModalStatus}
												src={
													training.graduation
														.modals[0].thumbnail
												}
												alt={`miniature du diplome`}
											/>
										</div>
									</article>
								);
							})}
					</div>

					<h2>Mes formations professionnelles significatives</h2>
					<div className="articles">
						{this.state.education
							.filter((training) => {
								return training.dateStart === null;
							})
							.map((training, key) => {
								return (
									<article className="training" key={key}>
										<div className="width-12 height-20">
											<h3 className="title">
												{training.title}
											</h3>
											{training.school.logo && (
												<img
													className="logo"
													src={training.school.logo}
													alt={
														'Logo de la société ' +
														training.school.name
													}
												/>
											)}
											<h3 className="school">
												{training.school.name}
											</h3>
											<h4>
												{utils.month(training.dateEnd) +
													' ' +
													utils.year(
														training.dateEnd
													)}
											</h4>
											{training.description[0] && (
												<article className="description">
													<p>
														{
															training
																.description[0]
														}
													</p>
												</article>
											)}
										</div>
									</article>
								);
							})}
					</div>
				</section>
			</>
		);
	}
}

export default Education;
