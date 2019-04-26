import React from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import StoreInformationService, { StoreInformation } from '../services/store-information';

const DELAY = 6000;

class Hero extends React.Component {

	static contextType = StoreInformation;

	componentDidUpdate() {
		let el = document.getElementsByClassName('text-spinner');
		if (el && el.length && el[0].childNodes && el[0].childNodes.length) {
			el[0].style.position = 'relative';
			el[0].style.width = '100%';
			let i = 1;
			let h = el[0].offsetHeight;
			let w = el[0].offsetWidth;
			let children = el[0].childNodes;
			let slides = [];
			for (let child in children) {
				if (children.hasOwnProperty(child) && children[child].nodeType === 1) {
					let c = children[child];
					h = (c.clientHeight > h) ? c.clientHeight : h;
					c.style.position = 'absolute';
					c.style.transition = 'all 1s ease-in-out';
					c.style.clip = (i === 1) ? "rect(0 " + w + "px " + h + "px 0)" : "rect(0 0 " + h + "px 0)";
					slides.push(c);
					i++;
				}
			}
			i = 1;
			this.stagger(slides, DELAY, (slide) => {
				setTimeout(() => this.animateHero(slide, w, h), DELAY, i);
				i++;
			});
			el[0].style.height = h;
		}
	}

	animateHero(slide, maxWidth, height, i) {
		let start = Date.now();
		let delay = 1000;
		console.log(slide);
		let timer = setInterval(() => {

			// How much time passed from the start?
			let timePassed = Math.floor((Date.now() - start) / 100.0) * 100;
			let clipWidth = parseInt(slide.style.clip.replace(/[^0-9]/g, "").substr(1, 3));

			// if (timePassed >= 2000) {
			// 	clearInterval(timer); // finish the animation after 2 seconds
			// 	return;
			// }

			console.log(timePassed);
			if (timePassed % DELAY === 0 || timePassed === 0) {
				if (clipWidth >= maxWidth) {
					slide.style.clip = "rect(0 0 " + height + "px 0)";
				} else {
					slide.style.clip = "rect(0 " + maxWidth + "px " + height + "px 0)";
				}
			}

		}, delay);
	}

	clipElement(slide, timePassed, right, bottom) {
		console.log(timePassed);
		slide.style.clip = "rect(0 " + (timePassed / 2) + "px " + bottom + "px 0)";
	}

	stagger(targets, interval, action) {
		for (var i = 0, maxi = targets.length; i < maxi; i++) {
			(() => {
				var target = targets[i];
				setTimeout(() => { action(target); }, interval * i);
			})();
		}
	}

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