import React from 'react';
import Col from 'react-bootstrap/Col';
import StoreInformationService, { StoreInformation } from '../services/store-information';

class ContactInfo extends React.Component {

	static contextType = StoreInformation;

	stripHtml(content) {
		let el = document.createElement("DIV");
		el.innerHTML = content;
		return el.textContent || el.innerText || "";
	}

	/**
	 * @param {array} information 
	 * @return {array} r
	 */
	getContactInfo(information) {
		let r = [];
		for (let i = 0; i < information.length; i++) {
			let info = information[i];
			r.push(
				<h2>{ this.stripHtml(info.title) } </h2>,
				<p>{ this.stripHtml(info.content) } </p>
			);
		}
		return r;
	}

	render() {
		if (this.context.data && this.context.data.contact) {
			return (
				<React.Fragment>
					<Col md="6">
						{ this.getContactInfo(this.context.data.contact.info) }
					</Col>
				</React.Fragment>
			);
		} else {
			return "";
		}
	}
}

export default ContactInfo