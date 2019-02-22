import React, { Component } from 'react';
import HtmlHead from '../components/html/head';
import Header from '../components/header';
import StoreInformationService from '../services/store-information.js';

const REACT_VERSION = React.version;

function Home() {
	console.log("React Version: " + REACT_VERSION);
	return (
		<React.Fragment>
			<HtmlHead />
			<StoreInformationService />
			<Header />
		</React.Fragment>
	);
}
  
export default Home