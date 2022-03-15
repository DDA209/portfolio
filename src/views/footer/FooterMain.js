import { Component } from 'react';
import './css/footerMain.css';

class FooterMain extends Component {
	render() {
		return (
			<footer>
				<div id="footer-socials" className="socials">
					<ul>
						<li>LinkedIn</li>
						<li>GitHub</li>
					</ul>
				</div>
				<div id="sitemap"></div>
			</footer>
		);
	}
}

export default FooterMain;
