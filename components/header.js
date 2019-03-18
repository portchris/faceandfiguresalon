import React from 'react';
import Link from 'next/link'
import { StoreInformation } from '../services/store-information.js';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {

	static contextType = StoreInformation;

	render() {
		if (this.context.data && this.context.data.header) {
			return (
				<Navbar bg="light" expand="lg">
					<Navbar.Brand>
						<Link href="/">
							{this.context.data.header.title}
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link>
								<Link href="/">
									<a>The Salon</a>
								</Link>
							</Nav.Link>
							<NavDropdown title="Treatments" id="basic-nav-dropdown">
								<NavDropdown.Item>
									<Link href="/treatments">
										<a>View All Treatments</a>
									</Link>
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link>
							</Nav.Link>
							<Nav.Link>
								<Link href="/contact">
									<a>Get In Contact</a>
								</Link>
							</Nav.Link>
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