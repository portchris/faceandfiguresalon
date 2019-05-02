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
		console.log(StoreInformationService);
		if (this.context.data && this.context.data.header) {
			return (
				<React.Fragment>
					<footer>
						<Container>
							<Row>
								<Col md="4">
									<h3>Connect Via</h3>
									<ul className="row text-center footer-connect">
										<li className="col-md-4">
											<a href="https://www.facebook.com/face.and.figure.salon/" target="_blank" title="Contact Face and Figure Beauty Salon via Facebook">
												<img src={ this.context.uri_skin + "images/fb_logo.png" } alt="Contact Face &amp; Figure Salon Via Facebook" className="img-responsive"/>
											</a>
										</li>
										<li className="col-md-4">
											<a href="mailto:faceandfiguresalon@yahoo.co.uk" title="Contact Face and Figure Beauty Salon via email">
												<img src={ this.context.uri_skin + "images/contact-mail-icon.png" } alt="Contact Face &amp; Figure Salon Via E-mail" className="img-responsive"/>
											</a>
										</li>
										<li className="col-md-4">
											<a href="https://twitter.com/face_and_figure/" target="_blank" title="Contact Face and Figure Beauty Salon via Tiwtter">
												<img src={ this.context.uri_skin + "images/twitter_logo.png" } alt="Contact Face &amp; Figure Salon Via Twitter" className="img-responsive"/>
											</a>
										</li>
									</ul>
								</Col>
								<Col md="4">
									<div className="footer-contact">
										<h3>Say Hello</h3>
										<p>
											Not a fan of social media? No problem, contact us via more conventional means:<br/>
											<a href="tel:+447872907857" title="Call the salon">
												<img className="img-thumbnail float-left" src={ this.context.uri_skin + "images/face-and-figure-salon-phone.png" } alt="Call the salon"/>
												07872907857
											</a>
										</p>
										<p>
											<a href="mailto:faceandfiguresalon@yahoo.co.uk" title="Email the salon">
												<img className="img-thumbnail float-left" src={ this.context.uri_skin + "images/face-and-figure-salon-phone.png" } alt="Email the salon"/>
												faceandfiguresalon@yahoo.co.uk
											</a>
										</p>
									</div>
								</Col>
								<Col md="4">
									<div className="footer-location">
										<h3>Our Location</h3>
										<p><b>Face &amp; Figure Beauty Salon</b><br />1 Parkmead Monkton Heathfield<br />Taunton<br />Somerset<br />TA2 8PL</p>
										<a title="Find Face &amp; Figure Salon @ 1 Parkmead Monkton Heathfield Taunton Somerset TA2 8PL" target="_blank" href="https://www.google.com/maps/place/1+Parkmead,+Monkton+Heathfield,+Taunton+TA2+8PL/@51.0410594,-3.0667414,16z/data=!4m5!3m4!1s0x486df5eb6d144757:0xecaad4f66e6eca77!8m2!3d51.0368267!4d-3.0655316">
											<img src={ this.context.uri_skin + "images/face-and-figure-salon-location.png" } alt="Find Face &amp; Figure Salon @ 1 Parkmead Monkton Heathfield Taunton Somerset TA2 8PL" className="img-responsive" />
										</a>
									</div>
								</Col>
							</Row>
							<Row>
								<Col md="12">
									<p>Face &amp; Figure Salon | 2019 | Created by <a href="https://www.portchris.co.uk/" target="_blank" title="">Chris Rogers</a> of Portchris Ltd</p>
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