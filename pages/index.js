import React, { Component } from 'react';
import HtmlHead from '../components/html/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Loader from '../components/loader';
import StoreInformationService, { StoreInformation } from '../services/store-information';
import Container from 'react-bootstrap/Container';
import Treatments from '../components/treatments';

const REACT_VERSION = React.version;

class Home extends Component {

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
					<Loader />
					<Header />
					<Container>
						<Treatments />
					</Container>
					<Footer />
				</StoreInformationService>
			</React.Fragment>
		);
	}
}

export default Home;