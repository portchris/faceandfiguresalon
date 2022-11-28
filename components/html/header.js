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
                    <div className="px-6 w-full flex flex-wrap items-center justify-between">
                        <div className="flex items-center md:collapse">
                            <button
                                className="navbar-toggler border-0 py-3 md:hidden leading-none text-xl bg-transparent text-white hover:text-gray-200 focus:text-gray-300 transition-shadow duration-150 ease-in-out mr-2"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContentY"
                                aria-controls="navbarSupportedContentY"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    className="w-5"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div className="navbar-logo items-left" id="brand">
                            <ul className="navbar-nav mr-auto md:flex md:flex-row justify-start">
                                <li className='nav-item'>
                                    <a className="flex items-center text-white hover:text-gray-200 focus:text-gray-300 mt-2 md:mt-0 mr-1" href="/">
                                        <img
                                            width={this.logo.dimensions.width / 7}
                                            src={this.logo.url}
                                            alt={this.logo.alt}
                                            loading="lazy"
                                        />
                                        <h1 className="h1 text-2xl text-white hover:text-gray-200 focus:text-gray-300">
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
            </header >
        );
    }

    imageLoader(src, width, quality) {

        return `https://github.com/portchris/cleverlyeverly/blob/main/public/${src}?raw=true&w=${width}&q=${quality || 75}`;
    }
}

export default Header;