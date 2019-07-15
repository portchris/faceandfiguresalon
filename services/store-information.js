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
	updateStoreInfo: () => { }
};
const URI_LOCAL = 'http://api.faceandfigure.portchris.co.uk/';
const URI_LIVE = 'https://api.faceandfiguresalon.co.uk/';
const StoreInfo = React.createContext(DEFAULT_STATE);
const SKIN_DIRECTORY = 'skin/frontend/rwd_faceandfigure/default/';
const ONE_DAY = 60 * 60 * 24 * 1000;

class StoreInformationService extends React.Component {

	static contextType = StoreInfo;

	constructor(props) {

		super(props);
		this.uri = (process.env.NODE_ENV !== 'production') ? URI_LOCAL : URI_LIVE;
		this.service = new ServiceProvider();
		this.state = DEFAULT_STATE;
		this.state.uri = this.uri;
		this.state.uri_skin = this.uri + SKIN_DIRECTORY;
		this.children = props.children;
	}

	componentDidMount() {
		
		let URL_PARAMS = new URLSearchParams(window.location.search);
		let NO_CACHE = URL_PARAMS.get('NO_CACHE');
		let ENV = URL_PARAMS.get('ENV');
		let t = +new Date();
		let data = localStorage.getItem('ffdata');
		this.uri = (ENV === 'local') ? URI_LOCAL : URI_LIVE;
		if (parseInt(NO_CACHE) === 1 && data !== null) {
			console.log("REFRESHING CACHE");
			localStorage.removeItem('ffdata');
		}
		if (data === null || data.createdAt < (t - ONE_DAY)) {
			this.getStoreInfo(
			).then(
				(state) => {
					this.handleContextChange(state);
				}
			).catch(
				(err) => {
					this.handleContextChange(err);
				}
			);
		} else {
			this.handleContextChange(JSON.parse(data));
		}
	}

	handleContextChange(x) {
		console.log(x);
		this.setState(x);
	}

	stripHtml(content) {
		let el = document.createElement("DIV");
		el.innerHTML = content;
		return el.textContent || el.innerText || "";
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
					s.url = this.uri.replace("api.", "");
					s.uri_skin = this.uri + SKIN_DIRECTORY;
					s.createdAt = +new Date();
					localStorage.setItem('ffdata', JSON.stringify(s));
					resolve(s);
				}
			).catch(
				(err) => {
					let s = err;
					s.error = err;
					s.isLoading = false;
					s.loadingText = 'Error';
					s.uri = this.uri;
					s.url = this.uri.replace("api.", "");
					s.uri_skin = this.uri + SKIN_DIRECTORY;
					reject(s);
				}
			);
		});
	}

	getImgPath(img = "") {
		return this.uri + SKIN_DIRECTORY + "images/" + img;
	}

	render() {
		return (
			<React.Fragment>
				<StoreInformation.Provider value={this.state}>
					{this.children}
				</StoreInformation.Provider>
			</React.Fragment>
		);
	}
}

export default StoreInformationService;
export const StoreInformation = StoreInfo;
