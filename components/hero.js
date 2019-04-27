import React from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import StoreInformationService, { StoreInformation } from '../services/store-information';

const DELAY = 2000;

class Hero extends React.Component {

	static contextType = StoreInformation;

	componentDidUpdate() {
		let el = document.getElementsByClassName('text-spinner');
		if (el && el.length && el[0].childNodes && el[0].childNodes.length) {
			let i = 1;
			let h = el[0].offsetHeight;
			let w = el[0].offsetWidth;
			let children = el[0].childNodes;
			let slides = [];
			el[0].style.width = '100%';
			el[0].style.height = h;
			for (let child in children) {
				if (children.hasOwnProperty(child) && children[child].nodeType === 1) {
					let c = children[child];
					let overlay = document.createElement("span");
					h = (c.clientHeight > h) ? c.clientHeight : h;
					overlay.className += "overlay";
					overlay.style.clip = "rect(0 " + w + "px " + h + "px 0)";
					c.appendChild(overlay);
					slides.push(c);
					i++;
				}
			}
			setTimeout(() => {
				this.stagger(slides, DELAY, (slide) => {
					let overlay = null;
					for (let i = 0; i < slide.childNodes.length; i++) {
						console.log(slide.childNodes[i].className);
						if (slide.childNodes[i].className === "overlay") {
							overlay = slide.childNodes[i];
							break;
						}        
					}
					if (overlay !== null) {
						this.animateHero(overlay, w, h, i);
					}
				});
			}, DELAY);
		}
	}

	animateHero(slide, maxWidth, height, i) {
		let start = Date.now();
		let timePassed = Math.floor((Date.now() - start) / 100.0) * 100;
		let clipWidth = parseInt(slide.style.clip.replace(/[^0-9]/g, "").substr(1, 3));
		if (clipWidth >= maxWidth) {
			slide.style.clip = "rect(0 " + maxWidth + "px " + height + "px " + maxWidth + "px)";
		} else {
			slide.style.clip = "rect(0 " + maxWidth + "px " + height + " px 0)";
		}
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