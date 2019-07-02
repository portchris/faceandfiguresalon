import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col';
import StoreInformationService, { StoreInformation } from '../services/store-information';

class Breadcrumbs extends React.Component {

	static contextType = StoreInformation;

	renderBreadcrumbs(data) {
		let r = [];
		let crumbs = window.location.pathname.split('/');
		let depth = crumbs.length - 1;
		if (data && data.length) {
			let children = data[0].children;
			let treatments = children.flat(depth);
			// while (traverse > 0) {

			// 	traverse--;
			// }
			if (Array.isArray(treatments)) {
				for (let i = 0; i < treatments.length; i++) {
					let t = treatments[i];
					if (t.data !== null && t.data.url_path !== null) {
						let paths = t.data.url_path.split("/");
						console.log(crumbs[depth]);
						if (crumbs[depth] === paths[(paths.length - 1)]) {
							r.push(
								<Breadcrumb.Item href={ t.data.url_path } active>
									{ t.data.h1_title }
								</Breadcrumb.Item>
							);
							break;
						}
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
						<Breadcrumb.Item href={this.context.data.uri}>Home</Breadcrumb.Item>
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