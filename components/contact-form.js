import React from 'react';
import Media from 'react-bootstrap/Media';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StoreInformationService, { StoreInformation } from '../services/store-information';

class ContactForm extends React.Component {

	static contextType = StoreInformation;

	render() {
		if (this.context.data && this.context.data.uri) {
			return (
				<React.Fragment>
					<iframe src={this.context.data.uri + "contact"} title="Face &amp; Figure Salon | Contact Form Frame"></iframe>
				</React.Fragment>
			);
		} else {
			return "";
		}
	}
}
  
export default ContactForm