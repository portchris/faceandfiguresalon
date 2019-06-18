import React from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import StoreInformationService, { StoreInformation } from '../services/store-information';

class Promo extends React.Component {

	static contextType = StoreInformation;

	render() {
		if (this.context.data && this.context.data.promo && this.context.data.promo.data) {
			return (
				<React.Fragment>
					<div id="promo" className="row" dangerouslySetInnerHTML={{ __html: this.context.data.promo.data }} />
				</React.Fragment>
			);
		} else {
			return "";
		}
	}
}
  
export default Promo