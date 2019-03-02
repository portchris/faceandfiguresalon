import React from 'react';
import Link from 'next/link'
import { StoreInformation } from '../services/store-information.js';

class Header extends React.Component {

	static contextType = StoreInformation;

	render() {
		if (this.context.data && this.context.data.header) {
			return (
				<header>
					<h1>{this.context.data.header.title}</h1>
					<nav>
						<ul>
							<li>
								<Link href="/">
									<a>The Salon</a>
								</Link>
							</li>
							<li>
								<Link href="/treatments">
									<a>View Treatments</a>
								</Link>
							</li>
							<li>
								<Link href="/contact">
									<a>Get In Contact</a>
								</Link>
							</li>
						</ul>
					</nav>
				</header>
			);
		} else {
			return "";
		}
	}
}
  
export default Header