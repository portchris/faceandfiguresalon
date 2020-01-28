import React, { Component } from 'react';
import HtmlHead from '../components/html/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Loader from '../components/loader';
import StoreInformationService, { StoreInformation } from '../services/store-information';
import Container from 'react-bootstrap/Container';
import Treatments from '../components/treatments';
import Promo from '../components/promo';
import Hero from '../components/hero';
import Styles from '../static/css/styles';
import Description from '../components/html/description';


const REACT_VERSION = React.version;

class Home extends Component {

	static contextType = StoreInformation;

	render() {
		console.log("React Version: " + REACT_VERSION);
		return (
			<React.Fragment>
				<HtmlHead />
				<Styles />
				<StoreInformationService>
					<Header />
					<Loader />
					<Container>
						<Hero />
						<Promo />
						<Treatments />
						<Description />
					</Container>
					<Footer />
				</StoreInformationService>
			</React.Fragment>
		);
	}
}

export default Home;