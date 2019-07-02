import React, { Component } from 'react';
import HtmlHead from '../../components/html/head';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Loader from '../../components/loader';
import Treatment from '../../components/treatment';
import StoreInformationService, { StoreInformation } from '../../services/store-information';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from '../../components/contact-form';
import Breadcrumbs from '../../components/breadcrumbs';
import Styles from '../../static/css/styles';

const SLUG = "allergy-sensitivity-testing-remedies";

class AllergySensitivityTestingRemedies extends Component {

	static contextType = StoreInformation;

	render() {
		// if (this.context.data && this.context.data.uri) {
			return (
				<React.Fragment>
					<HtmlHead />
					<StoreInformationService>
						<Loader />
						<Header />
						<Container>
							<Row>
								<Col md="12">
									<Breadcrumbs />
								</Col>
							</Row>
							<Row>
								<Col md="6">
									<Treatment slug={SLUG} />
								</Col>
								<Col md="6">
									<ContactForm formClass="treatment-form" />
								</Col>
							</Row>
						</Container>
						<Footer />
						<Styles />
					</StoreInformationService>
				</React.Fragment>
			);
		// } else {
		// 	return "";		
		// }
	}
}

export default AllergySensitivityTestingRemedies;