import React, { Component } from 'react';
import './cardExperience.css';

const util = require('util');

class CardExperience extends Component {
	month(date) {
		const monthTable = {
			Jan: 'janvier',
			Feb: 'février',
			Mar: 'mars',
			Apr: 'avril',
			May: 'mai',
			Jun: 'juin',
			Jul: 'juillet',
			Aug: 'août',
			Sep: 'sepembre',
			Oct: 'octobre',
			Nov: 'novembre',
			Dec: 'décembre',
		};
		const newDate = new Date(date).toDateString();
		const monthShort = newDate.split(' ')[1];
		const month = monthTable[monthShort];
		return month;
	}

	year(date) {
		const newDate = new Date(date).toDateString();
		const year = newDate.split(' ')[3];
		return year;
	}

	render() {
		const date = new Date(this.props.experience.dateStart).toDateString();
		console.log(
			'components/cards/CardExperience.js #render this.props.experience >>>',
			this.props.experience
		);
		console.log(
			'components/cards/CardExperience.js #render new Date(this.props.experience.dateStart) >>>',
			util.inspect(date, false, Infinity, true),
			'\n',
			date.split(' ')[3]
		);
		return (
			<div className="card-experience">
				<div className="card-front width-12 height-20">
					<div className="width-12 height-1">{/*empty*/}</div>
					<div className="width-12 height-4">
						<h2>{this.props.experience.jobTitle.full}</h2>
					</div>
					<div className="width-6 height-2">
						<p>De {this.month(this.props.experience.dateStart)}</p>
						<p>{this.year(this.props.experience.dateStart)}</p>
					</div>
					<div className="width-6 height-2">
						<p>À {this.month(this.props.experience.dateEnd)}</p>
						<p>{this.year(this.props.experience.dateEnd)}</p>
					</div>
					{this.props.experience.clients.length === 1 ? (
						<>
							<div className="width-12 height-3">
								<h3>{this.props.experience.company.name}</h3>
							</div>
							<div className="width-2 height-3">{/*empty*/}</div>
							<div className="width-8 height-3 container-up">
								<img
									className="logo-compagny"
									src={this.props.experience.company.logo}
									alt={
										'Logo de la société ' +
										this.props.experience.company.name
									}
								/>
							</div>
							<div className="width-2 height-3">{/*empty*/}</div>
							<div className="width-12 height-3">
								<span>Client : </span>
								<h3>{this.props.experience.clients[0].name}</h3>
							</div>
							<div className="width-2 height-3">{/*empty*/}</div>
							<div className="width-8 height-3 container-up">
								<img
									className="logo-compagny"
									src={this.props.experience.clients[0].logo}
									alt={
										'Logo de la société ' +
										this.props.experience.clients[0].name
									}
								/>
							</div>
							<div className="width-2 height-3">{/*empty*/}</div>
						</>
					) : (
						<>
							<div className="width-12 height-4">
								{this.props.experience.company.name}
							</div>
							<div className="width-2 height-8">{/*empty*/}</div>
							<div className="width-8 height-8 container-up">
								<img
									className="logo-compagny"
									src={this.props.experience.company.logo}
									alt={
										'Logo de la société ' +
										this.props.experience.company.name
									}
								/>
							</div>
							<div className="width-2 height-8">{/*empty*/}</div>
						</>
					)}
					<div className="width-12 height-1">{/*empty*/}</div>
				</div>
				<div className="card-back width-12 height-20">
					<div className="width-12 height-2">
						{this.props.experience.jobTitle.short}
					</div>
					<div className="width-5 height-2">
						<p>
							{this.month(this.props.experience.dateStart)}{' '}
							{this.year(this.props.experience.dateStart)}
						</p>
					</div>
					<div className="width-2 height-2">{/*empty*/}</div>
					<div className="width-5 height-2">
						<p>
							{this.month(this.props.experience.dateEnd)}{' '}
							{this.year(this.props.experience.dateEnd)}
						</p>
					</div>
					<div className="width-12 height-13 container-down">
						<div className="width-12">
							<h6>
								Mission
								{this.props.experience.achievements.length >
									1 && 's'}
							</h6>
							{this.props.experience.achievements.map(
								(achievement, index) => {
									return <p key={index}>{achievement}</p>;
								}
							)}
						</div>
						<div className="width-12">
							<h6>Environnement technique</h6>
							<ul>
								{this.props.experience.skills.hardSkills.map(
									(skillGroup) => {
										return skillGroup.skills.map(
											(skill, index) => {
												return (
													<li key={index}>{skill}</li>
												);
											}
										);
									}
								)}
							</ul>
						</div>
					</div>
					{this.props.experience.clients.length === 1 ? (
						<>
							<div className="width-8 height-1">
								<h5>{this.props.experience.company.name}</h5>
							</div>
							<div className="width-4 height-1 container-up">
								<img
									className="logo-compagny"
									src={this.props.experience.company.logo}
									alt={
										'Logo de la société ' +
										this.props.experience.company.name
									}
								/>
							</div>
							<div className="width-8 height-1">
								<span>Client : </span>
								<h5>{this.props.experience.clients[0].name}</h5>
							</div>
							<div className="width-4 height-1 container-up">
								<img
									className="logo-compagny"
									src={this.props.experience.clients[0].logo}
									alt={
										'Logo de la société ' +
										this.props.experience.clients[0].name
									}
								/>
							</div>
						</>
					) : (
						<>
							<div className="width-8 height-2">
								<span></span>
								<h5>{this.props.experience.company.name}</h5>
							</div>
							<div className="width-4 height-2 container-up">
								<img
									className="logo-compagny"
									src={this.props.experience.company.logo}
									alt={
										'Logo de la société ' +
										this.props.experience.company.name
									}
								/>
							</div>
						</>
					)}
					{this.props.experience.clients.length === 1 ? (
						<div className="width-12 height-1">
							{this.props.experience.clients[0].activityArea}
						</div>
					) : (
						<div className="width-12 height-1">
							{this.props.experience.company.activityArea}
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default CardExperience;
