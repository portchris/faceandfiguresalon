import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Media from 'react-bootstrap/Media';
import StoreInformationService, { StoreInformation } from '../services/store-information';

// const STORE_INFO = new StoreInformationService();

class Header extends React.Component {

	static contextType = StoreInformation;

	navDropdownItemTreatments() {
		let treatments = [];
		if (this.context.data && this.context.data.treatments) {
			let c = this.context.data.treatments[0].children.length;
			for (let i = 0; i < c; i++) {
				let treatment = this.context.data.treatments[0].children[i].data;
				let eventKey = parseFloat("2." + (i + 2));
				treatments.push(
					<NavDropdown.Item as={Nav.Link} href={treatment.url_path} key={eventKey}>
						{treatment.h1_title}
					</NavDropdown.Item>
				);
			}
		}
		return treatments;
	}

	handleSelect() {
		
	}

	render() {
		if (this.context.data && this.context.data.header) {
			return (
				<React.Fragment>
					<Navbar expand="lg">
						<div className="container">
							<Navbar.Brand>
								<Media>
									<img
										width={75}
										height={75}
										className="align-self-center mr-3"
										src={this.context.data.header.logo}
										alt="Face & Figure Beauty Salon Taunton Somerset"
									/>
									<Media.Body>
										<div className="align-self-center">
											<Link href="/" key="1">
												<a id="site-title">{this.context.data.header.title}</a>
											</Link>
										</div>
									</Media.Body>
								</Media>
							</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="mr-auto" activeKey="1" onSelect={k => this.handleSelect(k)}>
									<NavDropdown as={Nav.Item} title="Treatments" id="basic-nav-dropdown">
										<NavDropdown.Item as={Nav.Link} href="/treatments" key="2.1">
											View All Treatments
										</NavDropdown.Item>
										{this.navDropdownItemTreatments()}
									</NavDropdown>
									<Nav.Item>
										<Link href="/contact" key="3">
											<a>Get In Contact</a>
										</Link>
									</Nav.Item>
								</Nav>
							</Navbar.Collapse>
						</div>
					</Navbar>
				</React.Fragment>
			);
		} else {
			return "";
		}
	}
}
  
export default Header