import React from 'react';
import ServiceProvider from './service-provider';
import Overlay from 'react-bootstrap/Overlay';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const defaultState = { 
	error: [],
	isLoading: false,
	loadingText: 'Loading...',
	result: {}
};

class StoreInformationService extends React.Component {

	constructor(props) {
		super(props);
		this.uri = (process.env.NODE_ENV !== 'production') ? "http://faceandfigure.portchris.co.uk/info/index/index" : "https://api.faceandfiguresalon.co.uk/info/index/index";
		this.service = new ServiceProvider();
		this.state = props.initialState ? props.initialState : defaultState;
		this.containerClass = "initial-loader";
		console.log(this.uri);
	}

	componentDidMount() {
		var self = this;
		this.service.get(
			this.uri
		).then(
			(res) => {
				console.log(res);
				self.setState({
					error: [],
					isLoading: true,
					loadingText: '',
					result: res.data
				});
			}
		).catch(
			(err) => {
				self.setState({
					error: [],
					isLoading: true,
					loadingText: 'Error',
					result: err
				});
			}
		);
	}
  
	render() {
		return (
			<React.Fragment>
				<Container fluid="true">
					<Row>
						<Col md={12}>
							<div className={this.containerClass}>{this.state.loadingText}</div>
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		);
	}
}

export default StoreInformationService;