import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import ButtonSimple from '../buttons/ButtonSimple';
import Card from '../cards/Card';

import './css/forms.css';
const context = 'form';

class FormExperience extends Component {
	constructor(props) {
		super(props);
		this.state = {
			err: '',
			message: undefined,
			datas: {
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
						"Création d'une application en totale autonomie.",
						"Maquetter de l'application, designer et créer la base de donnée, développer de l'API REST et du backend. Développer le front end de l'application.",
						'Être force de proposition dans différent.',
						'Recruter et accompagner des nouveaux développeurs.',
					],
					short: "Développement d'une application from scratch",
				},
				achievements: ['fini les objectifs'],
				skills: {
					hardSkills: [],
					softSkills: [],
					madSkills: [],
				},
			},
		};
	}

	render() {
		return (
			<>
				<Formik
					initialValues={{
						startDate: '',
						endDate: Date.now(),
						company: '',
						client: '',
					}}
					onSubmit={(values) => {
						const entredValues = JSON.stringify(values, null, 2);
						console.log(
							'Components/forms/FormExperience.js Formik onSubmit entredValues >>>',
							entredValues
						);
					}}
				>
					<Form className="form">
						<label>Date de début :</label>
						<Field
							className="input"
							id="startDate"
							name="startDate"
							type="month"
						/>

						<label>Date de fin :</label>
						<Field
							className="input"
							id="endDate"
							name="endDate"
							type="month"
							min={this.state.datas.startDate}
						/>

						<label>Intitulé du poste :</label>
						<Field
							className="input"
							type="text"
							id="jobTitle"
							name="jobTitle"
						/>

						<label>Entreprise :</label>
						<Field
							className="input"
							type="text"
							id="company"
							name="company"
						/>

						<label>Client :</label>
						<Field
							className="input"
							type="text"
							id="client"
							name="client"
						/>

						<Card
							type={'experience'}
							context={context}
							datas={this.state.datas}
						/>
						<ButtonSimple type="submit" value="addExperience">
							Ajouter
						</ButtonSimple>
					</Form>
				</Formik>
			</>
		);
	}
}

export default FormExperience;
