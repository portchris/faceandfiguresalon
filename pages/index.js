import React, { Component } from 'react';
import HtmlHead from '../components/html/head';
import Header from '../components/header';
import Loader from '../components/loader';
import StoreInformationService, { StoreInformation } from '../services/store-information.js';

const REACT_VERSION = React.version;
const STORE_INFO = new StoreInformationService();

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = props.initialState ? props.initialState : STORE_INFO.state;
	}

	componentDidMount() {
		STORE_INFO.getStoreInfo(
		).then(
			(state) => { 
				this.setState(state); 
			}
		).catch(
			(err) => {
				this.setState(err);
			}
		);
	}

	render() {
		console.log("React Version: " + REACT_VERSION);
		return (
			<React.Fragment>
				<HtmlHead />
				<StoreInformation.Provider value={this.state}>
					<Loader />
					<Header />
				</StoreInformation.Provider>
			</React.Fragment>
		);
	}
}
  
export default Home;