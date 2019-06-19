import React from 'react';
import Media from 'react-bootstrap/Media';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StoreInformationService, { StoreInformation } from '../services/store-information';

class ContactForm extends React.Component {

	static contextType = StoreInformation;

	componentDidUpdate() {
		let iframe = document.getElementById("contact-form-frame");
		let fn = this.debounce(() => this.resizeIFrameToFitContent(iframe), 250);
		this.resizeIFrameToFitContent(iframe);
		window.addEventListener('resize', fn);
	}

	render() {
		if (this.context.data && this.context.data.uri) {
			return (
				<React.Fragment>
					<Col md="6">
						<iframe src={this.context.data.uri + "info/index/form"} title="Face &amp; Figure Salon | Contact Form Frame" className="embed-responsive-item" id="contact-form-frame"></iframe>
					</Col>
				</React.Fragment>
			);
		} else {
			return "";
		}
	}

	resizeIFrameToFitContent(iFrame) {
		if (iFrame != null) {
			// console.log(iFrame.contentWindow.document.body.scrollHeight);
			// iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
		}
	}

	debounce(func, wait, immediate) {
		var timeout;
		return function () {
			var context = this, args = arguments;
			var later = function () {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};
}

export default ContactForm