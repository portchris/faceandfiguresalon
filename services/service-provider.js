import React from 'react';
import axios from 'axios';
import ErrorBoundary from '../components/error-boundary';

class ServiceProvider extends React.Component {

	get(uri, headers = null) {
		if (headers == null) {
			this.headers = {
				"Access-Control-Allow-Origin": "*"
			};
		}
		this.uri = uri;
		return new Promise((resolve, reject) => {
			axios.get(
				this.uri, this.headers
			).then(
				(result) => {
					resolve(result);
				}
			).catch(
				(error) => {
					new Error(error);
					reject(error);
				}
			).finally(
				() => {
					
				}
			);
		});
	}  
}

export default ServiceProvider;