import React from 'react';
import { init } from 'ityped';
import StoreInformationService, { StoreInformation } from '../services/store-information';
import Particles from 'react-particles-js';

const DELAY = 2000;

class Hero extends React.Component {

	static contextType = StoreInformation;

	componentDidUpdate() {
		let el = document.querySelector('#face-and-figure-salon-hero h1:last-child');
		if (el && this.heros && this.heros.length) {
			/*ignore jslint start*/
			// eslint-disable-next-line no-undef
			init(el, { showCursor: false, strings: this.heros, typeSpeed: 50, backSpeed: 10, backDelay: 3000 });
			/*ignore jslint end*/
		}
	}

	componentWillUnmount() {
		let heroTextSpinner = document.getElementById('heroTextSpinner');
		if (heroTextSpinner) {
			heroTextSpinner.remove();
		}
	}

	mapList(arrayLike, fn) {
		var ret = [], i = -1, len = arrayLike.length;
		while (++i < len) ret[i] = fn(arrayLike[i]);
		return ret;
	}

	getText(node) {
		if (node.nodeType === 3) return node.data;
		var txt = '';
		if (node = node.firstChild) do {
			txt += this.getText(node);
		} while (node = node.nextSibling);
		return txt;
	}

	convertHeroData(data) {
		let r = [];
		let el = document.createElement('div');
		el.innerHTML = data;
		if (el.getElementsByTagName('li') !== null) {
			r = this.mapList(el.getElementsByTagName('li'), (li) => this.getText(li));
		}
		return r;
	}

	render() {
		if (this.context.data && this.context.data.hero && this.context.data.hero.data) {
			this.heros = this.convertHeroData(this.context.data.hero.data.content);
			return (
				<React.Fragment>
					<Particles 
						params={{
							particles: {
								line_linked: {
									shadow: {
										enable: true,
										color: "#3CA9D1",
										blur: 5
									}
								}
							}
						}}
					  	style={{
							width: '100%'
						}}
					/>
					<div id="hero" className="row">
						<div id="face-and-figure-salon-hero" className="col-md-12">
							<h1>{this.context.data.hero.data.title}</h1>
							<h1 className="h2">{}</h1>
						</div>
					</div>
				</React.Fragment>
			);
		} else {
			return "";
		}
	}
}

export default Hero