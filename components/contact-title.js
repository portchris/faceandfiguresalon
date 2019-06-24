import React from 'react';
import Col from 'react-bootstrap/Col';
import StoreInformationService, { StoreInformation } from '../services/store-information';

class ContactTitle extends React.Component {

	static contextType = StoreInformation;

	stripHtml(content) {
		let el = document.createElement("DIV");
		el.innerHTML = content;
		return el.textContent || el.innerText || "";
	}

	/**
	 * 
	 * @param {object} info 
	 */
	getContactTitle(info) {
		return (
			<Col md="12">
				<h1>{ this.stripHtml(info.title) }</h1>
				<p>{ this.stripHtml(info.content) }</p>
			</Col>
		);
	}

	render() {
		if (this.context.data && this.context.data.contact) {
			return (
				<React.Fragment>
					{ this.getContactTitle(this.context.data.contact) }
				</React.Fragment>
			);
		} else {
			return "";
		}
	}
}

export default ContactTitle