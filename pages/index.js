import React, { Component } from 'react';
import Link from 'next/link'
import HtmlHead from '../components/html/head';
import Header from '../components/header';
import Loader from '../components/loader';
import StoreInformationService, { StoreInformation } from '../services/store-information.js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const REACT_VERSION = React.version;
const STORE_INFO = new StoreInformationService();

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = props.initialState ? props.initialState : STORE_INFO.state;
	}

	componentDidMount() {
		STORE_INFO.getStoreInfo(
		).then(
			(state) => {
				this.setState(state);
			}
		).catch(
			(err) => {
				this.setState(err);
			}
		);
	}

	renderAvailableTreatments() {
		let treatments = [];
		if (this.state.data && this.state.data.treatments) {
			let c = this.state.data.treatments[0].children.length;
			for (let i = 0; i < c; i++) {
				let treatment = this.state.data.treatments[0].children[i].data;
				treatments.push(
					<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src={this.state.data.uri + "/media/catalog/category/" + treatment.image} />
						<Card.Body>
							<Card.Title>{treatment.h1_title}</Card.Title>
							<Button variant="primary">
								<Link href={treatment.url_path}>
									<a>View Treatment</a>
								</Link>
							</Button>
						</Card.Body>
					</Card>
				);
			}
		}
		return treatments;
	}

	render() {
		console.log("React Version: " + REACT_VERSION);
		return (
			<React.Fragment>
				<HtmlHead />
				<StoreInformation.Provider value={this.state}>
					<Loader />
					<Header />
					{this.renderAvailableTreatments()}
				</StoreInformation.Provider>
			</React.Fragment>
		);
	}
}

export default Home;