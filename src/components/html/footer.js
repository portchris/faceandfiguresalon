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
                <a href="https://www.flaticon.com/free-icons/reward" title="reward icons">Reward icons created by Freepik - Flaticon</a>
            </footer>
        );
    }
}

export default Footer;