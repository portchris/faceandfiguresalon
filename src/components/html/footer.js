import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {

    render() {
        return (

            <footer className='footer vspace'>
                <span>
                    Developed by {' '}
                </span>
                <Link href="https://www.portchris.co.uk/" target="_blank" rel="noopener noreferrer">
                    ROG-WEB GLOBAL ltd
                </Link>
            </footer>
        );
    }
}

export default Footer;