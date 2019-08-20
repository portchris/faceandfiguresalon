import React from 'react';
import StoreInformationService, { StoreInformation } from '../../services/store-information';

const DELAY = 2000;

class Hero extends React.Component {

	static contextType = StoreInformation;

	/**
	 * @param {string} content 
	 */
	stripHtml(content) {
		let el = document.createElement("DIV");
		el.innerHTML = content;
		return el.textContent || el.innerText || "";
	}

	/**
	 * @return {string|React.Fragment}
	 */
	render() {
		if (this.context.data && this.context.data.main && this.context.data.main) {
			return (
				<React.Fragment>
					<div id="site-desc" className="row vspace">
						<div className="col-sm-6">
							<h2>{ this.stripHtml(this.context.data.main.description[0].title) }</h2>
							<p>{ this.stripHtml(this.context.data.main.description[0].content) }</p>
						</div>
						<div className="col-sm-6">
							<h2>{ this.stripHtml(this.context.data.main.description[1].title) }</h2>
							<p>{ this.stripHtml(this.context.data.main.description[1].content) }</p>
						</div>
					</div>
				</React.Fragment>
			);
		} else {
			return "";
		}
	}
}

export default Hero