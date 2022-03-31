import { Component } from 'react';
import './css/presentation.view.css';

// import './home.css';

class PresentationView extends Component {
	companiesLogos = [
		'logo-konexio.png',
		'logo-mpmc-wordmark.png',
		'logo-capgemini.png',
		'logo-transactis.png',
		'logo-societe-generale.png',
		'logo-lbp.svg',
		'logo-cdn.svg',
		'logo-schmidt.png',
		'logo-novartis.png',
		'logo-cd-68.png',
		'logo-pole-emploi.png',
		'logo-itce.jpg',
		'logo-air-liquide.jpg',
		'logo-mars-food.png',
		'logo-pwc.png',
		'logo-compaq.png',
	];
	render() {
		return (
			<section id="presentation">
				<h2>À propos de moi</h2>
				<div>
					<div className="presentaion-article">
						{/* <h3>D'où je viens</h3>
						<p></p> */}
						<p>
							Plus de <em>20 belles années</em> dans la plus
							grande ESN Française, ont contribuées à faire de moi
							un professionnel aigusé et adaptable.
						</p>
						<p>
							C'est auprès de clients, variées, grands comptes{' '}
							<em>
								(Société Générale, PriceWaterhouseCoopers,
								Novartis...)
							</em>
							, que je me suis affûté et exercé à nombre de
							métiers des systèmes de l'information{' '}
							<em>
								(Technicien systèmes et réseaux, intégrateur
								d'applicaions, analyste dévelopeur...)
							</em>
							, dans de nombreux secteurs d'activité et auprès
							d'une grande diversité de publics{' '}
							<em>
								(VIP, personnel administratif, ouvri-ères-ers,
								chef-fes-s de projet...)
							</em>
						</p>
					</div>
					{/* <div className="presentaion-article">
						<h3>Ce que je fais</h3>
						<p>
						
						</p>
						<p>
							
						</p>
						<p>
							
						</p>
					</div>
					<div className="presentaion-article">
						<h3>Vers où je veux aller</h3>
						<p>
							
						</p>
						<p>
							
						</p>
						<p>
						
						</p>
					</div> */}
				</div>
				<h2>Nous avons travaillé ensemble</h2>
				<div className="companies">
					{this.companiesLogos.map((companieLogo) => {
						return (
							<img
								className="companie-logo"
								src={`/images/companies/${companieLogo}`}
								alt="logo"
							/>
						);
					})}
				</div>
			</section>
		);
	}
}

export default PresentationView;
