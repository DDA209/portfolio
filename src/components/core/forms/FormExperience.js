import React, { Component } from 'react';
import ButtonSimple from '../buttons/ButtonSimple';
import './forms.css';
import { Formik, Form, Field } from 'formik';

class FormExperience extends Component {
	constructor(props) {
		super(props);
		this.state = {
			err: '',
			message: undefined,
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
							type="date"
							id="startDate"
							name="startDate"
						/>

						<label>Date de fin :</label>
						<Field
							className="input"
							type="date"
							id="endDate"
							name="endDate"
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
