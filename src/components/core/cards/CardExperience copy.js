import React, { Component } from 'react';

class CardExperience extends Component {
	monthDate(date) {
		const month = date;
		return month;
	}

	yearDate(date) {
		const year = date;
		return year;
	}

	render() {
		console.log(
			'components/cards/CardExperience.js render this.props.experience >>>',
			this.props.experience
		);
		return (
			<div class="cardExperience">
				<div class="flip front-card face height100">
					<div class="experience row height100">
						<div class="width100 empty height5"></div>

						<div class="width100 function height20">
							<h2>{this.props.experience.jobTitle.full}</h2>
							<hr />
						</div>

						<div class="width50 date-from height20">
							<p class="left">
								De{' '}
								{this.monthDate(
									this.props.experience.startDate
								)}
							</p>
							<p class="left">
								{this.yearDate(this.props.experience.startDate)}
							</p>
						</div>
						<div class="width50 date-to height20">
							<p class="right">
								À{' '}
								{this.monthDate(this.props.experience.EndDate)}
							</p>
							<p class="right">
								{this.yearDate(this.props.experience.EndDate)}
							</p>
						</div>

						<div class="col-12 employer height10">
							<h3>Capgemini</h3>
						</div>

						<div class="col-2 empty height15"></div>
						<div class="col-8 logo height15">
							<img
								class="img-fluid mx-auto d-block"
								src="./img/logos/companies/logo-capgemini.png"
								alt="Logo de Capgemini"
							/>
						</div>
						<div class="col-2 empty height15"></div>

						<div class="col-12 empty height5"></div>

						<div class="col-12 client height10">
							<span>Client : </span>
							<h3 class="inline">&nbsp;Transactis</h3>
						</div>

						<div class="col-2 empty height15"></div>
						<div class="col-8 logo height15">
							<img
								class="img-fluid mx-auto d-block"
								src="./img/logos/companies/logo-Transactis.png"
								alt="Logo de Transactis"
							/>
						</div>
						<div class="col-2 empty height15"></div>

						<div class="col-12 empty height5"></div>
					</div>
				</div>

				<div class="flip back-card face">
					<div class="row height100">
						<div class="width100 function height10">
							<h5>{this.props.experience.jobTitle.short}</h5>
						</div>

						<div class="width42 date-from height10 font-0-85">
							<p class="left">
								{this.monthDate(
									this.props.experience.startDate
								)}{' '}
								{this.yearDate(this.props.experience.startDate)}
							</p>
						</div>
						<div class="width17 down-line height5 font-0-85">
							&nbsp;
						</div>
						<div class="width42 date-to height10 font-0-85">
							<p class="right">
								{this.monthDate(this.props.experience.EndDate)}{' '}
								{this.yearDate(this.props.experience.EndDate)}
							</p>
						</div>
						<div class="width100 height65">
							<div class="articles">
								<article>
									<h6>Missions</h6>
									{this.props.experience.descriptions.full.map(
										(mission) => {
											return (
												<p class="font-0-85">
													{mission}
												</p>
											);
										}
									)}
								</article>

								<article>
									<h6>Environnement technique</h6>
									{this.props.experience.skills.hardSkills.map(
										(group) => {
											return (
												<ul>
													{group.skills.map(
														(skill) => {
															return (
																<li>{skill}</li>
															);
														}
													)}
												</ul>
											);
										}
									)}
								</article>
							</div>
						</div>
						<div class="width100 mini-logo logo height5">
							{/* <img
								class="img-fluid mx-auto d-block"
								src="./img/logos/companies/konexio.png"
								alt="Logo de Konexio"
							/> */}
						</div>

						<div class="col-9 employer height5">
							<h5>Capgemini</h5>
						</div>
						<div class="col-3 mini-logo logo height5">
							<img
								class="img-fluid mx-auto d-block"
								src="./img/logos/companies/logo-capgemini.png"
								alt="Logo de Capgemini"
							/>
						</div>

						<div class="col-9 client height5">
							<span class="font-0-85">Client : </span>
							<h5 class="inline">Transactis</h5>
						</div>
						<div class="col-3 mini-logo logo height5">
							<img
								class="img-fluid mx-auto d-block"
								src="./img/logos/companies/logo-Transactis.png"
								alt="Logo de Transactis"
							/>
						</div>

						<div class="width100 height5">
							<span class="font-0-85">Secteur d'activité : </span>
							<h6 class="inline">Centre de formation</h6>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CardExperience;
