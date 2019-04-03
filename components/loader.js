import React from 'react';
import { StoreInformation } from '../services/store-information';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import logo from '../assets/img/logo-face-and-figure-salon.png';

class Loader extends React.Component {

	static contextType = StoreInformation;

	constructor(props) {
		super(props);
		this.containerClass = "initial-loader";
	}

	render() {
		if (this.context.isLoading) {
			return (
				<Container fluid="true">
					<Row>
						<Col md={12}>
							<div className={this.containerClass}>{this.context.loadingText}</div>
						</Col>
					</Row>
				</Container>
			);
		} else {
			return "";
		}
	}
}
  
export default Loader