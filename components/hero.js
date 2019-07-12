import React from 'react';
import { init } from 'ityped';
import StoreInformationService, { StoreInformation } from '../services/store-information';
import Particles from 'react-particles-js';

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
			this.particlesConfig = {
				"particles": {
					"number": {
						"value": 10,
						"density": {
							"enable": false,
							"value_area": 1000
						}
					},
					"shape": {
						"type": "images",
						"images": [
							{
								"src": this.context.data.uri + "/skin/frontend/rwd_faceandfigure/default/images/icon-leaf-1.png",
								"width": 20,
								"height": 20
							},
							{
								"src": this.context.data.uri + "/skin/frontend/rwd_faceandfigure/default/images/icon-leaf-2.png",
								"width": 20,
								"height": 20
							},
							{
								"src": this.context.data.uri + "/skin/frontend/rwd_faceandfigure/default/images/icon-leaf-3.png",
								"width": 20,
								"height": 20
							}
						]
					},
					"size": {
						"value": 10,
						"random": false,
						"anim": {
							"enable": false,
							"speed": 15,
							"size_min": 5,
							"sync": false
						}
					},
					"line_linked": {
						"enable": false,
					},
					"move": {
						"enable": true,
						"speed": 1,
						"direction": "right",
						"random": false,
						"straight": false,
						"out_mode": "out",
						"bounce": false,
						"attract": {
							"enable": false,
							"rotateX": 10,
							"rotateY": 0
						}
					}
				},
				"interactivity": {
					"detect_on": "canvas",
					"events": {
						"onhover": {
							"enable": false
						},
						"onclick": {
							"enable": false
						},
						"resize": true
					},
				},
				"retina_detect": true
			};
			return (
				<React.Fragment>
					<Particles
						className="leaves"
						params={ this.particlesConfig }
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