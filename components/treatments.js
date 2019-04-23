import React from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import StoreInformationService, { StoreInformation } from '../services/store-information';

const perRow = 3;

class Treatments extends React.Component {

	static contextType = StoreInformation;

	renderAvailableTreatments(data) {
		let treatments = [];
		if (data && data.length) {
			let i = 0;
			let t = [];
			while (data[0].children.length) {
				t.push(data[0].children.splice(0, perRow));
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
			<Col md={12 / perRow} key={"t-col-" + eventKey}>
				<Card>
					<Card.Img variant="top" src={this.context.data.uri + "/media/catalog/category/" + treatment.image} />
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
		if (this.context.data && this.context.data.treatments) {
			return (
				<React.Fragment>
					{this.renderAvailableTreatments(this.context.data.treatments)}
				</React.Fragment>
			);
		} else {
			return "";
		}
	}
}
  
export default Treatments