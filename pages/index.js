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
import Styles from '../assets/css/main';


const REACT_VERSION = React.version;

class Home extends Component {

	static contextType = StoreInformation;

	render() {
		console.log("React Version: " + REACT_VERSION);
		return (
			<React.Fragment>
				<HtmlHead />
				<StoreInformationService>
					<Loader />
					<Header />
					<Container>
						<Hero />
						<Promo />
						<h1 className="vspace">Our Available Treatments</h1>
						<Treatments />
					</Container>
					<Footer />
					<Styles />
				</StoreInformationService>
			</React.Fragment>
		);
	}
}

export default Home;