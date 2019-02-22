import React from 'react';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';

class StoreInformationService extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: []
		};
		this.uri = (process.env.NODE_ENV !== 'production') ? "http://faceandfigure.portchris.co.uk/info/index/index" : "https://api.faceandfiguresalon.co.uk/info/index/index";
		console.log(this.uri);
	}
  
	render() {
		return (
			<React.Fragment>
				<Get url={this.uri} params={{id: "12345"}}> 
				{
					(error, response, isLoading, makeRequest, axios) => {
						if (error) {
							return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
						} else if (isLoading) {
							return (<div>Loading...</div>)
						} else if (response !== null) {
							return (<div>{response.data.message} <button onClick={() => makeRequest({ params: { refresh: true } })}>Refresh</button></div>)
						}
						return (<div>Default message before request is made.</div>)
					}
				}
				</Get>
			</React.Fragment>
		);
	}
}

export default StoreInformationService;