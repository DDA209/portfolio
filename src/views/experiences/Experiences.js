import React, { Component } from 'react';
import './experiences.css';
import Card from '../../components/core/cards/Card';
import FormExperience from '../../components/core/forms/FormExperience';

class Experiences extends Component {
	constructor(props) {
		super(props);

		this.state = {
			jobTitle: { full: 'test', short: '' },
			workingContract: '',
			typeOfWorkLocation: '',
			companyName: '',
			locations: [
				{
					zipCode: ['', ''],
					city: '',
					canton: '',
					department: '',
					region: '',
					state: '',
					country: '',
				},
			],
			startDate: '01/01/2001',
			endDate: '01/02/2002',
			clients: [''],
			descriptions: { full: [''], short: '' },
			achievements: [''],
			skills: {
				hardSkills: [{ groupName: '', skills: [''] }],
				softSkills: [{ groupName: '', skills: [''] }],
				madSkills: [{ groupName: '', skills: [''] }],
			},
		};
		// this.experiencesAdd = this.experiencesAdd.bind(this);
	}
	experiencesAdd() {
		return (
			<div className="experiences">
				<h2>Add an experience</h2>
				<FormExperience experience={this.state} />
				<Card experience={this.state}>experience</Card>
			</div>
		);
	}
	render() {
		return <>{this.experiencesAdd()}</>;
	}
}

export default Experiences;
