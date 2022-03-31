import { Component } from 'react';
import './css/footerMain.css';

class FooterMain extends Component {
	socials = [
		{
			name: 'LinkedIn',
			link: 'https://www.linkedin.com/in/didier-pascarel/',
			icon: this.props.path + '/images/icons/icon-linkedin.svg',
		},
		{
			name: 'GitHub',
			link: 'https://github.com/DDA209',
			icon: this.props.path + '/images/icons/icon-github.svg',
		},
	];
	contacts = [
		{
			type: 'mail',
			content: 'didier.pascarel1@gmail.com',
			icon: this.props.path + '/images/icons/icon-email.svg',
		},
		// {type:"Téléphone", content:"+33(0)6........", icon:"/images/icons/icon-phone.svg"},
	];
	render() {
		return (
			<footer id="footer">
				{this.contacts.length > 0 && (
					<div id="contact">
						{' '}
						{this.contacts.map((contact, key) => {
							return (
								<div className="contact">
									<a
										href={`mailto:${contact.content}`}
										key={key}
										// target="_blank"
										// rel="noreferrer"
									>
										<img
											className="footer-icon"
											src={contact.icon}
											alt="icone de mail"
										/>
									</a>
									<h2>didier.pascarel1@gmail.com</h2>
								</div>
							);
						})}
					</div>
				)}

				{this.socials.length > 0 && (
					<div className="socials">
						<ul>
							{this.socials.map((social, key) => {
								return (
									<li key={key}>
										<a
											href={social.link}
											target="_blank"
											rel="noreferrer"
										>
											<img
												className="footer-icon"
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
