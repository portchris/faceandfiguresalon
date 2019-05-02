/**
 * This truly is a shocking way to style Next.js...
 */
import React from 'react';

class Styles extends React.Component {

	render() {
		return (
			<style jsx="true">{`

				.vspace, .row-with.vspace {
					margin-top: 25px;
					margin-bottom: 25px;
				}

				.vpadding {
					padding-top: 25px;
					padding-bottom: 25px; 
				}

				ul {
					padding: 0;
				}

				li {
					list-style: none;
					margin: 5px 0;
				}

				img.img-responsive {
					max-width: 100%;
					height: auto;
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

				.card-title {
					font-size: 18px;
					min-height: 70px;
				}

				#face-and-figure-salon-hero img {
					width: auto;
					max-height: 50px;
				}

				#face-and-figure-salon-hero .h2 {
					min-height: 40px;
				}

				.footer-connect img {
					max-width: 45px;
					border: 1px solid #333;
				}

				.footer-contact img {
					max-width: 25px;
				}

				.footer-location {

				}

				@keyframes rotating {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(360deg);
					}
				}
			`}	
			</style>
		);
	}
}

export default Styles