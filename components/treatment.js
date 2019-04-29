import React from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import StoreInformationService, { StoreInformation } from '../services/store-information';

const perRow = 3;

class Treatment extends React.Component {

	static contextType = StoreInformation;

	constructor(props) {
		super(props);
		this.state = props.initialState ? props.initialState : StoreInformation;
	}

	getTreatment() {
		let r = [];
		let treatment = null;
		let ts = this.context.data.treatments[0].children;
		for (let i = 0; i < ts.length; i++) {
			let t = ts[i];
			if (t && t.data && t.data.url_path && t.data.url_path.indexOf(this.props.slug) !== -1) {
				treatment = t;
				break;
			}
		}
		if (treatment !== null) {
			let k = "treatment-" + this.props.slug;
			r.push(
				<div className="row" key={this.props.slug + "-1"}>
					<div className="col-md-12">
						<h1>{treatment.data.h1_title}</h1>
					</div>
				</div>,
				<div className="row" key={this.props.slug + "-2"}>
					<div className="col-md-12">
						<img src={treatment.data.img} alt={treatment.data.h1_title} />
					</div>
				</div>
			);
		}
		return r;
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