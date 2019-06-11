import React, { Component } from 'react';
import HtmlHead from '../../components/html/head';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Loader from '../../components/loader';
import Treatment from '../../components/treatment';
import StoreInformationService, { StoreInformation } from '../../services/store-information';
import Container from 'react-bootstrap/Container';
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
							<Treatment slug={SLUG} />
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