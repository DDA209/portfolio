import { Component } from 'react';
import './css/footerMain.css';

class FooterMain extends Component {
	socials = [
		{ name: 'LinkedIn', link: '', icon: '/images/icons/icon-linkedin.svg' },
		{ name: 'GitHub', link: '', icon: '/images/icons/icon-github.svg' },
	];
	contacts = [
		{ type: '', content: '', icon: '/images/icons/icon-mail.svg' },
		// {type:"Téléphone", content:"+33(0)6........", icon:"/images/icons/icon-phone.svg"},
	];
	render() {
		return (
			<footer id="footer">
				<div id="contact"></div>

				{this.socials.length > 0 && (
					<div className="socials">
						<ul>
							{this.socials.map((social, key) => {
								return (
									<li key={key}>
										<a href={social.link}>
											<img
												className="footerIcon"
												src={social.icon}
												alt={`Icon de ${social.link}`}
											/>
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				)}
			</footer>
		);
	}
}

export default FooterMain;
