import React from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import StoreInformationService, { StoreInformation } from '../services/store-information';

const PARAGRAPH_ELEMENTS = ["p", "a", "span", "h1", "h2", "h3", "h4", "h5", "h6", "b", "i", "#text"];

class Promo extends React.Component {

	static contextType = StoreInformation;

	render() {
		if (this.context.data && this.context.data.promo && this.context.data.promo.data) {
			const layout = this.extractBootstrapLayout(this.context.data.promo.data);
			return (
				<React.Fragment>
					<div id="promo" className="row">{layout}</div>
				</React.Fragment>
			);
		} else {
			return "";
		}
	}

	/**
	 * @param {String|HTMLDivElement}
	 */
	extractBootstrapLayout(html) {

		var layout = [];
		var reactFragments = [];
		var el = document.createElement("div");
		var maxDepth = 0;
		el.innerHTML = html;
		this.walkTheDOM(
			el,
			(node) => {
				// let childFragments = [];
				// if (node.children && node.children.length) {
				// 	childFragments = this.renderChildren(node);
				// }
				if (node.nodeName && node.textContent.length > 2) {
					node.depth = this.getElementDepth(el, node);
					maxDepth = (node.depth > maxDepth) ? node.depth : maxDepth;
					let classNameKey = (node.className) ? node.className.replace(" ", "-") + "-" : "";
					let key = node.nodeName + "-promo-" + classNameKey + Math.random() + "-" + node.depth;
					this.convertStrToReactFragment(
						node,
						"BLAH",
						key,
						(reactFragment) => {
							let c = reactFragments.length - 1;
							let prev = (reactFragments[c]) ? reactFragments[c] : false;
							reactFragments.push({
								fragment: reactFragment,
								depth: node.depth,
								id: key,
								parent: (node.depth > 0 && prev && prev.depth !== node.depth) ? reactFragments[c].id : null
							});
						}
					);
				}
			}
		);
		reactFragments.sort((a, b) => (a.depth > b.depth) ? 1 : -1);
		for (let i in reactFragments) {
			let element = reactFragments[i];
			let parent = element.parent;
			if (parent) {
				// let p = layout.filter((e) => {
				// 	console.log(e.props["data-key"]); 
				// 	return (e.props["data-key"] === parent) ? e : false;
				// });
				// console.log(p);				
				// p.props.children.push(element);
			} else {
				layout.push(element.fragment);
			}
		}
		console.log(reactFragments);
		console.log(layout);
		return layout;
	}

	/**
	 * @param {HTMLDivElement} node 
	 * @return {React.Fragment[]} childFragments
	 */
	// renderChildren(node) {

	// 	let childFragments = [];
	// 	for (let i in node.children) {
	// 		let child = node.children[i];
	// 		console.log(child);
	// 		if (child.nodeName) {
	// 			let nodeName = child.nodeName.toLowerCase();
	// 			console.log(nodeName);
	// 			if (PARAGRAPH_ELEMENTS.includes(nodeName)) {
	// 				node.children[i].skip = true;
	// 				this.convertStrToReactFragment(
	// 					child,
	// 					child.innerText,
	// 					(reactFragment) => {
	// 						childFragments.push(reactFragment);
	// 					}
	// 				);
	// 			} else if (nodeName === "div" && child.children && child.children.length) {
	// 				// let childrenChildren = this.renderChildren(child);
	// 				// child.children = childrenChildren;
	// 				// childFragments.push(child);
	// 			}
	// 		}
	// 	}
	// 	return childFragments;
	// }

	/**
	 * 
	 * @param {HTMLDivElement} parent 
	 * @param {HTMLDivElement} descendant
	 * @return {BigInteger} depth 
	 */
	getElementDepth(parent, descendant) {

		let depth = 0;
		let el = descendant;
		while (el && descendant.parentNode !== parent) {
			depth++;
			el = el.parentNode;
		}
		return depth;
	}

	/**
	 * 
	 * @param {HTMLDivElement} node 
	 * @param {CallableFunction} func 
	 */
	walkTheDOM(node, func) {

		func(node);
		node = node.firstChild;
		while (node) {
			this.walkTheDOM(node, func);
			node = node.nextSibling;
		}
	}

	/**
	 * 
	 * @param {HTMLDivElement|String} html
	 * @param {String|React.Fragment[]} value 
	 * @param {CallableFunction} fnc 
	 */
	convertStrToReactFragment(html, value, key, fnc) {

		switch (html.nodeName.toLowerCase()) {
			case 'div':
				fnc(<div id={html.id} className={html.className} key={key} data-key={key}>{value}</div>);
				break;
			case 'p':
				fnc(<p id={html.id} className={html.className} key={key} data-key={key}>{value}</p>);
				break;
			case 'a':
				fnc(
					<Button variant="primary">
						<Link id={html.id} className={html.className} href={html.href} key={key} data-key={key}>
							<a title={value} target={html.target}>{value}</a>
						</Link>
					</Button>
				);
				break;
			default:
				break;
		}
	}

	// textNodeValuesToArray(node) {
	// 	if (typeof node === "string") {
	// 		node = document.getElementById(node);
	// 	}

	// 	walkTheDOM(node, pushText);

	// 	return arrayOfText;
	// }

	/**
	 * 
	 * @param {String} searchStr 
	 * @param {String} str 
	 * @param {Boolean} caseSensitive 
	 * @return {Array} indices
	 */
	getIndicesOf(searchStr, str, caseSensitive) {
		var searchStrLen = searchStr.length;
		if (searchStrLen == 0) {
			return [];
		}
		var startIndex = 0, index, indices = [];
		if (!caseSensitive) {
			str = str.toLowerCase();
			searchStr = searchStr.toLowerCase();
		}
		while ((index = str.indexOf(searchStr, startIndex)) > -1) {
			indices.push(index);
			startIndex = index + searchStrLen;
		}
		return indices;
	}
}

export default Promo