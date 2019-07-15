import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col';
import StoreInformationService, { StoreInformation } from '../services/store-information';
import Link from 'next/link';

class Breadcrumbs extends React.Component {

	static contextType = StoreInformation;

	renderBreadcrumbs(data) {
		let r = [];
		let crumbs = window.location.pathname.split('/');
		let depth = crumbs.length - 1;
		let traverse = 0;
		if (data && data.length) {
			while (traverse <= depth) {
				if (typeof data[traverse] !== 'undefined') {
					let t = data[traverse];
					if (Array.isArray(t.children)) {
						let children = t.children;
						let treatments = children.flat(traverse);
						r.push(
							<li className="breadcrumb-item">
								<Link href={ t.data.url_path } key={ "breadcrumb-item-" + traverse }>
									<a title={ t.data.h1_title }>{ t.data.h1_title }</a>
								</Link>
							</li>
						);
						r.push(this.renderBreadcrumbItems(treatments, crumbs, (traverse + 2)));
					} else {
						r.push(
							<li className="breadcrumb-item active">
								<Link href={ t.data.url_path } key={ "breadcrumb-item-" + traverse }>
									<a className="active" title={ t.data.h1_title }>{ t.data.h1_title }</a>
								</Link>
							</li>
						);
					}
					if (Array.isArray(t.children)) {
						
					}
				}
				traverse++;
			}
			
		}
		return r;
	}

	/**
	 * 
	 * @param {Array} treatments 
	 * @param {Array} crumbs 
	 * @param {int} depth 
	 * @returns {React.Fragment} r
	 */
	renderBreadcrumbItems(treatments, crumbs, depth) {
		let r = [];
		if (Array.isArray(treatments)) {
			for (let i = 0; i < treatments.length; i++) {
				let t = treatments[i];
				if (t.data !== null && t.data.url_path !== null) {
					let paths = t.data.url_path.split("/");
					if (crumbs[depth] === paths[(paths.length - 1)]) {
						r.push(
							<li className="breadcrumb-item active">
								<Link href={ t.data.url_path } key={ "breadcrumb-item-" + i }>
									<a title={ t.data.h1_title }>{ t.data.h1_title }</a>
								</Link>
							</li>
						);
						break;
					}
				}
			}
		}
		return r;
	}

	render() {
		if (this.context.data && this.context.data.treatments) {
			return (
				<React.Fragment>
					<Breadcrumb>
						<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
						{ this.renderBreadcrumbs(this.context.data.treatments) }
					</Breadcrumb>
				</React.Fragment>
			);
		} else {
			return "";
		}
	}
}

export default Breadcrumbs