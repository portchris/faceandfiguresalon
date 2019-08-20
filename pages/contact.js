import React, { Component } from 'react';
import HtmlHead from '../components/html/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Loader from '../components/loader';
import StoreInformationService, { StoreInformation } from '../services/store-information';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ContactForm from '../components/contact-form';
import ContactInfo from '../components/contact-info';
import ContactTitle from '../components/contact-title';
import Styles from '../static/css/styles';


const REACT_VERSION = React.version;

class Contact extends Component {

	static contextType = StoreInformation;

	constructor(props) {
		super(props);
		this.state = props.initialState ? props.initialState : StoreInformation;
	}

	render() {
		console.log("React Version: " + REACT_VERSION);
		return (
			<React.Fragment>
				<HtmlHead />
				<StoreInformationService>
					<Header />
					<Loader />
					<Container>
						<Row>
							<ContactTitle />
						</Row>
						<Row>
							<ContactForm />
							<ContactInfo />
						</Row>
					</Container>
					<Footer />
					<Styles />
				</StoreInformationService>
			</React.Fragment>
		);
	}
}

export default Contact;