import { Component } from 'react';
import './css/cardExperience.css';
import '../../css/scrollbars.css';
import utils from '../../common/utils';

class CardExperienceFront extends Component {
	render() {
		return (
			<div className="card-front width-12 height-20">
				<div className="width-12 height-1">{/*empty*/}</div>
				{/**  Job title  **/}
				<div className="width-12 height-4">
					<h2>{this.props.datas.jobTitle.full}</h2>
					<div className="hr"></div>
				</div>
				{/**  date from  **/}
				<div className="width-6 height-2">
					<p className="text-left">
						De {utils.month(this.props.datas.dateStart)}
					</p>
					<p className="text-left">
						{utils.year(this.props.datas.dateStart)}
					</p>
				</div>
				{/**  date to  **/}
				<div className="width-6 height-2">
					<p className="text-right">
						À {utils.month(this.props.datas.dateEnd)}
					</p>
					<p className="text-right">
						{utils.year(this.props.datas.dateEnd)}
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
		);
	}
}

export default CardExperienceFront;
