import React from 'react';
import { StoreInformation } from '../services/store-information';
// import logo from '../static/img/logo-face-and-figure-salon.png';

class Loader extends React.Component {

	static contextType = StoreInformation;

	constructor(props) {
		super(props);
		this.containerClass = "initial-loader center";
	}

	render() {
		if (this.context.isLoading) {
			let img = this.context.url + "skin/frontend/rwd_faceandfigure/default/images/logo-face-and-figure-salon.png";
			return (
				<div className={this.containerClass}>
					<img className="rotating" src={img} alt={this.context.loadingText} />
					<p>{this.context.loadingText}</p>
				</div>	
			);
		} else {
			return "";
		}
	}
}
  
export default Loader