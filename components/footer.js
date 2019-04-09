import React from 'react';
import Media from 'react-bootstrap/Media';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StoreInformationService, { StoreInformation } from '../services/store-information';

// const STORE_INFO = new StoreInformationService();

class Footer extends React.Component {

	static contextType = StoreInformation;

	render() {
		if (this.context.data) {
			return (
				<React.Fragment>
					<footer>
						<Container>
							<Row>
								<Col md="3">
								</Col>
								<Col md="3">
								</Col>
								<Col md="3">
								</Col>
							</Row>
							<Row>
								<Col md="12">
									<p>Create by Chris Rogers</p>
								</Col>
							</Row>
						</Container>
					</footer>
				</React.Fragment>
			);
		} else {
			return "";
		}
	}
}
  
export default Footer