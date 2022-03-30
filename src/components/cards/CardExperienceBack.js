import { Component } from 'react';
import './css/cardExperience.css';
import '../../css/scrollbars.css';
import Badge from '../core/badges/Badge';
import utils from '../../common/utils';

class CardExperienceBack extends Component {
	render() {
		return (
			<div className="card-back width-12 height-20">
				{/**  Job title  **/}
				<div className="width-12 height-2">
					<h4>{this.props.datas.jobTitle.short}</h4>
				</div>
				{/**  date from  **/}
				<div className="width-4_5 height-2 ">
					<p className="text-left">
						{utils.month(this.props.datas.dateStart)}{' '}
						{utils.year(this.props.datas.dateStart)}
					</p>
				</div>
				<div className="width-3 height-2">
					<div className="hr"></div>
				</div>
				{/**  date to  **/}
				<div className="width-4_5 height-2 ">
					<p className="text-right">
						{utils.month(this.props.datas.dateEnd)}{' '}
						{utils.year(this.props.datas.dateEnd)}
					</p>
				</div>
				{/**  description and skills  **/}
				<div className="width-12 height-13">
					<div className="container-down  articles">
						<div className="width-12">
							<h5>
								Mission
								{this.props.datas.descriptions.full.length >
									1 && 's'}
							</h5>
							<article>
								{this.props.datas.descriptions.full.map(
									(achievement, key) => {
										return <p key={key}>{achievement}</p>;
									}
								)}
							</article>
						</div>
						{this.props.datas.skills.length < 0 &&
						this.props.context === 'consultation' ? (
							''
						) : (
							<div className="width-12">
								<h5>Environnement technique</h5>
								<article className="skills">
									{this.props.context === 'form' && (
										<Badge type="action">+</Badge>
									)}
									{this.props.datas.skills.hardSkills.map(
										(skillGroup) => {
											const { groupName } = skillGroup;
											return skillGroup.skills.map(
												(skill, key) => {
													return (
														<Badge
															key={key}
															type="skillTechnic"
															group={groupName}
														>
															{skill}
														</Badge>
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
							<h6 className="client">
								{this.props.datas.clients[0].name}
							</h6>
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
		);
	}
}

export default CardExperienceBack;
