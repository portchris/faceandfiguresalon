import React from 'react';
import Head from 'next/head';
import { StoreInformation } from '../../services/store-information.js';


class HtmlHead extends React.Component {

	static contextType = StoreInformation;

	render(props) {
		if (this.context.data && this.context.data.head) {
			return (
				<Head>
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
					{this.context.data.head.data}
				</Head>
			);
		} else {
			let skinUrl = this.context.uri + "skin/frontend/rwd_faceandfigure/default/";
			return (
				<Head>
					<meta http-equiv="content-type" content="text/html; charset=utf-8" />
					<title>Face & Figure Beauty Salon | Taunton Somerset</title>
					<meta name="description" content="" />
					<meta name="keywords" content="" />
					<meta name="robots" content="" />
					<meta property="og:title" content="Face & Figure Beauty Salon | Taunton Somerset" /> 
					<meta property="og:description" content="" />  
					<meta property="og:image" content="" />
					<meta property="og:site_name" content=""/> 
					<meta property="og:url" content={this.context.uri} />
					<link rel="icon" href={skinUrl + "images/favicon.ico"} type="image/x-icon" />
					<link rel="shortcut icon" href={skinUrl + "images/favicon.ico"} type="image/x-icon" />
					<link rel="apple-touch-icon" sizes="57x57" href={skinUrl + "images/favicons/apple-touch-icon-57x57.png"} />
					<link rel="apple-touch-icon" sizes="60x60" href={skinUrl + "images/favicons/apple-touch-icon-60x60.png"} />
					<link rel="apple-touch-icon" sizes="72x72" href={skinUrl + "images/favicons/apple-touch-icon-72x72.png"} />
					<link rel="apple-touch-icon" sizes="76x76" href={skinUrl + "images/favicons/apple-touch-icon-76x76.png"} />
					<link rel="apple-touch-icon" sizes="114x114" href={skinUrl + "images/favicons/apple-touch-icon-114x114.png"} />
					<link rel="apple-touch-icon" sizes="120x120" href={skinUrl + "images/favicons/apple-touch-icon-120x120.png"} />
					<link rel="apple-touch-icon" sizes="144x144" href={skinUrl + "images/favicons/apple-touch-icon-144x144.png"} />
					<link rel="apple-touch-icon" sizes="152x152" href={skinUrl + "images/favicons/apple-touch-icon-152x152.png"} />
					<link rel="apple-touch-icon" sizes="180x180" href={skinUrl + "images/favicons/apple-touch-icon-180x180.png"} />
					<link rel="icon" type="image/png" href={skinUrl + "images/favicons/favicon-32x32.png"} sizes="32x32" />
					<link rel="icon" type="image/png" href={skinUrl + "images/favicons/android-chrome-192x192.png"} sizes="192x192" />
					<link rel="icon" type="image/png" href={skinUrl + "images/favicons/favicon-96x96.png"} sizes="96x96" />
					<link rel="icon" type="image/png" href={skinUrl + "images/favicons/favicon-16x16.png"} sizes="16x16" />
					<link rel="manifest" href={skinUrl + "images/favicons/manifest.json"} />
					<link rel="shortcut icon" href={skinUrl + "images/favicons/favicon.ico"} />
					<meta name="msapplication-TileColor" content="#74704a" />
					<meta name="msapplication-TileImage" content={skinUrl + "images/favicons/mstile-144x144.png"} />
					<meta name="msapplication-config" content={skinUrl + "images/favicons/browserconfig.xml"} />
					<meta name="theme-color" content="#74704a" />
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous" />	
				</Head>
			);
		}
	}
}
  
export default HtmlHead