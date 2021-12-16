import { Component } from 'react';
import './css/cardExperience.css';
import '../../../css/scrollbars.css';
import Badge from '../badges/Badge';

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
		console.log(
			'components/core/cards/CardExperience.js #renders this.props >>>',
			this.props
		);
		console.log(
			'components/core/cards/CardExperience.js #renders this.props.context >>>',
			this.props.context
		);

		return (
			<div className="card-experience width-12 height-20">
				{/******************/}
				{/**  Card front  **/}
				{/******************/}
				<div className="card-front width-12 height-20">
					<div className="width-12 height-1">{/*empty*/}</div>
					{/**  Job title  **/}
					<div className="width-12 height-4">
						<h2>{this.props.datas.jobTitle.full}</h2>
						<hr />
					</div>
					{/**  date from  **/}
					<div className="width-6 height-2">
						<p className="text-left">
							De {this.month(this.props.datas.dateStart)}
						</p>
						<p className="text-left">
							{this.year(this.props.datas.dateStart)}
						</p>
					</div>
					{/**  date to  **/}
					<div className="width-6 height-2">
						<p className="text-right">
							À {this.month(this.props.datas.dateEnd)}
						</p>
						<p className="text-right">
							{this.year(this.props.datas.dateEnd)}
						</p>
					</div>{' '}
					{this.props.datas.clients.length === 1 ? (
						<>
							{/**  Company and client  **/}
							<div className="width-12 height-3">
								<h3>{this.props.datas.company.name}</h3>
							</div>
							<div className="width-2 height-3">{/*empty*/}</div>
							<div className="width-8 height-3 container-up logo">
								<img
									className="logo-compagny"
									src={this.props.datas.company.logo}
									alt={
										'Logo de la société ' +
										this.props.datas.company.name
									}
								/>
							</div>
							<div className="width-2 height-3">{/*empty*/}</div>
							<div className="width-12 height-3">
								<span>Client : </span>
								<h3>{this.props.datas.clients[0].name}</h3>
							</div>
							<div className="width-2 height-3">{/*empty*/}</div>
							<div className="width-8 height-3 container-up logo">
								<img
									className="logo-compagny"
									src={this.props.datas.clients[0].logo}
									alt={
										'Logo de la société ' +
										this.props.datas.clients[0].name
									}
								/>
							</div>
							<div className="width-2 height-3">{/*empty*/}</div>
						</>
					) : (
						<>
							{/**  Company only  **/}
							<div className="width-12 height-4">
								<h3>{this.props.datas.company.name}</h3>
							</div>
							<div className="width-2 height-8">{/*empty*/}</div>
							<div className="width-8 height-8 container-up logo">
								<img
									className="logo-compagny"
									src={this.props.datas.company.logo}
									alt={
										'Logo de la société ' +
										this.props.datas.company.name
									}
								/>
							</div>
							<div className="width-2 height-8">{/*empty*/}</div>
						</>
					)}
					<div className="width-12 height-1">{/*empty*/}</div>
				</div>
				{/*****************/}
				{/**  Card back  **/}
				{/*****************/}
				<div className="card-back width-12 height-20">
					{/**  Job title  **/}
					<div className="width-12 height-2">
						<h5>{this.props.datas.jobTitle.short}</h5>
					</div>
					{/**  date from  **/}
					<div className="width-4_5 height-2 ">
						<p className="text-left">
							{this.month(this.props.datas.dateStart)}{' '}
							{this.year(this.props.datas.dateStart)}
						</p>
					</div>
					<div className="width-3 height-2">
						<hr />
					</div>
					{/**  date to  **/}
					<div className="width-4_5 height-2 ">
						<p className="text-right">
							{this.month(this.props.datas.dateEnd)}{' '}
							{this.year(this.props.datas.dateEnd)}
						</p>
					</div>
					{/**  description and skills  **/}
					<div className="width-12 height-13">
						<div className="container-down  articles">
							<div className="width-12">
								<h6>
									Mission
									{this.props.datas.descriptions.full.length >
										1 && 's'}
								</h6>
								<article>
									{this.props.datas.descriptions.full.map(
										(achievement, index) => {
											return (
												<p key={index}>{achievement}</p>
											);
										}
									)}
								</article>
							</div>
							{this.props.datas.skills.length < 0 &&
							this.props.context === 'consultation' ? (
								''
							) : (
								<div className="width-12">
									<h6>Environnement technique</h6>
									<article className="skills">
										{this.props.context === 'form' && (
											<Badge type="action">+</Badge>
										)}
										{this.props.datas.skills.hardSkills.map(
											(skillGroup) => {
												return skillGroup.skills.map(
													(skill, index) => {
														return (
															<>
																<Badge
																	key={index}
																	type="skillTechnic"
																>
																	{skill}
																</Badge>
															</>
														);
													}
												);
											}
										)}
									</article>
								</div>
							)}
						</div>
					</div>

					{this.props.datas.clients.length === 1 ? (
						<>
							{/**  Company and client  **/}
							<div className="width-9 height-1">
								<h6>{this.props.datas.company.name}</h6>
							</div>
							<div className="width-3 height-1 logo">
								<img
									className="logo-compagny"
									src={this.props.datas.company.logo}
									alt={
										'Logo de la société ' +
										this.props.datas.company.name
									}
								/>
							</div>
							<div className="width-9 height-1">
								<span>Client : </span>
								<h6>{this.props.datas.clients[0].name}</h6>
							</div>
							<div className="width-3 height-1 logo">
								<img
									className="logo-compagny"
									src={this.props.datas.clients[0].logo}
									alt={
										'Logo de la société ' +
										this.props.datas.clients[0].name
									}
								/>
							</div>
						</>
					) : (
						<>
							{/**  Company only  **/}
							<div className="width-9 height-2 company-name">
								<h6>{this.props.datas.company.name}</h6>
							</div>
							<div className="width-3 height-2 logo">
								<img
									className="logo-compagny"
									src={this.props.datas.company.logo}
									alt={
										'Logo de la société ' +
										this.props.datas.company.name
									}
								/>
							</div>
						</>
					)}
					{/**  Activity area  **/}

					<div className="width-12 height-1">
						<span>Secteur d'activité : </span>
						{this.props.datas.clients.length === 1 ? (
							<h6>{this.props.datas.clients[0].activityArea}</h6>
						) : (
							<h6>{this.props.datas.company.activityArea}</h6>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default CardExperience;
