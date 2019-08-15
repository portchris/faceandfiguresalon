import React from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import StoreInformationService, { StoreInformation } from '../services/store-information';

const perRow = 1;

class Treatment extends React.Component {

	static contextType = StoreInformation;

	constructor(props) {
		super(props);
		this.state = props.initialState ? props.initialState : StoreInformation;
	}

	/**
	 * 
	 * @param 	{string} slug
	 * @return {object} treatment 
	 */
	getTreatmentByKey(slug) {

		let treatment = null;
		let ts = this.context.data.treatments[0].children;
		for (let i = 0; i < ts.length; i++) {
			let t = ts[i];
			if (t && t.data && t.data.url_path && t.data.url_path.indexOf(this.props.slug) !== -1) {
				treatment = t;
				break;
			}
		}
		return treatment;
	}

	getTreatment() {

		let i = 0;
		let r = [];
		let treatment = this.getTreatmentByKey(this.props.slug);
		let children = this.getTreatmentChildren(treatment);
		if (treatment !== null) {
			r.push(
				<Row key={this.props.slug + "-1"}>
					<Col md="12">
						<h1>{treatment.data.h1_title}</h1>
					</Col>
				</Row>,
				<Row className="vspace" key={this.props.slug + "-2"}>
					<Col md="12">
						<img src={this.context.data.uri + "/media/catalog/category/" + treatment.data.image} alt={treatment.data.h1_title} className="img-responsive" />
					</Col>
				</Row>,
				<Row className="vspace" key={this.props.slug + "-3"}>
					<Col md="12">
						<p>{this.renderTreatmentBody(treatment.data.content)}</p>
					</Col>
				</Row>
			);
			if (children && children.length) {
				r.push(
					<Row key={this.props.slug + "-type-heading"}>
						<Col md="12">
							<h2>Types of { treatment.data.h1_title } Available</h2>
						</Col>
					</Row>
				)
				for (i; i < children.length; i++) {
					r.push(children[i]);
				}
			}
		}
		return r;
	}

	/**
	 * @param {object} treatment
	 * @return {array} children
	 */
	getTreatmentChildren(treatment) {
		let i = 0;
		let children = [];
		if (treatment !== null && treatment.children !== null) {
			let t = [];
			while (treatment.children.length) {
				t.push(treatment.children.splice(0, perRow));
			}
			for (i; i < t.length; i++) {
				let x = 0;
				let tRow = [];
				let tSplice = t[i];
				let k = "t-row-" + (i + 1);
				for (x; x < tSplice.length; x++) {
					tRow.push(this.renderCardFragment(tSplice[x].data, (x + 1)));
				}
				children.push(
					<Row key={k} className="no-gutters">
						{tRow}
					</Row>
				);
			}
		}
		return children;
	}

	/**
	 * 
	 * @param {object} treatment 
	 * @param {int} eventKey 
	 */
	renderCardFragment(treatment, eventKey) {
		return (
			<Col md={12 / perRow} key={"t-child-col-" + eventKey}>
				<Card className="vspace-xs">
					<Card.Body>
						<Card.Title>{treatment.h1_title}</Card.Title>
						<div>{this.renderCardBody(treatment.content)}</div>
					</Card.Body>
				</Card>
			</Col>
		);
	}

	renderCardBody(content) {
		let el = document.createElement("DIV");
		el.innerHTML = content.substring(0, 200) + "...";
		return el.textContent || el.innerText || "";
	}

	renderTreatmentBody(content) {
		let el = document.createElement("DIV");
		el.innerHTML = content;
		return el.textContent || el.innerText || "";
	}

	render() {
		if (this.context.data && this.context.data.treatments) {
			return (
				<React.Fragment>
					{this.getTreatment()}
				</React.Fragment>
			);
		} else {
			return "";
		}
	}
}

export default Treatment