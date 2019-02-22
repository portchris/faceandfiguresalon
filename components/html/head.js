import React from 'react';
import Head from 'next/head';


class HtmlHead extends React.Component {

	render(props) {
		return (
			<Head>
				<title>HELLO</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
		);
	}
}
  
export default HtmlHead