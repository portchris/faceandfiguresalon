import React from 'react';
import Col from 'react-bootstrap/Col';
import StoreInformationService, { StoreInformation } from '../services/store-information';

class ContactInfo extends React.Component {

	static contextType = StoreInformation;


	render() {
		if (this.context.data && this.context.data.contact) {
			return (
				<React.Fragment>
					<Col md="6">
					</Col>
				</React.Fragment>
			);
		} else {
			return "";
		}
	}
}

export default ContactInfo