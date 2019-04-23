import React from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import StoreInformationService, { StoreInformation } from '../services/store-information';

class Hero extends React.Component {

	static contextType = StoreInformation;

	componentDidUpdate() {
		let el = document.getElementsByClassName('text-spinner');
		if (el && el.length && el[0].childNodes && el[0].childNodes.length) {
			el[0].style.position = 'relative';
			let i = 0;
			let children = el[0].childNodes;
			for (let child in children) {
				if (children.hasOwnProperty(child) && children[child].nodeType === 1) {
					let c = children[child];
					c.style.position = 'absolute';
					// let slide = setInterval(this.animateHero(c), i);
					i += 3000;
				}
			}
		}
	}

	// animateHero(c) {
		
	// }

	render() {
		if (this.context.data && this.context.data.hero && this.context.data.hero.data) {
			return (
				<React.Fragment>
					<div className="row" dangerouslySetInnerHTML={{ __html: this.context.data.hero.data }} />
				</React.Fragment>
			);
		} else {
			return "";
		}
	}
}
  
export default Hero