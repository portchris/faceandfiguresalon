import React from 'react';
import StoreInformationService, { StoreInformation } from '../../services/store-information';

const DELAY = 2000;

class Hero extends React.Component {

	static contextType = StoreInformation;

	render() {
		if (this.context.data && this.context.data.main && this.context.data.main) {
			return (
				<React.Fragment>
					<div id="site-desc" class="row vspace">
						<div class="col-sm-6">
							<h2>{ this.context.data.main.description[0].title }</h2>
							<p>{ this.context.data.main.description[0].content }</p>
						</div>
						<div class="col-sm-6">
							<h2>{ this.context.data.main.description[1].title }</h2>
							<p>{ this.context.data.main.description[1].content }</p>
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