import React from 'react';
import Media from 'react-bootstrap/Media';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StoreInformationService, { StoreInformation } from '../services/store-information';
// import IMG_FACEBOOK from '../assets/img/fb_logo.png';
// import IMG_TWITTER from '../assets/img/twitter_logo.png'; 
// import IMG_EMAIL from '../assets/img/contact-mail-icon.png';

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
									{/* <img src={IMG_FACEBOOK} alt="Contact Face &amp Figure Salon Via Facebook" />; */}
								</Col>
								<Col md="3">
									{/* <img src={IMG_TWITTER} alt="Contact Face &amp Figure Salon Via Twitter" />; */}
								</Col>
								<Col md="3">
									{/* <img src={IMG_EMAIL} alt="Contact Face &amp Figure Salon Via E-mail" />; */}
								</Col>
							</Row>
							<Row>
								<Col md="12">
									<p>Created by Chris Rogers 2019 of Portchris Ltd</p>
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