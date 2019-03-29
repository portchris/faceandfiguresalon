import React, { Component } from 'react';
import Link from 'next/link'
import HtmlHead from '../components/html/head';
import Header from '../components/header';
import Loader from '../components/loader';
import StoreInformationService, { StoreInformation } from '../services/store-information.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const REACT_VERSION = React.version;
const STORE_INFO = new StoreInformationService();

class Home extends Component {

	perRow = 3;

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
			let i = 0;
			let t = [];
			while (this.state.data.treatments[0].children.length > 0) {
				t.push(this.state.data.treatments[0].children.splice(0, this.perRow));
			}
			for (i; i < t.length; i++) {
				let x = 0;
				let tRow = [];
				let tSplice = t[i];
				let k = "t-row-" + (i + 1);
				for (x; x < tSplice.length; x++) {
					tRow.push(this.renderCardFragment(tSplice[x].data, (x + 1)));
				}
				treatments.push(
					<Row key={k}>
						{tRow}
					</Row>
				);
			}
		}
		return treatments;
	}

	renderCardFragment(treatment, eventKey) {
		return (
			<Col md={12 / this.perRow} key={"t-col-" + eventKey}>
				<Card>
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
			</Col>
		);
	}

	render() {
		console.log("React Version: " + REACT_VERSION);
		return (
			<React.Fragment>
				<HtmlHead />
				<StoreInformation.Provider value={this.state}>
					<Loader />
					<Header />
					<Container>
						{this.renderAvailableTreatments()}
					</Container>
				</StoreInformation.Provider>
			</React.Fragment>
		);
	}
}

export default Home;