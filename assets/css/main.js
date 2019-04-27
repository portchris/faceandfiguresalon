/**
 * This truly is a shocking way to style Next.js...
 */
import React from 'react';

class Styles extends React.Component {

	render() {
		return (
			<style jsx>{`

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
			`}	
			</style>
		);
	}
}

export default Styles