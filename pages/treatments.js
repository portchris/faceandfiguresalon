import React, { Component } from 'react';
import HtmlHead from '../components/html/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Loader from '../components/loader';
import StoreInformationService, { StoreInformation } from '../services/store-information';
import Container from 'react-bootstrap/Container';
import Treatments from '../components/treatments';
import Styles from '../static/css/styles';


const REACT_VERSION = React.version;

class TreatmentsAll extends Component {

	static contextType = StoreInformation;

	render() {
		console.log("React Version: " + REACT_VERSION);
		return (
			<React.Fragment>
				<HtmlHead />
				<StoreInformationService>
					<Header />
					<Loader />
					<Container>
						<Treatments full={true} />
					</Container>
					<Footer />
					<Styles />
				</StoreInformationService>
			</React.Fragment>
		);
	}
}

export default TreatmentsAll;