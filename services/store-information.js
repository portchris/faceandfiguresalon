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
		this.uri = (process.env.NODE_ENV !== 'production') ? "http://faceandfigure.portchris.co.uk/info/index/index" : "https://api.faceandfiguresalon.co.uk/info/index/index";
		this.service = new ServiceProvider();
		this.state = DEFAULT_STATE;
	}

	getStoreInfo() {
		return new Promise((resolve, reject) => {
			this.service.get(
				this.uri
			).then(
				(res) => {
					let s = res;
					s.error = [];
					s.isLoading = false;
					s.loadingText = 'Loaded';
					// this.state = s;
					console.log(s);
					resolve(s);
				}
			).catch(
				(err) => {
					let s = err;
					s.error = err;
					s.isLoading = false;
					s.loadingText = 'Error';
					// this.state = s;
					reject(s);
				}
			);
		});
	}
}

export default StoreInformationService;
export const StoreInformation = StoreInfo;
