import React from 'react';
import Head from 'next/head';


class HtmlHead extends React.Component {

	render(props) {
		return (
			<Head>
				<title>HELLO</title>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
		);
	}
}
  
export default HtmlHead