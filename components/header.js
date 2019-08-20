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

	/**
	 * @returns {Array} treatments
	 */
	navDropdownItemTreatments() {

		let treatments = [];
		if (this.context.data && this.context.data.treatments) {
			let c = this.context.data.treatments[0].children.length;
			for (let i = 0; i < c; i++) {
				let treatment = this.context.data.treatments[0].children[i].data;
				let eventKey = parseFloat("2." + (i + 2));
				let relUrl = "/" + treatment.url_path.replace(/^(?:\/\/|[^\/]+)*\//, "");
				treatments.push(
					<Link href={relUrl} key={eventKey}>
						<a className="dropdown-item nav-link" title={treatment.h1_title}>{treatment.h1_title}</a>
					</Link>
				);
			}
		}
		return treatments;
	}

	/**
	 * @param {object} event
	 */
	handleSelect(event) {
		// Erm...
	}

	/**
	 * @returns {React.Fragment}
	 */
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
										id="site-logo"
									/>
									<Media.Body>
										<div className="align-self-center">
											<Link href="/" key="1">
												<a id="site-title" title={this.context.data.header.title}>{this.context.data.header.title}</a>
											</Link>
										</div>
									</Media.Body>
								</Media>
							</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="mr-auto" onSelect={k => this.handleSelect(k)}>
									<NavDropdown as={Nav.Item} title="Treatments" id="basic-nav-dropdown">
										<Link href="/treatments" key="2.1">
											<a className="dropdown-item nav-link" title="View All Treatments">View All Treatments</a>
										</Link>
										{this.navDropdownItemTreatments()}
									</NavDropdown>
									<Nav.Item>
										<Link href="/contact" key="3">
											<a title="Get In Contact">Get In Contact</a>
										</Link>
									</Nav.Item>
								</Nav>
							</Navbar.Collapse>
						</div>
					</Navbar>
				</React.Fragment>
			);
		} else {
			return (
				<React.Fragment>
					<Navbar expand="lg">
						<div className="container">
							<Navbar.Brand>
								<Media>
									<Media.Body>
										<div className="align-self-center">
											<Link href="/" key="static-nav-1">
												<a id="site-title" title="Face &amp; Figure Salon">Face &amp; Figure Salon</a>
											</Link>
										</div>
									</Media.Body>
								</Media>
							</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-static-navbar-nav" />
							<Navbar.Collapse id="basic-static-navbar-nav">
								<Nav className="mr-auto" onSelect={k => this.handleSelect(k)}>
									<Nav.Item>
										<Link href="/contact" key="static-nav-2">
											<a title="Get In Contact">Get In Contact</a>
										</Link>
									</Nav.Item>
									<Nav.Item>
										<Link href="/contact" key="static-nav-3">
											<a title="Get In Contact">Get In Contact</a>
										</Link>
									</Nav.Item>
								</Nav>
							</Navbar.Collapse>
						</div>
					</Navbar>
				</React.Fragment>
			);
		}
	}
}

export default Header