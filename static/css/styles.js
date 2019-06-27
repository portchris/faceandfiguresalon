/**
 * This truly is a shocking way to style Next.js...
 */
import React from 'react';

class Styles extends React.Component {

	render() {
		return (
			<style jsx="true">{`
				
				@import url('https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap');

				body {
					color: #333;
					font-size: 14px;
				}

				.vspace, .row-with.vspace {
					margin-top: 25px;
					margin-bottom: 25px;
				}

				.vspace-xs {
					margin-top: 12.5px;
					margin-bottom: 12.5px;
				}

				.vpadding {
					padding-top: 25px;
					padding-bottom: 25px; 
				}

				a {
					color: #FFA838;
				}

				a:hover {
					color: #7D589E;
				}

				.btn a {
					color: #FFF;
				}

				ul {
					padding: 0;
				}

				li {
					list-style: none;
					margin: 5px 0;
				}

				h1, .h1, #site-title {
					font-family: 'Kaushan Script', Georgia,serif, cursive;
					font-size: 30px;
					color: #333;
				}

				#site-title {
					font-size: 35px;
				}

				h2, .h2 {
					color: #333;
					font-size: 24px;
				}

				h3, .h3 {
					color: #333;
					font-size: 18px;
				}

				h4, .h4 {
					color: #333;
					font-size: 16px;
					font-weight: bold;
				}

				h5, .h5, h6, .h6 {
					color: #333;
					font-weight: bold;
				}

				img.img-responsive {
					max-width: 100%;
					height: auto;
				}

				.req {
					color: red !important;
				}

				.text-spinner li {
					position: relative;
				}

				.text-spinner li span.overlay {
					display: block;
					position: absolute;
					top: 0;
					left: 0;
					background: #FFF;
					width: 100%;
					height: 100%;
					transition: all 1s ease-in-out;
				}

				.initial-loader img {
					max-width: 100px;
				}

				nav.navbar {
					background-color: #7D589E;
					font-size: 18px;
					margin-bottom: 30px;
					padding-bottom: 0;
					padding-top; 0;
				}

				nav a.nav-link, nav.navbar a, #site-title, 
				.navbar-light .navbar-nav .nav-link, 
				.navbar-light .navbar-nav .nav-link:focus,
				.navbar-light .navbar-nav .nav-link:hover,
				nav.navbar a:hover,
				nav.navbar a:focus {
					color: #FFF;
					text-decoration: none;
				}

				nav .media-body {
					padding-top: 8px;
				}

				.navbar-light .navbar-nav .nav-link:hover,
				nav.navbar a:hover {
					color: #EEE;
				}

				.nav-item {
					padding-left: 5px;
					padding-right: 5px;
				}

				.nav-item:last-child {
					padding-top: 8px;
				}

				.center {
					margin: auto;
					text-align: center;
					width: 50%;
					padding: 10px;
				}

				.img-thumbnail {
					border: 0;
					border-radius: 0;
					
				}

				.rotating {
					animation: rotating 2s linear infinite;
				}

				.btn {
					color: #7d589e;
					border: solid 1px #7d589e;
					border-radius: 0;
				}

				.btn.btn-default, .btn.btn-primary {
					color: #FFF;
					background: #FFA838;
					border-color: #CC7400;
					text-shadow: none;
				}

				.btn.btn-default:hover, .btn.btn-primary:hover {
					background: #CC7400;
				}

				.btn.btn-default:hover a, .btn.btn-primary:hover a {
					text-decoration: none;
				}

				.card-title {
					font-size: 18px;
					min-height: 70px;
				}

				.card img, .card-img-top {
					max-height: 261px;
				}

				#face-and-figure-salon-hero {
					padding-top: 10%;
					padding-bottom: 10%;
				}

				#face-and-figure-salon-hero img {
					width: auto;
					max-height: 50px;
				}

				#face-and-figure-salon-hero .h2 {
					min-height: 40px;
				}

				.usp {
					border-radius: 100%;
					background: #EEE;
					width: 300px !important;
					height: 300px !important;
					overflow: hidden;
					margin: 0 10px;
					text-align: center;
					padding: 20px 50px;
				}

				.usp img {
					max-width: 50px;
				}

				#site-desc {
					margin-top: 70px;
				}

				footer {
					border-top: 1px solid #333;
					margin-top: 50px;
					padding-top: 20px;
				}

				.footer-connect img {
					max-width: 45px;
					border: 1px solid #333;
					border-radius: 5px;
				}

				.footer-connect li {
					text-align: left;
					margin-top: 10px;
				}

				.footer-connect li span {
					margin-left: 10px;
					color: #333;
				}

				.footer-contact img {
					max-width: 25px;
				}

				.footer-location {

				}

				#contact-form-frame {
					border: none;
					height: 750px;
					width: 100%;
				}

				.treatment-full .card-body {
					padding-left: 15px;
					padding-right: 15px;
				}

				.treatment-full .card-title {
					min-height: 43px;
				}

				@keyframes rotating {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(360deg);
					}
				}
				@media only screen and (max-width: 1200px) {
					.card img, .card-img-top {
						max-height: 218px;
					}
				}
				@media only screen and (max-width: 991px) {
					.usp {
						border-radius: 10px;
						width: 100% !important;
						height: auto !important;
						padding: 20px;
						overflow: visible;
					}
					.card img, .card-img-top {
						max-height: 157px;
					}
				}

				@media only screen and (max-width: 768px) {
					.usp {
						border-radius: 100%;
						width: 300px !important;
						height: 300px !important;
						padding: 20px 50px;
						overflow: hidden;
						margin: 20px auto;
					}
					#site-title {
						font-size: 25px;
					}
					#site-logo {
						max-width: 50px;
						max-height: 50px;
					}
					nav .media-body {
						padding-top: 4px;
					}
					.card img, .card-img-top {
						max-height: none;
					}
				}
			`}	
			</style>
		);
	}
}

export default Styles