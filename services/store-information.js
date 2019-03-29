import React from 'react';
import ServiceProvider from './service-provider';


const DEFAULT_STATE = {
	error: [],
	isLoading: true,
	loadingText: 'Loading...',
	statusText: '',
	request: {},
	headers: {},
	data: {},
	updateStoreInfo: () => {}
};
const StoreInfo = React.createContext(DEFAULT_STATE);

class StoreInformationService {

	constructor() {
		this.uri = (process.env.NODE_ENV !== 'production') ? "http://faceandfigure.portchris.co.uk/" : "https://api.faceandfiguresalon.co.uk/";
		this.service = new ServiceProvider();
		this.state = DEFAULT_STATE;
		this.state.uri = this.uri;
	}

	getStoreInfo() {
		return new Promise((resolve, reject) => {
			this.service.get(
				this.uri + "info/index/index"
			).then(
				(res) => {
					let s = res;
					s.error = [];
					s.isLoading = false;
					s.loadingText = 'Loaded';
					s.uri = this.uri;
					console.log(s);
					// this.setState(s);
					resolve(s);
				}
			).catch(
				(err) => {
					let s = err;
					s.error = err;
					s.isLoading = false;
					s.loadingText = 'Error';
					s.uri = this.uri;
					reject(s);
				}
			);
		});
	}
}

export default StoreInformationService;
export const StoreInformation = StoreInfo;
