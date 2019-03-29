import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Media from 'react-bootstrap/Media';
import StoreInformationService, { StoreInformation } from '../services/store-information.js';

const STORE_INFO = new StoreInformationService();

class Header extends React.Component {

	static contextType = StoreInformation;

	navDropdownItemTreatments() {
		let treatments = [];
		if (this.context.data && this.context.data.treatments) {
			let c = this.context.data.treatments[0].children.length;

			console.log(this.context.data.treatments);
			for (let i = 0; i < c; i++) {
				let treatment = this.context.data.treatments[0].children[i].data;
				let eventKey = parseFloat("2." + (i + 2));
				console.log(eventKey);
				treatments.push(
					<NavDropdown.Item as={Nav.Link} href={treatment.url_path} eventKey={eventKey}>
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
				<Navbar bg="light" expand="lg">
					<Navbar.Brand>
						<Media>
							<img
								width={50}
								height={50}
								className="align-self-center mr-3"
								src={this.context.data.header.logo}
								alt="Face & Figure Beauty Salon Taunton Somerset"
							/>
							<Media.Body>
								<div className="align-self-center">
									<Nav.Link href="/" eventKey="1">
										{this.context.data.header.title}
									</Nav.Link>
								</div>
							</Media.Body>
						</Media>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto" activeKey="1" onSelect={k => this.handleSelect(k)}>
							<NavDropdown as={Nav.Item} title="Treatments" id="basic-nav-dropdown">
								<NavDropdown.Item as={Nav.Link} href="/treatments" eventKey="2.1">
									View All Treatments
								</NavDropdown.Item>
								{this.navDropdownItemTreatments()}
							</NavDropdown>
							<Nav.Item>
								<Nav.Link href="/contact" eventKey="3">
									Get In Contact
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			);
		} else {
			return "";
		}
	}
}
  
export default Header