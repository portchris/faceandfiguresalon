import React from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import StoreInformationService, { StoreInformation } from '../services/store-information';
import Parser from 'html-react-parser';

class Promo extends React.Component {

	static contextType = StoreInformation;

	render() {
		if (this.context.data && this.context.data.promo && this.context.data.promo.data) {
			return (
				<React.Fragment>
					<div id="promo" className="row">
						{Parser(this.context.data.promo.data, {
							replace: (domNode) => this.convertStrToReactFragment(
								domNode,
								domNode.name + "-promo-" + domNode.class + "-" + Math.random()
							)
						})}
					</div>
				</React.Fragment>
			);
		} else {
			return "";
		}
	}

	/**
	 * 
	 * @param {HTMLDivElement|String} html
	 * @returns {React.Fragment|null}
	 */
	convertStrToReactFragment(html, key) {

		const name = (html.name) ? html.name.toLowerCase() : "";
		const className = (html.attribs && html.attribs.class) ? html.attribs.class : "";
		if (name === 'a' && html.attribs && className.indexOf("btn") > -1) {
			return (
				<Button variant="primary">
					<Link id={html.attribs.id} className={className} href={html.attribs.href} key={key} data-key={key}>
						<a title={html.attribs.title} target={(html.attribs.target) ? html.attribs.target : null}>Read More</a>
					</Link>
				</Button>
			);
		}
	}
}

export default Promo