import React, { Component } from 'react';

class Header extends Component {

    /**
     * @var {Object}
     */
    static logo;

    /**
     * @var {String}
     */
    static title;

    /**
     * @var {String}
     */
    static width;

    /**
     * @var {String}
     */
    static height;

    /**
     * @var {String}
     */
    static loader;

    constructor(props) {

        super(props);
        this.logo = props.logo;
        this.title = String(props.title);
        this.loader = String(props.loader);
        this.width = String(props.width);
        this.height = String(props.height);
    }

    render() {

        if (!this.logo || !this.title) {
            return (<React.Fragment></React.Fragment>);
        }

        return (
            <header className='header'>
                <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
                    <div className="px-6 w-full flex flex-wrap items-center justify-between overflow-hidden">
                        <aside id="responsive-menu" className="w-5/6 transition-transform ease-in-out md:collapse" aria-label="Sidebar">
                            <div className="px-3 py-4 overflow-y-auto">
                                <ul className="space-y-2">
                                    <li>
                                        <a href="/" target="_blank"
                                            className="flex items-center p-2 text-base font-normal text-gray-200 rounded-lg">
                                            <svg className="flex-shrink-0 w-6 h-6 text-gray-200 transition duration-75 group-hover:text-gray-200"
                                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                                </path>
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/treatments"
                                            className="flex items-center p-2 text-base font-normal text-gray-200 rounded-lg">
                                            <svg className="flex-shrink-0 w-6 h-6 text-gray-200 transition duration-75 group-hover:text-gray-200"
                                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap">Treatments</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/contact" target="_blank"
                                            className="flex items-center p-2 text-base font-normal text-gray-200 rounded-lg">
                                            <svg className="flex-shrink-0 w-6 h-6 text-gray-200 transition duration-75 group-hover:text-gray-200"
                                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
                                                </path>
                                                <path
                                                    d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
                                                </path>
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap">Contact The Salon</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                        <div className="flex items-center md:collapse w-1/6 transition-transform ease-in-out">
                            <button
                                class="group flex h-20 w-20 cursor-pointer items-center justify-center p-2"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContentY"
                                aria-controls="navbarSupportedContentY"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                onClick={this.toggleMobileNavigation}>
                                <div class="space-y-2">
                                    <span class="block h-1 w-10 origin-center rounded-full bg-white transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
                                    <span class="block h-1 w-8 origin-center rounded-full bg-white transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
                                </div>
                            </button>
                        </div>
                        <div className="navbar-logo items-left w-5/6 hover:absolute right-72" id="brand">
                            <ul className="navbar-nav mr-auto md:flex md:flex-row justify-start">
                                <li className='nav-item'>
                                    <a className="flex items-center text-white hover:text-gray-200 focus:text-gray-300 mt-2 md:mt-0 mr-1" href="/">
                                        <img
                                            width={this.logo.dimensions.width / 7}
                                            src={this.logo.url}
                                            alt={this.logo.alt}
                                            loading="lazy"
                                        />
                                        <h1 className="h1 text-xl sm:text-2xl text-white hover:text-gray-200 focus:text-gray-300">
                                            {this.title}
                                        </h1>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-collapse grow items-center collapse md:visible" id="navbarSupportedContentY">
                            <ul className="navbar-nav mr-auto md:flex md:flex-row justify-end">
                                <li className="nav-item">
                                    <a className="nav-link block px-4 py-4 text-white hover:text-gray-200 focus:text-gray-300 transition duration-150 ease-in-out" href="/" data-mdb-ripple="true" data-mdb-ripple-color="light">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link block px-4 py-4 text-white hover:text-gray-200 focus:text-gray-300 transition duration-150 ease-in-out" href="/treatments" data-mdb-ripple="true" data-mdb-ripple-color="light">Treatments</a>
                                </li>
                                <li className="nav-item mb-2 md:mb-0">
                                    <a className="nav-link block px-4 py-4 text-white hover:text-gray-200 focus:text-gray-300 transition duration-150 ease-in-out" href="/contact" data-mdb-ripple="true" data-mdb-ripple-color="light">Contact The Salon</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="text-center bg-gray-50 text-gray-800 py-20 px-6">
                    <h1 className="text-5xl font-bold mt-0 mb-6">Heading</h1>
                    <h3 className="text-3xl font-bold mb-8">Subeading</h3>
                    <a className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
                </div>
            </header>
        );
    }

    toggleMobileNavigation() {

        console.log("here");
        const brand = document.getElementById('brand');
        const aside = document.getElementById('responsive-menu');
        if (aside.length && aside.classList.contains('active')) {
            aside.classList.toggle("w-5/6");
            aside.classList.toggle("active");
        }
        if (brand.length && brand.classList.contains('active')) {
            brand.classList.toggle("w-5/6");
            brand.classList.toggle("active");
            brand.classList.toggle("absolute");
        }
    }

    imageLoader(src, width, quality) {

        return `https://github.com/portchris/cleverlyeverly/blob/main/public/${src}?raw=true&w=${width}&q=${quality || 75}`;
    }
}

export default Header;